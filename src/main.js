// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(firestorePlugin)
firebase.initializeApp({
  apiKey: 'AIzaSyCZlGbzEB3G1Zp4BoE3oNbWCJZvHBygPac',
  authDomain: 'courses-fire-app-dff4e.firebaseapp.com',
  projectId: 'courses-fire-app-dff4e',
  storageBucket: 'courses-fire-app-dff4e.appspot.com',
  messagingSenderId: '443934024150'})
export const db = firebase.firestore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
