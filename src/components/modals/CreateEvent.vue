<template>
  <button type="button" class="btn" @click="showModal">Create Event!</button>

  <Modal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header> Add an event </template>

    <template v-slot:body> This is a new modal body. </template>

    <template v-slot:footer> This is a new modal footer. </template>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  name: "CreateEvent",
  methods: {
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
.time:hover,
.time.highlight {
  color: #f17f99;
  background-color: #fff;
}
</style>