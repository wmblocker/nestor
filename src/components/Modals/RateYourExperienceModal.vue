<template>
  <BModal id="rateYourExperienceModal" :title="'Rate your experience with ' + mentor.name" hide-footer>
    <RateYourExperienceForm></RateYourExperienceForm>
  </BModal>
</template>

<script>
import { BModal } from "bootstrap-vue";
import RateYourExperienceForm from "../Forms/RateYourExperienceForm";

export default {
  name: "RateYourExperienceModal",
  props: {
    mentor: {
      type: Object,
      required: true
    }
  },
  components: {
    RateYourExperienceForm,
    BModal,
  },
};
</script>

<style scoped></style>
