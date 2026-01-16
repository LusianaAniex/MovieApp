import{j as s,a as Y,r as u,R as G}from"./index-Fcc6iFca.js";import{u as C}from"./useQuery-Dx68ktIu.js";import{f as Z,h as X,c as ee,i as te,b as T,B as se,I as ae,V as re}from"./VideoModal-DFfa69Df.js";import{u as ie}from"./useFavorite-wLsoBsBk.js";import"./useBaseQuery-CyO_0kK8.js";const oe=()=>s.jsxs("div",{className:"animate-pulse",children:[s.jsx("div",{className:"relative w-full h-[400px] md:h-[500px] bg-gray-800",children:s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"})}),s.jsxs("div",{className:"px-4 sm:px-8 lg:px-12 xl:px-16 py-8",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[s.jsx("div",{className:"md:col-span-1",children:s.jsx("div",{className:"aspect-[2/3] bg-gray-700 rounded-lg"})}),s.jsxs("div",{className:"md:col-span-2 space-y-4",children:[s.jsx("div",{className:"h-10 bg-gray-700 rounded w-2/3"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("div",{className:"h-6 bg-gray-700 rounded w-20"}),s.jsx("div",{className:"h-6 bg-gray-700 rounded w-24"}),s.jsx("div",{className:"h-6 bg-gray-700 rounded w-16"})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("div",{className:"h-8 bg-gray-700 rounded-full w-20"}),s.jsx("div",{className:"h-8 bg-gray-700 rounded-full w-24"}),s.jsx("div",{className:"h-8 bg-gray-700 rounded-full w-20"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"h-6 bg-gray-700 rounded w-32 mb-2"}),s.jsx("div",{className:"h-4 bg-gray-700 rounded w-full"}),s.jsx("div",{className:"h-4 bg-gray-700 rounded w-full"}),s.jsx("div",{className:"h-4 bg-gray-700 rounded w-3/4"})]}),s.jsxs("div",{className:"flex gap-3 pt-4",children:[s.jsx("div",{className:"h-12 w-40 bg-gray-700 rounded-full"}),s.jsx("div",{className:"h-12 w-12 bg-gray-700 rounded-full"})]})]})]}),s.jsxs("div",{className:"mt-12",children:[s.jsx("div",{className:"h-8 bg-gray-700 rounded w-32 mb-6"}),s.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4",children:[...Array(6)].map((e,t)=>s.jsxs("div",{children:[s.jsx("div",{className:"aspect-[2/3] bg-gray-700 rounded-lg mb-2"}),s.jsx("div",{className:"h-4 bg-gray-700 rounded w-3/4 mb-1"}),s.jsx("div",{className:"h-3 bg-gray-700 rounded w-1/2"})]},t))})]})]})]}),le=()=>{const{id:e}=Y(),t=Number(e),a=C({queryKey:["movie",t],queryFn:()=>Z(t),enabled:!!t}),o=C({queryKey:["movieCredits",t],queryFn:()=>X(t),enabled:!!t,select:d=>({cast:d.cast.slice(0,5),crew:d.crew.slice(0,5)})}),i=C({queryKey:["movieTrailer",t],queryFn:()=>ee(t),enabled:!!t}),l=C({queryKey:["genres"],queryFn:te,select:d=>d.genres}),r=a.isLoading||o.isLoading||i.isLoading||l.isLoading,n=a.error?.message||o.error?.message||i.error?.message||l.error?.message||null;return{loading:r,error:n,movie:a.data||null,trailerKey:i.data||null,cast:o.data?.cast||[],crew:o.data?.crew||[],genres:l.data||[]}},R=({name:e,role:t,profilePath:a})=>s.jsxs("div",{className:"flex rounded-xl overflow-hidden w-full md:w-[360px] h-[104px]",children:[a?s.jsx("img",{src:T(a),alt:e,className:"w-[69px] h-[104px] object-contain rounded-lg flex-shrink-0"}):s.jsx("img",{src:"/icon-photo-blank.svg",alt:"No photo available",className:"w-[69px] h-[104px] object-contain rounded-lg flex-shrink-0"}),s.jsxs("div",{className:"flex flex-col justify-center p-4",children:[s.jsx("div",{className:"font-semibold text-base text-white",children:e}),s.jsx("div",{className:"text-sm text-neutral-400 mt-1",children:t})]})]});let ne={data:""},de=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ne},ce=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,me=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,w=(e,t)=>{let a="",o="",i="";for(let l in e){let r=e[l];l[0]=="@"?l[1]=="i"?a=l+" "+r+";":o+=l[1]=="f"?w(r,l):l+"{"+w(r,l[1]=="k"?"":t)+"}":typeof r=="object"?o+=w(r,t?t.replace(/([^,])+/g,n=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):l):r!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=w.p?w.p(l,r):l+":"+r+";")}return a+(t&&i?t+"{"+i+"}":i)+o},y={},H=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+H(e[a]);return t}return e},ue=(e,t,a,o,i)=>{let l=H(e),r=y[l]||(y[l]=(d=>{let m=0,p=11;for(;m<d.length;)p=101*p+d.charCodeAt(m++)>>>0;return"go"+p})(l));if(!y[r]){let d=l!==e?e:(m=>{let p,c,g=[{}];for(;p=ce.exec(m.replace(me,""));)p[4]?g.shift():p[3]?(c=p[3].replace(S," ").trim(),g.unshift(g[0][c]=g[0][c]||{})):g[0][p[1]]=p[2].replace(S," ").trim();return g[0]})(e);y[r]=w(i?{["@keyframes "+r]:d}:d,a?"":"."+r)}let n=a&&y.g?y.g:null;return a&&(y.g=y[r]),((d,m,p,c)=>{c?m.data=m.data.replace(c,d):m.data.indexOf(d)===-1&&(m.data=p?d+m.data:m.data+d)})(y[r],t,o,n),r},pe=(e,t,a)=>e.reduce((o,i,l)=>{let r=t[l];if(r&&r.call){let n=r(a),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;r=d?"."+d:n&&typeof n=="object"?n.props?"":w(n,""):n===!1?"":n}return o+i+(r??"")},"");function M(e){let t=this||{},a=e.call?e(t.p):e;return ue(a.unshift?a.raw?pe(a,[].slice.call(arguments,1),t.p):a.reduce((o,i)=>Object.assign(o,i&&i.call?i(t.p):i),{}):a,de(t.target),t.g,t.o,t.k)}let K,I,P;M.bind({g:1});let j=M.bind({k:1});function ge(e,t,a,o){w.p=t,K=e,I=a,P=o}function N(e,t){let a=this||{};return function(){let o=arguments;function i(l,r){let n=Object.assign({},l),d=n.className||i.className;a.p=Object.assign({theme:I&&I()},n),a.o=/ *go\d+/.test(d),n.className=M.apply(a,o)+(d?" "+d:"");let m=e;return e[0]&&(m=n.as||e,delete n.as),P&&m[0]&&P(n),K(m,n)}return t?t(i):i}}var xe=e=>typeof e=="function",A=(e,t)=>xe(e)?e(t):e,fe=(()=>{let e=0;return()=>(++e).toString()})(),W=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),he=20,z="default",Q=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return Q(e,{type:e.toasts.find(r=>r.id===o.id)?1:0,toast:o});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let l=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+l}))}}},O=[],B={toasts:[],pausedAt:void 0,settings:{toastLimit:he}},b={},J=(e,t=z)=>{b[t]=Q(b[t]||B,e),O.forEach(([a,o])=>{a===t&&o(b[t])})},U=e=>Object.keys(b).forEach(t=>J(e,t)),ve=e=>Object.keys(b).find(t=>b[t].toasts.some(a=>a.id===e)),_=(e=z)=>t=>{J(t,e)},be={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ye=(e={},t=z)=>{let[a,o]=u.useState(b[t]||B),i=u.useRef(b[t]);u.useEffect(()=>(i.current!==b[t]&&o(b[t]),O.push([t,o]),()=>{let r=O.findIndex(([n])=>n===t);r>-1&&O.splice(r,1)}),[t]);let l=a.toasts.map(r=>{var n,d,m;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((n=e[r.type])==null?void 0:n.removeDelay)||e?.removeDelay,duration:r.duration||((d=e[r.type])==null?void 0:d.duration)||e?.duration||be[r.type],style:{...e.style,...(m=e[r.type])==null?void 0:m.style,...r.style}}});return{...a,toasts:l}},je=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||fe()}),E=e=>(t,a)=>{let o=je(t,e,a);return _(o.toasterId||ve(o.id))({type:2,toast:o}),o.id},f=(e,t)=>E("blank")(e,t);f.error=E("error");f.success=E("success");f.loading=E("loading");f.custom=E("custom");f.dismiss=(e,t)=>{let a={type:3,toastId:e};t?_(t)(a):U(a)};f.dismissAll=e=>f.dismiss(void 0,e);f.remove=(e,t)=>{let a={type:4,toastId:e};t?_(t)(a):U(a)};f.removeAll=e=>f.remove(void 0,e);f.promise=(e,t,a)=>{let o=f.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let l=t.success?A(t.success,i):void 0;return l?f.success(l,{id:o,...a,...a?.success}):f.dismiss(o),i}).catch(i=>{let l=t.error?A(t.error,i):void 0;l?f.error(l,{id:o,...a,...a?.error}):f.dismiss(o)}),e};var we=1e3,Ne=(e,t="default")=>{let{toasts:a,pausedAt:o}=ye(e,t),i=u.useRef(new Map).current,l=u.useCallback((c,g=we)=>{if(i.has(c))return;let h=setTimeout(()=>{i.delete(c),r({type:4,toastId:c})},g);i.set(c,h)},[]);u.useEffect(()=>{if(o)return;let c=Date.now(),g=a.map(h=>{if(h.duration===1/0)return;let k=(h.duration||0)+h.pauseDuration-(c-h.createdAt);if(k<0){h.visible&&f.dismiss(h.id);return}return setTimeout(()=>f.dismiss(h.id,t),k)});return()=>{g.forEach(h=>h&&clearTimeout(h))}},[a,o,t]);let r=u.useCallback(_(t),[t]),n=u.useCallback(()=>{r({type:5,time:Date.now()})},[r]),d=u.useCallback((c,g)=>{r({type:1,toast:{id:c,height:g}})},[r]),m=u.useCallback(()=>{o&&r({type:6,time:Date.now()})},[o,r]),p=u.useCallback((c,g)=>{let{reverseOrder:h=!1,gutter:k=8,defaultPosition:x}=g||{},$=a.filter(v=>(v.position||x)===(c.position||x)&&v.height),V=$.findIndex(v=>v.id===c.id),L=$.filter((v,F)=>F<V&&v.visible).length;return $.filter(v=>v.visible).slice(...h?[L+1]:[0,L]).reduce((v,F)=>v+(F.height||0)+k,0)},[a]);return u.useEffect(()=>{a.forEach(c=>{if(c.dismissed)l(c.id,c.removeDelay);else{let g=i.get(c.id);g&&(clearTimeout(g),i.delete(c.id))}})},[a,l]),{toasts:a,handlers:{updateHeight:d,startPause:n,endPause:m,calculateOffset:p}}},ke=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$e=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ee=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ce=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ke} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$e} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ee} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,De=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Oe=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${De} 1s linear infinite;
`,Ae=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Me=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,_e=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Me} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Fe=N("div")`
  position: absolute;
