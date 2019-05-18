<template>
  <div class="card">
    <div class="cover">
      <a :href="`./viewbook/${this.book._id}`" @click="showPageViewBook">
        <img :src="book.coverUrl" alt="" />
      </a>
    </div>
    <div id="bookinformation-group">
      <div class="title" @click="showPageViewBook">
        <a :href="`./viewbook/${this.book._id}`">{{ book.title }}</a>
      </div>
      <div class="author">
        <!-- <a href="#"> -->
        {{ book.author }}
        <!-- </a> -->
      </div>
    </div>
    <div class="distance">
      {{
        distance === 0
          ? "Carte adăugată de tine"
          : `La ${Math.round(distance)}km distanță de tine`
      }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.distance {
  margin-bottom: 10px;
}
.title {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 44px;
  margin: 0 5px;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
.author {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  text-align: center;

  a {
    text-decoration: none;
    color: rgba(34, 37, 41, 0.8);
    &:hover {
      text-decoration: underline;
    }
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 300px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  margin: 10px 5px;
  .cover {
    width: 150px;
    height: 190px;
    margin: 0px auto;
    padding-top: 10px;
    img {
      max-height: 190px;
      max-width: 150px;
      min-height: 190px;
      width: auto;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>

<script>
export default {
  props: ["book"],
  data() {
    return {
      distance: 0
    };
  },
  mounted() {
    this.axios
      .get(this.$store.state.apiUri + "/user/distance/" + this.book.addedBy)
      .then(distanceResponse => {
        this.distance = distanceResponse.data.distance;
      })
      .catch(error => console.log(error));
  },
  methods: {
    showPageViewBook(event) {
      event.preventDefault();
      this.$router.push("/dashboard/viewbook/" + this.book._id);
    }
  }
};
</script>
