import{r as i,i as Q,h as Be,_ as Ce,f as B,S as Pe,K as st,c as x,T as lt,U as Fe,g as ve,b as le,V as ct,p as pe,s as De,v as M,x as dt,w as Ge,N as ut,y as We,H as ft,z as de,A as Ue,M as mt,W as gt,X as pt,Y as vt,Z as ht,$ as Le,L as bt,O as yt,d as V,j as I,a0 as xt}from"./index-CkZ-JNO8.js";import{p as $t,R as Ct,r as St,I as Ve}from"./index-Bmod1RRe.js";import{a as Nt,b as Et,R as Pt}from"./InfoCircleFilled-D4gZO3j3.js";import{R as wt}from"./omit-D7wq8p5F.js";import{a as we,R as Xe,C as It,T as Ne}from"./row-CZjkmHUf.js";import{e as Ot,P as jt,D as Rt,S as Lt}from"./index-5iRpS_5u.js";import"./Skeleton-Bxd_AWRt.js";import"./index-CUEl6V17.js";var qe=i.forwardRef(function(e,t){var o=e.prefixCls,n=e.style,a=e.className,r=e.duration,s=r===void 0?4.5:r,l=e.showProgress,c=e.pauseOnHover,g=c===void 0?!0:c,S=e.eventKey,d=e.content,p=e.closable,v=e.closeIcon,h=v===void 0?"x":v,b=e.props,y=e.onClick,R=e.onNoticeClose,w=e.times,C=e.hovering,P=i.useState(!1),O=Q(P,2),f=O[0],$=O[1],u=i.useState(0),m=Q(u,2),j=m[0],N=m[1],G=i.useState(0),T=Q(G,2),D=T[0],J=T[1],z=C||f,W=s>0&&l,K=function(){R(S)},ne=function(E){(E.key==="Enter"||E.code==="Enter"||E.keyCode===st.ENTER)&&K()};i.useEffect(function(){if(!z&&s>0){var _=Date.now()-D,E=setTimeout(function(){K()},s*1e3-D);return function(){g&&clearTimeout(E),J(Date.now()-_)}}},[s,z,w]),i.useEffect(function(){if(!z&&W&&(g||D===0)){var _=performance.now(),E,F=function Z(){cancelAnimationFrame(E),E=requestAnimationFrame(function(fe){var H=fe+D-_,Y=Math.min(H/(s*1e3),1);N(Y*100),Y<1&&Z()})};return F(),function(){g&&cancelAnimationFrame(E)}}},[s,D,z,W,w]);var k=i.useMemo(function(){return Be(p)==="object"&&p!==null?p:p?{closeIcon:h}:{}},[p,h]),ue=$t(k,!0),oe=100-(!j||j<0?0:j>100?100:j),X="".concat(o,"-notice");return i.createElement("div",Ce({},b,{ref:t,className:B(X,a,Pe({},"".concat(X,"-closable"),p)),style:n,onMouseEnter:function(E){var F;$(!0),b==null||(F=b.onMouseEnter)===null||F===void 0||F.call(b,E)},onMouseLeave:function(E){var F;$(!1),b==null||(F=b.onMouseLeave)===null||F===void 0||F.call(b,E)},onClick:y}),i.createElement("div",{className:"".concat(X,"-content")},d),p&&i.createElement("a",Ce({tabIndex:0,className:"".concat(X,"-close"),onKeyDown:ne,"aria-label":"Close"},ue,{onClick:function(E){E.preventDefault(),E.stopPropagation(),K()}}),k.closeIcon),W&&i.createElement("progress",{className:"".concat(X,"-progress"),max:"100",value:oe},oe+"%"))}),Ke=x.createContext({}),Mt=function(t){var o=t.children,n=t.classNames;return x.createElement(Ke.Provider,{value:{classNames:n}},o)},Me=8,ze=3,ke=16,zt=function(t){var o={offset:Me,threshold:ze,gap:ke};if(t&&Be(t)==="object"){var n,a,r;o.offset=(n=t.offset)!==null&&n!==void 0?n:Me,o.threshold=(a=t.threshold)!==null&&a!==void 0?a:ze,o.gap=(r=t.gap)!==null&&r!==void 0?r:ke}return[!!t,o]},kt=["className","style","classNames","styles"],At=function(t){var o=t.configList,n=t.placement,a=t.prefixCls,r=t.className,s=t.style,l=t.motion,c=t.onAllNoticeRemoved,g=t.onNoticeClose,S=t.stack,d=i.useContext(Ke),p=d.classNames,v=i.useRef({}),h=i.useState(null),b=Q(h,2),y=b[0],R=b[1],w=i.useState([]),C=Q(w,2),P=C[0],O=C[1],f=o.map(function(z){return{config:z,key:String(z.key)}}),$=zt(S),u=Q($,2),m=u[0],j=u[1],N=j.offset,G=j.threshold,T=j.gap,D=m&&(P.length>0||f.length<=G),J=typeof l=="function"?l(n):l;return i.useEffect(function(){m&&P.length>1&&O(function(z){return z.filter(function(W){return f.some(function(K){var ne=K.key;return W===ne})})})},[P,f,m]),i.useEffect(function(){var z;if(m&&v.current[(z=f[f.length-1])===null||z===void 0?void 0:z.key]){var W;R(v.current[(W=f[f.length-1])===null||W===void 0?void 0:W.key])}},[f,m]),x.createElement(lt,Ce({key:n,className:B(a,"".concat(a,"-").concat(n),p==null?void 0:p.list,r,Pe(Pe({},"".concat(a,"-stack"),!!m),"".concat(a,"-stack-expanded"),D)),style:s,keys:f,motionAppear:!0},J,{onAllRemoved:function(){c(n)}}),function(z,W){var K=z.config,ne=z.className,k=z.style,ue=z.index,oe=K,X=oe.key,_=oe.times,E=String(X),F=K,Z=F.className,fe=F.style,H=F.classNames,Y=F.styles,be=Fe(F,kt),ae=f.findIndex(function(xe){return xe.key===E}),ce={};if(m){var ee=f.length-1-(ae>-1?ae:ue-1),ie=n==="top"||n==="bottom"?"-50%":"0";if(ee>0){var me,re,te;ce.height=D?(me=v.current[E])===null||me===void 0?void 0:me.offsetHeight:y==null?void 0:y.offsetHeight;for(var ye=0,L=0;L<ee;L++){var A;ye+=((A=v.current[f[f.length-1-L].key])===null||A===void 0?void 0:A.offsetHeight)+T}var U=(D?ye:ee*N)*(n.startsWith("top")?1:-1),ge=!D&&y!==null&&y!==void 0&&y.offsetWidth&&(re=v.current[E])!==null&&re!==void 0&&re.offsetWidth?((y==null?void 0:y.offsetWidth)-N*2*(ee<3?ee:3))/((te=v.current[E])===null||te===void 0?void 0:te.offsetWidth):1;ce.transform="translate3d(".concat(ie,", ").concat(U,"px, 0) scaleX(").concat(ge,")")}else ce.transform="translate3d(".concat(ie,", 0, 0)")}return x.createElement("div",{ref:W,className:B("".concat(a,"-notice-wrapper"),ne,H==null?void 0:H.wrapper),style:ve(ve(ve({},k),ce),Y==null?void 0:Y.wrapper),onMouseEnter:function(){return O(function(se){return se.includes(E)?se:[].concat(le(se),[E])})},onMouseLeave:function(){return O(function(se){return se.filter(function(rt){return rt!==E})})}},x.createElement(qe,Ce({},be,{ref:function(se){ae>-1?v.current[E]=se:delete v.current[E]},prefixCls:a,classNames:H,styles:Y,className:B(Z,p==null?void 0:p.notice),style:fe,times:_,key:X,eventKey:X,onNoticeClose:g,hovering:m&&P.length>0})))})},Tt=i.forwardRef(function(e,t){var o=e.prefixCls,n=o===void 0?"rc-notification":o,a=e.container,r=e.motion,s=e.maxCount,l=e.className,c=e.style,g=e.onAllRemoved,S=e.stack,d=e.renderNotifications,p=i.useState([]),v=Q(p,2),h=v[0],b=v[1],y=function(m){var j,N=h.find(function(G){return G.key===m});N==null||(j=N.onClose)===null||j===void 0||j.call(N),b(function(G){return G.filter(function(T){return T.key!==m})})};i.useImperativeHandle(t,function(){return{open:function(m){b(function(j){var N=le(j),G=N.findIndex(function(J){return J.key===m.key}),T=ve({},m);if(G>=0){var D;T.times=(((D=j[G])===null||D===void 0?void 0:D.times)||0)+1,N[G]=T}else T.times=0,N.push(T);return s>0&&N.length>s&&(N=N.slice(-s)),N})},close:function(m){y(m)},destroy:function(){b([])}}});var R=i.useState({}),w=Q(R,2),C=w[0],P=w[1];i.useEffect(function(){var u={};h.forEach(function(m){var j=m.placement,N=j===void 0?"topRight":j;N&&(u[N]=u[N]||[],u[N].push(m))}),Object.keys(C).forEach(function(m){u[m]=u[m]||[]}),P(u)},[h]);var O=function(m){P(function(j){var N=ve({},j),G=N[m]||[];return G.length||delete N[m],N})},f=i.useRef(!1);if(i.useEffect(function(){Object.keys(C).length>0?f.current=!0:f.current&&(g==null||g(),f.current=!1)},[C]),!a)return null;var $=Object.keys(C);return ct.createPortal(i.createElement(i.Fragment,null,$.map(function(u){var m=C[u],j=i.createElement(At,{key:u,configList:m,placement:u,prefixCls:n,className:l==null?void 0:l(u),style:c==null?void 0:c(u),motion:r,onNoticeClose:y,onAllNoticeRemoved:O,stack:S});return d?d(j,{prefixCls:n,key:u}):j})),a)}),_t=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],Ht=function(){return document.body},Ae=0;function Bt(){for(var e={},t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return o.forEach(function(a){a&&Object.keys(a).forEach(function(r){var s=a[r];s!==void 0&&(e[r]=s)})}),e}function Ft(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,o=t===void 0?Ht:t,n=e.motion,a=e.prefixCls,r=e.maxCount,s=e.className,l=e.style,c=e.onAllRemoved,g=e.stack,S=e.renderNotifications,d=Fe(e,_t),p=i.useState(),v=Q(p,2),h=v[0],b=v[1],y=i.useRef(),R=i.createElement(Tt,{container:h,ref:y,prefixCls:a,motion:n,maxCount:r,className:s,style:l,onAllRemoved:c,stack:g,renderNotifications:S}),w=i.useState([]),C=Q(w,2),P=C[0],O=C[1],f=i.useMemo(function(){return{open:function(u){var m=Bt(d,u);(m.key===null||m.key===void 0)&&(m.key="rc-notification-".concat(Ae),Ae+=1),O(function(j){return[].concat(le(j),[{type:"open",config:m}])})},close:function(u){O(function(m){return[].concat(le(m),[{type:"close",key:u}])})},destroy:function(){O(function(u){return[].concat(le(u),[{type:"destroy"}])})}}},[]);return i.useEffect(function(){b(o())}),i.useEffect(function(){y.current&&P.length&&(P.forEach(function($){switch($.type){case"open":y.current.open($.config);break;case"close":y.current.close($.key);break;case"destroy":y.current.destroy();break}}),O(function($){return $.filter(function(u){return!P.includes(u)})}))},[P]),[f,R]}const Dt=e=>{const{componentCls:t,notificationMarginEdge:o,animationMaxHeight:n}=e,a=`${t}-notice`,r=new pe("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),s=new pe("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),l=new pe("antNotificationBottomFadeIn",{"0%":{bottom:e.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),c=new pe("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[t]:{[`&${t}-top, &${t}-bottom`]:{marginInline:0,[a]:{marginInline:"auto auto"}},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:s}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:l}},[`&${t}-topRight, &${t}-bottomRight`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:r}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[a]:{marginInlineEnd:"auto",marginInlineStart:0},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:c}}}}},Gt=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],Wt={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},Ut=(e,t)=>{const{componentCls:o}=e;return{[`${o}-${t}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[Wt[t]]:{value:0,_skip_check_:!0}}}}},Vt=e=>{const t={};for(let o=1;o<e.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${e.componentCls}-notice`]:{opacity:0,transition:`opacity ${e.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},Xt=e=>{const t={};for(let o=1;o<e.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={background:e.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)},qt=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${e.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},Vt(e))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},Xt(e))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${e.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:e.margin,width:"100%",insetInline:0,bottom:e.calc(e.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},Gt.map(o=>Ut(e,o)).reduce((o,n)=>Object.assign(Object.assign({},o),n),{}))},Ye=e=>{const{iconCls:t,componentCls:o,boxShadow:n,fontSizeLG:a,notificationMarginBottom:r,borderRadiusLG:s,colorSuccess:l,colorInfo:c,colorWarning:g,colorError:S,colorTextHeading:d,notificationBg:p,notificationPadding:v,notificationMarginEdge:h,notificationProgressBg:b,notificationProgressHeight:y,fontSize:R,lineHeight:w,width:C,notificationIconSize:P,colorText:O}=e,f=`${o}-notice`;return{position:"relative",marginBottom:r,marginInlineStart:"auto",background:p,borderRadius:s,boxShadow:n,[f]:{padding:v,width:C,maxWidth:`calc(100vw - ${M(e.calc(h).mul(2).equal())})`,overflow:"hidden",lineHeight:w,wordWrap:"break-word"},[`${f}-message`]:{marginBottom:e.marginXS,color:d,fontSize:a,lineHeight:e.lineHeightLG},[`${f}-description`]:{fontSize:R,color:O},[`${f}-closable ${f}-message`]:{paddingInlineEnd:e.paddingLG},[`${f}-with-icon ${f}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.calc(e.marginSM).add(P).equal(),fontSize:a},[`${f}-with-icon ${f}-description`]:{marginInlineStart:e.calc(e.marginSM).add(P).equal(),fontSize:R},[`${f}-icon`]:{position:"absolute",fontSize:P,lineHeight:1,[`&-success${t}`]:{color:l},[`&-info${t}`]:{color:c},[`&-warning${t}`]:{color:g},[`&-error${t}`]:{color:S}},[`${f}-close`]:Object.assign({position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},dt(e)),[`${f}-progress`]:{position:"absolute",display:"block",appearance:"none",WebkitAppearance:"none",inlineSize:`calc(100% - ${M(s)} * 2)`,left:{_skip_check_:!0,value:s},right:{_skip_check_:!0,value:s},bottom:0,blockSize:y,border:0,"&, &::-webkit-progress-bar":{borderRadius:s,backgroundColor:"rgba(0, 0, 0, 0.04)"},"&::-moz-progress-bar":{background:b},"&::-webkit-progress-value":{borderRadius:s,background:b}},[`${f}-btn`]:{float:"right",marginTop:e.marginSM}}},Kt=e=>{const{componentCls:t,notificationMarginBottom:o,notificationMarginEdge:n,motionDurationMid:a,motionEaseInOut:r}=e,s=`${t}-notice`,l=new pe("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[t]:Object.assign(Object.assign({},Ge(e)),{position:"fixed",zIndex:e.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${t}-hook-holder`]:{position:"relative"},[`${t}-fade-appear-prepare`]:{opacity:"0 !important"},[`${t}-fade-enter, ${t}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:r,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${t}-fade-leave`]:{animationTimingFunction:r,animationFillMode:"both",animationDuration:a,animationPlayState:"paused"},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationPlayState:"running"},[`${t}-fade-leave${t}-fade-leave-active`]:{animationName:l,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${s}-btn`]:{float:"left"}}})},{[t]:{[`${s}-wrapper`]:Object.assign({},Ye(e))}}]},Qe=e=>({zIndexPopup:e.zIndexPopupBase+ut+50,width:384}),Je=e=>{const t=e.paddingMD,o=e.paddingLG;return We(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:o,notificationIconSize:e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),notificationCloseButtonSize:e.calc(e.controlHeightLG).mul(.55).equal(),notificationMarginBottom:e.margin,notificationPadding:`${M(e.paddingMD)} ${M(e.paddingContentHorizontalLG)}`,notificationMarginEdge:e.marginLG,animationMaxHeight:150,notificationStackLayer:3,notificationProgressHeight:2,notificationProgressBg:`linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`})},Ze=De("Notification",e=>{const t=Je(e);return[Kt(t),Dt(t),qt(t)]},Qe),Yt=ft(["Notification","PurePanel"],e=>{const t=`${e.componentCls}-notice`,o=Je(e);return{[`${t}-pure-panel`]:Object.assign(Object.assign({},Ye(o)),{width:o.width,maxWidth:`calc(100vw - ${M(e.calc(o.notificationMarginEdge).mul(2).equal())})`,margin:0})}},Qe);var Qt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function Oe(e,t){return t===null||t===!1?null:t||i.createElement(wt,{className:`${e}-close-icon`})}const Jt={success:Nt,info:Et,error:Ct,warning:Pt},et=e=>{const{prefixCls:t,icon:o,type:n,message:a,description:r,btn:s,role:l="alert"}=e;let c=null;return o?c=i.createElement("span",{className:`${t}-icon`},o):n&&(c=i.createElement(Jt[n]||null,{className:B(`${t}-icon`,`${t}-icon-${n}`)})),i.createElement("div",{className:B({[`${t}-with-icon`]:c}),role:l},c,i.createElement("div",{className:`${t}-message`},a),i.createElement("div",{className:`${t}-description`},r),s&&i.createElement("div",{className:`${t}-btn`},s))},Zt=e=>{const{prefixCls:t,className:o,icon:n,type:a,message:r,description:s,btn:l,closable:c=!0,closeIcon:g,className:S}=e,d=Qt(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:p}=i.useContext(de),v=t||p("notification"),h=`${v}-notice`,b=Ue(v),[y,R,w]=Ze(v,b);return y(i.createElement("div",{className:B(`${h}-pure-panel`,R,o,w,b)},i.createElement(Yt,{prefixCls:v}),i.createElement(qe,Object.assign({},d,{prefixCls:v,eventKey:"pure",duration:null,closable:c,className:B({notificationClassName:S}),closeIcon:Oe(v,g),content:i.createElement(et,{prefixCls:h,icon:n,type:a,message:r,description:s,btn:l})}))))};function en(e,t,o){let n;switch(e){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":n={left:0,top:t,bottom:"auto"};break;case"topRight":n={right:0,top:t,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function tn(e){return{motionName:`${e}-fade`}}var nn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Te=24,on=4.5,an="topRight",rn=e=>{let{children:t,prefixCls:o}=e;const n=Ue(o),[a,r,s]=Ze(o,n);return a(x.createElement(Mt,{classNames:{list:B(r,s,n)}},t))},sn=(e,t)=>{let{prefixCls:o,key:n}=t;return x.createElement(rn,{prefixCls:o,key:n},e)},ln=x.forwardRef((e,t)=>{const{top:o,bottom:n,prefixCls:a,getContainer:r,maxCount:s,rtl:l,onAllRemoved:c,stack:g,duration:S,pauseOnHover:d=!0,showProgress:p}=e,{getPrefixCls:v,getPopupContainer:h,notification:b,direction:y}=i.useContext(de),[,R]=mt(),w=a||v("notification"),C=u=>en(u,o??Te,n??Te),P=()=>B({[`${w}-rtl`]:l??y==="rtl"}),O=()=>tn(w),[f,$]=Ft({prefixCls:w,style:C,className:P,motion:O,closable:!0,closeIcon:Oe(w),duration:S??on,getContainer:()=>(r==null?void 0:r())||(h==null?void 0:h())||document.body,maxCount:s,pauseOnHover:d,showProgress:p,onAllRemoved:c,renderNotifications:sn,stack:g===!1?!1:{threshold:typeof g=="object"?g==null?void 0:g.threshold:void 0,offset:8,gap:R.margin}});return x.useImperativeHandle(t,()=>Object.assign(Object.assign({},f),{prefixCls:w,notification:b})),$});function tt(e){const t=x.useRef(null);return gt(),[x.useMemo(()=>{const n=l=>{var c;if(!t.current)return;const{open:g,prefixCls:S,notification:d}=t.current,p=`${S}-notice`,{message:v,description:h,icon:b,type:y,btn:R,className:w,style:C,role:P="alert",closeIcon:O,closable:f}=l,$=nn(l,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),u=Oe(p,typeof O<"u"?O:d==null?void 0:d.closeIcon);return g(Object.assign(Object.assign({placement:(c=e==null?void 0:e.placement)!==null&&c!==void 0?c:an},$),{content:x.createElement(et,{prefixCls:p,icon:b,type:y,message:v,description:h,btn:R,role:P}),className:B(y&&`${p}-${y}`,w,d==null?void 0:d.className),style:Object.assign(Object.assign({},d==null?void 0:d.style),C),closeIcon:u,closable:f??!!u}))},r={open:n,destroy:l=>{var c,g;l!==void 0?(c=t.current)===null||c===void 0||c.close(l):(g=t.current)===null||g===void 0||g.destroy()}};return["success","info","warning","error"].forEach(l=>{r[l]=c=>n(Object.assign(Object.assign({},c),{type:l}))}),r},[]),x.createElement(ln,Object.assign({key:"notification-holder"},e,{ref:t}))]}function cn(e){return tt(e)}const dn=x.createContext({}),je=x.createContext({});je.Consumer;var nt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const un=e=>{var{prefixCls:t,className:o,avatar:n,title:a,description:r}=e,s=nt(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:l}=i.useContext(de),c=l("list",t),g=B(`${c}-item-meta`,o),S=x.createElement("div",{className:`${c}-item-meta-content`},a&&x.createElement("h4",{className:`${c}-item-meta-title`},a),r&&x.createElement("div",{className:`${c}-item-meta-description`},r));return x.createElement("div",Object.assign({},s,{className:g}),n&&x.createElement("div",{className:`${c}-item-meta-avatar`},n),(a||r)&&S)},fn=x.forwardRef((e,t)=>{const{prefixCls:o,children:n,actions:a,extra:r,styles:s,className:l,classNames:c,colStyle:g}=e,S=nt(e,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:d,itemLayout:p}=i.useContext(je),{getPrefixCls:v,list:h}=i.useContext(de),b=$=>{var u,m;return B((m=(u=h==null?void 0:h.item)===null||u===void 0?void 0:u.classNames)===null||m===void 0?void 0:m[$],c==null?void 0:c[$])},y=$=>{var u,m;return Object.assign(Object.assign({},(m=(u=h==null?void 0:h.item)===null||u===void 0?void 0:u.styles)===null||m===void 0?void 0:m[$]),s==null?void 0:s[$])},R=()=>{let $=!1;return i.Children.forEach(n,u=>{typeof u=="string"&&($=!0)}),$&&i.Children.count(n)>1},w=()=>p==="vertical"?!!r:!R(),C=v("list",o),P=a&&a.length>0&&x.createElement("ul",{className:B(`${C}-item-action`,b("actions")),key:"actions",style:y("actions")},a.map(($,u)=>x.createElement("li",{key:`${C}-item-action-${u}`},$,u!==a.length-1&&x.createElement("em",{className:`${C}-item-action-split`})))),O=d?"div":"li",f=x.createElement(O,Object.assign({},S,d?{}:{ref:t},{className:B(`${C}-item`,{[`${C}-item-no-flex`]:!w()},l)}),p==="vertical"&&r?[x.createElement("div",{className:`${C}-item-main`,key:"content"},n,P),x.createElement("div",{className:B(`${C}-item-extra`,b("extra")),key:"extra",style:y("extra")},r)]:[n,P,pt(r,{key:"extra"})]);return d?x.createElement(we,{ref:t,flex:1,style:g},f):f}),ot=fn;ot.Meta=un;const mn=e=>{const{listBorderedCls:t,componentCls:o,paddingLG:n,margin:a,itemPaddingSM:r,itemPaddingLG:s,marginLG:l,borderRadiusLG:c}=e;return{[t]:{border:`${M(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:c,[`${o}-header,${o}-footer,${o}-item`]:{paddingInline:n},[`${o}-pagination`]:{margin:`${M(a)} ${M(l)}`}},[`${t}${o}-sm`]:{[`${o}-item,${o}-header,${o}-footer`]:{padding:r}},[`${t}${o}-lg`]:{[`${o}-item,${o}-header,${o}-footer`]:{padding:s}}}},gn=e=>{const{componentCls:t,screenSM:o,screenMD:n,marginLG:a,marginSM:r,margin:s}=e;return{[`@media screen and (max-width:${n}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${o}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:r}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${M(s)}`}}}}}},pn=e=>{const{componentCls:t,antCls:o,controlHeight:n,minHeight:a,paddingSM:r,marginLG:s,padding:l,itemPadding:c,colorPrimary:g,itemPaddingSM:S,itemPaddingLG:d,paddingXS:p,margin:v,colorText:h,colorTextDescription:b,motionDurationSlow:y,lineWidth:R,headerBg:w,footerBg:C,emptyTextPadding:P,metaMarginBottom:O,avatarMarginRight:f,titleMarginBottom:$,descriptionFontSize:u}=e;return{[t]:Object.assign(Object.assign({},Ge(e)),{position:"relative","*":{outline:"none"},[`${t}-header`]:{background:w},[`${t}-footer`]:{background:C},[`${t}-header, ${t}-footer`]:{paddingBlock:r},[`${t}-pagination`]:{marginBlockStart:s,[`${o}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:c,color:h,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:f},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:h},[`${t}-item-meta-title`]:{margin:`0 0 ${M(e.marginXXS)} 0`,color:h,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:h,transition:`all ${y}`,"&:hover":{color:g}}},[`${t}-item-meta-description`]:{color:b,fontSize:u,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${M(p)}`,color:b,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:R,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${M(l)} 0`,color:b,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:P,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${o}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:v,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:s},[`${t}-item-meta`]:{marginBlockEnd:O,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:$,color:h,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:l,marginInlineStart:"auto","> li":{padding:`0 ${M(l)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${M(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${M(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${M(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${o}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${M(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:d},[`${t}-sm ${t}-item`]:{padding:S},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},vn=e=>({contentWidth:220,itemPadding:`${M(e.paddingContentVertical)} 0`,itemPaddingSM:`${M(e.paddingContentVerticalSM)} ${M(e.paddingContentHorizontal)}`,itemPaddingLG:`${M(e.paddingContentVerticalLG)} ${M(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize}),hn=De("List",e=>{const t=We(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[pn(t),mn(t),gn(t)]},vn);var bn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function Ie(e){var{pagination:t=!1,prefixCls:o,bordered:n=!1,split:a=!0,className:r,rootClassName:s,style:l,children:c,itemLayout:g,loadMore:S,grid:d,dataSource:p=[],size:v,header:h,footer:b,loading:y=!1,rowKey:R,renderItem:w,locale:C}=e,P=bn(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const O=t&&typeof t=="object"?t:{},[f,$]=i.useState(O.defaultCurrent||1),[u,m]=i.useState(O.defaultPageSize||10),{getPrefixCls:j,renderEmpty:N,direction:G,list:T}=i.useContext(de),D={current:1,total:0},J=L=>(A,U)=>{var ge;$(A),m(U),t&&((ge=t==null?void 0:t[L])===null||ge===void 0||ge.call(t,A,U))},z=J("onChange"),W=J("onShowSizeChange"),K=(L,A)=>{if(!w)return null;let U;return typeof R=="function"?U=R(L):R?U=L[R]:U=L.key,U||(U=`list-item-${A}`),i.createElement(i.Fragment,{key:U},w(L,A))},ne=()=>!!(S||t||b),k=j("list",o),[ue,oe,X]=hn(k);let _=y;typeof _=="boolean"&&(_={spinning:_});const E=!!(_!=null&&_.spinning),F=vt(v);let Z="";switch(F){case"large":Z="lg";break;case"small":Z="sm";break}const fe=B(k,{[`${k}-vertical`]:g==="vertical",[`${k}-${Z}`]:Z,[`${k}-split`]:a,[`${k}-bordered`]:n,[`${k}-loading`]:E,[`${k}-grid`]:!!d,[`${k}-something-after-last-item`]:ne(),[`${k}-rtl`]:G==="rtl"},T==null?void 0:T.className,r,s,oe,X),H=Ot(D,{total:p.length,current:f,pageSize:u},t||{}),Y=Math.ceil(H.total/H.pageSize);H.current>Y&&(H.current=Y);const be=t&&i.createElement("div",{className:B(`${k}-pagination`)},i.createElement(jt,Object.assign({align:"end"},H,{onChange:z,onShowSizeChange:W})));let ae=le(p);t&&p.length>(H.current-1)*H.pageSize&&(ae=le(p).splice((H.current-1)*H.pageSize,H.pageSize));const ce=Object.keys(d||{}).some(L=>["xs","sm","md","lg","xl","xxl"].includes(L)),ee=ht(ce),ie=i.useMemo(()=>{for(let L=0;L<Le.length;L+=1){const A=Le[L];if(ee[A])return A}},[ee]),me=i.useMemo(()=>{if(!d)return;const L=ie&&d[ie]?d[ie]:d.column;if(L)return{width:`${100/L}%`,maxWidth:`${100/L}%`}},[JSON.stringify(d),ie]);let re=E&&i.createElement("div",{style:{minHeight:53}});if(ae.length>0){const L=ae.map((A,U)=>K(A,U));re=d?i.createElement(Xe,{gutter:d.gutter},i.Children.map(L,A=>i.createElement("div",{key:A==null?void 0:A.key,style:me},A))):i.createElement("ul",{className:`${k}-items`},L)}else!c&&!E&&(re=i.createElement("div",{className:`${k}-empty-text`},(C==null?void 0:C.emptyText)||(N==null?void 0:N("List"))||i.createElement(Rt,{componentName:"List"})));const te=H.position||"bottom",ye=i.useMemo(()=>({grid:d,itemLayout:g}),[JSON.stringify(d),g]);return ue(i.createElement(je.Provider,{value:ye},i.createElement("div",Object.assign({style:Object.assign(Object.assign({},T==null?void 0:T.style),l),className:fe},P),(te==="top"||te==="both")&&be,h&&i.createElement("div",{className:`${k}-header`},h),i.createElement(Lt,Object.assign({},_),re,c),b&&i.createElement("div",{className:`${k}-footer`},b),S||(te==="bottom"||te==="both")&&be)))}Ie.Item=ot;let q=null,$e=e=>e(),Se=[],he={};function _e(){const{getContainer:e,rtl:t,maxCount:o,top:n,bottom:a,showProgress:r,pauseOnHover:s}=he,l=(e==null?void 0:e())||document.body;return{getContainer:()=>l,rtl:t,maxCount:o,top:n,bottom:a,showProgress:r,pauseOnHover:s}}const yn=x.forwardRef((e,t)=>{const{notificationConfig:o,sync:n}=e,{getPrefixCls:a}=i.useContext(de),r=he.prefixCls||a("notification"),s=i.useContext(dn),[l,c]=tt(Object.assign(Object.assign(Object.assign({},o),{prefixCls:r}),s.notification));return x.useEffect(n,[]),x.useImperativeHandle(t,()=>{const g=Object.assign({},l);return Object.keys(g).forEach(S=>{g[S]=function(){return n(),l[S].apply(l,arguments)}}),{instance:g,sync:n}}),c}),xn=x.forwardRef((e,t)=>{const[o,n]=x.useState(_e),a=()=>{n(_e)};x.useEffect(a,[]);const r=yt(),s=r.getRootPrefixCls(),l=r.getIconPrefixCls(),c=r.getTheme(),g=x.createElement(yn,{ref:t,sync:a,notificationConfig:o});return x.createElement(bt,{prefixCls:s,iconPrefixCls:l,theme:c},r.holderRender?r.holderRender(g):g)});function Re(){if(!q){const e=document.createDocumentFragment(),t={fragment:e};q=t,$e(()=>{St(x.createElement(xn,{ref:o=>{const{instance:n,sync:a}=o||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=a,Re())})}}),e)});return}q.instance&&(Se.forEach(e=>{switch(e.type){case"open":{$e(()=>{q.instance.open(Object.assign(Object.assign({},he),e.config))});break}case"destroy":$e(()=>{q==null||q.instance.destroy(e.key)});break}}),Se=[])}function $n(e){he=Object.assign(Object.assign({},he),e),$e(()=>{var t;(t=q==null?void 0:q.sync)===null||t===void 0||t.call(q)})}function at(e){Se.push({type:"open",config:e}),Re()}const Cn=e=>{Se.push({type:"destroy",key:e}),Re()},Sn=["success","info","warning","error"],Nn={open:at,destroy:Cn,config:$n,useNotification:cn,_InternalPanelDoNotUseOrYouWillBeFired:Zt},it=Nn;Sn.forEach(e=>{it[e]=t=>at(Object.assign(Object.assign({},t),{type:e}))});const En=()=>{const[e,t]=i.useState(localStorage.getItem("profileAvatar")||"https://via.placeholder.com/100"),[o,n]=i.useState(localStorage.getItem("firstName")||""),[a,r]=i.useState(localStorage.getItem("surname")||"");return i.useEffect(()=>{const d=localStorage.getItem("firstName"),p=localStorage.getItem("surname"),v=localStorage.getItem("profileAvatar");d&&n(d),p&&r(p),v&&t(v)},[]),{avatar:e,firstName:o,surname:a,handleAvatarChange:d=>{if(d.target.files&&d.target.files[0]){const p=new FileReader;p.onload=v=>{if(v.target){const h=v.target.result;t(h),localStorage.setItem("profileAvatar",h)}},p.readAsDataURL(d.target.files[0])}},handleFirstNameChange:d=>{n(d.target.value)},handleSurnameChange:d=>{r(d.target.value)},handleSave:()=>{localStorage.setItem("firstName",o),localStorage.setItem("surname",a),it.success({message:"Profile Updated",description:"Your profile information has been saved. The page will reload automatically to reflect these changes.",duration:5,onClose:()=>{setTimeout(()=>{window.location.reload()},10)}})},handleCancel:()=>{n(localStorage.getItem("firstName")||""),r(localStorage.getItem("surname")||""),t(localStorage.getItem("profileAvatar")||"https://via.placeholder.com/100")}}},Pn=V.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`,wn=V.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #333;
  margin-bottom: 30px;
`,In=V.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`,On=V.div`
  margin-right: 20px;
`,jn=V.label`
  z-index: 1;
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 12px 24px;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
    transition: transform 0.45s ease-in-out;
  }

  &:hover::after {
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }

  &:hover {
    background-color: #594bb0;
  }

  &:active {
    background-color: #4b4094;
  }
`,Rn=V.input`
  display: none;
`,Ee=V(Ve)`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6c5dd3;
    box-shadow: 0 0 0 3px rgba(108, 93, 211, 0.2);
  }
`,Ln=V(Ve.TextArea)`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6c5dd3;
    box-shadow: 0 0 0 3px rgba(108, 93, 211, 0.2);
  }
`,He=V.hr`
  margin: 30px 0;
  border: 0;
  border-top: 1px solid #eaeaea;
`,Mn=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`,zn=V.button`
  z-index: 1;
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
  padding: 12px 24px;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
    transition: transform 0.45s ease-in-out;
  }

  &:hover::after {
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }

  &:hover {
    background-color: #594bb0;
  }

  &:active {
    background-color: #4b4094;
  }
`,kn=V.button`
  padding: 12px 24px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #6c5dd3;
  background-color: #fff;
  border: 1px solid #6c5dd3;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`,An=()=>{const{avatar:e,firstName:t,surname:o,handleAvatarChange:n,handleFirstNameChange:a,handleSurnameChange:r,handleSave:s,handleCancel:l}=En();return I.jsxs(Pn,{children:[I.jsx(wn,{children:"User Details"}),I.jsxs(In,{children:[I.jsx(On,{children:I.jsx(xt,{size:100,src:e})}),I.jsxs("div",{children:[I.jsx(jn,{htmlFor:"avatar-upload",children:"Change Picture"}),I.jsx(Rn,{id:"avatar-upload",type:"file",accept:"image/*",onChange:n})]})]}),I.jsx(He,{}),I.jsxs(Xe,{gutter:16,children:[I.jsx(we,{xs:24,sm:12,children:I.jsx(Ee,{placeholder:"First Name",value:t,onChange:a})}),I.jsx(we,{xs:24,sm:12,children:I.jsx(Ee,{placeholder:"Surname",value:o,onChange:r})})]}),I.jsx(Ee,{placeholder:"Email"}),I.jsx(Ln,{placeholder:"Share some information about you",rows:4}),I.jsx(He,{}),I.jsxs(Mn,{children:[I.jsx(kn,{onClick:l,children:"Cancel"}),I.jsx(zn,{onClick:s,children:"Save"})]})]})},Tn=()=>{const[e]=i.useState([{id:1,message:"Your profile has been updated."},{id:2,message:"You have a new friend request."},{id:3,message:"Password changed successfully."}]);return e},_n=()=>{const e=Tn();return I.jsx(It,{title:"Notifications",children:I.jsx(Ie,{dataSource:e,renderItem:t=>I.jsx(Ie.Item,{children:t.message},t.id)})})},Xn=()=>{const[e,t]=i.useState("profile"),o=n=>{t(n),console.log(e)};return I.jsxs(Ne,{defaultActiveKey:"profile",onChange:o,children:[I.jsx(Ne.TabPane,{tab:"Profile",children:I.jsx(An,{})},"profile"),I.jsx(Ne.TabPane,{tab:"Notifications",children:I.jsx(_n,{})},"notifications")]})};export{Xn as default};
