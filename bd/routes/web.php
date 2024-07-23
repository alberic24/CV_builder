<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

// Route pour le contrôleur d'inscription (POST)
Route::post('/register', [RegisterController::class, 'register']);

Route::post('/login', [LoginController::class, 'login']);

// Route pour la page d'accueil de Laravel
Route::get('/', function () {
    return view('welcome');
});

// Route pour toutes les autres pages capturées par React Router
Route::get('/{any}', function () {
    return view('welcome'); // Le fichier Blade principal qui contient votre application React
})->where('any', '.*');
