<template>
    <div class="main-wrap">
        <div class="login-wrap">
            <div class="login">Login to your account</div>
            <form>
                <div class="form-row">
                    <div class="form-item">
                        <label for="email">Email</label>
                        <input type="email" name="email" v-model="email" required>
                    </div>
                    <div class="form-item">
                        <label for="password">Password</label>
                        <input style="margin-bottom: 0;" type="text" name="password" placeholder="" v-model="password" required>
                        <div class="forgot"><a href="#">Forgot password?</a></div>
                    </div>
                </div>
                <button class="complete-sign-in-btn">Login <i class="fa fa-sign-in"></i></button>
            </form>

        </div>
        <div class="dont-have"><p>Don't have an account? <nuxt-link to="/sign-up/">Sign Up <i class="fa fa-sign-in"></i></nuxt-link></p></div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                email: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    .main-wrap {
        width: 100%;
    }
    .login-wrap {
        width: 300px;
        max-width: 95%;
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
        border-radius: 10px;
        padding: 0;
        margin: 20px auto;
        background: #fff;
    }
    .login-wrap .login {
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        color: #fff;
        background: #c60314;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .dont-have p {
        color: #666;
        text-align: center;
    }
    .dont-have p a {
        color: #c60314;
        border-bottom: 2px solid transparent;
        padding-bottom: 5px;
        text-decoration: none;
    }
    .dont-have p a:hover {
        border-bottom: 2px solid #c60314;
    }
    .forgot a {
        color: #666;
        text-decoration: none;
        font-size: 12px;
    }
    .forgot a:hover {
        color: #666;
        text-decoration: underline;
    }
    form {
        padding: 20px 25px 40px;
        width: 250px;
        margin: 0;
        max-width: 100%;
    }
    .form-row {
        display: block;
        margin: 0 0 10px;
    }
    .form-row .form-item {
        display: block;
        margin: 5px 20px 5px 0;
        vertical-align: top;
    }
    .form-item label, .form-item input {
        display: block;
        margin: 5px 0;
    }
    .form-item label {
        font-weight: bold;
        color: #666;
    }
    .form-item label span {
        color: #c60314;
    }
    .form-item input, .form-item select {
        border: none;
        padding: 10px;
        border-radius: 5px;
        background: hsl(355, 4%, 92%);
        width: 250px;
    }
    .complete-sign-in-btn {
        color: #fff;
        outline: none;
        border: 3px solid #c60314;
        padding: 10px 25px;
        border-radius: 5px;
        cursor: pointer;
        background: #c60314;
        font-weight: bold;
        transition: 0.25s all ease-in-out;
        text-decoration: none;
        text-align: center;
    }
    .complete-sign-in-btn:hover {
        background: #fff;
        color: #c60314;
    }
</style>