<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class _UploadImageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        try {

            // Ini untuk news
            if($request->hasFile('cover')) {
                $coverPath = null;
                if ($request->hasFile('cover')) {
                    $coverPath = $request->file('cover')->store('news', 'public');
                }

                return response()->json([
                    "code" => "SNR-001",
                    'success' => true,
                    'data' => [
                        "cover" => $coverPath,
                    ],
                    'message' => 'Success Upload Image'
                ], 201);
            }
            
        } catch (Exception $e) {
            Log::error('Transaction update failed: ' . $e->getMessage());

            // Return error response
            return response()->json([
                "code" => "SNR-003",
                "success" => false,
                "message" => "Gagal Upload Image",
                "result" => [],
            ], 500);
        }
    }
}
