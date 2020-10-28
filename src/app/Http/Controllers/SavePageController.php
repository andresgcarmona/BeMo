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
            $body        = $request->get('page-trixFields')['content'];

            try {
                DB::beginTransaction();

                $data = [
                    'title'                => $title,
                    'slug'                 => Str::slug($title),
                    'body'                 => $body,
                    'description'          => $description,
                    'user_id'              => auth()->user()->id,
                    'published_at'         => $request->has('is_published') ? now() : null,
                    'no_index'             => $request->has('no_index'),
                    'google_analytics_tag' => $request->get('google_analytics_tag', null),
                    'facebook_pixel_data'  => $request->get('facebook_pixel_data', null),
                ];

                // Store cover if present.
                if ($request->hasFile('cover_image')) {
                    $data['cover_image'] = $request->file('cover_image')->store('public/images',);
                }

                $page = Page::create(array_merge($request->only('page-trixFields', 'attachment-page-trixFields'),
                    $data));

                DB::commit();

                return redirect()->route('page.show', $page->slug)
                                 ->with('success', __('Page created successfully.'));
            } catch (Exception $exception) {
                DB::rollBack();

                dd($exception->getMessage());

                return redirect()->back()
                                 ->withInput()
                                 ->with('error', $exception->getMessage());
            }
        }
    }
