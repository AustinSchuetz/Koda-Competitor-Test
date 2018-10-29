<template>
    <div class="sign-up-wrap">
        <div class="sign-up-info">
            <h2>Sign Up</h2>
            <div>
                <h3><span>1</span> Your Basic Information</h3>
                <div>
                    <div>
                        <label for="first_name">First Name</label>
                        <input type="text" name="first_name">
                    </div>
                    <div>
                        <label for="last_name">Last Name</label>
                        <input type="text" name="last_name">
                    </div>
                </div>

            </div>
            E-mail</br>
            Preferred Bias: aerobic, gymnastics, strength, balanced athlete, not sure</br>

            Accept Payment
        </div>

        <div class="what-you-get-wrap">
            <div>
                $25/mo</br>
                Payment</br>
            </div>

            <div>
                --> adds account in firebase, accepts payment, email notifying koda, email notifying customer of sugarwod details / accepting them into private track</br>
                --> Sign in page</br>
                --(if signed in) profile page based on firebase user id, name or email</br>
                --ability to update profile information and password / password reset</br>
                --ability to update payment information</br>
                --ability to cancel with form fill out?</br>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.sign-up-wrap {
    width: 750px;
    max-width: 95%;
    height: 500px;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 0;
    margin: 20px auto;
}
    .sign-up-info {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 25px;
        width: 500px;
        max-width: 70%;
        background: #fff;
        color: #1d1d1d;
    }
    .what-you-get-wrap {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 250px;
        max-width: 40%;
        background: #c60314;
        color: #fff;
        padding: 25px;
    }
</style>