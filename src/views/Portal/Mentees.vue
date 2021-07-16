<template>
  <div class="mentors">
    <h2>Mentees</h2>
    <RecommendedMenteesCardGroup></RecommendedMenteesCardGroup>
  </div>
</template>

<script>
import RecommendedMenteesCardGroup from "../../components/CardGroups/RecommendedMenteesCardGroup";

export default {
  name: "Mentors",
  components: { RecommendedMenteesCardGroup },
};
</script>

<style scoped></style>
