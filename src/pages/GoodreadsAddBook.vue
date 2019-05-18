<template>
  <div class="container">
    <div ref="smoothHeight" class="content">
      <div>
        <h2>Adaugă o carte</h2>
        <p>Poți adăuga o carte pe care dorești să o oferi la schimb</p>
      </div>
      <hr />
      <div class="input-wrap" style="margin-bottom: 20px;">
        <label for="query">Titlu/Autor/ISBN:</label>
        <input type="text" name="query" required @input="handleInput" />
      </div>
      <Loader v-if="loading" style="margin: 0 auto" />
      <div v-if="loaded">
        <strong>Alege o carte:</strong>
        <ul class="books-list">
          <Book
            v-for="(book, index) in books"
            :key="index"
            :book="book"
            :addBookCallbackFn="handleAddBook"
          />
        </ul>
      </div>
      <div v-if="notFound">
        <p>Cartea nu a putut fi găsită.</p>
        <router-link to="/dashboard/manualaddbook" id="add-book-manul-anchor"
          >Puteți adăuga cartea manual</router-link
        >
      </div>
    </div>

    <notifications group="add-book" />
  </div>
</template>

<style lang="scss" scoped>
#add-book-manul-anchor {
  color: $blue-main;
  margin-bottom: 20px;

  display: block;
}
.books-list {
  padding: 0;
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;
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
.content {
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
    textarea {
      height: 8em !important;
    }
    input[type="text"],
    textarea {
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
import Loader from "../components/Loader";
import Book from "../components/BookQueyItem";
import smoothHeight from "vue-smooth-height";
export default {
  components: {
    Loader,
    Book
  },
  data() {
    return {
      timeout: undefined,
      loading: false,
      loaded: false,
      notFound: false,
      books: []
    };
  },
  mixins: [smoothHeight],
  mounted() {
    this.$smoothElement({
      el: this.$refs.smoothHeight
    });
  },
  methods: {
    handleInput(event) {
      clearTimeout(this.timeout);
      this.loading = true;
      this.loaded = false;
      this.notFound = false;
      this.timeout = setTimeout(() => {
        if (event.target.value != "") {
          this.axios({
            method: "get",
            url: this.$store.state.apiUri + "/book?q=" + event.target.value
          })
            .then(response => {
              const books = response.data.slice(0, 3);
              this.books = books;
              this.loading = false;
              this.loaded = true;
            })
            .catch(error => {
              if (error.response.status == 404) {
                this.$notify({
                  group: "add-book",
                  type: "error",
                  title: "Căutarea a eșuat",
                  text: "Cartea nu a putut fi găsită!"
                });
                this.loading = false;
                this.loaded = false;
                this.notFound = true;
              } else {
                console.log(error);
                this.$notify({
                  group: "add-book",
                  type: "error",
                  title: "Căutarea a eșuat",
                  text: "A apărut o eroare la căutarea cărții!"
                });
                this.loading = false;
                this.loaded = false;
              }
            });
        } else {
          this.loading = false;
          this.loaded = false;
        }
      }, 500);
    },
    handleAddBook(book) {
      this.axios({
        method: "post",
        url: this.$store.state.apiUri + "/book",
        data: {
          title: book.title,
          author: book.author,
          coverUrl: book.coverUrl
        }
      })
        .then(response => {
          if (response.status === 200) {
            this.$notify({
              group: "add-book",
              type: "success ",
              title: "Adăugat cu success",
              text: "Cartea a fost adăugată!"
            });
          } else {
            console.log(response);
            this.$notify({
              group: "add-book",
              type: "error",
              title: "Adăugarea a eșuat",
              text: "A apărut o eroare la adăugarea cărții!"
            });
          }
        })
        .catch(error => {
          console.log(error);
          this.$notify({
            group: "add-book",
            type: "error",
            title: "Adăugarea a eșuat",
            text: "A apărut o eroare la adăugarea cărții!"
          });
        });
    }
  }
};
</script>
