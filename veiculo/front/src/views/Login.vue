<template>
    <div>
        <h1>Login</h1>
        <form v-on:submit.prevent="login">
            <input type="text" v-model="email">
            <input type="password" v-model="pw">
            <input type="submit">
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'user0@gmail.com',
      pw: 'password'
    }
  },
  methods: {
    async login () {
      const logged = await this.$store.dispatch('login', [this.email, this.pw])
      if (logged) {
        this.$router.push('/')
      } 
    }
  }   
}     
</script>
