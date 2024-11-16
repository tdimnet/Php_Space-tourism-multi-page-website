FROM php:8.3-apache AS base

WORKDIR /var/www/html
RUN a2enmod rewrite


FROM base AS build

# Installing Composer (need to have Git install before)
RUN apt-get update 
RUN apt-get install git -y
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# Installing Node.JS in order to use Sass on dev
RUN apt-get install unzip -y
RUN curl -fsSL https://fnm.vercel.app/install | bash

# Besoin sur le build de l'app
# Set FNM environment
ENV FNM_DIR="/root/.fnm"
ENV PATH="/root/.fnm:/root/.fnm/aliases/default/bin:$PATH"

RUN /bin/bash -c "source /root/.bashrc && fnm install 20 && fnm use 20"


FROM build as prodbuild
# Copying both composer and package json files
COPY composer.json .
COPY package*.json .

# Installing Node.JS and Php dependencies
RUN composer install
RUN npm ci
RUN npm run sass:build


FROM base AS prod
COPY --from=prodbuild ./vendor ./vendor
COPY --from=prodbuild ./public ./public

# Copying project files
COPY index.php .

