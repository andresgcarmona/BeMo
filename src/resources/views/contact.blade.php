@extends('layouts.app')

@section('title', 'BeMo Academic Consulting')

@section('main')
    <div class="relative flex flex-col min-h-screen mt-32 sm:pt-0 z-0">
        <div class="container mx-auto">
            <div class="p-6">
                <form method="post"
                      action="{{ route('contact.send') }}"
                      class="w-full flex flex-col">
                    @csrf

                    <div class="header mb-10">
                        <div class="message-text">
                            <p class="text-2xl font-bold">BeMo Academic Consulting Inc. </p>
                            <p><span class="underline font-bold">Toll free: </span> <span class="font-normal"> 1-855-900-BeMo (2366)</span>
                            </p>
                            <p><span class="underline font-bold">Email: </span> <span class="font-normal"> info@bemoacademicconsulting.com</span>
                            </p>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="name"
                               class="block text-gray-700 text-sm font-bold mb-2">Name: </label>

                        <input type="text"
                               name="name"
                               id="name"
                               class="{{ ($errors->has('name') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                               placeholder="Write your name"/>

                        @error('name')
                        <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>

                    <div class="mb-4">
                        <label for="name"
                               class="block text-gray-700 text-sm font-bold mb-2">Email Address: </label>

                        <input type="email"
                               name="email"
                               id="email"
                               class="{{ ($errors->has('email') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                               placeholder="Provide your email"/>

                        @error('email')
                        <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>

                    <div class="mb-4">
                        <label for="message"
                               class="block text-gray-700 text-sm font-bold mb-2">Email Address: </label>

                        <textarea name="message"
                                  id="message"
                                  class="{{ ($errors->has('message') ? 'border-red-500  ' : '') }} 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                  placeholder="Write your message here"
                                  rows="5"
                                  cols="5"></textarea>

                        @error('message')
                        <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>

                    <div class="mt-5 flex items-center justify-end">
                        <button type="submit"
                                class="appearance-none block mb-3 mr-2 sm:mb-0 border border-gray-600 p-3 font-medium text-sm font rounded hover:text-white hover:bg-gray-600 hover:border-gray-700 transition-colors duration-100">
                            <i class="fas fa-paper-plane inline-block mr-2"></i> Submit
                        </button>
                        <button type="button"
                                class="appearance-none block mb-3 sm:mb-0 border border-gray-600 p-3 font-medium text-sm font rounded hover:text-white hover:bg-gray-600 hover:border-gray-700 transition-colors duration-100"
                        >Reset
                        </button>
                    </div>
                </form>
            </div>

            <p class="text-center mt-5 text-gray-700"><span class="font-bold">Note</span> : If you are having difficulties with our contact us form above, send us an email to info@bemoacademicconsulting.com (copy &amp; paste the email address)
            </p>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
@endsection
