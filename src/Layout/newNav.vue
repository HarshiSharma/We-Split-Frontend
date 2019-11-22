<template>
  <!-- <b-nav v-if="auth" tabs fill>
    <b-nav-item href="/dashboard">Friend</b-nav-item>

    <b-nav-item>Group</b-nav-item>
    <b-nav-item>Activity</b-nav-item>
    <b-nav-item>Expense</b-nav-item>
  </b-nav>-->
  <ol v-if="isLogged" class="breadcrumb">
    <li class="breadcrumb-item active">
      <a href="/dashboard">Friend</a>
    </li>

    <li class="breadcrumb-item">
      <a href="#">Activity</a>
    </li>
    <li class="breadcrumb-item">
      <a href="/expenses">Expense</a>
    </li>
  </ol>
</template>
<script>
export default {
  data() {
    return {
      isLogged: this.checkIfIsLogged()
    };
  },
  updated() {
    this.$bus.$on("logged", () => {
      this.isLogged = this.checkIfIsLogged();
    });
  },
  methods: {
    checkIfIsLogged() {
      if (!this.$store.getters.isAuthenticated) return false;
      else return true;
    }
  }
};
</script>
<style scoped>
* {
  font-size: 20px;
  background-color: #272b30 !important;
  border: none !important;
  background-image: none !important;
  filter: none;
}
</style>