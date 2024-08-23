import{d as r,j as e}from"./index-CkZ-JNO8.js";import{P as d,U as s}from"./UniversalSearch-DrMAIbQe.js";import{C as l}from"./CreateButton-BV116u87.js";import{G as c}from"./iconBase-DEYnzki8.js";import{F as p}from"./Table-CrRKFB75.js";import{B as x}from"./index-Bmod1RRe.js";import"./index-5iRpS_5u.js";import"./index-CUEl6V17.js";import"./omit-D7wq8p5F.js";const f=r.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between input and button */
`,h=r.input`
  width: 233px;
  height: 47px;
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
`,m=()=>e.jsxs(f,{children:[e.jsx(h,{placeholder:"Enter word"}),e.jsx(l,{children:"Create Blacklist"})]}),u=()=>e.jsx("div",{children:e.jsx(d,{leftContent:e.jsx(s,{placeholder:"Search Blacklist words ..."}),rightContent:e.jsx(m,{})})});function g(t){return c({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"},child:[]}]})(t)}const k=r.div`
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
`,y=()=>{const t=[{key:"1",word:"example",identifiedCases:"Case 1, Case 2",date:"2024-08-23"},{key:"2",word:"test",identifiedCases:"Case 3",date:"2024-08-22"}],n=[{title:"Word",dataIndex:"word",key:"word"},{title:"Anyklanan yagdaylar",dataIndex:"identifiedCases",key:"identifiedCases"},{title:"Doredilen senesi",dataIndex:"date",key:"date"},{title:"Action",key:"action",render:(a,i)=>e.jsx(x,{icon:e.jsx(g,{className:"delete-icon"}),onClick:()=>o(i.key),type:"text"})}],o=a=>{console.log(`Delete record with key: ${a}`)};return e.jsx(k,{children:e.jsx(p,{dataSource:t,columns:n,pagination:!1,rowKey:"key"})})},z=()=>e.jsxs("div",{children:[e.jsx(u,{}),e.jsx(y,{})]});export{z as default};
