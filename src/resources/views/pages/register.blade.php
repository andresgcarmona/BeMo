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

                <div class="mb-4">
                    <label for="title"
                           class="block text-gray-700 text-sm font-bold mb-2">Page title</label>

                    <input type="text"
                           name="title"
                           id="title"
                           placeholder="Enter the page title"
                           autofocus
                           value="{{ old('title') }}"
                           class="{{ ($errors->has('title') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">

                    @error('title')
                    <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="description"
                           class="block text-gray-700 text-sm font-bold mb-2">Page description</label>

                    <textarea type="text"
                              name="description"
                              id="description"
                              placeholder="Page description"
                              rows="5"
                              cols="5"
                              class="{{ ($errors->has('description') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
{{ old('description') }}
                    </textarea>

                    @error('description')
                    <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="description"
                           class="block text-gray-700 text-sm font-bold mb-2">Page content</label>
                    @trix(\App\Models\Page::class, 'content')

                    @error('page-trixFields.body')
                    <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

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
    <script src="{{ mix('js/pages/register.js') }}"></script>
@endsection
