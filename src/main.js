/* eslint-disable no-console */
import EventBus from './EventBus'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
import 'bootswatch/dist/slate/bootstrap.min.css';

//import 'roboto-fontface/css/roboto/roboto-fontface.css'

axios.defaults.baseURL = "http://localhost:8080";
Vue.prototype.$bus = EventBus

//axios.defaults.headers.common['Authorization'] = "fasdfasfas"; //good to pass token ??
//axios.defaults.headers.get['Accepts'] = "application/json";

//Inteceptors are function we can define which should get executed at every request
const requestInteceptor = axios.interceptors.request.use(config => {
    console.log('interceptors.request', config);
    return config;
});

const responseInteceptor = axios.interceptors.response.use(res => {
    console.log('interceptors.response', res);
    return res;
});

axios.interceptors.request.eject(requestInteceptor);
axios.interceptors.response.eject(responseInteceptor);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})