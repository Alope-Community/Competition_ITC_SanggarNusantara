<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{User, News};

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $userCount = User::count();
        $newsCount = News::count();

        return response()->json([
            'userCount' => $userCount,
            'newsCount' => $newsCount
        ], 200);

    }
}
