@extends('layouts.app')

@section('title', 'Instituto Nacional de Salud Pública')

@section('main')
    <header class="flex header fixed left-0 top-0 p-2 px-6 items-center w-full z-50">
        <div class="logo">
            <img src="/images/logo.png" alt="BeMo logo"
                 class="w-full">
        </div>

        @if (Route::has('login'))
            <div class="hidden ml-auto px-6 py-4 sm:block">
                @auth
                    <a href="{{ route('dashboard') }}" class="text-lg text-gray-700 mr-6">Dashboard</a>
                @endif

                <a href="{{ route('login') }}" class="text-lg text-gray-700 mr-6">Main</a>
                <a href="{{ route('login') }}" class="text-lg text-gray-700 mr-6">How To Prepare</a>
                <a href="{{ route('login') }}" class="text-lg text-gray-700 mr-6">CDA Interview Questions</a>
                <a href="{{ route('login') }}" class="text-lg text-gray-700 mr-6">Contact Us</a>
            </div>
        @endif
    </header>
    <div class="relative flex flex-col min-h-screen mt-32 sm:pt-0 z-0">
        <div class="hero-image flex justify-center items-center w-full">
            <p class="text-6xl text-white leading-relaxed">CDA Interview Guide</p>
        </div>
        <div class="max-w-6xl mx-auto">

        </div>
    </div>
@endsection

@section('scripts')
    @parent
    @mix('js/app.js')
@endsection
