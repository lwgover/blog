import{w as u}from"./index.3a065702.js";import{a as b}from"./paths.f00b9944.js";const v="1703014614468",A="sveltekit:snapshot",R="sveltekit:scroll",y="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1},_=location.origin;function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function S(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function T(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||k(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===_&&e.hasAttribute("download");return{url:n,external:r,target:s,download:l}}function O(e){let t=null,n=null,s=null,r=null,l=null,o=null,a=e;for(;a&&a!==document.documentElement;)s===null&&(s=c(a,"preload-code")),r===null&&(r=c(a,"preload-data")),t===null&&(t=c(a,"keepfocus")),n===null&&(n=c(a,"noscroll")),l===null&&(l=c(a,"reload")),o===null&&(o=c(a,"replacestate")),a=g(a);function i(h){switch(h){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[s??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(o)}}function p(e){const t=u(e);let n=!0;function s(){n=!0,t.update(o=>o)}function r(o){n=!1,t.set(o)}function l(o){let a;return t.subscribe(i=>{(a===void 0||n&&i!==a)&&o(a=i)})}return{notify:s,set:r,subscribe:l}}function m(){const{set:e,subscribe:t}=u(!1);let n;async function s(){clearTimeout(n);try{const r=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const o=(await r.json()).version!==v;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:s}}function k(e,t){return e.origin!==_||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:p({}),page:p({}),navigating:u(null),updated:m()};export{y as I,f as P,R as S,A as a,x as b,O as c,L as d,U as e,T as f,I as g,k as i,_ as o,S as s};
