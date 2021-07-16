<template>
  <BRow>
    <PortalNav></PortalNav>
    <BRow class="mt-5 mx-auto">
      <BCol md="3" align-self="stretch">
        <PortalSideNav></PortalSideNav>
      </BCol>
      <BCol md="9" align-self="stretch">
        <router-view></router-view>
      </BCol>
    </BRow>
    <CreateRoomModal></CreateRoomModal>
    <EditProfileModal></EditProfileModal>
  </BRow>
</template>

<script>
import PortalNav from "../../components/Navbars/PortalNav";
import PortalSideNav from "../../components/Navbars/PortalSideNav";
import { BRow, BCol } from "bootstrap-vue";
import CreateRoomModal from "../../components/Modals/CreateRoomModal";
import EditProfileModal from "../../components/Modals/EditProfileModal";

export default {
  name: "Portal",
  components: {
    EditProfileModal,
    CreateRoomModal,
    PortalSideNav,
    PortalNav,
    BCol,
    BRow,
  },
};
</script>

<style scoped></style>
