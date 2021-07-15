<template>
  <div class="px-2">
    <BNav vertical>
      <router-link to="/portal/profile" class="nav-link">
        <span><BIcon icon="person-circle" scale="1.5" shift-h="-8" alt="My Profile"></BIcon> My Profile</span>
      </router-link>
      <router-link to="/portal/rooms" class="nav-link">
        <span><BIcon icon="door-open" scale="1.5" shift-h="-8" alt="Rooms"></BIcon> Rooms</span>
      </router-link>
      <router-link to="/portal/mentors" class="nav-link">
        <span><BIcon icon="book" scale="1.5" shift-h="-8" alt="Mentors"></BIcon> Mentors</span>
      </router-link>
    </BNav>
  </div>
</template>

<script>
import { BNav, BIcon } from "bootstrap-vue";

export default {
  name: "PortalSideNav",
  components: {
    BNav,
    BIcon
  },
};
</script>

<style scoped></style>
