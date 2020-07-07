<template>
    <div class="div-out">
        <div class="div-main">
            <form>  
                <label for="name" class="txt-color"><b>Nome</b></label>
                <input type="text" class="form-control txt-center" placeholder="Nome do produto" name="name" required>

                <label for="cpf" class="txt-color"><b>Valor</b></label>
                <input type="number" class="form-control txt-center" placeholder="Valor R$ 00,00" name="cpf" required>
                
                <div class="masc">
                    <label for="masc"><input type="checkbox" name="masc"/> Masculino</label>
                </div>
                <div class="fem">
                    <label for="fem"><input type="checkbox" name="fem"/> Feminino</label>
                </div>    
                

                <div class="button-register">
                    <button type="submit" class="btn btn-primary button-cadastrar">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'CadastroProdutos'
}

</script>

<style scoped>

    .div-out {
        margin: 0 auto;
        margin-top: 150px;
        margin-bottom: 200px;
        padding-top: 1px;
        height: 300px;
        width: 370px;
        background-color: white;
        border-radius: 5px;
    }

    .div-main {
        color: black;
        height: 200px;
        width: 300px;
        margin: 0 auto;
        margin-top: 30px;
        background-color: white;
    }

    .button-cadastrar {
        float: left;
        margin-top: 10px;
        width: 100%;
        border-radius: 0px;
    }

    .masc {
        margin-top: 10px;
        float: left;
    }

    .fem {
        margin-top: 10px;
        float: right;
    }
  
</style>