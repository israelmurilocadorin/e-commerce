<template>
    <form>    
        <div class="div-login">
            <div class="box-login">
                <div class="paddin-top-form txt-center">
                    <label for="e-mail" class="txt-center"><b>E-mail</b></label>
                    <div class="size">
                        <input 
                            type="e-mail" 
                            v-moldel="form.email"
                            class="form-control txt-center" 
                            placeholder="Digite seu e-mail" 
                        >     
                    </div>
                </div>
                <div class="paddin-top-form txt-center">
                    <label for="password"><b>Senha</b></label>
                    <div class="size">
                        <input 
                            type="password" 
                            v-model="form.password"
                            class="form-control txt-center" 
                            placeholder="Digite sua senha" 
                        >
                    </div>
                </div>
                <div class="paddin-top-form">
                    <div class="div-buttons">
                        <button type="submit" @click="login()" class="btn btn-primary btn-login">Entrar</button>
                        <button type="submit" class="btn btn-primary btn-register">Registrar</button>
                    </div>
                    <div class="recover-acc">
                        <a href="/recuperar_senha">Recuperar conta</a>
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
    name: 'Login',
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    validations: {
        
    },
    methods: {
        login() {
            console.log(this.email, this.pass)
        }
    }
}

</script>

<style scoped>
    /* body {
        background-color: black;
    } */
</style>

<style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;  
        background-image: url('../assets/cloud.jpg');
    }

    .div-login {
        margin: 0 auto;
        margin-top: 70px;
        width: 360px;
        height: 360px;
        border-radius: 5px;
        margin-bottom: 100px;
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

    .size {
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

    .form-control {
        border-radius: 0px;
    }

    .btn-login {
        float: right;
        margin-right: 30px;
        width: 85px;
        margin-top: 4px;
        border-radius: 0px;
    }

    .btn-register {
        margin-left: 30px;
        width: 85px;
        margin-top: 4px;
        border-radius: 0px;
    }
</style>
