FROM php:8.4-apache
# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libzip-dev libpng-dev \
    libxml2-dev libcurl4-openssl-dev \
    && RUN docker-php-ext-install pdo pdo_mysql zip bcmath mbstring

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies and build React
RUN npm install && npm run build

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage \
    && chmod -R 775 /var/www/html/storage

# Apache config
RUN sed -i 's|/var/www/html|/var/www/html/public|g' \
    /etc/apache2/sites-available/000-default.conf \
    && a2enmod rewrite

EXPOSE 80

CMD php artisan key:generate && \
    php artisan migrate --force && \
    php artisan config:cache && \
    apache2-foreground