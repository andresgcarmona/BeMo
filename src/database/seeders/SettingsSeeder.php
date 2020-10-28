<?php

    namespace Database\Seeders;

    use App\Models\Settings;
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Str;

    class SettingsSeeder extends Seeder
    {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            Settings::factory()->create([
                'google_analytics_tag' => Str::random(),
                'facebook_pixel_data'  => Str::random(),
            ]);
        }
    }
