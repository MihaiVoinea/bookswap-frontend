<template>
  <div class="card">
    <div class="cover">
      <a href="#">
        <img src="../assets/img/book_placeholder.png" alt="" />
      </a>
    </div>
    <div id="bookinformation-group">
      <div class="title"><a href="#">Puterea prezentului</a></div>
      <div class="author"><a href="#">Eckhart Tolle</a></div>
    </div>
    <div class="distance">La 2.5km distanță de tine</div>
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
  height: 290px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  .cover {
    width: 150px;
    height: 190px;
    margin: 0px auto;
    padding-top: 10px;
    img {
      height: 100%;
      width: auto;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
