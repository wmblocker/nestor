<template>
  <div class="mentors-following">
    <slot>Mentors You Are Following</slot>
    <BRow>
      <BCol cols="4">
        <UserCard></UserCard>
      </BCol>
      <BCol cols="4">
        <UserCard></UserCard>
      </BCol>
      <BCol cols="4">
        <UserCard></UserCard>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import UserCard from "../Cards/UserCard";
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "MentorsFollowingCardGroup",
  components: {
    UserCard,
    BCol,
    BRow,
  },
};
</script>

<style scoped></style>
