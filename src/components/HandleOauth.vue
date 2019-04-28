<script>
export default {
  mounted() {
    this.axios(
      this.$store.getters.API_URI + "/auth/getjwt?id=" + this.$route.query.id
    ).then(response => {
      if (response.data.jwt) {
        this.$store.commit("SET_JWT", response.data.jwt);
        this.$store.commit("SET_AUTHENTICATED_STATUS", true);
        this.$store.commit("SET_ID", response.data._id);
        this.axios.defaults.headers.common["Authorization"] = response.data.jwt;
        this.$store.dispatch("loadUser");
        this.axios(this.$store.getters.API_URI + "/user").then(response => {
          console.log(response);
        });
        window.location.replace("/dashboard");
      } else window.location.replace("/login");
    });
  }
};
</script>
