(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d21b3ede"],{"0739":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("router-link",{staticClass:"ml-10",staticStyle:{width:"30px",position:"relative",top:"14px","z-index":"1000",background:"rgb(255, 255, 255,0.7)","border-radius":"9px"},attrs:{to:"/cityList"}},[a("span",{staticClass:"f14"},[t._v(t._s(this.$store.state.cityname.name))]),a("span",{staticClass:"icon iconfont f12"},[t._v("")])]),a("van-swipe",{attrs:{autoplay:3e3}},t._l(t.images,function(t,s){return a("van-swipe-item",{key:s},[a("img",{staticClass:"h-200",attrs:{src:t.imgUrl}})])}),1)],1)},e=[],n={props:["images"]},l=n,c=(a("b6bd"),a("2877")),r=Object(c["a"])(l,i,e,!1,null,null,null);s["a"]=r.exports},"348e":function(t,s,a){"use strict";var i=a("a467"),e=a.n(i);e.a},"38e0":function(t,s,a){},3990:function(t,s,a){"use strict";var i=a("4747"),e=a.n(i);e.a},"3ee5":function(t,s,a){"use strict";var i=a("38e0"),e=a.n(i);e.a},4747:function(t,s,a){},"5b1a":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"pt-60 z-index"},[a("div",{staticClass:"flex jc-sa w100pc fixed bott0 bg-fff aic footer"},[a("div",[a("router-link",{staticClass:"flex2 aic f14 gray",class:{yellow:"film"===t.page},attrs:{to:"/film"}},[a("span",{staticClass:"icon iconfont"},[t._v("")]),a("p",{staticClass:"mt-3"},[t._v("电影")])])],1),a("div",[a("router-link",{staticClass:"flex2 aic f14  gray",class:{yellow:"ciname"===t.page},attrs:{to:"/ciname"}},[a("span",{staticClass:"icon iconfont"},[t._v("")]),a("p",{staticClass:"mt-3"},[t._v("影院")])])],1),a("div",[a("router-link",{staticClass:"flex2 aic f14 gray",class:{yellow:"pintuan"===t.page},attrs:{to:"/pintuan"}},[a("span",{staticClass:"icon iconfont"},[t._v("")]),a("p",{staticClass:"mt-3"},[t._v("特惠")])])],1),a("div",[a("router-link",{staticClass:"flex2 aic f14 gray",class:{yellow:"my"===t.page},attrs:{to:"/my"}},[a("span",{staticClass:"icon iconfont"},[t._v("")]),a("p",{staticClass:"mt-3"},[t._v("我的")])])],1)])])},e=[],n={props:["page"]},l=n,c=(a("3990"),a("2877")),r=Object(c["a"])(l,i,e,!1,null,"be5e8846",null);s["a"]=r.exports},"7af2":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"nav flex jc-sa"},[a("router-link",{class:{left:"hot"===t.who},attrs:{to:"/film/hotlist"}},[t._v("正在热播")]),a("router-link",{class:{left:"coming"===t.who},attrs:{to:"/film/cominglist"}},[t._v("即将上映")])],1)])},e=[],n={props:["who"]},l=n,c=(a("348e"),a("2877")),r=Object(c["a"])(l,i,e,!1,null,"8eb3e6a4",null);s["a"]=r.exports},a467:function(t,s,a){},b019:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("swiper",{attrs:{images:t.images}}),a("tap",{attrs:{who:"coming"}}),a("List",{attrs:{filmlist:t.filmlist,who:"coming"}}),a("boot")],1)},e=[],n=a("0739"),l=a("7af2"),c=a("eba3"),r=a("5b1a"),o={data:function(){return{filmlist:[],images:[]}},methods:{getdata:function(){var t=this,s="http://132.232.94.151:3000/api/film/getList?type=2";this.axios.get(s).then(function(s){t.filmlist=s.data.films,t.images=s.data.banners})}},created:function(){this.getdata()},components:{swiper:n["a"],tap:l["a"],List:c["a"],boot:r["a"]}},f=o,u=a("2877"),p=Object(u["a"])(f,i,e,!1,null,"25fb6782",null);s["default"]=p.exports},b6bd:function(t,s,a){"use strict";var i=a("f37c"),e=a.n(i);e.a},eba3:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("ul",{staticClass:"list"},t._l(t.filmlist,function(s){return a("router-link",{key:s.filmId,staticClass:"item flex jc-sb pt-15",attrs:{to:"../moviedetails/"+s.filmId}},[a("div",{staticClass:"film flex jc-sa ml-10"},[a("img",{staticClass:"image ",attrs:{src:s.poster}}),a("div",{staticClass:"ml-10  lh15"},[a("p",{staticClass:"f16"},[t._v(t._s(s.name)+" "),a("span",{staticClass:"type"},[t._v(t._s(s.filmType))])]),a("p",{staticClass:"f14 gray"},[t._v("观众评分 "),a("span",{staticClass:"yellow"},[t._v(t._s(s.grade))])]),a("p",{staticClass:"f14 gray actor"},[t._v("主演："+t._s(s.actorStr))]),a("p",{staticClass:"f14 gray"},[t._v(t._s(s.nation)+" | "+t._s(s.runtime)+"分钟")])])]),a("div",{staticClass:"fcc"},["hot"===t.who?a("button",{staticClass:"butt mr-10"},[t._v("购票")]):t._e(),"coming"===t.who&&s.isPresale?a("button",{staticClass:"butt mr-10"},[t._v("预售")]):t._e()])])}),1)])},e=[],n={props:["filmlist","who"]},l=n,c=(a("3ee5"),a("2877")),r=Object(c["a"])(l,i,e,!1,null,"d1d62d20",null);s["a"]=r.exports},f37c:function(t,s,a){}}]);
//# sourceMappingURL=chunk-d21b3ede.2ff48852.js.map