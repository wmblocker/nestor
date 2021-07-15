<template>
  <div>
      <div v-if="$route.params.roomId">
          <h2>Room: </h2>
          <JitsiIframe></JitsiIframe>
      </div>
      <div v-else>
          <div class="mt-3">
              <h2 class="d-inline-block">Rooms</h2>
              <CreateRoomButton class="d-inline-block float-end"></CreateRoomButton>
          </div>
          <UserCreatedRoomsCardGroup class="mt-5">Your Rooms</UserCreatedRoomsCardGroup>
          <MentorCreatedRoomsCardGroup class="mt-5"></MentorCreatedRoomsCardGroup>
      </div>


  </div>
</template>

<script>
import JitsiIframe from "../../components/Jitsi/JitsiIframe";
import UserCreatedRoomsCardGroup from "../../components/CardGroups/UserCreatedRoomsCardGroup";
import MentorCreatedRoomsCardGroup from "../../components/CardGroups/MentorCreatedRoomsCardGroup";
import CreateRoomButton from "../../components/Buttons/CreateRoomButton";

export default {
  name: "Rooms",
  components: {
      CreateRoomButton,
      MentorCreatedRoomsCardGroup,
      UserCreatedRoomsCardGroup,
    JitsiIframe,
  },
};
</script>

<style scoped></style>
