<template>
  <div class="wrapper row align-items-end no-gutters">
    <div v-if="messages.length" class="col-12 history">
      <div
        class="message row no-gutters"
        v-for="(message, index) in messages"
        :class="{ current: message.user.id == 42 }"
        :key="index">

        <div class="col-auto user">
          <img class="mr-3 profile_pic" src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100" alt="Generic placeholder image">
        </div>

        <div class="col-10">
          <div class="font-weight-bold">{{message.user.name}}</div>
          <div>{{message.text}}</div>
        </div>
      </div>
    </div>
    <div class="empty" v-else>History is empty</div>
  </div>
</template>

<script>
export default {
  name: 'history',
  props: {
    messages: {
      type: Array,
      required: true
    },
  },
}
</script>

<style>
.wrapper {
  height: 361px;
}

.history {
  max-height: 380px;
  overflow: auto;
}

.message {
  margin-bottom: 10px;
}

.current {
  background: aliceblue;
  border-radius: 24px 0 0 24px;
}

.empty {
  width: 100%;
  text-align: center;
}

.history::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
}

.history::-webkit-scrollbar {
  width: 3px;
  background-color: #9db0c5;
}

.history::-webkit-scrollbar-thumb {
  background-color: #9db0c5;
}
</style>

