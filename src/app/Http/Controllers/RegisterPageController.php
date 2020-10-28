<?php

    namespace App\Http\Controllers;

    use App\Models\Page;
    use Illuminate\Auth\Access\AuthorizationException;
    use Illuminate\Contracts\Foundation\Application;
    use Illuminate\Contracts\View\Factory;
    use Illuminate\Contracts\View\View;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;

    class RegisterPageController extends Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
        }

        /**
         * Handle the incoming request.
         *
         * @param  Request  $request
         * @return Application|Factory|View|Response
         * @throws AuthorizationException
         */
        public function __invoke(Request $request)
        {
            $this->authorize('register', Page::class);

            return view('pages.register');
        }
    }
