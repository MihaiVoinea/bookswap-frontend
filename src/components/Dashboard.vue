<template>
  <div class="bookswap-app">
    <Navigation />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 20px 300px;
}
main {
  background-color: #f4f6fb;
  padding-bottom: 50px;
}
div.bookswap-app {
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
