<header class="flex header fixed left-0 top-0 p-2 px-6 items-center w-full z-50 {{ auth()->user() ? 'bg-gray-200 border-b' : '' }}">
    <div class="logo">
        <a href="{{ route('index') }}">
            <img src="/images/logo.png" alt="BeMo logo"
                 class="w-full">
        </a>
    </div>

    @include('layouts.includes.nav')
</header>
