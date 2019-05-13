<template>
  <div class="container">
    <h1>Ultimele cărți adăugate:</h1>
    <ul>
      <li><Book /></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 20px 300px;
}
h1 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 25px;
  margin: 20px 0;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
}
</style>

<script>
import Book from "./BookCard.vue";
export default {
  components: {
    Book
  }
};
</script>
