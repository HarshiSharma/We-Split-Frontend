<template>
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
  created() {
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