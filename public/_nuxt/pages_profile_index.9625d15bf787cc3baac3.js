webpackJsonp([12],{"+H03":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("yAwy"),u=i("XvIe"),s=!1;var n=function(t){s||i("44Il")},o=i("VU/8")(r.a,u.a,!1,n,"data-v-14bc1b43",null);o.options.__file="pages/profile/index.vue",e.default=o.exports},"/LgW":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"44Il":function(t,e,i){var r=i("/LgW");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("597a06d0",r,!1,{sourceMap:!1})},XvIe:function(t,e,i){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div")};r._withStripped=!0;var u={render:r,staticRenderFns:[]};e.a=u},yAwy:function(t,e,i){"use strict";e.a={name:"index",layout:"protected",mounted:function(){return this.profileCheck()},methods:{profileCheck:function(){null===this.uidCheck?this.$router.push("/login/"):this.uidCheck!==this.$route.params.uid?this.$router.push("/profile/"+this.uidCheck+"/"):this.uidCheck===this.$route.params.uid||this.$router.push("/login/")}},computed:{uidCheck:function(){return this.$store.state.uid}},watch:{uidCheck:function(){return this.profileCheck()}}}}});