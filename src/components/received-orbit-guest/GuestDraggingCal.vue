// guest view dragging cal
<template>
  <div class="settings">
        <div id="preference-cal-placeholder"></div>
  </div>
</template>

<script>

    export default {
        components: { },
        name: "GuestDraggingCal", 
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