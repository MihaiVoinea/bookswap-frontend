<template>
  <div class="container">
    <h1>Ultimele cărți adăugate:</h1>
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
  margin: 26px 0 0 0;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
    this.axios("http://localhost:8081/api/v1/book/")
      .then(response => {
        console.log(response);
        this.books = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>
