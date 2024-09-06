import{u as a,j as t,d as e}from"./index-CmCOnMul.js";import{P as d,U as s,S as r}from"./SmsStyle-CZQ25McZ.js";import{C as o}from"./CreateButton-BY21fiNb.js";import"./index-DbenAT6j.js";import"./index-BCrIQ0YJ.js";const i=()=>{const{t:n}=a();return t.jsx("div",{children:t.jsx(d,{leftContent:t.jsx(s,{placeholder:`${n("dashboard.pendingMessages")}...`}),rightContent:t.jsx(o,{children:"Create Pending "})})})},l=e.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  padding: 4px 14px;
  background-color: #009e36;
  border: none;
  color: #fff;
  cursor: pointer;
`,c=e.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  padding: 4px 14px;
  background-color: #b40000;
  border: none;
  color: #fff;
  cursor: pointer;
`,y=[{title:"Client name",dataIndex:"clientName",key:"clientName"},{title:"SMS Hat",dataIndex:"smsHat",key:"smsHat"},{title:"Ulanyjy sany",dataIndex:"ulanyjySany",key:"ulanyjySany"},{title:"Ugradyldy",dataIndex:"ugradyldy",key:"ugradyldy"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",dataIndex:"action",key:"action",align:"center",render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5px",alignItems:"center"},children:[t.jsx(l,{onClick:()=>alert("clicked to send button"),children:"Send"}),t.jsx(c,{onClick:()=>alert("clicked to delete button"),children:"Delete"})]})}],u=[{clientName:"John Doe",smsHat:"100",ulanyjySany:"500",ugradyldy:"2022-01-01",status:"Pending"},{clientName:"Jane Doe",smsHat:"200",ulanyjySany:"1000",ugradyldy:"2022-02-01",status:"Active"},{clientName:"Bob Smith",smsHat:"50",ulanyjySany:"200",ugradyldy:"2022-03-01",status:"Inactive"}],x=()=>t.jsx("div",{style:{marginTop:"50px"},children:t.jsx(r,{columns:y,dataSource:u})}),b=()=>t.jsxs("div",{children:[t.jsx(i,{}),t.jsx(x,{})]});export{b as default};
