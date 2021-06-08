<template>
  <div class="generate-time">
    <input v-model="invitees">
    <p>People Invited: {{ invitees }}</p>
    <p>Invites as list: {{ inviteList }}</p>
    <button class="generate" v-on:click="generate">Generate</button>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            // required might need to be true
            required: false
        },
    },

    data() {
        return {
            invitees: ""
        }
    },

    computed: {
        inviteList() {
            return this.invitees.split(", ")
        }
    },

    methods: {
        generate() {
            console.log("Generate")
        }
    }
};
</script>

<style scoped>


</style>