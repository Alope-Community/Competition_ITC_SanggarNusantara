<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(){

        return inertia('Auth/Login');
    }
    public function register(){

        return inertia('Auth/Register');
    }
}
