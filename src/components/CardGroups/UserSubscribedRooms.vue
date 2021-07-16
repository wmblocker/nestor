<template>
  <div class="user-subscribed-rooms">
    <slot>Rooms You are Subscribed To</slot>
    <BRow>
      <template v-for="(room, roomId) in getMenteeRoomsById(getCurrentUser.id)">
        <BCol cols="6" :key="roomId">
          <RoomCard
            :room="getRoomById(roomId, room.mentorId)"
            :mentorID="room.mentorId"
            :roomID="roomId"
          ></RoomCard>
        </BCol>
      </template>
    </BRow>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import { mapGetters } from "vuex";
import RoomCard from "../Cards/RoomCard";

export default {
  name: "UserSubscribedRooms",
  computed: {
    ...mapGetters("Rooms", ["getRoomById"]),
    ...mapGetters("Mentors", ["getMentorById"]),
    ...mapGetters("Mentees", ["getMenteeRoomsById"]),
    ...mapGetters("User", ["getCurrentUser"]),
  },
  components: { RoomCard, BRow, BCol },
};
</script>

<style scoped></style>
