<header class="flex header fixed left-0 top-0 p-2 px-6 items-center w-full z-50 {{ auth()->user() ? 'bg-gray-200 border-b' : '' }}">
    <div class="logo">
        <img src="/images/logo.png" alt="BeMo logo"
             class="w-full">
    </div>

    @include('layouts.includes.nav')
</header>
