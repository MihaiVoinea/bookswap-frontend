<template>
  <div class="container">
    <div>
      <img :src="book.coverUrl" :alt="book.title" class="book-cover" />
      <div class="book-info">
        <div>
          <h1>{{ book.title }}</h1>
          <div class="author">
            Autor: <span>{{ book.author }}</span>
          </div>
          <div class="description">
            {{ book.description }}
          </div>
        </div>
        <hr />
        <div class="addedBy-info">
          <div>
            Carte adăugată de:
            <h2>
              {{ addedByUser.fullName }}
            </h2>
          </div>
          <a :href="`mailto:${addedByUser.email}`">Oferă un schimb</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.addedBy-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    padding: 8px 15px;
    background: $blue-main;
    border-radius: 100px;
    border: 0;
    color: white;
    display: block;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: #2d60ed;
    }
  }
}
.book-info {
  display: flex;
  margin: 20px 20px 20px 0;
  flex-direction: column;
  justify-content: space-between;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #f5f5f5;
  margin: 1em 0;
  padding: 0;
}
.book-cover {
  width: 20%;
  height: 20%;
  min-width: 180px;
  margin: 20px;
}
.author {
  margin-top: 0.5rem;
  span {
    color: rgba(34, 37, 41, 0.8);
  }
}
h1 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 25px;
  display: inline-block;
}

h2 {
  color: #363636;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.125;
  margin: 5px 0 0 0;
  font-weight: normal;
}
.container > div {
  width: 70%;
  background: white;
  box-shadow: 0px 3px 7px rgba(54, 64, 82, 0.25);
  border-radius: 7px;
  margin: 0 auto;
  display: flex;
}
</style>

<script>
export default {
  data() {
    return {
      book: { coverUrl: "", title: "", author: "" },
      addedByUser: {
        displayName: "",
        email: "",
        fullName: "",
        id: "",
        location: "",
        photoUrl: "",
        region: ""
      }
    };
  },
  created() {
    this.axios
      .get(this.$store.state.apiUri + "/book/" + this.$route.params.id)
      .then(response => {
        this.book = response.data;
        this.axios
          .get(this.$store.state.apiUri + "/user/" + this.book.addedBy)
          .then(user => {
            this.addedByUser = user.data;
            console.log(this.addedByUser);
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
