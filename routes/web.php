<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 'any' disabled Laravel front-end routing. This however will also deactivate 404 links. But for simplicity of this demo project, I will not use the 404.

// '.*' will catch any custom links typed by user at the search bar and redirect none.

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
