<template>
  <div class="mentor-created-rooms">
    <slot>Rooms Created By Mentors</slot>
    <BRow>
      <template v-for="(mentor, mentorId) in getMentors">
        <template v-if="getCurrentUser.id !== mentorId">
          <BCol
            cols="6"
            v-for="(room, roomID) in getRoomsByMentorId(mentorId)"
            :key="room.name + mentor.updated"
            class="mt-3"
          >
            <RoomCard
              :room="room"
              :roomID="roomID"
              :mentor="mentor"
              :mentorID="mentorId"
              isMentorCreated="true"
              >Subscribe</RoomCard
            >
          </BCol>
        </template>
      </template>
    </BRow>
  </div>
</template>

<script>
import RoomCard from "../Cards/RoomCard";
import { BRow, BCol } from "bootstrap-vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MentorCreatedRooms",
  mounted() {
    this.updateRooms();
  },
  computed: {
    ...mapGetters("Rooms", ["getRoomsByMentorId"]),
    ...mapGetters("Mentors", ["getMentors"]),
    ...mapGetters("User", ["getCurrentUser"]),
  },
  methods: {
    ...mapActions("Rooms", ["updateRooms"]),
  },
  components: {
    RoomCard,
    BCol,
    BRow,
  },
};
</script>

<style scoped></style>
