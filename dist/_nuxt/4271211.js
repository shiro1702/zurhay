(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{189:function(t,n,e){"use strict";var r=e(3),o=e(241);e(392);n.a=function(t){var n=t.app;r.a.use(o.m,{vuetify:n.vuetify,iconsGroup:"mdi"})}},196:function(t,n,e){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",r=new Date(n);t&&r.setMonth(r.getMonth()+t);var o=r.getMonth()+1;return o=o>9?""+o:"0"+o,""+r.getFullYear()+e+o}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-",o=new Date(n);t&&o.setDate(o.getDate()+t);var l=o.getMonth()+1;l=l>9?""+l:"0"+l;var c=o.getDate();return c=c>9?c:"0"+c,""+o.getFullYear()+e+l+r+c}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}))},232:function(t,n,e){var content=e(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("a69a9220",content,!0,{sourceMap:!1})},250:function(t,n,e){"use strict";var r=e(196),o={data:function(){return{links:[{title:"Календарь",name:"index-yyyymm",params:{yyyymm:Object(r.a)()}},{title:"О проекте",name:"about"}]}}},l=e(68),c=e(99),v=e.n(c),f=e(413),d=e(184),m=e(97),_=e(414),h=e(96),y=e(185),x=e(128),V=e(153),w=e(409),k=e(194),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app-bar",{attrs:{app:"",color:"white"}},[e("v-container",{staticClass:"pa-0 fill-height"},[e("v-avatar",{staticClass:"mr-10",attrs:{color:"grey darken-1",size:"32"}}),t._v(" "),e("v-spacer"),t._v(" "),t._l(t.links,(function(link){return e("v-btn",{key:link.name,staticClass:"mr-2 d-none d-sm-flex",class:{"v-btn--active":t.$route.name===link.name},attrs:{text:"",nuxt:"",to:{name:link.name,params:link.params}}},[t._v("\n      "+t._s(link.title)+"\n    ")])})),t._v(" "),e("v-menu",{attrs:{bottom:"",right:"","offset-y":"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({staticClass:"d-flex d-sm-none",attrs:{icon:""}},"v-btn",o,!1),r),[e("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e("v-list",t._l(t.links,(function(n){return e("v-list-item",{key:n.name,attrs:{nuxt:"",to:{name:n.name}}},[e("v-list-item-title",[t._v(t._s(n.title))])],1)})),1)],1)],2)],1)}),[],!1,null,null,null),C=component.exports;v()(component,{VAppBar:f.a,VAvatar:d.a,VBtn:m.a,VContainer:_.a,VIcon:h.a,VList:y.a,VListItem:x.a,VListItemTitle:V.a,VMenu:w.a,VSpacer:k.a});var M={data:function(){return{socialLinks:[{icon:"mdi-vk",linl:"/"},{icon:"mdi-instagram",linl:"/"},{icon:"mdi-twitter",linl:"/"}]}}},D=e(410),j=e(251),L=Object(l.a)(M,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-footer",{attrs:{dark:"",color:"primary lighten-1"}},[e("v-container",{staticClass:"py-0 fill-height"},[e("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[e("span",{staticClass:"body-1 font-weight-medium"},[t._v("Подписывайтесь на автора в социальных сетях!")]),t._v(" "),e("v-spacer"),t._v(" "),t._l(t.socialLinks,(function(link){return e("v-btn",{key:link.icon,staticClass:"mx-3",attrs:{dark:"",icon:""}},[e("v-icon",{attrs:{size:"24px"}},[t._v("\n        "+t._s(link.icon)+"\n      ")])],1)}))],2)],1)],1)}),[],!1,null,null,null),A=L.exports;v()(L,{VBtn:m.a,VContainer:_.a,VFooter:D.a,VIcon:h.a,VRow:j.a,VSpacer:k.a});var I={components:{"a-header":C,"a-footer":A}},O=(e(332),e(415)),$=e(411),B=e(412),E=Object(l.a)(I,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("a-header"),t._v(" "),e("v-main",[e("v-container",[e("Nuxt")],1)],1),t._v(" "),e("div",{staticClass:"a-alert"},[e("v-alert",{attrs:{border:"left",dismissible:"","colored-border":"",color:"primary accent-4",elevation:"4"}},[e("p",[t._v("Сейчас сайт наполнен частично со стороних ресурсов.\n    Ведеться поиск буддисткого астролога. ")])])],1),t._v(" "),e("a-footer")],1)}),[],!1,null,null,null);n.a=E.exports;v()(E,{VAlert:O.a,VApp:$.a,VContainer:_.a,VMain:B.a})},261:function(t,n,e){t.exports=e(262)},285:function(t,n,e){var content=e(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("486623c0",content,!0,{sourceMap:!1})},286:function(t,n,e){var r=e(18)(!1);r.push([t.i,"",""]),t.exports=r},332:function(t,n,e){"use strict";e(232)},333:function(t,n,e){var r=e(18)(!1);r.push([t.i,".a-alert{position:fixed;top:70px;right:0;max-width:450px}",""]),t.exports=r}},[[261,9,2,10]]]);