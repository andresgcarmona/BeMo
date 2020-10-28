@extends('layouts.app')

@section('title', $page->title)

@section('head')
    @if($page->no_index)
        <meta name="robots" content="noindex">
        <meta name="googlebot" content="noindex">
    @endif
@endsection

@include('pages.analytics')

@section('main')
    <div class="relative flex flex-col min-h-screen sm:pt-0 z-0">
        @if($page->cover_image)
            <div class="hero-image flex justify-center items-center w-full bg-center bg-cover bg-no-repeat mb-5"
                 style="background-image: url({{ url(Storage::url($page->cover_image)) }})">
                <p class="text-6xl text-white leading-relaxed">{{ $page->title }}</p>
            </div>
        @endif
        <div class="max-w-6xl mx-auto pb-20 px-8 lg:px-0 {{ !$page->cover_image ? 'mt-32' : '' }}">
            {!! $page->body !!}
        </div>
    </div>
@endsection
