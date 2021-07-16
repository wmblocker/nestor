<template>
  <div>
    <BButton variant="success" v-b-modal="'editProfileModal'"
      >Edit Profile</BButton
    >
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";
export default {
  name: "EditProfileButton",
  components: {
    BButton,
  },
};
</script>

<style scoped></style>
