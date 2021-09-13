<template>
  <div class="settings">
        <div id="preference-cal-placeholder"></div>
        <!-- <div class="toggle-button-times"> -->
        <div>
            <button v-on:click="preferredTimes">Preferred</button>
            <button v-on:click="doableTimes">Do-able</button>
        </div>
  </div>
</template>

<script>

    export default {
        components: { },
        name: "TimePrefSettings", 
        methods: {
            preferredTimes() {
                console.log("switch to preferred times")
            },
            doableTimes() {
                console.log("switch to doable times");
            },
        },
    }
</script>

<style scoped>

    .settings {
        display: flex;
        flex-direction: column;
    }

    #preference-cal-placeholder {
        width: 600px;
        height: 500px;
        background-color: #ffffff;
        margin: 25px;
    }

</style>