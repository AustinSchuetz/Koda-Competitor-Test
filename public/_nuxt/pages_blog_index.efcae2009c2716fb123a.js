webpackJsonp([10],{"3TZK":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-holder"},[t._l(t.blogs,function(a,i){return t.blogs&&t.blogs.length>0&&i>=t.firstPost&&i<=t.lastPost?e("nuxt-link",{key:i,staticClass:"post",attrs:{to:a.slug+"/"}},[a.fi_medium?e("div",{staticClass:"post-featured-background fi_medium",style:{"background-image":"url("+a.fi_medium+")"}},[e("h1",{domProps:{innerHTML:t._s(a.title.rendered)}}),e("div",{staticClass:"divider"}),a.acf.author?e("div",{staticClass:"author"},[e("img",{staticClass:"author-pic",attrs:{src:a.acf.author[0].author_pic}}),e("div",[e("h3",{staticClass:"author-name"},[t._v("by "+t._s(a.acf.author[0].author_name))])])]):t._e()]):t._e(),e("div",{staticClass:"excerpt"},[e("div",{staticClass:"lower-divider"}),e("div",{domProps:{innerHTML:t._s(a.excerpt.rendered)}})])]):t._e()}),e("div",{staticClass:"pagination-holder",class:{flexStart:t.currentPage==t.totalPages,flexEnd:1===t.currentPage}},[t.currentPage>1?e("button",{staticClass:"pagination-btn",on:{click:t.pageDownClick}},[t._v("Previous Page")]):t._e(),t.currentPage<t.totalPages?e("button",{staticClass:"pagination-btn",on:{click:t.pageUpClick}},[t._v("Next Page")]):t._e()])],2)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},JFl0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("O4le"),o=e("3TZK"),r=!1;var n=function(t){r||e("W05J")},d=e("VU/8")(i.a,o.a,!1,n,"data-v-d75a0a44",null);d.options.__file="pages/blog/index.vue",a.default=d.exports},O4le:function(t,a,e){"use strict";var i=e("mtWM"),o=e.n(i);a.a={name:"index",data:function(){return{blogs:null,currentPage:1}},computed:{nextPage:function(){return this.nextPage=this.currentPage+1},previousPage:function(){return this.previousPage=this.currentPage-1},firstPost:function(){return this.firstPost=9*(this.currentPage-1)},lastPost:function(){return this.lastPost=9*this.currentPage-1}},methods:{pageUpClick:function(){return this.currentPage=this.currentPage+1},pageDownClick:function(){return this.currentPage=this.currentPage-1}},mounted:function(){var t=this;return o.a.get("https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=6").then(function(a){return t.blogs=a.data})}}},W05J:function(t,a,e){var i=e("aSqC");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("71fb9cdb",i,!1,{sourceMap:!1})},aSqC:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.pagination-holder[data-v-d75a0a44]{margin:50px auto 0;width:750px;max-width:90%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.pagination-holder .pagination-btn[data-v-d75a0a44]{background:#fff;outline:none;border:3px solid #c60314;padding:10px;border-radius:5px;cursor:pointer;color:#c60314;font-weight:700;width:135px;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-decoration:none;text-align:center}.pagination-holder .pagination-btn[data-v-d75a0a44]:hover{color:#fff;background:#c60314}.pagination-holder.flexStart[data-v-d75a0a44]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.pagination-holder.flexEnd[data-v-d75a0a44]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.post-holder[data-v-d75a0a44]{width:100%}.post-featured-background[data-v-d75a0a44]{padding:125px 0;width:100%;border-top-left-radius:5px;border-top-right-radius:5px;border-top:3px solid #c60314;position:relative;z-index:1;background-position:50% 20%;background-repeat:no-repeat;background-size:cover}.post-featured-background[data-v-d75a0a44]:after{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.35)}.post-featured-background h1[data-v-d75a0a44]{font-size:2em;font-weight:700;line-height:64px;color:#fff;text-align:center;width:550px;max-width:100%;margin:0 auto;position:relative;z-index:2}a[data-v-d75a0a44]{margin:0 auto 50px;color:#1d1d1d;width:750px;max-width:95%;border-radius:5px;-webkit-box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);background:#fff;text-decoration:none;display:block;border-bottom:3px solid transparent;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a[data-v-d75a0a44]:hover{text-decoration:none;background:#fff;border-bottom:3px solid #c60314}a:hover .post-featured-background[data-v-d75a0a44]:after{background:linear-gradient(45deg,rgba(198,3,20,.55) 55%,rgba(0,0,0,.55));background-blend-mode:multiply}.excerpt[data-v-d75a0a44]{padding:15px}.divider[data-v-d75a0a44]{margin:15px 0;background:#c60314}.author[data-v-d75a0a44]{display:block;text-align:center;position:relative;margin:0 auto;z-index:2}.author-pic[data-v-d75a0a44]{width:50px;height:50px;border-radius:100%;border:3px solid #c60314}.author-name[data-v-d75a0a44]{color:#f2f2f2}.divider[data-v-d75a0a44]{margin:0 auto 15px;height:3px;width:75px;background:#fff;position:relative;z-index:2}.lower-divider[data-v-d75a0a44]{margin:15px 0;height:3px;width:75px;background:#c60314}',""])}});