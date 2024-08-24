import{j as e,d as n,u as l}from"./index-G9huiumW.js";import{P as d,U as p}from"./iconBase-BxP8R-DU.js";import{C as u,M as m}from"./CreateButton-CEBvbrNJ.js";import{a as x,A as f}from"./index-Cpxyp2YR.js";import{F as y}from"./Table-B8KY6zjQ.js";import"./index-_OVBo1d2.js";import"./omit-DXgDXInf.js";import"./Skeleton-KnheAWmZ.js";import"./index-DIY7wIMH.js";import"./index-CRJvrYZx.js";const h=()=>e.jsx("div",{children:e.jsx(d,{leftContent:e.jsx(p,{placeholder:"Search Licenses..."}),rightContent:e.jsx(u,{children:"Create New Licenses"})})}),g=n.div`
  margin-top: 50px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
`,s=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;

  .edit-icon {
    color: #1a54eb;
    font-size: 18px;
  }

  .delete-icon {
    color: red;
    font-size: 18px;
  }
`,j=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${t=>{switch(t.status){case"active":return"#e0f7fa";case"passive":return"#f1f8e9";case"pending":return"#fff3e0";default:return"#ffffff"}}};
  color: ${t=>t.status==="passive"?"#000":"#333"};
  cursor: default;
`,k=()=>{const{t}=l(),a=i=>{m.confirm({title:"Are you sure you want to delete this item?",content:"This action cannot be undone.",okText:"Yes",okType:"danger",cancelText:"No",onOk(){console.log(`Delete record with key: ${i}`)}})},o=[{title:t("license.clientName"),dataIndex:"clientName",key:"clientName"},{title:t("license.licenseKey"),dataIndex:"licenseKey",key:"licenseKey"},{title:t("license.phoneLimit"),dataIndex:"phoneLimit",key:"phoneLimit"},{title:t("license.usagePeriod"),dataIndex:"usagePeriod",key:"usagePeriod"},{title:t("license.status"),dataIndex:"status",key:"status",render:i=>e.jsx(j,{status:i,children:i.charAt(0).toUpperCase()+i.slice(1)})},{title:t("license.action"),key:"action",render:(i,c)=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx(s,{className:"edit-icon",children:e.jsx(x,{className:"edit-icon"})}),e.jsx(s,{className:"delete-icon",onClick:()=>a(c.key),children:e.jsx(f,{className:"delete-icon"})})]})}],r=[{key:"1",clientName:"Client A",licenseKey:"ABCD1234",phoneLimit:100,usagePeriod:"2024-01-01 to 2024-12-31",status:"active"},{key:"2",clientName:"Client B",licenseKey:"EFGH5678",phoneLimit:50,usagePeriod:"2024-01-01 to 2024-06-30",status:"pending"}];return e.jsx(g,{children:e.jsx(y,{columns:o,dataSource:r,pagination:!1,rowKey:"key"})})},K=()=>e.jsxs("div",{children:[e.jsx(h,{}),e.jsx(k,{})]});export{K as default};
