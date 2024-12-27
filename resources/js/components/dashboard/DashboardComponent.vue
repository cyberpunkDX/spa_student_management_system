<template>
    <main>
    
        <!-- Main Content -->
        <div class="content">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
                <a class="navbar-brand fw-bold" href="#">SPA Dashboard</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Application data</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Base data</a>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="study-course">
                                Study course
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/payments">Payments</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/dashboard">Profile</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">
                                Logout
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="row mt-5 mb-5">
                <div class="col-lg-10 mx-auto">
                    <div class="card rounded">
                        <div class="card-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
                <div class="alert alert-info w-50 mx-auto mb-5 mt-5">
                <p class=""><span class="fw-bold">NOTE: </span>This is a beta version, and does not represent the final version of the project.</p>
            </div>
            </div>
            
        </div>

    </main>
</template>
<script>
import CourseComponent from "./partials/CourseComponent.vue";
export default {

    components: {
        CourseComponent,
    }
}
</script>
<style>
body {
    height: 100vh;
    overflow: hidden;
}

.sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #343a40;
    color: #fff;
    padding-top: 1rem;
}

.sidebar a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 0.75rem 1rem;
}

.sidebar a:hover {
    background-color: #495057;
}

.content {
    height: 100%;
    overflow-y: auto;
}
</style>