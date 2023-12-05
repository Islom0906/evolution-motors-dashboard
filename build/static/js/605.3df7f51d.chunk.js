"use strict";(self.webpackChunkevolution_motors=self.webpackChunkevolution_motors||[]).push([[605],{53016:(e,t,i)=>{i.d(t,{Z:()=>l});i(72791);var a=i(2409),s=i(49389),r=i(80184);const l=e=>{let{label:t,name:i,required:l,required_text:n,warning:u}=e;return(0,r.jsx)(a.Z.Item,{label:u?(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:u})]}):(0,r.jsx)("div",{children:t}),name:i,rules:[{required:l,message:n}],children:(0,r.jsx)(s.default,{})})}},83386:(e,t,i)=>{i.d(t,{Z:()=>l});i(72791);var a=i(2409),s=i(66920),r=i(80184);const l=e=>{let{label:t,name:i,required:l,required_text:n}=e;return(0,r.jsx)(a.Z.Item,{label:t,name:i,rules:[{required:l,message:n}],children:(0,r.jsx)(s.Z,{rows:4})})}},59605:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var a=i(72791),s=i(521),r=i(2409),l=i(50419),n=i(66106),u=i(30914),d=i(93086),o=i(87309),m=i(91933),c=i(27169),_=i(29677),x=i(57689),g=i(16030),h=i(46273),b=i(68747),v=i(77221),Z=i(53016),j=i(83386),p=i(80184);const{Title:f}=s.default,z={bg_image:[],title_uz:"",title_ru:"",subtitle_uz:"",subtitle_ru:"",main_title_uz:"",main_title_ru:"",main_text_uz:"",main_text_ru:"",main_items:[{text_uz:"",text_ru:""}]},q=()=>{const[e]=r.Z.useForm(),t=(0,x.s0)(),{editId:i}=(0,g.v9)((e=>e.editData)),s=(0,g.I0)(),[q,y]=(0,a.useState)([]),{mutate:S,data:F,isLoading:w,isSuccess:k}=(0,m.useMutation)((e=>{let{url:t,formData:i}=e;return c.Z.postData(t,i)}),{onSuccess:()=>{l.ZP.success("Success")},onError:e=>{for(let t in e.response.data)l.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:I,data:E,isLoading:P,isSuccess:D}=(0,m.useMutation)((e=>{let{url:t,data:i}=e;return c.Z.postData(t,i)}),{onSuccess:()=>{l.ZP.success("Success")},onError:e=>{for(let t in e.response.data)l.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:L,data:V,refetch:C,isSuccess:U}=(0,m.useQuery)(["edit-service",i],(()=>c.Z.getDataByID("/about/service",i)),{enabled:!1}),{mutate:M,isLoading:R,data:A,isSuccess:T}=(0,m.useMutation)((e=>{let{url:t,data:i,id:a}=e;return c.Z.editData(t,i,a)}),{onSuccess:()=>{l.ZP.success("Success")},onError:e=>{for(let t in e.response.data)l.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:O}=(0,m.useMutation)((e=>{let{url:t,ids:i}=e;return c.Z.deleteImages(t,i)}),{onSuccess:()=>l.ZP.success("Success"),onError:e=>l.ZP.error(e.message)});(0,a.useEffect)((()=>{T&&s({type:v.Pb,payload:""}),(D||T)&&t("/service")}),[E,A]),(0,a.useEffect)((()=>{""!==i&&C()}),[i]),(0,a.useEffect)((()=>{""===i&&e.setFieldsValue(z)}),[]),(0,a.useEffect)((()=>{var t,i,a;const s=[{uid:null===V||void 0===V||null===(t=V.bg_image)||void 0===t?void 0:t.id,name:null===V||void 0===V||null===(i=V.bg_image)||void 0===i?void 0:i.id,status:"done",url:null===V||void 0===V||null===(a=V.bg_image)||void 0===a?void 0:a.image}];if(U){const t={bg_image:s,title_uz:V.title_uz,title_ru:V.title_ru,subtitle_uz:V.subtitle_uz,subtitle_ru:V.subtitle_ru,main_title_uz:V.main_title_uz,main_title_ru:V.main_title_ru,main_text_uz:V.main_text_uz,main_text_ru:V.main_text_ru,main_items:V.main_items};y(s),e.setFieldsValue(t)}}),[V]);(0,a.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const i=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",i),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",i)}}),[]),(0,a.useEffect)((()=>{if(k){var e,t,i;const a=[{uid:null===F||void 0===F||null===(e=F.images[0])||void 0===e?void 0:e.id,name:null===F||void 0===F||null===(t=F.images[0])||void 0===t?void 0:t.id,status:"done",url:null===F||void 0===F||null===(i=F.images[0])||void 0===i?void 0:i.url}];y(a)}}),[F]);return(0,p.jsx)("div",{children:P||L||R||w?(0,p.jsx)(_.QP,{}):(0,p.jsxs)(r.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:z,onFinish:e=>{var t;const a={title_uz:e.title_uz,title_ru:e.title_ru,subtitle_uz:e.subtitle_uz,subtitle_ru:e.subtitle_ru,main_title_uz:e.main_title_uz,main_title_ru:e.main_title_ru,main_text_uz:e.main_text_uz,main_text_ru:e.main_text_ru,bg_image:[null===(t=q[0])||void 0===t?void 0:t.uid],main_items:e.main_items};U?M({url:"/about/service",data:a,id:i}):I({url:"/about/service/",data:a})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,p.jsxs)(n.Z,{gutter:20,children:[(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(Z.Z,{required:!0,required_text:"Sarlavha talab qilinadi",label:"Sarlavha Uz",name:"title_uz"})}),(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(Z.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"title_ru"})})]}),(0,p.jsxs)(n.Z,{gutter:20,children:[(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"Qo'shimcha sarlavha kiritish talab qilinada",label:"Qo'shimcha sarlavha Uz",name:"subtitle_uz"})}),(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 Ru",name:"subtitle_ru"})})]}),(0,p.jsxs)(n.Z,{gutter:20,children:[(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"Asosiy matn sarlavha kiritish kerak",label:"Asosiy matn sarlavha Uz",name:"main_title_uz"})}),(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c.",label:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 Ru",name:"main_title_ru"})})]}),(0,p.jsxs)(n.Z,{gutter:20,children:[(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"Asosiy matn kiritish kerak",label:"Asosiy matn Uz",name:"main_text_uz"})}),(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"\u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442",label:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 Ru",name:"main_text_ru"})})]}),(0,p.jsx)(n.Z,{gutter:20,children:(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(r.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",name:"bg_image",rules:[{required:!0,message:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0430\u043d\u043d\u0435\u0440\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e."}],children:(0,p.jsx)(h.Z,{children:(0,p.jsx)(d.Z,{maxCount:1,fileList:q,listType:"picture-card",onChange:t=>{let{fileList:i}=t;if(e.setFieldsValue({bg_image:i}),0!==q.length||0===i.length){var a;const e=[null===(a=q[0])||void 0===a?void 0:a.uid];O({url:"/delete-images",ids:{image_ids:e}}),y([])}const s=new FormData;0!==i.length&&(s.append("uploaded_images",i[0].originFileObj),S({url:"/about/images/",formData:s}))},onPreview:async e=>{let t=e.url;t||(t=await new Promise((t=>{const i=new FileReader;i.readAsDataURL(e.originFileObj),i.onload=()=>t(i.result)})));const i=new Image;i.src=t;const a=window.open(t);null===a||void 0===a||a.document.write(i.outerHTML)},beforeUpload:()=>!1,children:q.length>0?"":"Upload"})})})})}),(0,p.jsx)(f,{level:3,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}),(0,p.jsx)(r.Z.List,{name:"main_items",children:(t,i)=>{let{add:a,remove:s}=i;return(0,p.jsxs)(p.Fragment,{children:[t.map(((e,t)=>(0,p.jsxs)("div",{style:{marginBottom:20},children:[(0,p.jsxs)(n.Z,{gutter:20,children:[(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"Matn talab qilinadi",label:"Matn Uz ".concat(t+1),name:[e.name,"text_uz"]})}),(0,p.jsx)(u.Z,{span:12,children:(0,p.jsx)(j.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0442\u0435\u043a\u0441\u0442",label:"\u0422\u0435\u043a\u0441\u0442 Ru ".concat(t+1),name:[e.name,"text_ru"]})})]}),(0,p.jsx)(b.Z,{onClick:()=>s(e.name)})]},e.fieldKey))),(0,p.jsx)(r.Z.Item,{children:(0,p.jsx)(o.Z,{type:"primary",onClick:()=>(t=>{let i=[];t();const a=e.getFieldsValue();null!==a&&void 0!==a&&a.main_items[0]||i.push({text_uz:"",text_ru:""}),e.setFieldsValue({items:i})})(a),block:!0,style:{backgroundColor:"#28a745"},children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442"})})]})}}),(0,p.jsx)(o.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:U?"Edit":"Add"})]})})}}}]);
//# sourceMappingURL=605.3df7f51d.chunk.js.map