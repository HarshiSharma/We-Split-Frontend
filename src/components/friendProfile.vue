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
                <b-nav tabs>
                  <b-nav-item @click="showDetails=true, showActivities=false">Details</b-nav-item>
                  <b-nav-item @click="showDetails=false, showActivities=true">Activities</b-nav-item>
                </b-nav>
                <br />
                <div class="tab-content ml-1">
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
                <b-button class="del mx-auto" variant="danger" @click="deleteFriend">Delete Friend</b-button>
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
body {
  padding-top: 68px;
  padding-bottom: 50px;
}
h1,
label {
  font-weight: bold;
}
.del {
  display: block;
  width: 50%;
}
</style>