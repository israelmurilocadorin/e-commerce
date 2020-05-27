<template>
  <div>
    <div class="img-container">
        <canvas id="id-canvas" width="200" height="300" style="background:white;">
        </canvas>

        <div class="img-descricao d-flex justify-content-between">
            <div style="">
            Nome
            </div>

            <div class="">
            R$ Valor 
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CImagem',
//   props: {
//     StringBase64: [] String
//   }
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
