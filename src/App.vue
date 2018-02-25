<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto">
          <users-list :users="users" @user:select="onUserSelect" :isChatOpen="isChatOpen"></users-list>
        </div>
        <div class="col fade-in-right" v-if="selectedUserId">
          <user-info :userId="selectedUserId" @chat:open="openChat"></user-info>
        </div>
        <div class="col-8 fade-in-right" v-if="isChatOpen">
          <chat :user="selectedUser"></chat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersList from './components/users-list.vue';
import UserInfo from './components/user-info.vue';
import Chat from './components/chat/chat.vue';

export default {
  name: 'app',
  components: {
    UsersList,
    UserInfo,
    Chat
  },
  data () {
    return {
      users: this.$store.users,
      selectedUserId: '',
      selectedUser: '',
      isChatOpen: false,
    }
  },
  methods: {
    onUserSelect(user) {
      this.selectedUserId = user.id;
      this.selectedUser = user;
      this.isChatOpen = false;
      this.$router.push({ name: 'user', params: { userId: user.id } });
    },
    openChat(id) {
      this.isChatOpen = true;
      this.selectedUserId = null;
      this.$router.push({ name: 'chat', params: { chatId: id } });
    }
  },
  mounted() {
    const userId = this.$route.params.userId;
    const chatId = this.$route.params.chatId;

    if (userId) {
      this.selectedUserId = userId;
    }
    if (chatId) {
      this.selectedUser = this.$store.users.find(el => el.id == chatId)
      this.isChatOpen = true;
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fade-in-right {
  -webkit-animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

</style>
