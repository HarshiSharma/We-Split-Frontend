<template>
  <div>
    <div class="newExpense align-content-center justify-content-center m-5">
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
      categories: ["Food", "Grocery", "Laundry"],
      category: "",
      amount: null,
      createdOn: Date.now()
    };
  },
  computed: {
    status() {}
  },
  methods: {
    onSubmit() {
      const expenseData = {
        name: this.name,
        category: this.category,
        amount: this.amount,
        createdOn: this.createdOn
      };
      console.log(expenseData);
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