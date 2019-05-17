<template>
  <div class="container">
    <form>
      <div>
        <h2>Contul tău</h2>
        <p>Poți modifica informațiile contului tău</p>
      </div>
      <hr />

      <div class="input-wrap">
        <label for="first_name">Prenume</label>
        <input type="text" name="first_name" v-model="firstName" />
      </div>
      <div class="input-wrap">
        <label for="last_name">Nume</label>
        <input type="text" name="last_name" v-model="lastName" />
      </div>
      <div class="input-wrap">
        <label for="region">Județ</label>

        <select id="region" @change="handleRegionChange">
          <option
            v-for="(region, index) in regions"
            :key="index"
            :value="region"
            :selected="region === selectedRegion"
            >{{ region }}</option
          >
        </select>
      </div>
      <div class="input-wrap">
        <label for="city">Localitate</label>
        <select id="city" @change="handleCityChange">
          <option
            v-for="(city, index) in cities"
            :key="index"
            :value="city"
            :selected="city === selectedCity"
            >{{ city }}</option
          >
        </select>
      </div>
      <input type="submit" value="Salvează" @click="handleSaveUser" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
input[type="submit"] {
  width: 20%;
  padding: 13px 35px;
  background: $blue-main;
  border-radius: 100px;
  border: 0;
  color: white;
  display: block;
  margin: 10px auto 20px auto;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #2d60ed;
  }
}
h1 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 25px;
  margin: 26px 0 0 0;
}
h2 {
  color: #363636;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.125;
  margin: 20px 0 0 0;
}
p {
  margin: 4px 0 0 0;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #f5f5f5;
  margin: 1em 0;
  padding: 0;
}
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 3px 7px rgba(54, 64, 82, 0.25);
  border-radius: 7px;
  margin: 3em auto;
  & > * {
    margin: 5px 20px;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
    input,
    select {
      padding: 0 10px;
      background-color: #fff;
      border: 1px solid #dbdbdb;
      color: #363636;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);

      line-height: 1.5;
      border-radius: 3px;
      height: 2em;
    }
    label {
      font-weight: bold;
      margin: 0.5em 0;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      firstName: this.$store.getters.DISPLAY_NAME,
      lastName: "",
      regions: [],
      selectedRegion: this.$store.getters.REGION,
      cities: [],
      selectedCity: this.$store.getters.LOCATION
    };
  },
  mounted() {
    const names = this.$store.getters.FULL_NAME.split(" ");
    if (names.length >= 2) {
      this.lastName = names[1];
    }

    this.axios({
      method: "GET",
      url: this.$store.state.apiUri + "/region"
    })
      .then(response => {
        this.regions = response.data;
        this.updateCities(this.selectedRegion);
      })
      .catch(error => console.log(error));
  },
  methods: {
    updateCities(region) {
      this.axios({
        method: "GET",
        url: this.$store.state.apiUri + "/region/" + region
      })
        .then(response => {
          this.cities = response.data;
        })
        .catch(error => console.log(error));
    },
    countSpaceCharacters(text) {
      return text.match(/([\s]+)/g).length;
    },
    handleSaveUser(event) {
      event.preventDefault();
      if (
        `${this.firstName} ${this.lastName}` !==
          this.$store.getters.FULL_NAME ||
        this.firstName !== this.$store.getters.DISPLAY_NAME ||
        this.selectedRegion !== this.$store.getters.REGION ||
        this.selectedCity !== this.$store.getters.LOCATION
      ) {
        this.axios({
          method: "PUT",
          url: this.$store.state.apiUri + "/user",
          data: {
            displayName: this.firstName,
            fullName: this.firstName + " " + this.lastName,
            region: this.selectedRegion,
            location: this.selectedCity
          }
        })
          .then(() => {
            this.$store.dispatch("loadUser");
          })
          .catch(error => console.log(error));
      }
    },
    handleRegionChange(event) {
      this.selectedRegion = event.target.value;
      this.cities = [];
      this.updateCities(this.selectedRegion);
    },
    handleCityChange(event) {
      this.selectedCity = event.target.value;
    }
  }
};
</script>
