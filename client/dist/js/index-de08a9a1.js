var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,i=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&r(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&r(e,a,l[a]);return e},d=(e,t)=>l(e,a(t));/* empty css              */import{u as s,P as u,T as c}from"./process-9af2222d.js";/* empty css              *//* empty css              *//* empty css              */import{a as p,p as f,h as m,j as v,r as b,o as y,c as C,x as h,v as _,F as k,a3 as E,u as g,a0 as x,b as w,a5 as j,A as F,B as S,C as T,O as q,m as D,G as I,au as O,Q as U,R as $,X as P,P as V,a9 as M,ax as K,ag as A,q as R,s as z,k as B,ay as N,ak as L,aj as G,am as H,an as Q}from"./vendor-0406d426.js";import{_ as X}from"./index-623c6874.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{A as J}from"./AntdIcon-8a85f685.js";import"./index-2c2919d7.js";import"./___vite-browser-external_commonjs-proxy-604003e4.js";var W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function Y(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var Z=function(e,l){var a=function(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?Object(arguments[l]):{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(l){Y(e,l,a[l])}))}return e}({},e,l.attrs);return p(J,f(a,{icon:W}),null)};Z.displayName="PlusOutlined",Z.inheritAttrs=!1;var ee=Z;var le=X(m(d(i({},{name:"TableEditor"}),{setup(e){const l=s(),{table:a}=l;const t=v((()=>a.mappedTable()));function o({row:e,rowIndex:l,column:t,columnIndex:o}){var n;const r=a.cols.find((e=>t.field===e.cKey));return(null==(n=null==r?void 0:r.errors)?void 0:n.haveError)&&(r.errors.maxErr.has(e.rowId)||r.errors.minErr.has(e.rowId)||r.errors.nnErr.has(e.rowId))?{backgroundColor:"#FF6A6A",color:"#fff"}:{}}return(e,l)=>{const n=b("vxe-column"),r=b("vxe-input"),i=b("vxe-table");return y(),C("div",null,[p(i,{class:"mytable-style","edit-config":{trigger:"click",mode:"cell"},data:g(t),"cell-style":o},{default:h((()=>[(y(),_(n,{key:-1,field:"rowId",title:"ID"})),(y(!0),C(k,null,E(g(a).cols.filter((e=>!e.computed)),(e=>(y(),_(n,{key:e.cid,field:e.cKey,title:e.cname,"edit-render":{autofocus:".vxe-input--inner"}},{edit:h((({row:l})=>[p(r,{modelValue:l[e.cKey],"onUpdate:modelValue":a=>l[e.cKey]=a,modelModifiers:{lazy:!0},onBlur:l=>{return(t=e).errors.typeErr=t.checkType(),t.dataDef.defed?t.checkColDefine():t.initColDefine(),t.dataSift.defed||t.initColSift(),t.errors.haveError=t.errors.haveError||t.errors.typeErr,void a.refreshComputedTable();var t}},null,8,["modelValue","onUpdate:modelValue","onBlur"])])),_:2},1032,["field","title","edit-render"])))),128)),(y(!0),C(k,null,E(g(a).cols.filter((e=>e.computed)),(e=>(y(),_(n,{key:e.cid,field:e.cKey,title:e.cname},null,8,["field","title"])))),128))])),_:1},8,["data"])])}}})),[["__scopeId","data-v-ed2dd8a0"]]);const ae={class:"title"},te=(e=>(F("data-v-b44dd724"),e=e(),S(),e))((()=>w("h3",null,"选择您需要的数据",-1))),oe=T("计算属性"),ne=T(" 注: 只有number, date, boolean类型数据支持参与运算 ");var re=X(m(d(i({},{name:"FieldSelect"}),{setup(e){const l=s(),{table:a}=l,t=v((()=>a.cols.map((e=>({cid:e.cid,title:e.cname,demo:e.computed?`=${e.equation}`:a.data[0][e.cKey]}))))),o=[{title:"字段",dataIndex:"title",key:"title"},{title:"示例",dataIndex:"demo",key:"demo"}],n={onChange:(e,l)=>{a.cols.forEach((e=>{!!l.find((l=>l.cid===e.cid))!==e.selected&&(e.selected=!e.selected,!1===e.selected&&(e.initColDefine(),e.initColSift()))}))},getCheckboxProps:e=>{const l=a.cols.find((l=>l.cid===e.cid));return(null==l?void 0:l.computed)?{checked:!0,disabled:!0}:{}}},r=x({showCompModal:!1,compTitle:"",compEquation:"",rawEquation:[],lastSelect:[],compCols:[],opsCount:0});function i(e){let l=!1,a=null;if(r.lastSelect.forEach((t=>{e.includes(t)||(l=!0,a=t)})),l||e.forEach((e=>{r.lastSelect.includes(e)||(a=e)})),l){const e=r.compCols.findIndex((e=>e.value===a));e+1&&r.compCols.splice(e,1)}else{const e=r.compCols.findIndex((e=>e.value===a)),l=x({value:r.compCols[e].value,label:r.compCols[e].label});if(/F-\d+$/.test(l.value)?l.value=l.value.replace(/F-\d+$/,"F-"+r.opsCount++):l.value=l.value.replace(/\d+$/,""+r.opsCount++),e+1){
//! 为了保证options不变顺序, 不破坏proxy只能这样搞
let a=r.compCols.length;for(r.compCols.push(...r.compCols.slice(0,e+1),l,...r.compCols.slice(e+1));a--;)r.compCols.shift()}}r.lastSelect=e}function d(){q((()=>{r.showCompModal?document.querySelectorAll(".ant-select-dropdown").forEach((e=>e.classList.add("mulTagSelect"))):document.querySelectorAll(".ant-select-dropdown").forEach((e=>e.classList.remove("mulTagSelect")))}))}function u(){0===r.compTitle.trim().length&&r.showCompModal?D.error("字段名不能为空"):(r.compEquation=r.rawEquation.map((e=>{let l=e;return/-F-\d+$/.test(l)?l=l.replace(/-F-\d+$/,""):(l=`$${l}`,l=l.replace(/-\d+$/,"$")),l})).join(""),a.addComputedValue({equation:r.compEquation,cname:r.compTitle}),c())}function c(){r.showCompModal=!r.showCompModal,r.opsCount=0,r.rawEquation=[],r.compEquation="",r.compTitle="",r.lastSelect=[],r.compCols=a.cols.filter((e=>!e.computed&&e.compareable)).map((e=>({value:`${e.cKey}-${r.opsCount++}`,label:e.cname}))),r.compCols.push({value:"(-F-"+r.opsCount++,label:"("},{value:")-F-"+r.opsCount++,label:")"},{value:"--F-"+r.opsCount++,label:"-"},{value:"+-F-"+r.opsCount++,label:"+"},{value:"*-F-"+r.opsCount++,label:"*"},{value:"/-F-"+r.opsCount++,label:"/"},{value:"^-F-"+r.opsCount++,label:"^"},{value:"&-F-"+r.opsCount++,label:"&"},{value:"|-F-"+r.opsCount++,label:"|"},{value:"<<-F-"+r.opsCount++,label:"<<"},{value:">>-F-"+r.opsCount++,label:">>"},{value:">>>-F-"+r.opsCount++,label:">>>"},{value:"sqrt-F-"+r.opsCount++,label:"sqrt"},{value:"sin-F-"+r.opsCount++,label:"sin"},{value:"cos-F-"+r.opsCount++,label:"cos"},{value:"tan-F-"+r.opsCount++,label:"tan"},{value:"pi-F-"+r.opsCount++,label:"pi"},{value:"e-F-"+r.opsCount++,label:"e"})}return(e,l)=>{const a=I,s=O,f=U,m=$,v=P,b=V,_=M;return y(),C(k,null,[w("div",ae,[te,p(a,{type:"primary",ghost:"",onClick:c},{default:h((()=>[p(g(ee)),oe])),_:1})]),p(s,{"row-key":e=>e.cid,pagination:!1,"row-selection":n,columns:g(o),"data-source":g(t)},{name:h((({text:e})=>[w("a",null,j(e),1)])),_:1},8,["row-key","columns","data-source"]),w("div",null,[p(_,{visible:g(r).showCompModal,"onUpdate:visible":l[2]||(l[2]=e=>g(r).showCompModal=e),title:"定义计算属性列",onOk:u},{default:h((()=>[p(b,{"label-col":{span:4},"wrapper-col":{span:14}},{default:h((()=>[p(m,{label:"字段名"},{default:h((()=>[p(f,{value:g(r).compTitle,"onUpdate:value":l[0]||(l[0]=e=>g(r).compTitle=e)},null,8,["value"])])),_:1}),p(m,{label:"表达式"},{default:h((()=>[p(v,{value:g(r).rawEquation,"onUpdate:value":l[1]||(l[1]=e=>g(r).rawEquation=e),options:g(r).compCols,mode:"multiple",placeholder:"Please select",style:{width:"200px"},onChange:i,onDropdownVisibleChange:d},null,8,["value","options"])])),_:1})])),_:1}),ne])),_:1},8,["visible"])])],64)}}})),[["__scopeId","data-v-b44dd724"]]);const ie=T("重置"),de=T("确定"),se=m(d(i({},{name:"FieldSift"}),{props:{colId:{type:Number,required:!0},modalType:{type:String,required:!0}},setup(e){const l=e,a=s(),{table:t}=a,{modalType:o}=l,n=t.cols.find((e=>e.cid===l.colId))||null,r=n?n[o]:null,i=v((()=>"dataDef"===o?"定义您的数据":"筛选您的数据")),d=v((()=>n?n.compareable:null));function u(){null==n||n.initColDefine()}function c(){null==n||n.initColSift()}function f(){null==n||n.checkColDefine(),n&&(n.dataDef.onEdit=!1)}function m(){n&&(n.dataSift.onEdit=!1)}function b(){n&&(n.dataDef.defed=!0)}function C(){n&&(n.dataSift.defed=!0)}return(e,l)=>{const a=I,t=U,n=$,s=A,v=V,k=M;return y(),_(k,{visible:g(r).onEdit,"onUpdate:visible":l[8]||(l[8]=e=>g(r).onEdit=e),title:g(i)},K({default:h((()=>["dataDef"===g(o)?(y(),_(v,{key:0,model:g(r),"label-col":{span:4},"wrapper-col":{span:14}},{default:h((()=>[p(n,{label:"最大值"},{default:h((()=>[p(t,{value:g(r).max,"onUpdate:value":l[0]||(l[0]=e=>g(r).max=e),disabled:!g(d),onChange:b},null,8,["value","disabled"])])),_:1}),p(n,{label:"最小值"},{default:h((()=>[p(t,{value:g(r).min,"onUpdate:value":l[1]||(l[1]=e=>g(r).min=e),disabled:!g(d),onChange:b},null,8,["value","disabled"])])),_:1}),p(n,{label:"非空"},{default:h((()=>[p(s,{checked:g(r).nn,"onUpdate:checked":l[2]||(l[2]=e=>g(r).nn=e),onChange:b},null,8,["checked"])])),_:1})])),_:1},8,["model"])):(y(),_(v,{key:1,model:g(r),"label-col":{span:4},"wrapper-col":{span:14}},{default:h((()=>[p(n,{label:"最大值"},{default:h((()=>[p(t,{value:g(r).max,"onUpdate:value":l[3]||(l[3]=e=>g(r).max=e),disabled:!g(d),onChange:C},null,8,["value","disabled"])])),_:1}),p(n,{label:"最小值"},{default:h((()=>[p(t,{value:g(r).min,"onUpdate:value":l[4]||(l[4]=e=>g(r).min=e),disabled:!g(d),onChange:C},null,8,["value","disabled"])])),_:1}),p(n,{label:"前百分之(%)"},{default:h((()=>[p(t,{value:g(r).top,"onUpdate:value":l[5]||(l[5]=e=>g(r).top=e),disabled:!g(d),onChange:C},null,8,["value","disabled"])])),_:1}),p(n,{label:"后百分之(%)"},{default:h((()=>[p(t,{value:g(r).last,"onUpdate:value":l[6]||(l[6]=e=>g(r).last=e),disabled:!g(d),onChange:C},null,8,["value","disabled"])])),_:1}),p(n,{label:"非空"},{default:h((()=>[p(s,{checked:g(r).nn,"onUpdate:checked":l[7]||(l[7]=e=>g(r).nn=e),onChange:C},null,8,["checked"])])),_:1})])),_:1},8,["model"]))])),_:2},["dataDef"===g(o)?{name:"footer",fn:h((()=>[p(a,{key:"reset",onClick:u},{default:h((()=>[ie])),_:1}),p(a,{key:"back",type:"primary",onClick:f},{default:h((()=>[de])),_:1})]))}:{name:"footer",fn:h((()=>[p(a,{key:"reset",onClick:c},{default:h((()=>[T("重置")])),_:1}),p(a,{key:"back",type:"primary",onClick:m},{default:h((()=>[T("确定")])),_:1})]))}]),1032,["visible","title"])}}}));const ue=(e=>(F("data-v-6e6673d4"),e=e(),S(),e))((()=>w("div",{class:"title"},[w("h3",null,"定义您的数据")],-1))),ce=T("点击定义"),pe=T("点击筛选");var fe=X(m(d(i({},{name:"FieldDefine"}),{setup(e){const l=s(),a=x(l.table),t=v((()=>a.cols.filter((e=>e.selected)))),o=[{title:"字段",dataIndex:"cname",key:"cname"},{title:"数据类型",slots:{customRender:"defineType"},key:"defineType"},{title:"数据定义",slots:{customRender:"defineRange"},key:"defineRange"},{title:"筛选",slots:{customRender:"defineSift"},key:"defineSift"},{title:"错误",slots:{customRender:"errors"},key:"errors"}],n=x(u.colType.map((e=>({value:e,label:e}))));function r(e,l){const t=a.cols.find((l=>l.cid===e));t&&(t[l].onEdit=!t[l].onEdit)}function i(e){var l,a,t,o,n,r;if(!e.errors.haveError)return"未检查到错误";let i="";return e.errors.typeErr&&(i+=`不能定义为${e.type}类型`),(null==(a=null==(l=e.errors)?void 0:l.maxErr)?void 0:a.size)&&(i+=i.length?" / ID=":"ID=",e.errors.maxErr.forEach((e=>{i+=`${e} `})),i+="大于最大值\n"),(null==(o=null==(t=e.errors)?void 0:t.minErr)?void 0:o.size)&&(i+=i.length?" / ID=":"ID=",e.errors.minErr.forEach((e=>{i+=`${e} `})),i+="小于最小值\n"),(null==(r=null==(n=e.errors)?void 0:n.nnErr)?void 0:r.size)&&(i+=i.length?" / ID=":"ID=",e.errors.nnErr.forEach((e=>{i+=`${e} `})),i+="存在空值"),i}return(e,l)=>{const a=P,d=I,s=O;return y(),C(k,null,[ue,p(s,{"row-key":e=>e.cid,pagination:!1,columns:g(o),"data-source":g(t)},{defineType:h((({record:e})=>[p(a,{ref:"select",value:e.type,"onUpdate:value":l=>e.type=l,options:g(n),onChange:l=>function(e){e.initColDefine(),e.initColSift(),e.errors.typeErr=e.checkType(),e.errors.haveError=e.errors.haveError||e.errors.typeErr}(e)},null,8,["value","onUpdate:value","options","onChange"])])),defineRange:h((({record:e})=>[p(d,{type:"primary",onClick:l=>r(e.cid,"dataDef")},{default:h((()=>[ce])),_:2},1032,["onClick"]),p(se,{"col-id":e.cid,"modal-type":"dataDef"},null,8,["col-id"])])),defineSift:h((({record:e})=>[p(d,{type:"primary",onClick:l=>r(e.cid,"dataSift")},{default:h((()=>[pe])),_:2},1032,["onClick"]),p(se,{"col-id":e.cid,"modal-type":"dataSift"},null,8,["col-id"])])),errors:h((({record:e})=>[T(j(i(e)),1)])),_:1},8,["row-key","columns","data-source"])],64)}}})),[["__scopeId","data-v-6e6673d4"]]);const me=T(" 选定数据源 "),ve={id:"tableSelects"},be={id:"TableEditor"},ye={id:"FieldSelect"},Ce={id:"FiledDefs"},he={id:"tableSubmit"},_e=T("下一步"),ke=T("保存表格"),Ee=T("使用选定的字段"),ge=T("使用全部字段"),xe=T("使用筛选后数据"),we=T("使用全部数据");var je=X(m({setup(e){const l=s(),{table:a}=l,t=R(),o=z();B((async()=>{await l.getTable(o.query.project_id)||N.open({message:"网络错误",description:"请求数据失败, 请检查你的网络.",duration:0})}));const n=x({expVis:!1,save1:!0,save2:!0,curType:0});function r(e){n.curType=e,n.expVis=!0}function i(){if(!a.geted)return D.error("表格获取失败"),void(n.expVis=!1);if(a.cols.find((e=>{var l;return!e.computed&&(null==(l=null==e?void 0:e.errors)?void 0:l.haveError)})))return D.error("存在有误数据, 无法继续"),void(n.expVis=!1);if(l.tableExport=a.exportTable(n.save1,n.save2),n.curType)l.putTable().then((e=>{e.code?D.error("保存失败"):(D.success("保存成功"),n.expVis=!1)}),(()=>{D.error("保存失败")}));else{const e=l.tableExport.cols.filter((e=>{var l;return null==(l=c.colType.find((l=>l.typeName===e.type)))?void 0:l.compareable}));if(!e.length)return void D.error("可计算字段数少于1");l.tableExport.x=e.slice(0).shift().cKey,l.tableExport.y=e.slice(0).pop().cKey,t.push("visual")}}return(e,l)=>{const t=G,o=L,d=I,s=H,u=Q,c=$,f=V,m=M;return y(),C(k,null,[w("header",null,[p(o,null,{default:h((()=>[p(t,{span:3},{default:h((()=>[me])),_:1}),p(t,{span:9},{default:h((()=>[T(j(g(a).title),1)])),_:1})])),_:1})]),w("section",ve,[w("div",be,[p(le)]),w("div",ye,[p(re)])]),w("section",Ce,[p(fe)]),w("section",he,[p(d,{type:"primary",onClick:l[0]||(l[0]=e=>r(0))},{default:h((()=>[_e])),_:1}),p(d,{type:"primary",onClick:l[1]||(l[1]=e=>r(1))},{default:h((()=>[ke])),_:1})]),w("div",null,[p(m,{visible:g(n).expVis,"onUpdate:visible":l[4]||(l[4]=e=>g(n).expVis=e),title:"使用哪些数据?",onOk:i},{default:h((()=>[p(f,null,{default:h((()=>[p(c,{label:"使用选定数据?"},{default:h((()=>[p(u,{value:g(n).save1,"onUpdate:value":l[2]||(l[2]=e=>g(n).save1=e)},{default:h((()=>[p(s,{value:!0},{default:h((()=>[Ee])),_:1}),p(s,{value:!1},{default:h((()=>[ge])),_:1})])),_:1},8,["value"])])),_:1}),p(c,{label:"使用筛选后数据?"},{default:h((()=>[p(u,{value:g(n).save2,"onUpdate:value":l[3]||(l[3]=e=>g(n).save2=e)},{default:h((()=>[p(s,{value:!0},{default:h((()=>[xe])),_:1}),p(s,{value:!1},{default:h((()=>[we])),_:1})])),_:1},8,["value"])])),_:1})])),_:1})])),_:1},8,["visible"])])],64)}}}),[["__scopeId","data-v-36f65b37"]]);export{je as default};
//# sourceMappingURL=index-de08a9a1.js.map