<?php

    namespace App\Http\Controllers;

    use App\Http\Requests\ContactRequest;
    use App\Mail\NewMessageMail;
    use App\Models\Contact;
    use Exception;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Mail;

    class SendContactFormController extends Controller
    {
        /**
         * Handle the incoming request.
         *
         * @param  ContactRequest  $request
         * @return RedirectResponse
         */
        public function __invoke(ContactRequest $request)
        {
            try {
                DB::beginTransaction();

                $contact = Contact::create($request->validated());

                Mail::to($contact->email)
                    ->send(new NewMessageMail($contact));

                DB::commit();

                return redirect()->back()
                                 ->with('success', __('Message send successfully.'));
            } catch (Exception $exception) {
                DB::rollBack();

                dd($exception->getMessage());
            }
        }
    }
