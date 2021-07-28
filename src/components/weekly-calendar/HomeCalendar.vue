<template>
  <button type="button" class="btn-green" @click="prevWeek">Previous</button>
  <button type="button" class="btn-green" @click="nextWeek">Next</button>
  <DayPilotCalendar id="dp" :config="config" ref="calendar" />
</template>

<script>
import { DayPilot, DayPilotCalendar } from "daypilot-pro-vue";

export default {
  name: "Calendar",
  data: function () {
    return {
      config: {
        viewType: "Week",
        hourWidth: 0,
        cellHeight: 100,
        dayEndsHour: 3,
        timeRangeSelectedHandling: "Disabled",
        eventDeleteHandling: "Disabled",
        onEventMoved: () => {
          this.message("Event moved");
        },
        onEventResized: () => {
          this.message("Event resized");
        },
        onBeforeEventRender: (args) => {
          args.data.barColor = args.data.color;
          args.data.areas = [
            {
              top: 6,
              right: 2,
              icon: "icon-triangle-down",
              visibility: "Hover",
              action: "ContextMenu",
              style:
                "font-size: 12px; background-color: #f9f9f9; border: 1px solid #ccc; padding: 2px 2px 0px 2px; cursor:pointer;",
            },
          ];
        },
        contextMenu: new DayPilot.Menu({
          items: [
            {
              text: "Delete",
              onClick: (args) => {
                var e = args.source;
                this.calendar.events.remove(e);
                this.calendar.message("Deleted.");
              },
            },
            {
              text: "-",
            },
            {
              text: "Blue",
              icon: "icon icon-blue",
              color: "#1155cc",
              onClick: (args) => {
                this.updateColor(args.source, args.item.color);
              },
            },
            {
              text: "Green",
              icon: "icon icon-green",
              color: "#6aa84f",
              onClick: (args) => {
                this.updateColor(args.source, args.item.color);
              },
            },
            {
              text: "Yellow",
              icon: "icon icon-yellow",
              color: "#f1c232",
              onClick: (args) => {
                this.updateColor(args.source, args.item.color);
              },
            },
            {
              text: "Red",
              icon: "icon icon-red",
              color: "#cc0000",
              onClick: (args) => {
                this.updateColor(args.source, args.item.color);
              },
            },
          ],
        }),
      },
    };
  },
  props: {},
  components: {
    DayPilotCalendar,
  },
  computed: {
    // DayPilot.Calendar object - https://api.daypilot.org/daypilot-calendar-class/
    calendar() {
      return this.$refs.calendar.control;
    },
  },
  methods: {
    loadEvents() {
      // placeholder for an AJAX call

      var data = [
        {
          id: 1,
          start: DayPilot.Date.today().addHours(10),
          end: DayPilot.Date.today().addHours(11),
          text: "Event 1",
        },
        {
          id: 2,
          start: DayPilot.Date.today().addHours(13),
          end: DayPilot.Date.today().addHours(16),
          text: "Event 2",
        },
      ];
      this.calendar.update({ events: data });
    },
    updateColor(e, color) {
      var dp = this.calendar;
      e.data.color = color;
      dp.events.update(e);
      dp.message("Color updated");
    },
    nextWeek() {
      var dp = this.calendar;
      dp.startDate = dp.startDate.addDays(7);
      dp.update();
    },
    prevWeek() {
      var dp = this.calendar;
      dp.startDate = dp.startDate.addDays(-7);
      dp.update();
    },
  },
  mounted() {
    this.loadEvents();
    this.calendar.message("Welcome!");
  },
};
</script>