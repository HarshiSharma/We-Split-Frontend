/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios.auth'
import globalAxios from 'axios'
import router from './router'
import $bus from './EventBus'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        splitStatus: null,
        friendStatus: "",
        user: [],
        friends: [],
        friendData: []
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userEmail = userData.email;
            // state.userId = userData.userId;
        },
        storeUserEmail(state, userData) {
            state.userEmail = userData

        },
        storeUser(state, userData) {

            state.user.push(userData)

        },
        clearAuthData(state) {
            state.idToken = null,
                state.user = [],
                state.friendStatus = "",
                state.friends = []

        },
        clearFriendData(state) {
            state.friendData = []
        }

    },
    actions: {
        addFriend({ commit, dispatch }, authData) {
            console.log(authData)
            const data = { "friend_email": authData }
            const AuthStr_token = 'Bearer '.concat(localStorage.getItem('token'));
            const AuthStr = { headers: { Authorization: AuthStr_token } }
            console.log(data)
            console.log(AuthStr)
            axios.post('/addfriend', data, AuthStr)
                .then(
                    res => {
                        console.log(res.data.response);
                        this.state.friendStatus = res.data.response;
                    }
                )
                .catch(err => console.log("created error", err));
        },
        deleteFriend({ state, dispatch }, authData) {
            console.log(authData)
            const data = { "friend_email": authData }
            const AuthStr_token = 'Bearer '.concat(localStorage.getItem('token'));
            const AuthStr = { headers: { Authorization: AuthStr_token } }
            console.log(data)
            console.log(AuthStr)
            axios.post('/deletefriend', data, AuthStr)
                .then(
                    res => {
                        console.log(res.data.response);
                    }
                )
                .catch(err => console.log("created error", err));
        },
        fetchUser({ commit, state }) {
            if (!this.state.idToken) {
                return
            }

            //const AuthStr = 'Bearer '.concat(this.state.idToken);

            const AuthStr_token = 'Bearer '.concat(localStorage.getItem('token'));

            const AuthStr = { headers: { Authorization: AuthStr_token } }
            axios.get('/user', AuthStr)
                .then(res => {
                    //console.log("created: response", res);
                    const data = res.data;
                    // const users_token = data.token;
                    // console.log("created: users", users_token);
                    commit('storeUser', data)

                })
                .catch(err => console.log("created error", err));
        },


        fetchFriends({ commit, state }) {
            if (!this.state.idToken) {
                return
            }
            const AuthStr_token = 'Bearer '.concat(localStorage.getItem('token'));
            const AuthStr = {
                headers: {
                    Authorization: AuthStr_token,
                }
            }

            //console.log(AuthStr)
            axios.get('/viewallfriends', AuthStr)
                .then(res => {
                    //console.log(res.data);
                    state.friends.push(res.data)
                        // console.log("created: users", users_token);
                })
                .catch(err => console.log("created error", err));
        },
        friendProfile({ commit, state, dispatch }, authData) {
            commit('clearFriendData')
            if (!this.state.idToken) {
                return
            }
            const AuthStr_token = 'Bearer '.concat(localStorage.getItem('token'));
            const AuthStr = {
                headers: {
                    Authorization: AuthStr_token,
                    'Content-type': 'application/json'
                }
            }
            const data = { "friend_email": authData }
                //console.log(AuthStr)
            axios.post('/viewfriend', data, AuthStr)
                .then(res => {
                    console.log(res.data);
                    state.friendData.push(res.data)
                    router.replace('/friendProfile')
                        // console.log("created: users", users_token);
                })
                .catch(err => console.log("created error", err));
        },
        login({ commit, dispatch }, authData) {
            axios
                .post(
                    "/authenticate", {
                        email: authData.email,
                        password: authData.password
                    }
                )
                .then(res => {
                    console.log(res)

                    const data = {
                        token: res.data.token,

                    }
                    console.log(data)
                    commit('authUser', data)
                        //console.log(this.state.userEmail)
                    const now = new Date()
                    const expirationDate = now.setDate(now.getDate() + 1);
                    localStorage.setItem('userEmail', authData.email)


                    localStorage.setItem('token', res.data.token)
                        //localStorage.setItem('userId', res.data.localId)
                    localStorage.setItem('expirationDate', expirationDate)

                    $bus.$emit('logged', 'User logged')

                    router.replace('/dashboard')
                    dispatch('setLogoutTimer', now)

                })
                .catch(error => console.log(error));
        },
        logout({ commit }) {
            commit('clearAuthData')
            localStorage.removeItem('expirationDate')
            localStorage.removeItem('token')
            localStorage.removeItem('userEmail')

            $bus.$emit('logged', 'User logged')
            router.replace('/signin')
        },

        setLogoutTimer({ commit }, expirationTime) {
            const now = new Date()
            now.setDate(now.getDate() + 1);
            setTimeout(() => {
                commit('clearAuthData')
            }, now)
        },
        signup({ commit, dispatch }, authData) {
            axios
                .post("/register", {
                    name: authData.name,
                    email: authData.email,
                    password: authData.password,

                })
                .then(res => {

                    commit('authUser', {
                        token: res.data.idToken,

                    })

                    const now = new Date()
                    const expirationDate = now.setDate(now.getDate() + 1);

                    localStorage.setItem('token', res.data.idToken)
                        //localStorage.setItem('userId', res.data.localId)
                    localStorage.setItem('expirationDate', expirationDate)
                        //dispatch('storeUser', authData)
                    dispatch('setLogoutTimer', now)
                    router.replace('/')
                })
                .catch(error => console.log(error));
        },
        splitExpense({ commit, dispatch }, authData) {
            console.log(authData)
            const data = authData
            const AuthStr_token = 'Bearer '.concat(localStorage.getItem('token'));
            const AuthStr = { headers: { Authorization: AuthStr_token } }
            console.log(data)
            console.log(AuthStr)
            axios.post('/addbill', data, AuthStr)
                .then(
                    res => {
                        console.log(res.status);
                        this.state.splitStatus = res.status;

                    }
                )
                .catch(err => console.log("created error", err));
        },
        tryAutoLogin({ commit, dispatch }) {
            const token = localStorage.getItem('token')
            const expirationDate = localStorage.getItem('expirationDate')
            const now = new Date()
            if (!token || now >= expirationDate) {
                return
            } else {
                //const userId = localStorage.getItem('userId')
                commit('authUser', {
                    token: token,
                    //userId: userId
                })

            }

        },



    },
    getters: {
        userInfo(state) {
            return state.user[0]
        },
        userEmail(state) {
            return localStorage.getItem('userEmail')
        },
        isAuthenticated(state) {

            return state.idToken !== null
        },
        friendStat(state) {
            return state.friendStatus
        },
        friends(state) {
            return state.friends[0]
        },
        friendData(state) {
            console.log(state.friendData)
            return state.friendData[0]
        },
        splitStatus(state) {
            return state.splitStatus;
        }
    }
})