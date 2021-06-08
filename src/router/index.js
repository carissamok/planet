import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Settings from "@/views/Settings.vue";
import TimePreferences from "@/views/TimePreferences.vue"
import When2Meet from "@/views/When2Meet.vue"

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
    name: "TimePreferences",
    component: TimePreferences
  },
  {
    path: "/when2meet",
    name: "When2Meet",
    component: When2Meet
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;