import{K as G,g as ue,b as v,c as Xe,e as he,C as qe,m as be,f as Ue,r,h as F,i as $e,k as z,N as Ke,l as Ye,n as Je,o as Qe,p as Ze,q as et,s as g,t as tt,v as nt,w as ot,x as at,y as it,z as rt,A as de,B as st,D as me,E as lt,F as ct,G as dt,H as mt,d as L,j as f,J as gt}from"./index-G9huiumW.js";import{I as ve}from"./index-_OVBo1d2.js";import{a as te,R as xe,C as pt,T as Z}from"./row-CS9gR12u.js";import{e as ft,P as ut,D as ht,S as bt}from"./index-DIY7wIMH.js";import"./omit-DXgDXInf.js";import"./Skeleton-KnheAWmZ.js";import"./index-CRJvrYZx.js";const $t=t=>{const{componentCls:e,notificationMarginEdge:o,animationMaxHeight:n}=t,a=`${e}-notice`,i=new G("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),s=new G("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),l=new G("antNotificationBottomFadeIn",{"0%":{bottom:t.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),c=new G("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[e]:{[`&${e}-top, &${e}-bottom`]:{marginInline:0,[a]:{marginInline:"auto auto"}},[`&${e}-top`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:s}},[`&${e}-bottom`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:l}},[`&${e}-topRight, &${e}-bottomRight`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:i}},[`&${e}-topLeft, &${e}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[a]:{marginInlineEnd:"auto",marginInlineStart:0},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:c}}}}},vt=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],xt={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},yt=(t,e)=>{const{componentCls:o}=t;return{[`${o}-${e}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[e.startsWith("top")?"top":"bottom"]:0,[xt[e]]:{value:0,_skip_check_:!0}}}}},St=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${t.componentCls}-notice`]:{opacity:0,transition:`opacity ${t.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${t.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},e)},Ct=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={background:t.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},e)},Pt=t=>{const{componentCls:e}=t;return Object.assign({[`${e}-stack`]:{[`& > ${e}-notice-wrapper`]:Object.assign({transition:`all ${t.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},St(t))},[`${e}-stack:not(${e}-stack-expanded)`]:{[`& > ${e}-notice-wrapper`]:Object.assign({},Ct(t))},[`${e}-stack${e}-stack-expanded`]:{[`& > ${e}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${t.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:t.margin,width:"100%",insetInline:0,bottom:t.calc(t.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},vt.map(o=>yt(t,o)).reduce((o,n)=>Object.assign(Object.assign({},o),n),{}))},ye=t=>{const{iconCls:e,componentCls:o,boxShadow:n,fontSizeLG:a,notificationMarginBottom:i,borderRadiusLG:s,colorSuccess:l,colorInfo:c,colorWarning:m,colorError:$,colorTextHeading:d,notificationBg:h,notificationPadding:b,notificationMarginEdge:p,notificationProgressBg:y,notificationProgressHeight:w,fontSize:I,lineHeight:P,width:S,notificationIconSize:O,colorText:B}=t,u=`${o}-notice`;return{position:"relative",marginBottom:i,marginInlineStart:"auto",background:h,borderRadius:s,boxShadow:n,[u]:{padding:b,width:S,maxWidth:`calc(100vw - ${v(t.calc(p).mul(2).equal())})`,overflow:"hidden",lineHeight:P,wordWrap:"break-word"},[`${u}-message`]:{marginBottom:t.marginXS,color:d,fontSize:a,lineHeight:t.lineHeightLG},[`${u}-description`]:{fontSize:I,color:B},[`${u}-closable ${u}-message`]:{paddingInlineEnd:t.paddingLG},[`${u}-with-icon ${u}-message`]:{marginBottom:t.marginXS,marginInlineStart:t.calc(t.marginSM).add(O).equal(),fontSize:a},[`${u}-with-icon ${u}-description`]:{marginInlineStart:t.calc(t.marginSM).add(O).equal(),fontSize:I},[`${u}-icon`]:{position:"absolute",fontSize:O,lineHeight:1,[`&-success${e}`]:{color:l},[`&-info${e}`]:{color:c},[`&-warning${e}`]:{color:m},[`&-error${e}`]:{color:$}},[`${u}-close`]:Object.assign({position:"absolute",top:t.notificationPaddingVertical,insetInlineEnd:t.notificationPaddingHorizontal,color:t.colorIcon,outline:"none",width:t.notificationCloseButtonSize,height:t.notificationCloseButtonSize,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.colorBgTextHover},"&:active":{backgroundColor:t.colorBgTextActive}},Xe(t)),[`${u}-progress`]:{position:"absolute",display:"block",appearance:"none",WebkitAppearance:"none",inlineSize:`calc(100% - ${v(s)} * 2)`,left:{_skip_check_:!0,value:s},right:{_skip_check_:!0,value:s},bottom:0,blockSize:w,border:0,"&, &::-webkit-progress-bar":{borderRadius:s,backgroundColor:"rgba(0, 0, 0, 0.04)"},"&::-moz-progress-bar":{background:y},"&::-webkit-progress-value":{borderRadius:s,background:y}},[`${u}-btn`]:{float:"right",marginTop:t.marginSM}}},Nt=t=>{const{componentCls:e,notificationMarginBottom:o,notificationMarginEdge:n,motionDurationMid:a,motionEaseInOut:i}=t,s=`${e}-notice`,l=new G("antNotificationFadeOut",{"0%":{maxHeight:t.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[e]:Object.assign(Object.assign({},he(t)),{position:"fixed",zIndex:t.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${e}-hook-holder`]:{position:"relative"},[`${e}-fade-appear-prepare`]:{opacity:"0 !important"},[`${e}-fade-enter, ${e}-fade-appear`]:{animationDuration:t.motionDurationMid,animationTimingFunction:i,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${e}-fade-leave`]:{animationTimingFunction:i,animationFillMode:"both",animationDuration:a,animationPlayState:"paused"},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationPlayState:"running"},[`${e}-fade-leave${e}-fade-leave-active`]:{animationName:l,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${s}-btn`]:{float:"left"}}})},{[e]:{[`${s}-wrapper`]:Object.assign({},ye(t))}}]},Se=t=>({zIndexPopup:t.zIndexPopupBase+qe+50,width:384}),Ce=t=>{const e=t.paddingMD,o=t.paddingLG;return be(t,{notificationBg:t.colorBgElevated,notificationPaddingVertical:e,notificationPaddingHorizontal:o,notificationIconSize:t.calc(t.fontSizeLG).mul(t.lineHeightLG).equal(),notificationCloseButtonSize:t.calc(t.controlHeightLG).mul(.55).equal(),notificationMarginBottom:t.margin,notificationPadding:`${v(t.paddingMD)} ${v(t.paddingContentHorizontalLG)}`,notificationMarginEdge:t.marginLG,animationMaxHeight:150,notificationStackLayer:3,notificationProgressHeight:2,notificationProgressBg:`linear-gradient(90deg, ${t.colorPrimaryBorderHover}, ${t.colorPrimary})`})},Pe=ue("Notification",t=>{const e=Ce(t);return[Nt(e),$t(e),Pt(e)]},Se),It=Ue(["Notification","PurePanel"],t=>{const e=`${t.componentCls}-notice`,o=Ce(t);return{[`${e}-pure-panel`]:Object.assign(Object.assign({},ye(o)),{width:o.width,maxWidth:`calc(100vw - ${v(t.calc(o.notificationMarginEdge).mul(2).equal())})`,margin:0})}},Se);var wt=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]]);return o};function oe(t,e){return e===null||e===!1?null:e||r.createElement(Ye,{className:`${t}-close-icon`})}const jt={success:Je,info:Qe,error:Ze,warning:et},Ne=t=>{const{prefixCls:e,icon:o,type:n,message:a,description:i,btn:s,role:l="alert"}=t;let c=null;return o?c=r.createElement("span",{className:`${e}-icon`},o):n&&(c=r.createElement(jt[n]||null,{className:z(`${e}-icon`,`${e}-icon-${n}`)})),r.createElement("div",{className:z({[`${e}-with-icon`]:c}),role:l},c,r.createElement("div",{className:`${e}-message`},a),r.createElement("div",{className:`${e}-description`},i),s&&r.createElement("div",{className:`${e}-btn`},s))},Et=t=>{const{prefixCls:e,className:o,icon:n,type:a,message:i,description:s,btn:l,closable:c=!0,closeIcon:m,className:$}=t,d=wt(t,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:h}=r.useContext(F),b=e||h("notification"),p=`${b}-notice`,y=$e(b),[w,I,P]=Pe(b,y);return w(r.createElement("div",{className:z(`${p}-pure-panel`,I,o,P,y)},r.createElement(It,{prefixCls:b}),r.createElement(Ke,Object.assign({},d,{prefixCls:b,eventKey:"pure",duration:null,closable:c,className:z({notificationClassName:$}),closeIcon:oe(b,m),content:r.createElement(Ne,{prefixCls:p,icon:n,type:a,message:i,description:s,btn:l})}))))};function Ot(t,e,o){let n;switch(t){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":n={left:0,top:e,bottom:"auto"};break;case"topRight":n={right:0,top:e,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function zt(t){return{motionName:`${t}-fade`}}var Bt=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]]);return o};const ge=24,Lt=4.5,Mt="topRight",Tt=t=>{let{children:e,prefixCls:o}=t;const n=$e(o),[a,i,s]=Pe(o,n);return a(g.createElement(at,{classNames:{list:z(i,s,n)}},e))},Ht=(t,e)=>{let{prefixCls:o,key:n}=e;return g.createElement(Tt,{prefixCls:o,key:n},t)},Rt=g.forwardRef((t,e)=>{const{top:o,bottom:n,prefixCls:a,getContainer:i,maxCount:s,rtl:l,onAllRemoved:c,stack:m,duration:$,pauseOnHover:d=!0,showProgress:h}=t,{getPrefixCls:b,getPopupContainer:p,notification:y,direction:w}=r.useContext(F),[,I]=tt(),P=a||b("notification"),S=x=>Ot(x,o??ge,n??ge),O=()=>z({[`${P}-rtl`]:l??w==="rtl"}),B=()=>zt(P),[u,N]=nt({prefixCls:P,style:S,className:O,motion:B,closable:!0,closeIcon:oe(P),duration:$??Lt,getContainer:()=>(i==null?void 0:i())||(p==null?void 0:p())||document.body,maxCount:s,pauseOnHover:d,showProgress:h,onAllRemoved:c,renderNotifications:Ht,stack:m===!1?!1:{threshold:typeof m=="object"?m==null?void 0:m.threshold:void 0,offset:8,gap:I.margin}});return g.useImperativeHandle(e,()=>Object.assign(Object.assign({},u),{prefixCls:P,notification:y})),N});function Ie(t){const e=g.useRef(null);return ot(),[g.useMemo(()=>{const n=l=>{var c;if(!e.current)return;const{open:m,prefixCls:$,notification:d}=e.current,h=`${$}-notice`,{message:b,description:p,icon:y,type:w,btn:I,className:P,style:S,role:O="alert",closeIcon:B,closable:u}=l,N=Bt(l,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),x=oe(h,typeof B<"u"?B:d==null?void 0:d.closeIcon);return m(Object.assign(Object.assign({placement:(c=t==null?void 0:t.placement)!==null&&c!==void 0?c:Mt},N),{content:g.createElement(Ne,{prefixCls:h,icon:y,type:w,message:b,description:p,btn:I,role:O}),className:z(w&&`${h}-${w}`,P,d==null?void 0:d.className),style:Object.assign(Object.assign({},d==null?void 0:d.style),S),closeIcon:x,closable:u??!!x}))},i={open:n,destroy:l=>{var c,m;l!==void 0?(c=e.current)===null||c===void 0||c.close(l):(m=e.current)===null||m===void 0||m.destroy()}};return["success","info","warning","error"].forEach(l=>{i[l]=c=>n(Object.assign(Object.assign({},c),{type:l}))}),i},[]),g.createElement(Rt,Object.assign({key:"notification-holder"},t,{ref:e}))]}function _t(t){return Ie(t)}const ae=g.createContext({});ae.Consumer;var we=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]]);return o};const At=t=>{var{prefixCls:e,className:o,avatar:n,title:a,description:i}=t,s=we(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:l}=r.useContext(F),c=l("list",e),m=z(`${c}-item-meta`,o),$=g.createElement("div",{className:`${c}-item-meta-content`},a&&g.createElement("h4",{className:`${c}-item-meta-title`},a),i&&g.createElement("div",{className:`${c}-item-meta-description`},i));return g.createElement("div",Object.assign({},s,{className:m}),n&&g.createElement("div",{className:`${c}-item-meta-avatar`},n),(a||i)&&$)},Ft=g.forwardRef((t,e)=>{const{prefixCls:o,children:n,actions:a,extra:i,styles:s,className:l,classNames:c,colStyle:m}=t,$=we(t,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:d,itemLayout:h}=r.useContext(ae),{getPrefixCls:b,list:p}=r.useContext(F),y=N=>{var x,R;return z((R=(x=p==null?void 0:p.item)===null||x===void 0?void 0:x.classNames)===null||R===void 0?void 0:R[N],c==null?void 0:c[N])},w=N=>{var x,R;return Object.assign(Object.assign({},(R=(x=p==null?void 0:p.item)===null||x===void 0?void 0:x.styles)===null||R===void 0?void 0:R[N]),s==null?void 0:s[N])},I=()=>{let N=!1;return r.Children.forEach(n,x=>{typeof x=="string"&&(N=!0)}),N&&r.Children.count(n)>1},P=()=>h==="vertical"?!!i:!I(),S=b("list",o),O=a&&a.length>0&&g.createElement("ul",{className:z(`${S}-item-action`,y("actions")),key:"actions",style:w("actions")},a.map((N,x)=>g.createElement("li",{key:`${S}-item-action-${x}`},N,x!==a.length-1&&g.createElement("em",{className:`${S}-item-action-split`})))),B=d?"div":"li",u=g.createElement(B,Object.assign({},$,d?{}:{ref:e},{className:z(`${S}-item`,{[`${S}-item-no-flex`]:!P()},l)}),h==="vertical"&&i?[g.createElement("div",{className:`${S}-item-main`,key:"content"},n,O),g.createElement("div",{className:z(`${S}-item-extra`,y("extra")),key:"extra",style:w("extra")},i)]:[n,O,it(i,{key:"extra"})]);return d?g.createElement(te,{ref:e,flex:1,style:m},u):u}),je=Ft;je.Meta=At;const Gt=t=>{const{listBorderedCls:e,componentCls:o,paddingLG:n,margin:a,itemPaddingSM:i,itemPaddingLG:s,marginLG:l,borderRadiusLG:c}=t;return{[e]:{border:`${v(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:c,[`${o}-header,${o}-footer,${o}-item`]:{paddingInline:n},[`${o}-pagination`]:{margin:`${v(a)} ${v(l)}`}},[`${e}${o}-sm`]:{[`${o}-item,${o}-header,${o}-footer`]:{padding:i}},[`${e}${o}-lg`]:{[`${o}-item,${o}-header,${o}-footer`]:{padding:s}}}},Dt=t=>{const{componentCls:e,screenSM:o,screenMD:n,marginLG:a,marginSM:i,margin:s}=t;return{[`@media screen and (max-width:${n}px)`]:{[e]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:a}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${o}px)`]:{[e]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:i}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${v(s)}`}}}}}},kt=t=>{const{componentCls:e,antCls:o,controlHeight:n,minHeight:a,paddingSM:i,marginLG:s,padding:l,itemPadding:c,colorPrimary:m,itemPaddingSM:$,itemPaddingLG:d,paddingXS:h,margin:b,colorText:p,colorTextDescription:y,motionDurationSlow:w,lineWidth:I,headerBg:P,footerBg:S,emptyTextPadding:O,metaMarginBottom:B,avatarMarginRight:u,titleMarginBottom:N,descriptionFontSize:x}=t;return{[e]:Object.assign(Object.assign({},he(t)),{position:"relative","*":{outline:"none"},[`${e}-header`]:{background:P},[`${e}-footer`]:{background:S},[`${e}-header, ${e}-footer`]:{paddingBlock:i},[`${e}-pagination`]:{marginBlockStart:s,[`${o}-pagination-options`]:{textAlign:"start"}},[`${e}-spin`]:{minHeight:a,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:c,color:p,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:u},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:p},[`${e}-item-meta-title`]:{margin:`0 0 ${v(t.marginXXS)} 0`,color:p,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:p,transition:`all ${w}`,"&:hover":{color:m}}},[`${e}-item-meta-description`]:{color:y,fontSize:x,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${v(h)}`,color:y,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:I,height:t.calc(t.fontHeight).sub(t.calc(t.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${v(l)} 0`,color:y,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:O,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${o}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:b,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:s},[`${e}-item-meta`]:{marginBlockEnd:B,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:N,color:p,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:l,marginInlineStart:"auto","> li":{padding:`0 ${v(l)}`,"&:first-child":{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${v(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${v(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${v(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:n},[`${e}-split${e}-something-after-last-item ${o}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${v(t.lineWidth)} ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:d},[`${e}-sm ${e}-item`]:{padding:$},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}},Wt=t=>({contentWidth:220,itemPadding:`${v(t.paddingContentVertical)} 0`,itemPaddingSM:`${v(t.paddingContentVerticalSM)} ${v(t.paddingContentHorizontal)}`,itemPaddingLG:`${v(t.paddingContentVerticalLG)} ${v(t.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize}),Vt=ue("List",t=>{const e=be(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG});return[kt(e),Gt(e),Dt(e)]},Wt);var Xt=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(o[n[a]]=t[n[a]]);return o};function ne(t){var{pagination:e=!1,prefixCls:o,bordered:n=!1,split:a=!0,className:i,rootClassName:s,style:l,children:c,itemLayout:m,loadMore:$,grid:d,dataSource:h=[],size:b,header:p,footer:y,loading:w=!1,rowKey:I,renderItem:P,locale:S}=t,O=Xt(t,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const B=e&&typeof e=="object"?e:{},[u,N]=r.useState(B.defaultCurrent||1),[x,R]=r.useState(B.defaultPageSize||10),{getPrefixCls:ze,renderEmpty:U,direction:Be,list:A}=r.useContext(F),Le={current:1,total:0},re=C=>(E,T)=>{var Q;N(E),R(T),e&&((Q=e==null?void 0:e[C])===null||Q===void 0||Q.call(e,E,T))},Me=re("onChange"),Te=re("onShowSizeChange"),He=(C,E)=>{if(!P)return null;let T;return typeof I=="function"?T=I(C):I?T=C[I]:T=C.key,T||(T=`list-item-${E}`),r.createElement(r.Fragment,{key:T},P(C,E))},Re=()=>!!($||e||y),j=ze("list",o),[_e,Ae,Fe]=Vt(j);let _=w;typeof _=="boolean"&&(_={spinning:_});const K=!!(_!=null&&_.spinning),Ge=rt(b);let k="";switch(Ge){case"large":k="lg";break;case"small":k="sm";break}const De=z(j,{[`${j}-vertical`]:m==="vertical",[`${j}-${k}`]:k,[`${j}-split`]:a,[`${j}-bordered`]:n,[`${j}-loading`]:K,[`${j}-grid`]:!!d,[`${j}-something-after-last-item`]:Re(),[`${j}-rtl`]:Be==="rtl"},A==null?void 0:A.className,i,s,Ae,Fe),M=ft(Le,{total:h.length,current:u,pageSize:x},e||{}),se=Math.ceil(M.total/M.pageSize);M.current>se&&(M.current=se);const le=e&&r.createElement("div",{className:z(`${j}-pagination`)},r.createElement(ut,Object.assign({align:"end"},M,{onChange:Me,onShowSizeChange:Te})));let Y=de(h);e&&h.length>(M.current-1)*M.pageSize&&(Y=de(h).splice((M.current-1)*M.pageSize,M.pageSize));const ke=Object.keys(d||{}).some(C=>["xs","sm","md","lg","xl","xxl"].includes(C)),ce=st(ke),W=r.useMemo(()=>{for(let C=0;C<me.length;C+=1){const E=me[C];if(ce[E])return E}},[ce]),We=r.useMemo(()=>{if(!d)return;const C=W&&d[W]?d[W]:d.column;if(C)return{width:`${100/C}%`,maxWidth:`${100/C}%`}},[JSON.stringify(d),W]);let J=K&&r.createElement("div",{style:{minHeight:53}});if(Y.length>0){const C=Y.map((E,T)=>He(E,T));J=d?r.createElement(xe,{gutter:d.gutter},r.Children.map(C,E=>r.createElement("div",{key:E==null?void 0:E.key,style:We},E))):r.createElement("ul",{className:`${j}-items`},C)}else!c&&!K&&(J=r.createElement("div",{className:`${j}-empty-text`},(S==null?void 0:S.emptyText)||(U==null?void 0:U("List"))||r.createElement(ht,{componentName:"List"})));const V=M.position||"bottom",Ve=r.useMemo(()=>({grid:d,itemLayout:m}),[JSON.stringify(d),m]);return _e(r.createElement(ae.Provider,{value:Ve},r.createElement("div",Object.assign({style:Object.assign(Object.assign({},A==null?void 0:A.style),l),className:De},O),(V==="top"||V==="both")&&le,p&&r.createElement("div",{className:`${j}-header`},p),r.createElement(bt,Object.assign({},_),J,c),y&&r.createElement("div",{className:`${j}-footer`},y),$||(V==="bottom"||V==="both")&&le)))}ne.Item=je;let H=null,X=t=>t(),q=[],D={};function pe(){const{getContainer:t,rtl:e,maxCount:o,top:n,bottom:a,showProgress:i,pauseOnHover:s}=D,l=(t==null?void 0:t())||document.body;return{getContainer:()=>l,rtl:e,maxCount:o,top:n,bottom:a,showProgress:i,pauseOnHover:s}}const qt=g.forwardRef((t,e)=>{const{notificationConfig:o,sync:n}=t,{getPrefixCls:a}=r.useContext(F),i=D.prefixCls||a("notification"),s=r.useContext(mt),[l,c]=Ie(Object.assign(Object.assign(Object.assign({},o),{prefixCls:i}),s.notification));return g.useEffect(n,[]),g.useImperativeHandle(e,()=>{const m=Object.assign({},l);return Object.keys(m).forEach($=>{m[$]=function(){return n(),l[$].apply(l,arguments)}}),{instance:m,sync:n}}),c}),Ut=g.forwardRef((t,e)=>{const[o,n]=g.useState(pe),a=()=>{n(pe)};g.useEffect(a,[]);const i=dt(),s=i.getRootPrefixCls(),l=i.getIconPrefixCls(),c=i.getTheme(),m=g.createElement(qt,{ref:e,sync:a,notificationConfig:o});return g.createElement(ct,{prefixCls:s,iconPrefixCls:l,theme:c},i.holderRender?i.holderRender(m):m)});function ie(){if(!H){const t=document.createDocumentFragment(),e={fragment:t};H=e,X(()=>{lt(g.createElement(Ut,{ref:o=>{const{instance:n,sync:a}=o||{};Promise.resolve().then(()=>{!e.instance&&n&&(e.instance=n,e.sync=a,ie())})}}),t)});return}H.instance&&(q.forEach(t=>{switch(t.type){case"open":{X(()=>{H.instance.open(Object.assign(Object.assign({},D),t.config))});break}case"destroy":X(()=>{H==null||H.instance.destroy(t.key)});break}}),q=[])}function Kt(t){D=Object.assign(Object.assign({},D),t),X(()=>{var e;(e=H==null?void 0:H.sync)===null||e===void 0||e.call(H)})}function Ee(t){q.push({type:"open",config:t}),ie()}const Yt=t=>{q.push({type:"destroy",key:t}),ie()},Jt=["success","info","warning","error"],Qt={open:Ee,destroy:Yt,config:Kt,useNotification:_t,_InternalPanelDoNotUseOrYouWillBeFired:Et},Oe=Qt;Jt.forEach(t=>{Oe[t]=e=>Ee(Object.assign(Object.assign({},e),{type:t}))});const Zt=()=>{const[t,e]=r.useState(localStorage.getItem("profileAvatar")||"https://via.placeholder.com/100"),[o,n]=r.useState(localStorage.getItem("firstName")||""),[a,i]=r.useState(localStorage.getItem("surname")||"");return r.useEffect(()=>{const d=localStorage.getItem("firstName"),h=localStorage.getItem("surname"),b=localStorage.getItem("profileAvatar");d&&n(d),h&&i(h),b&&e(b)},[]),{avatar:t,firstName:o,surname:a,handleAvatarChange:d=>{if(d.target.files&&d.target.files[0]){const h=new FileReader;h.onload=b=>{if(b.target){const p=b.target.result;e(p),localStorage.setItem("profileAvatar",p)}},h.readAsDataURL(d.target.files[0])}},handleFirstNameChange:d=>{n(d.target.value)},handleSurnameChange:d=>{i(d.target.value)},handleSave:()=>{localStorage.setItem("firstName",o),localStorage.setItem("surname",a),Oe.success({message:"Profile Updated",description:"Your profile information has been saved. The page will reload automatically to reflect these changes.",duration:5,onClose:()=>{setTimeout(()=>{window.location.reload()},10)}})},handleCancel:()=>{n(localStorage.getItem("firstName")||""),i(localStorage.getItem("surname")||""),e(localStorage.getItem("profileAvatar")||"https://via.placeholder.com/100")}}},en=L.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`,tn=L.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #333;
  margin-bottom: 30px;
`,nn=L.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`,on=L.div`
  margin-right: 20px;
`,an=L.label`
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
`,rn=L.input`
  display: none;
`,ee=L(ve)`
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
`,sn=L(ve.TextArea)`
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
`,ln=L.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`,cn=L.button`
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
`,dn=L.button`
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
`,mn=()=>{const{avatar:t,firstName:e,surname:o,handleAvatarChange:n,handleFirstNameChange:a,handleSurnameChange:i,handleSave:s,handleCancel:l}=Zt();return f.jsxs(en,{children:[f.jsx(tn,{children:"User Details"}),f.jsxs(nn,{children:[f.jsx(on,{children:f.jsx(gt,{size:100,src:t})}),f.jsxs("div",{children:[f.jsx(an,{htmlFor:"avatar-upload",children:"Change Picture"}),f.jsx(rn,{id:"avatar-upload",type:"file",accept:"image/*",onChange:n})]})]}),f.jsx(fe,{}),f.jsxs(xe,{gutter:16,children:[f.jsx(te,{xs:24,sm:12,children:f.jsx(ee,{placeholder:"First Name",value:e,onChange:a})}),f.jsx(te,{xs:24,sm:12,children:f.jsx(ee,{placeholder:"Surname",value:o,onChange:i})})]}),f.jsx(ee,{placeholder:"Email"}),f.jsx(sn,{placeholder:"Share some information about you",rows:4}),f.jsx(fe,{}),f.jsxs(ln,{children:[f.jsx(dn,{onClick:l,children:"Cancel"}),f.jsx(cn,{onClick:s,children:"Save"})]})]})},gn=()=>{const[t]=r.useState([{id:1,message:"Your profile has been updated."},{id:2,message:"You have a new friend request."},{id:3,message:"Password changed successfully."}]);return t},pn=()=>{const t=gn();return f.jsx(pt,{title:"Notifications",children:f.jsx(ne,{dataSource:t,renderItem:e=>f.jsx(ne.Item,{children:e.message},e.id)})})},yn=()=>{const[t,e]=r.useState("profile"),o=n=>{e(n),console.log(t)};return f.jsxs(Z,{defaultActiveKey:"profile",onChange:o,children:[f.jsx(Z.TabPane,{tab:"Profile",children:f.jsx(mn,{})},"profile"),f.jsx(Z.TabPane,{tab:"Notifications",children:f.jsx(pn,{})},"notifications")]})};export{yn as default};
