<template>
  <div class="mentors">
    <h2>Mentors</h2>
    <RecommendedMentorsCardGroup></RecommendedMentorsCardGroup>
  </div>
</template>

<script>
import RecommendedMentorsCardGroup from "../../components/CardGroups/RecommendedMentorsCardGroup";

export default {
  name: "Mentors",
  components: { RecommendedMentorsCardGroup },
};
</script>

<style scoped></style>
