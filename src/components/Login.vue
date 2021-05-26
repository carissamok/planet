<template>
    <div class="login">
        <img alt="Calendar logo" src="../assets/calendar.png">
        <button v-on:click="login">Log in</button>
        <button v-on:click="google">Sign up with Google</button>
    </div>

</template>

<script>
// import { defineComponent } from '@vue/composition-api'
    export default {
        name:"Login",
        methods: {
            login() {
                console.log("login was pressed")
            },
            google() {
                console.log("google was pressed")
            }
        }
    }
</script>

<style scoped>

</style>
