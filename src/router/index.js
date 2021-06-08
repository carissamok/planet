import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Settings from "@/views/Settings.vue";
import TimePreferences from "@/views/TimePreferences.vue"
import CalendarMonth from "@/views/CalendarMonth.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/timepreferences",
    name: "Time Preferences",
    component: TimePreferences
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: CalendarMonth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;