<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    class CreatePagesTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::create('pages', function (Blueprint $table)
            {
                $table->id();
                $table->foreignId('user_id')->constrained('users');
                $table->mediumText('title');
                $table->mediumText('slug');
                $table->mediumText('description');
                $table->mediumText('cover_image')->nullable();
                $table->longText('body');
                $table->boolean('no_index')->default(true);
                $table->mediumText('google_analytics_tag')->nullable();
                $table->mediumText('facebook_pixel_data')->nullable();
                $table->timestamp('published_at')->nullable();
                $table->timestamps();
                $table->softDeletes();
            });
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
        {
            Schema::dropIfExists('pages');
        }
    }
