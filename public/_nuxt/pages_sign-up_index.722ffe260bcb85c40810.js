webpackJsonp([10],{Wujk:function(t,e,a){"use strict";var i=a("Xxa5"),r=a.n(i),o=a("exGp"),d=a.n(o),n=a("Dd8w"),s=a.n(n),c=a("NYxO"),p=a("yiyB");Stripe("YOUR_STRIPE_PUBLISHABLE_KEY").elements();e.a={head:function(){return{script:[{src:"https://js.stripe.com/v3/"}]}},name:"index",mounted:function(){this.$stripe.import().elements().create("card").mount("#card-element")},data:function(){return{first_name:"",last_name:"",email:"",password:"",preferred_bias:null,error:null}},methods:s()({},Object(c.mapActions)(["login"]),{signUp:function(){var t=d()(r.a.mark(function t(){var e,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,this.stripe.createToken(void 0).then(function(t){if(t.error)return e.hasCardErrors=!0,void e.$forceUpdate();console.log(t.token),alert(t.token)}),t.prev=2,t.next=5,p.a.auth().createUserWithEmailAndPassword(this.email,this.password);case 5:return a=t.sent,t.next=8,this.writeUserData(a.user.uid,this.email,this.first_name,this.last_name,this.preferred_bias);case 8:return t.next=10,this.login(a.user.uid);case 10:this.$router.push("/profile/"+a.user.uid+"/"),t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(2),console.log(t.t0.message),t.abrupt("return",this.error=t.t0.message);case 17:case"end":return t.stop()}},t,this,[[2,13]])}));return function(){return t.apply(this,arguments)}}(),writeUserData:function(t,e,a,i,r){return p.a.database().ref("users/"+t).set({email:e,displayName:a+" "+i,bias:r})}})}},iGIc:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".error-divider[data-v-1d08dbc5]{display:block;width:100px;margin:20px 0;height:2px;background:#c60314}.error-message[data-v-1d08dbc5]{color:#c60314;font-style:italic;font-size:18px;padding:10px;border-radius:5px;background:wheat;display:block}.main-wrap[data-v-1d08dbc5]{width:100%}.sign-up-wrap[data-v-1d08dbc5]{width:800px;max-width:95%;-webkit-box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;border-radius:10px;padding:0;margin:20px auto}.sign-up-info[data-v-1d08dbc5]{border-top-left-radius:10px;border-bottom-left-radius:10px;padding:25px;width:500px;max-width:70%;background:#fff;color:#1d1d1d}.sign-up-title[data-v-1d08dbc5]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.1)}.sign-up-title a[data-v-1d08dbc5]{color:#979797;text-decoration:none;border-bottom:2px solid transparent;padding-bottom:5px}.sign-up-title a[data-v-1d08dbc5]:hover{border-bottom:2px solid #c60314;color:#c60314}.what-you-get-wrap[data-v-1d08dbc5]{border-top-right-radius:10px;border-bottom-right-radius:10px;width:300px;max-width:45%;background:#c60314;color:#fff;padding:50px 25px}.what-you-get-wrap h1[data-v-1d08dbc5]{font-size:80px;font-weight:300;vertical-align:top;line-height:.6;margin-bottom:40px}.what-you-get-wrap h1 span[data-v-1d08dbc5]{font-size:32px}.what-you-get-wrap h1 .dollar-sign[data-v-1d08dbc5]{vertical-align:top}.what-you-get-wrap h1 .month[data-v-1d08dbc5]{vertical-align:bottom}.basic-info h3[data-v-1d08dbc5]{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;margin:25px 0 10px}.basic-info h3 span[data-v-1d08dbc5],.basic-info h3[data-v-1d08dbc5]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;align-content:center}.basic-info h3 span[data-v-1d08dbc5]{border:2px solid #c60314;color:#c60314;border-radius:100%;height:25px;width:25px;font-size:14px;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;text-align:center;margin-right:10px}.form-row[data-v-1d08dbc5]{display:block;margin:0 0 10px}.form-row .form-item[data-v-1d08dbc5]{display:inline-block;margin:5px 20px 5px 0;vertical-align:top}.form-row .form-item .small[data-v-1d08dbc5]{color:#979797;font-size:12px;margin:0 0 -15px 3px}.form-item input[data-v-1d08dbc5],.form-item label[data-v-1d08dbc5]{display:block;margin:5px 0}.form-item label[data-v-1d08dbc5]{font-weight:700;color:#666}.form-item label span[data-v-1d08dbc5]{color:#c60314}.form-item input[data-v-1d08dbc5],.form-item select[data-v-1d08dbc5]{border:none;padding:10px;border-radius:5px;background:#ebeaea}#card-element[data-v-1d08dbc5]{margin:30px 0 40px;padding:10px;border-radius:5px}.powered_by_stripe[data-v-1d08dbc5]{display:inline-block;margin:25px 0 0;height:20px}.complete-sign-up-btn[data-v-1d08dbc5]{color:#fff;outline:none;border:3px solid #c60314;padding:10px 25px;border-radius:5px;cursor:pointer;background:#c60314;font-weight:700;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-decoration:none;text-align:center}.complete-sign-up-btn[data-v-1d08dbc5]:hover{background:#fff;color:#c60314}.benefits ul[data-v-1d08dbc5]{margin:25px 0;-webkit-padding-start:0;padding-inline-start:0}.benefits ul li[data-v-1d08dbc5]{list-style:none;line-height:20px;margin:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.benefits ul li i[data-v-1d08dbc5]{font-size:20px;vertical-align:top;margin-right:8px}.testimonial[data-v-1d08dbc5]{margin-left:30px;padding-top:25px;border-top:1px solid hsla(0,0%,100%,.4)}.testimonial .quote[data-v-1d08dbc5]{font-style:italic;margin-bottom:20px}.testimonial .quotee[data-v-1d08dbc5]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:35px}.testimonial .quotee img[data-v-1d08dbc5]{height:35px;width:35px;margin-right:10px;border-radius:100%}.already-have p[data-v-1d08dbc5]{color:#666;text-align:center}.already-have p a[data-v-1d08dbc5]{color:#c60314;border-bottom:2px solid transparent;padding-bottom:5px;text-decoration:none}.already-have p a[data-v-1d08dbc5]:hover{border-bottom:2px solid #c60314}",""])},rJiJ:function(t,e,a){var i=a("iGIc");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("5e8b5d2e",i,!1,{sourceMap:!1})},sOeE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Wujk"),r=a("wCIA"),o=!1;var d=function(t){o||a("rJiJ")},n=a("VU/8")(i.a,r.a,!1,d,"data-v-1d08dbc5",null);n.options.__file="pages/sign-up/index.vue",e.default=n.exports},wCIA:function(t,e,a){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main-wrap"})};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r}});