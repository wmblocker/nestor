import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LinkedInProfile from "../views/LinkedInProfile.vue";
import store from "../store";
import axios from "axios";
import linkedInAuth from "../components/Buttons/linkedin-login";

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
    path: "/linkedInProfile",
    name: "linkedInProfile",
    component: LinkedInProfile,
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

function getAccessTokenFromCode(code) {
  const params = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "https://nestor-a7f1e.web.app/updateToken",
    client_id: linkedInAuth.clientId,
    client_secret: linkedInAuth.clientSecret,
  };
  axios
    .post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      new URLSearchParams(params).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((r) => {
      const localStorage = window.localStorage;
      localStorage.setItem("accessToken", r.data.access_token);
      return r.data.access_token;
    });
}

function getProfile(accessToken) {
  return axios
    .get(
      "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
      { headers: { Authorization: "Bearer " + accessToken } }
    )
    .then((r) => {
      window.localStorage.setItem("profile", JSON.stringify(r.data));
      return r.data;
    });
}

router.beforeEach((to, from, next) => {
  if (to.path === "/updateToken") {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) {
      getProfile(accessToken).then(() => next("/linkedInProfile"));
    } else {
      getAccessTokenFromCode(to.query.code)
        .then((token) => getProfile(token))
        .then(() => next("/linkedInProfile"));
    }
  } else if (!store.state.user && from.name !== "home" && from.name !== null) {
    const sessionUserId = sessionStorage.getItem("userId");
    if (sessionUserId) {
      store.dispatch("User/loginUserWithId", sessionUserId);
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
