<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Leo Sports Club - Management Panel</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>
<body class="antialiased bg-gray-50">

    <script>
        window.backendEvents = {!! json_encode($dbEvents ?? []) !!};
        window.backendUsers = {!! json_encode($dbUsers ?? []) !!};
    </script>

    <div id="app"></div>

</body>
</html>