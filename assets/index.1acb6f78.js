import{c as g,s as i,t as h,a as p,b as a,d as B,u as X,i as d,m as N,e as Y,f as F,F as O,g as j,S as W,r as q}from"./vendor.36a30962.js";const U=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))s(L);new MutationObserver(L=>{for(const r of L)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(L){const r={};return L.integrity&&(r.integrity=L.integrity),L.referrerpolicy&&(r.referrerPolicy=L.referrerpolicy),L.crossorigin==="use-credentials"?r.credentials="include":L.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(L){if(L.ep)return;L.ep=!0;const r=t(L);fetch(L.href,r)}};U();const K="_mainArea_1vh5q_1",Q="_renderBox_1vh5q_11",J="_mainSvg_1vh5q_24",Z="_download_1vh5q_28";var M={mainArea:K,renderBox:Q,mainSvg:J,download:Z};const e0=h('<svg><circle fill="transparent" stroke="black"></circle></svg>',4,!0),t0=e=>(()=>{const n=e0.cloneNode(!0);return g(t=>{const s=e.x,L=e.y,r=e.radius,o=e.strokeWidth??3;return s!==t._v$&&i(n,"cx",t._v$=s),L!==t._v$2&&i(n,"cy",t._v$2=L),r!==t._v$3&&i(n,"r",t._v$3=r),o!==t._v$4&&i(n,"stroke-width",t._v$4=o),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),n})(),n0=h('<svg><line stroke="black"></line></svg>',4,!0),y=e=>(()=>{const n=n0.cloneNode(!0);return g(t=>{const s=e.x1,L=e.y1,r=e.x2,o=e.y2,c=e.strokeWidth??3,l=e.rounded?"round":"butt";return s!==t._v$&&i(n,"x1",t._v$=s),L!==t._v$2&&i(n,"y1",t._v$2=L),r!==t._v$3&&i(n,"x2",t._v$3=r),o!==t._v$4&&i(n,"y2",t._v$4=o),c!==t._v$5&&i(n,"stroke-width",t._v$5=c),l!==t._v$6&&i(n,"stroke-linecap",t._v$6=l),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})(),L0=h('<svg><path fill="transparent" stroke="black"></path></svg>',4,!0),r0=e=>(()=>{const n=L0.cloneNode(!0);return g(t=>{const s=o0(e.x,e.y,e.radius,e.startAngle,e.endAngle),L=e.strokeWidth??3;return s!==t._v$&&i(n,"d",t._v$=s),L!==t._v$2&&i(n,"stroke-width",t._v$2=L),t},{_v$:void 0,_v$2:void 0}),n})(),R=(e,n,t,s)=>{const L=s*Math.PI/180;return{x:e+t*Math.cos(L),y:n+t*Math.sin(L)}},o0=(e,n,t,s,L)=>{const r=R(e,n,t,L),o=R(e,n,t,s),c=L-s<=180?"0":"1";return["M",r.x,r.y,"A",t,t,0,c,0,o.x,o.y].join(" ")},f=(e,n,t,{factor:s=1,fullLoop:L=!1}={})=>{let r=0;if(n===0)r=e%t/(t-n);else{const o=e%Math.pow(10,s0(n)+1);r=n<=o&&o<=t?(o-n)/(t-n):0}return L?(r<=.5?r*2:(1-r)*2)*s:r*s},s0=e=>Math.floor(Math.log10(e)),z=e=>e*Math.PI/180,P=B(),c0=10,l0=e=>{const[n,t]=p(Date.now());return setInterval(()=>t(Date.now()),c0),a(P.Provider,{value:n,get children(){return e.children}})},$=()=>X(P),a0=h("<svg><g></g></svg>",4,!0),i0=50,v0=50,u0=15,h0=15,d0=10,g0=()=>{const e=$(),n=()=>f(e(),0,8e4,{fullLoop:!0}),t=()=>({x:i0,y:v0,radius:u0*n()}),s=()=>{const v=d0*n();return{radius:v,x:m()+v*o(),y:_()-v*c(),startAngle:90-r(),endAngle:-90-r()}},L=()=>h0*n(),r=()=>f(e(),0,36e4,{factor:360}),o=()=>Math.cos(z(r())),c=()=>Math.sin(z(r())),l=()=>t().x+t().radius*o(),u=()=>t().y-t().radius*c(),m=()=>l()+L()*o(),_=()=>u()-L()*c();return(()=>{const v=a0.cloneNode(!0);return d(v,a(t0,N(t)),null),d(v,a(y,{get x1(){return l()},get y1(){return u()},get x2(){return m()},get y2(){return _()}}),null),d(v,a(r0,N(s)),null),v})()},_0=new Y("identity"),f0=()=>_0.next(),m0=F.makeNoise3D(f0),H=(e,n,t)=>m0(e,n,t),M0=h("<svg><g></g></svg>",4,!0),$0=50,y0=50,S=20,z0=30,x0=30,k0=330,A0=18,T=3,E0=()=>{const e=$(),n=()=>f(e(),0,36e4,{factor:360}),t=()=>f(e(),0,36e5,{factor:3,fullLoop:!0}),s=r=>{const o=Math.cos(z(r)),c=Math.sin(z(r)),l=$0+S*o,u=y0-S*c,m=e()/1e5,_=Math.abs(H(l*.1,u*.1,m)*(A0-T)+T),v=l+_*o,V=u-_*c;return{x1:l,y1:u,x2:v,y2:V,strokeWidth:t(),rounded:!0}},L=()=>{const r=n(),o=[];for(let c=z0;c<=k0;c+=x0)o.push(s(c+r));return o};return(()=>{const r=M0.cloneNode(!0);return d(r,a(O,{get each(){return L()},children:o=>a(y,o)})),r})()},w0=h('<svg><g><path transform="scale(2.1) translate(0.5, 0.5)" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="miter" d="m 2.3198563,2.6609461 c 0.1584536,0.2192172 0.1961249,0.4688535 0.3561295,0.6974221 0.033095,0.047223 0.051027,0.1049793 0.089044,0.1483975 0.016228,0.018623 0.040757,0.028226 0.059327,0.044481 0.051958,0.023944 0.064542,0.083776 0.1038884,0.1187072 0.068691,0.061029 0.1108324,0.065526 0.1929058,0.1038616 0.1775288,0.082845 0.3597477,0.1833551 0.5490409,0.2374144 0.028919,0.00825 0.060125,0.00638 0.089017,0.014899 0.040625,0.011706 0.077711,0.034266 0.1187072,0.044481 0.2285553,0.057145 0.4663529,0.048287 0.6974224,0.089044 0.3263969,0.057571 0.712762,0.1621782 0.9942089,0.3412926 0.084441,0.053714 0.1524942,0.1376493 0.2225692,0.2077508 0.138474,0.1384741 0.2466196,0.2959544 0.3709747,0.4451682 0.037086,0.044561 0.061243,0.048287 0.089017,0.1038617 0.0141,0.028013 0.015697,0.06103 0.029716,0.089044 0.030888,0.061882 0.094843,0.094205 0.1335519,0.1483719 0.067787,0.09487 0.086224,0.1010683 0.1632158,0.1780603 0.022348,0.022348 0.035836,0.052996 0.059327,0.074198 0.2169829,0.1952738 0.5906044,0.3503807 0.8754938,0.400652 0.034213,0.00639 0.1837808,0.020751 0.2225696,0.029716 0.030488,0.00692 0.058156,0.025008 0.089043,0.029716 0.034214,0.00505 0.069331,-0.0021 0.1038627,0 0.2176212,0.014366 0.4342923,0.0149 0.6529165,0.0149"></path><path transform="scale(1.9) translate(2.5, -1.5)" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="miter" d="m 2.3198563,2.6609461 c 0.1584536,0.2192172 0.1961249,0.4688535 0.3561295,0.6974221 0.033095,0.047223 0.051027,0.1049793 0.089044,0.1483975 0.016228,0.018623 0.040757,0.028226 0.059327,0.044481 0.051958,0.023944 0.064542,0.083776 0.1038884,0.1187072 0.068691,0.061029 0.1108324,0.065526 0.1929058,0.1038616 0.1775288,0.082845 0.3597477,0.1833551 0.5490409,0.2374144 0.028919,0.00825 0.060125,0.00638 0.089017,0.014899 0.040625,0.011706 0.077711,0.034266 0.1187072,0.044481 0.2285553,0.057145 0.4663529,0.048287 0.6974224,0.089044 0.3263969,0.057571 0.712762,0.1621782 0.9942089,0.3412926 0.084441,0.053714 0.1524942,0.1376493 0.2225692,0.2077508 0.138474,0.1384741 0.2466196,0.2959544 0.3709747,0.4451682 0.037086,0.044561 0.061243,0.048287 0.089017,0.1038617 0.0141,0.028013 0.015697,0.06103 0.029716,0.089044 0.030888,0.061882 0.094843,0.094205 0.1335519,0.1483719 0.067787,0.09487 0.086224,0.1010683 0.1632158,0.1780603 0.022348,0.022348 0.035836,0.052996 0.059327,0.074198 0.2169829,0.1952738 0.5906044,0.3503807 0.8754938,0.400652 0.034213,0.00639 0.1837808,0.020751 0.2225696,0.029716 0.030488,0.00692 0.058156,0.025008 0.089043,0.029716 0.034214,0.00505 0.069331,-0.0021 0.1038627,0 0.2176212,0.014366 0.4342923,0.0149 0.6529165,0.0149"></path><path transform="scale(1.9) translate(0, 4)" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="miter" d="m 2.3198563,2.6609461 c 0.1584536,0.2192172 0.1961249,0.4688535 0.3561295,0.6974221 0.033095,0.047223 0.051027,0.1049793 0.089044,0.1483975 0.016228,0.018623 0.040757,0.028226 0.059327,0.044481 0.051958,0.023944 0.064542,0.083776 0.1038884,0.1187072 0.068691,0.061029 0.1108324,0.065526 0.1929058,0.1038616 0.1775288,0.082845 0.3597477,0.1833551 0.5490409,0.2374144 0.028919,0.00825 0.060125,0.00638 0.089017,0.014899 0.040625,0.011706 0.077711,0.034266 0.1187072,0.044481 0.2285553,0.057145 0.4663529,0.048287 0.6974224,0.089044 0.3263969,0.057571 0.712762,0.1621782 0.9942089,0.3412926 0.084441,0.053714 0.1524942,0.1376493 0.2225692,0.2077508 0.138474,0.1384741 0.2466196,0.2959544 0.3709747,0.4451682 0.037086,0.044561 0.061243,0.048287 0.089017,0.1038617 0.0141,0.028013 0.015697,0.06103 0.029716,0.089044 0.030888,0.061882 0.094843,0.094205 0.1335519,0.1483719 0.067787,0.09487 0.086224,0.1010683 0.1632158,0.1780603 0.022348,0.022348 0.035836,0.052996 0.059327,0.074198 0.2169829,0.1952738 0.5906044,0.3503807 0.8754938,0.400652 0.034213,0.00639 0.1837808,0.020751 0.2225696,0.029716 0.030488,0.00692 0.058156,0.025008 0.089043,0.029716 0.034214,0.00505 0.069331,-0.0021 0.1038627,0 0.2176212,0.014366 0.4342923,0.0149 0.6529165,0.0149"></path></g></svg>',10,!0),N0=1.5,R0=()=>{const e=$(),n=()=>f(e(),3e4,7e4,{factor:N0,fullLoop:!0});return(()=>{const t=w0.cloneNode(!0),s=t.firstChild,L=s.nextSibling,r=L.nextSibling;return g(o=>{const c=n(),l=n(),u=n();return c!==o._v$&&i(s,"stroke-width",o._v$=c),l!==o._v$2&&i(L,"stroke-width",o._v$2=l),u!==o._v$3&&i(r,"stroke-width",o._v$3=u),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()},S0=h('<svg><circle fill="black" stroke="transparent"></circle></svg>',4,!0),T0=e=>(()=>{const n=S0.cloneNode(!0);return g(t=>{const s=e.x,L=e.y,r=e.radius,o=e.strokeWidth??3;return s!==t._v$&&i(n,"cx",t._v$=s),L!==t._v$2&&i(n,"cy",t._v$2=L),r!==t._v$3&&i(n,"r",t._v$3=r),o!==t._v$4&&i(n,"stroke-width",t._v$4=o),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),n})(),b0=50,I0=50,C0=3,D0=()=>{const e=$(),n=()=>f(e(),4e5,7e5,{factor:C0,fullLoop:!0});return a(T0,{x:b0,y:I0,get radius(){return n()}})},w=2,G=(e,n,t,s,L,r)=>({corner1:{x:e,y:n},corner2:{x:t,y:s},corner3:{x:L,y:r}}),p0=e=>G(e.corner1.x,e.corner1.y,e.corner2.x,e.corner2.y,e.corner3.x,e.corner3.y),O0=(e,n=w)=>({x:C(e.corner1.x,e.corner3.x,n),y:C(e.corner1.y,e.corner3.y,n)}),b=(e,n,t)=>({x:I(e.x,n.x,t),y:I(e.y,n.y,t)}),I=(e,n,t)=>e+(n-e)*t,C=(e,n,t=w)=>(e+n)/t,W0=(e,n=w)=>{const t=O0(e,n),s={corner1:e.corner1,corner2:t,corner3:e.corner2},L={corner1:e.corner2,corner2:t,corner3:e.corner3};return[s,L]},P0=h("<svg><g></g></svg>",4,!0),D=34,x=98,k=98,H0=1,A=2,E=5,G0=2.1,V0=()=>{const e=$(),n=()=>f(e(),2e4,7e4,{fullLoop:!0,factor:H0}),t=()=>{const c=e()/1e5;return Math.abs(H(1,1,c))*(E-A)+A},L=[[G(x-D,k,x,k,x,k-D)]];for(let c=1;c<E;c++){const l=[];for(let u=0;u<L[c-1].length;u++)l.push(...W0(L[c-1][u],G0));L.push(l)}const r=()=>{const c=t(),l=L.slice(0,Math.floor(c)).flat(),u=o(),m=c<=A||c>=E?[]:L[Math.ceil(c)-1].map(_=>{const v=p0(_);return v.corner1=b(v.corner2,v.corner1,u),v.corner3=b(v.corner2,v.corner3,u),v});return[...l,...m]},o=()=>{const c=t();return c-Math.floor(c)};return(()=>{const c=P0.cloneNode(!0);return d(c,a(O,{get each(){return r()},children:l=>[a(y,{rounded:!0,get strokeWidth(){return n()},get x1(){return l.corner1.x},get y1(){return l.corner1.y},get x2(){return l.corner2.x},get y2(){return l.corner2.y}}),a(y,{rounded:!0,get strokeWidth(){return n()},get x1(){return l.corner2.x},get y1(){return l.corner2.y},get x2(){return l.corner3.x},get y2(){return l.corner3.y}})]})),c})()},B0=h('<a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></a>'),X0=h('<a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"></path></svg></a>'),Y0=e=>a(W,{get when(){return e.sharing()},get fallback(){return(()=>{const n=X0.cloneNode(!0);return n.$$click=()=>e.setSharing(!0),g(()=>n.className=e.class),n})()},get children(){const n=B0.cloneNode(!0);return n.$$click=()=>e.setSharing(!1),g(()=>n.className=e.class),n}});j(["click"]);const F0=h('<svg viewBox="-1 -1 31 31" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect fill-opacity="1" fill="rgb(255, 255, 255)" x="-1" y="-1" width="31" height="31"></rect><path fill-opacity="1" fill="rgb(0, 0, 0)" fill-rule="evenodd" d="M 8 0 L 12 0 L 12 1 L 13 1 L 13 0 L 16 0 L 16 2 L 15 2 L 15 3 L 18 3 L 18 4 L 16 4 L 16 5 L 15 5 L 15 4 L 14 4 L 14 3 L 13 3 L 13 2 L 12 2 L 12 4 L 14 4 L 14 5 L 15 5 L 15 7 L 16 7 L 16 6 L 17 6 L 17 8 L 18 8 L 18 9 L 19 9 L 19 7 L 20 7 L 20 8 L 21 8 L 21 9 L 20 9 L 20 10 L 17 10 L 17 11 L 18 11 L 18 12 L 16 12 L 16 11 L 15 11 L 15 13 L 13 13 L 13 12 L 14 12 L 14 9 L 12 9 L 12 6 L 13 6 L 13 8 L 14 8 L 14 6 L 13 6 L 13 5 L 12 5 L 12 6 L 11 6 L 11 5 L 10 5 L 10 3 L 11 3 L 11 1 L 8 1 zM 15 8 L 16 8 L 16 9 L 15 9 z M 18 0 L 19 0 L 19 1 L 18 1 z M 20 0 L 21 0 L 21 2 L 19 2 L 19 1 L 20 1 z M 17 1 L 18 1 L 18 2 L 17 2 z M 9 2 L 10 2 L 10 3 L 9 3 z M 18 2 L 19 2 L 19 3 L 18 3 z M 20 3 L 21 3 L 21 4 L 20 4 z M 18 4 L 20 4 L 20 5 L 19 5 L 19 7 L 18 7 L 18 6 L 17 6 L 17 5 L 18 5 z M 9 5 L 10 5 L 10 6 L 9 6 z M 20 5 L 21 5 L 21 7 L 20 7 z M 8 6 L 9 6 L 9 7 L 10 7 L 10 9 L 9 9 L 9 8 L 8 8 z M 10 6 L 11 6 L 11 7 L 10 7 z M 0 8 L 2 8 L 2 9 L 3 9 L 3 10 L 4 10 L 4 11 L 5 11 L 5 10 L 4 10 L 4 9 L 3 9 L 3 8 L 5 8 L 5 9 L 6 9 L 6 10 L 7 10 L 7 11 L 6 11 L 6 12 L 5 12 L 5 14 L 7 14 L 7 15 L 5 15 L 5 16 L 8 16 L 8 17 L 4 17 L 4 19 L 5 19 L 5 18 L 7 18 L 7 19 L 6 19 L 6 20 L 5 20 L 5 21 L 4 21 L 4 20 L 2 20 L 2 21 L 0 21 L 0 16 L 1 16 L 1 10 L 0 10 zM 2 12 L 4 12 L 4 14 L 2 14 z M 2 15 L 4 15 L 4 16 L 3 16 L 3 17 L 2 17 z M 2 18 L 3 18 L 3 19 L 2 19 z M 6 8 L 7 8 L 7 9 L 6 9 z M 22 8 L 23 8 L 23 9 L 22 9 z M 28 8 L 29 8 L 29 9 L 28 9 z M 7 9 L 8 9 L 8 10 L 7 10 z M 10 9 L 11 9 L 11 10 L 10 10 z M 23 9 L 25 9 L 25 10 L 23 10 z M 26 9 L 28 9 L 28 10 L 27 10 L 27 11 L 26 11 z M 8 10 L 10 10 L 10 11 L 9 11 L 9 12 L 11 12 L 11 15 L 10 15 L 10 16 L 12 16 L 12 15 L 14 15 L 14 14 L 15 14 L 15 13 L 18 13 L 18 12 L 19 12 L 19 14 L 18 14 L 18 15 L 15 15 L 15 16 L 13 16 L 13 17 L 12 17 L 12 18 L 11 18 L 11 17 L 10 17 L 10 18 L 9 18 L 9 15 L 8 15 L 8 14 L 9 14 L 9 13 L 6 13 L 6 12 L 7 12 L 7 11 L 8 11 z M 12 10 L 13 10 L 13 11 L 12 11 z M 20 10 L 21 10 L 21 11 L 20 11 z M 22 10 L 23 10 L 23 11 L 22 11 z M 21 11 L 22 11 L 22 12 L 21 12 z M 24 11 L 26 11 L 26 12 L 24 12 z M 28 11 L 29 11 L 29 16 L 28 16 L 28 14 L 27 14 L 27 16 L 26 16 L 26 14 L 25 14 L 25 15 L 24 15 L 24 17 L 25 17 L 25 18 L 26 18 L 26 19 L 27 19 L 27 20 L 28 20 L 28 21 L 26 21 L 26 23 L 25 23 L 25 20 L 23 20 L 23 19 L 24 19 L 24 18 L 23 18 L 23 16 L 22 16 L 22 15 L 23 15 L 23 14 L 22 14 L 22 12 L 24 12 L 24 13 L 28 13 z M 20 12 L 21 12 L 21 13 L 20 13 z M 12 13 L 13 13 L 13 14 L 12 14 z M 19 14 L 20 14 L 20 15 L 19 15 z M 15 16 L 17 16 L 17 17 L 16 17 L 16 19 L 14 19 L 14 25 L 15 25 L 15 24 L 16 24 L 16 25 L 17 25 L 17 27 L 16 27 L 16 28 L 15 28 L 15 26 L 14 26 L 14 27 L 12 27 L 12 28 L 11 28 L 11 26 L 13 26 L 13 25 L 11 25 L 11 24 L 10 24 L 10 23 L 11 23 L 11 22 L 12 22 L 12 23 L 13 23 L 13 22 L 12 22 L 12 21 L 13 21 L 13 19 L 12 19 L 12 18 L 15 18 z M 25 16 L 26 16 L 26 17 L 25 17 z M 18 17 L 21 17 L 21 18 L 20 18 L 20 19 L 21 19 L 21 20 L 19 20 L 19 19 L 17 19 L 17 18 L 18 18 z M 26 17 L 28 17 L 28 18 L 26 18 z M 22 18 L 23 18 L 23 19 L 22 19 z M 28 18 L 29 18 L 29 19 L 28 19 z M 8 19 L 10 19 L 10 20 L 9 20 L 9 22 L 8 22 z M 11 19 L 12 19 L 12 21 L 11 21 L 11 22 L 10 22 L 10 20 L 11 20 z M 6 20 L 7 20 L 7 21 L 6 21 z M 16 20 L 18 20 L 18 21 L 16 21 z M 15 21 L 16 21 L 16 23 L 15 23 z M 18 21 L 19 21 L 19 22 L 18 22 z M 17 22 L 18 22 L 18 23 L 19 23 L 19 22 L 20 22 L 20 25 L 19 25 L 19 24 L 17 24 z M 27 23 L 28 23 L 28 24 L 29 24 L 29 28 L 28 28 L 28 27 L 27 27 L 27 28 L 26 28 L 26 29 L 24 29 L 24 28 L 25 28 L 25 27 L 26 27 L 26 26 L 28 26 L 28 25 L 27 25 z M 8 24 L 9 24 L 9 25 L 11 25 L 11 26 L 10 26 L 10 27 L 9 27 L 9 26 L 8 26 z M 25 24 L 26 24 L 26 25 L 25 25 z M 18 25 L 19 25 L 19 26 L 18 26 z M 21 26 L 22 26 L 22 28 L 23 28 L 23 29 L 19 29 L 19 28 L 21 28 z M 23 26 L 25 26 L 25 27 L 24 27 L 24 28 L 23 28 z M 8 27 L 9 27 L 9 28 L 11 28 L 11 29 L 8 29 z M 14 28 L 15 28 L 15 29 L 14 29 z"></path><path d="M0,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M22,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM23,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM24,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M0,22h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,23h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,24h3h0v0v3v0h0h-3h0v0v-3v0h0zM20,20h5h0v0v5v0h0h-5h0v0v-5v0h0zM21,21h3h0v0v3v0h0h-3h0v0v-3v0h0zM22,22h1h0v0v1v0h0h-1h0v0v-1v0h0z" fill-rule="evenodd" fill-opacity="1" fill="rgb(0, 0, 0)"></path></svg>'),j0=()=>F0.cloneNode(!0),q0=h("<div><div></div></div>"),U0=h('<svg viewBox="0 0 100 100"></svg>'),K0=()=>{const[e,n]=p(!1);return(()=>{const t=q0.cloneNode(!0),s=t.firstChild;return d(t,a(Y0,{get class(){return M.download},get svgClass(){return M.mainSvg},setSharing:n,sharing:e}),s),d(s,a(W,{get when(){return e()},get fallback(){return(()=>{const L=U0.cloneNode(!0);return d(L,a(g0,{}),null),d(L,a(E0,{}),null),d(L,a(R0,{}),null),d(L,a(D0,{}),null),d(L,a(V0,{}),null),g(()=>i(L,"class",M.mainSvg)),L})()},get children(){return a(j0,{})}})),g(L=>{const r=M.mainArea,o=M.renderBox;return r!==L._v$&&(t.className=L._v$=r),o!==L._v$2&&(s.className=L._v$2=o),L},{_v$:void 0,_v$2:void 0}),t})()};q(()=>a(l0,{get children(){return a(K0,{})}}),document.getElementById("root"));
