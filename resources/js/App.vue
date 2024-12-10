<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </nav>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>
