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

# Still having small issue with fnm
# RUN . ~/.bashrc
# RUN fnm use --install-if-missing 20
