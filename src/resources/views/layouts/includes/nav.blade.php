@if (Route::has('login'))
    <div class="hidden ml-auto px-6 py-4 sm:block">
        @auth
            <a href="{{ route('dashboard') }}" class="text-lg text-gray-700 mr-6">Dashboard</a>
        @endif

        <a href="{{ route('index') }}" class="text-lg text-gray-700 mr-6">Main</a>
        <a href="#" class="text-lg text-gray-700 mr-6">How To Prepare</a>
        <a href="#" class="text-lg text-gray-700 mr-6">CDA Interview Questions</a>
        <a href="{{ route('contact') }}" class="text-lg text-gray-700 mr-6">Contact Us</a>
        @guest
        <a href="{{ route('login') }}" class="text-lg text-gray-700 mr-6">Login</a>
        @endguest
    </div>
@endif
