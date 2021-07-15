<template>
  <div class="user-created-rooms">
    <slot>Rooms Created By You</slot>
    <BRow>
      <BCol
        cols="6"
        v-for="(room, roomId) in getRoomsByMentorId(getCurrentUser.id)"
        :key="roomId"
      >
        <RoomCard
          :room="room"
          :roomID="roomId"
          :mentor="getMentorById(getCurrentUser.id)"
          :mentorID="getCurrentUser.id"
        ></RoomCard>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import { mapGetters } from "vuex";
import RoomCard from "../Cards/RoomCard";

export default {
  name: "UserCreatedRoomsCardGroup",
  computed: {
    ...mapGetters("Rooms", ["getRoomsByMentorId"]),
    ...mapGetters("Mentors", ["getMentorById"]),
    ...mapGetters("User", ["getCurrentUser"]),
  },
  components: { RoomCard, BRow, BCol },
};
</script>

<style scoped></style>
