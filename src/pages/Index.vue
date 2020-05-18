<template>
    <div class="div-main">
        <div class="footer-top"></div>
        <div class="footer-down"></div>
        <input type="checkbox" id="chec">
        <label for="chec">
            <img src="../assets/menu.png">
        </label>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Produtos</a></li>
                <li><a href="">Novidades</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Sobre</a></li>
            </ul>
        </nav>
        <div class="">

        </div>
    </div>
</template>


<script>


</script>

<style>
   
    body{
        background: url("../assets/cabide.jpg");
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
        background-color: rgba(16,16,16,.5);
        transition: all .5s;
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

    .footer-top {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: white;
    }

    .footer-down {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 100%;
        background-color: #D65E3C;
    }

</style>