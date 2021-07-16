<template>
  <div id="app container-fluid">
    <router-view />
    <LoginWithEmailModal></LoginWithEmailModal>
  </div>
</template>

<script>
import LoginWithEmailModal from "./components/Modals/LoginWithEmailModal";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  mounted() {
    this.updateRooms();
    this.updateMentors();
    this.updateMentees();

    if(this.getCurrentUser) {
      this.$router.push({
        name: 'home'
      })
    }
  },
  computed: {
    ...mapGetters('User', ['getCurrentUser']),
  },
  methods: {
    ...mapActions("Rooms", ["updateRooms"]),
    ...mapActions("Mentors", ["updateMentors"]),
    ...mapActions("Mentees", ["updateMentees"]),
  },
  components: { LoginWithEmailModal },
};
</script>

<style>
#app {
  min-height: 100vh;
}
body {
  background: #eceff1;
}
</style>
