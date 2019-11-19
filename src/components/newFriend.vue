<template>
  <div>
    <div class="newFriend align-content-center justify-content-center">
      <form @submit.prevent="onSubmit" class="form-horizontal">
        <div class="wrap-input">
          <label>E-Mail</label>
          <input class="input" type="email" name="name" v-model="email" placeholder="email..." />
          <button type="submit" class="mx-auto mt-5">Add Friend</button>
          <div class="alerts">
            <b-alert show variant="success" v-if="status==='Success'">Friend Added</b-alert>
            <b-alert show variant="info" v-if="status==='Already Friend'">Already a friend</b-alert>
            <b-alert show variant="danger" v-if="status==='Not A User'">Not a user</b-alert>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  computed: {
    status() {
      console.log(this.$store.getters.friendStat);
      if (!this.$store.getters.friendStat) {
        return false;
      }
      return this.$store.getters.friendStat;
    }
  },
  methods: {
    onSubmit() {
      const friend_email = this.email;
      console.log(friend_email);
      this.$store.dispatch("addFriend", friend_email);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
.alerts {
  margin: 2%;
}
.newFriend {
  margin: 15%;
  padding: 5%;
  border: 0.5px solid #e2e2e2;
  box-shadow: 5px 5px 2px -2px #a5a5a5;
}
.wrap_input {
  width: 100%;
  border-bottom: 2px solid #dbdbdb;
  margin-bottom: 45px;
}
label {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #999999;
  line-height: 1.2;
  padding-left: 2px;
}
.input {
  display: block;
  height: 50px;
  width: 100%;
  background: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #727171;
  line-height: 1.2;
  padding: 0 2px;
  border-top: none;
  border-right: none;
  border-left: none;
}
button {
  display: block;
  background: linear-gradient(
    to top,
    #1c3eb4,
    #154cbd,
    #1059c6,
    #1266ce,
    #1b73d5
  );

  border-radius: 11px;
  height: 54px;
  line-height: 52px;
  width: 220px;
  padding-left: 8px;
  /* float: left; */
  color: #fff;
  -webkit-box-shadow: 5px 5px 2px -2px #a5a5a5;
  box-shadow: 5px 5px 2px -2px #a5a5a5;
}
</style>