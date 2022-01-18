import{i as e,V as t,o as a,P as r,p as l,d as s,q as n}from"./index.46c6e0f3.js";import{o,b as i,d as u,e as c,p as d,q as p,u as m,s as f,t as v,F as h,z as y,f as b,m as g,w as k,n as x,h as w}from"./vendor.5658d620.js";import{a as _,C as M}from"./c-table.010011cf.js";import{_ as N}from"./user-link.69187dfa.js";import{_ as T}from"./cf-rating-color.3915307a.js";import{l as C}from"./load.8c215a92.js";import{_ as j}from"./at-rating-color.085b3ea7.js";const q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},O=[u("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z",fill:"currentColor"},null,-1)];var A={name:"mdi-star",render:function(e,t){return o(),i("svg",q,O)}};const B={class:"space-left"},E={key:1},L=c({props:{author:{type:null,required:!0}},setup(t){const a=t,{author:r}=d(a),l=p((()=>{var e,t;return null!=(t=null==(e=null==r?void 0:r.value)?void 0:e.teamUrl)?t:""})),s=()=>{""!==l.value&&window.open(l.value,"_blank")};return(t,a)=>m(e)(m(r).teamName)?(o(),i(h,{key:0},[u("div",null,[u("span",{class:f(""!==m(l)&&"cursor-pointer"),onClick:s},v(m(r).teamName),3)]),u("div",B,[(o(!0),i(h,null,y(m(r).members,((e,t)=>(o(),b(N,{class:f(t>0&&"ml-2"),key:e,name:e},null,8,["class","name"])))),128))])],64)):(o(),i("span",E,v(m(r).members[0]),1))}});const I=C(JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["Petr","b"],["Benq","c"],["ksun48","d"],["jiangly","e"]],"data":[{"n":"a","h":"a","r":3911},{"n":"b","h":"b","r":3296},{"n":"c","h":"c","r":3583},{"n":"d","h":"d","r":3334},{"n":"e","h":"e","r":3125}]}')),U=new Map(I.map((e=>[e.h,e.n]))),F=new Map(I.map((e=>[e.h,e.r])));function $(e){var t;return null!=(t=U.get(e))?t:e}function K(e){return F.get(e)}const P={class:"space-left"},R=["href"],S={class:"space-left"},z=["href"],J={key:2},W=c({props:{author:{type:null,required:!0}},setup:t=>(a,r)=>m(e)(t.author.teamName)&&t.author.members.length<=1?(o(),i(h,{key:0},[g(N,{name:t.author.teamName},null,8,["name"]),u("span",P,[(o(!0),i(h,null,y(t.author.members,((e,t)=>(o(),i("a",{key:t,class:"ml-2",href:`https://codeforces.com/profile/${e}`,target:"_blank"},[g(m(T),{rating:m(K)(e)},{default:k((()=>[x(v(e),1)])),_:2},1032,["rating"])],8,R)))),128))])],64)):m(e)(t.author.teamName)?(o(),i(h,{key:1},[u("div",null,[g(N,{name:t.author.teamName},null,8,["name"])]),u("div",S,[(o(!0),i(h,null,y(t.author.members,((e,t)=>(o(),i("a",{key:t,class:f(t>0&&"ml-2"),href:`https://codeforces.com/profile/${e}`,target:"_blank"},[g(m(T),{rating:m(K)(e)},{default:k((()=>[x(v(e),1)])),_:2},1032,["rating"])],10,z)))),128))])],64)):(o(),i("span",J,v(t.author.members[0]),1))});const D=C(JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["jiangly","b"]],"data":[{"n":"a","h":"a","r":3969},{"n":"b","h":"b","r":3343}]}'));new Map(D.map((e=>[e.h,e.n])));const G=new Map(D.map((e=>[e.h,e.r])));function H(e){return G.get(e)}const V={class:"space-left"},Y=["href"],Q={key:1},X=c({props:{author:{type:null,required:!0}},setup:t=>(a,r)=>m(e)(t.author.teamName)?(o(),i(h,{key:0},[g(N,{name:t.author.teamName},null,8,["name"]),u("span",V,[(o(!0),i(h,null,y(t.author.members,((e,t)=>(o(),i("a",{key:t,class:"ml-2 font-bold",href:`https://atcoder.jp/users/${e}`,target:"_blank"},[g(m(j),{rating:m(H)(e)},{default:k((()=>[x(v(e),1)])),_:2},1032,["rating"])],8,Y)))),128))])],64)):(o(),i("span",Q,v(t.author.members[0]),1))}),Z=u("span",null,"+",-1),ee={key:0},te={key:0,class:"text-sm text-gray-400"},ae={key:1},re={class:"text-center font-bold text-red-500"},le=u("span",null,"-",-1),se=c({props:{result:{type:null,required:!1},practice:{type:Boolean,required:!1}},setup(e){const a=e,{result:r}=d(a),l=p((()=>{var e,t;return null!=(t=null==(e=null==r?void 0:r.value)?void 0:e.submissionUrl)?t:""})),s=()=>{""!==l.value&&window.open(l.value,"_blank")};function n(e){const t=Math.floor(e/3600),a=Math.floor(e%3600/60);return`${t}:${r=a,(r<10?"0":"")+r}`;var r}return(a,c)=>m(r)?(o(),i(h,{key:0},[m(r).verdict===m(t).OK?(o(),i("div",{key:0,class:f(""!==m(l)&&"cursor-pointer"),onClick:s},[u("div",{class:f(["text-center","font-bold",e.practice?"text-blue-500":"text-green-500"])},[Z,m(r).dirty?(o(),i("span",ee,v(m(r).dirty),1)):w("v-if",!0)],2),e.practice?w("v-if",!0):(o(),i("div",te,[u("span",null,v(n(m(r).relativeTime)),1)]))],2)):m(r).dirty?(o(),i("div",ae,[u("div",re,[le,u("span",null,v(m(r).dirty),1)])])):w("v-if",!0)],2112)):w("v-if",!0)}}),ne={key:0,class:"mt-4 box"},oe={key:0,class:"font-600"},ie={key:1,class:"font-600"},ue={class:"flex items-center"},ce={key:0},de=c({props:{contest:{type:null,required:!0}},setup(s){const n=s,{contest:c}=d(n),x=p((()=>c.value.type.startsWith("codeforces"))),N=p((()=>c.value.type.startsWith("atcoder"))),T=e=>e.author.participantType===r.PRACTICE,C=e=>"string"==typeof e?e:String.fromCharCode(65+e),j=p((()=>{var e,t;return null!=(t=null==(e=c.value.problems)?void 0:e.sort(((e,t)=>("string"==typeof e.index?e.index.charCodeAt(0)-65:e.index)-("string"==typeof t.index?t.index.charCodeAt(0)-65:t.index))))?t:[]})),q=p((()=>{var e,r,l;if(a(c.value.problems))return{standings:[],firstBlood:[]};if(a(c.value.standings))return{standings:[],firstBlood:[]};const s=Array(null==(e=c.value.problems)?void 0:e.length);for(const n of c.value.standings){const e=Array(null==(r=c.value.problems)?void 0:r.length);for(const r of n.submissions){const o=r.problemIndex;if(r.verdict===t.OK&&!T(n))if(a(s[o]))s[o]=r;else{s[o].relativeTime>r.relativeTime&&(s[o]=r)}if(a(e[o]))e[o]=r;else{const a=e[o];(null!=(l=null==a?void 0:a.verdict)?l:t.FAILED)!==t.OK&&(e[o]=r)}}Reflect.set(n,"result",e)}return{standings:c.value.standings,firstBlood:s}}));return(a,s)=>m(c).standings?(o(),i("div",ne,[g(m(M),{data:m(q).standings,mobile:1023},{columns:k((({row:a})=>[g(m(_),{label:"#",align:"center",width:"4em"},{default:k((()=>[T(a)?(o(),i("span",ie,"-")):(o(),i("span",oe,v(a.rank),1))])),_:2},1024),g(m(_),{label:m(x)?"Handle":""},{default:k((()=>{return[u("div",ue,[(e=a,e.author.participantType===r.OUT_OF_COMPETITION?(o(),b(m(A),{key:0,class:"mr-1 text-sm text-yellow-300 inline-block"})):w("v-if",!0)),u("div",null,[m(x)?(o(),b(W,{key:0,author:a.author},null,8,["author"])):m(N)?(o(),b(X,{key:1,author:a.author},null,8,["author"])):(o(),b(L,{key:2,author:a.author},null,8,["author"]))])])];var e})),_:2},1032,["label"]),g(m(_),{label:"解决",align:"center",width:"4em"},{default:k((()=>[u("span",null,v(a.solved),1)])),_:2},1024),g(m(_),{label:"罚时",align:"center",width:"4em"},{default:k((()=>[T(a)?w("v-if",!0):(o(),i("span",ce,v(m(l)(a.penalty).value),1))])),_:2},1024),(o(!0),i(h,null,y(m(j),((r,l)=>{var s,n;return o(),b(m(_),{key:r.index,label:C(r.index),center:"",class:f(m(e)(a)&&m(e)(m(q).firstBlood[l])&&m(e)(a.result[l])&&a.result[l].verdict===m(t).OK&&a.result[l].relativeTime<=(null!=(n=null==(s=m(q).firstBlood[l])?void 0:s.relativeTime)?n:Number.MIN_SAFE_INTEGER)&&"bg-[#E0FFE4]")},{default:k((()=>[g(se,{result:a.result[l],practice:T(a)},null,8,["result","practice"])])),_:2},1032,["label","class"])})),128))])),_:1},8,["data"])])):w("v-if",!0)}}),pe={class:"mb-4"},me={class:"info-box border-left"},fe={key:0},ve=["href"],he=["href"],ye=c({props:{contest:{type:null,required:!0}},setup:e=>(t,a)=>(o(),i("div",null,[u("h2",pe,v(e.contest.name),1),u("div",me,[u("p",null," 时间："+v(m(s)(e.contest.startTime).value)+" 至 "+v(m(s)(e.contest.startTime+e.contest.duration).value),1),u("p",null,"时长："+v(m(n)(e.contest.duration).value),1),u("p",null,"人数："+v(e.contest.participantNumber)+" 人",1),e.contest.contestUrl||e.contest.standingsUrl?(o(),i("p",fe,[u("a",{href:e.contest.contestUrl,target:"_blank"},"比赛主页",8,ve),u("a",{href:e.contest.standingsUrl,target:"_blank",class:"ml-2"},"完整榜单",8,he)])):w("v-if",!0)]),g(de,{contest:e.contest},null,8,["contest"])]))});export{ye as _,$ as f,I as h};
