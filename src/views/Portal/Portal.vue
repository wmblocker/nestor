<template>
  <BRow>
    <PortalNav></PortalNav>

    <BCol cols="3">
      <PortalSideNav></PortalSideNav>
    </BCol>
    <BCol cols="9">
      <router-view></router-view>
    </BCol>
  </BRow>
</template>

<script>
import PortalNav from "../../components/Navbars/PortalNav";
import PortalSideNav from "../../components/Navbars/PortalSideNav";
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "Portal",
  components: {
    PortalSideNav,
    PortalNav,
    BCol,
    BRow},
};
</script>

<style scoped></style>
