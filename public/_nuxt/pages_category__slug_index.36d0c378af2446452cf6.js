webpackJsonp([4],{"/E9+":function(t,e,a){"use strict";var i=a("fVDv");e.a={components:{Leaderboard:i.a},props:["posts","total","totalPages"],data:function(){return{currentPage:1}},computed:{nextPage:function(){return this.nextPage=this.currentPage+1},previousPage:function(){return this.previousPage=this.currentPage-1},firstPost:function(){return this.firstPost=9*(this.currentPage-1)},lastPost:function(){return this.lastPost=9*this.currentPage-1}},methods:{slugToUrl:function(t){return"/"+t},pageUpClick:function(){return this.currentPage=this.currentPage+1},pageDownClick:function(){return this.currentPage=this.currentPage-1},setActive:function(t){this.$store.commit("setActiveStore",t)},loadPostBias:function(t){if(null===this.$store.state.activeBias){if(t.all_athletes)return this.setActive("all_athletes");if(t.aerobic_bias)return this.setActive("aerobic_bias");if(t.gymnastics_bias)return this.setActive("gymnastics_bias");if(t.strength_bias)return this.setActive("strength_bias");if(t.balanced_athlete)return this.setActive("balanced_athlete")}}}}},"0n+Y":function(t,e,a){"use strict";var i=a("/E9+"),o=a("K5P8"),s=!1;var n=function(t){s||a("D4Ov")},r=a("VU/8")(i.a,o.a,!1,n,"data-v-65faface",null);r.options.__file="components/postList.vue",e.a=r.exports},"1qH/":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"categories-menu",class:{scrolled:this.$store.state.scrollPosition>0}},[i("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[i("img",{attrs:{src:a("kh+z")},on:{click:t.navMenuClose}}),i("h2",{on:{click:t.navMenuClose}},[t._v("Koda"),i("span",[t._v("Competitor")])])]),i("div",{staticClass:"main-menu"},[i("nuxt-link",{staticClass:"sign-up",attrs:{to:"/workout-of-the-day/"}},[t._v("WOD")]),i("nuxt-link",{attrs:{to:"/athlete-type/"}},[t._v("Pick a Track")]),i("nuxt-link",{attrs:{to:"/blog/"}},[t._v("Blog")]),i("nuxt-link",{attrs:{to:"/coaches/"}},[t._v("Coaches")]),i("nuxt-link",{attrs:{to:"/social/"}},[t._v("Social")])],1),i("div",{staticClass:"mobile-menu-btn-holder"},[i("div",{class:{open:this.navMenuOpen},attrs:{id:"nav-icon"},on:{click:t.navMenu}},[i("span"),i("span"),i("span")])])],1),i("div",{staticClass:"mobile-menu",class:{"mobile-menu-open":this.navMenuOpen}},[i("div",{staticClass:"mobile-links"},[i("li",{on:{click:t.navMenuClose}},[i("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),i("li",{on:{click:t.navMenuClose}},[i("nuxt-link",{attrs:{to:"/workout-of-the-day/"}},[t._v("Workout of the Day")])],1),i("li",{on:{click:t.navMenuClose}},[i("nuxt-link",{attrs:{to:"/athlete-type/"}},[t._v("Pick a Track")])],1),i("li",{on:{click:t.navMenuClose}},[i("nuxt-link",{attrs:{to:"/blog/"}},[t._v("Blog")])],1),i("li",{on:{click:t.navMenuClose}},[i("nuxt-link",{attrs:{to:"/coaches/"}},[t._v("Coaches")])],1),i("li",{on:{click:t.navMenuClose}},[i("nuxt-link",{attrs:{to:"/social/"}},[t._v("Social")])],1)]),t._m(0)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social"},[e("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/kodacompetitor/",target:"_blank"}}),e("a",{staticClass:"fa fa-facebook",attrs:{href:"https://www.facebook.com/groups/416882822174358/",target:"_blank"}})])}]};e.a=o},"7h4h":function(t,e,a){"use strict";e.a={props:["posts"],methods:{slugToUrl:function(t){return"/"+t}}}},"A+DE":function(t,e,a){var i=a("c3Ly");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2ba0c90f",i,!1,{sourceMap:!1})},D4Ov:function(t,e,a){var i=a("ZFXi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("472fc526",i,!1,{sourceMap:!1})},EBIG:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h3[data-v-1871d766]{font-size:22px}a[data-v-1871d766]{color:#444}a.nuxt-link-active[data-v-1871d766]{color:#ccc}",""])},"G/rx":function(t,e,a){var i=a("EBIG");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("30ab7bb6",i,!1,{sourceMap:!1})},GrKE:function(t,e,a){var i=a("piG4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("f0e297a4",i,!1,{sourceMap:!1})},K5P8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-holder"},[t._l(t.posts,function(e,i){return t.posts&&t.posts.length>0&&i>=t.firstPost&&i<=t.lastPost?a("div",{key:i,staticClass:"post",attrs:{mounted:t.loadPostBias(e)}},[a("h2",{staticClass:"mobile-title"},[t._v(t._s(e.title))]),e.fi_medium?a("div",{staticClass:"post-featured-background fi_medium",style:{"background-image":"url("+e.fi_medium+")"}}):t._e(),a("div",{staticClass:"bias-wrap"},[e.all_athletes?a("a",{staticClass:"bias",class:{activebias:"all_athletes"===t.$store.state.activeBias},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.setActive("all_athletes")}}},[t._v("All Athletes")]):t._e(),e.aerobic_bias?a("a",{staticClass:"bias",class:{activebias:"aerobic_bias"===t.$store.state.activeBias},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.setActive("aerobic_bias")}}},[t._v("Aerobic Bias")]):t._e(),e.gymnastics_bias?a("a",{staticClass:"bias",class:{activebias:"gymnastics_bias"===t.$store.state.activeBias},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.setActive("gymnastics_bias")}}},[t._v("Gymnastics Bias")]):t._e(),e.strength_bias?a("a",{staticClass:"bias",class:{activebias:"strength_bias"===t.$store.state.activeBias},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.setActive("strength_bias")}}},[t._v("Strength Bias")]):t._e(),e.balanced_athlete?a("a",{staticClass:"bias",class:{activebias:"balanced_athlete"===t.$store.state.activeBias},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.setActive("balanced_athlete")}}},[t._v("Balanced Athlete")]):t._e()]),a("nuxt-link",{staticClass:"post-content",attrs:{to:"/workout-of-the-day"+t.slugToUrl(e.slug)}},[a("div",{staticClass:"post-content-date"},[a("h2",[t._v(t._s(e.title))])]),a("div",{staticClass:"post-text-content"},[a("transition",{attrs:{name:"slide-fade"}},["all_athletes"===t.$store.state.activeBias?a("div",{attrs:{id:"all-athletes-content"},domProps:{innerHTML:t._s(e.all_athletes)}}):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["aerobic_bias"===t.$store.state.activeBias?a("div",{attrs:{id:"aerobic-bias-content"},domProps:{innerHTML:t._s(e.aerobic_bias)}}):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["gymnastics_bias"===t.$store.state.activeBias?a("div",{attrs:{id:"gymnastics-bias-content"},domProps:{innerHTML:t._s(e.gymnastics_bias)}}):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["strength_bias"===t.$store.state.activeBias?a("div",{attrs:{id:"strength-bias-content"},domProps:{innerHTML:t._s(e.strength_bias)}}):t._e()]),a("transition",{attrs:{name:"slide-fade"}},["balanced_athlete"===t.$store.state.activeBias?a("div",{attrs:{id:"balanced-athlete-content"},domProps:{innerHTML:t._s(e.balanced_athlete)}}):t._e()])],1),a("strong",{staticClass:"more"},[t._v("View WOD")])])],1):t._e()}),a("div",{staticClass:"pagination-holder",class:{flexStart:t.currentPage==t.totalPages,flexEnd:1===t.currentPage}},[t.currentPage>1?a("button",{staticClass:"pagination-btn",on:{click:t.pageDownClick}},[t._v("Previous Page")]):t._e(),t.currentPage<t.totalPages?a("button",{staticClass:"pagination-btn",on:{click:t.pageUpClick}},[t._v("Next Page")]):t._e()])],2)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},NRCy:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.categories-menu[data-v-4e6def97]{border-top:3px solid #c60314;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background:transparent;position:fixed;z-index:10;padding:0 20px 0 0;height:70px;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.categories-menu .category-item[data-v-4e6def97]{width:inherit}.categories-menu a[data-v-4e6def97]{color:#c60314;font-weight:700;text-decoration:none;padding:20px;border-bottom:3px solid transparent;display:inline-block;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.categories-menu a[data-v-4e6def97]:hover{border-bottom:3px solid #c60314}.categories-menu .sign-up[data-v-4e6def97]{padding:10px;margin:15px 10px;border:1px solid;border-radius:5px;height:inherit}.categories-menu .sign-up[data-v-4e6def97]:hover{background:#c60314;color:#fff;border:1px solid #c60314}.categories-menu .logo img[data-v-4e6def97]{height:55px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:7px auto;-webkit-transition:0s;transition:0s}.categories-menu .logo:hover img[data-v-4e6def97]{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur in="SourceAlpha" stdDeviation="4" /><feOffset dx="1" dy="1" result="offsetblur" /><feFlood flood-color="rgba(0,0,0,0.3)" /><feComposite in2="offsetblur" operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter></svg>#filter\');-webkit-filter:drop-shadow(0 0 4px rgba(0,0,0,.3));filter:drop-shadow(0 0 4px rgba(0,0,0,.3))}.categories-menu .logo[data-v-4e6def97]{border-bottom:0;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;opacity:1!important;padding:0;margin:0;width:260px}.categories-menu .logo[data-v-4e6def97],.categories-menu .logo h2[data-v-4e6def97]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;text-decoration:none!important;-webkit-transition:0s;transition:0s}.categories-menu .logo h2[data-v-4e6def97]{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;text-transform:uppercase;letter-spacing:.5px;font-weight:800;font-size:2em;line-height:1.1;width:120px}.categories-menu .logo h2 span[data-v-4e6def97]{display:block;font-size:.5em;letter-spacing:.1px;margin-top:0}.categories-menu .logo[data-v-4e6def97]:hover{border-bottom:0}.categories-menu.scrolled[data-v-4e6def97]{background:#fff;-webkit-box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.mobile-menu-btn-holder[data-v-4e6def97]{display:none}.mobile-menu[data-v-4e6def97]{display:none;width:100%;margin:0 auto;left:0;right:0;bottom:0;top:60px;position:fixed;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s;background:#fff;z-index:90;overflow:auto;padding:15px 0;border-top:1px solid rgba(0,0,0,.1)}@media only screen and (max-width:790px){.categories-menu[data-v-4e6def97]{background:#fff;height:60px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.mobile-menu-open[data-v-4e6def97]{display:block;opacity:1}.categories-menu.scrolled[data-v-4e6def97]{-webkit-box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.categories-menu .logo[data-v-4e6def97]{z-index:12;width:calc(50% + 75px);-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.categories-menu .logo img[data-v-4e6def97]{height:40px;margin:7px}.categories-menu .logo h2[data-v-4e6def97]{margin-top:-5px}.main-menu[data-v-4e6def97]{display:none}.mobile-menu-btn-holder[data-v-4e6def97]{display:block;position:absolute;right:15px;top:8px;-webkit-transition:0s;transition:0s}#nav-icon[data-v-4e6def97]{width:40px;height:30px;position:relative;margin:5px auto;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;background:none}#nav-icon[data-v-4e6def97]:active,#nav-icon[data-v-4e6def97]:focus,.mobile-menu-btn-holder[data-v-4e6def97]:active,.mobile-menu-btn-holder[data-v-4e6def97]:focus{outline:0;background:#fff}#nav-icon span[data-v-4e6def97]{display:block;position:absolute;height:6px;width:100%;background:#c60314;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;transition:.25s ease-in-out}#nav-icon span[data-v-4e6def97]:first-child{top:0;-webkit-transform-origin:left center;transform-origin:left center}#nav-icon span[data-v-4e6def97]:nth-child(2){top:12px;-webkit-transform-origin:left center;transform-origin:left center}#nav-icon span[data-v-4e6def97]:nth-child(3){top:24px;-webkit-transform-origin:left center;transform-origin:left center}#nav-icon.open span[data-v-4e6def97]:first-child{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-1px;left:6px}#nav-icon.open span[data-v-4e6def97]:nth-child(2){width:0;opacity:0}#nav-icon.open span[data-v-4e6def97]:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:27px;left:6px}.social[data-v-4e6def97]{margin:0 10px;text-align:center;padding:15px;position:absolute;bottom:0;width:calc(100% - 20px);border-top:1px solid rgba(0,0,0,.1);background:#fff}.fa[data-v-4e6def97]{color:#c60314;font-weight:700;text-decoration:none;display:inline-block;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;font-size:28px;padding:0;margin:0 10px 10px;border:none;text-align:center}.fa[data-v-4e6def97]:hover{color:#1d1d1d;border:none}.mobile-menu .mobile-links li[data-v-4e6def97]{padding:0;display:block;list-style:none}.mobile-menu .mobile-links a[data-v-4e6def97]{display:block;width:100%;text-align:center;color:#c60314;text-decoration:none;padding:8px;font-size:1.5em;font-weight:700}}',""])},Q7sv:function(t,e,a){"use strict";var i=a("ioCb"),o=a("1qH/"),s=!1;var n=function(t){s||a("r/ji")},r=a("VU/8")(i.a,o.a,!1,n,"data-v-4e6def97",null);r.options.__file="components/categories.vue",e.a=r.exports},R3Or:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leaderboard"},[a("h2",[t._v("Leaderboard")]),a("h2",[t._v(t._s(t._f("moment")(this.leaderboard.date,"MMM Do YYYY")))]),t._l(t.leaderboardPostID,function(e){return a("div",{ref:"workoutIDdiv",refInFor:!0,attrs:{id:"workoutIDdiv",load:t.loadLeaderboard(e.acf.workout_id)}})}),a("div",{staticClass:"divider"}),a("h3",{staticClass:"workout-title"},[t._v(t._s(this.leaderboard.workoutTitle))]),t._l(t.leaderboard.tests,function(e){return 1===t.leaderboard.tests.length?a("div",{staticClass:"test"},[a("h4",[t._v(t._s(e.title))]),e.testInstructions?a("p",[t._v(t._s(e.testInstructions))]):t._e(),a("div",{staticClass:"divider lower-divider"}),a("div",{staticClass:"scrollable-leaderboard"},t._l(t.leaderboard.results,function(e){return a("div",{staticClass:"leader"},[a("div",{staticClass:"score-wrap"},[a("p",[t._v(t._s(e.rank))]),a("img",{attrs:{src:e.profileImg}}),a("div",{staticClass:"score"},[a("p",[t._v(t._s(e.userFirstName)+" "+t._s(e.userLastName))]),a("h5",[t._v("("+t._s(e.userTests[0].value)+")")])])])])}))]):t._e()}),a("div",{staticClass:"scrollable-leaderboard"},t._l(t.leaderboard.tests,function(e,i){return t.leaderboard.tests.length>1?a("div",{staticClass:"test"},[a("h4",[t._v(t._s(e.title))]),e.testInstructions?a("p",[t._v(t._s(e.testInstructions))]):t._e(),t._l(t.leaderboard.results,function(o){return a("div",{staticClass:"leader"},[o.userTests[i].value?a("div",{staticClass:"score-wrap"},[a("p",[t._v(t._s(o.ranks[i]))]),a("img",{attrs:{src:o.profileImg}}),a("div",{staticClass:"score"},[a("p",[t._v(t._s(o.userFirstName)+" "+t._s(o.userLastName))]),a("h5",[t._v("("+t._s(o.userTests[i].value)),"lbs"==e.unit?a("span",[t._v(" lbs")]):t._e(),t._v(")")])])]):t._e()])})],2):t._e()}))],2)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},ZFXi:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.pagination-holder[data-v-65faface]{margin:50px auto 0;width:750px;max-width:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.pagination-holder .pagination-btn[data-v-65faface]{background:#fff;outline:none;border:3px solid #c60314;padding:10px;border-radius:5px;cursor:pointer;color:#c60314;font-weight:700;width:135px;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-decoration:none;text-align:center}.pagination-holder .pagination-btn[data-v-65faface]:hover{color:#fff;background:#c60314}.pagination-holder.flexStart[data-v-65faface]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.pagination-holder.flexEnd[data-v-65faface]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.mobile-title[data-v-65faface]{display:none;padding:0 10px 0 15px;border-bottom:1px solid rgba(0,0,0,.1)}a[data-v-65faface]{text-decoration:none;color:#1d1d1d;opacity:1;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;position:relative;z-index:1}.post-container .post-content[data-v-65faface]:hover{background:none}.fi_medium[data-v-65faface]{position:relative;z-index:1}a:hover .fi_medium[data-v-65faface]:after{content:"";height:100%;width:100%;position:absolute;z-index:2;background:rgba(198,3,20,.35)}.post-holder[data-v-65faface]{width:100%;margin:0}.post[data-v-65faface]{margin:30px auto;padding:0;border-radius:5px;background:hsla(0,0%,100%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:300px;width:800px;max-width:95%;border-left:3px solid #c60314;background:#fff;-webkit-box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.post[data-v-65faface]:first-child{border-left:5px solid #c60314;width:100%;height:355px;margin:0 auto}.bias-wrap[data-v-65faface]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.bias-wrap .bias[data-v-65faface]{padding:10px;background:rgba(0,0,0,.03);border-left:3px solid transparent;font-weight:700;color:#646464;border-bottom:1px solid rgba(0,0,0,.1);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.bias-wrap .bias[data-v-65faface]:hover{border-left-color:#c60314;color:#1d1d1d;background:rgba(0,0,0,.02)}.bias-wrap .activebias[data-v-65faface]{border-left-color:#c60314;color:#1d1d1d!important;background:#fff!important}.post-content-date[data-v-65faface]{padding:0 10px 0 15px;border-bottom:1px solid rgba(0,0,0,.1)}.post-text-content[data-v-65faface]{padding:10px 20px;max-height:200px;overflow-y:hidden;position:relative}.post:first-child .post-text-content[data-v-65faface]{max-height:250px}.post-text-content[data-v-65faface]:after{content:"";position:absolute;left:0;bottom:0;right:0;width:100%;height:20%;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.01)),to(#fff));background:linear-gradient(180deg,hsla(0,0%,100%,.01),#fff)}.post .post-content[data-v-65faface]{padding:0;-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2}.post .post-featured-background[data-v-65faface]{width:350px;max-width:35%;height:100%;display:inline-block;vertical-align:top;background-size:cover;background-position:50% 50%;background-repeat:no-repeat;-webkit-box-shadow:15px 0 30px -20px rgba(0,0,0,.45);box-shadow:15px 0 30px -20px rgba(0,0,0,.45)}.post:first-child .post-featured-background[data-v-65faface]{width:400px}h2[data-v-65faface]{font-size:1.75em;font-weight:bolder;line-height:41px;width:100%;text-align:left}p[data-v-65faface]{font-size:16px;line-height:140%}.more[data-v-65faface]{color:#1d1d1d;line-height:1.5;border:1px solid;border-radius:5px;margin:15px;padding:5px 10px 7px;display:inline-block}.more[data-v-65faface]:hover{color:#c60314}@media only screen and (max-width:1100px){.post[data-v-65faface],.post[data-v-65faface]:first-child{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:inherit;border:none;border-top:3px solid #c60314}.bias-wrap[data-v-65faface]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;background:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.1)}.bias-wrap .bias[data-v-65faface]{background:none;border:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom:3px solid transparent;border-left:1px solid rgba(0,0,0,.1);max-width:25%;text-align:center;font-size:12px;line-height:1.3}.bias-wrap .bias[data-v-65faface]:last-child{border-right:1px solid rgba(0,0,0,.1)}.bias-wrap .bias[data-v-65faface]:hover{border-left-color:rgba(0,0,0,.1);border-bottom:3px solid #c60314}.bias-wrap .activebias[data-v-65faface]{border-bottom-color:#c60314;color:#1d1d1d!important;background:#fff!important}.post .post-featured-background[data-v-65faface],.post:first-child .post-featured-background[data-v-65faface]{width:100%;max-width:100%;display:block;height:250px;background-position:50% 20%}.mobile-title[data-v-65faface]{display:block}.post-content-date[data-v-65faface]{display:none}}@media only screen and (max-width:790px){.bias-wrap .bias[data-v-65faface]{padding:3px}.mobile-title[data-v-65faface]{font-size:1.35em}}.slide-fade-enter-active[data-v-65faface]{-webkit-transition:all .25s ease;transition:all .25s ease}.slide-fade-leave-active[data-v-65faface]{-webkit-transition:all .25s cubic-bezier(1,.5,.8,1);transition:all .25s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-65faface],.slide-fade-leave-to[data-v-65faface]{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:0}',""])},c3Ly:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".leaderboard[data-v-444302f2]{width:100%}.scrollable-leaderboard[data-v-444302f2]{overflow-y:auto;max-height:calc(100vh - 288px);padding:0 10px}.logo-programming-select-holder.hideLeaderboard .scrollable-leaderboard[data-v-444302f2]{overflow:hidden}.scrollable-leaderboard[data-v-444302f2]::-webkit-scrollbar{width:5px}.scrollable-leaderboard[data-v-444302f2]::-webkit-scrollbar-track{border-radius:10px}.scrollable-leaderboard[data-v-444302f2]::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(0,0,0,.15)}.leader .score-wrap[data-v-444302f2],.leader[data-v-444302f2]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.leader .score-wrap[data-v-444302f2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#717171;padding:8px 0}.leader .score-wrap h5[data-v-444302f2]{color:#1d1d1d}.leader img[data-v-444302f2]{height:35px;width:35px;display:inline-block;border-radius:100%;margin:0 8px}h2[data-v-444302f2]{margin:0 0 0 15px;padding:0;line-height:1.15}h3[data-v-444302f2]{margin:0 0 0 15px}.test[data-v-444302f2]{margin:0 0 5px 15px}.test h4[data-v-444302f2]{margin:0}.divider[data-v-444302f2]{background:#000;height:2px;width:75px;margin:5px 0 5px 15px}.lower-divider[data-v-444302f2]{margin-left:0;margin-top:8px}",""])},fVDv:function(t,e,a){"use strict";var i=a("zTd5"),o=a("R3Or"),s=!1;var n=function(t){s||a("A+DE")},r=a("VU/8")(i.a,o.a,!1,n,"data-v-444302f2",null);r.options.__file="components/Leaderboard.vue",e.a=r.exports},ioCb:function(t,e,a){"use strict";e.a={data:function(){return{navMenuOpen:!1}},methods:{updateScroll:function(){this.$store.commit("scrollStatus")},navMenu:function(){this.navMenuOpen=!this.navMenuOpen},navMenuClose:function(){this.navMenuOpen=!1}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},head:function(){return{meta:[{name:"google-site-verification",content:"U8s6_hyMSS_5u6wJRQjjEc0TOiht43u-VPbj4wD57jc"},{name:"robots",content:"noindex,nofollow"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}]}}}},"kh+z":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTQuMTkgMTAzLjQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2MDMxNDtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPktPREFDb21wTGlnaHRSZWRMb2dvPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iODEuODQgNTEuMDYgNjcuNDYgMzYuNjkgNjcuNDUgMzYuNyAzMS4xOCAwLjUgMS4yMSAwLjUgNTIuNDMgNTEuNzIgMS4yMSAxMDIuOTQgMzEuMTggMTAyLjk0IDY3LjQ1IDY2Ljc0IDY3LjQ2IDY2Ljc1IDgxLjg0IDUyLjM3IDgyLjQ5IDUxLjcyIDgyLjQ5IDUxLjcyIDgyLjQ5IDUxLjcyIDgxLjg0IDUxLjA2Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE0MS43OCA1MS43MiAxNDEuNzggNTEuNzIgMTQxLjc4IDUxLjcyIDE0MS43NyA1MS43MSAxOTIuOTggMC41IDE2MyAwLjUgMTI2Ljc1IDM2LjY5IDEyNi43NCAzNi42OSAxMjYuNzMgMzYuNjkgMTI2LjczIDM2LjY5IDEyNi43MiAzNi42OSA5MC40NyAwLjUgNjAuNDkgMC41IDExMS43IDUxLjcxIDExMS42OSA1MS43MiAxMTEuNjkgNTEuNzIgMTExLjY5IDUxLjcyIDExMS43IDUxLjczIDYwLjQ5IDEwMi45NCA5MC40NyAxMDIuOTQgMTI2LjcyIDY2Ljc1IDEyNi43MyA2Ni43NSAxMjYuNzMgNjYuNzUgMTI2Ljc0IDY2Ljc1IDEyNi43NSA2Ni43NSAxNjMgMTAyLjk0IDE5Mi45OCAxMDIuOTQgMTQxLjc3IDUxLjczIDE0MS43OCA1MS43MiIvPjwvc3ZnPg=="},pCvW:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"header"},[a("categories",{attrs:{categories:t.categories}})],1),a("section",{staticClass:"category-container"},[a("div",{staticClass:"category-content"},[t.posts?a("post-list",{attrs:{posts:t.category_posts,title:t.slug}}):t._e()],1),a("div",{staticClass:"sidebar"},[t.posts?a("recent-posts",{attrs:{posts:t.posts.data}}):t._e()],1)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},piG4:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h2[data-v-59b55716]{padding-top:50px}.category-container[data-v-59b55716]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;text-align:left;line-height:150%;padding:60px 30px 30px;max-width:1000px;margin:0 auto}.category-content[data-v-59b55716]{-webkit-box-flex:1;-ms-flex:1;flex:1}.content img[data-v-59b55716]{max-width:100%;height:auto;margin:10px 0}.sidebar[data-v-59b55716]{width:180px;padding:0 20px}.links[data-v-59b55716]{padding-top:15px}p[data-v-59b55716]{margin-bottom:10px}@media only screen and (min-device-width:320px) and (max-device-width:480px){.title[data-v-59b55716]{font-size:22px;line-height:44px}.sidebar[data-v-59b55716]{display:none}}",""])},"r/ji":function(t,e,a){var i=a("NRCy");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("32707438",i,!1,{sourceMap:!1})},rFtS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("vvYm"),o=a("pCvW"),s=!1;var n=function(t){s||a("GrKE")},r=a("VU/8")(i.a,o.a,!1,n,"data-v-59b55716",null);r.options.__file="pages/category/_slug/index.vue",e.default=r.exports},sZmE:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("\n    Recent Posts\n  ")]),a("ul",t._l(t.posts,function(e){return a("li",[a("nuxt-link",{attrs:{to:t.slugToUrl(e.slug)}},[t._v(t._s(e.title))])],1)}))])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},vvYm:function(t,e,a){"use strict";var i=a("Dd8w"),o=a.n(i),s=a("Xxa5"),n=a.n(s),r=a("exGp"),c=a.n(r),d=a("NYxO"),l=a("/C1n"),p=a("0n+Y"),f=a("w5zz"),b=a("Q7sv");e.a={components:{postList:p.a,categories:b.a,recentPosts:f.a},asyncData:function(){var t=c()(n.a.mark(function t(e){var a,i,o=e.params;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getCategory(o.slug);case 2:return a=t.sent,i=a.posts,t.abrupt("return",{category_posts:i,slug:o.slug});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:"Koda Competitor | "+this.slug,meta:[{name:"description",content:"This is the meta description of the content."}]}},data:function(){return{}},mounted:function(){console.log(this.categories),0===this.categories.length&&this.$store.dispatch("getCategories"),this.$store.dispatch("getPosts")},computed:o()({},Object(d.mapGetters)(["posts","category","categories"]))}},w5zz:function(t,e,a){"use strict";var i=a("7h4h"),o=a("sZmE"),s=!1;var n=function(t){s||a("G/rx")},r=a("VU/8")(i.a,o.a,!1,n,"data-v-1871d766",null);r.options.__file="components/recentPosts.vue",e.a=r.exports},zTd5:function(t,e,a){"use strict";var i=a("mtWM"),o=a.n(i);e.a={name:"Leaderboard",data:function(){return{leaderboard:[]}},computed:{leaderboardPostID:function(){return this.$store.state.leaderboardPost}},methods:{loadLeaderboard:function(t){var e=this;return o.a.get("https://apis.trainheroic.com/public/leaderboard/"+t).then(function(t){return e.leaderboard=t.data})}}}}});