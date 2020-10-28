@extends('layouts.app')

@section('main')
    <div class="container mx-auto login-contaner">
        <div class="min-h-screen w-full flex items-center justify-center">
            <div class="card">
                <div class="card-header text-center">
                    <img src="{{ asset('images/logo.png') }}" alt="BeMo Logo" class="logo block mx-auto" />
                </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}"
                          class="my-10 w-full md:max-w-md md:border border-gray-400 md:shadow py-5 px-6 md:px-8 rounded form">
                        @csrf
                        <fieldset>
                            <legend class="text-3xl text-center font-semibold text-gray-700 mb-2 max-w-screen-sm mb-8 border-none">
                                Login with you BeMo account
                            </legend>
                        </fieldset>

                        <div class="mb-4">
                            <label for="email"
                                   class="block text-gray-700 text-sm font-bold mb-2">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email"
                                       class="($errors->has('email') ? 'border-red-500  ' : '') . 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                       name="email"
                                       value="{{ old('email') }}"
                                       required
                                       placeholder="email@example.com"
                                       autocomplete="email"
                                       autofocus>

                                @error('email')
                                <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-4">
                            <label for="password"
                                   class="block text-gray-700 text-sm font-bold mb-2">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password"
                                       class="($errors->has('password') ? 'border-red-500  ' : '') . 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                       name="password"
                                       required
                                       autocomplete="current-password">

                                @error('password')
                                <span class="invalid-feedback text-red-500 text-sm font-bold" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input h-4 w-4" type="checkbox" name="remember"
                                           id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label text-gray-700 text-sm font-bold mb-0 ml-1" for="remember">
                                        {{ __('Remember me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <button type="submit"
                                    class="appearance-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 mr-3 rounded focus:outline-none focus:shadow-outline w-full">
                                {{ __('Login') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
