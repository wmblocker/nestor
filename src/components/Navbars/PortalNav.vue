<template>
  <BNavbar toggleable="lg" type="dark" variant="dark" class="px-3">
    <BNavbarBrand>
      <img src="../../assets/favicon-32x32.png" alt="Nestor" />
    </BNavbarBrand>
    <BNavbarToggle target="portal-nav-collapse"></BNavbarToggle>

    <BCollapse id="portal-nav-collapse" is-nav>
      <BNavbarNav class="mx-auto">
        <router-link :to="{ name: 'portalHome' }" class="mx-lg-5 nav-link">
          <BIcon
            icon="house-door"
            scale="1.5"
            alt="Home"
            class="d-none d-lg-block"
          ></BIcon>
          <span class="d-block d-md-none">Home</span>
        </router-link>
        <router-link to="/portal/connections" class="mx-lg-5 nav-link">
          <BIcon
            icon="people"
            scale="1.5"
            alt="Connections"
            class="d-none d-lg-block"
          ></BIcon>
          <span class="d-block d-lg-none">Connections</span>
        </router-link>
        <router-link to="/portal/messages" class="mx-lg-5 nav-link">
          <BIcon
            icon="chat-right-quote"
            scale="1.5"
            alt="Messages"
            class="d-none d-lg-block"
          ></BIcon>
          <span class="d-block d-lg-none">Messages</span>
        </router-link>
        <router-link to="/portal/rooms" class="mx-lg-5 nav-link">
          <span class="d-block d-lg-none">Rooms</span>
        </router-link>
        <router-link to="/portal/mentors" class="mx-lg-5 nav-link">
          <span class="d-block d-lg-none">Mentors</span>
        </router-link>
        <router-link to="/portal/profile" class="mx-lg-5 nav-link">
          <span class="d-block d-lg-none">My Profile</span>
        </router-link>
      </BNavbarNav>
      <BNavbarNav right>
          <router-link to="/" class="mx-lg-5 nav-link">
              <span>Logout</span>
          </router-link>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script>
import { mapGetters } from "vuex";
import {
  BIcon,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
} from "bootstrap-vue";

export default {
  name: "PortalNav",
  computed: {
    ...mapGetters("User", ["getCurrentUser"]),
  },
  components: {
    BIcon,
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
  },
};
</script>

<style scoped></style>
