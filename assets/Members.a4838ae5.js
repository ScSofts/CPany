var t=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(e,s,a)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;"undefined"!=typeof require&&require;import{e as l,B as o,k as n,q as i,o as u,b as d,m,u as f,w as c,d as b,t as g,n as h,h as p}from"./vendor.1d8aaf39.js";import{u as v}from"./users.5465658c.js";import{C,a as y}from"./c-table.f629a7ea.js";import{_ as w}from"./user-link.6ebf104a.js";import{d as k,b as _,h as j,j as S,k as O}from"./index.f0818889.js";import"./load.8c215a92.js";const x={class:"divide-y"},q=b("h2",{class:"mb-4"},"成员",-1),T={class:"font-600"},P={key:0},R=b("div",{class:"my-4 px-3"},"人捏？",-1),F={class:"mt-4 pt-4"},B={class:"text-gray-400"},E=l({setup(t){var l,E;const I=o(),N=String(null!=(l=I.query.sort)?l:"最近通过"),z=String(null!=(E=I.query.order)?E:"desc"),A=n(_),D=t=>{const l=t.submissions.length,o=t.submissions.filter((({v:t})=>0!==t)).length,n=(0!==l?(100*o/l).toFixed(1):"0.0")+" %",i=t.submissions.filter((({t:t})=>t>=A.value)).length,u=t.submissions.filter((({t:t,v:e})=>t>=A.value&&0!==e)).length,d=t.contests.filter((({t:t})=>t>=A.value)).length,m=t.submissions.filter((({v:t})=>1===t)).sort(((t,e)=>e.t-t.t));return((t,l)=>{for(var o in l||(l={}))s.call(l,o)&&r(t,o,l[o]);if(e)for(var o of e(l))a.call(l,o)&&r(t,o,l[o]);return t})({subCount:l,okCount:o,okRate:n,recentSubCount:i,recentOkCount:u,recentContest:d,lastSolveTime:m.length>0?m[0].t:0},t)},G=i((()=>v.map(D))),H=S((t=>t.recentOkCount)),J=S((t=>t.recentContest)),K=S((t=>t.lastSolveTime)),L=S((t=>t.recentSubCount)),M=S((t=>t.okCount)),Q=S((t=>t.contests.length)),U=S((t=>t.subCount)),V=S((t=>Number.parseFloat(t.okRate))),W=O((t=>t.name));function X(t){return j(t,H,J,K,L,M,Q,U,V,W)}return(t,e)=>(u(),d("div",x,[q,m(f(C),{data:f(G),cache:"members","default-sort":f(N),"default-sort-order":f(z)},{columns:c((({index:t,row:e})=>[m(f(y),{label:"#",width:"3em",align:"center"},{default:c((()=>[b("span",T,g(t+1),1)])),_:2},1024),m(f(y),{label:"姓名"},{default:c((()=>[m(w,{name:e.name},null,8,["name"])])),_:2},1024),m(f(y),{label:"最近通过",width:"7em",align:"right",sort:X(f(H))},{default:c((()=>[h(g(e.recentOkCount),1)])),_:2},1032,["sort"]),m(f(y),{label:"最近提交",width:"7em",align:"right",sort:X(f(L))},{default:c((()=>[h(g(e.recentSubCount),1)])),_:2},1032,["sort"]),m(f(y),{label:"最近比赛",width:"7em",align:"right",sort:X(f(J))},{default:c((()=>[h(g(e.recentContest),1)])),_:2},1032,["sort"]),m(f(y),{label:"最新通过",width:"10em",align:"center",sort:X(f(K))},{default:c((()=>[e.lastSolveTime>0?(u(),d("span",P,g(f(k)(e.lastSolveTime).value),1)):p("v-if",!0)])),_:2},1032,["sort"]),m(f(y),{label:"通过",width:"5em",align:"right",sort:X(f(M))},{default:c((()=>[h(g(e.okCount),1)])),_:2},1032,["sort"]),m(f(y),{label:"提交",width:"5em",align:"right",sort:X(f(U))},{default:c((()=>[h(g(e.subCount),1)])),_:2},1032,["sort"]),m(f(y),{label:"通过率",width:"6em",align:"right",sort:X(f(V))},{default:c((()=>[h(g(e.okRate),1)])),_:2},1032,["sort"]),m(f(y),{label:"比赛",width:"5em",align:"right",sort:X(f(Q))},{default:c((()=>[h(g(e.contests.length),1)])),_:2},1032,["sort"])])),empty:c((()=>[R])),_:1},8,["data","default-sort","default-sort-order"]),b("div",F,[b("span",B,"最近开始于 "+g(f(k)(A.value).value),1)])]))}});export{E as default};
