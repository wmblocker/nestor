import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk for routes
// which is lazy-loaded when the route is visited.
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/portal",
    name: "portal",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portal/Portal.vue"),
    children: [
      {
        path: "",
        name: "portalHome",
        component: () =>
          import(
            /* webpackChunkName: "portalHome" */ "../views/Portal/PortalHome.vue"
          ),
      },
      {
        path: "connections",
        name: "connections",
        component: () =>
          import(
            /* webpackChunkName: "connections" */ "../views/Portal/Connections.vue"
          ),
      },
      {
        path: "messages",
        name: "messages",
        component: () =>
          import(
            /* webpackChunkName: "messages" */ "../views/Portal/Messages.vue"
          ),
      },
      {
        path: "profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/Portal/Profile.vue"
          ),
      },
      {
        path: "rooms",
        name: "rooms",
        component: () =>
          import(/* webpackChunkName: "rooms" */ "../views/Portal/Rooms.vue"),
      },
      {
        path: "room/:roomID",
        name: "room",
        component: () =>
          import(
            /* webpackChunkName: "rooms" */ "../views/Portal/JitsiRoom.vue"
          ),
      },
      {
        path: "mentors",
        name: "mentors",
        component: () =>
          import(
            /* webpackChunkName: "mentors" */ "../views/Portal/Mentors.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;
