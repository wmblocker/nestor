<template>
  <div class="text-center">
    <b-button size="lg" class="mb-2 mx-3" variant="outline-info" @click="up">
      <b-icon
        icon="hand-thumbs-up"
        aria-hidden="true"
        variant="success"
      ></b-icon>
    </b-button>
    <b-button size="lg" class="mb-2 mx-3" variant="outline-info" @click="down">
      <b-icon
        icon="hand-thumbs-down"
        aria-hidden="true"
        variant="danger"
      ></b-icon>
    </b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RateYourExperienceForm",
  methods: {
    ...mapActions("Mentors", ["incrementRating"]),
    up() {
      this.incrementRating();
      this.$bvModal.hide("rateYourExperienceModal");
    },
    down() {
      this.$bvModal.hide("rateYourExperienceModal");
    },
  },
};
</script>

<style scoped></style>
