var t=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(e,s,a)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;"undefined"!=typeof require&&require;import{e as l,B as o,j as n,q as i,o as u,b as d,m,u as c,w as f,d as b,t as g,n as h,h as p}from"./vendor.5658d620.js";import{u as v}from"./users.bf5649c7.js";import{C,a as y}from"./c-table.0ac50363.js";import{_ as w}from"./user-link.69187dfa.js";import{d as j,b as k,h as _,j as S,k as O}from"./index.7dd32c5a.js";import"./load.8c215a92.js";const x={class:"divide-y"},q=b("h2",{class:"mb-4"},"成员",-1),T={class:"font-600"},P={key:0},R=b("div",{class:"my-4 px-3"},"人捏？",-1),F={class:"mt-4 pt-4"},B={class:"text-gray-400"},E=l({setup(t){var l,E;const I=o(),N=String(null!=(l=I.query.sort)?l:"最近通过"),z=String(null!=(E=I.query.order)?E:"desc"),A=n(k),D=t=>{const l=t.submissions.length,o=t.submissions.filter((({v:t})=>0!==t)).length,n=(0!==l?(100*o/l).toFixed(1):"0.0")+" %",i=t.submissions.filter((({t:t})=>t>=A.value)).length,u=t.submissions.filter((({t:t,v:e})=>t>=A.value&&0!==e)).length,d=t.contests.filter((({t:t})=>t>=A.value)).length,m=t.submissions.filter((({v:t})=>1===t)).sort(((t,e)=>e.t-t.t));return((t,l)=>{for(var o in l||(l={}))s.call(l,o)&&r(t,o,l[o]);if(e)for(var o of e(l))a.call(l,o)&&r(t,o,l[o]);return t})({subCount:l,okCount:o,okRate:n,recentSubCount:i,recentOkCount:u,recentContest:d,lastSolveTime:m.length>0?m[0].t:0},t)},G=i((()=>v.map(D))),H=S((t=>t.recentOkCount)),J=S((t=>t.recentContest)),K=S((t=>t.lastSolveTime)),L=S((t=>t.recentSubCount)),M=S((t=>t.okCount)),Q=S((t=>t.contests.length)),U=S((t=>t.subCount)),V=S((t=>Number.parseFloat(t.okRate))),W=O((t=>t.name));function X(t){return _(t,H,J,K,L,M,Q,U,V,W)}return(t,e)=>(u(),d("div",x,[q,m(c(C),{data:c(G),cache:"members","default-sort":c(N),"default-sort-order":c(z)},{columns:f((({index:t,row:e})=>[m(c(y),{label:"#",width:"3em",align:"center"},{default:f((()=>[b("span",T,g(t+1),1)])),_:2},1024),m(c(y),{label:"姓名"},{default:f((()=>[m(w,{name:e.name},null,8,["name"])])),_:2},1024),m(c(y),{label:"最近通过",width:"7em",align:"right",sort:X(c(H))},{default:f((()=>[h(g(e.recentOkCount),1)])),_:2},1032,["sort"]),m(c(y),{label:"最近提交",width:"7em",align:"right",sort:X(c(L))},{default:f((()=>[h(g(e.recentSubCount),1)])),_:2},1032,["sort"]),m(c(y),{label:"最近比赛",width:"7em",align:"right",sort:X(c(J))},{default:f((()=>[h(g(e.recentContest),1)])),_:2},1032,["sort"]),m(c(y),{label:"最新通过",width:"10em",align:"center",sort:X(c(K))},{default:f((()=>[e.lastSolveTime>0?(u(),d("span",P,g(c(j)(e.lastSolveTime).value),1)):p("v-if",!0)])),_:2},1032,["sort"]),m(c(y),{label:"通过",width:"5em",align:"right",sort:X(c(M))},{default:f((()=>[h(g(e.okCount),1)])),_:2},1032,["sort"]),m(c(y),{label:"提交",width:"5em",align:"right",sort:X(c(U))},{default:f((()=>[h(g(e.subCount),1)])),_:2},1032,["sort"]),m(c(y),{label:"通过率",width:"6em",align:"right",sort:X(c(V))},{default:f((()=>[h(g(e.okRate),1)])),_:2},1032,["sort"]),m(c(y),{label:"比赛",width:"5em",align:"right",sort:X(c(Q))},{default:f((()=>[h(g(e.contests.length),1)])),_:2},1032,["sort"])])),empty:f((()=>[R])),_:1},8,["data","default-sort","default-sort-order"]),b("div",F,[b("span",B,"最近开始于 "+g(c(j)(A.value).value),1)])]))}});export{E as default};
