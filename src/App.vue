<template>

  <div id="root">
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">

    <header class="root-header">
      <div class="container">
        <div class="d-flex justify-content-between">
          <h1 class="title" @click="openSite()">@Lerebi</h1>
         
          <!-- <div @click="openLogin()">
            <ul class="d-flex m-2">
              <li>Login</li>
              <li>Cadastrar</li>
            </ul>
          </div>
           -->
        </div>
      </div>
    </header>
    
    <nav class="nav">
      <ul>
        <li>Home</li>
        <li>Produtos</li>
        <li>Novidades</li>
        <li>Contato</li>
        <li>Sobre</li>
        <router-link>{{menuLista.nome}}</router-link>
      </ul>
    </nav>

    <div class="content">
      <router-view/>
    </div>
    
    <footer class="root-footer">
      <div class="container">
          <div class="row">
            <div v-for="(rede, index) in redesSocias" :key="index" class="col-md-2 p-2">
              <div class="card-rodape-header">{{rede.midia}}</div>
              <a :href="rede.link" target="_blank">{{rede.nome}}</a>
            </div>
          </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      menuLista:[
        {id:1, nome: "Home", link: "/"},
        {id:2, nome: "Produtos", link: "/produtos"},
        {id:3, nome: "Novidades", link: "/"},
        {id:4, nome: "Contato" ,link: "/"},
        {id:5, nome: "Sobre", link:"/"}
      ],
      redesSocias: [
        {nome: "@lerebi", midia:"Instagram" , link: "https://www.instagram.com/lerebi_/"},
        {nome: "@lerebi", midia:"Facebook",  link: "https://www.facebook.com/lerebi/"}
      ]
    }
  },

  methods: {
    openSite () {
      window.open("https://www.instagram.com/lerebi_/")
    },

    openLogin () {
      //TODO: Implementar login
    }
  }
}
</script>

<style>
* {padding: 0; margin: 0;}

#root {
  display: grid;
  grid-template-rows: 10vh 8vh auto 15vh; 
  grid-template-areas:"header"
                      "nav"
                      "content" 
                      "footer";
}

#root .root-header {
  grid-area: "header";
  background: white; 
}

#root .root-header .title{
  font-family: 'Amatic SC', cursive;
}

#root .root-header .title:hover{
  color: #dd5b48;
  cursor: pointer;
}

#root .nav {
  grid-area: "nav";
  background-color: white;
}

li {
  display: inline-block;
  padding: 14px 16px;
}

#root .content {
  grid-area: "content";
  color: white;
}

#root .root-footer {
  grid-area: "footer";
  background: #dd5b48; 
}

#root .root-footer a {
  color: white;
  /* text-decoration-line: ; */
}

/* BreakPoint */
@media screen and (max-width: 760px){
  #root {
    grid-template-areas: "";
  }
}
</style>
