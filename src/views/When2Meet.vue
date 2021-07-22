<template>
    <div>
        <Navbar />
        <SubNavbar />
        <div class="timematch-layout">
            <div class="background">
                <GenerateTime @generate=generateTimes> </GenerateTime>
            </div>
            <!-- TODO: add transitions/fading ? -->
            <ul id="array-rendering">
                <button v-for="(time, index) in generatedTimes" v-bind:key="time.id" v-on:click="highlight(index)" 
                        :class="['time', selectedButton[index] ? 'highlight' : '']">
                    {{time.date}} {{time.time}}
                </button>
            </ul>
            <!-- hide button until later -->
            <!-- <button class="rsvp" v-on:click="sendRsvp">Send RSVP</button> -->
        </div>
        <CreateEvent />
        <EventDetails />
        <ShareTimes />
    </div>
</template>


<script>
import SubNavbar from "../components/SubNavbar.vue";
import Navbar from "../components/Navbar.vue";
import GenerateTime from "../components/when2meet/GenerateTime.vue";
import CreateEvent from "../components/modals/CreateEvent.vue";
import EventDetails from "../components/modals/EventDetails.vue";
import ShareTimes from "../components/modals/ShareTimes.vue";

export default {
  components: {
    Navbar,
    SubNavbar,
    GenerateTime,
    CreateEvent,
    EventDetails,
    ShareTimes,
  },
  data() {
    return {
      generatedTimes: [],
      selectedButton: [true, false, false],
      isModalVisible: false,
    };
  },
  name: "When2Meet",
  methods: {
    generateTimes(eventDetails) {
      // Call backend function to generate invites here ?
      console.log(eventDetails["eventName"]);
      console.log(eventDetails["inviteList"]);

      // Format of object returned from backend function ?
      // Just putting in dummy data for now
      this.generatedTimes = [
        {
          date: "1-1-21",
          time: "3:00pm",
        },
        {
          date: "1-1-21",
          time: "3:00pm",
        },
        {
          date: "1-1-21",
          time: "3:00pm",
        },
      ];
    },
    highlight(index) {
      this.selectedButton[0] = false;
      this.selectedButton[1] = false;
      this.selectedButton[2] = false;
      this.selectedButton[index] = true;
    },
    sendRsvp() {
      // TODO: connect with backend
      console.log("send rsvp pressed");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>

    .timematch-layout {
        display: flex;
        flex-direction: row;
        align-items: left;
    }

    .background {
        padding: 50px;
        background-color: #e3e7fe;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

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
        font-size: 15px;
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
