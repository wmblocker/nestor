<template>
  <div class="home">
    <BRow>
      <img
        class="brand-logo w-75 mx-auto"
        alt="Vue logo"
        src="../assets/logo-transparent.png"
      />
    </BRow>
    <BRow class="row text-center">
      <BCol cols="12">
        <LinkedInAuth></LinkedInAuth>
      </BCol>
      <BCol cols="12">
        <BButton variant="link" v-b-modal="'loginWithEmailModal'"
          >Use email</BButton
        >
      </BCol>
    </BRow>
  </div>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue";

import LinkedInAuth from "../components/Buttons/LinkedInAuthButton";
export default {
  components: {
    BCol,
    BRow,
    LinkedInAuth,
  },
};
</script>

<style scoped lang="scss">
img {
  max-width: 600px;
}
</style>
