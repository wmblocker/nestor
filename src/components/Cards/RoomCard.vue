<template>
  <div>
    <BCard no-body class="overflow-hidden" style="max-width: 540px">
      <BRow no-gutters>
        <BCol md="6">
          <BCardImg
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></BCardImg>
        </BCol>
        <BCol md="6">
          <BCardBody :title="room.description">
            <BCardText>By {{ getCurrentUser.name }}</BCardText>
          </BCardBody>
        </BCol>
      </BRow>
      <template #footer>
        <router-link :to="getJitsiRoomUrl" class="float-end">
          <slot>Enter Room</slot>
        </router-link>
      </template>
    </BCard>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  BCard,
  BCol,
  BRow,
  BCardImg,
  BCardText,
  BCardBody,
} from "bootstrap-vue";

export default {
  name: "RoomCard",
  props: {
    mentorID: {
      type: String,
      required: true,
    },
    roomID: {
      type: String,
      required: true,
    },
    room: {
      type: Object,
      required: true,
    },
    mentor: {
      required: true,
    },
  },
  computed: {
    ...mapGetters("User", ["getCurrentUser"]),
    getJitsiRoomUrl() {
      return `room/${this.roomID}`;
    },
  },
  components: {
    BCard,
    BCol,
    BRow,
    BCardImg,
    BCardText,
    BCardBody,
  },
};
</script>

<style scoped></style>
