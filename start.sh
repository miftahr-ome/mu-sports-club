cat > start.sh << 'EOF'
#!/bin/sh
php artisan key:generate
php artisan migrate --force
php artisan config:cache
php -S 0.0.0.0:8000 -t public
EOF