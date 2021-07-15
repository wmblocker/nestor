<template>
  <div class="mentors">
    <h2>Mentors</h2>
    <MentorsFollowingCardGroup class="mt-5"></MentorsFollowingCardGroup>
    <RecommendedMentorsCardGroup class="mt-5"></RecommendedMentorsCardGroup>
  </div>
</template>

<script>
import RecommendedMentorsCardGroup from "../../components/CardGroups/RecommendedMentorsCardGroup";
import MentorsFollowingCardGroup from "../../components/CardGroups/MentorsFollowingCardGroup";
export default {
  name: "Mentors",
  components: { MentorsFollowingCardGroup, RecommendedMentorsCardGroup },
};
</script>

<style scoped></style>
