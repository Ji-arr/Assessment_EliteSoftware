import { createApp } from "vue";
import App from "./App.vue";
import AppContact from "./views/AppContact.vue";
import AppHome from "./views/AppHome.vue";
import "./assets/global.css";

import { createRouter, createWebHistory } from "vue-router";

// Define routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: AppHome,
  },
  {
    path: "/contact",
    name: "Contact",
    component: AppContact,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Create Vue app and use the router
createApp(App).use(router).mount("#app");
