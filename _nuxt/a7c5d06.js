(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(t,e,n){"use strict";var r=n(3),o=n(242);n(395);e.a=function(t){var e=t.app;r.a.use(o.m,{vuetify:e.vuetify,iconsGroup:"mdi"})}},197:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",r=new Date(e);t&&r.setMonth(r.getMonth()+t);var o=r.getMonth()+1;return o=o>9?""+o:"0"+o,""+r.getFullYear()+n+o}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-",o=new Date(e);t&&o.setDate(o.getDate()+t);var c=o.getMonth()+1;c=c>9?""+c:"0"+c;var l=o.getDate();return l=l>9?l:"0"+l,""+o.getFullYear()+n+c+r+l}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},233:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("a69a9220",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";var r=n(197),o={data:function(){return{links:[{title:"Календарь",name:"index-yyyymm",params:{yyyymm:Object(r.a)()}},{title:"На сегодня",name:"index-today"},{title:"О проекте",name:"about"}]}}},c=n(68),l=n(100),v=n.n(l),m=n(416),d=n(185),f=n(97),h=n(417),_=n(96),x=n(186),y=n(130),w=n(155),V=n(412),k=n(195),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"white"}},[n("v-container",{staticClass:"pa-0 fill-height max-container "},[n("NuxtLink",{attrs:{to:"/"}},[n("v-avatar",{staticClass:"mr-10",attrs:{color:"grey darken-1",size:"32"}})],1),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.links,(function(link){return n("v-btn",{key:link.name,staticClass:"mr-2 d-none d-sm-flex",class:{"v-btn--active":t.$route.name===link.name},attrs:{text:"",nuxt:"",to:{name:link.name,params:link.params}}},[t._v("\n      "+t._s(link.title)+"\n    ")])})),t._v(" "),n("v-menu",{attrs:{bottom:"",right:"","offset-y":"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"d-flex d-sm-none",attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n("v-list",t._l(t.links,(function(e){return n("v-list-item",{key:e.name,attrs:{nuxt:"",to:{name:e.name}}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],2)],1)}),[],!1,null,null,null),C=component.exports;v()(component,{VAppBar:m.a,VAvatar:d.a,VBtn:f.a,VContainer:h.a,VIcon:_.a,VList:x.a,VListItem:y.a,VListItemTitle:w.a,VMenu:V.a,VSpacer:k.a});var M={data:function(){return{socialLinks:[{icon:"mdi-vk",href:"https://vk.com/ars.bar.developer"},{icon:"mdi-instagram",href:"https://www.instagram.com/ars.bar.dev/"},{icon:"mdi-twitter",href:"https://twitter.com/arssaybar"}]}}},D=n(413),L=n(253),j=Object(c.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{dark:"",color:"primary lighten-1"}},[n("v-container",{staticClass:"py-0 fill-height max-container"},[n("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[n("span",{staticClass:"body-1 font-weight-medium"},[t._v("Подписывайтесь на автора в социальных сетях!")]),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.socialLinks,(function(link){return n("v-btn",{key:link.icon,staticClass:"mx-3",attrs:{dark:"",icon:"",tag:"a",href:link.href,target:"_blank"}},[n("v-icon",{attrs:{size:"24px"}},[t._v("\n        "+t._s(link.icon)+"\n      ")])],1)}))],2)],1)],1)}),[],!1,null,null,null),A=j.exports;v()(j,{VBtn:f.a,VContainer:h.a,VFooter:D.a,VIcon:_.a,VRow:L.a,VSpacer:k.a});var I={components:{"a-header":C,"a-footer":A},head:{title:"Зурхай - буддийский лунный календар",meta:[{name:"yandex-verification",content:"0993204c71aaf55b"},{hid:"description",name:"description",content:"Зурхай - лунный календарь благоприятных дней для стрижки и путешествий"}]}},O=(n(333),n(418)),$=n(414),B=n(415),E=Object(c.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("a-header"),t._v(" "),n("v-main",[n("v-container",{staticClass:"max-container"},[n("Nuxt")],1)],1),t._v(" "),n("div",{staticClass:"a-alert"},[n("v-alert",{attrs:{border:"left",dismissible:"","colored-border":"",color:"primary accent-4",elevation:"4"}},[n("p",[t._v("Сейчас сайт наполнен частично со стороних ресурсов.\n    Ведеться поиск буддисткого астролога. ")])])],1),t._v(" "),n("a-footer")],1)}),[],!1,null,null,null);e.a=E.exports;v()(E,{VAlert:O.a,VApp:$.a,VContainer:h.a,VMain:B.a})},263:function(t,e,n){t.exports=n(264)},286:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("486623c0",content,!0,{sourceMap:!1})},287:function(t,e,n){var r=n(17)(!1);r.push([t.i,".max-container{max-width:1185px!important}",""]),t.exports=r},333:function(t,e,n){"use strict";n(233)},334:function(t,e,n){var r=n(17)(!1);r.push([t.i,".a-alert{position:fixed;top:70px;right:0;max-width:450px}",""]),t.exports=r}},[[263,12,3,13]]]);