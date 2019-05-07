import Vue from 'vue';
import App from './App.vue';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:8000'), //options object is Optional
  }),
);

new Vue({
  render: h => h(App),
}).$mount('#app');
