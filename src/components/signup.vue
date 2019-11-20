
<template>
  <div id="container">
    <div class="signup-form jumbotron m-5">
      <form @submit.prevent="onSubmit" class="form-horizontal">
        <fieldset>
          <h1>Sign Up</h1>
          <hr />
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              required="required"
              v-model="name"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group">
            <label>E-Mail</label>
            <input
              type="text"
              class="form-control"
              required="required"
              v-model="email"
              placeholder="Enter Email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              required="required"
              v-model="password"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      console.log(formData.email);
      this.$store.dispatch("signup", formData);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");

.signup-form {
  background-color: #f1f1f1 !important;
  padding: 2rem !important;
}
.signup-form h1 {
  color: black;
  text-align: center;
  font-family: "Acme", sans-serif;
}
</style>
