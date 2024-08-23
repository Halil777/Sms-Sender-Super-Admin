import{j as e,d as i}from"./index-CkZ-JNO8.js";import{P as s,U as a}from"./UniversalSearch-DrMAIbQe.js";import{C as r}from"./CreateButton-BV116u87.js";import{F as o}from"./Table-CrRKFB75.js";import{R as c,a as d}from"./EditOutlined-Da9mAg5L.js";import"./index-Bmod1RRe.js";import"./omit-D7wq8p5F.js";import"./index-5iRpS_5u.js";import"./index-CUEl6V17.js";const l=()=>e.jsx("div",{children:e.jsx(s,{leftContent:e.jsx(a,{placeholder:"Search Licenses..."}),rightContent:e.jsx(r,{children:"Create New Licenses"})})}),p=i.div`
  margin-top: 50px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
`,n=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;

  .anticon {
    font-size: 18px;
  }

  .edit-icon {
    color: #1a54eb;
  }

  .delete-icon {
    color: red;
  }
`,f=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${t=>{switch(t.status){case"active":return"#e0f7fa";case"passive":return"#f1f8e9";case"pending":return"#fff3e0";default:return"#ffffff"}}};
  color: ${t=>t.status==="passive"?"#000":"#333"};
  cursor: default;
`,x=[{title:"Client Name",dataIndex:"clientName",key:"clientName"},{title:"License Key",dataIndex:"licenseKey",key:"licenseKey"},{title:"Phone Limit",dataIndex:"phoneLimit",key:"phoneLimit"},{title:"Usage Period",dataIndex:"usagePeriod",key:"usagePeriod"},{title:"Status",dataIndex:"status",key:"status",render:t=>e.jsx(f,{status:t,children:t.charAt(0).toUpperCase()+t.slice(1)})},{title:"Action",key:"action",render:()=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx(n,{className:"edit-icon",children:e.jsx(c,{})}),e.jsx(n,{className:"delete-icon",children:e.jsx(d,{})})]})}],m=[{key:"1",clientName:"Client A",licenseKey:"ABCD1234",phoneLimit:100,usagePeriod:"2024-01-01 to 2024-12-31",status:"active"},{key:"2",clientName:"Client B",licenseKey:"EFGH5678",phoneLimit:50,usagePeriod:"2024-01-01 to 2024-06-30",status:"pending"}],u=()=>e.jsx(p,{children:e.jsx(o,{columns:x,dataSource:m,pagination:!1,rowKey:"key"})}),I=()=>e.jsxs("div",{children:[e.jsx(l,{}),e.jsx(u,{})]});export{I as default};
