<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <dir v-if="!isLogged">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </dir>
    <div v-else>
      <router-link to="/logout">Logout</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLogged'])
  },
  mounted () {
    this.$store.dispatch('loadToken')
  }
}
</script>
