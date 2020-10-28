@extends('layouts.app')

@section('title', 'Dashboard - Pages')

@section('main')
    @include('layouts.includes.header')

    <div class="relative mt-32 sm:pt-0 z-0">
        <div class="container mx-auto py-8">
            <router-view></router-view>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
