<template>
  <div @load="wtf()">
    <div class="newExpense align-content-center justify-content-center m-5 m-sm-2">
      <div class="alerts">
        <div class="alert alert-dismissible alert-success" v-if="status==200">
          <button type="button" class="close" data-dismiss="alert" @click="status=0">&times;</button>
          <strong>Expense Added</strong>
        </div>
        <div
          class="alert alert-dismissible alert-danger"
          v-if="status==400||status==401||status==500||status==501"
        >
          <button type="button" class="close" data-dismiss="alert" @click="status=0">&times;</button>
          <strong>Failed</strong>
        </div>
        <div class="alert alert-dismissible alert-danger" v-if="unequal_error">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Wrong Split Distribution</strong>
        </div>
      </div>
      <form v-on:submit.prevent="onSubmit,onUnequalSubmit" class="form-horizontal">
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
          <div class="splitUnequal" v-if="splitUnequally">
            <div class="form-group" v-for="(friend,index) in friend_email">
              <label>{{friend}}</label>
              <input
                type="number"
                class="form-control"
                required="required"
                v-model="unequal_amount[index]"
                placeholder="Enter Amount"
              />
            </div>
            <button @click="onUnequalSubmit()" class="btn draw-border m-1">Split Bill</button>
            <button @click="splitUnequally=false" class="btn draw-border m-1">Back</button>
          </div>
          <button @click="onSubmit" class="btn draw-border" v-if="!splitUnequally">Split Equally</button>
          <button
            @click="splitUnequal()"
            class="btn draw-border"
            v-if="!splitUnequally"
          >Split Unequally</button>
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
      amount: null,
      friend_email: [],
      bill: [],
      createdOn: Date.now(),
      splitUnequally: false,
      unequal_amount: [],
      unequal_error: false
    };
  },
  computed: {
    userData() {
      //console.log(this.$store.getters.user);
      if (!this.$store.getters.userEmail) {
        return false;
      }
      return this.$store.getters.userEmail;
    },
    friends() {
      //console.log(this.$store.getters.friends);
      if (!this.$store.getters.friends) {
        return false;
      }
      return this.$store.getters.friends;
    },
    status() {
      return this.$store.getters.splitStatus;
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchFriends");
  },
  methods: {
    onUnequalSubmit() {
      var main_amount = parseInt(this.amount);
      var u_amt = this.unequal_amount;
      function arr() {
        var sum = 0;
        u_amt.forEach(element => {
          sum += parseInt(element);
        });
        return sum;
      }
      const total = arr();
      console.log(total);

      console.log(main_amount);
      if (total === main_amount) {
        var arr = [];
        this.friend_email.map(function(key, index) {
          const d = {
            user_id: key,
            amount_paid: u_amt[index]
          };
          arr.push(d);
        });

        this.bill = arr;

        const splitData = {
          created_by: this.userData,
          description: this.name,
          bill_amount: this.amount,

          bill_involvement: this.bill
        };
        console.log(splitData);
        this.$store.dispatch("splitExpense", splitData);
      } else {
        this.unequal_error = true;
        console.log("wrong amount");
      }
    },
    onSubmit() {
      this.splitEqually();
      const splitData = {
        created_by: this.userData,
        description: this.name,
        bill_amount: this.amount,

        bill_involvement: this.bill
      };
      //console.log(splitData);
      this.$store.dispatch("splitExpense", splitData);
    },
    splitEqually() {
      this.friend_email.push(this.userData);

      const len = this.friend_email.length;
      const amt = this.amount / len;
      var arr = [];
      this.friend_email.map(x => {
        const d = {
          user_id: x,
          amount_paid: amt
        };
        this.bill.push(d);
      });
      console.log(this.bill);
    },
    splitUnequal() {
      this.friend_email.push(this.userData);
      this.splitUnequally = !this.splitUnequally;
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