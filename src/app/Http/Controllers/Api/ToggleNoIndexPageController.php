<?php

    namespace App\Http\Controllers\Api;

    use App\Http\Controllers\Controller;
    use App\Models\Page;
    use Exception;
    use Illuminate\Http\JsonResponse;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;

    class ToggleNoIndexPageController extends Controller
    {
        /**
         * Handle the incoming request.
         *
         * @param  Page  $page
         * @param  Request  $request
         * @return JsonResponse
         */
        public function __invoke(Page $page, Request $request)
        {
            try {
                DB::beginTransaction();

                $page->no_index = !$page->no_index;
                $page->save();

                DB::commit();

                return response()->json([
                    'status'  => 'success',
                    'message' => __('No index set successfully.'),
                    'page'    => $page->fresh(),
                ]);
            } catch (Exception $exception) {
                DB::rollback();

                return response()->json([
                    'status' => 'error',
                    'error'  => $exception->getMessage(),
                ]);
            }
        }
    }
