<template>
    <div class="div-main">
        <!-- <input type="checkbox" id="chec">
        <label for="chec">
            <img src="../assets/menu.png">
        </label> -->

        <nav>
            <ul>
                <li v-for="item in menuLista" :key="item.id">
                    <router-link :to="item.link">{{ item.nome }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>
export default {
    name: 'FormularioProdutos',
    data() {
        return {
            nome: "FormulárioProdutos",
            menuLista:[
                {id:1, nome: "Home", link: "/"},
                {id:2, nome: "Produtos", link: "/produtos"},
                {id:3, nome: "Novidades", link: "/"},
                {id:4, nome: "Contato" ,link: "/"},
                {id:5, nome: "Sobre", link:"/"}
            ]
        }

    }
}
</script>

<style  scoped>   
    body{
        /* background: url("../assets/cabide.jpg"); */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    *{
        padding: 0;
        margin: 0;
    }

    a{
        text-decoration: none;
        color: white;
    }

    ul{
        list-style: none;
    }

    input[type="checkbox"]
    {
        display: none;
    }

    nav
    {
        position: absolute;
        left: -250px;
        height: 100%; 
        width: 250px;
        background-color: rgba(16,16,16,0.5);
        transition: all .5s;
        z-index: 1;
    }

    input[type="checkbox"]:checked ~ nav
    {
        transform: translateX(250px);
    }

    ul{
        position: absolute;
        top: 55px;
        width: 100%;
    }
     
    a{
        display: block;
        padding: 15px 5px;
    }

    a:hover{
        background-color: rgb(176, 224, 230);
        color: black;
    }

    label{
        position: absolute;
        padding: 10px;
        z-index: 1;
    }

    img{
        width: 30px;
    }

    .div-promotion{
        height: 250px;
        width: 90%;
        margin: 0 auto;
        background-color: aquamarine;
        position: relative;
        margin-bottom: 120px;
    }
</style>