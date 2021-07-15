<template>
  <div>
    <BCard no-body class="overflow-hidden" style="max-width: 540px">
      <BRow no-gutters>
        <BCol md="6">
          <BCardImg
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></BCardImg>
        </BCol>
        <BCol md="6">
          <BCardBody title="Horizontal Card">
            <BCardText> Default Content </BCardText>
          </BCardBody>
        </BCol>
      </BRow>
      <template #footer>
        <router-link to="rooms/jitsi" class="float-end">Enter Room</router-link>
      </template>
    </BCard>
  </div>
</template>

<script>
import {
  BCard,
  BCol,
  BRow,
  BCardImg,
  BCardText,
  BCardBody,
} from "bootstrap-vue";

export default {
  name: "RoomCard",
  components: {
    BCard,
    BCol,
    BRow,
    BCardImg,
    BCardText,
    BCardBody,
  },
};
</script>

<style scoped></style>
