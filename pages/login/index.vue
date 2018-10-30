<template>
    <div class="main-wrap">
        <div class="login-wrap">
            <div class="login">Login to your account</div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .main-wrap {
        width: 100%;
    }
    .login-wrap {
        width: 550px;
        max-width: 95%;
        height: 500px;
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
</style>