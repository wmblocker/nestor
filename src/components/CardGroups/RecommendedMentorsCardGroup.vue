<template>
  <div class="recommended-mentors">
    <slot>Mentors Recommended For You</slot>
    <BRow class="mt-3">
      <template v-for="(mentor, mentorId) in getMentors">
        <BCol cols="6" v-if="mentorId !== getCurrentUser.id" :key="mentorId">
          <UserCard :userId="mentorId" :mentor="mentor"></UserCard>
        </BCol>
      </template>
    </BRow>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import UserCard from "../Cards/UserCard";
import { mapGetters } from "vuex";
export default {
  name: "RecommendedMentorsCardGroup",
  computed: {
    ...mapGetters("Mentors", ["getMentors"]),
    ...mapGetters("User", ["getCurrentUser"]),
  },
  components: {
    UserCard,
    BRow,
    BCol,
  },
};
</script>

<style scoped></style>
