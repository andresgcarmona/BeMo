<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;
    use Illuminate\Database\Eloquent\SoftDeletes;
    use Te7aHoudini\LaravelTrix\Traits\HasTrixRichText;

    class Page extends Model
    {
        use HasFactory;
        use SoftDeletes;
        use HasTrixRichText;

        protected $table = 'pages';

        protected $guarded = [];

        protected $dates = [
            'deleted_at',
            'published_at',
        ];

        protected $appends = [
            'url',
        ];

        /**
         * @return BelongsTo
         */
        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class);
        }

        /**
         * @return string
         */
        public function getUrlAttribute(): string
        {
            return route('page.show', $this->attributes['slug']);
        }

        /**
         * Returns true if the page was published.
         *
         * @return bool
         */
        public function getIsPublishedAttribute(): bool
        {
            return $this->attributes['published_at'] !== null;
        }
    }
