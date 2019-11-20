
<template>
  <div class="container">
    <div class="login jumbotron m-5">
      <form @submit.prevent="onSubmit">
        <fieldset>
          <h1>LOGIN</h1>
          <hr />

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="password" />
          </div>

          <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
//import axios from "../axios.auth";
/* eslint-disable */
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("FYOU");
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password
      });
    }
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style scoped>
.login {
  background-color: #f1f1f1 !important;
  padding: 2rem !important;
}
.login h1 {
  color: black;
  text-align: center;
}
</style>
