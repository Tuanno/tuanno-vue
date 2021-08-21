<template>
  <div class="home table table-responsive table-dark p-4">
    <table>
      <tr>
        <th scope="row">Nome do Veiculo</th>
        <th scope="row">Marca</th>
        <th scope="row">Valor</th>
      </tr>
      <tr v-for="car in cars" :key="car.id">
        <td>{{car.name}}</td>
        <td>{{car.marca}}</td>
        <td>{{car.valor}}</td>
        <button class="btn btn-light" @click="editarCar(car.id)">Editar</button>
        <button class="btn btn-light" @click="apagarCar(car.id)">Apagar</button>
      </tr>
    </table> 
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
  },
  methods: {
    editarCar (id) {
      this.$store.dispatch('editarCar', id)
    },

    apagarCar (id) {
      this.$store.dispatch('apagarCar', id)
    }
  }
}
</script>
