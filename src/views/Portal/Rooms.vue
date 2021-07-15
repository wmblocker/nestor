<template>
  <div>
      <div v-if="$route.params.roomId">
          <h2>Room: </h2>
          <JitsiIframe></JitsiIframe>
      </div>
      <div v-else>

      </div>


  </div>
</template>

<script>
import JitsiIframe from "../../components/Jitsi/JitsiIframe";

export default {
  name: "Rooms",
  components: {
    JitsiIframe,
  },
};
</script>

<style scoped></style>
