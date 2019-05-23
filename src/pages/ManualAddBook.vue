<template>
  <div class="container">
    <form>
      <div>
        <h2>Adaugă o carte</h2>
        <p>Poți adăuga o carte pe care dorești să o oferi la schimb</p>
      </div>
      <hr />
      <div class="input-wrap">
        <label for="title">Titlu:</label>
        <input type="text" name="title" v-model="title" required />
      </div>
      <div class="input-wrap">
        <label for="author">Autor:</label>
        <input type="text" name="author" v-model="author" required />
      </div>
      <div class="input-wrap">
        <label for="description">Descriere:</label>
        <textarea name="description" v-model="description" />
      </div>
      <div class="input-wrap">
        <label for="cover">Link imagine copertă:</label>
        <input type="text" name="cover" v-model="cover" />
      </div>
      <input type="submit" value="Adaugă" @click="handleAddBook" required />
    </form>
    <notifications group="add-book" />
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
export default {
  data() {
    return {
      title: "",
      author: "",
      cover: "",
      description: ""
    };
  },
  methods: {
    handleAddBook(event) {
      event.preventDefault();
      if (this.title === "" || this.author === "" || this.cover === "")
        this.$notify({
          group: "add-book",
          type: "error",
          title: "Adăugarea a eșuat",
          text: "Toate câmpurile trebuie completate!"
        });
      else if (
        this.cover.match(
          // eslint-disable-next-line no-useless-escape
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
        ) == null
      )
        this.$notify({
          group: "add-book",
          type: "error",
          title: "Adăugarea a eșuat",
          text: "Link-ul pentru copertă este invalid!"
        });
      else {
        console.log("axios");
        this.axios({
          method: "post",
          url: this.$store.state.apiUri + "/book",
          data: {
            title: this.title,
            author: this.author,
            description: this.description === "" ? undefined : this.description,
            coverUrl: this.cover
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
  }
};
</script>
