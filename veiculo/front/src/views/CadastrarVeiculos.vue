<template>
        <VeiculoForm/>
</template>

<script>
import VeiculoForm from '@/components/VeiculoForm.vue'
export default {
  name: 'CadastrarVeiculos',
  components: {
    VeiculoForm
  },

  created () {
    document.title = 'Cadastrar Veiculo'
  }

}
</script>
