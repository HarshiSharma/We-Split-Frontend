<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">We Split</a>
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="nav navbar-nav navbar-right" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ac" v-if="!isLogged">
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
        <li class="nav-item active" v-if="!isLogged">
          <router-link class="nav-link" to="/signin">Sign In</router-link>
        </li>
        <li v-if="isLogged">
          <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="isLogged">
          <a class="logout nav-link" @click="onLogout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isLogged: this.checkIfIsLogged()
    };
  },
  created() {
    this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    });
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
    checkIfIsLogged() {
      if (!this.$store.getters.isAuthenticated) return false;
      else return true;
    }
  }
};
</script>
<style scoped>
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.x {
  background-color: rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  color: #fff;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
</style>