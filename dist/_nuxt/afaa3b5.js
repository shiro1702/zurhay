(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{422:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("3fdd0566",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n(422)},436:function(t,e,n){var r=n(17)(!1);r.push([t.i,"",""]),t.exports=r},469:function(t,e,n){"use strict";n.r(e);n(26);var r=n(195),o={head:function(){return{title:"Зурхай ".concat(this.pageTitle),meta:[{hid:"description",name:"description",content:"".concat(this.pageDesc)}]}},data:function(){return{}},computed:{pageTitle:function(){if("index"===this.$route.name){return"на месяц "+new Date("".concat(Object(r.b)())).toLocaleString("ru",{year:"numeric",month:"long"})}if("index-yyyymm"===this.$route.name){return"на месяц "+new Date("".concat(Object(r.b)(0,"".concat(this.$route.params.yyyymm,"-1")))).toLocaleString("ru",{year:"numeric",month:"long"})}if("index-today"===this.$route.name)return"на сегодня";if("index-yyyymm-dd"===this.$route.name||"index-yyyymm-dd-edit"===this.$route.name){return"на "+new Date("".concat(Object(r.b)(0,"".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd)))).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})}return""},pageDesc:function(){if("index"===this.$route.name){return"Зурхай на месяц "+new Date("".concat(Object(r.b)())).toLocaleString("ru",{year:"numeric",month:"long"})+" лунный календарь благоприятных дней для стрижки и путешествий"}if("index-yyyymm"===this.$route.name){return"Зурхай на месяц "+new Date("".concat(Object(r.b)(0,"".concat(this.$route.params.yyyymm-1)))).toLocaleString("ru",{year:"numeric",month:"long"})+" лунный календарь благоприятных дней для стрижки и путешествий"}if("index-today"===this.$route.name)return"Зурхай на сегодня - можно ли стичься";if("index-yyyymm-dd"===this.$route.name||"index-yyyymm-dd-edit"===this.$route.name){var t="";if(Object(r.b)(0,"".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd))===Object(r.b)())t="сегодня";else{t=new Date("".concat(Object(r.b)(0,"".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd)))).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})}return"Зурхай на "+t+" - лунный календарь благоприятных дней для стрижки и путешествий"}return"Зурхай - лунный календарь благоприятных дней для стрижки и путешествий"},title:function(){if("index"===this.$route.name){return"на "+new Date("".concat(Object(r.b)())).toLocaleString("ru",{year:"numeric",month:"long"})}if("index-yyyymm"===this.$route.name){return"на "+new Date("".concat(Object(r.b)(0,"".concat(this.$route.params.yyyymm,"-1")))).toLocaleString("ru",{year:"numeric",month:"long"})}if("index-today"===this.$route.name)return"на сегодня";if("index-yyyymm-dd"===this.$route.name||"index-yyyymm-dd-edit"===this.$route.name){return"на "+new Date("".concat(Object(r.b)(0,"".concat(this.$route.params.yyyymm,"-").concat(this.$route.params.dd)))).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"})}return" - буддийский лунный календар"}}},c=(n(435),n(68)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title text-h5 text-sm-h4 text-md-h3 mb-4 mb-sm-8"},[t._v("Зурхай "+t._s(t.title))]),t._v(" "),n("NuxtChild")],1)}),[],!1,null,null,null);e.default=component.exports}}]);