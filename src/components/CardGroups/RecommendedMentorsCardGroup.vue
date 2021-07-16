<template>
  <div class="recommended-mentors">
    <slot>Mentors Recommended For You</slot>
    <BRow class="mt-3">
      <div v-for="(mentor, mentorId) in getMentors" :key="mentorId">
        <BCol cols="6" v-if="mentorId !== getCurrentUser.id">
          <UserCard :userId="mentorId" :mentor="mentor"></UserCard>
        </BCol>
      </div>
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
