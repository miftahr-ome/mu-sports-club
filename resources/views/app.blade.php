<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="MU Sports Club - Official Sports Club of Metropolitan University, Sylhet. Tournaments, Events and Athletic Excellence.">
    <meta name="google-site-verification" content="f59fdecf25416f70" />

<meta name="keywords" content="MU Sports Club, Metropolitan University Sylhet, Sports, Tournaments, Cricket, Football, Futsal">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://mu-sports-club-production.up.railway.app/">

    <title>MU Sports Club</title>
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