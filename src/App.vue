<template>
  <div id="app container-fluid">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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
