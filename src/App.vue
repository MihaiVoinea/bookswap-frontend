<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
export default {
  mounted() {
    if (this.$store.getters.JWT !== undefined)
      this.axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.getters.JWT;
  }
};
</script>
