<template>
    <div >
        <Navbar />
        <SubNavbar />
        <GenerateTime @generate=generateTimes> </GenerateTime>
        <!-- TODO: add transitions/fading ? -->
        <ul id="array-rendering">
            <button v-for="(time, index) in generatedTimes" v-bind:key="time.id" v-on:click="highlight(index)" 
                    :class="['time', selectedButton[index] ? 'highlight' : '']">
                {{time.date}} {{time.time}}
            </button>
        </ul>
        <button class="rsvp" v-on:click="sendRsvp">Send RSVP</button>
    </div>
</template>

<script>
import SubNavbar from '../components/SubNavbar.vue'
import Navbar from '../components/Navbar.vue'
import GenerateTime from '../components/when2meet/GenerateTime.vue'

    export default {
        components: { 
            Navbar,
            SubNavbar,
            GenerateTime
        },
        data() {
            return {
                generatedTimes: [],
                selectedButton: [true, false, false]
            }
        },
        name: 'When2Meet',
        methods: {
            generateTimes(eventDetails){
                // Call backend function to generate invites here ?
                console.log(eventDetails["eventName"])
                console.log(eventDetails["inviteList"])

                // Format of object returned from backend function ?
                // Just putting in dummy data for now
                this.generatedTimes = [
                    {
                        date: "1-1-21",
                        time: "3:00pm"
                    },
                    {
                        date: "1-1-21",
                        time: "3:00pm"
                    },
                    {
                        date: "1-1-21",
                        time: "3:00pm"
                    }
                ]
            },
            highlight(index) {
                this.selectedButton[0] = false
                this.selectedButton[1] = false
                this.selectedButton[2] = false
                this.selectedButton[index] = true
            },
            sendRsvp() {
                // TODO: connect with backend
                console.log("send rsvp pressed")
            }
        }
    }
</script>

<style scoped>
    /* h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    } */
    /* body {
        margin: 30px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    } */
    .time {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #ffffff;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Courier New", monospace, sans-serif;
        font-weight: 400;
        font-size: 25px;
        color: #ffffff;
        background-color: #f17f99;
        text-align: center;
        transition: all 0.2s;
    }
    .time:hover, .time.highlight {
        color: #f17f99;
        background-color: #fff;
    }
</style>
