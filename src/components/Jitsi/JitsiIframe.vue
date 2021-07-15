<template>
  <div id="jitsi-iframe"></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "JitsiIframe",
  data() {
    return {
      api: null,
    };
  },
  computed: {
    ...mapState("User", ["user"]),
  },
  mounted() {
    if (this.$route.params.roomID && this.user.token) {
      this.api = new JitsiMeetExternalAPI("8x8.vc", { // eslint-disable-line
        roomName: `vpaas-magic-cookie-b34307fd6806488fa62b1f3631405801/${this.$route.params.roomID}`,
        parentNode: document.querySelector("#jitsi-iframe"),
        jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEvZWM4ODExLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNjM5NDQwOSwibmJmIjoxNjI2Mzg3MjA0LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtYjM0MzA3ZmQ2ODA2NDg4ZmE2MmIxZjM2MzE0MDU4MDEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJibG9ja2VyLndpbGxpYW0zIiwiaWQiOiJnb29nbGUtb2F1dGgyfDExNDAwNTg0MDkwNDExMDcyNTE0OSIsImF2YXRhciI6IiIsImVtYWlsIjoiYmxvY2tlci53aWxsaWFtM0BnbWFpbC5jb20ifX19.aFgdGtbTmQVKcrdsGQHBe6BhIRWexFX9aTZaq73V-nXEKub8ibHKkXCuJtBw2Ad7zarHO1LNKmjcdhPEJyadhP-i-daDsr4AGfr0ce81l_faTojY8PER8A6bEgVfZS5u3kYY3rwMw3Kj0Ioj8vtT1RBwG24N-y8c113gCtBNi5TZmwLLTvf5lCkjxb-wD9zNBK1kO3m9rsql7FvTzBzjffLC0S9tAmrbw57hRq8GsO5KWmfr7cS_IcYw-1_L_16taEY0UxgEGiY9Wdn-sAlttdwDEvg4USSV6cmZqUdb9rsvN0DNuCoT1ngK5LS5jm0Kb1V9bp_LErQcmmY1s5wmTw",
      });
    }
  },
  methods: {},
};
</script>

<style scoped>
#jitsi-iframe {
  height: 600px;
}
</style>
