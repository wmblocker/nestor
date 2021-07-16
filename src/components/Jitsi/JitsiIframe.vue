<template>
  <div class="jitsi-room">
    <template v-if="joined">
      <div id="jitsi-iframe"></div>
      <b-row class="mt-5">
        <b-col md="12">
        </b-col>
      </b-row>
    </template>
    <b-row v-if="!joined" class="mt-5">
      <b-col md="12" class="text-center">
        <p class="left-meeting-text">You left the meeting</p>
      </b-col>
    </b-row>
    <RateYourExperienceModal :mentor="getMentor"></RateYourExperienceModal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RateYourExperienceModal from "../Modals/RateYourExperienceModal";

export default {
  name: "JitsiIframe",
  components: { RateYourExperienceModal },
  data() {
    return {
      api: null,
      joined: true,
    };
  },
  mounted() {
    // const room = this.getRoomById(this.$route.params.roomID, this.getCurrentUser.id);
    const _self = this;

    if (this.$route.params.roomID) {
      const api = new JitsiMeetExternalAPI("8x8.vc", { // eslint-disable-line
        roomName: `vpaas-magic-cookie-b34307fd6806488fa62b1f3631405801/${this.$route.params.roomID}`,
        parentNode: document.querySelector("#jitsi-iframe"),
        jwt: window.JWT,
        userInfo: {
          email: this.getCurrentUser.email,
        },
      });

      api.addListener("videoConferenceJoined", () => {
        api.executeCommand("displayName", this.getCurrentUser.displayName);
      });

      api.addListener("readyToClose", () => {
        api.dispose();
        _self.joined = false;
        _self.$bvModal.show("rateYourExperienceModal");
      });

      this.api = api;
    }
  },
  computed: {
    ...mapGetters("User", ["getCurrentUser"]),
    ...mapGetters("Rooms", ["getRoomById"]),
    ...mapGetters("Mentors", ["getMentor"]),
  },
  methods: {},
};
</script>

<style scoped lang="scss">
#jitsi-iframe {
  height: 600px;
}

.left-meeting-text {
  font-size: 48px;
}
</style>
