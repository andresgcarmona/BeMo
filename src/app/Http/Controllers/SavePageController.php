<?php

    namespace App\Http\Controllers;

    use App\Http\Requests\PageRequest;
    use App\Models\Page;
    use Exception;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Str;

    class SavePageController extends Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
        }

        /**
         * Handle the incoming request.
         *
         * @param  PageRequest  $request
         * @return RedirectResponse
         */
        public function __invoke(PageRequest $request)
        {
            $title       = $request->get('title');
            $description = $request->get('description');
            $body        = $request->get('page-trixFields')['body'];

            try {
                DB::beginTransaction();

                $page = Page::create([
                    'user_id'     => auth()->user()->id,
                    'title'       => $title,
                    'slug'        => Str::slug($title),
                    'description' => $description,
                    'body'        => $body,
                ]);

                DB::commit();

                return redirect()->route('page.show', $page->slug)
                                 ->with('success', __('Page created successfully.'));
            } catch (Exception $exception) {
                DB::rollBack();

                return redirect()->back()
                                 ->withInput()
                                 ->withErrors(['error' => $exception->getMessage()]);
            }
        }
    }
