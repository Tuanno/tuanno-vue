<template>
        <form class="form-group" @submit.prevent="cadastrar">
            <div>
                <div>
                    <h2>Cadastrar Usuário</h2>
                    <label>
                        Nome:
                    </label>
                    <input type="text" class="form-control w-25 p-2 mx-auto" placeholder="Digite o seu nome" name="nome" v-model="name">
                </div>
            </div>

            <div>
                <div>
                    <label>
                        E-mail:
                    </label>
                    <input type="text" class="form-control w-25 p-2 mx-auto" 
                    placeholder="ex: user@email.com" name="email" v-model="email">
                </div>
            </div>

            <div>
                <div>
                    <label class="font-size 16px">
                        Senha:
                    </label>
                    <input type="password" class="form-control w-25 p-2 mx-auto" 
                    placeholder="********" name="senha" v-model="password">
                </div>
            </div>

            <div>
                <div>
                    <label>
                        Confirme Senha:
                    </label>
                    <input type="password" class="form-control w-25 p-2 mx-auto" 
                    placeholder="********" name="confirma" v-model="password_confirmation"><br>
                </div>
                
                <button class="btn btn-outline-success">
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
