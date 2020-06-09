<template>
    <div class="background-colorr">
    <div class="div-main">
        <form>  
                <label for="e-mail" class="txt-color"><b>E-mail</b></label>
                <input type="e-mail" class="form-control txt-center" placeholder="Digite seu e-mail" name="e-mail" required>

                <label for="password" class="txt-color"><b>Senha</b></label>
                <input type="password" class="form-control txt-center" placeholder="Digite sua senha" name="password" required>

                <label for="password-repeat" class="txt-color"><b>Repita a Senha</b></label>
                <input type="password" class="form-control txt-center" placeholder="Repita sua senha" name="password-repeat" required>

                <label for="name" class="txt-color"><b>Nome</b></label>
                <input type="text" class="form-control txt-center" placeholder="Digite seu nome" name="name" required>

                <label for="cpf" class="txt-color"><b>CPF</b></label>
                <input type="number" class="form-control txt-center" placeholder="Digite seu CPF" name="cpf" required>

                <label for="endereco" class="txt-color"><b>Endereço</b></label>
                <input type="text" class="form-control txt-center" placeholder="Digite seu endereço" name="endereco" required>

            <div class="button-register">
                <button type="submit" class="btn btn-primary button-register">Registrar</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'Register'
}

</script>

<style>
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
    
    .background-colorr {
        padding-top: 40px;
        height: 100vh;
        width: 100%;
        background-color: white;
    }

    .div-main {
        height: 100vh;
        width: 300px;
        margin: 0 auto;
        padding-bottom: 30px;
        background-color: white;
    }

    .txt-color {
        color: black;
    }

    .paddin-top-form {
        padding-top: 15px;
    }

    .button-register {
        float: left;
        margin-top: 10px;
        width: 100%;
    }

</style>
