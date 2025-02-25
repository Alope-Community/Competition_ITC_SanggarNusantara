<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaction_events', function (Blueprint $table) {
            $table->id();
            $table->string("invoice");
            $table->string("orderer_name");
            $table->integer("purhaced_ticket");
            $table->integer("total_pay");
            $table->foreignId("user_id")->constrained('users')->onDelete('cascade');
            $table->foreignId("event_id")->constrained('events')->onDelete('cascade');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_events');
    }
};
