import{r as e,c as t,a as n,F as o,b as r,o as s,d as i,e as a,m as c,f as p,i as m,g as d,V as l}from"./vendor-0406d426.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const _={},h=r("div",{id:"modal",style:{display:"none"}},null,-1);var f=u(_,[["render",function(r,i){const a=e("router-view");return s(),t(o,null,[h,n(a)],64)}]]);const g={},$=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in g)return;g[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},E={getItem:e=>decodeURIComponent(document.cookie.replace(new RegExp(`(?:(?:^|.*;)\\s*${encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")}\\s*\\=\\s*([^;]*).*$)|^.*$`),"$1"))||null,setItem(e,t,n=null,o="",r="",s=""){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;let i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":`; max-age=${n}`;break;case String:i=`; expires=${n}`;break;case Date:i=`; expires=${n.toUTCString()}`}return document.cookie=`${encodeURIComponent(e)}=${encodeURIComponent(t)}${i}${r?`; domain=${r}`:""}${o?`; path=${o}`:""}${s?"; secure":""}`,!0},removeItem(e,t,n){return!(!e||!this.hasItem(e))&&(document.cookie=`${encodeURIComponent(e)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${n?`; domain=${n}`:""}${t?`; path=${t}`:""}`,!0)},hasItem:e=>new RegExp(`(?:^|;\\s*)${encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")}\\s*\\=`).test(document.cookie),keys(){const e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);for(let t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e}},I=[{path:"/",name:"首页",component:()=>$((()=>import("./index-fee7c151.js")),["js/index-fee7c151.js","css/index-80cb6b49.css","css/index-d1e43c6a.css","css/index-a961758c.css","css/index-c1fd1ba0.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/login-46418973.js","js/AntdIcon-8a85f685.js","js/index-2c2919d7.js"]),children:[{path:"/login",name:"登录",component:()=>$((()=>import("./index-e58e0096.js")),["js/index-e58e0096.js","css/index-39e3cb18.css","css/index-d1e43c6a.css","css/index-9b072ebb.css","css/index-c1fd1ba0.css","css/index-21f94949.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/index-2c2919d7.js","js/login-46418973.js","js/AntdIcon-8a85f685.js"])},{path:"/register",name:"注册",component:()=>$((()=>import("./register-ba33d3d2.js")),["js/register-ba33d3d2.js","css/register-9a5fad10.css","css/index-d1e43c6a.css","css/index-9b072ebb.css","css/index-c1fd1ba0.css","css/index-21f94949.css","js/vendor-0406d426.js","css/vendor-95e37965.css"])},{path:"/start",name:"开始",component:()=>$((()=>import("./index-03a10f39.js")),["js/index-03a10f39.js","css/index-c5273f28.css","css/index-d1e43c6a.css","css/index-21f94949.css","css/index-3408d4f8.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/project-944ef143.js","js/___vite-browser-external_commonjs-proxy-604003e4.js"])},{path:"/visual",name:"可视化",component:()=>$((()=>import("./visual-d8613038.js")),["js/visual-d8613038.js","js/vendor-0406d426.js","css/vendor-95e37965.css"]),redirect:"/visual/select",children:[{path:"/visual/select",name:"选择图表",component:()=>$((()=>import("./ChartSelect-6d132c44.js")),["js/ChartSelect-6d132c44.js","css/ChartSelect-05a50123.css","css/index-d1e43c6a.css","js/process-9af2222d.js","css/process-fc7abd77.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/index-2c2919d7.js","js/___vite-browser-external_commonjs-proxy-604003e4.js","js/ChartDisplay-7be18723.js","css/ChartDisplay-1bbf35de.css","js/index-94bb1529.js","css/index-f885c713.css"])},{path:"/visual/config",name:"配置图表",component:()=>$((()=>import("./ChartConfig-b96a280e.js")),["js/ChartConfig-b96a280e.js","css/ChartConfig-773d0c39.css","css/index-d1e43c6a.css","css/index-9b072ebb.css","css/index-c1fd1ba0.css","css/index-21f94949.css","css/index-7ba58915.css","css/index-3408d4f8.css","css/index-11a12e90.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/ChartDisplay-7be18723.js","css/ChartDisplay-1bbf35de.css","js/index-94bb1529.js","css/index-f885c713.css","js/index-2c2919d7.js"])}]},{path:"/projects",name:"项目",component:()=>$((()=>import("./index-580cb02a.js")),["js/index-580cb02a.js","css/index-988eb3e8.css","css/index-d1e43c6a.css","css/index-11a12e90.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/project-944ef143.js"])},{path:"/publish",name:"发布",component:()=>$((()=>import("./index-2a866df1.js")),["js/index-2a866df1.js","css/index-31ae26ac.css","css/index-d1e43c6a.css","css/index-9b072ebb.css","css/index-afca2f92.css","css/index-3408d4f8.css","css/index-7ba58915.css","css/index-a961758c.css","css/index-c1fd1ba0.css","js/ChartDisplay-7be18723.js","css/ChartDisplay-1bbf35de.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/index-2c2919d7.js"])},{path:"/preproccess",name:"数据预处理",component:()=>$((()=>import("./index-de08a9a1.js")),["js/index-de08a9a1.js","css/index-88b4883a.css","css/index-d1e43c6a.css","css/index-9b072ebb.css","css/index-c1fd1ba0.css","css/index-7ba58915.css","css/index-3408d4f8.css","css/index-21f94949.css","css/index-afca2f92.css","css/index-a961758c.css","js/process-9af2222d.js","css/process-fc7abd77.css","js/vendor-0406d426.js","css/vendor-95e37965.css","js/index-2c2919d7.js","js/___vite-browser-external_commonjs-proxy-604003e4.js","js/AntdIcon-8a85f685.js"])}]}],R=i({history:a(),routes:I});R.beforeEach(((e,t,n)=>{"/login"===e.path?E.getItem("user")?R.push("/projects"):n():E.getItem("user")?n():(c.info("未登录，请先登录"),R.push("/login"))}));const v=p();v.use(m),d(f).use(R).use(v).use(l).mount("#app");export{u as _,E as d};
//# sourceMappingURL=index-623c6874.js.map