webpackJsonp([0],{"4OdE":function(t,e){},"7zNb":function(t,e){},F7wQ:function(t,e,s){t.exports=s.p+"static/img/4.35c84bf.png"},L4kv:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("QvRK"),l=s.n(n),r=s("RcrF");l.a.forEach(t=>{t.url=r("./"+t.url)});var o={bannerImgData:()=>l.a},a={data:function(){return{logo:{url:"",text:"CLICILI"},visible:!1,imgs:[]}},computed:{height:function(){var t=window.localStorage.getItem("height");return t/2}},created:function(){var t=this;this.$nextTick(function(){t.imgs=o.bannerImgData()})},mounted:function(){var t=this;this.visible=!0,this.$nextTick(function(){var e=0;t.$refs.img.forEach(function(s){s.onload=function(){e++,t.$refs.progress.style.width=16+parseInt(t.$refs.progress.style.width)+"%",console.log(t.$refs.progress.style.width),e==t.imgs.length&&(t.$refs.progress.style.width="100%",t.$refs.box.classList.add("fin"))}})})}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.visible?s("div",{ref:"box",staticClass:"img_wrapper"},[s("div",{ref:"progress",staticClass:"progress",staticStyle:{width:"0%"}}),t._v(" "),s("div",{staticClass:"overlay"}),t._v(" "),s("div",{ref:"logo",staticClass:"logo"},[s("div",{staticClass:"text"},[t._v("CLICILI")])]),t._v(" "),s("div",{staticClass:"img_box"},t._l(t.imgs,function(e,i){return s("img",{ref:"img",refInFor:!0,class:{twoCols:0==Math.floor(i/2),threeCols:Math.floor(i/2)>0},attrs:{src:e.url,height:t.height,index:i,alt:"img.id"}})}))]):t._e()},staticRenderFns:[]};var u={name:"App",components:{Banner:s("VU/8")(a,c,!1,function(t){s("7zNb")},null,null).exports},created:function(){window.localStorage.setItem("height",document.documentElement.clientHeight),window.localStorage.setItem("width",document.documentElement.clientWidth)}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("banner",{staticClass:"view"}),t._v(" "),s("div",{staticClass:"container"},[s("ul",{staticClass:"nav"},[s("router-link",{attrs:{tag:"li",to:{name:"Main"}}},[t._v("首页")]),t._v(" "),s("router-link",{attrs:{tag:"li",to:{name:"Patitons"}}},[t._v("分区")]),t._v(" "),s("router-link",{attrs:{tag:"li",to:{name:"SpColums"}}},[t._v("专栏")]),t._v(" "),s("router-link",{attrs:{tag:"li",to:{name:"LiveRooms"}}},[t._v("直播")])],1),t._v(" "),s("router-view")],1)],1)},staticRenderFns:[]};var f=s("VU/8")(u,p,!1,function(t){s("L4kv")},null,null).exports,d=s("/ocq"),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("default"),t._v(" "),s("div",{staticClass:"menu clearFix"},t._l(t.menuList,function(e){return s("div",{staticClass:"list"},[s("a",{attrs:{href:"list.link"}},[s("img",{attrs:{src:e.img_url,alt:""}})]),t._v(" "),s("div",{staticClass:"text"},[s("a",{attrs:{href:"list.link"}},[t._v("\n          "+t._s(e.title)+"\n        ")])])])}))],2)},staticRenderFns:[]};var h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("default"),t._v(" "),t._l(t.lists,function(e){return s("div",{staticClass:"list clearFix"},[s("div",{staticClass:"l-date"},[s("p",[t._v(t._s(t._f("formatDay")(e.date)))]),t._v(" "),s("p",[t._v(t._s(t._f("formatMonth")(e.date)))])]),t._v(" "),s("div",{staticClass:"r-text"},[t._v("\n      "+t._s(e.title)+"\n    ")])])})],2)},staticRenderFns:[]};var m={data:function(){return{lastPos:0,inBar:!1,lists:[{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"},{id:"",title:"关注团团，带你走近华服世界！"}]}},methods:{press:function(t){this.lastPos=t.clientY,this.inBar=!0,document.body.classList.add("unselectable")},move:function(t){if(this.inBar){var e=t.clientY-this.lastPos,s=689*e/378;this.lastPos=t.clientY,this.$refs.scroll.style.top=e+this.$refs.scroll.offsetTop+"px",this.$refs.list.style.top=-s+this.$refs.list.offsetTop+"px",this.$refs.scroll.offsetTop<0?(this.$refs.scroll.style.top="0px",this.$refs.list.style.top="0px"):this.$refs.scroll.offsetTop>378&&(this.$refs.scroll.style.top="378px",this.$refs.list.style.top="-689px")}},scrollNext:function(t){if(!(t.clientX<this.$refs.box.getBoundingClientRect().left||t.clientX>this.$refs.box.getBoundingClientRect().righ||t.clientY<this.$refs.box.getBoundingClientRect().top||t.clientY>this.$refs.box.getBoundingClientRect().bottom)){console.log(t.wheelDelta),t.wheelDelta>=0?(this.$refs.scroll.style.top=this.$refs.scroll.offsetTop-10+"px",this.$refs.list.style.top=this.$refs.list.offsetTop+20+"px"):(this.$refs.scroll.style.top=this.$refs.scroll.offsetTop+10+"px",this.$refs.list.style.top=this.$refs.list.offsetTop-20+"px"),this.$refs.scroll.offsetTop<0?(this.$refs.scroll.style.top="0px",this.$refs.list.style.top="0px"):this.$refs.scroll.offsetTop>378&&(this.$refs.scroll.style.top="378px",this.$refs.list.style.top="-689px"),t.preventDefault()}},relase:function(t){this.inBar&&(this.inBar=!1,document.body.classList.remove("unselectable"))}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("default"),t._v(" "),s("div",{ref:"box",staticClass:"box clearFix",on:{mousewheel:t.scrollNext}},[s("div",{staticClass:"scroll-bar"},[s("div",{ref:"scroll",staticClass:"scroll",on:{mousemove:t.move,mousedown:t.press,mouseup:t.relase}})]),t._v(" "),s("div",{ref:"list",staticClass:"list"},t._l(t.lists,function(e,i){return s("a",{staticClass:"item"},[s("span",[t._v("top"+t._s(i+1))]),t._v(" "),s("span",[t._v(t._s(e.title))])])}))])],2)},staticRenderFns:[]};var _={components:{Patition:s("VU/8")({data:function(){return{menuList:[{link:"",title:"动画",img_url:"../../static/pic/patition/animate.png"},{link:"",title:"电影",img_url:"../../static/pic/patition/movie.png"},{link:"",title:"生活",img_url:"../../static/pic/patition/life.png"},{link:"",title:"游戏",img_url:"../../static/pic/patition/game.png"},{link:"",title:"科技",img_url:"../../static/pic/patition/science.png"},{link:"",title:"电视剧",img_url:"../../static/pic/patition/series.png"}]}}},v,!1,function(t){s("RYTq")},null,null).exports,SpColum:s("VU/8")({data:function(){return{lists:[{date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"},{date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"},{date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"},{date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"}]}},filters:{formatDay:function(t){var e=t.split("/");return e[e.length-1]},formatMonth:function(t){var e=t.split("/");switch(e[e.length-2]){case"1":return"Jan";case"2":return"Feb";case"3":return"Mar";case"4":return"Apr";case"5":return"May";case"6":return"Jun";case"7":return"Jul";case"8":return"Aug";case"9":return"Sep";case"10":return"Oct";case"11":return"Nov";case"12":return"Dec"}}}},h,!1,function(t){s("oWjX")},"data-v-319a2e83",null).exports,Live:s("VU/8")(m,g,!1,function(t){s("qeFv")},null,null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("patition",[e("h2",[this._v("分区")])]),this._v(" "),e("div",{staticClass:"clearFix"},[e("sp-colum",{staticClass:"col-5 spcol"},[e("h2",[this._v("专栏")])]),this._v(" "),e("live",{staticClass:"col-5 live"},[e("h2",[this._v("直播")])])],1)],1)},staticRenderFns:[]};var $=s("VU/8")(_,x,!1,function(t){s("4OdE")},"data-v-6b64a2f0",null).exports,C=s("VU/8")(null,null,!1,null,null,null).exports,y=s("VU/8")(null,null,!1,null,null,null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},w=s("VU/8")(null,b,!1,null,null,null).exports,R=s("VU/8")(null,null,!1,null,null,null).exports;i.a.use(d.a);var F=new d.a({routes:[{path:"/",name:"Main",component:$},{path:"video/:id",name:"Videos",component:R},{path:"/patitons",name:"Patitons",component:y},{path:"/SpColums",name:"SpColums",component:C},{path:"/LiveRooms",name:"LiveRooms",component:w}]});s("uMhA");i.a.config.productionTip=!1,new i.a({el:"#app",router:F,components:{App:f},template:"<App/>"})},NRPN:function(t,e,s){t.exports=s.p+"static/img/5.917860f.png"},QvRK:function(t,e){t.exports=[{url:"1.png",id:""},{url:"2.png",id:""},{url:"3.png",id:""},{url:"4.png",id:""},{url:"5.png",id:""}]},RYTq:function(t,e){},RcrF:function(t,e,s){var i={"./1.png":"rmVO","./2.png":"ymCW","./3.png":"yFIA","./4.png":"F7wQ","./5.png":"NRPN"};function n(t){return s(l(t))}function l(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(i)},n.resolve=l,t.exports=n,n.id="RcrF"},oWjX:function(t,e){},qeFv:function(t,e){},rmVO:function(t,e,s){t.exports=s.p+"static/img/1.00fc795.png"},uMhA:function(t,e){},yFIA:function(t,e,s){t.exports=s.p+"static/img/3.197ecd5.png"},ymCW:function(t,e,s){t.exports=s.p+"static/img/2.b14a1ba.png"}},["NHnr"]);
//# sourceMappingURL=app.9d4161628c8a6e558e39.js.map