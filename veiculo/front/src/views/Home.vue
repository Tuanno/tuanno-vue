<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{cars}}
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['isLogged']),
    ...mapState(['cars'])
  },
  mounted () {
    if (this.isLogged) {
      this.$store.dispatch('loadCars')
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
