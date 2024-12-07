<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lecturer extends Model
{
    public function course() : BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
