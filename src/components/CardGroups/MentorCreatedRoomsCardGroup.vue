<template>
  <div class="mentor-created-rooms">
    <slot>Rooms Created By Mentors</slot>
    <BRow>
      <BCol cols="4">
        <RoomCard></RoomCard>
      </BCol>
      <BCol cols="4">
        <RoomCard></RoomCard>
      </BCol>
      <BCol cols="4">
        <RoomCard></RoomCard>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import RoomCard from "../Cards/RoomCard";
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "MentorCreatedRooms",
  components: {
    RoomCard,
    BCol,
    BRow,
  },
};
</script>

<style scoped></style>
