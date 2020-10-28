@extends('layouts.app')

@section('main')
    <div class="relative flex flex-col min-h-screen mt-32 sm:pt-0 z-0">
        <div class="max-w-6xl mx-auto">
            {!! $page->body !!}
        </div>
    </div>
@endsection
