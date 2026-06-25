<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title>Leo Sports Club - Management Panel</title>
    <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.jsx']); ?>
</head>
<body class="antialiased bg-gray-50">

    <script>
        window.backendEvents = <?php echo json_encode($dbEvents ?? []); ?>;
        window.backendUsers = <?php echo json_encode($dbUsers ?? []); ?>;
    </script>

    <div id="app"></div>

</body>
</html><?php /**PATH /Users/miftahr.ome/laravel-leo/resources/views/app.blade.php ENDPATH**/ ?>