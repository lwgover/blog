import{_ as i}from"../chunks/preload-helper.a4192956.js";import{H as p}from"../chunks/control.f5b05b5f.js";import{s as _,n as a}from"../chunks/scheduler.6d76f27c.js";import{S as d,i as f,g,h as v,B as h,k as w,a as y,f as b}from"../chunks/index.2511e0f2.js";const x=(n,t)=>{const e=n[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((o,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function E(n,t){return new p(n,t)}new TextEncoder;async function P({params:n,fetch:t}){const o=await(await t("/api/posts")).json(),r=await x(Object.assign({"../platform2paranoia.md":()=>i(()=>import("../chunks/platform2paranoia.d0919e48.js"),["../chunks/platform2paranoia.d0919e48.js","../chunks/scheduler.6d76f27c.js","../chunks/index.2511e0f2.js","../chunks/default.64b1a374.js","../assets/default.37fb500d.css"],import.meta.url),"../test.md":()=>i(()=>import("../chunks/test.20c924b7.js"),["../chunks/test.20c924b7.js","../chunks/scheduler.6d76f27c.js","../chunks/index.2511e0f2.js","../chunks/default.64b1a374.js","../assets/default.37fb500d.css"],import.meta.url)}),`../${n.slug}.md`),{title:l,date:m,length:c,image:u}=r.metadata,s=r.default;if(console.log(s),!r)throw E(404,{message:"Not found"});return{Content:s,title:l,date:m,length:c,image:u,posts:o}}const k=Object.freeze(Object.defineProperty({__proto__:null,load:P},Symbol.toStringTag,{value:"Module"}));function C(n){let t,e="Do Nothing";return{c(){t=g("div"),t.textContent=e,this.h()},l(o){t=v(o,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1fdyn8e"&&(t.textContent=e),this.h()},h(){w(t,"class","nothing")},m(o,r){y(o,t,r)},p:a,i:a,o:a,d(o){o&&b(t)}}}class I extends d{constructor(t){super(),f(this,t,null,C,_,{})}}export{I as component,k as universal};