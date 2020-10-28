<?php

    use App\Http\Controllers\DashboardController;
    use App\Http\Controllers\IndexController;
    use App\Http\Controllers\RegisterPageController;
    use App\Http\Controllers\ShowAboutController;
    use App\Http\Controllers\ShowPageController;
    use Illuminate\Support\Facades\Route;

    Route::get('/', IndexController::class)->name('index');

    Auth::routes();

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('about', ShowAboutController::class)->name('about');

    /**
     * Pages routes.
     */
    Route::get('page/register', RegisterPageController::class)->name('page.register');
    Route::get('page/{page:slug}', ShowPageController::class)->name('page.show');
