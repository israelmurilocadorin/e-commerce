<template>
    <form action="/login" method="POST">    
        <div class="div-login">
            <div class="box-login">
                <div class="paddin-top-form txt-center">
                    <label for="uname" class="txt-center"><b>Usuário</b></label>
                    <div class="placeholder-size">
                        <input type="text" class="form-control txt-center" placeholder="Digite o usuário" name="uname" required>     
                    </div>
                </div>
                <div class="paddin-top-form txt-center">
                    <label for="password"><b>Senha</b></label>
                    <div class="placeholder-size">
                        <input type="password" class="form-control txt-center" placeholder="Digite a senha" name="password" required>
                    </div>
                </div>
                <div class="paddin-top-form">
                    <div class="div-buttons">
                        <button type="submit" class="btn btn-primary btn-login">Entrar</button>
                        <button type="submit" class="btn btn-primary btn-register">Registrar</button>
                    </div>
                    <div class="recover-acc">
                        <a href="">Recuperar conta</a>
                    </div>
                </div>
            </div>
        </div>  
    </form>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'Login'
}

</script>

<style>
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }

    .div-login {
        background-color: black;
        margin: 0 auto;
        margin-top: 150px;
        width: 360px;
        height: 360px;
        border-radius: 5px;
        margin-bottom: 70px;
    }

    .box-login {
        background-color: white;
        height: 270px;
        margin: 50px; 
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;

    }

    .div-buttons {
        height: 50px;
    }

    .recover-acc {
        float: right;
        margin-right: 30px;
    }

    .placeholder-size {
        width: 200px;
        margin: 0 auto;
    }

    .txt-center {
        text-align: center;
        color: black;
    }

    .paddin-top-form {
        padding-top: 15px;
    }

    .btn-login {
        float: right;
        margin-right: 30px;
        width: 85px;
        margin-top: 4px;
    }

    .btn-register {
        margin-left: 30px;
        width: 85px;
        margin-top: 4px;
    }
</style>
