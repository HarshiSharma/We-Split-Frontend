<template>
  <div id="expense">
    <div class="splitData">
      <div class="amount text-center">
        <div class="expenseText">
          You have spent
          <span class="text-danger">{{totalAmount}}</span> this month!
        </div>

        <div class="expenses">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Expense Name
              <span class="badge badge-danger">Expense Amount</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Expense Name
              <span class="badge badge-danger">Expense Amount</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Expense Name
              <span class="badge badge-danger">Expense Amount</span>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/newExpense">
        <button class="plus"></button>
      </router-link>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import friendProfile from "./friendProfile";
export default {
  data() {
    return {
      totalAmount: 5000
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

li {
  color: whitesmoke;
  font-size: 20px;
  letter-spacing: 2px;
}
.expenseText {
  font-size: 45px;
  letter-spacing: 5px;
  color: whitesmoke;
}
.amount,
.expenses {
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

.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.2rem "Roboto Slab", sans-serif;
  padding: 1em 2em;
  letter-spacing: 0.05rem;
}
.btn:focus {
  outline: 2px dotted #55d7dc;
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

.plus {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  width: 80px;
  height: 80px;
  color: #1a1a1a;
  background: #ed1c5b;
  border-radius: 50%;
  border: none;
  transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1),
    transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
}
.plus:after {
  content: "+";
  font-size: 2.5em;
  line-height: 1.1em;
}
.plus:hover {
  transform: rotate(45deg);
  box-shadow: 0 0 1px 15px rgba(138, 59, 88, 0.4),
    0 0 1px 30px rgba(138, 59, 88, 0.1), 0 0 1px 45px rgba(138, 59, 88, 0.1);
}

@media only screen and (max-width: 768px) {
  .addExpense {
    background-image: url("https://res.cloudinary.com/dgztdidvo/image/upload/v1573739835/plus-circular-button_lyisng.svg");
    background-repeat: no-repeat;
    width: 12%;
  }
}
</style>
