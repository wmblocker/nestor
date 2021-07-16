<template>
  <div class="recommended-mentees">
    <slot>Mentees Recommended For You</slot>
    <BRow class="mt-3">
      <template v-for="(mentee, menteeId) in getMentees">
        <BCol md="4" v-if="menteeId !== getCurrentUser.id" :key="menteeId">
          <UserCard :userId="menteeId" :mentee="mentee"></UserCard>
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
  name: "RecommendedMenteesCardGroup",
  computed: {
    ...mapGetters("Mentees", ["getMentees"]),
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
