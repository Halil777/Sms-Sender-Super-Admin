import{d as o,j as e,r as h,u as b}from"./index-CRD8WN9y.js";import{P as m,U as g}from"./iconBase-xaMYT9wI.js";import{M as p,C}from"./CreateButton-BZ0jNLSe.js";import{I as v}from"./index-BGvIwn8s.js";import{F as w,a as y}from"./index-DkCejqQh.js";import"./Skeleton-CWNAcejo.js";import"./omit-DXgDXInf.js";const k=o.button`
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
`,P=({children:t})=>e.jsx(k,{children:t||"Add"}),A=o.h2`
  margin: 0;
`,S=o.div`
  margin-top: 20px;
`,d=o.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  color: #0e1217;
  font-family: "Inter", sans-serif;
`,c=o(v)`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  background-color: #f6f6f6;
  margin-bottom: 26px;
  font-size: 16px;
  border: none;
`,D=o.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,I=({visible:t,onCancel:n,onAdd:i})=>e.jsxs(p,{title:e.jsx(A,{children:"Create New Client"}),visible:t,footer:null,onCancel:n,width:680,bodyStyle:{padding:"20px"},style:{top:100},children:[e.jsxs(S,{children:[e.jsx(d,{children:"Name"}),e.jsx(c,{placeholder:"Name"}),e.jsx(d,{children:"Username"}),e.jsx(c,{placeholder:"Username"}),e.jsx(d,{children:"Password"}),e.jsx(c,{placeholder:"Password",type:"password"}),e.jsx(d,{children:"Phone"}),e.jsx(c,{placeholder:"Phone"})]}),e.jsx(D,{children:e.jsx(P,{onClick:i,children:"Add Client"})})]}),F=()=>{const[t,n]=h.useState(!1),i=()=>{n(!0)},x=()=>{n(!1)},l=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx(m,{leftContent:e.jsx(g,{placeholder:"Search here ..."}),rightContent:e.jsx(C,{onClick:i,children:"Create new one"})}),e.jsx(I,{visible:t,onCancel:x,onAdd:l})]})},T=o.div`
  overflow: auto;
  max-height: 800px; /* Adjust based on your layout */
  position: relative;
  background-color: #fff;
  margin-top: 50px;
  padding: 20px;
  border-radius: 8px;
`,z=o.table`
  width: 100%;
  border-collapse: collapse;
`,r=o.th`
  background-color: #fff;
  position: sticky;
  top: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0e1217;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`,a=o.td`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #0e1217;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  opacity: 0.8;
`,M=o.tr``,B=o.div`
  position: absolute;
  width: 5px;
  height: 95px;
  top: 64px;
  left: 1080px;
  border-radius: 17px;
  background-color: rgba(151, 151, 151, 0.5); /* 50% opacity */
`,N=o.select`
  width: ${t=>t.status==="Active"?"83px":t.status==="Paused"?"81px":t.status==="Passive"?"92px":"auto"};
  height: 30px;
  border-radius: 30px;
  padding: 4px 14px;
  background-color: ${t=>t.status==="Active"?"#219653":t.status==="Paused"?"#747474":t.status==="Passive"?"#F80000":"#ffffff"};
  color: #ffffff;
  border: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  -webkit-appearance: none; /* Hide default arrow */
  -moz-appearance: none; /* Hide default arrow */
  appearance: none; /* Hide default arrow */
  option {
    color: #ffffff;
  }
  &:focus {
    outline: none; /* Remove default focus outline */
  }
`,H=o.div`
  display: flex;
  gap: 10px; /* Space between icons */
  svg {
    font-size: 20px; /* Icon size */
    cursor: pointer;
  }
`,E=[{id:1,name:"John Doe",clientName:"Doe Enterprises",phoneCount:"Android - 5",usefulDuration:"2 years",status:"Active"},{id:2,name:"Jane Smith",clientName:"Smith Co.",phoneCount:3,usefulDuration:"1 year",status:"Passive"}],U=()=>{const{t}=b(),[n,i]=h.useState(!1),[x,l]=h.useState(null),u=s=>{l(s),i(!0)},f=()=>{console.log("Delete client with id:",x),i(!1)},j=()=>{i(!1),l(null)};return e.jsxs(T,{children:[e.jsxs(z,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(r,{children:t("clients.name")}),e.jsx(r,{children:t("clients.clientName")}),e.jsx(r,{children:t("clients.phoneCount")}),e.jsx(r,{children:t("clients.usagePeriod")}),e.jsx(r,{children:t("clients.status")}),e.jsx(r,{children:t("clients.action")})]})}),e.jsx("tbody",{children:E.map(s=>e.jsxs(M,{children:[e.jsx(a,{children:s.name}),e.jsx(a,{children:s.clientName}),e.jsx(a,{children:s.phoneCount}),e.jsx(a,{children:s.usefulDuration}),e.jsx(a,{children:e.jsxs(N,{status:s.status,children:[e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Paused",children:"Paused"}),e.jsx("option",{value:"Passive",children:"Passive"})]})}),e.jsx(a,{children:e.jsxs(H,{children:[e.jsx(w,{style:{color:"#1A54EB"}}),e.jsx(y,{style:{color:"#FF3521"},onClick:()=>u(s.id)})]})})]},s.id))})]}),e.jsx(B,{}),e.jsx(p,{title:"Delete Client",visible:n,onOk:f,onCancel:j,okText:"Delete",okButtonProps:{danger:!0},children:e.jsx("p",{children:"Are you sure you want to delete this client?"})})]})},G=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(U,{})]});export{G as default};
