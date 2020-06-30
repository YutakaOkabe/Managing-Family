import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBAnLQQPSF1eei91sqt6TNHdAhxsUvk1h8",
    authDomain: "my-address-pj-f6020.firebaseapp.com",
    databaseURL: "https://my-address-pj-f6020.firebaseio.com",
    projectId: "my-address-pj-f6020",
    storageBucket: "my-address-pj-f6020.appspot.com",
    messagingSenderId: "636306811281",
    appId: "1:636306811281:web:4be939ea3bf71e44d51230",
    measurementId: "G-EPW7PJ1CDM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
