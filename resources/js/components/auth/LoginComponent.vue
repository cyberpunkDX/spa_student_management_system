<template>
    <main class="py-5 bg-light-gray d-flex align-items-center justify-content-center">
    <div class="card rounded mt-5 mb-5 w-75">
        <div class="card-body p-5">
            <h4 class="fw-bold">Welcome back!</h4>
            <small class="mb-4">Experience a thriller managing your student affairs with single page application technology</small>
            <hr>
            <form @submit.prevent="login">
                <p class="alert alert-danger" v-if="error">{{ error }}</p>
                <div class="form-floating mb-3">   
                    <input type="text" v-model="d_code" class="form-control">
                    <label class="fw-bold" for="">D Code</label>
                </div>
                <div class="form-floating">
                    <input type="password" v-model="password" class="form-control">
                    <label class="fw-bold" for="">Password</label>
                </div>
                <div class="d-flex mt-4">
                    <input type="checkbox" class="mr-4" name="remember_me" id="">
                    <label for="">Keep me logged in</label>
                </div>
                <div class="d-flex justify-content-between">
                    <button class="mt-3 btn btn-primary" ref="submitButton">Proceed</button>
                    <router-link to="/">
                        <button class="mt-3 btn btn-outline-secondary">Go back</button>
                    </router-link>
                </div>
            </form>
            <div class="w-75 mt-4">
                <small>Don't forget to logout or exit your browser when you're done. If you are having trouble logging in, make sure to enable cookies in your web browser.</small>
            </div>
        </div>
    </div>
</main>

</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            d_code: '',
            password: '',
            error: null,
        };
    },
    methods: {
        async login() {
            try {
                this.$refs.submitButton.classList = "mt-3 btn btn-primary disabled";
                this.$refs.submitButton.innerText = "Processing...";
                await axios.get('/sanctum/csrf-cookie'); // Ensure CSRF token
                await axios.post('/api/login', {
                    d_code: this.d_code,
                    password: this.password,
                });
                this.$router.push('/dashboard');
            } catch (err) {
                this.$refs.submitButton.classList = "mt-3 btn btn-primary";
                this.$refs.submitButton.innerText = "Proceed";
                this.error = 'Something went wrong';console.error(err); // Log the actual error
                this.error = err.response?.data?.message || 'Something went wrong';
            }
        },
    },
};
</script>