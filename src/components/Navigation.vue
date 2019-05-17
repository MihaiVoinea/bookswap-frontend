<template>
  <nav>
    <div>
      <img src="../assets/img/icon.svg" alt="BookSwap" />
      <ul>
        <li><router-link to="/dashboard/latest">Explorează</router-link></li>
        <li><router-link to="/dashboard/mybooks">Cărțile tale</router-link></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div class="navigation-right-content">
        <a href="#" id="dropdown-toggle">
          {{ this.$store.state.displayName }}
          <img src="../assets/img/navigation/expand-button.svg" alt="Expand" />
        </a>
        <transition name="fade">
          <ul v-if="isDropdownOpen" class="nav-dropdown">
            <li><router-link to="/dashboard/settings">Setări</router-link></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </transition>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-dropdown {
  display: block;
  position: absolute;
  top: 1.5em;
  right: 0px;
  background: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.1);
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  & > li {
    a {
      padding: 20px;
      display: block;
      margin: 0;
    }
  }
  & > li:hover {
    background: #f9f9f9;
  }
}
.navigation-right-content {
  position: absolute;
  right: 20px;
  a {
    text-decoration: none;
    color: black;
  }

  img {
    width: 1rem;
    position: relative;
    bottom: 1px;
    margin: 0 2px;
  }
}
nav {
  width: 100%;
  height: 5.5rem;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  // position: fixed;
  display: flex;
  & > div {
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
</style>

<script>
export default {
  data: () => {
    return {
      isDropdownOpen: false
    };
  },
  mounted() {
    window.addEventListener(
      "click",
      e => {
        if (e.target.id === "dropdown-toggle" && this.isDropdownOpen === false)
          this.isDropdownOpen = true;
        else this.isDropdownOpen = false;
      },
      false
    );
  }
};
</script>
