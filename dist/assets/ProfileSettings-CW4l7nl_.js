import{aj as G,g as ue,e as x,ad as Xe,c as he,ak as Ue,m as be,H as Ke,r,p as F,f as $e,k as z,al as Ye,am as Je,K as Qe,an as Ze,M as et,L as tt,ai as p,ao as nt,ap as ot,a1 as at,aq as it,a0 as rt,q as st,h as de,ar as lt,as as me,at as ct,au as dt,av as mt,aw as gt,ax as pt,d as L,u as ve,j as u,ay as ft}from"./index-CCnGCN1I.js";import{I as xe}from"./index-eJ_D80jr.js";import{C as te,R as ye}from"./row-DheSAB6S.js";import{C as ut,T as Z}from"./index-CCjjLt8b.js";import{e as ht,P as bt,S as $t}from"./index-CjN7oprs.js";import{D as vt}from"./index-D0ww-XiL.js";import"./Skeleton-DUawiVNF.js";import"./index-D9iyRCGo.js";import"./Overflow-EZV_UsgD.js";const xt=e=>{const{componentCls:t,notificationMarginEdge:o,animationMaxHeight:n}=e,a=`${t}-notice`,i=new G("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),s=new G("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),c=new G("antNotificationBottomFadeIn",{"0%":{bottom:e.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),l=new G("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[t]:{[`&${t}-top, &${t}-bottom`]:{marginInline:0,[a]:{marginInline:"auto auto"}},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:s}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:c}},[`&${t}-topRight, &${t}-bottomRight`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:i}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[a]:{marginInlineEnd:"auto",marginInlineStart:0},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:l}}}}},yt=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],St={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},Ct=(e,t)=>{const{componentCls:o}=e;return{[`${o}-${t}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[St[t]]:{value:0,_skip_check_:!0}}}}},Pt=e=>{const t={};for(let o=1;o<e.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${e.componentCls}-notice`]:{opacity:0,transition:`opacity ${e.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},Nt=e=>{const t={};for(let o=1;o<e.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={background:e.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)},wt=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${e.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},Pt(e))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},Nt(e))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${e.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:e.margin,width:"100%",insetInline:0,bottom:e.calc(e.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},yt.map(o=>Ct(e,o)).reduce((o,n)=>Object.assign(Object.assign({},o),n),{}))},Se=e=>{const{iconCls:t,componentCls:o,boxShadow:n,fontSizeLG:a,notificationMarginBottom:i,borderRadiusLG:s,colorSuccess:c,colorInfo:l,colorWarning:m,colorError:v,colorTextHeading:d,notificationBg:f,notificationPadding:b,notificationMarginEdge:g,notificationProgressBg:$,notificationProgressHeight:I,fontSize:w,lineHeight:P,width:S,notificationIconSize:E,colorText:B}=e,h=`${o}-notice`;return{position:"relative",marginBottom:i,marginInlineStart:"auto",background:f,borderRadius:s,boxShadow:n,[h]:{padding:b,width:S,maxWidth:`calc(100vw - ${x(e.calc(g).mul(2).equal())})`,overflow:"hidden",lineHeight:P,wordWrap:"break-word"},[`${h}-message`]:{marginBottom:e.marginXS,color:d,fontSize:a,lineHeight:e.lineHeightLG},[`${h}-description`]:{fontSize:w,color:B},[`${h}-closable ${h}-message`]:{paddingInlineEnd:e.paddingLG},[`${h}-with-icon ${h}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.calc(e.marginSM).add(E).equal(),fontSize:a},[`${h}-with-icon ${h}-description`]:{marginInlineStart:e.calc(e.marginSM).add(E).equal(),fontSize:w},[`${h}-icon`]:{position:"absolute",fontSize:E,lineHeight:1,[`&-success${t}`]:{color:c},[`&-info${t}`]:{color:l},[`&-warning${t}`]:{color:m},[`&-error${t}`]:{color:v}},[`${h}-close`]:Object.assign({position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},Xe(e)),[`${h}-progress`]:{position:"absolute",display:"block",appearance:"none",WebkitAppearance:"none",inlineSize:`calc(100% - ${x(s)} * 2)`,left:{_skip_check_:!0,value:s},right:{_skip_check_:!0,value:s},bottom:0,blockSize:I,border:0,"&, &::-webkit-progress-bar":{borderRadius:s,backgroundColor:"rgba(0, 0, 0, 0.04)"},"&::-moz-progress-bar":{background:$},"&::-webkit-progress-value":{borderRadius:s,background:$}},[`${h}-btn`]:{float:"right",marginTop:e.marginSM}}},It=e=>{const{componentCls:t,notificationMarginBottom:o,notificationMarginEdge:n,motionDurationMid:a,motionEaseInOut:i}=e,s=`${t}-notice`,c=new G("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[t]:Object.assign(Object.assign({},he(e)),{position:"fixed",zIndex:e.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${t}-hook-holder`]:{position:"relative"},[`${t}-fade-appear-prepare`]:{opacity:"0 !important"},[`${t}-fade-enter, ${t}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:i,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${t}-fade-leave`]:{animationTimingFunction:i,animationFillMode:"both",animationDuration:a,animationPlayState:"paused"},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationPlayState:"running"},[`${t}-fade-leave${t}-fade-leave-active`]:{animationName:c,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${s}-btn`]:{float:"left"}}})},{[t]:{[`${s}-wrapper`]:Object.assign({},Se(e))}}]},Ce=e=>({zIndexPopup:e.zIndexPopupBase+Ue+50,width:384}),Pe=e=>{const t=e.paddingMD,o=e.paddingLG;return be(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:o,notificationIconSize:e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),notificationCloseButtonSize:e.calc(e.controlHeightLG).mul(.55).equal(),notificationMarginBottom:e.margin,notificationPadding:`${x(e.paddingMD)} ${x(e.paddingContentHorizontalLG)}`,notificationMarginEdge:e.marginLG,animationMaxHeight:150,notificationStackLayer:3,notificationProgressHeight:2,notificationProgressBg:`linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`})},Ne=ue("Notification",e=>{const t=Pe(e);return[It(t),xt(t),wt(t)]},Ce),jt=Ke(["Notification","PurePanel"],e=>{const t=`${e.componentCls}-notice`,o=Pe(e);return{[`${t}-pure-panel`]:Object.assign(Object.assign({},Se(o)),{width:o.width,maxWidth:`calc(100vw - ${x(e.calc(o.notificationMarginEdge).mul(2).equal())})`,margin:0})}},Ce);var Ot=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function oe(e,t){return t===null||t===!1?null:t||r.createElement(Je,{className:`${e}-close-icon`})}const Et={success:Qe,info:Ze,error:et,warning:tt},we=e=>{const{prefixCls:t,icon:o,type:n,message:a,description:i,btn:s,role:c="alert"}=e;let l=null;return o?l=r.createElement("span",{className:`${t}-icon`},o):n&&(l=r.createElement(Et[n]||null,{className:z(`${t}-icon`,`${t}-icon-${n}`)})),r.createElement("div",{className:z({[`${t}-with-icon`]:l}),role:c},l,r.createElement("div",{className:`${t}-message`},a),r.createElement("div",{className:`${t}-description`},i),s&&r.createElement("div",{className:`${t}-btn`},s))},zt=e=>{const{prefixCls:t,className:o,icon:n,type:a,message:i,description:s,btn:c,closable:l=!0,closeIcon:m,className:v}=e,d=Ot(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:f}=r.useContext(F),b=t||f("notification"),g=`${b}-notice`,$=$e(b),[I,w,P]=Ne(b,$);return I(r.createElement("div",{className:z(`${g}-pure-panel`,w,o,P,$)},r.createElement(jt,{prefixCls:b}),r.createElement(Ye,Object.assign({},d,{prefixCls:b,eventKey:"pure",duration:null,closable:l,className:z({notificationClassName:v}),closeIcon:oe(b,m),content:r.createElement(we,{prefixCls:g,icon:n,type:a,message:i,description:s,btn:c})}))))};function Bt(e,t,o){let n;switch(e){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":n={left:0,top:t,bottom:"auto"};break;case"topRight":n={right:0,top:t,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function Lt(e){return{motionName:`${e}-fade`}}var Mt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const ge=24,Tt=4.5,Ht="topRight",Rt=e=>{let{children:t,prefixCls:o}=e;const n=$e(o),[a,i,s]=Ne(o,n);return a(p.createElement(it,{classNames:{list:z(i,s,n)}},t))},_t=(e,t)=>{let{prefixCls:o,key:n}=t;return p.createElement(Rt,{prefixCls:o,key:n},e)},At=p.forwardRef((e,t)=>{const{top:o,bottom:n,prefixCls:a,getContainer:i,maxCount:s,rtl:c,onAllRemoved:l,stack:m,duration:v,pauseOnHover:d=!0,showProgress:f}=e,{getPrefixCls:b,getPopupContainer:g,notification:$,direction:I}=r.useContext(F),[,w]=nt(),P=a||b("notification"),S=y=>Bt(y,o??ge,n??ge),E=()=>z({[`${P}-rtl`]:c??I==="rtl"}),B=()=>Lt(P),[h,N]=ot({prefixCls:P,style:S,className:E,motion:B,closable:!0,closeIcon:oe(P),duration:v??Tt,getContainer:()=>(i==null?void 0:i())||(g==null?void 0:g())||document.body,maxCount:s,pauseOnHover:d,showProgress:f,onAllRemoved:l,renderNotifications:_t,stack:m===!1?!1:{threshold:typeof m=="object"?m==null?void 0:m.threshold:void 0,offset:8,gap:w.margin}});return p.useImperativeHandle(t,()=>Object.assign(Object.assign({},h),{prefixCls:P,notification:$})),N});function Ie(e){const t=p.useRef(null);return at(),[p.useMemo(()=>{const n=c=>{var l;if(!t.current)return;const{open:m,prefixCls:v,notification:d}=t.current,f=`${v}-notice`,{message:b,description:g,icon:$,type:I,btn:w,className:P,style:S,role:E="alert",closeIcon:B,closable:h}=c,N=Mt(c,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),y=oe(f,typeof B<"u"?B:d==null?void 0:d.closeIcon);return m(Object.assign(Object.assign({placement:(l=e==null?void 0:e.placement)!==null&&l!==void 0?l:Ht},N),{content:p.createElement(we,{prefixCls:f,icon:$,type:I,message:b,description:g,btn:w,role:E}),className:z(I&&`${f}-${I}`,P,d==null?void 0:d.className),style:Object.assign(Object.assign({},d==null?void 0:d.style),S),closeIcon:y,closable:h??!!y}))},i={open:n,destroy:c=>{var l,m;c!==void 0?(l=t.current)===null||l===void 0||l.close(c):(m=t.current)===null||m===void 0||m.destroy()}};return["success","info","warning","error"].forEach(c=>{i[c]=l=>n(Object.assign(Object.assign({},l),{type:c}))}),i},[]),p.createElement(At,Object.assign({key:"notification-holder"},e,{ref:t}))]}function Ft(e){return Ie(e)}const ae=p.createContext({});ae.Consumer;var je=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Gt=e=>{var{prefixCls:t,className:o,avatar:n,title:a,description:i}=e,s=je(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:c}=r.useContext(F),l=c("list",t),m=z(`${l}-item-meta`,o),v=p.createElement("div",{className:`${l}-item-meta-content`},a&&p.createElement("h4",{className:`${l}-item-meta-title`},a),i&&p.createElement("div",{className:`${l}-item-meta-description`},i));return p.createElement("div",Object.assign({},s,{className:m}),n&&p.createElement("div",{className:`${l}-item-meta-avatar`},n),(a||i)&&v)},kt=p.forwardRef((e,t)=>{const{prefixCls:o,children:n,actions:a,extra:i,styles:s,className:c,classNames:l,colStyle:m}=e,v=je(e,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:d,itemLayout:f}=r.useContext(ae),{getPrefixCls:b,list:g}=r.useContext(F),$=N=>{var y,R;return z((R=(y=g==null?void 0:g.item)===null||y===void 0?void 0:y.classNames)===null||R===void 0?void 0:R[N],l==null?void 0:l[N])},I=N=>{var y,R;return Object.assign(Object.assign({},(R=(y=g==null?void 0:g.item)===null||y===void 0?void 0:y.styles)===null||R===void 0?void 0:R[N]),s==null?void 0:s[N])},w=()=>{let N=!1;return r.Children.forEach(n,y=>{typeof y=="string"&&(N=!0)}),N&&r.Children.count(n)>1},P=()=>f==="vertical"?!!i:!w(),S=b("list",o),E=a&&a.length>0&&p.createElement("ul",{className:z(`${S}-item-action`,$("actions")),key:"actions",style:I("actions")},a.map((N,y)=>p.createElement("li",{key:`${S}-item-action-${y}`},N,y!==a.length-1&&p.createElement("em",{className:`${S}-item-action-split`})))),B=d?"div":"li",h=p.createElement(B,Object.assign({},v,d?{}:{ref:t},{className:z(`${S}-item`,{[`${S}-item-no-flex`]:!P()},c)}),f==="vertical"&&i?[p.createElement("div",{className:`${S}-item-main`,key:"content"},n,E),p.createElement("div",{className:z(`${S}-item-extra`,$("extra")),key:"extra",style:I("extra")},i)]:[n,E,rt(i,{key:"extra"})]);return d?p.createElement(te,{ref:t,flex:1,style:m},h):h}),Oe=kt;Oe.Meta=Gt;const Dt=e=>{const{listBorderedCls:t,componentCls:o,paddingLG:n,margin:a,itemPaddingSM:i,itemPaddingLG:s,marginLG:c,borderRadiusLG:l}=e;return{[t]:{border:`${x(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:l,[`${o}-header,${o}-footer,${o}-item`]:{paddingInline:n},[`${o}-pagination`]:{margin:`${x(a)} ${x(c)}`}},[`${t}${o}-sm`]:{[`${o}-item,${o}-header,${o}-footer`]:{padding:i}},[`${t}${o}-lg`]:{[`${o}-item,${o}-header,${o}-footer`]:{padding:s}}}},Wt=e=>{const{componentCls:t,screenSM:o,screenMD:n,marginLG:a,marginSM:i,margin:s}=e;return{[`@media screen and (max-width:${n}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${o}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:i}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${x(s)}`}}}}}},Vt=e=>{const{componentCls:t,antCls:o,controlHeight:n,minHeight:a,paddingSM:i,marginLG:s,padding:c,itemPadding:l,colorPrimary:m,itemPaddingSM:v,itemPaddingLG:d,paddingXS:f,margin:b,colorText:g,colorTextDescription:$,motionDurationSlow:I,lineWidth:w,headerBg:P,footerBg:S,emptyTextPadding:E,metaMarginBottom:B,avatarMarginRight:h,titleMarginBottom:N,descriptionFontSize:y}=e;return{[t]:Object.assign(Object.assign({},he(e)),{position:"relative","*":{outline:"none"},[`${t}-header`]:{background:P},[`${t}-footer`]:{background:S},[`${t}-header, ${t}-footer`]:{paddingBlock:i},[`${t}-pagination`]:{marginBlockStart:s,[`${o}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:l,color:g,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:h},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:g},[`${t}-item-meta-title`]:{margin:`0 0 ${x(e.marginXXS)} 0`,color:g,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:g,transition:`all ${I}`,"&:hover":{color:m}}},[`${t}-item-meta-description`]:{color:$,fontSize:y,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${x(f)}`,color:$,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:w,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${x(c)} 0`,color:$,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:E,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${o}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:b,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:s},[`${t}-item-meta`]:{marginBlockEnd:B,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:N,color:g,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:c,marginInlineStart:"auto","> li":{padding:`0 ${x(c)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${x(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${x(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${x(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${o}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${x(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:d},[`${t}-sm ${t}-item`]:{padding:v},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},qt=e=>({contentWidth:220,itemPadding:`${x(e.paddingContentVertical)} 0`,itemPaddingSM:`${x(e.paddingContentVerticalSM)} ${x(e.paddingContentHorizontal)}`,itemPaddingLG:`${x(e.paddingContentVerticalLG)} ${x(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize}),Xt=ue("List",e=>{const t=be(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[Vt(t),Dt(t),Wt(t)]},qt);var Ut=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function ne(e){var{pagination:t=!1,prefixCls:o,bordered:n=!1,split:a=!0,className:i,rootClassName:s,style:c,children:l,itemLayout:m,loadMore:v,grid:d,dataSource:f=[],size:b,header:g,footer:$,loading:I=!1,rowKey:w,renderItem:P,locale:S}=e,E=Ut(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const B=t&&typeof t=="object"?t:{},[h,N]=r.useState(B.defaultCurrent||1),[y,R]=r.useState(B.defaultPageSize||10),{getPrefixCls:Be,renderEmpty:U,direction:Le,list:A}=r.useContext(F),Me={current:1,total:0},re=C=>(O,T)=>{var Q;N(O),R(T),t&&((Q=t==null?void 0:t[C])===null||Q===void 0||Q.call(t,O,T))},Te=re("onChange"),He=re("onShowSizeChange"),Re=(C,O)=>{if(!P)return null;let T;return typeof w=="function"?T=w(C):w?T=C[w]:T=C.key,T||(T=`list-item-${O}`),r.createElement(r.Fragment,{key:T},P(C,O))},_e=()=>!!(v||t||$),j=Be("list",o),[Ae,Fe,Ge]=Xt(j);let _=I;typeof _=="boolean"&&(_={spinning:_});const K=!!(_!=null&&_.spinning),ke=st(b);let D="";switch(ke){case"large":D="lg";break;case"small":D="sm";break}const De=z(j,{[`${j}-vertical`]:m==="vertical",[`${j}-${D}`]:D,[`${j}-split`]:a,[`${j}-bordered`]:n,[`${j}-loading`]:K,[`${j}-grid`]:!!d,[`${j}-something-after-last-item`]:_e(),[`${j}-rtl`]:Le==="rtl"},A==null?void 0:A.className,i,s,Fe,Ge),M=ht(Me,{total:f.length,current:h,pageSize:y},t||{}),se=Math.ceil(M.total/M.pageSize);M.current>se&&(M.current=se);const le=t&&r.createElement("div",{className:z(`${j}-pagination`)},r.createElement(bt,Object.assign({align:"end"},M,{onChange:Te,onShowSizeChange:He})));let Y=de(f);t&&f.length>(M.current-1)*M.pageSize&&(Y=de(f).splice((M.current-1)*M.pageSize,M.pageSize));const We=Object.keys(d||{}).some(C=>["xs","sm","md","lg","xl","xxl"].includes(C)),ce=lt(We),W=r.useMemo(()=>{for(let C=0;C<me.length;C+=1){const O=me[C];if(ce[O])return O}},[ce]),Ve=r.useMemo(()=>{if(!d)return;const C=W&&d[W]?d[W]:d.column;if(C)return{width:`${100/C}%`,maxWidth:`${100/C}%`}},[JSON.stringify(d),W]);let J=K&&r.createElement("div",{style:{minHeight:53}});if(Y.length>0){const C=Y.map((O,T)=>Re(O,T));J=d?r.createElement(ye,{gutter:d.gutter},r.Children.map(C,O=>r.createElement("div",{key:O==null?void 0:O.key,style:Ve},O))):r.createElement("ul",{className:`${j}-items`},C)}else!l&&!K&&(J=r.createElement("div",{className:`${j}-empty-text`},(S==null?void 0:S.emptyText)||(U==null?void 0:U("List"))||r.createElement(vt,{componentName:"List"})));const V=M.position||"bottom",qe=r.useMemo(()=>({grid:d,itemLayout:m}),[JSON.stringify(d),m]);return Ae(r.createElement(ae.Provider,{value:qe},r.createElement("div",Object.assign({style:Object.assign(Object.assign({},A==null?void 0:A.style),c),className:De},E),(V==="top"||V==="both")&&le,g&&r.createElement("div",{className:`${j}-header`},g),r.createElement($t,Object.assign({},_),J,l),$&&r.createElement("div",{className:`${j}-footer`},$),v||(V==="bottom"||V==="both")&&le)))}ne.Item=Oe;let H=null,q=e=>e(),X=[],k={};function pe(){const{getContainer:e,rtl:t,maxCount:o,top:n,bottom:a,showProgress:i,pauseOnHover:s}=k,c=(e==null?void 0:e())||document.body;return{getContainer:()=>c,rtl:t,maxCount:o,top:n,bottom:a,showProgress:i,pauseOnHover:s}}const Kt=p.forwardRef((e,t)=>{const{notificationConfig:o,sync:n}=e,{getPrefixCls:a}=r.useContext(F),i=k.prefixCls||a("notification"),s=r.useContext(gt),[c,l]=Ie(Object.assign(Object.assign(Object.assign({},o),{prefixCls:i}),s.notification));return p.useEffect(n,[]),p.useImperativeHandle(t,()=>{const m=Object.assign({},c);return Object.keys(m).forEach(v=>{m[v]=function(){return n(),c[v].apply(c,arguments)}}),{instance:m,sync:n}}),l}),Yt=p.forwardRef((e,t)=>{const[o,n]=p.useState(pe),a=()=>{n(pe)};p.useEffect(a,[]);const i=mt(),s=i.getRootPrefixCls(),c=i.getIconPrefixCls(),l=i.getTheme(),m=p.createElement(Kt,{ref:t,sync:a,notificationConfig:o});return p.createElement(dt,{prefixCls:s,iconPrefixCls:c,theme:l},i.holderRender?i.holderRender(m):m)});function ie(){if(!H){const e=document.createDocumentFragment(),t={fragment:e};H=t,q(()=>{ct(p.createElement(Yt,{ref:o=>{const{instance:n,sync:a}=o||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=a,ie())})}}),e)});return}H.instance&&(X.forEach(e=>{switch(e.type){case"open":{q(()=>{H.instance.open(Object.assign(Object.assign({},k),e.config))});break}case"destroy":q(()=>{H==null||H.instance.destroy(e.key)});break}}),X=[])}function Jt(e){k=Object.assign(Object.assign({},k),e),q(()=>{var t;(t=H==null?void 0:H.sync)===null||t===void 0||t.call(H)})}function Ee(e){X.push({type:"open",config:e}),ie()}const Qt=e=>{X.push({type:"destroy",key:e}),ie()},Zt=["success","info","warning","error"],en={open:Ee,destroy:Qt,config:Jt,useNotification:Ft,_InternalPanelDoNotUseOrYouWillBeFired:zt},ze=en;Zt.forEach(e=>{ze[e]=t=>Ee(Object.assign(Object.assign({},t),{type:e}))});const tn=()=>{const e=pt(),[t,o]=r.useState(localStorage.getItem("profileAvatar")||"https://via.placeholder.com/100"),[n,a]=r.useState(localStorage.getItem("firstName")||""),[i,s]=r.useState(localStorage.getItem("surname")||"");return r.useEffect(()=>{const f=localStorage.getItem("firstName"),b=localStorage.getItem("surname"),g=localStorage.getItem("profileAvatar");f&&a(f),b&&s(b),g&&o(g)},[]),{avatar:t,firstName:n,surname:i,handleAvatarChange:f=>{if(f.target.files&&f.target.files[0]){const b=new FileReader;b.onload=g=>{if(g.target){const $=g.target.result;o($),localStorage.setItem("profileAvatar",$)}},b.readAsDataURL(f.target.files[0])}},handleFirstNameChange:f=>{a(f.target.value)},handleSurnameChange:f=>{s(f.target.value)},handleSave:()=>{localStorage.setItem("firstName",n),localStorage.setItem("surname",i),ze.success({message:"Profile Updated",description:"Your profile information has been saved. The page will reload automatically to reflect these changes.",duration:5,onClose:()=>{setTimeout(()=>{window.location.reload()},10)}})},handleCancel:()=>{e("/dashboard")}}},nn=L.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`,on=L.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #333;
  margin-bottom: 30px;
`,an=L.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`,rn=L.div`
  margin-right: 20px;
`,sn=L.label`
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
`,ln=L.input`
  display: none;
`,ee=L(xe)`
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
`,cn=L(xe.TextArea)`
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
`,fe=L.hr`
  margin: 30px 0;
  border: 0;
  border-top: 1px solid #eaeaea;
`,dn=L.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`,mn=L.button`
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
`,gn=L.button`
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
`,pn=()=>{const{t:e}=ve(),{avatar:t,firstName:o,surname:n,handleAvatarChange:a,handleFirstNameChange:i,handleSurnameChange:s,handleSave:c,handleCancel:l}=tn();return u.jsxs(nn,{children:[u.jsx(on,{children:e("profile.userDetails")}),u.jsxs(an,{children:[u.jsx(rn,{children:u.jsx(ft,{size:100,src:t})}),u.jsxs("div",{children:[u.jsx(sn,{htmlFor:"avatar-upload",children:e("profile.changePicture")}),u.jsx(ln,{id:"avatar-upload",type:"file",accept:"image/*",onChange:a})]})]}),u.jsx(fe,{}),u.jsxs(ye,{gutter:16,children:[u.jsx(te,{xs:24,sm:12,children:u.jsx(ee,{placeholder:e("profile.firstName"),value:o,onChange:i})}),u.jsx(te,{xs:24,sm:12,children:u.jsx(ee,{placeholder:e("profile.surname"),value:n,onChange:s})})]}),u.jsx(ee,{placeholder:e("profile.email")}),u.jsx(cn,{placeholder:e("profile.about"),rows:4}),u.jsx(fe,{}),u.jsxs(dn,{children:[u.jsx(gn,{onClick:l,children:e("profile.cancel")}),u.jsx(mn,{onClick:c,children:e("profile.save")})]})]})},fn=()=>{const[e]=r.useState([{id:1,message:"Your profile has been updated."},{id:2,message:"You have a new friend request."},{id:3,message:"Password changed successfully."}]);return e},un=()=>{const e=fn();return u.jsx(ut,{title:"Notifications",children:u.jsx(ne,{dataSource:e,renderItem:t=>u.jsx(ne.Item,{children:t.message},t.id)})})},Nn=()=>{const{t:e}=ve(),[t,o]=r.useState("profile"),n=a=>{o(a),console.log(t)};return u.jsxs(Z,{defaultActiveKey:"profile",onChange:n,children:[u.jsx(Z.TabPane,{tab:e("tabs.profile"),children:u.jsx(pn,{})},"profile"),u.jsx(Z.TabPane,{tab:e("tabs.notifications"),children:u.jsx(un,{})},"notifications")]})};export{Nn as default};
