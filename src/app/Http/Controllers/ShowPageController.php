<?php

    namespace App\Http\Controllers;

    use App\Models\Page;
    use Illuminate\Contracts\Foundation\Application;
    use Illuminate\Contracts\View\Factory;
    use Illuminate\Contracts\View\View;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;

    class ShowPageController extends Controller
    {
        /**
         * Handle the incoming request.
         *
         * @param  Request  $request
         * @return Application|Factory|View|Response
         */
        public function __invoke(Page $page, Request $request)
        {
            return view('pages.show');
        }
    }
