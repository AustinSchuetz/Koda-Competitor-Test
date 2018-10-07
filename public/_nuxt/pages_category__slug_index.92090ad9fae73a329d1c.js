webpackJsonp([3],{"/E9+":function(t,e,a){"use strict";e.a={props:["posts","title","content"],data:function(){return{activeItem:null}},methods:{slugToUrl:function(t){return"/"+t},isActive:function(t){return this.activeItem===t},setActive:function(t){this.activeItem=t}}}},"0n+Y":function(t,e,a){"use strict";var i=a("/E9+"),o=a("K5P8"),s=!1;var r=function(t){s||a("D4Ov")},n=a("VU/8")(i.a,o.a,!1,r,"data-v-65faface",null);n.options.__file="components/postList.vue",e.a=n.exports},"1qH/":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories-menu",class:{scrolled:t.scrollPosition>0}},[t._m(0),a("div",{staticClass:"main-menu"},[a("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),a("nuxt-link",{staticClass:"sign-up",attrs:{to:"/workout-of-the-day/"}},[t._v("WOD")]),a("nuxt-link",{attrs:{to:"/athlete-type/"}},[t._v("Pick a Track")]),a("nuxt-link",{attrs:{to:"/blog/"}},[t._v("Blog")]),a("nuxt-link",{attrs:{to:"/coaches/"}},[t._v("Coaches")]),a("nuxt-link",{attrs:{to:"/community/"}},[t._v("Community")])],1)])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"logo",attrs:{href:"../../../"}},[e("img",{attrs:{src:a("kh+z")}}),e("h2",[this._v("Koda"),e("span",[this._v("Competitor")])])])}];i._withStripped=!0;var s={render:i,staticRenderFns:o};e.a=s},"7h4h":function(t,e,a){"use strict";e.a={props:["posts"],methods:{slugToUrl:function(t){return"/"+t}}}},D4Ov:function(t,e,a){var i=a("ZFXi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("472fc526",i,!1,{sourceMap:!1})},EBIG:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h3[data-v-1871d766]{font-size:22px}a[data-v-1871d766]{color:#444}a.nuxt-link-active[data-v-1871d766]{color:#ccc}",""])},"G/rx":function(t,e,a){var i=a("EBIG");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("30ab7bb6",i,!1,{sourceMap:!1})},GrKE:function(t,e,a){var i=a("piG4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("f0e297a4",i,!1,{sourceMap:!1})},K5P8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-holder"},t._l(t.posts,function(e,i){return t.posts&&t.posts.length>0&&i<=10?a("div",{key:i,staticClass:"post"},[e.fi_medium?a("div",{staticClass:"post-featured-background fi_medium",style:{"background-image":"url("+e.fi_medium+")"}}):t._e(),a("div",{staticClass:"bias-wrap"},[t._v("\n          "+t._s(i)+"\n          "),e.aerobic_bias?a("a",{staticClass:"bias activebias",attrs:{href:"javascript:void(0)"}},[t._v("Aerobic Bias")]):t._e(),e.gymnastics_bias?a("a",{staticClass:"bias",attrs:{href:"javascript:void(0)"}},[t._v("Gymnastics Bias")]):t._e(),e.strength_bias?a("a",{staticClass:"bias",attrs:{href:"javascript:void(0)"}},[t._v("Strength Bias")]):t._e(),e.balanced_athlete?a("a",{staticClass:"bias",attrs:{href:"javascript:void(0)"}},[t._v("Balanced Athlete")]):t._e()]),a("nuxt-link",{staticClass:"post-content",attrs:{to:"workout-of-the-day"+t.slugToUrl(e.slug)}},[a("div",{staticClass:"post-content-date"},[a("h2",[t._v(t._s(e.title))])]),a("div",{staticClass:"post-text-content"},["aerobic"===t.activeItem?a("div",{attrs:{id:"aerobic-bias-content"},domProps:{innerHTML:t._s(e.aerobic_bias)}}):t._e(),"gymnastics"===t.activeItem?a("div",{attrs:{id:"gymnastics-bias-content"},domProps:{innerHTML:t._s(e.gymnastics_bias)}}):t._e(),"strength"===t.activeItem?a("div",{attrs:{id:"strength-bias-content"},domProps:{innerHTML:t._s(e.strength_bias)}}):t._e(),"balanced"===t.activeItem?a("div",{attrs:{id:"balanced-athlete-content"},domProps:{innerHTML:t._s(e.balanced_athlete)}}):t._e(),a("strong",{staticClass:"more"},[t._v("View WOD")])])])],1):t._e()}))};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},NRCy:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.categories-menu[data-v-4e6def97]{border-top:3px solid #c60314;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background:transparent;position:fixed;z-index:10;padding:0 20px 0 0;height:70px;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.categories-menu .category-item[data-v-4e6def97]{width:inherit}.categories-menu a[data-v-4e6def97]{color:#c60314;font-weight:700;text-decoration:none;padding:20px;border-bottom:3px solid transparent;display:inline-block;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.categories-menu a[data-v-4e6def97]:hover{border-bottom:3px solid #c60314}.categories-menu .sign-up[data-v-4e6def97]{padding:10px;margin:15px 10px;border:1px solid;border-radius:5px;height:inherit}.categories-menu .sign-up[data-v-4e6def97]:hover{background:#c60314;color:#fff;border:1px solid #c60314}.categories-menu .logo img[data-v-4e6def97]{height:55px;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur in="SourceAlpha" stdDeviation="2" /><feOffset dx="1" dy="1" result="offsetblur" /><feFlood flood-color="rgba(0,0,0,0.15)" /><feComposite in2="offsetblur" operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter></svg>#filter\');-webkit-filter:drop-shadow(0 0 2px rgba(0,0,0,.15));filter:drop-shadow(0 0 2px rgba(0,0,0,.15));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:7px auto}.categories-menu .logo:hover img[data-v-4e6def97]{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur in="SourceAlpha" stdDeviation="4" /><feOffset dx="1" dy="1" result="offsetblur" /><feFlood flood-color="rgba(0,0,0,0.3)" /><feComposite in2="offsetblur" operator="in" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter></svg>#filter\');-webkit-filter:drop-shadow(0 0 4px rgba(0,0,0,.3));filter:drop-shadow(0 0 4px rgba(0,0,0,.3))}.categories-menu .logo[data-v-4e6def97]{border-bottom:0;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;opacity:1!important;padding:0;margin:0;width:260px}.categories-menu .logo[data-v-4e6def97],.categories-menu .logo h2[data-v-4e6def97]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;text-decoration:none!important}.categories-menu .logo h2[data-v-4e6def97]{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;text-transform:uppercase;letter-spacing:.5px;font-weight:800;font-size:2em;line-height:1.1;width:120px}.categories-menu .logo h2 span[data-v-4e6def97]{display:block;font-size:.5em;letter-spacing:.1px;margin-top:0}.categories-menu .logo[data-v-4e6def97]:hover{border-bottom:0}.categories-menu.scrolled[data-v-4e6def97]{background:#fff;-webkit-box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}',""])},Q7sv:function(t,e,a){"use strict";var i=a("ioCb"),o=a("1qH/"),s=!1;var r=function(t){s||a("r/ji")},n=a("VU/8")(i.a,o.a,!1,r,"data-v-4e6def97",null);n.options.__file="components/categories.vue",e.a=n.exports},ZFXi:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'a[data-v-65faface]{text-decoration:none;color:#1d1d1d;opacity:1;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;position:relative;z-index:1}.post-content[data-v-65faface]:hover{background:rgba(198,3,20,.05)}.post-container .post-content[data-v-65faface]:hover{background:none}.fi_medium[data-v-65faface]{position:relative;z-index:1}a:hover .fi_medium[data-v-65faface]:after{content:"";height:100%;width:100%;position:absolute;z-index:2;background:rgba(198,3,20,.35)}.post-holder[data-v-65faface]{width:100%;margin:0}.post[data-v-65faface]{margin:30px auto;padding:0;border-radius:5px;background:hsla(0,0%,100%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:300px;width:1000px;max-width:95%;border-left:3px solid #c60314;background:#fff;-webkit-box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.post[data-v-65faface]:first-child{border-left:5px solid #c60314;width:100%;height:350px;margin:0}.bias-wrap[data-v-65faface]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.bias-wrap .bias[data-v-65faface]{padding:10px;background:rgba(0,0,0,.03);border-left:3px solid transparent;font-weight:700;color:#646464;border-bottom:1px solid rgba(0,0,0,.1);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.bias-wrap .bias[data-v-65faface]:hover{border-left-color:#c60314;color:#1d1d1d;background:rgba(0,0,0,.02)}.bias-wrap .activebias[data-v-65faface]{border-left-color:#c60314;color:#1d1d1d!important;background:#fff!important}.post-content-date[data-v-65faface]{padding:0 10px 0 15px;border-bottom:1px solid rgba(0,0,0,.1)}.post-text-content[data-v-65faface]{padding:0 15px 15px}.post .post-content[data-v-65faface]{padding:0;-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2}.post .post-featured-background[data-v-65faface]{width:350px;max-width:35%;height:100%;display:inline-block;vertical-align:top;background-size:cover;background-position:50% 50%;background-repeat:no-repeat;-webkit-box-shadow:15px 0 30px -20px rgba(0,0,0,.45);box-shadow:15px 0 30px -20px rgba(0,0,0,.45)}.post:first-child .post-featured-background[data-v-65faface]{width:400px}h2[data-v-65faface]{font-size:1.75em;font-weight:bolder;line-height:41px;width:100%;text-align:left}p[data-v-65faface]{font-size:16px;line-height:140%}.more[data-v-65faface]{color:#1d1d1d;line-height:1.5;border:1px solid;border-radius:5px;margin:15px 0;padding:5px 10px 7px;display:inline-block}.more[data-v-65faface]:hover{color:#c60314}',""])},ioCb:function(t,e,a){"use strict";e.a={data:function(){return{scrollPosition:null}},methods:{updateScroll:function(){this.scrollPosition=window.scrollY}},mounted:function(){window.addEventListener("scroll",this.updateScroll),this.scrollPosition=window.scrollY},head:function(){return{meta:[{name:"google-site-verification",content:"U8s6_hyMSS_5u6wJRQjjEc0TOiht43u-VPbj4wD57jc"},{name:"robots",content:"noindex,nofollow"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}]}}}},"kh+z":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTQuMTkgMTAzLjQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2MDMxNDtzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPktPREFDb21wTGlnaHRSZWRMb2dvPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iODEuODQgNTEuMDYgNjcuNDYgMzYuNjkgNjcuNDUgMzYuNyAzMS4xOCAwLjUgMS4yMSAwLjUgNTIuNDMgNTEuNzIgMS4yMSAxMDIuOTQgMzEuMTggMTAyLjk0IDY3LjQ1IDY2Ljc0IDY3LjQ2IDY2Ljc1IDgxLjg0IDUyLjM3IDgyLjQ5IDUxLjcyIDgyLjQ5IDUxLjcyIDgyLjQ5IDUxLjcyIDgxLjg0IDUxLjA2Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE0MS43OCA1MS43MiAxNDEuNzggNTEuNzIgMTQxLjc4IDUxLjcyIDE0MS43NyA1MS43MSAxOTIuOTggMC41IDE2MyAwLjUgMTI2Ljc1IDM2LjY5IDEyNi43NCAzNi42OSAxMjYuNzMgMzYuNjkgMTI2LjczIDM2LjY5IDEyNi43MiAzNi42OSA5MC40NyAwLjUgNjAuNDkgMC41IDExMS43IDUxLjcxIDExMS42OSA1MS43MiAxMTEuNjkgNTEuNzIgMTExLjY5IDUxLjcyIDExMS43IDUxLjczIDYwLjQ5IDEwMi45NCA5MC40NyAxMDIuOTQgMTI2LjcyIDY2Ljc1IDEyNi43MyA2Ni43NSAxMjYuNzMgNjYuNzUgMTI2Ljc0IDY2Ljc1IDEyNi43NSA2Ni43NSAxNjMgMTAyLjk0IDE5Mi45OCAxMDIuOTQgMTQxLjc3IDUxLjczIDE0MS43OCA1MS43MiIvPjwvc3ZnPg=="},pCvW:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"header"},[a("categories",{attrs:{categories:t.categories}})],1),a("section",{staticClass:"category-container"},[a("div",{staticClass:"category-content"},[t.posts?a("post-list",{attrs:{posts:t.category_posts,title:t.slug}}):t._e()],1),a("div",{staticClass:"sidebar"},[t.posts?a("recent-posts",{attrs:{posts:t.posts.data}}):t._e()],1)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},piG4:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h2[data-v-59b55716]{padding-top:50px}.category-container[data-v-59b55716]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;text-align:left;line-height:150%;padding:60px 30px 30px;max-width:1000px;margin:0 auto}.category-content[data-v-59b55716]{-webkit-box-flex:1;-ms-flex:1;flex:1}.content img[data-v-59b55716]{max-width:100%;height:auto;margin:10px 0}.sidebar[data-v-59b55716]{width:180px;padding:0 20px}.links[data-v-59b55716]{padding-top:15px}p[data-v-59b55716]{margin-bottom:10px}@media only screen and (min-device-width:320px) and (max-device-width:480px){.title[data-v-59b55716]{font-size:22px;line-height:44px}.sidebar[data-v-59b55716]{display:none}}",""])},"r/ji":function(t,e,a){var i=a("NRCy");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("32707438",i,!1,{sourceMap:!1})},rFtS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("vvYm"),o=a("pCvW"),s=!1;var r=function(t){s||a("GrKE")},n=a("VU/8")(i.a,o.a,!1,r,"data-v-59b55716",null);n.options.__file="pages/category/_slug/index.vue",e.default=n.exports},sZmE:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("\n    Recent Posts\n  ")]),a("ul",t._l(t.posts,function(e){return a("li",[a("nuxt-link",{attrs:{to:t.slugToUrl(e.slug)}},[t._v(t._s(e.title))])],1)}))])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},vvYm:function(t,e,a){"use strict";var i=a("Dd8w"),o=a.n(i),s=a("Xxa5"),r=a.n(s),n=a("exGp"),c=a.n(n),d=a("NYxO"),l=a("/C1n"),p=a("0n+Y"),f=a("w5zz"),u=a("Q7sv");e.a={components:{postList:p.a,categories:u.a,recentPosts:f.a},asyncData:function(){var t=c()(r.a.mark(function t(e){var a,i,o=e.params;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getCategory(o.slug);case 2:return a=t.sent,i=a.posts,t.abrupt("return",{category_posts:i,slug:o.slug});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:"Koda Competitor | "+this.slug,meta:[{name:"description",content:"This is the meta description of the content."}]}},data:function(){return{}},mounted:function(){console.log(this.categories),0===this.categories.length&&this.$store.dispatch("getCategories"),this.$store.dispatch("getPosts")},computed:o()({},Object(d.mapGetters)(["posts","category","categories"]))}},w5zz:function(t,e,a){"use strict";var i=a("7h4h"),o=a("sZmE"),s=!1;var r=function(t){s||a("G/rx")},n=a("VU/8")(i.a,o.a,!1,r,"data-v-1871d766",null);n.options.__file="components/recentPosts.vue",e.a=n.exports}});