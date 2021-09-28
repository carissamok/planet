<template>
    <div class="content">
        <div class="onboarding-title"> 
            <img alt="Planet logo mini" src="../../assets/planetlogomini.png" />
            <span> ONBOARDING </span>
        </div>
        <br />
        <!-- <div class="progress-bar-outline">
            <div class="progress" id="pbar"></div>
        </div> -->
    </div>

</template>

<script>

    export default {
        name: "OnboardingHeader", 
    }

</script>

<style scoped>

    .onboarding-title {
        display: block; 
        margin-left: auto;
        margin-right: auto;
    }

    img {
        max-width: 3%;
        max-height: auto;
    }

    span {
        font-weight: bold;
        color: #ffffff
    }

    /* .progress-bar-outline {
        display: block; 
        margin-left: auto;
        margin-right: auto;
        border-radius: 15px;
        background-color: #ffffff;
        width: 20%;
    }

    .progress {
        border-radius: 15px;
        background-color: #ccadff;
        height:24px;
        width: 10%;
    } */

</style>
