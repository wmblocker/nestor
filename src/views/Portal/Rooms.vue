<template>
  <div>
    <div>
      <div class="mt-3">
        <h2 class="d-inline-block">Rooms</h2>
        <CreateRoomButton class="d-inline-block float-end"></CreateRoomButton>
      </div>
      <UserCreatedRoomsCardGroup class="mt-5"
        >Your Rooms</UserCreatedRoomsCardGroup
      >
      <MentorCreatedRoomsCardGroup class="mt-5"></MentorCreatedRoomsCardGroup>
    </div>
  </div>
</template>

<script>
import UserCreatedRoomsCardGroup from "../../components/CardGroups/UserCreatedRoomsCardGroup";
import MentorCreatedRoomsCardGroup from "../../components/CardGroups/MentorCreatedRoomsCardGroup";
import CreateRoomButton from "../../components/Buttons/CreateRoomButton";

export default {
  name: "Rooms",
  components: {
    CreateRoomButton,
    MentorCreatedRoomsCardGroup,
    UserCreatedRoomsCardGroup,
  },
};
</script>

<style scoped></style>
