<template>
  <div class="container">
    <div
      style="display: flex; justify-content: space-between; align-items: center;"
    >
      <h1>Cărțile tale:</h1>
      <router-link to="/dashboard/addbook"
        ><svg
          width="401.99px"
          height="401.99px"
          enable-background="new 0 0 401.994 401.994"
          version="1.1"
          viewBox="0 0 401.994 401.994"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m394 154.18c-5.331-5.33-11.806-7.994-19.417-7.994h-118.77v-118.78c0-7.611-2.666-14.084-7.994-19.414-5.329-5.326-11.797-7.992-19.419-7.992h-54.812c-7.612 0-14.084 2.663-19.414 7.993s-7.994 11.803-7.994 19.414v118.78h-118.77c-7.611 0-14.084 2.664-19.414 7.994s-7.993 11.797-7.993 19.413v54.819c0 7.618 2.662 14.086 7.992 19.411 5.33 5.332 11.803 7.994 19.414 7.994h118.77v118.78c0 7.611 2.664 14.089 7.994 19.417 5.33 5.325 11.802 7.987 19.414 7.987h54.816c7.617 0 14.086-2.662 19.417-7.987 5.332-5.331 7.994-11.806 7.994-19.417v-118.78h118.77c7.618 0 14.089-2.662 19.417-7.994 5.329-5.325 7.994-11.793 7.994-19.411v-54.819c-2e-3 -7.616-2.661-14.087-7.993-19.414z"
          />
        </svg>
        Adaugă o carte</router-link
      >
    </div>
    <ul>
      <li v-for="book in books" :key="book.id"><Book :book="book" /></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 25px;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
a {
  color: $blue-main;
  text-decoration: none;
  svg {
    width: 0.7em;
    height: 0.7em;
    fill: white;
    background: $blue-main;
    padding: 3px;
    border-radius: 100%;
    position: relative;
    right: 5px;
    top: 0.2em;
  }
}
</style>

<script>
import Book from "../components/BookCard.vue";
export default {
  components: {
    Book
  },
  data: () => {
    return {
      books: []
    };
  },
  mounted() {
    this.axios(this.$store.state.apiUri + "/book/me")
      .then(response => {
        this.books = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>
