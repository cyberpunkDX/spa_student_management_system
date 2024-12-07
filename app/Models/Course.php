<?php

namespace App\Models;

use App\Models\Student;
use App\Models\Department;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
    public function department() : BelongsTo
    {
        return $this->belongsTo(Department::class);
    }
    public function students() : BelongsToMany
    {
        return $this->belongsToMany(Student::class);
    }
    public function lecturer() : BelongsTo
    {
        return $this->belongsTo(Lecturer::class);
    }
}
