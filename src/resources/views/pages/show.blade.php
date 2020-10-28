@extends('layouts.app')

@section('main')
    <div class="relative flex flex-col min-h-screen sm:pt-0 z-0">
        @if($page->cover_image)
        <div class="hero-image flex justify-center items-center w-full bg-center bg-cover bg-no-repeat"
        style="background-image: url({{ url(Storage::url($page->cover_image)) }})">
            <p class="text-6xl text-white leading-relaxed">{{ $page->title }}</p>
        </div>
        @endif
        <div class="max-w-6xl mx-auto">
            {!! $page->body !!}
        </div>
    </div>
@endsection
