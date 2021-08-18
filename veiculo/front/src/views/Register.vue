<template>
        <form class="" @submit.prevent="cadastrar">
            <div>
                <div>
                    <label>
                        Nome:
                    </label>
                    <input type="text" placeholder="Digite o seu nome" name="nome" v-model="name">
                </div>
            </div>

            <div>
                <div>
                    <label>
                        E-mail:
                    </label>
                    <input type="text" placeholder="ex: user@email.com" name="email" v-model="email">
                </div>
            </div>

            <div>
                <div>
                    <label>
                        Senha:
                    </label>
                    <input type="password" placeholder="********" name="senha" v-model="password">
                </div>
            </div>

            <div>
                <div>
                    <label>
                        Confirme Senha:
                    </label>
                    <input type="password" placeholder="********" name="confirma" v-model="password_confirmation">
                </div>
                
                <button>
                    Cadastrar
                </button>
            </div>
        </form>
        
</template>

<script>
export default {
  components: {
            
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    cadastrar () {
      if (this.password !== this.password_confirmation) {
        console.log('Senhas não conferem')
        return
      }
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password 
      }  
                
      const isCreated = this.$store.dispatch('register', userData)
      if (isCreated) {
        this.$router.push('/login')
      } 
    },
    redirectToSignIn () {
      this.$router.push('/login')
    }
  }
}
</script>
