<template>
  <div class="mentors-following">
    <slot>Mentors You Are Following</slot>
    <BRow>
      <BCol cols="4"> </BCol>
      <BCol cols="4"> </BCol>
      <BCol cols="4"> </BCol>
    </BRow>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "MentorsFollowingCardGroup",
  components: {
    BCol,
    BRow,
  },
};
</script>

<style scoped></style>
