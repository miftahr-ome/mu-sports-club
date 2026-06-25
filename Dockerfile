FROM php:8.4-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip \
    libzip-dev libpng-dev \
    libxml2-dev libcurl4-openssl-dev \
    libonig-dev libssl-dev \
    && docker-php-ext-install \
    pdo pdo_mysql zip bcmath mbstring

# Install Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Upgrade npm to latest
RUN npm install -g npm@latest

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN composer install --no-dev --optimize-autoloader --no-interaction

RUN npm ci && npm run build

RUN chmod -R 775 storage bootstrap/cache

EXPOSE 8000

CMD php artisan key:generate && \
    php artisan migrate --force && \
    php artisan config:cache && \
    php artisan serve --host=0.0.0.0 --port=8000