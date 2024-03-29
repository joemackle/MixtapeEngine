import{n as $,s as U,r as X,c as Y}from"../chunks/scheduler.Dk-snqIU.js";import{S as F,i as J,e as y,s as L,t as N,c as v,a as x,l as j,f as O,b as z,d as g,m as _,r as A,g as D,h,B as q,j as V,w as Z,k as ee,x as te,y as se,q as ne,o as oe,z as re}from"../chunks/index.BUbOyii-.js";import{w as ae}from"../chunks/index.Ice1EKvx.js";import{b as ie}from"../chunks/paths.DIr2S2Yt.js";const K=typeof window<"u";let G=K?()=>window.performance.now():()=>Date.now(),Q=K?e=>requestAnimationFrame(e):$;const E=new Set;function W(e){E.forEach(t=>{t.c(e)||(E.delete(t),t.f())}),E.size!==0&&Q(W)}function le(e){let t;return E.size===0&&Q(W),{promise:new Promise(s=>{E.add(t={c:e,f:s})}),abort(){E.delete(t)}}}const ce=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"}));function R(e){return Object.prototype.toString.call(e)==="[object Date]"}function H(e,t,s,l){if(typeof s=="number"||R(s)){const i=l-s,n=(s-t)/(e.dt||1/60),r=e.opts.stiffness*i,a=e.opts.damping*n,c=(r-a)*e.inv_mass,o=(n+c)*e.dt;return Math.abs(o)<e.opts.precision&&Math.abs(i)<e.opts.precision?l:(e.settled=!1,R(s)?new Date(s.getTime()+o):s+o)}else{if(Array.isArray(s))return s.map((i,n)=>H(e,t[n],s[n],l[n]));if(typeof s=="object"){const i={};for(const n in s)i[n]=H(e,t[n],s[n],l[n]);return i}else throw new Error(`Cannot spring ${typeof s} values`)}}function fe(e,t={}){const s=ae(e),{stiffness:l=.15,damping:i=.8,precision:n=.01}=t;let r,a,c,o=e,p=e,f=1,w=0,M=!1;function k(T,b={}){p=T;const S=c={};return e==null||b.hard||u.stiffness>=1&&u.damping>=1?(M=!0,r=G(),o=T,s.set(e=p),Promise.resolve()):(b.soft&&(w=1/((b.soft===!0?.5:+b.soft)*60),f=0),a||(r=G(),M=!1,a=le(m=>{if(M)return M=!1,a=null,!1;f=Math.min(f+w,1);const d={inv_mass:f,opts:u,settled:!0,dt:(m-r)*60/1e3},C=H(d,o,e,p);return r=m,o=e,s.set(e=C),d.settled&&(a=null),!d.settled})),new Promise(m=>{a.promise.then(()=>{S===c&&m()})}))}const u={set:k,update:(T,b)=>k(T(p,e),b),subscribe:s.subscribe,stiffness:l,damping:i,precision:n};return u}function de(e){let t,s,l='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg>',i,n,r,a,c=Math.floor(e[1]+1)+"",o,p,f,w=Math.floor(e[1])+"",M,k,u,T='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg>',b,S;return{c(){t=y("div"),s=y("button"),s.innerHTML=l,i=L(),n=y("div"),r=y("div"),a=y("strong"),o=N(c),p=L(),f=y("strong"),M=N(w),k=L(),u=y("button"),u.innerHTML=T,this.h()},l(m){t=v(m,"DIV",{class:!0});var d=x(t);s=v(d,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(s)!=="svelte-97ppyc"&&(s.innerHTML=l),i=O(d),n=v(d,"DIV",{class:!0});var C=x(n);r=v(C,"DIV",{class:!0,style:!0});var P=x(r);a=v(P,"STRONG",{class:!0,"aria-hidden":!0});var B=x(a);o=z(B,c),B.forEach(g),p=O(P),f=v(P,"STRONG",{class:!0});var I=x(f);M=z(I,w),I.forEach(g),P.forEach(g),C.forEach(g),k=O(d),u=v(d,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(u)!=="svelte-irev0c"&&(u.innerHTML=T),d.forEach(g),this.h()},h(){_(s,"aria-label","Decrease the counter by one"),_(s,"class","svelte-y96mxt"),_(a,"class","hidden svelte-y96mxt"),_(a,"aria-hidden","true"),_(f,"class","svelte-y96mxt"),_(r,"class","counter-digits svelte-y96mxt"),A(r,"transform","translate(0, "+100*e[2]+"%)"),_(n,"class","counter-viewport svelte-y96mxt"),_(u,"aria-label","Increase the counter by one"),_(u,"class","svelte-y96mxt"),_(t,"class","counter svelte-y96mxt")},m(m,d){D(m,t,d),h(t,s),h(t,i),h(t,n),h(n,r),h(r,a),h(a,o),h(r,p),h(r,f),h(f,M),h(t,k),h(t,u),b||(S=[q(s,"click",e[4]),q(u,"click",e[5])],b=!0)},p(m,[d]){d&2&&c!==(c=Math.floor(m[1]+1)+"")&&V(o,c),d&2&&w!==(w=Math.floor(m[1])+"")&&V(M,w),d&4&&A(r,"transform","translate(0, "+100*m[2]+"%)")},i:$,o:$,d(m){m&&g(t),b=!1,X(S)}}}function me(e,t){return(e%t+t)%t}function pe(e,t,s){let l,i,n=0;const r=fe();Y(e,r,o=>s(1,i=o));const a=()=>s(0,n-=1),c=()=>s(0,n+=1);return e.$$.update=()=>{e.$$.dirty&1&&r.set(n),e.$$.dirty&2&&s(2,l=me(i,1))},[n,i,l,r,a,c]}class ue extends F{constructor(t){super(),J(this,t,pe,de,U,{})}}function he(e){let t,s,l,i,n=`soon, this will be the home page of the app. <br/> click <a href="${ie}/about">here</a> to see the about page`,r,a,c;return a=new ue({}),{c(){t=y("meta"),s=L(),l=y("section"),i=y("p"),i.innerHTML=n,r=L(),Z(a.$$.fragment),this.h()},l(o){const p=ee("svelte-1770iv7",document.head);t=v(p,"META",{name:!0,content:!0}),p.forEach(g),s=O(o),l=v(o,"SECTION",{class:!0});var f=x(l);i=v(f,"P",{"data-svelte-h":!0}),j(i)!=="svelte-1cpgdtl"&&(i.innerHTML=n),r=O(f),te(a.$$.fragment,f),f.forEach(g),this.h()},h(){document.title="The Mixtape Engine",_(t,"name","description"),_(t,"content","The Mixtape Engine (COP3530 Project 3)"),_(l,"class","svelte-39krom")},m(o,p){h(document.head,t),D(o,s,p),D(o,l,p),h(l,i),h(l,r),se(a,l,null),c=!0},p:$,i(o){c||(ne(a.$$.fragment,o),c=!0)},o(o){oe(a.$$.fragment,o),c=!1},d(o){o&&(g(s),g(l)),g(t),re(a)}}}class Me extends F{constructor(t){super(),J(this,t,null,he,U,{})}}export{Me as component,ve as universal};
