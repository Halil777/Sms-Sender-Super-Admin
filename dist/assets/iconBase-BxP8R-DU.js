import{d,j as o,r as x,s as a}from"./index-G9huiumW.js";import{R as v}from"./index-_OVBo1d2.js";const y=d.div`
  height: 87px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
`,B=({leftContent:e,rightContent:t})=>o.jsxs(y,{children:[o.jsx("div",{children:e}),o.jsx("div",{children:t})]}),w=d.div`
  display: flex;
  align-items: center;
  border: 1px solid #ededed; /* Border color */
  border-radius: 8px; /* Radius */
  background-color: #ffffff; /* Background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow */
  width: 385px; /* Default width */
  height: 47px; /* Height */
  transition: width 0.3s ease; /* Smooth width transition */
`,j=d.input`
  border: 1px solid #ffffff; /* Border color */
  outline: none;
  flex-grow: 1;
  padding: 0 10px;
  font-size: 16px;
  height: 100%;
  border-radius: 8px;
  transition: width 0.3s ease; /* Smooth width transition */
  width: ${e=>e.isFocused?"445px":"385px"}; /* Adjust width on focus */
`,O=d.div`
  width: 14.75px; /* Icon width */
  height: 14.75px; /* Icon height */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px; /* Space between icon and input */
  color: #64748b; /* Icon color */
  margin-left: 10px;
`,R=({placeholder:e,onChange:t,value:r})=>{const[n,i]=x.useState(!1);return o.jsxs(w,{children:[o.jsx(O,{children:o.jsx(v,{style:{fontSize:"16.75px",color:"#64748b"}})}),o.jsx(j,{type:"text",placeholder:e,onChange:t,value:r,isFocused:n,onFocus:()=>i(!0),onBlur:()=>i(!1)})]})};var m={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=a.createContext&&a.createContext(m),P=["attr","size","title"];function S(e,t){if(e==null)return{};var r=E(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(n){I(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function I(e,t,r){return t=C(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){var t=N(e,"string");return typeof t=="symbol"?t:t+""}function N(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function g(e){return e&&e.map((t,r)=>a.createElement(t.tag,u({key:r},t.attr),g(t.child)))}function F(e){return t=>a.createElement(_,l({attr:u({},e.attr)},t),g(e.child))}function _(e){var t=r=>{var{attr:n,size:i,title:s}=e,b=S(e,P),f=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,b,{className:c,style:u(u({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return p!==void 0?a.createElement(p.Consumer,null,r=>t(r)):t(m)}export{F as G,B as P,R as U};
