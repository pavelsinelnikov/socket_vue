<template>
  <div>
    <form @submit.prevent>
      <input v-model="localmsg" /><button @click="clickButton(localmsg)">
        Send
      </button>
    </form>
    <ul>
      <li v-for="response in socketResponse">{{ response }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'socket',
  data: function() {
    return {
      localmsg: '',
      socketResponse: [],
    };
  },
  sockets: {
    connected: function() {
      this.socketResponse.push('User connected!');
    },
    chatEmit: function(data) {
      this.socketResponse.push(data);
    },
    disconnected: function() {
      this.socketResponse.push('User disconnected!');
    },
  },
  methods: {
    clickButton: function(data) {
      // $socket is socket.io-client instance
      this.$socket.emit('posted', data);
    },
  },
};
</script>
