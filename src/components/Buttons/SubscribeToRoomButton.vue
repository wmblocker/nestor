<template>
  <div>
    <BButton variant="link" @click="subscribe" v-if="room.open">
      Subscribe
    </BButton>
    <BButton variant="secondary" disabled v-if="!room.open"> Closed </BButton>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { BButton } from "bootstrap-vue";
export default {
  name: "SubscribeToRoom",
  props: {
    roomId: {
      type: String,
      required: true,
    },
    room: {
      type: Object,
      required: true,
    },
    mentorId: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions("Mentees", ["subscribeToRoom"]),
    subscribe() {
      this.subscribeToRoom({
        roomId: this.roomId,
        mentorId: this.mentorId,
        ...this.room,
      });
    },
  },
  components: {
    BButton,
  },
};
</script>

<style scoped></style>
