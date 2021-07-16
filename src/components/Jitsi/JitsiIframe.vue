<template>
  <div class="jitsi-room">
    <template v-if="joined">
      <div id="jitsi-iframe"></div>
      <b-row class="mt-5">
        <b-col md="12">
          <p>{{ getDetailedDescription }}</p>
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
        jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEvZWM4ODExLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNjQ2MTAzNywibmJmIjoxNjI2NDUzODMyLCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJibG9ja2VyLndpbGxpYW0zIiwiaWQiOiJnb29nbGUtb2F1dGgyfDExNDAwNTg0MDkwNDExMDcyNTE0OSIsImF2YXRhciI6IiIsImVtYWlsIjoiYmxvY2tlci53aWxsaWFtM0BnbWFpbC5jb20ifX19.X6GV3YMuZvHVntA1Ly3vQqdGF6UHbGGRV2VMoq-xmbOF_2FcGPdpw3vJrRiXhggSkSpWMDp7DN9tHCukY7IEYoA4U24o_Q-gU_Dz0QLkaaURK9svGSlV-mFWhwz2tNlTdDRnt3LaYGNlxldfQLz8JsXv0Oqu76KcA-AcUeJVeSw-wd6aiu8DisOM89mxQdjJz6GWB_hzxoiqrFBnFyeZVwCbljKq3EIPtTxkBBMm7iORm4H7ErLoOag0zO0Y9ZoMJAYn8MYD_iSMRb89Oe6hXB_Enm_cAs-Gb2GkneqLn3KiF1xZCMSMstdJltban2SaNAnjL7niucCZYW3MZeJTmg",
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
    getDetailedDescription() {
      return this.getRoomById(this.$route.params.roomID, this.getCurrentUser.id)
        .detailedDescription;
    },
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
