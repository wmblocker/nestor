<template>
  <div class="home">
    <BRow>
      <img
        class="brand-logo w-75 mx-auto"
        alt="Vue logo"
        src="../assets/logo.png"
      />
    </BRow>
    <BRow class="row text-center">
      <BCol cols="12">
        <LinkedInAuth></LinkedInAuth>
      </BCol>
      <BCol cols="12">
        <router-link to="/portal">Use email</router-link>
      </BCol>
    </BRow>
  </div>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue";

import LinkedInAuth from "../components/Buttons/LinkedInAuth";
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