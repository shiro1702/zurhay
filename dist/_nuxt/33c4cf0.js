(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{424:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("3fdd0566",content,!0,{sourceMap:!1})},434:function(t,e,n){"use strict";n(424)},435:function(t,e,n){var r=n(17)(!1);r.push([t.i,"",""]),t.exports=r},467:function(t,e,n){"use strict";n.r(e);n(26);var r=n(197),o={head:function(){return{title:"Зурхай ".concat(this.pageTitle),meta:[{hid:"description",name:"description",content:"".concat(this.pageDesc)}]}},middleware:function(t){var e=t.params,n=t.redirect;if(!e.yyyymm)return n("/"+Object(r.a)())},data:function(){return{focus:"",todayLink:"/"+Object(r.a)()}},computed:{pageTitle:function(){if("index-yyyymm"===this.$route.name){return"на месяц "+new Date("".concat(this.$route.params.yyyymm,"-1")).toLocaleString("ru",{year:"numeric",month:"long"})}if("index-yyyymm-dd"===this.$route.name||"index-yyyymm-dd-edit"===this.$route.name){return"на "+new Date("".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd)).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})}return""},pageDesc:function(){if("index-yyyymm"===this.$route.name){return"Зурхай на месяц "+new Date("".concat(this.$route.params.yyyymm,"-1")).toLocaleString("ru",{year:"numeric",month:"long"})+"лунный календарь благоприятных дней для стрижки и путешествий"}if("index-yyyymm-dd"===this.$route.name||"index-yyyymm-dd-edit"===this.$route.name){var t="";if("".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd)===Object(r.b)())t="сегодня";else{t=new Date("".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd)).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})}return"Зурхай на "+t+" - лунный календарь благоприятных дней для стрижки и путешествий"}return"Зурхай - лунный календарь благоприятных дней для стрижки и путешествий"},title:function(){if("index-yyyymm"===this.$route.name){return"на "+new Date("".concat(this.$route.params.yyyymm,"-1")).toLocaleString("ru",{year:"numeric",month:"long"})}if("index-yyyymm-dd"===this.$route.name||"index-yyyymm-dd-edit"===this.$route.name){return"на "+new Date("".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd)).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})}return""}}},m=(n(434),n(68)),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title text-h5 text-sm-h4 text-md-h3 mb-4 mb-sm-8"},[t._v("Зурхай "+t._s(t.title))]),t._v(" "),n("NuxtChild")],1)}),[],!1,null,null,null);e.default=component.exports}}]);