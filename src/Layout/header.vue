<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">We Split</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="!auth">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>
          <li class="nav-item active" v-if="!auth">
            <router-link class="nav-link" to="/signin">Sign In</router-link>
          </li>
          <li v-if="auth">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li v-if="auth">
            <a class="logout nav-link" @click="onLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
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