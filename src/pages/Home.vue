<template>
    <div class="home">
        <div class="img-top">

        </div>
        <div class="img-mid">
            <div class="slide">
                <img src="https://static2.minhalojanouol.com.br/torcedorcarioca/produto/20180807132419_4280995720_D.png" height="180" width="150" alt="">
            </div>
            <div class="slide">
                <img src="https://static2.minhalojanouol.com.br/torcedorcarioca/produto/20180807132419_4280995720_D.png" height="180" width="150" alt="">
            </div>
            <div class="slide">
                <img src="https://static2.minhalojanouol.com.br/torcedorcarioca/produto/20180807132419_4280995720_D.png" height="180" width="150" alt="">
            </div>
            <div class="slide">
                <img src="https://static2.minhalojanouol.com.br/torcedorcarioca/produto/20180807132419_4280995720_D.png" height="180" width="150" alt="">
            </div>
            <div class="slide">
                <img src="https://static2.minhalojanouol.com.br/torcedorcarioca/produto/20180807132419_4280995720_D.png" height="180" width="150" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .home {
        display: grid;
        grid-template-rows: 100vh;
        background-color: black;
    }

    .img-top {
        background-image: url('https://www.conferecartoes.com.br/hubfs/Imagens/Blog/Header/90-1.png');
        margin: 0 auto;
        margin-top: 40px;
        width: 95%;
        height: 500px;
    }

    .img-mid {
        background-color: #363636;
        margin: 0 auto;
        margin-bottom: 100px;
        width: 900px;
        height: 230px;
        border-radius: 2px;
    }

    .slide {
        display: inline-block;
        margin-top: 25px;
        margin-left: 25px;
        height: 180px;
        width: 150px;
    }

</style>