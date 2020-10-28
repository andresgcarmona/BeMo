<?php

    use App\Http\Controllers\DashboardController;
    use App\Http\Controllers\IndexController;
    use App\Http\Controllers\ShowAboutController;
    use Illuminate\Support\Facades\Route;

    Route::get('/', IndexController::class)->name('index');

    Auth::routes();

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('about', ShowAboutController::class)->name('about');
