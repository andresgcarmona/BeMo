<?php

    namespace App\Mail;

    use App\Models\Contact;
    use Illuminate\Bus\Queueable;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;

    class NewMessageMail extends Mailable
    {
        use Queueable, SerializesModels;

        /**
         * @var Contact
         */
        public $contact;

        /**
         * Create a new message instance.
         *
         * @param  Contact  $contact
         */
        public function __construct(Contact $contact)
        {
            $this->contact = $contact;
        }

        /**
         * Build the message.
         *
         * @return $this
         */
        public function build(): self
        {
            return $this->markdown('emails.new_message');
        }
    }
