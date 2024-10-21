import{aj as E,aM as He,r as a,a4 as W,_,k as fe,a9 as x,aC as Ce,E as qe,a8 as g,aB as Je,b0 as Ze,ai as et,P as tt}from"./index-CCnGCN1I.js";const rt=new E("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),at=new E("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),nt=new E("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),it=new E("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),st=new E("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ot=new E("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),ft=new E("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),lt=new E("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ut={"slide-up":{inKeyframes:rt,outKeyframes:at},"slide-down":{inKeyframes:nt,outKeyframes:it},"slide-left":{inKeyframes:st,outKeyframes:ot},"slide-right":{inKeyframes:ft,outKeyframes:lt}},_t=(e,s)=>{const{antCls:l}=e,i=`${l}-${s}`,{inKeyframes:f,outKeyframes:n}=ut[s];return[He(i,f,n,e.motionDurationMid),{[`
      ${i}-enter,
      ${i}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${i}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var ct=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],b=void 0;function dt(e,s){var l=e.prefixCls,i=e.invalidate,f=e.item,n=e.renderItem,u=e.responsive,S=e.responsiveDisabled,d=e.registerSize,C=e.itemKey,I=e.className,Q=e.style,H=e.children,q=e.display,m=e.order,U=e.component,K=U===void 0?"div":U,D=W(e,ct),v=u&&!q;function X(p){d(C,p)}a.useEffect(function(){return function(){X(null)}},[]);var J=n&&f!==b?n(f):H,N;i||(N={opacity:v?0:1,height:v?0:b,overflowY:v?"hidden":b,order:u?m:b,pointerEvents:v?"none":b,position:v?"absolute":b});var A={};v&&(A["aria-hidden"]=!0);var R=a.createElement(K,_({className:fe(!i&&l,I),style:x(x({},N),Q)},A,D,{ref:s}),J);return u&&(R=a.createElement(Ce,{onResize:function(Z){var Y=Z.offsetWidth;X(Y)},disabled:S},R)),R}var $=a.forwardRef(dt);$.displayName="Item";function mt(e){if(typeof MessageChannel>"u")qe(e);else{var s=new MessageChannel;s.port1.onmessage=function(){return e()},s.port2.postMessage(void 0)}}function vt(){var e=a.useRef(null),s=function(i){e.current||(e.current=[],mt(function(){Ze.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(i)};return s}function P(e,s){var l=a.useState(s),i=g(l,2),f=i[0],n=i[1],u=Je(function(S){e(function(){n(S)})});return[f,u]}var B=et.createContext(null),yt=["component"],gt=["className"],St=["className"],pt=function(s,l){var i=a.useContext(B);if(!i){var f=s.component,n=f===void 0?"div":f,u=W(s,yt);return a.createElement(n,_({},u,{ref:l}))}var S=i.className,d=W(i,gt),C=s.className,I=W(s,St);return a.createElement(B.Provider,{value:null},a.createElement($,_({ref:l,className:fe(S,C)},d,I)))},Ie=a.forwardRef(pt);Ie.displayName="RawItem";var Et=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Ne="responsive",Oe="invalidate";function Rt(e){return"+ ".concat(e.length," ...")}function ht(e,s){var l=e.prefixCls,i=l===void 0?"rc-overflow":l,f=e.data,n=f===void 0?[]:f,u=e.renderItem,S=e.renderRawItem,d=e.itemKey,C=e.itemWidth,I=C===void 0?10:C,Q=e.ssr,H=e.style,q=e.className,m=e.maxCount,U=e.renderRest,K=e.renderRawRest,D=e.suffix,v=e.component,X=v===void 0?"div":v,J=e.itemComponent,N=e.onVisibleChange,A=W(e,Et),R=Q==="full",p=vt(),Z=P(p,null),Y=g(Z,2),F=Y[0],be=Y[1],h=F||0,xe=P(p,new Map),le=g(xe,2),ue=le[0],Ke=le[1],De=P(p,0),ce=g(De,2),Me=ce[0],ze=ce[1],Pe=P(p,0),de=g(Pe,2),L=de[0],We=de[1],$e=P(p,0),me=g($e,2),T=me[0],Ue=me[1],Xe=a.useState(null),ve=g(Xe,2),ee=ve[0],ye=ve[1],Ae=a.useState(null),ge=g(Ae,2),V=ge[0],Ye=ge[1],O=a.useMemo(function(){return V===null&&R?Number.MAX_SAFE_INTEGER:V||0},[V,F]),Fe=a.useState(!1),Se=g(Fe,2),Le=Se[0],Te=Se[1],te="".concat(i,"-item"),pe=Math.max(Me,L),re=m===Ne,y=n.length&&re,Ee=m===Oe,Ve=y||typeof m=="number"&&n.length>m,w=a.useMemo(function(){var t=n;return y?F===null&&R?t=n:t=n.slice(0,Math.min(n.length,h/I)):typeof m=="number"&&(t=n.slice(0,m)),t},[n,I,F,m,y]),ae=a.useMemo(function(){return y?n.slice(O+1):n.slice(w.length)},[n,w,y,O]),k=a.useCallback(function(t,r){var o;return typeof d=="function"?d(t):(o=d&&(t==null?void 0:t[d]))!==null&&o!==void 0?o:r},[d]),ke=a.useCallback(u||function(t){return t},[u]);function j(t,r,o){V===t&&(r===void 0||r===ee)||(Ye(t),o||(Te(t<n.length-1),N==null||N(t)),r!==void 0&&ye(r))}function je(t,r){be(r.clientWidth)}function Re(t,r){Ke(function(o){var c=new Map(o);return r===null?c.delete(t):c.set(t,r),c})}function Be(t,r){We(r),ze(L)}function Ge(t,r){Ue(r)}function ne(t){return ue.get(k(w[t],t))}tt(function(){if(h&&typeof pe=="number"&&w){var t=T,r=w.length,o=r-1;if(!r){j(0,null);return}for(var c=0;c<r;c+=1){var z=ne(c);if(R&&(z=z||0),z===void 0){j(c-1,void 0,!0);break}if(t+=z,o===0&&t<=h||c===o-1&&t+ne(o)<=h){j(o,null);break}else if(t+pe>h){j(c-1,t-z-T+L);break}}D&&ne(0)+T>h&&ye(null)}},[h,ue,L,T,k,w]);var he=Le&&!!ae.length,we={};ee!==null&&y&&(we={position:"absolute",left:ee,top:0});var M={prefixCls:te,responsive:y,component:J,invalidate:Ee},Qe=S?function(t,r){var o=k(t,r);return a.createElement(B.Provider,{key:o,value:x(x({},M),{},{order:r,item:t,itemKey:o,registerSize:Re,display:r<=O})},S(t,r))}:function(t,r){var o=k(t,r);return a.createElement($,_({},M,{order:r,key:o,item:t,renderItem:ke,itemKey:o,registerSize:Re,display:r<=O}))},ie,_e={order:he?O:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:Be,display:he};if(K)K&&(ie=a.createElement(B.Provider,{value:x(x({},M),_e)},K(ae)));else{var se=U||Rt;ie=a.createElement($,_({},M,_e),typeof se=="function"?se(ae):se)}var oe=a.createElement(X,_({className:fe(!Ee&&i,q),style:H,ref:s},A),w.map(Qe),Ve?ie:null,D&&a.createElement($,_({},M,{responsive:re,responsiveDisabled:!y,order:O,className:"".concat(te,"-suffix"),registerSize:Ge,display:!0,style:we}),D));return re&&(oe=a.createElement(Ce,{onResize:je,disabled:!y},oe)),oe}var G=a.forwardRef(ht);G.displayName="Overflow";G.Item=Ie;G.RESPONSIVE=Ne;G.INVALIDATE=Oe;export{G as F,nt as a,at as b,it as c,_t as i,rt as s};
