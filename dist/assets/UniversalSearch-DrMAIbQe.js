import{d as o,j as e,r as d}from"./index-CkZ-JNO8.js";import{d as a}from"./index-Bmod1RRe.js";const c=o.div`
  height: 87px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
`,u=({leftContent:t,rightContent:i})=>e.jsxs(c,{children:[e.jsx("div",{children:t}),e.jsx("div",{children:i})]}),x=o.div`
  display: flex;
  align-items: center;
  border: 1px solid #ededed; /* Border color */
  border-radius: 8px; /* Radius */
  background-color: #ffffff; /* Background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow */
  width: 385px; /* Default width */
  height: 47px; /* Height */
  transition: width 0.3s ease; /* Smooth width transition */
`,p=o.input`
  border: 1px solid #ffffff; /* Border color */
  outline: none;
  flex-grow: 1;
  padding: 0 10px;
  font-size: 16px;
  height: 100%;
  border-radius: 8px;
  transition: width 0.3s ease; /* Smooth width transition */
  width: ${t=>t.isFocused?"445px":"385px"}; /* Adjust width on focus */
`,h=o.div`
  width: 14.75px; /* Icon width */
  height: 14.75px; /* Icon height */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px; /* Space between icon and input */
  color: #64748b; /* Icon color */
  margin-left: 10px;
`,g=({placeholder:t,onChange:i,value:n})=>{const[s,r]=d.useState(!1);return e.jsxs(x,{children:[e.jsx(h,{children:e.jsx(a,{style:{fontSize:"16.75px",color:"#64748b"}})}),e.jsx(p,{type:"text",placeholder:t,onChange:i,value:n,isFocused:s,onFocus:()=>r(!0),onBlur:()=>r(!1)})]})};export{u as P,g as U};
