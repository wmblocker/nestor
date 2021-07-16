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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "JitsiIframe",
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
        jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEvZWM4ODExLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNjQxODY0OSwibmJmIjoxNjI2NDExNDQ0LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJibG9ja2VyLndpbGxpYW0zIiwiaWQiOiJnb29nbGUtb2F1dGgyfDExNDAwNTg0MDkwNDExMDcyNTE0OSIsImF2YXRhciI6IiIsImVtYWlsIjoiYmxvY2tlci53aWxsaWFtM0BnbWFpbC5jb20ifX19.iyAdFzWI0cVIrHp9EixAuWVDNf7oLI6FYegws0-lgQl-8gEr80x1vbJu12AlfcIDF0XgfQmHukjSf4VxRIYNvvyMD1mO9Lhfka99m4_1TDdH_8MSImY2U0WyVj4lzdCbV_Xk_7DIscVz4EX3Q63qCqDDkRKd-OKOxloq18AuFuCkrVSYrMjXfeAumZIWlqmVFnxnZeuqmbUGR10oyGstEwJsTI_0FuOa2FRcTpu-6dR_im82_Y2h5e_zj6d9YtGLXrxC6NiUfPQkwu71w3sjAiEN4KvFgC_KH1HuFQEst_u8g0rS21naw55Vra5RO5idxRFHUCi3Dkhgc3CkT02vew",
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
      });

      this.api = api;
    }
  },
  computed: {
    ...mapGetters("User", ["getCurrentUser"]),
    ...mapGetters("Rooms", ["getRoomById"]),
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
