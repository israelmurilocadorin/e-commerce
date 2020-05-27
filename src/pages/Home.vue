<template>
    <div class="home">
        <div class="img-area">
            <div class="container">
                <div class="row">
                    <div v-for="item in mokeProdutos" :key="item.id" class="col-md-4">
                        <c-imagem :nome="item.nome" :valor="item.valor"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Home',
    data() {
        return {
            nome: "FormulárioProdutos",
            menuLista:[
                {id:1, nome: "Home", link: "/"},
                {id:2, nome: "Produtos", link: "/produtos"},
                {id:3, nome: "Novidades", link: "/"},
                {id:4, nome: "Contato" ,link: "/"},
                {id:5, nome: "Sobre", link:"/"}
            ],

            mokeProdutos:[
                {id:1, nome:'a' ,valor: "100.00" },
                {id:2, nome:'a' ,valor: "100.00" },
                {id:3, nome:'a' ,valor: "100.00" },
                {id:4, nome:'a' ,valor: "100.00" },
                {id:5, nome:'a' ,valor: "100.00" },
                {id:6, nome:'a' ,valor: "100.00" },
                {id:7 , nome:'a' ,valor: "100.00" },
                {id:8 , nome:'a' ,valor: "100.00" },
                {id:9 , nome:'a' ,valor: "100.00" },
            ]
        }

    }
}
</script>

<style  scoped>   
    .home {
        display: grid;
        grid-template-rows: 200vh;
        grid-template-areas: "img-area";
    }

    .img-area {
        grid-area: "img-area";
        background: black;
        overflow: auto;
    }

</style>