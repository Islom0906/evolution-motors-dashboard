"use strict";(self.webpackChunkevolution_motors=self.webpackChunkevolution_motors||[]).push([[51],{63051:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var s=a(72791),o=a(2409),r=a(50419),l=a(66106),n=a(30914),i=a(49389),u=a(87309),c=a(91933),d=a(27169),m=a(29677),f=a(57689),p=a(16030),g=a(77221),b=a(80184);const h={facebook:"",instagram:"",telegram:"",youtube:""},Z=()=>{const[e]=o.Z.useForm(),t=(0,f.s0)(),{editId:a}=(0,p.v9)((e=>e.editData)),Z=(0,p.I0)(),{mutate:x,data:y,isLoading:j,isSuccess:F}=(0,c.useMutation)((e=>{let{url:t,data:a}=e;return d.Z.postData(t,a)}),{onSuccess:()=>{r.ZP.success("Success")},onError:e=>{for(let t in e.response.data)r.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:I,data:S,refetch:k,isSuccess:v}=(0,c.useQuery)(["edit-social",a],(()=>d.Z.getDataByID("/about/social",a)),{enabled:!1}),{mutate:E,isLoading:w,data:V,isSuccess:D}=(0,c.useMutation)((e=>{let{url:t,data:a,id:s}=e;return d.Z.editData(t,a,s)}),{onSuccess:()=>{r.ZP.success("Success")},onError:e=>{for(let t in e.response.data)r.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}});(0,s.useEffect)((()=>{D&&Z({type:g.Pb,payload:""}),(F||D)&&t("/social")}),[y,V]),(0,s.useEffect)((()=>{""!==a&&k()}),[a]),(0,s.useEffect)((()=>{""===a&&e.setFieldsValue(h)}),[]),(0,s.useEffect)((()=>{if(v){const t={facebook:S.facebook.split("//")[1],instagram:S.instagram.split("//")[1],telegram:S.telegram.split("//")[1],youtube:S.youtube.split("//")[1]};e.setFieldsValue(t)}}),[S]);return(0,s.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const a=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",a),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",a)}}),[]),(0,b.jsx)("div",{children:j||I||w?(0,b.jsx)(m.QP,{}):(0,b.jsxs)(o.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:h,onFinish:e=>{const t={facebook:"https://".concat(e.facebook),telegram:"https://".concat(e.telegram),instagram:"https://".concat(e.instagram),youtube:"https://".concat(e.youtube)};S?E({url:"/about/social",data:t,id:a}):x({url:"/about/social/",data:t})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,b.jsxs)(l.Z,{gutter:20,children:[(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"Facebook",name:"facebook",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f Facebook"}],children:(0,b.jsx)(i.default,{addonBefore:"https://"})})}),(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"Instagram",name:"instagram",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f Instagram"}],children:(0,b.jsx)(i.default,{addonBefore:"https://"})})})]}),(0,b.jsxs)(l.Z,{gutter:20,children:[(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"Telegram",name:"telegram",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f Telegram"}],children:(0,b.jsx)(i.default,{addonBefore:"https://"})})}),(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"Youtube",name:"youtube",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f Youtube"}],children:(0,b.jsx)(i.default,{addonBefore:"https://"})})})]}),(0,b.jsx)(u.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:v?"Edit":"Add"})]})})}},30914:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a(89752).Z}}]);
//# sourceMappingURL=51.7c4a3821.chunk.js.map