<template>
  <BCard
    title="Title"
    img-src="https://picsum.photos/300/300/?image=41"
    img-alt="Image"
    img-top
  >
    <BCardText> Content </BCardText>
    <template #footer>
      <slot><small class="text-muted">Last online 3 mins ago</small></slot>
    </template>
  </BCard>
</template>

<script>
import { BCardText, BCard } from "bootstrap-vue";

export default {
  name: "UserCard",
  components: {
    BCard,
    BCardText,
  },
};
</script>

<style scoped>
.card {
  max-width: 200px;
  flex: 1 0 0%;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
}
</style>
