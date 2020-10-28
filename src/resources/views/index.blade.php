@extends('layouts.app')

@section('title', 'BeMo Academic Consulting')

@section('main')
    <header class="flex header fixed left-0 top-0 p-2 px-6 items-center w-full z-50">
        <div class="logo">
            <img src="/images/logo.png" alt="BeMo logo"
                 class="w-full">
        </div>

        @include('layouts.includes.nav')
    </header>
    <div class="relative flex flex-col min-h-screen mt-32 sm:pt-0 z-0">
        <div class="hero-image flex justify-center items-center w-full">
            <p class="text-6xl text-white leading-relaxed">CDA Interview Guide</p>
        </div>
        <div class="max-w-6xl mx-auto">
            <p class="p-6">Main content</p>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
    @mix('js/app.js')
@endsection
