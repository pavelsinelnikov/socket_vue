<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SocketComponent />
  </div>
</template>

<script>
import SocketComponent from './components/SocketComponent.vue';

export default {
  name: 'app',
  components: {
    SocketComponent,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
