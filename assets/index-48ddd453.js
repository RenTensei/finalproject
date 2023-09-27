import{e as g,n as p,r as x,j as s,F as _,g as j,h as v,E as N,o as $,L as I}from"./index-81e6f68a.js";import{s as a,S,a as F,b as e}from"./Form.module-7af96e82.js";import{c as w,a as y}from"./index.esm-f1464eb7.js";import{R as P}from"./RenderImagesAuthPages-dfa080ac.js";const f=w().shape({email:y().email().test("has-dot","Email must contain a dot (.)",t=>t.includes("@")&&t.split("@")[1].includes(".")).required("Email is a required field")}),E={email:""},b=()=>{const t=g(),r=p(),[n,l]=x.useState({email:""}),c=i=>{t($(i)),r("/signin")};return s.jsx(_,{initialValues:E,validationSchema:f,onSubmit:c,children:({errors:i,touched:o,setFieldTouched:m})=>s.jsxs(j,{autoComplete:"off",className:a.Form,children:[s.jsx("label",{htmlFor:"email",className:a.Label}),s.jsxs("div",{className:a.Input_wrapper,children:[s.jsx(v,{type:"email",name:"email",placeholder:"E-mail",className:`${a.Input} ${i.email&&o.email?a.Input__error:n.email&&!i.email?a.Input__success:null}`,onInput:d=>{const u=d.target.value;l(h=>({...h,email:u})),m("email",!0)}}),s.jsx(N,{className:`${a.Message} ${a.Message__error}`,name:"email",component:"div"}),i.email&&o.email?s.jsx("div",{className:`${a.Icon} 
                  ${a.Icon__right} 
                  ${a.Icon__error} 
                  ${a.Icon__right_secondary}`,children:s.jsx(S,{width:24,height:24})}):n.email&&!i.email?s.jsx("div",{className:`${a.Icon} ${a.Icon__right} ${a.Icon__success} ${a.Icon__right_secondary}`,children:s.jsx(F,{width:24,height:24})}):null]}),s.jsx("button",{type:"submit",className:a.Button,children:"Send"})]})})},L=()=>s.jsxs("div",{className:e.Container,children:[s.jsx(P,{}),s.jsxs("div",{className:e.Text_container,children:[s.jsx("h1",{className:e.Title,children:"Forgot your password"}),s.jsx("p",{className:e.Text,children:"We will send you an email with recovery instructions"}),s.jsx(b,{}),s.jsxs("div",{className:e.Container_logn_in,children:[s.jsx("p",{className:e.Paragraph,children:"Do you already have an account?"}),s.jsx(I,{to:"/signin",className:e.Link,children:"Sign in"})]})]})]}),T=L;export{T as default};
