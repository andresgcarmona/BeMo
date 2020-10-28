<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;
    use Illuminate\Database\Eloquent\SoftDeletes;

    class Page extends Model
    {
        use HasFactory;
        use SoftDeletes;

        protected $table = 'pages';

        protected $guarded = [];

        protected $dates = [
            'deleted_at',
            'published_at',
        ];

        /**
         * @return BelongsTo
         */
        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class);
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
