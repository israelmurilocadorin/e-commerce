<template>
    <div class="div-main">
        <form>    
                <div class="placeholder-size">
                    <label for="e-mail" class="txt-color"><b>E-mail</b></label>
                    <input type="e-mail" class="form-control txt-center" placeholder="Digite seu e-mail" name="e-mail" required>
                </div>

                <div class="placeholder-size">
                    <label for="password" class="txt-color"><b>Senha</b></label>
                    <input type="password" class="form-control txt-center" placeholder="Digite a senha" name="password" required>
                </div>
                
                <div class="placeholder-size">
                    <label for="password-repeat" class="txt-color"><b>Repita a Senha</b></label>
                    <input type="password" class="form-control txt-center" placeholder="Repita a senha" name="password-repeat" required>
                </div>
                
                <div class="placeholder-size">
                    <label for="password" class="txt-color"><b>Nome</b></label>
                    <input type="password" class="form-control txt-center" placeholder="Digite a senha" name="password" required>
                </div>

                <div class="placeholder-size">
                    <label for="password" class="txt-color"><b>CPF</b></label>
                    <input type="password" class="form-control txt-center" placeholder="Digite a senha" name="password" required>
                </div>

                <div class="empty-space"></div>

                <div class="placeholder-size">
                    <label for="password" class="txt-color"><b>Endereço</b></label>
                    <input type="password" class="form-control txt-center" placeholder="Digite a senha" name="password" required>
                </div>

                <div class="">
                    <button type="submit" class="btn btn-primary btn-register">Registrar</button>
                </div>
        </form>
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

    .div-main{
        margin: 0 auto;
    }

    .div-register {
        margin-top: 150px;
        width: 360px;
        height: 500px;
        border-radius: 5px;
        margin-bottom: 70px;
    }

    .box-register {
        background-color: white;
        height: 420px;
        margin: 50px; 
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;

    }

    .placeholder-size {
        display: inline-block;
        margin-left: 50px;
        width: 300px;
    }

    .empty-space {
        margin-left: 20px;
        width: 300px;
    }

    .txt-color {
        color: white;
    }

    .paddin-top-form {
        padding-top: 15px;
    }

    .btn-register {
        float: right;
        margin-right: 30px;
        width: 85px;
        margin-top: 4px;
    }
</style>
