import{_ as i}from"../chunks/preload-helper.a4192956.js";import{H as p}from"../chunks/control.f5b05b5f.js";import{s as _,n as s}from"../chunks/scheduler.6d76f27c.js";import{S as d,i as f,g,h as v,B as h,k as w,a as b,f as y}from"../chunks/index.2511e0f2.js";const x=(n,t)=>{const e=n[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((o,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function E(n,t){return new p(n,t)}new TextEncoder;async function P({params:n,fetch:t}){const o=await(await t("/api/posts")).json(),r=await x(Object.assign({"../platform2paranoia.md":()=>i(()=>import("../chunks/platform2paranoia.d0919e48.js"),["../chunks/platform2paranoia.d0919e48.js","../chunks/scheduler.6d76f27c.js","../chunks/index.2511e0f2.js","../chunks/default.64b1a374.js","../assets/default.37fb500d.css"],import.meta.url),"../test.md":()=>i(()=>import("../chunks/test.20c924b7.js"),["../chunks/test.20c924b7.js","../chunks/scheduler.6d76f27c.js","../chunks/index.2511e0f2.js","../chunks/default.64b1a374.js","../assets/default.37fb500d.css"],import.meta.url)}),`../${n.slug}.md`),{title:l,date:m,length:u,image:c}=r.metadata,a=r.default;if(console.log(a),!r)throw E(404,{message:"Not found"});return{Content:a,title:l,date:m,length:u,image:c,posts:o}}const D=Object.freeze(Object.defineProperty({__proto__:null,load:P},Symbol.toStringTag,{value:"Module"}));function T(n){let t,e="This might work, or might not";return{c(){t=g("div"),t.textContent=e,this.h()},l(o){t=v(o,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1ujb4i8"&&(t.textContent=e),this.h()},h(){w(t,"class","testing")},m(o,r){b(o,t,r)},p:s,i:s,o:s,d(o){o&&y(t)}}}class I extends d{constructor(t){super(),f(this,t,null,T,_,{})}}export{I as component,D as universal};