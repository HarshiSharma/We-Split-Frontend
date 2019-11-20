<template>
  <div>
    <div class="newExpense align-content-center justify-content-center m-5 m-sm-2">
      <form @submit.prevent="onSubmit" class="form-horizontal">
        <fieldset>
          <h1>Add Split</h1>

          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              required="required"
              v-model="name"
              placeholder="Enter Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleSelect2">Friends Involved</label>
            <select multiple class="form-control" id="exampleSelect2" v-model="friend_email">
              <option
                v-for="friend in friends"
                v-bind:value="friend.friend_email"
              >{{friend.friend_name}}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Amount</label>
            <input
              type="number"
              class="form-control"
              required="required"
              v-model="amount"
              placeholder="Enter Amount"
            />
          </div>
          <button type="submit" class="btn draw-border" @click="splitEqually">Split Equally</button>
          <button type="submit" class="btn draw-border">Split Unequally</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      amount: null,
      friend_email: [],
      bill: [],
      createdOn: Date.now()
    };
  },
  computed: {
    data() {
      //console.log(this.$store.getters.user);
      if (!this.$store.getters.user) {
        return false;
      }
      console.log($store.getters.user);
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
    onSubmit() {
      const splitData = {
        name: this.name,
        amount: this.amount,
        friends: this.friend_email,
        bill_involvement: this.bill,
        createdOn: this.createdOn
      };
      console.log(splitData);
    },
    splitEqually() {
      const len = this.friend_email.length;
      const amt = this.amount / len;
      var arr = [];
      this.friend_email.forEach(x => {
        this.bill.push({ friend: x, amount: amt });
      });
      console.log(this.bill);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
.alerts {
  margin: 2%;
}
.newExpense {
  padding: 2rem !important;
}
.newExpense h1 {
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: "Acme", sans-serif;
}
button {
  color: #ffffff !important;
  font-weight: 900;
  letter-spacing: 4px;
}
.draw-border {
  margin: 0 8% 0 2%;
}
@media only screen and (max-width: 768px) {
  .newExpense {
    padding: 1rem !important;
    letter-spacing: 2px;
  }
}
</style>