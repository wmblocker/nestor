<template>
  <BModal id="loginWithEmailModal" title="Login With Email" hide-footer>
    <LoginWithEmailForm></LoginWithEmailForm>
  </BModal>
</template>

<script>
import { BModal } from "bootstrap-vue";
import LoginWithEmailForm from "../Forms/LoginWithEmailForm";

export default {
  name: "LoginWithEmail",
  components: {
    LoginWithEmailForm,
    BModal,
  },
};
</script>

<style scoped></style>
