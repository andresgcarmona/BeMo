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
                  class="w-full flex flex-col lg:flex-row"
                  enctype="multipart/form-data">
                @csrf
                <div class="w-full lg:w-2/3 px-4">
                    <div class="mb-4">
                        <label for="cover_image"
                               class="block text-gray-700 text-sm font-bold mb-2">Cover image</label>

                        <input type="file"
                               name="cover_image"
                               id="cover_image"
                               placeholder="Select an image"
                               class="{{ ($errors->has('cover_image') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">

                        @error('cover_image')
                        <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>

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

                        <textarea name="description"
                                  id="description"
                                  placeholder="Page description"
                                  rows="5"
                                  cols="5"
                                  class="{{ ($errors->has('description') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">{{ old('description') }}</textarea>

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

                    <div class="w-1/2 px-3 mb-5 flex items-center">
                        <input type="checkbox"
                               name="is_published"
                               id="is_published"
                               class="h-4 w-4">
                        <label for="is_published"
                        class="tracking-wide text-gray-700 text-base font-bold mb-0 ml-2 mt-1">
                            Publish page?
                        </label>
                    </div>

                    <div class="w-1/2 px-3 mb-5 flex items-center">
                        <input type="checkbox"
                               name="no_index"
                               id="no_index"
                               class="h-4 w-4">
                        <label for="no_index"
                        class="tracking-wide text-gray-700 text-base font-bold mb-0 ml-2 mt-1">
                            Set no-index
                        </label>
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
                </div>
                <div class="w-full lg:w-1/3 px-4">
                    <div class="mb-4">
                        <label for="google_analytics_tag"
                               class="block text-gray-700 text-sm font-bold mb-2">
                            Google analytics tag
                        </label>

                        <textarea name="google_analytics_tag"
                                  id="google_analytics_tag"
                                  placeholder="Google Analytics tag"
                                  rows="5"
                                  cols="5"
                                  class="{{ ($errors->has('google_analytics_tag') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">{{ $settings->google_analytics_tag }}</textarea>
                    </div>

                    <div class="mb-4">
                        <label for="facebook_pixel_data"
                               class="block text-gray-700 text-sm font-bold mb-2">
                            Facebook pixel data
                        </label>

                        <textarea name="facebook_pixel_data"
                                  id="facebook_pixel_data"
                                  placeholder="Facebook pixel data"
                                  rows="5"
                                  cols="5"
                                  class="{{ ($errors->has('facebook_pixel_data') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">{{ $settings->facebook_pixel_data }}</textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
    <script src="{{ mix('js/pages/register.js') }}"></script>
@endsection
