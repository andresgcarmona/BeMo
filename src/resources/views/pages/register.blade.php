@extends('layouts.app')

@section('title', 'Register page')

@section('head')
    @trixassets
@endsection

@section('main')
    @include('layouts.includes.header')

    <div class="relative mt-32 sm:pt-0 z-0">
        <div class="container mx-auto py-8">
            <form method="POST"
                  action="{{ route('page.store') }}"
                  class="w-full md:w-2/3">
                @csrf
                @trix(\App\Models\Page::class, 'body')
                <div class="mt-5 flex items-center justify-end">
                    <button type="submit"
                            class="appearance-none block mb-3 mr-2 sm:mb-0 border border-gray-600 p-3 font-medium text-sm font rounded hover:text-white hover:bg-gray-600 hover:border-gray-700 transition-colors duration-100">
                        <i class="fas fa-save inline-block mr-1"></i> Save page
                    </button>
                    <button type="button"
                            class="appearance-none block mb-3 sm:mb-0 border border-gray-600 p-3 font-medium text-sm font rounded hover:text-white hover:bg-gray-600 hover:border-gray-700 transition-colors duration-100"
                    >Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
