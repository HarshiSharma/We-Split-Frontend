<template>
  <b-nav v-if="auth" tabs fill>
    <b-nav-item href="/dashboard">Friend</b-nav-item>

    <b-nav-item>Group</b-nav-item>
    <b-nav-item>Activity</b-nav-item>
    <b-nav-item>Expense</b-nav-item>
  </b-nav>
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
</style>