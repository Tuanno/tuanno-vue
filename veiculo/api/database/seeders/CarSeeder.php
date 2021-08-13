<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Car;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        for ($i=0; $i < 10; $i++){
            $user = User::all()->random();
            Car::factory(1)->create([
                'user_id'=> $user->id
            ]);

        }
    }
}
