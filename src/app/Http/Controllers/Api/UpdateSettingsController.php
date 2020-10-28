<?php

    namespace App\Http\Controllers\Api;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\SettingsRequest;
    use App\Models\Settings;
    use Illuminate\Http\JsonResponse;

    class UpdateSettingsController extends Controller
    {
        /**
         * Handle the incoming request.
         *
         * @param  SettingsRequest  $request
         * @return JsonResponse
         */
        public function __invoke(SettingsRequest $request)
        {
            $settings = Settings::first();

            $settings->update($request->only([
                'google_analytics_tag',
                'facebook_pixel_data',
                'contact_email',
            ]));

            return response()->json([
                'status'   => 'success',
                'message'  => __('Settings updated successfully.'),
                'settings' => $settings->fresh(),
            ]);
        }
    }
