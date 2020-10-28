<?php

    namespace Database\Factories;

    use App\Models\Page;
    use Illuminate\Database\Eloquent\Factories\Factory;
    use Illuminate\Support\Str;

    class PageFactory extends Factory
    {
        /**
         * The name of the factory's corresponding model.
         *
         * @var string
         */
        protected $model = Page::class;

        /**
         * Define the model's default state.
         *
         * @return array
         */
        public function definition(): array
        {
            $title = $this->faker->sentence;

            return [
                'user_id'      => 1,
                'title'        => $title,
                'slug'         => Str::slug($title),
                'description'  => $this->faker->sentences(5, true),
                'body'         => $this->faker->paragraphs(10, true),
                'published_at' => now(),
            ];
        }
    }
