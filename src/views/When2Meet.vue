<template>
    <div >
        <Navbar />
        <SubNavbar />
        <GenerateTime @generate=generateTimes> </GenerateTime>
        <!-- TODO: add transitions/fading ? -->
        <ul id="array-rendering">
            <button class="time" v-for="time in generatedTimes" v-bind:key="time.id">
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
                generatedTimes: []
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
</style>
