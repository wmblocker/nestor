<template>
  <div class="jitsi-room">
    <template v-if="joined">
      <div id="jitsi-iframe"></div>
      <b-row class="mt-5">
        <b-col md="12" >
          <p>{{getDetailedDescription}}</p>
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
  components: {RateYourExperienceModal},
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
        jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEvZWM4ODExLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNjQyNTk5NSwibmJmIjoxNjI2NDE4NzkwLCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJibG9ja2VyLndpbGxpYW0zIiwiaWQiOiJnb29nbGUtb2F1dGgyfDExNDAwNTg0MDkwNDExMDcyNTE0OSIsImF2YXRhciI6IiIsImVtYWlsIjoiYmxvY2tlci53aWxsaWFtM0BnbWFpbC5jb20ifX19.N_BbTcKsR5PiEC0M4VDDb436sFRqvbzIaVaHXrHeIsH49anL85LNAkiQQJ533vaTjl40ZxxQpIywNobWTqf9UMLRhH0Ld2jQlB6F5Stbt3MoW6gc6mvUDBwZupA5ixzrBhXzX7F8j4UeCtWBEpreBuQbh__G0arGYUm3qtSPv6Y3vfQw2kf94awmVB5frfdfvh1Er5O-9U4yjV3-pFBuHIYyg4D46kI2G2kXuyAi3SAtK1xMVFM4UBL_0c01QBRMkO2q10H7EyUiivn7GBq3LonXBdFviiY0vZPYuKK0qHBQ8IjUMm1M5Yyw5ROrHG5SCs6Bnkh22tXTns2chmwIdw",
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
        _self.$bvModal.show('rateYourExperienceModal');
      });

      this.api = api;
    }
  },
  computed: {
    ...mapGetters("User", ["getCurrentUser"]),
    ...mapGetters("Rooms", ["getRoomById"]),
    ...mapGetters("Mentors", ["getMentor"]),
    getDetailedDescription() {
      return this.getRoomById(this.$route.params.roomID, this.getCurrentUser.id).detailedDescription
    }
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