`,Te=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ie=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pe=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ie} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ze=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(Pe,null,t):t:a==="blank"?null:u.createElement(Te,null,u.createElement(Oe,{...o}),a!=="loading"&&u.createElement(Fe,null,a==="error"?u.createElement(Ce,{...o}):u.createElement(_e,{...o})))},Le=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Re=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Se="0%{opacity:0;} 100%{opacity:1;}",qe="0%{opacity:1;} 100%{opacity:0;}",He=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ke=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,We=(e,t)=>{let a=e.includes("top")?1:-1,[o,i]=W()?[Se,qe]:[Le(a),Re(a)];return{animation:t?`${j(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Qe=u.memo(({toast:e,position:t,style:a,children:o})=>{let i=e.height?We(e.position||t||"top-center",e.visible):{opacity:0},l=u.createElement(ze,{toast:e}),r=u.createElement(Ke,{...e.ariaProps},A(e.message,e));return u.createElement(He,{className:e.className,style:{...i,...a,...e.style}},typeof o=="function"?o({icon:l,message:r}):u.createElement(u.Fragment,null,l,r))});ge(u.createElement);var Be=({id:e,className:t,style:a,onHeightUpdate:o,children:i})=>{let l=u.useCallback(r=>{if(r){let n=()=>{let d=r.getBoundingClientRect().height;o(e,d)};n(),new MutationObserver(n).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:l,className:t,style:a},i)},Je=(e,t)=>{let a=e.includes("top"),o=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:W()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...o,...i}},Ue=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,D=16,Ve=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:i,toasterId:l,containerStyle:r,containerClassName:n})=>{let{toasts:d,handlers:m}=Ne(a,l);return u.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:D,left:D,right:D,bottom:D,pointerEvents:"none",...r},className:n,onMouseEnter:m.startPause,onMouseLeave:m.endPause},d.map(p=>{let c=p.position||t,g=m.calculateOffset(p,{reverseOrder:e,gutter:o,defaultPosition:t}),h=Je(c,g);return u.createElement(Be,{id:p.id,key:p.id,onHeightUpdate:m.updateHeight,className:p.visible?Ue:"",style:h},p.type==="custom"?A(p.message,p):i?i(p):u.createElement(Qe,{toast:p,position:c}))}))};const q={mobile:300,desktop:520},Ye=()=>s.jsx(Ve,{position:"top-center",toastOptions:{duration:2e3,className:"!px-0 !py-0",style:{maxWidth:"100%",width:"auto",background:"transparent",boxShadow:"none"},success:{style:{background:"transparent"},icon:null},error:{style:{background:"transparent"},icon:null}},children:e=>{const a=typeof window<"u"&&window.innerWidth<640?q.mobile:q.desktop,o=typeof e.message=="string"&&e.message.includes("added to favorites");return s.jsxs("div",{className:`
              ${e.visible?"animate-enter":"animate-leave"}
              bg-black/60 backdrop-blur-md rounded-md
              flex items-center justify-center gap-3 px-4 py-3 shadow-lg
              border border-white/10 translate-y-30
            `,style:{width:a},children:[s.jsx("img",{src:o?"/icon-check.svg":"/icon-cross.svg",alt:o?"Added to favorites":"Removed from favorites",className:"w-6 h-6"}),s.jsx("p",{className:"text-white text-sm font-medium text-center",children:typeof e.message=="string"?e.message:""})]})}}),Ge=["January","February","March","April","May","June","July","August","September","October","November","December"];function Ze(e){const t=new Date(e);return isNaN(t.getTime())?e:`${t.getDate()} ${Ge[t.getMonth()]} ${t.getFullYear()}`}const rt=()=>{const[e,t]=G.useState(!1),{loading:a,error:o,movie:i,trailerKey:l,cast:r,crew:n,genres:d}=le(),{isFavorite:m,toggleFavorite:p}=ie();if(a)return s.jsx(oe,{});if(o)return s.jsx("div",{className:"text-center py-20 text-red-500",children:o});if(!i)return s.jsx("div",{className:"text-center py-20",children:"Movie not found."});let c=[];i&&(Array.isArray(i.genres)&&i.genres.length>0?c=i.genres.map(x=>x.name):i.genre_ids&&(c=i.genre_ids.map(x=>d.find($=>$.id===x)?.name||"").filter(Boolean)));const g=13,h=()=>{l&&t(!0)},k=()=>{const x=m(i.id);p(i),f(`${i.title} ${x?"removed from":"added to"} favorites`)};return s.jsxs("div",{className:"min-h-screen bg-base-black text-white flex flex-col",children:[s.jsx(Ye,{}),s.jsxs("div",{className:"relative w-full h-96 md:h-[32rem] lg:h-[40rem]",children:[s.jsx("img",{src:T(i.backdrop_path,"w1280"),alt:i.title,className:"w-full h-full object-cover object-[center_top] md:object-[center_top] lg:object-[center_top] object-position-top-center",style:{objectPosition:"top center"}}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"})]}),s.jsxs("div",{className:" -mt-40 z-10 relative px-4 sm:px-15 lg:px-25 xl:px-35 pb-12",children:[s.jsxs("div",{className:"grid grid-cols-[120px_1fr] md:grid-cols-3 gap-4",children:[s.jsx("div",{className:"row-span-2 md:col-span-1",children:s.jsx("div",{className:"rounded-xl max-w-80 overflow-hidden",children:s.jsx("img",{src:T(i.poster_path),alt:i.title,className:"w-full h-auto object-contain shadow-2xl md:max-h-120"})})}),s.jsx("div",{className:"md:col-span-2",children:s.jsxs("div",{className:"mb-6",children:[s.jsx("h1",{className:"text-2xl sm:text-4xl font-bold",children:i.title}),s.jsxs("div",{className:"flex items-center gap-2 text-lg font-medium mt-4",children:[s.jsx("img",{src:"/icon-calendar.svg",alt:"calendar",className:"w-6 h-6"}),s.jsx("span",{children:Ze(i.release_date)})]})]})}),s.jsxs("div",{className:"col-span-2 md:col-span-2 md:col-start-2",children:[s.jsx("div",{className:"mb-6",children:s.jsxs("div",{className:"flex items-center justify-between sm:justify-start gap-4",children:[s.jsx(se,{variant:"primary",icon:s.jsx(ae,{size:24}),onClick:h,disabled:!l,className:"rounded-full px-10 py-3 text-lg font-bold bg-primary-300 hover:bg-primary-400 border-none w-full! md:w-57! shadow-lg",style:{minWidth:0},children:"Watch Trailer"}),s.jsx("button",{"aria-label":m(i.id)?"Remove from favorites":"Add to favorites",className:`w-14 h-14 flex items-center justify-center rounded-full border-1 border-neutral-800 bg-neutral-950/60 shadow-lg transition-colors duration-200 ${m(i.id)?"bg-red-500/20 border-red-500":""}`,onClick:k,children:s.jsx("img",{src:m(i.id)?"/icon-fav-on.svg":"/icon-fav-off.svg",alt:"favorite",className:"w-6 h-6 cursor-pointer"})})]})}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8",children:[s.jsxs("div",{className:"bg-black/80 border border-neutral-700 rounded-2xl p-6 flex flex-col items-center shadow-md",children:[s.jsx("img",{src:"/icon-rating.svg",alt:"rating",className:"w-8 h-8 mb-2"}),s.jsx("div",{className:"text-neutral-300 text-base",children:"Rating"}),s.jsxs("div",{className:"text-xl font-semibold mt-1 text-center",children:[i.vote_average.toFixed(1),"/10"]})]}),s.jsxs("div",{className:"bg-black/80 border border-neutral-700 rounded-2xl p-6 flex flex-col items-center shadow-md",children:[s.jsx("img",{src:"/icon-genre.svg",alt:"genre",className:"w-8 h-8 mb-2"}),s.jsx("div",{className:"text-neutral-300 text-base ",children:"Genre"}),s.jsx("div",{className:"text-xl font-semibold mt-1 text-center",children:c[0]})]}),s.jsxs("div",{className:"bg-black/80 border border-neutral-700 rounded-2xl p-6 flex flex-col items-center shadow-md",children:[s.jsx("img",{src:"/icon-age-limit.svg",alt:"age limit",className:"w-8 h-8 mb-2"}),s.jsx("div",{className:"text-neutral-300 text-base",children:"Age Limit"}),s.jsx("div",{className:"text-xl font-semibold mt-1 text-center",children:g})]})]})]})]}),s.jsxs("div",{className:"mt-8",children:[s.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-4",children:"Overview"}),s.jsx("p",{className:"text-neutral-200 text-base leading-relaxed",children:i.overview})]}),s.jsxs("div",{className:"mt-12",children:[s.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-6",children:"Cast & Crew"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[r.map(x=>s.jsx(R,{...x,name:x.name,role:x.character,profilePath:x.profile_path},`${x.id}-${x.character}`)),n.map(x=>s.jsx(R,{name:x.name,role:x.job,profilePath:x.profile_path},x.id))]})]})]}),s.jsx(re,{isOpen:e,onClose:()=>t(!1),videoId:l||""})]})};export{rt as default};
