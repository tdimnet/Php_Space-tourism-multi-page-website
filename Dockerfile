FROM php:8.3-apache

WORKDIR /var/www/html
RUN a2enmod rewrite

COPY index.php .

RUN apt-get update 

# Installin Composer (need to have Git install before)
RUN apt-get install git -y
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installing Node.JS in order to use Sass on dev
RUN apt-get install unzip -y
RUN curl -fsSL https://fnm.vercel.app/install | bash

# Set FNM environment
ENV FNM_DIR="/root/.fnm"
ENV PATH="/root/.fnm:/root/.fnm/aliases/default/bin:$PATH"

RUN /bin/bash -c "source /root/.bashrc && fnm install 20 && fnm use 20"

# Copying both composer and package json files
COPY composer.json .
COPY package*.json .

# Installing Node.JS and Php dependencies
RUN composer install
RUN npm ci

