<?php

    namespace App\Http\Controllers;

    use App\Models\Page;
    use Illuminate\Contracts\Support\Renderable;

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
            $pages = Page::orderBy('created_at', 'desc')->paginate();

            return view('dashboard', compact(
                'pages'
            ));
        }
    }
