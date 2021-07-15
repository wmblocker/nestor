<template>
  <BNavbar toggleable="lg" type="dark" variant="dark" class="px-3">
    <BNavbarBrand>
      <img src="../../assets/favicon-32x32.png" alt="Nestor" />
    </BNavbarBrand>
    <BNavbarToggle target="portal-nav-collapse"></BNavbarToggle>

    <BCollapse id="portal-nav-collapse" is-nav>
      <BNavbarNav class="mx-auto">
        <router-link :to="{ name: 'portalHome' }" class="mx-lg-5 nav-link">
          <BIcon icon="house-door" scale="1.5" alt="Home"></BIcon>
        </router-link>
        <router-link to="/portal/connections" class="mx-lg-5 nav-link">
          <BIcon icon="people" scale="1.5" alt="Connections"></BIcon>
        </router-link>
        <router-link to="/portal/messages" class="mx-lg-5 nav-link">
          <BIcon icon="chat-right-quote" scale="1.5" alt="Messages"></BIcon>
        </router-link>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script>
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
