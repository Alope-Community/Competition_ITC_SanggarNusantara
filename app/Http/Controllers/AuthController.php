<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(){

        return inertia('Auth/Login');
    }
    
    public function authenticated(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $request->session()->put('success', 'Berhasil login!');
            return Inertia::location('/?successLogin=true');
        }
    
        $request->session()->put('error', 'Email atau password salah.');
        return back()->onlyInput('email');
    }
    

    public function register(){

        return inertia('Auth/Register');
    }

    public function registration(Request $request){
        // Validasi input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        try {
            // Simpan pengguna
            User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => bcrypt($validated['password']),
            ]);

            // Redirect dengan pesan berhasil
            // return redirect('/login')->with('success', 'Pendaftaran berhasil. Silakan login.');
            return Inertia::location('/login');
        } catch (\Exception $e) {
            // Log error untuk debugging
            Log::error("Error saat registrasi: " . $e->getMessage());

            // Redirect dengan pesan error
            // return redirect()->back()->with('error', 'Terjadi kesalahan saat pendaftaran. Silakan coba lagi.');
            return Inertia::location('/login');
        }
    }

    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login')->with('success', 'Anda telah logout.');
    }
}
