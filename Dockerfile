FROM php:8.3-apache AS base

WORKDIR /var/www/html
RUN a2enmod rewrite


FROM base AS dev

# Installing Composer (need to have Git install before)
RUN apt-get update 
RUN apt-get install git -y
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installing Node.JS in order to use Sass on dev
RUN apt-get install unzip -y
RUN curl -fsSL https://fnm.vercel.app/install | bash

# Set up fnm environment variables and use node
ENV FNM_DIR="/root/.fnm"
ENV PATH="$FNM_DIR:$PATH"

# Initialize fnm and install Node.js version 20
RUN /bin/bash -c "source /root/.bashrc && eval \"$(fnm env)\" && fnm install 20 && fnm use 20"


FROM dev as build
# Copying both composer and package json files
COPY composer.json .
COPY package*.json .

# Copying images, JavaScript, and Sass files
COPY public ./public
COPY sass ./sass

# Installing Node.JS and Php dependencies
RUN composer install
RUN npm ci

# Building Sass to CSS in compressed mode
RUN npm run sass:build


FROM base AS prod
# Copying Php lib, built Sass to CSS files, and all JS and imgs stuff
COPY --from=build /var/www/html/vendor ./vendor
COPY --from=build /var/www/html/public ./public

# Copying project files
COPY index.php .
COPY views ./views
COPY .htaccess .
