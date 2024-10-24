import{d as l,r as d,j as t,u}from"./index-CCnGCN1I.js";import{P as i,U as c}from"./UniversalSearch-DoTMBG-G.js";import{b as m,c as C}from"./index-BddizAjD.js";import{D as x,M as g,T as S,S as f,F as y}from"./SmsStyle-RJCygbBX.js";import{B as b}from"./index-eJ_D80jr.js";import"./index-D0ww-XiL.js";import"./Overflow-EZV_UsgD.js";import"./index-CjN7oprs.js";import"./index-D9iyRCGo.js";import"./collapse-BbEVqHco.js";const p=l(b)`
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
`,k=l(m)`
  width: 15.58px;
  height: 14.17px;
  color: #64748b;
  margin-right: 8px; /* Adjust this margin to space the icon from the text */
`,h=[{label:"All SMS",key:"all"},{label:"Success",key:"success"},{label:"Error",key:"error"}],j=()=>{const[s,e]=d.useState("all"),o=n=>{console.log("click ",n),e(n.key)},a=t.jsx(g,{onClick:o,selectedKeys:[s],items:h});return t.jsx(x,{overlay:a,trigger:["hover"],children:t.jsx(p,{icon:t.jsx(k,{}),children:"Filter"})})},v=()=>t.jsx("div",{children:t.jsx(i,{leftContent:t.jsx(c,{placeholder:"Search sms-logs..."}),rightContent:t.jsx(j,{})})}),I=({onRowClick:s})=>{const{t:e}=u(),o=[{title:e("smslogs.name"),dataIndex:"name",key:"name"},{title:e("smslogs.todaySmsCount"),dataIndex:"todaySmsCount",key:"todaySmsCount"},{title:e("smslogs.totalSmsCount"),dataIndex:"totalSmsCount",key:"totalSmsCount"},{title:e("smslogs.dangerCount"),dataIndex:"dangerCount",key:"dangerCount"},{title:e("smslogs.statusBased"),dataIndex:"status",key:"status",render:(n,r)=>t.jsxs("div",{id:n,children:[t.jsxs("span",{children:[r.status,": "]}),t.jsx("span",{children:r.status==="Success"?r.successCount:r.errorCount})]})}],a=[{key:"1",name:"User A",todaySmsCount:10,totalSmsCount:150,dangerCount:2,status:"Success",successCount:145,errorCount:5},{key:"2",name:"User B",todaySmsCount:5,totalSmsCount:80,dangerCount:1,status:"Error",successCount:70,errorCount:10}];return t.jsx(S,{children:t.jsx(f,{dataSource:a,columns:o,onRow:n=>({onClick:()=>s(n)})})})},w=l.div`
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  background-color: #ffffff;

  .ant-table-tbody > tr {
    background-color: #ffffff;
  }

  .ant-table-tbody > tr.status-Sending {
    background-color: white; // Light orange
  }

  .ant-table-tbody > tr.status-Canceled {
    background-color: #ff9f9f; // Light red
  }

  .ant-table-tbody > tr.status-Done {
    background-color: white; // Light green
  }

  .ant-table-tbody > tr.status-Errored {
    background-color: #fab246; // Light red
  }

  .back-icon {
    font-size: 14px;
    color: #6c5dd3;
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
`,T=()=>{const s={name:"User A",todaySmsCount:10,totalSmsCount:150,dangerCount:2,status:"Success",successCount:145,errorCount:5,tableData:[{sms:"SMS 1",sentTime:"2024-08-23 10:00",userCount:5,deliveredCount:4,status:"Sending"},{sms:"SMS 2",sentTime:"2024-08-23 11:00",userCount:3,deliveredCount:3,status:"Done"},{sms:"SMS 3",sentTime:"2024-08-23 12:00",userCount:2,deliveredCount:1,status:"Errored"},{sms:"SMS 4",sentTime:"2024-08-23 13:00",userCount:4,deliveredCount:2,status:"Canceled"}]},e=[{title:"Sms",dataIndex:"sms",key:"sms"},{title:"Ugradylan wagty",dataIndex:"sentTime",key:"sentTime"},{title:"Ugradylan ulanyjy sany",dataIndex:"userCount",key:"userCount"},{title:"Delivered count",dataIndex:"deliveredCount",key:"deliveredCount"},{title:"Status",dataIndex:"status",key:"status"}];return t.jsxs(w,{children:[t.jsx(C,{className:"back-icon",onClick:()=>console.log("Back to List")}),t.jsx(y,{dataSource:s.tableData,columns:e,pagination:!1,rowClassName:o=>`status-${o.status}`})]})},N=()=>{const[s,e]=d.useState(null),o=a=>{e(a)};return t.jsxs("div",{children:[t.jsx(v,{}),s?t.jsx(T,{}):t.jsx(I,{onRowClick:o})]})};export{N as default};
