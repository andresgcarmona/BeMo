<?php

    use App\Http\Controllers\Api\ToggleNoIndexPageController;
    use App\Http\Controllers\Api\UpdateSettingsController;
    use Illuminate\Support\Facades\Route;

    Route::group([], static function ()
    {
        Route::post('page/{page}/toggle-no-index', ToggleNoIndexPageController::class)->name('page.toggle-no-index');

        /**
         * Settings.
         */
        Route::post('settings', UpdateSettingsController::class)->name('settings.update');
    });
