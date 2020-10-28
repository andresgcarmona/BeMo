<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    class CreateSettingsTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up(): void
        {
            Schema::create('settings', function (Blueprint $table)
            {
                $table->id();
                $table->mediumText('google_analytics_tag')->nullable();
                $table->mediumText('facebook_pixel_data')->nullable();
                $table->string('contact_email')->nullable();
                $table->timestamps();
                $table->softDeletes();
            });
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down(): void
        {
            Schema::dropIfExists('settings');
        }
    }
