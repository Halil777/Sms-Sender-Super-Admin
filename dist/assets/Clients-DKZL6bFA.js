import{d as s,j as e,r as d,u as j}from"./index-CmCOnMul.js";import{P as C,U as b,S as g}from"./SmsStyle-CZQ25McZ.js";import{C as y}from"./CreateButton-BY21fiNb.js";import{M as x}from"./index-BNkSSIMG.js";import{I as k}from"./index-DbenAT6j.js";import{F as S,a as w}from"./index-DDHf7nDi.js";import"./index-BCrIQ0YJ.js";import"./Skeleton-CuPFqwJY.js";const D=s.button`
  width: 100%;
  height: 54px;
  border-radius: 8px;
  gap: 10px;
  background-color: #64748b;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4b5563; /* Darker shade for hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 116, 139, 0.5);
  }
`,v=({children:n})=>e.jsx(D,{children:n||"Add"}),I=s.h2`
  margin: 0;
`,F=s.div`
  margin-top: 20px;
`,l=s.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  color: #0e1217;
  font-family: "Inter", sans-serif;
`,i=s(k)`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  background-color: #f6f6f6;
  margin-bottom: 26px;
  font-size: 16px;
  border: none;
`,P=s.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,M=({visible:n,onCancel:t,onAdd:o})=>e.jsxs(x,{title:e.jsx(I,{children:"Create New Client"}),visible:n,footer:null,onCancel:t,width:680,bodyStyle:{padding:"20px"},style:{top:100},children:[e.jsxs(F,{children:[e.jsx(l,{children:"Name"}),e.jsx(i,{placeholder:"Name"}),e.jsx(l,{children:"Username"}),e.jsx(i,{placeholder:"Username"}),e.jsx(l,{children:"Password"}),e.jsx(i,{placeholder:"Password",type:"password"}),e.jsx(l,{children:"Phone"}),e.jsx(i,{placeholder:"Phone"})]}),e.jsx(P,{children:e.jsx(v,{onClick:o,children:"Add Client"})})]}),N=()=>{const[n,t]=d.useState(!1),o=()=>{t(!0)},c=()=>{t(!1)},a=()=>{t(!1)};return e.jsxs("div",{children:[e.jsx(C,{leftContent:e.jsx(b,{placeholder:"Search here ..."}),rightContent:e.jsx(y,{onClick:o,children:"Create new one"})}),e.jsx(M,{visible:n,onCancel:c,onAdd:a})]})},A=n=>[{title:"Name",dataIndex:"name",key:"name"},{title:"Client Name",dataIndex:"clientName",key:"clientName"},{title:"Phone Count",dataIndex:"phoneCount",key:"phoneCount"},{title:"Usage Period",dataIndex:"usefulDuration",key:"usefulDuration"},{title:"Status",dataIndex:"status",key:"status",render:t=>e.jsx("span",{style:{backgroundColor:t==="Active"?"#219653":t==="Paused"?"#747474":"#F80000",color:"#fff",padding:"5px 10px",borderRadius:"20px"},children:t})},{title:"Action",key:"action",render:(t,o)=>e.jsxs(e.Fragment,{children:[e.jsx(S,{style:{color:"blue",cursor:"pointer",marginRight:10}}),e.jsx(w,{style:{color:"red",cursor:"pointer"},onClick:()=>n(o)})]})}],T=[{key:"1",name:"John Doe",clientName:"Doe Enterprises",phoneCount:"Android - 5",usefulDuration:"2 years",status:"Active"},{key:"2",name:"Jane Smith",clientName:"Smith Co.",phoneCount:"iOS - 3",usefulDuration:"1 year",status:"Passive"}],U=()=>{const{t:n}=j(),[t,o]=d.useState(T),[c,a]=d.useState(!1),[r,h]=d.useState(null),p=u=>{h(u),a(!0)},m=()=>{o(t.filter(u=>u.key!==r.key)),a(!1)},f=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{columns:A(p),dataSource:t}),e.jsx(x,{title:"Delete Client",visible:c,onOk:m,onCancel:f,okText:"Delete",cancelText:"Cancel",children:e.jsx("p",{children:n("clients.deleteConfirm",{name:r==null?void 0:r.name})})})]})},L=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(U,{})]});export{L as default};
