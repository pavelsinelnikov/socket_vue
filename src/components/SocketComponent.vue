<template>
  <div>
    <form @submit.prevent>
      <input v-model="localmsg" /><button @click="clickButton(localmsg)">
        Send
      </button>
    </form>
    <ul>
      <li v-for="response in socketResponse" :key="response.id">
        {{ response.text }}
        <button @click="deleteMessage(response.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'socket',
  data: function() {
    return {
      localmsg: '',
      messageIndex: 0,
      socketResponse: [],
    };
  },
  sockets: {
    connected() {
      this.socketResponse.push({
        id: this.messageIndex++,
        text: 'User connected!',
      });
    },
    chatEmit(data) {
      this.socketResponse.push({id: this.messageIndex++, text: data});
    },
    disconnected() {
      this.socketResponse.push({
        id: this.messageIndex++,
        text: 'User disconnected!',
      });
    },
  },
  methods: {
    clickButton(data) {
      if (data != '') {
        this.$socket.emit('posted', data);
        this.localmsg = '';
      }
    },
    deleteMessage(respId) {
      let index = this.socketResponse.findIndex(x => x.id == respId);
      this.socketResponse.splice(index, 1);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
