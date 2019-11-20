<template>
  <!-- <b-nav v-if="auth" tabs fill>
    <b-nav-item href="/dashboard">Friend</b-nav-item>

    <b-nav-item>Group</b-nav-item>
    <b-nav-item>Activity</b-nav-item>
    <b-nav-item>Expense</b-nav-item>
  </b-nav>-->
  <ol v-if="auth" class="breadcrumb">
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
* {
  font-size: 20px;
  background-color: #272b30 !important;
  border: none !important;
  background-image: none !important;
  filter: none;
}
</style>