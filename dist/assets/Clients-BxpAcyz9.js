import{d as l,r as n,j as e,s as F}from"./index-CCnGCN1I.js";import{P as G,U as J}from"./UniversalSearch-DoTMBG-G.js";import{C as K}from"./CreateButton-D-wIifIX.js";import{a as _,u as Q,D as X}from"./index-58CspVKg.js";import{I as A,B as V}from"./index-eJ_D80jr.js";import{M}from"./index-BED0rxW9.js";import{S as N}from"./index-D0ww-XiL.js";import{F as Y,a as Z}from"./index-BddizAjD.js";import"./Skeleton-DUawiVNF.js";import"./Overflow-EZV_UsgD.js";const ee=l.h2`
  margin: 0;
`,te=l.div`
  margin-top: 20px;
`,j=l.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  color: #0e1217;
  font-family: "Inter", sans-serif;
`,k=l(A)`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  background-color: #f6f6f6;
  margin-bottom: 26px;
  font-size: 16px;
  border: none;
`,se=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,ae=({visible:a,onCancel:r,onAdd:C})=>{const[h,i]=n.useState(""),[E,d]=n.useState(""),[U,b]=n.useState(""),[u,v]=n.useState(0),[p,w]=n.useState("12 months"),[x,y]=n.useState(""),S=["Active","Passive","Paused"],$=async()=>{var P,m;const s={name:h,client_name:E,phone_count:u,usage_period:p,status:x,client_password:U};console.log("Adding client with data:",s);try{await _.post("http://localhost:3000/clients",s,{headers:{"Content-Type":"application/json"}}),F.success("Client added successfully!"),i(""),d(""),b(""),v(0),y(""),w("12 months"),C(),r()}catch(c){console.error("Error response:",c==null?void 0:c.response),F.error(`Error adding client: ${((m=(P=c==null?void 0:c.response)==null?void 0:P.data)==null?void 0:m.message)||c.message}`)}};return e.jsxs(M,{title:e.jsx(ee,{children:"Create New Client"}),visible:a,footer:null,onCancel:r,width:680,bodyStyle:{padding:"20px"},style:{top:100},children:[e.jsxs(te,{children:[e.jsx(j,{children:"Name"}),e.jsx(k,{placeholder:"Name",value:h,onChange:s=>i(s.target.value)}),e.jsx(j,{children:"Username"}),e.jsx(k,{placeholder:"Username",value:E,onChange:s=>d(s.target.value)}),e.jsx(j,{children:"Password"}),e.jsx(k,{placeholder:"Password",type:"password",value:U,onChange:s=>b(s.target.value)}),e.jsx(j,{children:"Phone"}),e.jsx(k,{placeholder:"Phone",value:u,onChange:s=>v(Number(s.target.value))}),e.jsx(j,{children:"Usage Period"}),e.jsx(k,{placeholder:"Usage Period (e.g., 12 months)",value:p,onChange:s=>w(s.target.value)}),e.jsx(j,{children:"Status"}),e.jsx(N,{placeholder:"Select status",value:x,onChange:s=>y(s),style:{width:"100%",marginBottom:"26px"},children:S.map(s=>e.jsx(N.Option,{value:s,children:s},s))})]}),e.jsx(se,{children:e.jsx(V,{type:"primary",onClick:$,children:"Add Client"})})]})},ne=()=>{const[a,r]=n.useState(!1),C=()=>{r(!0)},h=()=>{r(!1)},i=()=>{r(!1)};return e.jsxs("div",{children:[e.jsx(G,{leftContent:e.jsx(J,{placeholder:"Search here ..."}),rightContent:e.jsx(K,{onClick:C,children:"Create new one"})}),e.jsx(ae,{visible:a,onCancel:h,onAdd:i})]})},oe=a=>_.get(a).then(r=>r.data),re=()=>{const[a,r]=n.useState(!1),[C,h]=n.useState(!1),[i,E]=n.useState(null),[d,U]=n.useState(null),[b,u]=n.useState(""),[v,p]=n.useState(""),[w,x]=n.useState(0),[y,S]=n.useState("12 months"),[$,s]=n.useState(""),[P,m]=n.useState(""),c=["Active","Passive","Paused"],{data:T,mutate:H}=Q("http://localhost:3000/clients",oe);n.useEffect(()=>{d&&(async I=>{try{const g=(await _.get(`http://localhost:3000/clients/${I}`)).data;u(g.name),p(g.client_name),x(g.phone_count),S(g.usage_period),s(g.status),m(g.client_password)}catch(B){console.error("Error fetching client data:",B),F.error("Failed to fetch client data.")}})(d)},[d]);const R=t=>{E(t),r(!0)},z=t=>{U(t.key),h(!0),u(t.name),p(t.client_name),x(t.phone_count),S(t.usage_period),s(t.status),m(t.client_password)},L=async()=>{if(i)try{const t=await _.delete(`http://localhost:3000/clients/${i.key}`);if(t.status!==200)throw new Error(`Failed to delete client: ${t.statusText}`);H(),r(!1)}catch(t){console.error("Error deleting client:",t),M.error({title:"Error",content:"Failed to delete client."})}},W=()=>{r(!1)},q=async()=>{const t={key:d,name:b,client_name:v,phone_count:w,usage_period:y,status:$,client_password:P};try{await _.patch(`http://localhost:3000/clients/${d}`,t,{headers:{"Content-Type":"application/json"}}),F.success("Client updated successfully!"),H(),h(!1)}catch(I){console.error("Error updating client:",I),F.error("Failed to update client.")}};return e.jsxs(e.Fragment,{children:[e.jsx(le,{children:e.jsxs(ie,{children:[e.jsxs(O,{children:[e.jsx(o,{isHeader:!0,children:"Name"}),e.jsx(o,{isHeader:!0,children:"Client Name"}),e.jsx(o,{isHeader:!0,children:"Client Password"}),e.jsx(o,{isHeader:!0,children:"Phone Count"}),e.jsx(o,{isHeader:!0,children:"Usage Period"}),e.jsx(o,{isHeader:!0,children:"Status"}),e.jsx(o,{isHeader:!0,children:"Action"})]}),T==null?void 0:T.map(t=>e.jsxs(O,{children:[e.jsx(o,{children:t.name}),e.jsx(o,{children:t.client_name}),e.jsx(o,{children:"********"}),e.jsx(o,{children:t.phone_count}),e.jsx(o,{children:t.usage_period}),e.jsx(o,{children:e.jsx(de,{status:t.status,children:t.status})}),e.jsxs(o,{children:[e.jsx(Y,{style:{color:"#1890FF",cursor:"pointer",marginRight:10},onClick:()=>z(t)}),e.jsx(Z,{style:{color:"#FF4D4F",cursor:"pointer"},onClick:()=>R(t)})]})]},t.key))]})}),e.jsx(M,{title:"Delete Client",visible:a,onOk:L,onCancel:W,okText:"Delete",cancelText:"Cancel",children:e.jsx("p",{children:`Are you sure you want to delete ${i==null?void 0:i.name}?`})}),e.jsxs(X,{title:`Edit Client ${d}`,placement:"right",closable:!0,onClose:()=>h(!1),visible:C,width:500,children:[e.jsxs("div",{children:[e.jsx(f,{children:"Name"}),e.jsx(D,{placeholder:"Name",value:b,onChange:t=>u(t.target.value)}),e.jsx(f,{children:"Username"}),e.jsx(D,{placeholder:"Username",value:v,onChange:t=>p(t.target.value)}),e.jsx(f,{children:"Password"}),e.jsx(A.Password,{placeholder:"Password",value:P,onChange:t=>m(t.target.value),visibilityToggle:!0,iconRender:t=>t?"👁️":"🙈"}),e.jsx(f,{children:"Phone"}),e.jsx(D,{placeholder:"Phone",value:w,onChange:t=>x(Number(t.target.value))}),e.jsx(f,{children:"Usage Period"}),e.jsx(D,{placeholder:"Usage Period",value:y,onChange:t=>S(t.target.value)}),e.jsx(f,{children:"Status"}),e.jsx(N,{placeholder:"Select status",value:$,onChange:t=>s(t),style:{width:"100%",marginBottom:"26px"},children:c.map(t=>e.jsx(N.Option,{value:t,children:t},t))})]}),e.jsx(V,{type:"primary",onClick:q,children:"Update Client"})]})]})},le=l.div`
  margin: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
`,ie=l.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`,O=l.div`
  display: table-row;
`,o=l.div`
  display: table-cell;
  padding: 12px;
  text-align: center;
  border: 1px solid #eaeaea;
  background-color: ${({isHeader:a})=>a?"#f5f5f5":"#ffffff"};
  color: ${({isHeader:a})=>a?"#333":"#555"};
  font-weight: ${({isHeader:a})=>a?"bold":"normal"};

  &:last-child {
    padding: 0;
  }

  &:hover {
    background-color: ${({isHeader:a})=>a?"#f5f5f5":"#f0f0f0"};
  }
`,de=l.span`
  padding: 4px 8px;
  border-radius: 4px;
  color: #fff;
  background-color: ${({status:a})=>a==="Active"?"#52c41a":a==="Passive"?"#f5222d":a==="Paused"?"#faad14":"#d9d9d9"};
`,f=l.label`
  display: block;
  margin-bottom: 8px;
`,D=l(A)`
  margin-bottom: 16px;
`,be=()=>e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx(re,{})]});export{be as default};
