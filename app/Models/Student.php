<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Student extends Model
{
    public function courses() : BelongsToMany
    {
        return $this->belongsToMany(Course::class);
    }
}
