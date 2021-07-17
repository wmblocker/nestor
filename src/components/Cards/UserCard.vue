<template>
  <BCard
    :title="user.name"
    :img-src="getUserAvatar"
    img-alt="Avatar"
    img-top
    class="mx-auto mx-md-0"
  >
    <BCardText> {{ user.jobTitle }} </BCardText>
    <BCardText><BButton variant="link">Follow</BButton></BCardText>
    <template #footer>
      <slot
        ><small class="text-muted"
          >Last online {{ Math.floor(Math.random() * 20) }} mins ago</small
        ></slot
      >
    </template>
  </BCard>
</template>

<script>
import { BCardText, BCard } from "bootstrap-vue";

export default {
  name: "UserCard",
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  computed: {
    getUserAvatar() {
      return this.user.avatar || "https://picsum.photos/300/300/?image=41";
    },
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    const ref = firebase.database().ref("users"); // eslint-disable-line
    const _self = this;
    ref
      .child(this.userId)
      .get()
      .then((snapshot) => {
        _self.user = snapshot.val();
      });
  },
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
