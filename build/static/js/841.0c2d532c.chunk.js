"use strict";(self.webpackChunkevolution_motors=self.webpackChunkevolution_motors||[]).push([[841],{53016:(e,t,s)=>{s.d(t,{Z:()=>l});s(72791);var a=s(2409),r=s(49389),i=s(80184);const l=e=>{let{label:t,name:s,required:l,required_text:o}=e;return(0,i.jsx)(a.Z.Item,{label:t,name:s,rules:[{required:l,message:o}],children:(0,i.jsx)(r.default,{})})}},38841:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(72791),r=s(2409),i=s(50419),l=s(66106),o=s(30914),n=s(87309),u=s(91933),d=s(27169),c=s(29677),m=s(57689),p=s(16030),f=s(77221),Z=s(53016),y=s(80184);const g={title_uz:"",title_ru:""},h=()=>{const[e]=r.Z.useForm(),t=(0,m.s0)(),{editId:s}=(0,p.v9)((e=>e.editData)),h=(0,p.I0)(),{mutate:_,data:x,isLoading:b,isSuccess:F}=(0,u.useMutation)((e=>{let{url:t,data:s}=e;return d.Z.postData(t,s)}),{onSuccess:()=>{i.ZP.success("Success")},onError:e=>{for(let t in e.response.data)i.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:S,data:j,refetch:v,isSuccess:E}=(0,u.useQuery)(["edit-types",s],(()=>d.Z.getDataByID("/cars/types",s)),{enabled:!1}),{mutate:w,isLoading:I,data:z,isSuccess:V}=(0,u.useMutation)((e=>{let{url:t,data:s,id:a}=e;return d.Z.editData(t,s,a)}),{onSuccess:()=>{i.ZP.success("Success")},onError:e=>{for(let t in e.response.data)i.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}});(0,a.useEffect)((()=>{V&&h({type:f.Pb,payload:""}),(F||V)&&t("/types")}),[x,z]),(0,a.useEffect)((()=>{""!==s&&v()}),[s]),(0,a.useEffect)((()=>{""===s&&e.setFieldsValue(g)}),[]),(0,a.useEffect)((()=>{if(E){const t={title_uz:j.title_uz,title_ru:j.title_ru};e.setFieldsValue(t)}}),[j]);return(0,a.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const s=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",s),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",s)}}),[]),(0,y.jsx)("div",{children:b||S||I?(0,y.jsx)(c.QP,{}):(0,y.jsxs)(r.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:g,onFinish:e=>{const t=new FormData;t.append("title_uz",e.title_uz),t.append("title_ru",e.title_ru),j?w({url:"/cars/types",data:t,id:s}):_({url:"/cars/types/",data:t})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,y.jsxs)(l.Z,{gutter:20,children:[(0,y.jsx)(o.Z,{span:12,children:(0,y.jsx)(Z.Z,{required:!0,required_text:"Tur nomini kiritishingiz kerak",label:"Tur nomi Uz",name:"title_uz"})}),(0,y.jsx)(o.Z,{span:12,children:(0,y.jsx)(Z.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 Ru",name:"title_ru"})})]}),(0,y.jsx)(n.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:E?"Edit":"Add"})]})})}},30914:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s(89752).Z}}]);
//# sourceMappingURL=841.0c2d532c.chunk.js.map