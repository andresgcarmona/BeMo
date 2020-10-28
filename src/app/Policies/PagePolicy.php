<?php

    namespace App\Policies;

    use App\Models\User;
    use Illuminate\Auth\Access\HandlesAuthorization;

    class PagePolicy
    {
        use HandlesAuthorization;

        /**
         * Create a new policy instance.
         *
         * @return void
         */
        public function __construct()
        {
            //
        }

        /**
         * Only admin users can register a page.
         *
         * @param  User  $user
         * @return mixed
         */
        public function register(User $user)
        {
            return $user->is_admin;
        }
    }
