<template>
  <div class="dashboard-app">
    <Navigation />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
div.dashboard-app {
  background-color: #f4f6fb;
  height: 100vh;
  width: 100%;
}
</style>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>
