<template>
    <form>    
        <div class="div-register">
            <div class="box-register">
                <div class="paddin-top-form txt-center">
                    <label for="uname" class="txt-center"><b>Usuário</b></label>
                    <div class="placeholder-size">
                        <input type="text" class="form-control txt-center" placeholder="Digite o usuário" name="uname" required>     
                    </div>
                </div>
                <div class="paddin-top-form txt-center">
                    <label for="e-mail"><b>E-mail</b></label>
                    <div class="placeholder-size">
                        <input type="e-mail" class="form-control txt-center" placeholder="Digite seu e-mail" name="e-mail" required>
                    </div>
                </div>
                <div class="paddin-top-form txt-center">
                    <label for="password"><b>Senha</b></label>
                    <div class="placeholder-size">
                        <input type="password" class="form-control txt-center" placeholder="Digite a senha" name="password" required>
                    </div>
                </div>
                <div class="paddin-top-form txt-center">
                    <label for="password-repeat"><b>Repita a Senha</b></label>
                    <div class="placeholder-size">
                        <input type="password" class="form-control txt-center" placeholder="Repita a senha" name="password-repeat" required>
                    </div>
                </div>
                <div class="paddin-top-form">
                    <button type="submit" class="btn btn-primary btn-register">Registrar</button>
                </div>
            </div>
        </div>  
    </form>
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

    .div-register {
        background-color: black;
        margin: 0 auto;
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

    .btn-register {
        float: right;
        margin-right: 30px;
        width: 85px;
        margin-top: 4px;
    }
</style>
