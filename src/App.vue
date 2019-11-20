<template>
  <div id="app">
    <app-header />
    <app-nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Layout/header";
import nav from "./Layout/newNav";
//import Vue from "vue";
export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-nav": nav
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
* {
  font-family: "Acme", sans-serif;
}
body,
html {
  margin: 0;
}
</style>