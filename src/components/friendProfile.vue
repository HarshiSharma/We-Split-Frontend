<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="card-title mb-4">
              <div class="d-flex justify-content-start">
                <div class="userData ml-3">
                  <h1 class="d-block">{{Fdata.friend_name}}</h1>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <ol class="friendnav breadcrumb">
                  <li class="breadcrumb-item">
                    <a @click="showDetails=true, showActivities=false">Details</a>
                  </li>

                  <li class="breadcrumb-item">
                    <a @click="showDetails=false, showActivities=true">Activity</a>
                  </li>
                </ol>

                <br />
                <div class="friend-details tab-content ml-1">
                  <div v-if="showDetails">
                    <div class="row">
                      <div class="col-sm-4 col-md-3 col-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-8 col-6">{{Fdata.friend_email}}</div>
                    </div>
                    <hr />

                    <div class="row">
                      <div class="col-sm-4 col-md-3 col-6">
                        <label>Money Owed</label>
                      </div>
                      <div class="col-md-8 col-6">{{Fdata.money_owed}}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-4 col-md-3 col-6">
                        <label>Money Lent</label>
                      </div>
                      <div class="col-md-8 col-6">{{Fdata.money_lent}}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-4 col-md-3 col-6">
                        <label>Total</label>
                      </div>
                      <div class="col-md-8 col-6">{{Fdata.money_total}}</div>
                    </div>
                    <hr />
                  </div>
                  <div v-if="showActivities">
                    <h1>WTF</h1>
                  </div>
                </div>

                <button type="button" class="btn btn-danger btn-lg btn-block" @click="deleteFriend">
                  <span style="letter-spacing: 4px">Delete Friend</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { create } from "domain";
import router from "../router";

export default {
  data() {
    return {
      showDetails: true,
      showActivities: false
    };
  },
  computed: {
    Fdata() {
      if (!this.$store.getters.friendData) {
        return false;
      }
      return this.$store.getters.friendData;
    }
  },
  methods: {
    deleteFriend() {
      const email = this.Fdata.friend_email;
      this.$store.dispatch("deleteFriend", email);
      router.replace("/dashboard");
    }
  }
};
</script>

<style scoped>
* {
  color: whitesmoke;
}
body {
  padding-top: 68px;
  padding-bottom: 50px;
}
h1,
label {
  font-weight: bold;
}
.friendnav {
  font-size: 20px;
  background-color: none !important;
  border: 0.5px solid rgb(77, 77, 77) !important;
  background-image: none !important;
  filter: none;
}
.friend-details {
  font-size: 20px;
  letter-spacing: 2px;
}
</style>