<template>
  <div class="container">
    <header>
      <img src="../assets/img/logo.png" alt="BookSwap">
      <nav>
        <ul>
          <li>
            <a href="#">Explorează</a>
          </li>
          <li>
            <a href="#">Despre</a>
          </li>
          <li>
            <a href="#" class="btn-cont">Cont</a>
          </li>
          <li>
            <a href="#" class="btn btn-cta">Începe</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style lang="scss">
.btn {
  padding: 7px 30px 7px 30px;
  border-radius: 100px;
}

.btn-cta {
  background: $red-main;
  color: white;
  margin-left: 50px;
}

.btn-cont {
  color: $black-text;
}

.container {
  margin: 38px 278px 50px 278px;
}

header {
  display: flex;
  justify-content: space-between;
  img {
    width: 197px;
    height: 54px;
  }
  ul {
    li:not(:last-child) {
      margin-left: 30px;
    }
    li {
      display: inline;
      a {
        text-decoration: none;
        color: $gray-text;
      }
    }
  }
}
</style>
