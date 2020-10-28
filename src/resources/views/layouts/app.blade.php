<!DOCTYPE html>
<html lang="{{ config('portal.locale') }}">
<head>
    @include('layouts.includes.head')
</head>
<body class="antialiased">
    <div class="app">
        @include('layouts.includes.header')

        <main class="app-main">
            @yield('main')
        </main>

        @include('layouts.includes.footer')
    </div>
@include('layouts.includes.scripts')
</body>
</html>
