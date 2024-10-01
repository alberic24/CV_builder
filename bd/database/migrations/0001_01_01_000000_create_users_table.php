<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Identifiant unique pour l'utilisateur
            $table->string('username')->unique(); // Nom d'utilisateur unique
            $table->string('email')->unique(); // Adresse email unique
            $table->string('password'); // Mot de passe crypté
            $table->string('profession')->nullable();
            $table->timestamps(); // Horodatages pour la création et la mise à jour
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
