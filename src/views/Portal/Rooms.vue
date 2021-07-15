<template>
  <div>
    <div v-if="$route.params.roomId">
      <h2>Room:</h2>
      <JitsiIframe></JitsiIframe>
    </div>
    <div v-else>
      <h2>Rooms</h2>
      <UserCreatedRoomsCardGroup class="mt-5"
        >Your Rooms</UserCreatedRoomsCardGroup
      >
      <MentorCreatedRoomsCardGroup class="mt-5"></MentorCreatedRoomsCardGroup>
    </div>
  </div>
</template>

<script>
import JitsiIframe from "../../components/Jitsi/JitsiIframe";
import UserCreatedRoomsCardGroup from "../../components/CardGroups/UserCreatedRoomsCardGroup";
import MentorCreatedRoomsCardGroup from "../../components/CardGroups/MentorCreatedRoomsCardGroup";

export default {
  name: "Rooms",
  components: {
    MentorCreatedRoomsCardGroup,
    UserCreatedRoomsCardGroup,
    JitsiIframe,
  },
};
</script>

<style scoped></style>
