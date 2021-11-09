<!DOCTYPE html>
// align your times panel
<template>
    <h3> hey hey ;) </h3>
    <p> so this is my orbit! it's got all my availabilties so that you can choose whatever works best for you </p>
    <p> Align your times! </p>
    <p> are you a user? <button class="loginheader" v-on:click="login">Log in</button></p>
    
    <div class="meeting-details">
        <!-- <div class="form-section"> -->
        <input type="text" placeholder="Event name">
        <input type="text" placeholder="Your email">
        <!-- <TimeMatchMeetingDetails /> -->
        <label for="date">date: <input name="date" id="date" /></label>
        <label for="meeting-time">meeting time: <input type="time" name="meeting-time" id="meeting-time" required/> - <input type="time" name="meeting-time" id="meeting-time" required/></label>
        <label for="meeting-spot">meeting spot: <input name="meeting-spot" id="meeting-spot" /></label>

        <p> planet will send gcal invites to both buddies! </p>
    <button class="send" v-on:click="send">Send</button>
    </div>
</template>

<script>
import TimeMatchMeetingDetails from "../when2meet/TimeMatchMeetingDetails";

export default {
    name: "GuestOrbitDetails",
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

    .meeting-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        background-color: #e3e7fe;
    }

    /* why is this like not rendering --> user agent stylesheet is overriding?? */
    input {
        border: none;
        border-bottom: 2px #f17f99;
        resize: none;
    }
    
    input[type=text] {
        margin: 10px 0px 10px;
    }

    input[type=text]:focus {
        border: 1px solid #555;
    }

    label {
        display: block;
        position: relative;
        margin: 10px 0px 10px;
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

    h3 {
        color: #555;
        padding: 0px;
        margin: 0px;
    }

     p {
         margin: 8px;
     }

    button {
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

    button.send:hover {
        border-color: #000000;
    }

</style>