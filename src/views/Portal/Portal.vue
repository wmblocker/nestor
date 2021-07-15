<template>
  <BRow>
    <PortalNav></PortalNav>
    <BRow>
      <BCol cols="3" align-self="stretch">
        <PortalSideNav></PortalSideNav>
      </BCol>
      <BCol cols="9" align-self="stretch">
        <router-view></router-view>
      </BCol>
    </BRow>
    <CreateRoomModal></CreateRoomModal>
  </BRow>
</template>

<script>
import PortalNav from "../../components/Navbars/PortalNav";
import PortalSideNav from "../../components/Navbars/PortalSideNav";
import { BRow, BCol } from "bootstrap-vue";
import CreateRoomModal from "../../components/Modals/CreateRoomModal";

export default {
  name: "Portal",
  components: {
    CreateRoomModal,
    PortalSideNav,
    PortalNav,
    BCol,
    BRow,
  },
};
</script>

<style scoped></style>
