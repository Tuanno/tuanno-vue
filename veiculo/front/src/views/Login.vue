<template>
    <div class="form-group">
        <h2 class="p-4">Entrar</h2>
        <form for="exampleInputEmail1" v-on:submit.prevent="login">
          <label>Email:</label>
            <input type="text" class="form-control w-25 p-2 mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex: user@gmail.com" v-model="email">
          <label>Senha:</label>
            <input type="password" class="form-control w-25 p-2 mx-auto" id="exampleInputPassword1" placeholder="*******" v-model="pw"><br>
            <input type="submit" class="btn btn-outline-success">
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      pw: ''
    }
  },
  methods: {
    async login () {
      const logged = await this.$store.dispatch('login', [this.email, this.pw])
      if (logged) {
        this.$router.push('/CadastrarVeiculos')
      } 
    }
  }   
}     
</script>
