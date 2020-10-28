@if (session('success'))
    <div class="alert alert-success p-0">
        <div class="border-l-4 border-teal-500 text-teal-900 p-4" role="alert">
            <p class="m-0">{{ session('success') }}</p>
        </div>
    </div>
@elseif (session('error'))
    <div class="alert alert-danger p-0 border-red-300">
        <div class="border-l-4 border-red-300 text-red-900 p-4" role="alert">
            <p class="m-0">{{ session('error') }}</p>
        </div>
    </div>
@endif
@if (session('status'))
    <div class="alert alert-success p-0">
        <div class="border-l-4 border-teal-500 text-teal-900 p-4" role="alert">
            <p class="m-0">{{ session('status') }}</p>
        </div>
    </div>
@endif
