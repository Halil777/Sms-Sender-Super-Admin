import{d as r,j as e,u as h,r as l}from"./index-CmCOnMul.js";import{P as j,U as C,S as b}from"./SmsStyle-CZQ25McZ.js";import{C as y}from"./CreateButton-BY21fiNb.js";import{a as w}from"./index-DDHf7nDi.js";import{M as S}from"./index-BNkSSIMG.js";import"./index-DbenAT6j.js";import"./index-BCrIQ0YJ.js";import"./Skeleton-CuPFqwJY.js";const g=r.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between input and button */
`,B=r.input`
  width: 233px;
  height: 47px;
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
`,D=()=>e.jsxs(g,{children:[e.jsx(B,{placeholder:"Enter word"}),e.jsx(y,{children:"Create Blacklist"})]}),M=()=>e.jsx("div",{children:e.jsx(j,{leftContent:e.jsx(C,{placeholder:"Search Blacklist words ..."}),rightContent:e.jsx(D,{})})}),T=()=>{const{t}=h(),o=[{key:"1",word:"example",identifiedCases:"Case 1, Case 2",date:"2024-08-23"},{key:"2",word:"test",identifiedCases:"Case 3",date:"2024-08-22"}],[n,d]=l.useState(o),[c,i]=l.useState(!1),[s,x]=l.useState(null),p=a=>{x(a),i(!0)},k=()=>{d(n.filter(a=>a.key!==s.key)),i(!1)},u=()=>{i(!1)},m=[{title:t("blacklist.word"),dataIndex:"word",key:"word"},{title:t("blacklist.identifiedCases"),dataIndex:"identifiedCases",key:"identifiedCases"},{title:t("blacklist.date"),dataIndex:"date",key:"date"},{title:t("blacklist.action"),key:"action",render:(a,f)=>e.jsx(e.Fragment,{children:e.jsx(w,{style:{color:"red",cursor:"pointer"},onClick:()=>p(f)})})}];return e.jsxs(e.Fragment,{children:[e.jsx(b,{dataSource:n,columns:m,rowKey:"key"}),e.jsx(S,{title:t("blacklist.confirmDeletion"),visible:c,onOk:k,onCancel:u,okText:t("blacklist.delete"),cancelText:t("blacklist.cancel"),children:e.jsx("p",{children:t("blacklist.confirmDeleteMessage",{word:s==null?void 0:s.word})})})]})},z=()=>e.jsxs("div",{children:[e.jsx(M,{}),e.jsx(T,{})]});export{z as default};
