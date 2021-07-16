<template>
  <BModal id="editProfileModal" title="Edit Profile" hide-footer>
    <EditProfileForm></EditProfileForm>
  </BModal>
</template>

<script>
import { BModal } from "bootstrap-vue";
import EditProfileForm from "../Forms/EditProfileForm";

export default {
  name: "EditProfileModal",
  components: {
    EditProfileForm,
    BModal,
  },
};
</script>

<style scoped></style>
