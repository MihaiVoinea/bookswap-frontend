<template>
  <nav>
    <div>
      <img src="../assets/img/icon.svg" alt="BookSwap" />
      <ul>
        <li><a href="#">Explorează</a></li>
        <li><a href="#">Cărțile tale</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 5.5rem;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  display: flex;
  div {
    font-size: 1.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      margin: 0 10px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    a {
      text-decoration: none;
      color: $gray-text;
      margin-left: 30px;
      transition: color 0.2s ease-out;
      &:hover {
        color: $black-text;
      }
    }
  }
}
</style>
