<template>
  <div id="chat" ref="chat">
    <div class="card">
      <div class="card-header">
        {{user.name}} {{user.surname}}
      </div>
      <div class="card-body">
        <history :messages="messages"></history>
        <send-form @message:new="onMessage"></send-form>
      </div>
    </div>
  </div>
</template>

<script>
import History from './history'
import SendForm from './send-form'

const me = {
  name: 'bat',
  surname: 'cat',
  id: 42
};

export default {
  name: 'chat',
  components: {
    History,
    SendForm
  },
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      messages: []
    }
  },
  methods: {
    onMessage(text) {
      const message = {
        chatId: this.user.id,
        user: me,
        text
      }
      this.messages.push(message);
    }
  },
  mounted() {
    this.messages = this.$store.messages.filter(el => el.chatId == this.user.id)
  }
}
</script>

<style>
#chat, .card {
  height: 100%;
}

#chat .card-body {
  padding-bottom: 0;
  padding-right: 0;
}
</style>

