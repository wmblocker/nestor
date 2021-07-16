<template>
  <div class="profile">
    <h2>{{getCurrentUser.name.length > 0 ? getCurrentUser.name : 'Hello!'}}</h2>
    <BRow>
      <BCol md="12">
        <b-avatar class="mr-3" variant="secondary"></b-avatar>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Profile",
  computed: {
    ...mapGetters('User', ['getCurrentUser'])
  }
};
</script>

<style scoped></style>
