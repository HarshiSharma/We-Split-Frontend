<template>
  <div id="dashboard">
    <!-- <h1>Welcome {{data.name}}!!</h1> -->
    <!-- <p>You should only get here if you're authenticated!</p>
    <p v-if="data">Your email address: {{ data.email }}</p>
    <p v-if="!data">Please sign up</p>-->
    <div class="splitData">
      <div class="amount text-center">
        <div class="w-50 d-inline-block p-3 bg-danger text-light">Amount Owe: {{data.oweAmount}}</div>
        <div
          class="w-50 d-inline-block p-3 mb-1 bg-secondary text-light"
        >Amount Lent: {{data.lentAmount}}</div>
      </div>
      <div class="friends">
        <b-list-group>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
            v-for="friend in friends"
            @click="email=friend.friend_email, showprofile()"
          >
            {{friend.friend_name}}
            <p class="friendAmount">{{friend.money_total}}</p>
          </b-list-group-item>
        </b-list-group>

        <router-link to="/newFriend">
          <button class="addFriend">Add Friend</button>
        </router-link>
      </div>
    </div>
    <button class="addExpense"></button>
  </div>
</template>

<script>
//import axios from "axios";
import friendProfile from "./friendProfile";
export default {
  data() {
    return {
      email: ""
    };
  },
  computed: {
    data() {
      //console.log(this.$store.getters.user);
      if (!this.$store.getters.user) {
        return false;
      }
      return this.$store.getters.user;
    },
    friends() {
      console.log(this.$store.getters.friends);
      if (!this.$store.getters.friends) {
        return false;
      }
      return this.$store.getters.friends;
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchFriends");
  },
  methods: {
    showprofile() {
      this.$store.dispatch("friendProfile", this.email);
    }
  }
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: grey;
}
.amount,
.friends {
  margin: 5%;
}
.friendAmount {
  padding: 1%;
  background-color: rgb(101, 172, 101);
  border-radius: 5%;
  width: 10%;
  color: white;
  margin: 0 !important;
}
.addFriend {
  margin: 5% 20% 0 25%;
  width: 50%;
  height: 40px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#4eb5e5),
    to(#389ed5)
  );
  background: linear-gradient(to bottom, #23749a 0%, #11567b 100%);
  border: none;
  border-radius: 5px;
  position: relative;
  border-bottom: 4px solid #1a6390;
  color: #efefef;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
}
.addFriend a {
  color: #ececec;
}
.addExpense {
  background-image: url("https://res.cloudinary.com/dgztdidvo/image/upload/v1573739835/plus-circular-button_lyisng.svg");
  background-repeat: no-repeat;
  width: 4%;
  height: 49px;
  /* margin-bottom: 0 !important; */
  position: fixed;
  bottom: 0px;
  right: 0px;
  border: none;
}
@media only screen and (max-width: 768px) {
  .addExpense {
    background-image: url("https://res.cloudinary.com/dgztdidvo/image/upload/v1573739835/plus-circular-button_lyisng.svg");
    background-repeat: no-repeat;
    width: 12%;
  }
}
</style>
