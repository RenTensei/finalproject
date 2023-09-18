import{b as A,u as d,s as x,c as j,d as p,r as v,j as e}from"./index-c0c80a1a.js";import{c as _,a as b,e as r,F as y,b as N,d as a,E as s}from"./index.esm-bd852c03.js";const S=[{label:"if you do not have physical activity and sedentary work",value:"1.2"},{label:"if you do short runs or light gymnastics 1-3 times a week",value:"1.375"},{label:"if you play sports with average loads 3-5 times a week",value:"1.55"},{label:"if you train fully 6-7 times a week",value:"1.725"},{label:"if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program",value:"1.9"}],B=_().shape({name:b().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").required("Name is required"),age:r().min(0,"Age must be a positive number").required("Age is required"),height:r().min(0,"Height must be a positive number").required("Height is required"),weight:r().min(0,"Weight must be a positive number").required("Weight is required")}),w="/HealthyHub/assets/Setting-b0655153.png",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgBjVNNTsJAGH1DSgKs6h4inECOQG+gGwM7ewK9AXAC5QTsgJi44ATACeAGBSGuqwvFWPv5hjK1Nlh4SduZ7++975sOkAFP+jaOIJftLNytZNjJirGSbBZKt1zWA7y7NeX6aTX09wXh+BuY1lRrGSvwZFjNozhXkCoQ9tLJGpEt7HHZyENNdI62K/3ayIiVZVVRrY5JiGzKjoLEL6uma3xrGT3wc1FRTWfXggA3AbZnqQmQLZzs107SE+Cjw3Y8GPlk83AAG3ms6+ewb+S9yNO5hQyU1fUCR2BaiFWwbz9AeGWmbKCVWlB9Dq1qcvR3dwo0Lr8gjn7omnHK7TRTZJOZidM5sQINw8jz5oCKnieDMUsv9kGarREAjomjYtPC1heU7N9Crv8sA9dCrk0Wey93yWN2k23RZn/i7XW34blO1jJs4ESQ4JI583gGrNdVHNApRXRMDrl7Drur9ypZVVE2l1Ua/UPJErW00IT8a6d/ChhEV7jwzzXe+ul78gOBgrXwG/pO0gAAAABJRU5ErkJggg==",f="_container_meovh_8",G="_containerTitle_meovh_25",P="_cancelBtn_meovh_39",k="_saveBtn_meovh_53",E="_containerContent_meovh_63",R="_mainImg_meovh_69",W="_containerSettings_meovh_92",F="_containerSetting_meovh_92",L="_containerSettingFirst_meovh_119",I="_containerPhoto_meovh_148",M="_inputPhoto_meovh_159",T="_photo_meovh_165",Z="_svg_meovh_170",U="_contairGender_meovh_174",V="_containerWeight_meovh_185",H="_containerActivity_meovh_207",X="_text_meovh_224",q="_boxActivity_meovh_229",J="_mobileBtn_meovh_242",Q="_cancelBtnM_meovh_247",z="_saveBtnM_meovh_255",t={container:f,containerTitle:G,cancelBtn:P,saveBtn:k,containerContent:E,mainImg:R,containerSettings:W,containerSetting:F,containerSettingFirst:L,containerPhoto:I,inputPhoto:M,photo:T,svg:Z,contairGender:U,containerWeight:V,containerActivity:H,text:X,boxActivity:q,mobileBtn:J,cancelBtnM:Q,saveBtnM:z},Y="/HealthyHub/assets/defaultPhoto-57fe53a4.jpg";function ee(){A(),d(x),d(j);const h=p(),[o,K]=v.useState({name:"",age:"",height:"",gender:"",weight:"",activityLevel:"",photo:null}),[O,g]=v.useState({...o}),c=i=>{h("/main")},m=()=>{h("/main"),g({...o})},u=(i,l)=>{const n=i.target.files[0];l("photo",n?URL.createObjectURL(n):Y)};return e.jsxs("div",{className:t.container,children:[e.jsxs("div",{className:t.containerTitle,children:[e.jsx("h2",{children:"Profile setting"}),e.jsxs("div",{children:[e.jsx("button",{className:t.cancelBtn,onClick:m,children:"Cancel"}),e.jsx("button",{type:"submit",className:t.saveBtn,onClick:c,children:"Save"})]})]}),e.jsxs("div",{className:t.containerContent,children:[e.jsx("div",{children:e.jsx("img",{src:w,alt:"Picture",className:t.mainImg})}),e.jsx("div",{className:t.containerSettings,children:e.jsx(y,{initialValues:o,validationSchema:B,onSubmit:c,children:({values:i,setFieldValue:l})=>e.jsxs(N,{children:[e.jsxs("div",{className:t.containerSetting,children:[e.jsxs("div",{className:t.containerSettingFirst,children:[e.jsxs("label",{children:["Your name",e.jsx(a,{type:"text",name:"name"}),e.jsx(s,{name:"name",component:"div"})]}),e.jsxs("label",{children:["Your age",e.jsx(a,{type:"number",name:"age",min:"0"}),e.jsx(s,{name:"age",component:"div"})]}),e.jsxs("label",{children:["Height",e.jsx(a,{type:"number",name:"height",min:"0"}),e.jsx(s,{name:"height",component:"div"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:t.text,children:"Your photo"}),e.jsxs("div",{className:t.containerPhoto,children:[e.jsx("div",{children:e.jsx("img",{src:i.photo,alt:"Profile",style:{width:"36px",height:"36px"},className:t.photo})}),e.jsx("img",{src:C,alt:"Profile",className:t.svg,style:{width:"16px",height:"16px"}}),e.jsx("label",{htmlFor:"photo",children:"Download new photo"}),e.jsx("input",{className:t.inputPhoto,type:"file",id:"photo",accept:"image/*",onChange:n=>u(n,l)})]}),e.jsx("label",{className:t.text,children:"Gender"}),e.jsxs("div",{className:t.contairGender,children:[e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"gender",value:"male"}),"Male"]}),e.jsxs("label",{children:[e.jsx(a,{type:"radio",name:"gender",value:"female"}),"Female"]})]}),e.jsx("label",{className:t.text,children:"Weight"}),e.jsx("div",{className:t.containerWeight,children:e.jsxs("label",{children:[e.jsx(a,{type:"number",name:"weight",min:"0"}),e.jsx(s,{name:"weight",component:"div"})]})})]})]}),e.jsx("div",{children:e.jsxs("div",{className:t.containerActivity,children:[e.jsx("label",{htmlFor:"activityLevel",className:t.text,children:"Your activity"}),S.map(n=>e.jsxs("div",{children:[e.jsx(a,{type:"radio",id:`activityLevel-${n.value}`,name:"activityLevel",value:n.value,className:t.boxActivity}),e.jsxs("label",{className:t.text,htmlFor:`activityLevel-${n.value}`,children:[n.value," - ",n.label]})]},n.value))]})})]})})})]}),e.jsxs("div",{className:t.mobileBtn,children:[e.jsx("button",{type:"submit",className:t.saveBtnM,onClick:c,children:"Save"}),e.jsx("button",{className:t.cancelBtnM,onClick:m,children:"Cancel"})]})]})}export{ee as default};
