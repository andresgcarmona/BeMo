<?php

    namespace Database\Factories;

    use App\Models\Page;
    use Illuminate\Database\Eloquent\Factories\Factory;

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
            return [
                'user_id'      => 1,
                'title'        => $this->faker->sentences(3, true),
                'description'  => $this->faker->sentences(5, true),
                'body'         => $this->faker->paragraphs(10, true),
                'published_at' => now(),
            ];
        }
    }
