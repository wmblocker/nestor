<template>
  <BButton variant="link" @click="loginWithLinkedIn()">
    <img alt="LinkedIn Sign In" src="../../assets/signin-button.png" />
  </BButton>
</template>

<script>
import { BButton } from "bootstrap-vue";
import linkedInAuth from "./linkedin-login";
export default {
  name: "LinkedInAuth",
  components: {
    BButton,
  },
  methods: {
    loginWithLinkedIn: () => {
      const params = {
        response_type: "code",
        client_id: linkedInAuth.clientId,
        redirect_uri: "https://nestor-a7f1e.web.app/updateToken",
        state: "foobar",
        scope: "r_liteprofile r_emailaddress",
      };

      const qs = new URLSearchParams(params).toString();
      window.location = "https://www.linkedin.com/oauth/v2/authorization?" + qs;
    },
  },
};
</script>

<style scoped></style>
