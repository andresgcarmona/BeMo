<?php

    namespace App\Http\Requests;

    use Illuminate\Foundation\Http\FormRequest;

    class SettingsRequest extends FormRequest
    {
        /**
         * Determine if the user is authorized to make this request.
         *
         * @return bool
         */
        public function authorize(): bool
        {
            return true;
        }

        /**
         * Get the validation rules that apply to the request.
         *
         * @return array
         */
        public function rules(): array
        {
            return [
                'google_analytics_tag' => 'required',
                'facebook_pixel_data'  => 'required',
                'contact_email'        => 'required',
            ];
        }
    }
