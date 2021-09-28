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
        cellHeight: 200,
        dayEndsHour: 3,
        cellDuration: 60,
        timeRangeSelectedHandling: "Disabled",
        eventDeleteHandling: "Disabled",
        onEventMoved: () => {
          this.message("Event moved");
        },
        onEventResized: () => {
          this.message("Event resized");
        },
        onEventClick: (args) => {
          // const form = [
          //   {
          //     type: "title",
          //     name: "Event Details",
          //   },
          //   {
          //     type: "html",
          //     html: '<button type="button" class="btn-green" @click="nextWeek">Next</button>',
          //   },
          // ];
          var data = args.e.data;
          console.log(data)
          var modal = new DayPilot.Modal();
          modal.left = 1;
          modal.width = 2000;
          modal.showHtml("<h1> Hello </h1>")
          // modal.form(form, data).then(function (input) {
          //   if (input.canceled) {
          //     return;
          //   }
          //   console.log("Updated data", input.result);
          // });
        },
        // eventClickHandling: "ContextMenu",
        // contextMenu: new DayPilot.Menu({
        //   // TODO: create css theme
        //   theme: "my_theme",
        //   items: [
        //     {
        //       text: "event details",
        //     },
        //     {
        //       text: "edit",
        //     },
        //     {
        //       text: "-",
        //     },
        //     {
        //       text: "delete",
        //       onClick: (args) => {
        //         var e = args.source;
        //         console.log(e);
        //         this.calendar.events.remove(e);
        //         this.calendar.message("Deleted.");
        //       },
        //     },
        //     // {
        //     //   text: "Blue",
        //     //   icon: "icon icon-blue",
        //     //   color: "#1155cc",
        //     //   onClick: (args) => {
        //     //     this.updateColor(args.source, args.item.color);
        //     //   },
        //     // },
        //     // {
        //     //   text: "Green",
        //     //   icon: "icon icon-green",
        //     //   color: "#6aa84f",
        //     //   onClick: (args) => {
        //     //     this.updateColor(args.source, args.item.color);
        //     //   },
        //     // },
        //     // {
        //     //   text: "Yellow",
        //     //   icon: "icon icon-yellow",
        //     //   color: "#f1c232",
        //     //   onClick: (args) => {
        //     //     this.updateColor(args.source, args.item.color);
        //     //   },
        //     // },
        //     // {
        //     //   text: "Red",
        //     //   icon: "icon icon-red",
        //     //   color: "#cc0000",
        //     //   onClick: (args) => {
        //     //     this.updateColor(args.source, args.item.color);
        //     //   },
        //     // },
        //   ],
        // }),
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
          start: DayPilot.Date.today().addHours(0),
          end: DayPilot.Date.today().addHours(1),
          text: "Event 1",
        },
        {
          id: 2,
          start: DayPilot.Date.today().addHours(2),
          end: DayPilot.Date.today().addHours(3),
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


.<style>
.my_theme_main {
  font-family: Tahoma, Arial, Helvetica, Sans-Serif;
  font-size: 12px;
  border: 1px solid #dddddd;
  background-color: white;
  padding: 0px;
  cursor: default;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAABCAIAAABG0om7AAAAKXRFWHRDcmVhdGlvbiBUaW1lAHBvIDEwIDUgMjAxMCAyMjozMzo1OSArMDEwMGzy7+IAAAAHdElNRQfaBQoUJAesj4VUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAABGdBTUEAALGPC/xhBQAAABVJREFUeNpj/P//PwO1weMnT2RlZAAYuwX/4oA3BgAAAABJRU5ErkJggg==);
  background-repeat: repeat-y;
  -moz-box-shadow: 0px 2px 3px rgba(000, 000, 000, 0.3),
    inset 0px 0px 2px rgba(255, 255, 255, 0.8);
  -webkit-box-shadow: 0px 2px 3px rgba(000, 000, 000, 0.3),
    inset 0px 0px 2px rgba(255, 255, 255, 0.8);
  box-shadow: 0px 2px 3px rgba(000, 000, 000, 0.3),
    inset 0px 0px 2px rgba(255, 255, 255, 0.8);
}
.my_theme_main,
.my_theme_main *,
.my_theme_main *:before,
.my_theme_main *:after {
  box-sizing: content-box;
}
.my_theme_title {
  background-color: #f2f2f2;
  border-bottom: 1px solid gray;
  padding: 4px 4px 4px 37px;
}
.my_theme_main a {
  padding: 2px 2px 2px 35px;
  color: black;
  text-decoration: none;
  cursor: default;
}
.my_theme_main a img {
  margin-left: 6px;
  margin-top: 2px;
}
.my_theme_item_text {
  display: block;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  padding-left: 2px;
  padding-right: 20px;
}
.my_theme_main a:hover {
  background-color: #f3f3f3;
}
.my_theme_main div div {
  border-top: 1px solid #dddddd;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 28px;
}
.my_theme_main a.my_theme_item_disabled {
  color: #ccc;
}
.my_theme_item_haschildren.my_theme_item_haschildren_active {
  background: #eeeeee;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#efefef),
    to(#e6e6e6)
  );
  background: -webkit-linear-gradient(top, #efefef 0%, #e6e6e6);
  background: -moz-linear-gradient(top, #efefef 0%, #e6e6e6);
  background: -ms-linear-gradient(top, #efefef 0%, #e6e6e6);
  background: -o-linear-gradient(top, #efefef 0%, #e6e6e6);
  background: linear-gradient(top, #efefef 0%, #e6e6e6);
  filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr="#efefef", endColorStr="#e6e6e6");
}
.my_theme_item_haschildren a:before {
  content: "";
  border-width: 6px;
  border-color: transparent transparent transparent black;
  border-style: solid;
  width: 0px;
  height: 0px;
  position: absolute;
  right: 5px;
  margin-top: 4px;
}
.my_theme_item_icon {
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 2px 2px 2px 8px;
}
.my_theme_item a i {
  height: 20px;
  line-height: 20px;
}
</style>