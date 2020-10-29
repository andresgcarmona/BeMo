@component('mail::message')
# New message from contact page.

@component('mail::table')
| Name                      | Email                      | Message                     |
| ------------------------- |----------------------------|-----------------------------|
| {{ $contact->name }}      | {{ $contact->email }}      | **{{ $contact->message }}** |
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
