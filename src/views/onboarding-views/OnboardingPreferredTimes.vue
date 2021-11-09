<template>
    <div id="onboarding-settings-content">
    <OnboardingHeader />
    <div class="progress-bar-outline">
            <div id="pbar"></div>
    </div>
    <div class="main-content">
        <div id="preference-cal-placeholder"></div>
        <span class="time-type">
            <b> Set your orbit:</b><br />
            <span class="time-type-icon"> preferred </span><br />
            <em> drag to select the times you prefer to hangout </em>
        </span>
    </div> 
    <div class="progress">
        <!-- v-on:click="progressb"/"progressf" -->
        <router-link class="progress-button" id="back" to="/onboarding-settings" tag="button">&#8249;</router-link>
        <router-link class="progress-button" id="next" to="/onboarding-doable" tag="button">&#8250;</router-link>
    </div>
    </div>
</template>

<script>
import OnboardingHeader from "../../components/onboarding-components/OnboardingHeader.vue"

    export default {
        components: {
            OnboardingHeader
        }, 
        name: "OnboardingSettings"
    }
</script>

<style scoped>

    #onboarding-settings-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .progress-bar-outline {
        display: block; 
        margin-left: auto;
        margin-right: auto;
        border-radius: 15px;
        background-color: #ffffff;
        width: 20%;
        /* margin: auto auto 50px auto ; */
    }

    #pbar {
        border-radius: 15px;
        background-color: #ccadff;
        height:24px;
        width: 60%;
    }

    .main-content {
        display: flex;
        justify-content: space-around;
    }

    #preference-cal-placeholder {
        width: 500px;
        height: 400px;
        background-color: #ffffff;
        margin: 25px;
    }

    .time-type {
        display: block; 
        text-align: left;
        padding: 150px 100px;
    }

    .progress-button#back {
        position: absolute;
        bottom: 40px;
        left: 40px;
    }

    .progress-button#next {
        position: absolute;
        bottom: 40px;
        right: 40px;
    }

    .progress-button {
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
        border-radius: 50%;
        background-color: #f1f1f1;
        color: black;
    }

    .progress-button:hover {
        background-color: #ddd;
        color: black;
    }

</style>