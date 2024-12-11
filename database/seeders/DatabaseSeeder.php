<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(5)->create();

        // User::factory()->create([
        //     'first_name' => 'Doe',
        //     'last_name' => 'John',
        //     'email' => 'test@example.com',
        //     'phone' => '+123456789',
        // ]);
    }
}
