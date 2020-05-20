<template>
  <footer>
      <div class="container">
          <div class="row">
                <div v-for="(rede, index) in redesSocias" :key="index" class="col-md-2 p-2">
                    <div class="card-rodape-header">icone</div>
                    <a :href="rede.link">{{rede.nome}}</a>
                </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Rodapé',
  data () {
    return {
        redesSocias: [
            {nome: "@lerebi", link: "https://www.instagram.com/lerebi_/"},
            {nome: "@lerebi", link: "https://www.facebook.com/lerebi/"}
        ]
    }
  }
}
</script>
<style>
/* footer {
    grid-area: footer;
}

.card-rodape-header {
    justify-content: center; */
}

</style>
