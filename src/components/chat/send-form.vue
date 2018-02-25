<template>
  <div id="send-form">
    <form @submit.prevent="">
      <div class="form-group">
        <input v-model="message" @keypress.enter="send" type="text" class="form-control" placeholder="Enter a message">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'send-form',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    send() {
      this.$emit('message:new', this.message);
      this.message = '';
    }
  }
}
</script>
<style>
#send-form {
  margin-top: 15px;
  padding-right: 15px;
}
</style>
