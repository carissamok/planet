<template>
    <div id="onboarding-settings-content">
    <OnboardingHeader />
    <div class="progress-bar-outline">
            <div id="pbar"></div>
    </div>
    <div class="name-confirm">
        <span> Confirm your name: </span>
        <input type="text" v-bind:value="firstName">
        <input type="text" v-bind:value="lastName">
    </div>
    <div class="checkboxes">
        <span> Import Google Calendar events from: </span>
        <div class="checkbox-items">
            <label><input type="checkbox"> <span>Work</span></label> 
            <label><input type="checkbox"> <span>Holidays</span></label>
            <label><input type="checkbox"> <span>Social</span></label> 
        </div>
    </div>
    <br />
    <span>
        <b>note:</b> planet creates a Google calendar and exports your social events there <br /> we hope that is okay with you!
    </span>
    <div class="progress">
        <!-- v-on:click="progressb"/"progressf" -->
        <router-link class="progress-button" id="next" to="/onboarding-preferred" tag="button">&#8250;</router-link>
    </div>
    </div>
</template>

<script>
import OnboardingHeader from "../../components/onboarding-components/OnboardingHeader.vue"

    export default {
        components: {
            OnboardingHeader,
        }, 
        name: "OnboardingSettings", 
        methods: {
            getName() {
                var firstName = "carissa";
                var lastName = "mok"
                return firstName, lastName;
            }
        }
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
        margin: auto auto 50px auto ;
    }

    #pbar {
        border-radius: 15px;
        background-color: #ccadff;
        height:24px;
        width: 30%;
    }

    .checkboxes {
        display: inline-block; 
        margin-left: auto;
        margin-right: auto;
    }

    .checkbox-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
    }

    .progress {
        /* display: flex;
        justify-content: space-between; */
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