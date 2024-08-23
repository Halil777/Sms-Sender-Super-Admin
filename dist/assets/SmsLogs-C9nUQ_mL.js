import{d as r,r as l,j as t}from"./index-CkZ-JNO8.js";import{P as c,U as u}from"./UniversalSearch-DrMAIbQe.js";import{G as i}from"./iconBase-DEYnzki8.js";import{D as m,M as g,F as d}from"./Table-CrRKFB75.js";import{B as x}from"./index-Bmod1RRe.js";import"./index-5iRpS_5u.js";import"./index-CUEl6V17.js";import"./omit-D7wq8p5F.js";function C(e){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function f(e){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}const h=r(x)`
  width: 103px;
  height: 47px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background-color: #ffffff;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`,y=r(f)`
  width: 15.58px;
  height: 14.17px;
  color: #64748b;
  margin-right: 8px; /* Adjust this margin to space the icon from the text */
`,S=[{label:"All SMS",key:"all"},{label:"Success",key:"success"},{label:"Error",key:"error"}],b=()=>{const[e,s]=l.useState("all"),n=a=>{console.log("click ",a),s(a.key)},o=t.jsx(g,{onClick:n,selectedKeys:[e],items:S});return t.jsx(m,{overlay:o,trigger:["hover"],children:t.jsx(h,{icon:t.jsx(y,{}),children:"Filter"})})},p=()=>t.jsx("div",{children:t.jsx(c,{leftContent:t.jsx(u,{placeholder:"Search sms-logs..."}),rightContent:t.jsx(b,{})})}),k=r.div`
  margin-top: 50px; /* Adjust this value as needed */
`,j=r(d)`
  .ant-table-thead > tr > th {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
    text-align: center;
    background-color: transparent; /* Remove header background color */
  }

  .ant-table-tbody > tr > td {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
    text-align: center;
  }
`,v=({onRowClick:e})=>{const s=[{title:"Ady",dataIndex:"name",key:"name"},{title:"Şu günki SMS sany",dataIndex:"todaySmsCount",key:"todaySmsCount"},{title:"Umumy SMS sany",dataIndex:"totalSmsCount",key:"totalSmsCount"},{title:"Danger count",dataIndex:"dangerCount",key:"dangerCount"},{title:"Status boýunça",dataIndex:"status",key:"status",render:(o,a)=>t.jsxs("div",{id:o,children:[t.jsxs("span",{children:[a.status,": "]}),t.jsx("span",{children:a.status==="Success"?a.successCount:a.errorCount})]})}],n=[{key:"1",name:"User A",todaySmsCount:10,totalSmsCount:150,dangerCount:2,status:"Success",successCount:145,errorCount:5},{key:"2",name:"User B",todaySmsCount:5,totalSmsCount:80,dangerCount:1,status:"Error",successCount:70,errorCount:10}];return t.jsx(k,{children:t.jsx(j,{dataSource:n,columns:s,pagination:!1,onRow:o=>({onClick:()=>e(o)})})})},I=r.div`
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  background-color: #ffffff;

  .ant-table-tbody > tr {
    background-color: #ffffff;
  }

  .ant-table-tbody > tr.status-Sending {
    background-color: orange; // Light orange
  }

  .ant-table-tbody > tr.status-Canceled {
    background-color: #ffebee; // Light red
  }

  .ant-table-tbody > tr.status-Done {
    background-color: green; // Light green
    color: white;
  }

  .ant-table-tbody > tr.status-Errored {
    background-color: red; // Light red
  }

  .back-icon {
    font-size: 14px;
    color: #6c5dd3;
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
`,w=()=>{const e={name:"User A",todaySmsCount:10,totalSmsCount:150,dangerCount:2,status:"Success",successCount:145,errorCount:5,tableData:[{sms:"SMS 1",sentTime:"2024-08-23 10:00",userCount:5,deliveredCount:4,status:"Sending"},{sms:"SMS 2",sentTime:"2024-08-23 11:00",userCount:3,deliveredCount:3,status:"Done"},{sms:"SMS 3",sentTime:"2024-08-23 12:00",userCount:2,deliveredCount:1,status:"Errored"},{sms:"SMS 4",sentTime:"2024-08-23 13:00",userCount:4,deliveredCount:2,status:"Canceled"}]},s=[{title:"Sms",dataIndex:"sms",key:"sms"},{title:"Ugradylan wagty",dataIndex:"sentTime",key:"sentTime"},{title:"Ugradylan ulanyjy sany",dataIndex:"userCount",key:"userCount"},{title:"Delivered count",dataIndex:"deliveredCount",key:"deliveredCount"},{title:"Status",dataIndex:"status",key:"status"}];return t.jsxs(I,{children:[t.jsx(C,{className:"back-icon",onClick:()=>console.log("Back to List")}),t.jsx(d,{dataSource:e.tableData,columns:s,pagination:!1,rowClassName:n=>`status-${n.status}`})]})},E=()=>{const[e,s]=l.useState(null),n=o=>{s(o)};return t.jsxs("div",{children:[t.jsx(p,{}),e?t.jsx(w,{}):t.jsx(v,{onRowClick:n})]})};export{E as default};
