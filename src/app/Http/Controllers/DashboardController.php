<?php

    namespace App\Http\Controllers;

    use App\Models\Page;
    use App\Models\Settings;
    use Illuminate\Contracts\Support\Renderable;
    use JavaScript;

    class DashboardController extends Controller
    {
        /**
         * Create a new controller instance.
         *
         * @return void
         */
        public function __construct()
        {
            $this->middleware('auth');
        }

        /**
         * Show the application dashboard.
         *
         * @return Renderable
         */
        public function index(): Renderable
        {
            $pages = Page::with('user')
                         ->orderBy('created_at', 'desc')
                         ->get();

            $settings = Settings::first();

            JavaScript::put(compact(
                'pages',
                'settings',
            ));

            return view('dashboard', compact(
                'pages'
            ));
        }
    }
