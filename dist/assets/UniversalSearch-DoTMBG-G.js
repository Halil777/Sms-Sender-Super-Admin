import{d as i,j as e,r as o}from"./index-CCnGCN1I.js";import{R as a}from"./index-eJ_D80jr.js";const x=i.div`
  height: 87px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`,g=({leftContent:t,rightContent:r})=>e.jsxs(x,{children:[e.jsx("div",{children:t}),e.jsx("div",{children:r})]}),p=i.div`
  display: flex;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 385px;
  height: 47px;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: 38px;
  }
`,c=i.input`
  border: 1px solid #ffffff;
  outline: none;
  flex-grow: 1;
  padding: 0 10px;
  font-size: 16px;
  height: 100%;
  border-radius: 8px;
  transition: width 0.3s ease;
  width: ${t=>t.isFocused?"445px":"385px"};

  @media (max-width: 768px) {
    width: 100%;
    height: 38px;
  }
`,h=i.div`
  width: 14.75px;
  height: 14.75px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #64748b;
  margin-left: 10px;
`,u=({placeholder:t,onChange:r,value:n})=>{const[d,s]=o.useState(!1);return e.jsxs(p,{children:[e.jsx(h,{children:e.jsx(a,{style:{fontSize:"16.75px",color:"#64748b"}})}),e.jsx(c,{type:"text",placeholder:t,onChange:r,value:n,isFocused:d,onFocus:()=>s(!0),onBlur:()=>s(!1)})]})};export{g as P,u as U};
