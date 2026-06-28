// bootstrap/app.php
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->inertia();         // keep your existing Inertia line if present

        // ADD THIS — exclude these routes from CSRF verification
        $middleware->validateCsrfTokens(except: [
            'admin/*',
            'register-event',
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();