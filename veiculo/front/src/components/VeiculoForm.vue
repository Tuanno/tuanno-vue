<template>
    <form method="POST" v-on:submit.prevent="salvarveiculo">
        <div class="flex flex-wrap -mx-3 mb-4">

            <div>
                <h2 class="p-4">Cadastro de veiculo</h2>
                <label>
                    Nome:
                </label>
                <input type="text" class="form-control w-25 p-2 mx-auto" 
                placeholder="ex: Fiate Uno" name="name" required v-model="name">
            </div>
            <div>
                <label>
                    Marca:
                </label>
                <input type="text" class="form-control w-25 p-2 mx-auto" 
                placeholder="ex: Jeep" name="marca" required v-model="marca">
            </div>
        </div>
        <div>
            <div class>
                <label>
                    Valor:
                </label>
                <input type="number" class="form-control w-25 p-2 mx-auto" 
                placeholder="ex: 12.000" name="valor" required v-model="valor"><br>
            </div>
        </div>
        <div v-if="veiculo == undefined" class="mx-auto">
                <button class="btn btn-outline-success">
                    Criar veiculo
                </button>
            </div>

            <div v-else>
                
                <button class="btn btn-outline-success">
                    Atualizar
                </button>

                <button  class="btn btn-outline-success" @click.prevent="cancelChanges()">
                    Cancelar
                </button>
            </div>
    </form>    
    </template>
<script>
export default {
  name: 'VeiculoForm',
  props: ['veiculo'],

  data () {
    return {
      name: this.veiculo?.name ?? '',
      marca: this.veiculo?.marca ?? '',
      valor: this.veiculo?.valor ?? ''
    }
  },

  methods: {
    criarVeiculo () {
      const veiculoData = {
        name: this.name,
        marca: this.marca,
        valor: this.valor
      }
      const isCreated = this.$store.dispatch('criarVeiculo', veiculoData)

      if (isCreated) {
        this.$router.push('/')
      }      
    },

    atualizarVeiculo () {
      const veiculoData = {
        id: this.veiculo.id,
        name: this.name,
        marca: this.marca,
        valor: this.valor
      }

      this.$store.dispatch('updateVeiculo', veiculoData)
    },
    salvarveiculo () {
      if (this.veiculo === undefined) {
        this.criarVeiculo()
      } else {
        this.atualizarVeiculo()
      }
    }

  }
}
</script>
