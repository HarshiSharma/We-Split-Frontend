<template>
  <div>
    <div class="newFriend align-content-center justify-content-center m-5">
      <form @submit.prevent="onSubmit" class="form-horizontal">
        <fieldset>
          <h1>Add Friend</h1>
          <div class="form-group">
            <label>E-Mail</label>
            <input
              type="email"
              class="form-control"
              required="required"
              v-model="email"
              placeholder="Enter Email"
            />
          </div>
          <button type="submit" class="btn draw-border">Add Friend</button>
          <div class="alerts">
            <div class="alert alert-dismissible alert-danger" v-if="status==='NotAUser'">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <strong>Not a user</strong>
            </div>
            <div class="alert alert-dismissible alert-success" v-if="status==='Success'">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <strong>Friend Added</strong>
            </div>
            <div class="alert alert-dismissible alert-warning" v-if="status==='AlreadyFriend'">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <strong>Already a friend</strong>
            </div>
          </div>
        </fieldset>
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
  padding: 2rem !important;
}
.newFriend h1 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: "Acme", sans-serif;
}
button {
  color: #ffffff !important;
  font-weight: 900;
  letter-spacing: 4px;
}
</style>