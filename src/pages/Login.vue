<template>
    <form>    
        <div class="div-login">
            <div class="box-login">
                <div class="paddin-top-form txt-center">
                    <label for="uname" class="txt-center"><b>Username</b></label>
                    <div class="placeholder-size">
                        <input type="text" class="form-control txt-center" placeholder="Enter Username" name="uname" required>     
                    </div>
                </div>
                <div class="paddin-top-form txt-center">
                    <label for="password"><b>Password</b></label>
                    <div class="placeholder-size">
                        <input type="password" class="form-control txt-center" placeholder="Enter Password" name="password" required>
                    </div>
                </div>
                <div class="paddin-top-form">
                    <button type="submit" class="btn btn-primary btn-login">Login</button>
                    <button type="submit" class="btn btn-primary btn-register">Register</button>
                </div>
            </div>
        </div>  
    </form>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'teste'
}

</script>

<style>
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        background-color: black;
    }

    .div-login {
        background-color: white;
        margin: 0 auto;
        margin-top: 150px;
        width: 360px;
        height: 360px;
        border-radius: 5px;
    }

    .box-login {
        background-color: rgb(114, 113, 113);
        height: 255px;
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
