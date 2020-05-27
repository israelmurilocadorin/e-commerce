<template>
  <div>
    <div class="img-container">
        <canvas id="id-canvas" width="200" height="300" style="background:white;">
        </canvas>

        <div class="img-descricao d-flex justify-content-between">
            <div style="">
            {{ nome }}
            </div>

            <div class="">
            R$ {{ valor }} 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CImagem',
  props: {
    nome: {
        type: String,
        required: true,
        default: null,
    },
    valor: {
        type: [String, Number],
        required: true,
        default: null,
    },
    baseString64: {
        type: String,
        required: false,
        default: '',
    }
  }
}
</script>

<style scoped>
.img-container {
    margin: 1em;
}
.img-descricao {
    max-width: 200px;
}
</style>
