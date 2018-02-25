<template>

  <div id="users-list" ref="list">
    <div class="list-group">
      <a
        href="javascript:void(0);"
        @click="selectUser(user)"
        v-for="user in users"
        v-if="user.id !== 42"
        :key="user.id"
        :class="{ active: user.id === selectedUserId }"
        class="user list-group-item list-group-item-action flex-column align-items-center">

        <div class="media align-items-center">
          <img class="mr-3 profile_pic" src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100" alt="Generic placeholder image">
          <div class="media-body">
            <h5 v-if="isChatOpen" class="mt-0">{{ getInitials(user) }}</h5>
            <h5 v-else class="mt-0">{{ getFullName(user) }}</h5>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users-list',
  props: {
    users: {
      type: Array,
      required: true
    },
    isChatOpen: Boolean
  },
  data () {
    return {
      selectedUserId: '',
    }
  },
  watch: {
    isChatOpen: function(newValue) {
      if (newValue) {
        this.$refs.list.style.width = '150px';
      } else {
        this.$refs.list.style.width = '300px';
      }
    }
  },
  methods: {
    getFullName(user) {
      return `${user.name} ${user.surname}`
    },
    getInitials(user) {
      return `${user.name.charAt(0).toUpperCase()}${user.surname.charAt(0).toUpperCase()}`
    },
    selectUser(user) {
      this.selectedUserId = user.id;
      this.$emit('user:select', user);
      this.$refs.list.style.width = '300px';
    }
  },
  mounted() {
    const userId = this.$route.params.userId;
    if (userId) {
      this.$refs.list.style.width = '300px';
    }
  }
}
</script>

<style>
.profile_pic {
  width: 50px;
}

#users-list {
  width: 500px;
  transition: width .3s ease-out;
  height: 500px;
  overflow: auto;
}

.user {
  border-right: none;
}

.list-group-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.list-group-item:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

#users-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: white;
}

#users-list::-webkit-scrollbar {
  width: 3px;
  background-color: #9db0c5;
}

#users-list::-webkit-scrollbar-thumb {
  background-color: #9db0c5;
}

</style>

