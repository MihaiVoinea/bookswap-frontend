<template>
  <div class="container">
    <h1>Setări:</h1>
    <form>
      <div>
        <h2>Contul tău</h2>
        <p>Poți modifica informațiile contului tău</p>
      </div>
      <hr />

      <div class="input-wrap">
        <label for="first_name">Prenume</label>
        <input type="text" name="first_name" />
      </div>
      <div class="input-wrap">
        <label for="last_name">Nume</label>
        <input type="text" name="last_name" />
      </div>
      <div class="input-wrap">
        <label for="region">Județ</label>
        <input type="text" name="region" />
      </div>
      <div class="input-wrap">
        <label for="city">Localitate</label>
        <input type="text" name="city" />
      </div>
    </form>
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
  min-height: 30em;
  background: white;
  box-shadow: 0px 3px 7px rgba(54, 64, 82, 0.25);
  border-radius: 7px;
  margin: 0 auto;
  & > * {
    margin: 5px 20px;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
    input {
      background-color: #fff;
      border: 1px solid #dbdbdb;
      color: #363636;
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);

      line-height: 1.5;
      border-radius: 3px;
      height: 1.75em;
    }
    label {
      font-weight: bold;
      margin: 0.5em 0;
    }
  }
}
</style>

<script>
export default {};
</script>
