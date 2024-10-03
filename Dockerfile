FROM php:8.3-apache

WORKDIR /var/www/html
RUN a2enmod rewrite

COPY index.php .

# Installing NodeJS in order to use Sass on dev
RUN apt-get update 
RUN apt-get install unzip
RUN curl -fsSL https://fnm.vercel.app/install | bash
RUN source ~/.bashrc
RUN fnm use --install-if-missing 20
