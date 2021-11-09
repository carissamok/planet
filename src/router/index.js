import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Settings from "@/views/Settings.vue";
import TimePreferences from "@/views/TimePreferences.vue";
import When2Meet from "@/views/When2Meet.vue";
import YourSocal from "@/views/YourSocal.vue";
import AboutUs from "@/views/AboutUs.vue";
import Privacy from "@/views/Privacy.vue";
import OnboardingSettings from "@/views/onboarding-views/OnboardingSettings.vue";
import OnboardingPreferredTimes from "@/views/onboarding-views/OnboardingPreferredTimes.vue";
import OnboardingDoableTimes from "@/views/onboarding-views/OnboardingDoableTimes.vue";
import ReceivedOrbitGuest from "@/views/ReceivedOrbitGuest.vue";


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
    component: Dashboard,
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
    path: "/timematch",
    name: "TimeMatch",
    component: When2Meet
  },
  {
    path: "/yoursocal",
    name: "YourSocal",
    component: YourSocal
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    component: AboutUs
  }, 
  {
    path: "/privacy", 
    name: "Privacy", 
    component: Privacy
  }, 
  {
    path: "/onboarding-settings", 
    name: "OnboardingSettings", 
    component: OnboardingSettings
  }, 
  {
    path: "/onboarding-preferred", 
    name: "OnboardingPreferredTimes", 
    component: OnboardingPreferredTimes
  }, 
  {
    path: "/onboarding-doable", 
    name: "OnboardingDoableTimes", 
    component: OnboardingDoableTimes
  }, 
  {
    path: "/guest", 
    name: "ReceivedOrbitGuest", 
    component: ReceivedOrbitGuest
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;