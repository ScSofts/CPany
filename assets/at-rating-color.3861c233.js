import{i as r}from"./index.d755760e.js";import{e,p as o,q as s,o as t,b as a,r as l,G as n,u}from"./vendor.5658d620.js";const i=e({props:{color:{type:String,required:!1},rating:{type:Number,required:!1}},setup(e){const i=e,{rating:d,color:p}=o(i),v=s((()=>{if(r(null==p?void 0:p.value))return null==p?void 0:p.value;const e=null==d?void 0:d.value;return r(e)?e<400?"#808080":e<800?"#804000":e<1200?"#008000":e<1600?"#00C0C0":e<2e3?"#0000FF":e<2400?"#C0C000":e<2800?"#FF8000":"#FF0000":null}));return(r,e)=>(t(),a("span",{style:n({color:u(v)})},[l(r.$slots,"default")],4))}});export{i as _};
