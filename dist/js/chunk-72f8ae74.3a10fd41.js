(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72f8ae74"],{"22ca":function(t,s,a){},"5e01":function(t,s,a){"use strict";var i=a("22ca"),l=a.n(i);l.a},"819b":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header",[a("img",{staticClass:"h-200",attrs:{src:t.film.poster}}),a("router-link",{staticClass:"fixed flex fcc",attrs:{to:"/"}},[a("span",{staticClass:"icon iconfont"},[t._v("")])])],1),a("main",[a("div",{staticClass:"detail bg-fff "},[a("div",{staticClass:"flex jc-sb lh15"},[a("p",[a("span",{staticClass:"f18 name"},[t._v(t._s(t.film.name))]),a("span",{staticClass:"type"},[t._v(t._s(t.film.filmType))])]),a("p",{staticClass:"yellow"},[a("i",{staticClass:"f16"},[t._v(t._s(Number(t.film.grade).toFixed(1)))]),a("span",{staticClass:"f12"},[t._v("分")])])]),a("p",{staticClass:"mt-10 f14 gray"},[t._v(t._s(t.film.category))]),a("p",{staticClass:"f14 gray mt-10"},[t._v(t._s(t._f("time")(t.film.premiereAt))+"上映")]),a("p",{staticClass:"f14 gray mt-5"},[t._v(t._s(t.film.nation)+" | "+t._s(t.film.runtime)+"分钟")]),a("p",{staticClass:"f14 gray mt-15 lh"},[t._v("\n           "+t._s(t.film.synopsis)+"\n        ")])]),a("div",{staticClass:"performer bg-fff mt-10"},[a("p",{staticClass:"font"},[t._v("演职人员")]),a("ul",{staticClass:"flex ever"},t._l(t.film.actors,function(s,i){return a("li",{key:i,staticClass:"flex2 aic ml-10"},[a("img",{staticClass:"image",attrs:{src:s.avatarAddress}}),a("p",{staticClass:"f12 lh15"},[t._v(t._s(s.name)+" ")]),a("p",{staticClass:"f12 lh15 gray"},[t._v(t._s(s.role))])])}),0)]),t._m(0)]),a("p",{staticClass:"buttom"},[t._v("选座购票")])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"performer bg-fff mt-10 pb-30"},[a("p",{staticClass:"font"},[t._v("剧照")]),a("ul",{staticClass:"flex ever"},[a("li",{staticClass:"flex2 aic ml-10"},[a("img",{staticClass:"image",attrs:{src:""}})])])])}],e={data:function(){return{filmId:"",film:[]}},methods:{getdata:function(){var t=this,s="http://132.232.94.151:3000/api/film/getDetail?filmId=".concat(this.filmId);this.axios(s).then(function(s){t.film=s.data.film})}},created:function(){this.filmId=this.$route.params.filmId,this.getdata()}},c=e,f=(a("5e01"),a("2877")),n=Object(f["a"])(c,i,l,!1,null,"d1d7c9ec",null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-72f8ae74.3a10fd41.js.map