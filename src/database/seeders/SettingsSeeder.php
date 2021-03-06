<?php

    namespace Database\Seeders;

    use App\Models\Settings;
    use Illuminate\Database\Seeder;

    class SettingsSeeder extends Seeder
    {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            Settings::truncate();

            Settings::factory()->create([
                'google_analytics_tag' => 'UA-123582851-1',
                'facebook_pixel_data'  => '3414865801967239',
                'contact_email'        => 'ing.andres.carmona@gmail.com',
            ]);
        }
    }
