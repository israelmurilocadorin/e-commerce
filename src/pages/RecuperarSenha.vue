<template>
    <form>    
        <div class="div-login">
            <div class="box-recovery">
                <div class="paddin-top-form txt-center">
                    <label for="e-mail" class="txt-center"><b>Digite seu e-mail para recuperar</b></label>
                    <div class="size">
                        <input 
                            type="e-mail" 
                            v-moldel="form.email"
                            class="form-control txt-center" 
                            placeholder="xxx@xxx" 
                        >     
                    </div>
                </div>
                <div class="paddin-top-form">
                    <div class="div-button">
                        <button type="submit" class="btn btn-primary btn-enviar">Enviar</button>
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
    name: 'RecuperarSenha',
    data() {
        return {
            form: {
                email: ""
            }
        }
    },
    validations: {
        
    },
    methods: {
        login() {
            console.log(this.email)
        }
    }
}

</script>

<style>
    .btn-enviar {    	
        width: 85px;
        margin-top: 4px;
        border-radius: 0px;
    }

    .box-recovery {
        background-color: white;
        height: 170px;
        width: 310px;
        margin: 50px; 
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
    }

    .div-button {
        text-align: center;
    }
</style>