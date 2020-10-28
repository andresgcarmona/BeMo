<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="csrf-token" content="{{ csrf_token() }}">

<title>{{ config('app.name', 'Laravel') }}</title>

<script src="{{ asset('js/app.js') }}" defer></script>

<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,500&display=swap" rel="stylesheet">

@yield('head')
@yield('analytics')

<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<link href="{{ asset('css/izitoast/iziToast.min.css') }}" rel="stylesheet">


@stack('styles')

<script src="https://kit.fontawesome.com/67712e0e7d.js" crossorigin="anonymous"></script>

@stack('head_scripts')
