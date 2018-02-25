<template>
  <div id="user-info">
    <div class="card">
      <div class="card-header">
        User Info
      </div>
      <div class="card-body">
        <p class="card-text"><b>City:</b> {{user.city}}</p>
        <p class="card-text"><b>Age:</b> {{user.age}}</p>
        <p class="card-text"><b>About:</b> {{user.about}}</p>
        <a href="javascript:void(0);" @click="openChat" class="btn btn-primary">Отправить сообщение</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  props: {
    userId: {
      type: String | Number,
      required: true
    },
  },
  watch: {
    userId: function(newVal) {
      this.user = this.$store.info.find(el => el.userId == newVal)
    }
  },
  mounted() {
    this.user =  this.$store.info.find(el => el.userId == this.userId)
  },
  data () {
    return {
      user: '',
    }
  },
  methods: {
    openChat() {
      this.$emit('chat:open', this.userId);
    }
  }
}
</script>

<style>
</style>

