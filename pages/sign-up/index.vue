<template>
    <div class="main-wrap">
        <!--<div class="sign-up-wrap">-->
            <!--<div class="sign-up-info">-->
                <!--<div class="sign-up-title"><h2>Sign Up</h2><nuxt-link to="/login/">Login <i class="fa fa-sign-in"></i></nuxt-link></div>-->
                <!--<div class="basic-info">-->
                    <!--<form @submit.prevent="signUp">-->
                        <!--<h3><span>1</span> Your Basic Information</h3>-->
                        <!--<div class="form-row">-->
                            <!--<div class="form-item">-->
                                <!--<label for="first_name">First Name <span>*</span></label>-->
                                <!--<input type="text" name="first_name" placeholder="Mat" v-model="first_name" required>-->
                            <!--</div>-->
                            <!--<div class="form-item">-->
                                <!--<label for="last_name">Last Name <span>*</span></label>-->
                                <!--<input type="text" name="last_name" placeholder="Fraser" v-model="last_name" required>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="form-row">-->
                            <!--<div class="form-item">-->
                                <!--<label for="email">Email <span>*</span></label>-->
                                <!--<input type="email" name="email" placeholder="mat@example.com" v-model="email" required>-->
                            <!--</div>-->
                            <!--<div class="form-item">-->
                                <!--<label for="password">Password <span>*</span></label>-->
                                <!--<input type="password" name="password" placeholder="" v-model="password" required>-->
                                <!--<p class="small">Creates account for future use</p>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="form-row">-->
                            <!--<div class="form-item">-->
                                <!--<label for="bias">Preferred Bias <span>*</span></label>-->
                                <!--<select type="select" name="bias" v-model="preferred_bias" required>-->
                                    <!--<option></option>-->
                                    <!--<option value="Aerobic Bias">Aerobic Bias</option>-->
                                    <!--<option value="Gymnastics Bias">Gymnastics Bias</option>-->
                                    <!--<option value="Strength Bias">Strength Bias</option>-->
                                    <!--<option value="Balanced Athlete">Balanced Athlete</option>-->
                                    <!--<option value="Not Sure">Not Sure</option>-->
                                <!--</select>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="error-message" v-if="error">-->
                            <!--<p>{{ this.error }}</p>-->
                            <!--<div class="error-divider"></div>-->
                        <!--</div>-->
                        <!--<h3><span>2</span> Your Payment Information</h3>-->

                        <!--<div id="card-element"></div>-->

                        <!--<div>-->
                            <!--<button type="submit" class="complete-sign-up-btn">Purchase Subscription</button>-->
                        <!--</div>-->
                    <!--</form>-->
                    <!--<p><em>(it doesn't actually do anything at the moment)</em></p>-->
                    <!--<div>-->
                        <!--<a href="https://stripe.com" style="display: inline-block;" target="_blank"><img class="powered_by_stripe" src="~/assets/powered_by_stripe.svg" alt="Powered by Stripe Payment Processing" /></a>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="what-you-get-wrap">-->
                <!--<h1><span class="dollar-sign">$ </span>25<span class="month"> / month</span></h1>-->
                <!--<p style="margin-left: 30px;"><em>Billed once monthly,</br>cancel anytime.</em></p>-->
                <!--<div class="benefits">-->
                    <!--<ul>-->
                        <!--<li><i class="fa fa-check"></i> Benefit number 1</li>-->
                        <!--<li><i class="fa fa-check"></i> Benefit number 2</li>-->
                        <!--<li><i class="fa fa-check"></i> Benefit number 3, but this one is longer and hopefully two lines</li>-->
                        <!--<li><i class="fa fa-check"></i> Benefit number 4</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--<div class="testimonial">-->
                    <!--<p class="quote">"I'm getting sick gainz with Koda Competitor, I'd trust Kevin with my life."</p>-->
                    <!--<p class="quotee"><img src="~/assets/TonySilvaQuote.jpg" /> Tony Silva</p>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="already-have">-->
            <!--<p>Already have an account? <nuxt-link to="/login/">Login <i class="fa fa-sign-in"></i></nuxt-link></p>-->
        <!--</div>-->


        <!--<div style="margin-top: 100px;">-->
        <!--&ndash;&gt; adds account in firebase, accepts payment, email notifying koda, email notifying customer of sugarwod details / accepting them into private track</br>-->
        <!--&ndash;&gt; Sign in page</br>-->
        <!--&#45;&#45;(if signed in) profile page based on firebase user id, name or email</br>-->
        <!--&#45;&#45;ability to update profile information and password / password reset</br>-->
        <!--&#45;&#45;ability to update payment information</br>-->
        <!--&#45;&#45;ability to cancel with form fill out?</br>-->
        <!--</div>-->
    </div>
</template>

<script>
let stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`),
    elements = stripe.elements(),
    card = undefined;
import { mapActions } from 'vuex'
import firebaseApp from '~/firebase/app'
    export default {
        head() {
            return {
                script: [
                    { src: 'https://js.stripe.com/v3/' }
                ]
            }
        },
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
                password: '',
                preferred_bias: null,
                error: null
            }
        },
        methods: {
            ...mapActions([ 'login' ]),
            async signUp () {
                // set the input fields as global vuex variables

            // <h1>Name: {{ this.$store.state.profileData.displayName }}</h1>
            //     <h1>Email: {{ this.$store.state.profileData.email }}</h1>
            //     <h1>Bias: {{ this.$store.state.profileData.bias }}</h1>
            //     <p>Route params uid: {{ this.$route.params.uid }}</p>
            //     <p>Store uid: {{ this.$store.state.uid }}</p>

                // send stripe token to somewhere else?

                let self = this;

                this.stripe.createToken(card).then(function(result) {
                    // if errors
                    if (result.error) {
                        self.hasCardErrors = true;
                        self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                        return;
                    }
                    // Access the token with result.token
                    console.log(result.token);
                    alert(result.token);
                });

                //maybe set all actions in a single function then call that function here

                // sign up with firebase email + pass
                try {
                    const firebaseUser = await firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password);
                    await this.writeUserData(firebaseUser.user.uid, this.email, this.first_name, this.last_name, this.preferred_bias);
                    await this.login(firebaseUser.user.uid);
                    this.$router.push('/profile/' + firebaseUser.user.uid + '/');
                } catch (error) {
                    console.log(error.message);
                    return this.error = error.message;
                }
            },
            writeUserData (userId, email, first_name, last_name, bias) {
                return firebaseApp.database().ref('users/' + userId).set({
                    email: email,
                    displayName: first_name + ' ' + last_name,
                    bias: bias
                    // can send lots of data for profile here and adjust how the users page id is based and pulled
                })
            }
        }
    }
</script>

<style scoped>
    .error-divider {
        display: block;
        width: 100px;
        margin: 20px 0;
        height: 2px;
        background: #c60314;
    }
    .error-message {
        color: #c60314;
        font-style: italic;
        font-size: 18px;
        padding: 10px;
        border-radius: 5px;
        background: #f5deb3;
        display: block;
    }
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
    .sign-up-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    .sign-up-title a {
        color: #979797;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        padding-bottom: 5px;
    }
    .sign-up-title a:hover {
        border-bottom: 2px solid #c60314;
        color: #c60314;
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
    margin-bottom: 40px;
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
        vertical-align: top;
    }
    .form-row .form-item .small {
        color: #979797;
        font-size: 12px;
        margin: 0 0 -15px 3px;
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
        padding: 10px;
        border-radius: 5px;
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
    .benefits ul {
        margin: 25px 0;
        padding-inline-start: 0px;
    }
    .benefits ul li {
        list-style: none;
        line-height: 20px;
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .benefits ul li i {
        font-size: 20px;
        vertical-align: top;
        margin-right: 8px;
    }
    .testimonial {
        margin-left: 30px;
        padding-top: 25px;
        border-top: 1px solid rgba(255,255,255,0.4);
    }
    .testimonial .quote {
        font-style: italic;
        margin-bottom: 20px;
    }
    .testimonial .quotee {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 35px;
    }
    .testimonial .quotee img {
        height: 35px;
        width: 35px;
        margin-right: 10px;
        border-radius: 100%;
    }
    .already-have p {
        color: #666;
        text-align: center;
    }
    .already-have p a {
        color: #c60314;
        border-bottom: 2px solid transparent;
        padding-bottom: 5px;
        text-decoration: none;
    }
    .already-have p a:hover {
        border-bottom: 2px solid #c60314;
    }
</style>