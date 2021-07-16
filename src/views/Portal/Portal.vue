<template>
  <BRow>
    <PortalNav></PortalNav>
    <BRow class="mt-5">
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
import { mapActions } from "vuex";
import EditProfileModal from "../../components/Modals/EditProfileModal";

export default {
  name: "Portal",
  mounted() {
    this.updateRooms();
    this.updateMentors();
  },
  methods: {
    ...mapActions("Rooms", ["updateRooms"]),
    ...mapActions("Mentors", ["updateMentors"]),
  },
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
