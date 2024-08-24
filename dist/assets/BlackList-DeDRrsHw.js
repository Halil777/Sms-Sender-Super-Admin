import{d as n,j as e,u as l}from"./index-D76F0jWM.js";import{P as c,U as p}from"./iconBase-C734MoCI.js";import{C as x,M as f}from"./CreateButton-CfCxKxoR.js";import{A as u}from"./index-DQrEyCiv.js";import{B as k}from"./index-C1XnGqMB.js";import{F as m}from"./Table-DBACrPRq.js";import"./Skeleton-RKm2wVQv.js";import"./omit-DXgDXInf.js";import"./index-DSE13w5Z.js";import"./index-B3saixO9.js";const h=n.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between input and button */
`,b=n.input`
  width: 233px;
  height: 47px;
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
`,C=()=>e.jsxs(h,{children:[e.jsx(b,{placeholder:"Enter word"}),e.jsx(x,{children:"Create Blacklist"})]}),g=()=>e.jsx("div",{children:e.jsx(c,{leftContent:e.jsx(p,{placeholder:"Search Blacklist words ..."}),rightContent:e.jsx(C,{})})}),y=n.div`
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  background-color: #ffffff;
  margin-top: 50px;
  .ant-table-thead > tr > th {
    font-weight: bold;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    text-align: center;
    background-color: #ffffff;
  }

  .delete-icon {
    color: red;
    cursor: pointer;
    font-size: 18px;
  }
`,j=()=>{const{t}=l(),a=[{key:"1",word:"example",identifiedCases:"Case 1, Case 2",date:"2024-08-23"},{key:"2",word:"test",identifiedCases:"Case 3",date:"2024-08-22"}],i=[{title:t("blacklist.word"),dataIndex:"word",key:"word"},{title:t("blacklist.identifiedCases"),dataIndex:"identifiedCases",key:"identifiedCases"},{title:t("blacklist.date"),dataIndex:"date",key:"date"},{title:t("blacklist.action"),key:"action",render:(o,d)=>e.jsx(k,{icon:e.jsx(u,{className:"delete-icon"}),onClick:()=>r(d.key),type:"text"})}],r=o=>{f.confirm({title:"Are you sure you want to delete this item?",content:"This action cannot be undone.",okText:"Yes",okType:"danger",cancelText:"No",onOk(){s(o)},onCancel(){console.log("Cancel")}})},s=o=>{console.log(`Delete record with key: ${o}`)};return e.jsx(y,{children:e.jsx(m,{dataSource:a,columns:i,pagination:!1,rowKey:"key"})})},E=()=>e.jsxs("div",{children:[e.jsx(g,{}),e.jsx(j,{})]});export{E as default};
