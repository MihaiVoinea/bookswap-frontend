<script>
export default {
  mounted() {
    this.axios(
      this.$store.getters.API_URI + "/auth/getjwt?id=" + this.$route.query.id
    ).then(response => {
      if (response.data.jwt) {
        this.$store.commit("SET_JWT", response.data.jwt);
        this.$store.commit("SET_AUTHENTICATED_STATUS", true);
        this.axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
         this.$router.push("/dashboard/latest");
         this.$store.dispatch("loadUser");
      } else this.$router.push("/login");
    });
  }
};
</script>
