<!DOCTYPE html>
// meeting details panel to trigger time match functionality
<template>
    <p> Time match </p>
    <div class="generate-time">
        <!-- <div class="form-section"> -->
        <input type="text" placeholder="Event name">
        <!-- </div> -->
        <!-- <div class="form-section"> -->
        <label>w/  <input type="text" v-model="invitees"></label>
        <!-- </div> -->
        <TimeMatchMeetingDetails />
    <button class="generate" v-on:click="generate">Generate</button>
    </div>
</template>

<script>
import TimeMatchMeetingDetails from "./TimeMatchMeetingDetails";

export default {
    name: "GenerateTime",
    components: {
        TimeMatchMeetingDetails
    },

    props: {
        name: {
            type: String,
            // required might need to be true
            required: false
        },
    },

    data() {
        return {
            eventName: "",
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
            this.$emit("generate", {eventName: this.eventName,
                                    inviteList: this.inviteList});
        }
    }
};
</script>

<style scoped>

    .generate-time {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
    }

    /* why is this like not rendering --> user agent stylesheet is overriding?? */
    input {
        margin: 0px 0px 20px;
        border: none;
        border-bottom: 2px #f17f99;
        resize: none;
    }

    input[type=text]:focus {
        border: 1px solid #555;
    }

    label {
        display: block;
        position: relative;
        /* color: #c5a8a8 */
    }

    label span {
        font-weight: bold;
        position: absolute;
        left: 3px;
    }

    /* .form-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    } */

    button.generate {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #ffffff;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Courier New", monospace, sans-serif;
        font-weight: 400;
        font-size: 15px;
        color: #ffffff;
        background-color: #f17f99;
        text-align: center;
        transition: all 0.2s;
    }

    button.generate:hover {
        border-color: #000000;
    }

</style>