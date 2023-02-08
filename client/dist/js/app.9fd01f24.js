(function(t){function s(s){for(var i,n,c=s[0],o=s[1],u=s[2],l=0,f=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);h&&h(s);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],i=!0,c=1;c<e.length;c++){var o=e[c];0!==a[o]&&(i=!1)}i&&(r.splice(s--,1),t=n(n.s=e[0]))}return t}var i={},a={app:0},r=[];function n(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=i,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)n.d(e,i,function(s){return t[s]}.bind(null,i));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var u=0;u<c.length;u++)s(c[u]);var h=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"498a":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);var i=e("2b0e"),a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n={name:"App"},c=n,o=(e("f721"),e("2877")),u=Object(o["a"])(c,a,r,!1,null,null,null),h=u.exports,l=e("8c4f"),f=function(){var t=this,s=t._self._c;return s("div",[s("DarkLight")],1)},d=[],p=function(){var t=this,s=t._self._c;return s("div",{ref:"wrap",staticClass:"wrapper",class:t.isDarkW},[s("div",{ref:"btn",staticClass:"item item-font btn pdng",class:t.isDarkB,attrs:{role:"button"},on:{click:function(s){t.changeSwitchCurrentStatus(),t.changeSwitchCounter()}}},[t._v("Switch to "+t._s(t.changeTo)+" mode")]),s("Statistics",{staticClass:"item item-font stats"})],1)},b=[],w=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"bdr-b btn"},[t._v("The switcher was clicked "+t._s(t.counterStatus)+" times.")]),s("div",{staticClass:"bdr-b btn"},[t._v("Current status is "+t._s(t.currentStatus)+".")]),t.lastStatus?s("div",{staticClass:"bdr-b btn"},[t._v("Last status was "+t._s(t.statistics[0].switchLastStatus)+".")]):t._e()])},S=[],g=e("2f62"),m={computed:{...Object(g["c"])({statistics:"statistics"}),counterStatus(){return this.statistics.length>0?this.statistics[0].switchCounter:null},currentStatus(){return this.statistics.length>0&&!1===this.statistics[0].switchCurrentStatus?"light":"dark"},lastStatus(){return this.statistics.length>0&&null!==this.statistics[0].switchLastStatus}},methods:Object(g["b"])(["changeSwitchLastStatus"]),created(){this.$watch("currentStatus",(function(t,s){void 0!==s&&this.statistics.length>0&&this.changeSwitchLastStatus(s)}),{immediate:!0})}},v=m,k=(e("e79e"),Object(o["a"])(v,w,S,!1,null,"faac9d28",null)),C=k.exports,O=e("cffa"),y=e("a5cf"),_={data(){return{wrapperDark:"wrapper-dark",btnDark:"btn-dark",btnLight:"btn-light",cached:""}},components:{Statistics:C},computed:{...Object(g["c"])({statistics:"statistics"}),darkCondition(){return this.statistics.length>0&&!0===this.statistics[0].switchCurrentStatus},changeTo(){return this.statistics.length>0&&!1===this.statistics[0].switchCurrentStatus?"dark":"light"},isDarkW(){return this.darkCondition?this.wrapperDark:""},isDarkB(){return this.darkCondition?this.btnDark:this.btnLight}},methods:Object(g["b"])(["changeSwitchCurrentStatus","changeSwitchCounter"]),mounted(){this.$watch("changeTo",(function(t,s){"light"===t&&void 0!==s&&this.$nextTick(()=>{O["a"].fromTo(this.$refs.btn,2.2,{borderRadius:"2%"},{borderRadius:"+=120px / +=30px",force3D:!0,transformOrigin:"center center",ease:y["a"].easeOut,repeat:1,yoyo:!0}),O["a"].fromTo(this.$refs.wrap,.6,{backgroundColor:"white"},{backgroundColor:"black",force3D:!0,ease:y["a"].easeOut})}),"dark"===t&&void 0!==s&&this.$nextTick(()=>{O["a"].fromTo(this.$refs.btn,2.2,{borderRadius:"2%"},{borderRadius:"+=30px / +=120px",force3D:!0,transformOrigin:"center center",ease:y["a"].easeOut,repeat:1,yoyo:!0}),O["a"].fromTo(this.$refs.wrap,.6,{backgroundColor:"black"},{backgroundColor:"white",force3D:!0,ease:y["a"].easeOut})})}),{immediate:!0})}},j=_,x=(e("ef87"),Object(o["a"])(j,p,b,!1,null,"4c1feb51",null)),D=x.exports,L={components:{DarkLight:D},computed:Object(g["c"])(["statistics"]),methods:Object(g["b"])(["populateStatistics"]),async created(){0===this.statistics.length&&await this.populateStatistics()}},T=L,$=Object(o["a"])(T,f,d,!1,null,"352c3e60",null),P=$.exports;i["a"].use(l["a"]);var M=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"index",component:P}]}),R=e("bc3a"),B=e.n(R),J=e("bfa9");i["a"].use(g["a"]);const W=()=>({statistics:[]}),A={setStatistics(t,s){t.statistics=s},incrementSwitchCounter(t){t.statistics[0].switchCounter++},boolSwitchCurrentStatus(t){t.statistics[0].switchCurrentStatus=!t.statistics[0].switchCurrentStatus},setSwitchLastStatus(t,s){t.statistics[0].switchLastStatus=s}},q={async populateStatistics({commit:t}){let s=await B.a.get("http://localhost:8000/statistics");s.data,t("setStatistics",s.data)},changeSwitchCounter({commit:t}){t("incrementSwitchCounter")},changeSwitchCurrentStatus({commit:t}){t("boolSwitchCurrentStatus")},changeSwitchLastStatus({commit:t},s){t("setSwitchLastStatus",s)}},z={getStatistics:t=>t.statistics},E=new J["a"]({key:"vuex",storage:window.localStorage});var F=new g["a"].Store({state:W,getters:z,actions:q,mutations:A,plugins:[E.plugin]});i["a"].config.productionTip=!1,new i["a"]({router:M,store:F,render:t=>t(h)}).$mount("#app")},"5bff":function(t,s,e){},"6eb1":function(t,s,e){},e79e:function(t,s,e){"use strict";e("498a")},ef87:function(t,s,e){"use strict";e("6eb1")},f721:function(t,s,e){"use strict";e("5bff")}});
//# sourceMappingURL=app.9fd01f24.js.map