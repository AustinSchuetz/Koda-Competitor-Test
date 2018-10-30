<template>
    <div class="main-wrap">
        <div class="sign-up-wrap">
            <div class="sign-up-info">
                <h2>Sign Up</h2>
                <div class="basic-info">
                    <h3><span>1</span> Your Basic Information</h3>
                    <div class="form-row">
                        <div class="form-item">
                            <label for="first_name">First Name <span>*</span></label>
                            <input type="text" name="first_name" placeholder="Mat" v-model="first_name" required>
                        </div>
                        <div class="form-item">
                            <label for="last_name">Last Name <span>*</span></label>
                            <input type="text" name="last_name" placeholder="Fraser" v-model="last_name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-item">
                            <label for="email">Email <span>*</span></label>
                            <input type="email" name="email" placeholder="mat@example.com" v-model="email" required>
                        </div>
                        <div class="form-item">
                            <label for="bias">Preferred Bias <span>*</span></label>
                            <select type="select" name="bias" v-model="preferred_bias" required>
                                <option></option>
                                <option value="Aerobic Bias">Aerobic Bias</option>
                                <option value="Gymnastics Bias">Gymnastics Bias</option>
                                <option value="Strength Bias">Strength Bias</option>
                                <option value="Balanced Athlete">Balanced Athlete</option>
                                <option value="Not Sure">Not Sure</option>
                            </select>
                        </div>
                    </div>
                    <h3><span>2</span> Your Payment Information</h3>

                    <div id="card-element"></div>

                    <div>
                        <button class="complete-sign-up-btn">Purchase Subscription</button>
                    </div>
                    <p><em>(it doesn't actually do anything at the moment)</em></p>
                    <div>
                        <a href="https://stripe.com" style="display: inline-block;" target="_blank"><img class="powered_by_stripe" src="~/assets/powered_by_stripe.svg" alt="Powered by Stripe Payment Processing" /></a>
                    </div>
                </div>
            </div>

            <div class="what-you-get-wrap">
                <h1><span class="dollar-sign">$ </span>25<span class="month"> / month</span></h1>
                <p style="margin-left: 30px;"><em>Billed once monthly,</br>cancel anytime.</em></p>
            </div>
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
</template>

<script>
    export default {
        name: "index",
        mounted() {
            const elements = this.$stripe.import().elements();
            const card = elements.create('card');
            // Add an instance of the card Element into the `card-element` <div>
            card.mount('#card-element');
        },
        data() {
            return {
                first_name: '',
                last_name: '',
                email: '',
                preferred_bias: null
            }
        }
    }
</script>

<style scoped>
    .main-wrap {
        width: 100%;
    }
.sign-up-wrap {
    width: 800px;
    max-width: 95%;
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
.sign-up-info h2 {
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
    .what-you-get-wrap {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 300px;
        max-width: 45%;
        background: #c60314;
        color: #fff;
        padding: 50px 25px;
    }
.what-you-get-wrap h1 {
    font-size: 80px;
    font-weight: 300;
    vertical-align: top;
    line-height: 0.6;
    margin-bottom: 35px;
}
.what-you-get-wrap h1 span {
    font-size: 32px;
}
.what-you-get-wrap h1 .dollar-sign {
    vertical-align: top;
}
.what-you-get-wrap h1 .month {
    vertical-align: bottom;
}
.basic-info h3 {
    display: flex;
    flex-direction: row;
    align-content: center;
    margin: 25px 0 10px;
}
    .basic-info h3 span {
        border: 2px solid #c60314;
        color: #c60314;
        border-radius: 100%;
        height: 25px;
        width: 25px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        margin-right: 10px;
    }
    .form-row {
        display: block;
        margin: 0 0 10px;
    }
    .form-row .form-item {
        display: inline-block;
        margin: 5px 20px 5px 0;
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
}
    #card-element {
        margin: 30px 0 40px;
    }
.powered_by_stripe {
    display: inline-block;
    margin: 25px 0 0;
    height: 20px;
}
.complete-sign-up-btn {
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
.complete-sign-up-btn:hover {
    background: #fff;
    color: #c60314;
}
</style>