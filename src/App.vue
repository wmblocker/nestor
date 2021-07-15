<template>
  <div id="app container-fluid">
    <router-view />
    <LoginWithEmailModal></LoginWithEmailModal>
  </div>
</template>

<script>
import LoginWithEmailModal from "./components/Modals/LoginWithEmailModal";
export default {
  name: "App",
  components: { LoginWithEmailModal },
};
</script>

<style>
#app {
  min-height: 100vh;
}
body {
  background: #eceff1;
}
</style>
