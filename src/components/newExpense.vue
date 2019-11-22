<template>
  <div>
    <div class="newExpense align-content-center justify-content-center m-5">
      <div class="alerts">
        <div class="alert alert-dismissible alert-success" v-if="status==200">
          <button type="button" class="close" data-dismiss="alert" @click="status=0">&times;</button>
          <strong>Expense Added</strong>
        </div>
      </div>
      <form @submit.prevent="onSubmit" class="form-horizontal">
        <fieldset>
          <h1>Add Expense</h1>
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
            <label>Category</label>
            <select class="custom-select" v-model="category">
              <option selected>Select Category</option>
              <option v-for="category in categories">{{category}}</option>
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
          <button type="submit" class="btn draw-border">Add Expense</button>
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
      categories: ["Food", "Grocery", "Laundry", "Others"],
      category: "",
      amount: null,
      createdOn: Date.now()
    };
  },
  computed: {
    status() {
      console.log(this.$store.getters.expenseStatus);
      return this.$store.getters.expenseStatus;
    },
    userEmail() {
      //console.log(this.$store.getters.user);
      if (!this.$store.getters.userEmail) {
        return false;
      }
      return this.$store.getters.userEmail;
    }
  },
  methods: {
    onSubmit() {
      const expenseData = {
        userid: this.userEmail,
        description: this.name,
        category: this.category,
        pex_amount: this.amount
      };
      this.$store.dispatch("addPersonalExpense", expenseData);
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
</style>