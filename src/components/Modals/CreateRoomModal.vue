<template>
  <BModal id="createRoomModal" title="New Room" hide-footer>
    <CreateRoomForm></CreateRoomForm>
  </BModal>
</template>

<script>
import { BModal } from "bootstrap-vue";
import CreateRoomForm from "../Forms/CreateRoomForm";

export default {
  name: "CreateRoomModal",
  components: {
    CreateRoomForm,
    BModal,
  },
};
</script>

<style scoped></style>
