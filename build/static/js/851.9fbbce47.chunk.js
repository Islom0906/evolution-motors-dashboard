"use strict";(self.webpackChunkevolution_motors=self.webpackChunkevolution_motors||[]).push([[851],{53016:(e,i,l)=>{l.d(i,{Z:()=>n});l(72791);var a=l(2409),t=l(49389),r=l(80184);const n=e=>{let{label:i,name:l,required:n,required_text:s,warning:o}=e;return(0,r.jsx)(a.Z.Item,{label:o?(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:i}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:o})]}):(0,r.jsx)("div",{children:i}),name:l,rules:[{required:n,message:s}],children:(0,r.jsx)(t.default,{})})}},63159:(e,i,l)=>{l.d(i,{Z:()=>n});l(72791);var a=l(2409),t=l(13344),r=l(80184);const n=e=>{let{label:i,name:l,required:n,required_text:s}=e;return(0,r.jsx)(a.Z.Item,{label:i,name:l,rules:[{required:n,message:s}],children:(0,r.jsx)(t.Z,{style:{width:"100%"}})})}},83386:(e,i,l)=>{l.d(i,{Z:()=>n});l(72791);var a=l(2409),t=l(66920),r=l(80184);const n=e=>{let{label:i,name:l,required:n,required_text:s}=e;return(0,r.jsx)(a.Z.Item,{label:i,name:l,rules:[{required:n,message:s}],children:(0,r.jsx)(t.Z,{rows:4})})}},24851:(e,i,l)=>{l.r(i),l.d(i,{default:()=>V});var a=l(72791),t=l(521),r=l(2409),n=l(50419),s=l(66106),o=l(30914),d=l(83734),u=l(93086),c=l(87309),m=l(91933),p=l(27169),v=l(29677),h=l(57689),x=l(16030),_=l(46273),g=l(68747),j=l(77221),Z=l(53016),b=l(83386),y=l(63159),f=l(82862),q=l(80184);const w={title_uz:"",title_ru:""},F=e=>{let{refetchTypes:i}=e;const[l]=r.Z.useForm(),[t,d]=(0,a.useState)(!1),{mutate:u,data:h,isLoading:x,isSuccess:_}=(0,m.useMutation)((e=>{let{url:i,data:l}=e;return p.Z.postData(i,l)}),{onSuccess:()=>{n.ZP.success("Success")},onError:e=>{for(let i in e.response.data)n.ZP.error("".concat(i,": ").concat(e.response.data[i][0]))}}),g=e=>{const i=new FormData;i.append("title_uz",e.title_uz),i.append("title_ru",e.title_ru),u({url:"/cars/types/",data:i})};(0,a.useEffect)((()=>{_&&(i(),d(!1),l.setFieldsValue(w))}),[h]);return(0,q.jsxs)("div",{children:[(0,q.jsx)(c.Z,{type:"primary",onClick:()=>{d(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f"}),(0,q.jsx)(f.Z,{title:"\u041d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f",open:t,onOk:()=>{l.validateFields().then((e=>{g(e)})).catch((e=>{console.log("Failed:",e)}))},onCancel:()=>{d(!1)},children:x?(0,q.jsx)(v.QP,{}):(0,q.jsx)(r.Z,{form:l,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:w,onFinish:g,onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"Tur nomini kiritishingiz kerak",label:"Tur nomi Uz",name:"title_uz"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 Ru",name:"title_ru"})})]})})})]})},C={title_uz:"",title_ru:""},k=e=>{let{refetchCountries:i}=e;const[l]=r.Z.useForm(),[t,h]=(0,a.useState)(!1),[x,g]=(0,a.useState)([]),{data:j}=(0,m.useQuery)("get-countries",(()=>p.Z.getData("/cars/countries/"))),{mutate:b,data:y,isLoading:w,isSuccess:F}=(0,m.useMutation)((e=>{let{url:i,data:l}=e;return p.Z.postData(i,l)}),{onSuccess:()=>{n.ZP.success("Success")},onError:e=>{for(let i in e.response.data)n.ZP.error("".concat(i,": ").concat(e.response.data[i][0]))}}),k=e=>{var i;const l=new FormData;l.append("title_uz",e.title_uz),l.append("title_ru",e.title_ru),l.append("country",e.country),l.append("image",null===(i=x[0])||void 0===i?void 0:i.originFileObj),b({url:"/cars/brands/",data:l})};(0,a.useEffect)((()=>{F&&(i(),h(!1),l.setFieldsValue(C))}),[y]);const z=(0,a.useMemo)((()=>null===j||void 0===j?void 0:j.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.title_ru})))),[j]);return(0,q.jsxs)("div",{children:[(0,q.jsx)(c.Z,{type:"primary",onClick:()=>{h(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0431\u0440\u0435\u043d\u0434"}),(0,q.jsx)(f.Z,{title:"\u041d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f",open:t,onOk:()=>{l.validateFields().then((e=>{k(e)})).catch((e=>{console.log("Failed:",e)}))},onCancel:()=>{h(!1)},children:w?(0,q.jsx)(v.QP,{}):(0,q.jsxs)(r.Z,{form:l,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:C,onFinish:k,onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"Brand kiritishingiz kerak",label:"Brand Uz",name:"title_uz"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0431\u0440\u0435\u043d\u0434",label:"\u0411\u0440\u0435\u043d\u0434 Ru",name:"title_ru"})}),(0,q.jsx)(o.Z,{span:24,children:(0,q.jsx)(r.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443",name:"country",rules:[{required:!0,message:"\u0421\u0442\u0440\u0430\u043d\u0443 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0442\u0438\u043f\u044b",optionLabelProp:"label",options:z})})})]}),(0,q.jsx)(s.Z,{gutter:20,children:(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(r.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0440\u0435\u043d\u0434\u0430",name:"image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0440\u0435\u043d\u0434\u0430"}],children:(0,q.jsx)(_.Z,{rotationSlider:!0,children:(0,q.jsx)(u.Z,{maxCount:1,fileList:x,listType:"picture-card",onChange:e=>{let{fileList:i}=e;g(i),l.setFieldsValue({image:i})},onPreview:async e=>{let i=e.url;i||(i=await new Promise((i=>{const l=new FileReader;l.readAsDataURL(e.originFileObj),l.onload=()=>i(l.result)})));const l=new Image;l.src=i;const a=window.open(i);null===a||void 0===a||a.document.write(l.outerHTML)},beforeUpload:()=>!1,children:x.length>0?"":"Upload"})})})})})]})})]})},{Title:z}=t.default,S={title_ru:"",title_uz:"",type:[]},I={title_ru:"",type:[]},L=e=>{let{refetchCountries:i,arrTypes:l,arrCountry:t}=e;const[u]=r.Z.useForm(),[h,x]=(0,a.useState)(!1),[_,g]=(0,a.useState)(!1),[j,b]=(0,a.useState)(!1),{mutate:y,data:w,isLoading:F,isSuccess:C}=(0,m.useMutation)((e=>{let{url:i,data:l}=e;return p.Z.postData(i,l)}),{onSuccess:()=>{n.ZP.success("Success")},onError:e=>{for(let i in e.response.data)n.ZP.error("".concat(i,": ").concat(e.response.data[i][0]))}}),{mutate:k,isLoading:L,data:P,isSuccess:D}=(0,m.useMutation)((e=>{let{url:i,data:l,id:a}=e;return p.Z.editData(i,l,a)}),{onSuccess:()=>{n.ZP.success("Success")},onError:e=>{for(let i in e.response.data)n.ZP.error("".concat(i,": ").concat(e.response.data[i][0]))}}),V=e=>{const i=t.find((i=>(null===i||void 0===i?void 0:i.id)===e.title_ru)),l={title_ru:i.title_ru,title_uz:i.title_uz,type:e.type};_?y({url:"/cars/countries/",data:e}):k({url:"/cars/countries",data:l,id:e.title_ru})},U=e=>{g(e),b(!0)};(0,a.useEffect)((()=>{(C||D)&&(i(),x(!1),u.setFieldsValue(S))}),[w,P]);const M=e=>{console.log("Failed:",e)},T=(0,a.useMemo)((()=>null===l||void 0===l?void 0:l.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.title_ru})))),[l]),E=(0,a.useMemo)((()=>null===t||void 0===t?void 0:t.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.title_ru})))),[t]);return(0,q.jsxs)("div",{children:[(0,q.jsx)(c.Z,{type:"primary",onClick:()=>{x(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u0440\u0430\u043d\u0430"}),(0,q.jsx)(f.Z,{title:"\u041d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f",open:h,onOk:()=>{u.validateFields().then((e=>{V(e)})).catch((e=>{console.log("Failed:",e)}))},onCancel:()=>{x(!1),b(!1)},width:600,children:j?F||L?(0,q.jsx)(v.QP,{}):_?(0,q.jsx)(r.Z,{form:u,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:S,onFinish:V,onFinishFailed:M,autoComplete:"off",children:(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"Mamlakat nomini kiritishingiz kerak",label:"Mamlakat nomi Uz",name:"title_uz"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u0430",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u0430 Ru",name:"title_ru"})}),(0,q.jsx)(o.Z,{span:24,children:(0,q.jsx)(r.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f\u044b",name:"type",rules:[{required:!0,message:"\u0422\u0438\u043f\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{mode:"multiple",style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0442\u0438\u043f\u044b",optionLabelProp:"label",options:T})})})]})}):(0,q.jsx)(r.Z,{form:u,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:I,onFinish:V,onFinishFailed:M,autoComplete:"off",children:(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(r.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0430",name:"title_ru",rules:[{required:!0,message:"\u0421\u0442\u0440\u0430\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0442\u0438\u043f\u044b",optionLabelProp:"label",onChange:e=>{const i=[];t.find((i=>(null===i||void 0===i?void 0:i.id)===e)).types.map((e=>{i.push(e.id)})),u.setFieldsValue({type:i})},options:E})})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(r.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f\u044b",name:"type",rules:[{required:!0,message:"\u0422\u0438\u043f\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{mode:"multiple",style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0442\u0438\u043f\u044b",optionLabelProp:"label",options:T})})})]})}):(0,q.jsxs)(s.Z,{children:[(0,q.jsx)(o.Z,{span:24,children:(0,q.jsx)(z,{level:3,children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u043b\u0438 \u0432\u044b \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0443 \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u043e\u0439"})}),(0,q.jsx)(o.Z,{span:10,children:(0,q.jsx)(c.Z,{type:"primary",onClick:()=>U(!0),children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0443"})}),(0,q.jsx)(o.Z,{span:14,children:(0,q.jsx)(c.Z,{type:"primary",onClick:()=>U(!1),children:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0438\u043f \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u043e\u0439"})})]})})]})},{Title:P}=t.default,D={title_uz:"",title_ru:"",main_text_uz:"",main_text_ru:"",price:"",credit_price:"",colour:"",is_available:null,power_reserve:"",max_speed:"",acceleration:"",battery_capacity:"",num_of_seats:"",review_link_1:"",review_link_2:"",type:null,country:null,brand:null,main_image:null,inner_image:null,exterior_images:[],interior_images:[],technology_images:[],characteristic:[{title_uz:"",title_ru:"",characteristics_child:[{key_uz:"",key_ru:"",value_uz:"",value_ru:""}]}]},V=()=>{const[e]=r.Z.useForm(),i=(0,h.s0)(),{editId:l}=(0,x.v9)((e=>e.editData)),t=(0,x.I0)(),[f,w]=(0,a.useState)([]),[C,z]=(0,a.useState)([]),[S,I]=(0,a.useState)([]),[V,U]=(0,a.useState)([]),[M,T]=(0,a.useState)([]),[E,R]=(0,a.useState)(""),[O,Q]=(0,a.useState)({typeId:"",countriesId:""}),{data:A,refetch:B}=(0,m.useQuery)("get-types",(()=>p.Z.getData("/cars/types/"))),{data:W,refetch:N}=(0,m.useQuery)("get-countries",(()=>p.Z.getData("/cars/countries/"))),{mutate:X,data:H,isLoading:J,isSuccess:K}=(0,m.useMutation)((e=>{let{url:i,formData:l}=e;return p.Z.postData(i,l)}),{onSuccess:()=>{n.ZP.success("Success")},onError:e=>{for(let i in e.response.data)n.ZP.error("".concat(i,": ").concat(e.response.data[i][0]))}}),{mutate:G,data:Y,isLoading:$,isSuccess:ee}=(0,m.useMutation)((e=>{let{url:i,data:l}=e;return p.Z.postData(i,l)}),{onSuccess:()=>{n.ZP.success("Success")},onError:e=>{for(let i in e.response.data)n.ZP.error("".concat(i,": ").concat(e.response.data[i][0]))}}),{isLoading:ie,data:le,refetch:ae,isSuccess:te}=(0,m.useQuery)(["edit-car",l],(()=>p.Z.getDataByID("/cars/cars",l)),{enabled:!1}),{mutate:re,isLoading:ne,data:se,isSuccess:oe}=(0,m.useMutation)((e=>{let{url:i,data:l,id:a}=e;return p.Z.editData(i,l,a)}),{onSuccess:()=>{n.ZP.success("Success")},onError:e=>{for(let i in e.response.data)n.ZP.error("".concat(i,": ").concat(e.response.data[i][0]))}}),{mutate:de}=(0,m.useMutation)((e=>{let{url:i,ids:l}=e;return p.Z.deleteImages(i,l)}),{onSuccess:()=>n.ZP.success("Success"),onError:e=>n.ZP.error(e.message)});(0,a.useEffect)((()=>{oe&&t({type:j.Pb,payload:""}),(ee||oe)&&i("/car")}),[Y,se]),(0,a.useEffect)((()=>{""!==l&&ae()}),[l]),(0,a.useEffect)((()=>{""===l&&e.setFieldsValue(D)}),[]),(0,a.useEffect)((()=>{var i,l,a,t,r,n;const s=[],o=[],d=[];void 0!==le&&(le.exterior_images.map((e=>{const i={uid:e.id,name:e.id,status:"done",url:e.image};s.push(i)})),le.interior_images.map((e=>{const i={uid:e.id,name:e.id,status:"done",url:e.image};o.push(i)})),le.technology_images.map((e=>{const i={uid:e.id,name:e.id,status:"done",url:e.image};d.push(i)})));const u=[{uid:null===le||void 0===le||null===(i=le.main_image)||void 0===i?void 0:i.id,name:null===le||void 0===le||null===(l=le.main_image)||void 0===l?void 0:l.id,status:"done",url:null===le||void 0===le||null===(a=le.main_image)||void 0===a?void 0:a.image}],c=[{uid:null===le||void 0===le||null===(t=le.inner_image)||void 0===t?void 0:t.id,name:null===le||void 0===le||null===(r=le.inner_image)||void 0===r?void 0:r.id,status:"done",url:null===le||void 0===le||null===(n=le.inner_image)||void 0===n?void 0:n.image}];if(te){var m,p,v;const i={title_uz:null===le||void 0===le?void 0:le.title_uz,title_ru:null===le||void 0===le?void 0:le.title_ru,main_text_uz:null===le||void 0===le?void 0:le.main_text_uz,main_text_ru:null===le||void 0===le?void 0:le.main_text_ru,price:null===le||void 0===le?void 0:le.price,credit_price:null===le||void 0===le?void 0:le.credit_price,colour:null===le||void 0===le?void 0:le.color.color,is_available:null===le||void 0===le?void 0:le.is_available,power_reserve:null===le||void 0===le?void 0:le.power_reserve,max_speed:null===le||void 0===le?void 0:le.max_speed,battery_capacity:null===le||void 0===le?void 0:le.battery_capacity,acceleration:null===le||void 0===le?void 0:le.acceleration,num_of_seats:null===le||void 0===le?void 0:le.num_of_seats,review_link_1:null===le||void 0===le||null===(m=le.reviews)||void 0===m?void 0:m.link_1,review_link_2:null===le||void 0===le||null===(p=le.reviews)||void 0===p?void 0:p.link_2,type:null===le||void 0===le?void 0:le.type,country:null===le||void 0===le?void 0:le.country,brand:null===le||void 0===le||null===(v=le.brand)||void 0===v?void 0:v.id,main_image:u,inner_image:c,exterior_images:s,interior_images:o,technology_images:d,characteristic:null===le||void 0===le?void 0:le.characteristic};Q({typeId:le.type,countriesId:le.country}),w(u),z(c),I(s),U(o),T(d),e.setFieldsValue(i)}}),[le]);(0,a.useEffect)((()=>{const i=JSON.parse(localStorage.getItem("myFormValues"));i&&(i.images=[],e.setFieldsValue(i));const l=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",l),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",l)}}),[]),(0,a.useEffect)((()=>{if(K&&"main"===E){var i,l,a;const t=[{uid:null===H||void 0===H||null===(i=H.images[0])||void 0===i?void 0:i.id,name:null===H||void 0===H||null===(l=H.images[0])||void 0===l?void 0:l.id,status:"done",url:null===H||void 0===H||null===(a=H.images[0])||void 0===a?void 0:a.url}];e.setFieldsValue({main_image:t}),w(t),R("")}if(K&&"inner"===E){var t,r,n;const i=[{uid:null===H||void 0===H||null===(t=H.images[0])||void 0===t?void 0:t.id,name:null===H||void 0===H||null===(r=H.images[0])||void 0===r?void 0:r.id,status:"done",url:null===H||void 0===H||null===(n=H.images[0])||void 0===n?void 0:n.url}];e.setFieldsValue({inner_image:i}),z(i),R("")}if(K&&"exterior"===E){var s,o,d;const i=[...S],l={uid:null===H||void 0===H||null===(s=H.images[0])||void 0===s?void 0:s.id,name:null===H||void 0===H||null===(o=H.images[0])||void 0===o?void 0:o.id,status:"done",url:null===H||void 0===H||null===(d=H.images[0])||void 0===d?void 0:d.url};i.push(l),e.setFieldsValue({exterior_images:[l]}),I(i),R("")}if(K&&"interior"===E){var u,c,m;const i=[...V],l={uid:null===H||void 0===H||null===(u=H.images[0])||void 0===u?void 0:u.id,name:null===H||void 0===H||null===(c=H.images[0])||void 0===c?void 0:c.id,status:"done",url:null===H||void 0===H||null===(m=H.images[0])||void 0===m?void 0:m.url};i.push(l),e.setFieldsValue({interior_images:[l]}),U(i),R("")}if(K&&"technology"===E){var p,v,h;const i=[...M],l={uid:null===H||void 0===H||null===(p=H.images[0])||void 0===p?void 0:p.id,name:null===H||void 0===H||null===(v=H.images[0])||void 0===v?void 0:v.id,status:"done",url:null===H||void 0===H||null===(h=H.images[0])||void 0===h?void 0:h.url};i.push(l),e.setFieldsValue({technology_images:[l]}),T(i),R("")}}),[H]);console.log(V);const ue=async e=>{let i=e.url;i||(i=await new Promise((i=>{const l=new FileReader;l.readAsDataURL(e.originFileObj),l.onload=()=>i(l.result)})));const l=new Image;l.src=i;const a=window.open(i);null===a||void 0===a||a.document.write(l.outerHTML)},ce=(0,a.useMemo)((()=>[{value:!0,label:"\u0412 \u043f\u0440\u043e\u0434\u0430\u0436\u0435"},{value:!1,label:"\u041d\u0435\u0442 \u0432 \u043f\u0440\u043e\u0434\u0430\u0436\u0435"}]),[]),me=(0,a.useMemo)((()=>null===A||void 0===A?void 0:A.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.title_ru})))),[A]),pe=(0,a.useMemo)((()=>{var e;if(!O.typeId)return[];const i=null===A||void 0===A?void 0:A.find((e=>e.id===O.typeId));return null===i||void 0===i||null===(e=i.countries)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.title_ru})))}),[O.typeId,A]),ve=(0,a.useMemo)((()=>{var e;if(!O.countriesId)return[];const i=null===W||void 0===W?void 0:W.find((e=>e.id===O.countriesId));return null===i||void 0===i||null===(e=i.brands)||void 0===e?void 0:e.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.title_ru})))}),[O.countriesId,W]);return(0,q.jsx)("div",{children:$||ie||ne||J?(0,q.jsx)(v.QP,{}):(0,q.jsxs)(r.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:D,onFinish:e=>{var i,a;const t=[],r=[],n=[];S.map((e=>{t.push(e.uid)})),V.map((e=>{r.push(e.uid)})),M.map((e=>{n.push(e.uid)}));const s={title_uz:e.title_uz,title_ru:e.title_ru,main_text_uz:e.main_text_uz,main_text_ru:e.main_text_ru,price:e.price,credit_price:""===e.credit_price?null:e.credit_price,colour:e.colour,is_available:e.is_available,power_reserve:e.power_reserve,max_speed:e.max_speed,acceleration:e.acceleration,battery_capacity:e.battery_capacity,num_of_seats:e.num_of_seats,review_link_1:e.review_link_1,review_link_2:e.review_link_2,type:e.type,country:e.country,brand:e.brand,main_image:null===(i=f[0])||void 0===i?void 0:i.uid,inner_image:null===(a=C[0])||void 0===a?void 0:a.uid,exterior_images:t,interior_images:r,technology_images:n,characteristic:null===e||void 0===e?void 0:e.characteristic};te?re({url:"/cars/cars",data:s,id:l}):G({url:"/cars/cars/",data:s})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsxs)(o.Z,{span:12,children:[(0,q.jsx)(r.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f\u044b",name:"type",rules:[{required:!0,message:"\u0422\u0438\u043f\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{style:{width:"100%"},onChange:i=>{const l={...O,typeId:i};Q(l),e.setFieldsValue({country:null,brand:null})},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0442\u0438\u043f\u044b",optionLabelProp:"label",options:me})}),(0,q.jsx)(F,{refetchTypes:B})]}),(0,q.jsxs)(o.Z,{span:12,children:[(0,q.jsx)(r.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0430",name:"country",rules:[{required:!0,message:"\u0421\u0442\u0440\u0430\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{style:{width:"100%"},onChange:i=>{const l={...O,countriesId:i};Q(l),e.setFieldsValue({brand:null})},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u0430\u043d\u0430",optionLabelProp:"label",options:pe})}),(0,q.jsx)(L,{arrCountry:W,arrTypes:A,refetchCountries:B})]}),(0,q.jsxs)(o.Z,{span:12,children:[(0,q.jsx)(r.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434",name:"brand",rules:[{required:!0,message:"\u0411\u0440\u0435\u043d\u0434 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0431\u0440\u0435\u043d\u0434",optionLabelProp:"label",options:ve})}),(0,q.jsx)(k,{refetchCountries:N})]})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"Moshina modeli talab qilinadi",label:"Moshina modeli Uz",name:"title_uz"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",label:"\u041c\u043e\u0434\u0435\u043b\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f Ru",name:"title_ru"})})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(b.Z,{required:!0,required_text:"Asosiy matn kiritish talab qilinada",label:"Asosiy matn Uz",name:"main_text_uz"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(b.Z,{required:!0,required_text:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d",label:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442 Ru",name:"main_text_ru"})})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(y.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043d\u0443 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",label:"\u0426\u0435\u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",name:"price"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(y.Z,{label:"\u0426\u0435\u043d\u0430 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 \u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",name:"credit_price"})})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0446\u0432\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f.",label:"\u0426\u0432\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f (\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0446\u0432\u0435\u0442\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: #000000)",name:"colour"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(r.Z.Item,{label:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043b\u0438 \u043e\u043d\u043e \u0432 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f?",name:"is_available",rules:[{required:!0,message:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c"}],wrapperCol:{span:24},children:(0,q.jsx)(d.default,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",optionLabelProp:"label",options:ce})})})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u041a\u0430\u043a \u0434\u0430\u043b\u0435\u043a\u043e \u043e\u043d \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u0440\u044f\u0434\u0435?",name:"power_reserve"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u0421\u0430\u043c\u0430\u044f \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c",name:"max_speed"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u0417\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u043e\u043d \u0440\u0430\u0437\u0433\u043e\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u0442 0 \u0434\u043e 100 \u043a\u043c/\u0447?",name:"acceleration"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u0417\u0430\u0440\u044f\u0434 \u0431\u0430\u0442\u0430\u0440\u0435\u0438 (\u043a\u0412\u0442\u0447)",name:"battery_capacity"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442",name:"num_of_seats"})})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{label:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u044e\u0442\u0443\u0431\u0435 1",name:"review_link_1"})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{label:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u044e\u0442\u0443\u0431\u0435 2",name:"review_link_2"})})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(r.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",name:"main_image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,q.jsx)(_.Z,{children:(0,q.jsx)(u.Z,{maxCount:1,fileList:f,listType:"picture-card",onChange:i=>{let{fileList:l}=i;if(0!==f.length||0===l.length){var a;e.setFieldsValue({main_image:[]});const i=[null===(a=f[0])||void 0===a?void 0:a.uid];de({url:"/delete-images",ids:{image_ids:i}}),w([])}const t=new FormData;0!==l.length&&(t.append("uploaded_images",l[0].originFileObj),X({url:"/about/images/",formData:t}),R("main"))},onPreview:ue,beforeUpload:()=>!1,children:f.length>0?"":"Upload"})})})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(r.Z.Item,{label:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0432\u0438\u0434 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",name:"inner_image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,q.jsx)(_.Z,{children:(0,q.jsx)(u.Z,{maxCount:1,fileList:C,listType:"picture-card",onChange:i=>{let{fileList:l}=i;if(0!==C.length||0===l.length){var a;e.setFieldsValue({inner_image:[]});const i=[null===(a=C[0])||void 0===a?void 0:a.uid];de({url:"/delete-images",ids:{image_ids:i}}),z([])}const t=new FormData;0!==l.length&&(t.append("uploaded_images",l[0].originFileObj),X({url:"/about/images/",formData:t}),R("inner"))},onPreview:ue,beforeUpload:()=>!1,children:C.length>0?"":"Upload"})})})})]}),(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:24,children:(0,q.jsx)(r.Z.Item,{label:"\u042d\u043a\u0441\u0442\u0435\u0440\u044c\u0435\u0440\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",name:"exterior_images",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,q.jsx)(_.Z,{children:(0,q.jsx)(u.Z,{maxCount:5,fileList:S,listType:"picture-card",onChange:e=>{let{fileList:i}=e;if(i.length<S.length)return;const l=new FormData;0!==i.length&&(l.append("uploaded_images",i[i.length-1].originFileObj),X({url:"/about/images/",formData:l}),R("exterior"))},onPreview:ue,beforeUpload:()=>!1,onRemove:i=>{const l=[];S.map((e=>{(null===e||void 0===e?void 0:e.uid)!==(null===i||void 0===i?void 0:i.uid)&&l.push(e)})),!l.length>0&&e.setFieldsValue({exterior_images:[]});const a={image_ids:[null===i||void 0===i?void 0:i.uid]};de({url:"/delete-images",ids:a}),I(l)},children:S.length>4?"":"+Upload"})})})}),(0,q.jsx)(o.Z,{span:24,children:(0,q.jsx)(r.Z.Item,{label:"\u0418\u043d\u0442\u0435\u0440\u044c\u0435\u0440 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",name:"interior_images",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,q.jsx)(_.Z,{children:(0,q.jsx)(u.Z,{maxCount:5,fileList:V,listType:"picture-card",onChange:e=>{let{fileList:i}=e;if(i.length<V.length)return;const l=new FormData;0!==i.length&&(l.append("uploaded_images",i[i.length-1].originFileObj),X({url:"/about/images/",formData:l}),R("interior"))},onPreview:ue,beforeUpload:()=>!1,onRemove:i=>{const l=[];V.map((e=>{(null===e||void 0===e?void 0:e.uid)!==(null===i||void 0===i?void 0:i.uid)&&l.push(e)})),!l.length>0&&e.setFieldsValue({interior_images:[]});const a={image_ids:[null===i||void 0===i?void 0:i.uid]};de({url:"/delete-images",ids:a}),U(l)},children:V.length>4?"":"+Upload"})})})}),(0,q.jsx)(o.Z,{span:24,children:(0,q.jsx)(r.Z.Item,{label:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",name:"technology_images",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,q.jsx)(_.Z,{children:(0,q.jsx)(u.Z,{maxCount:5,fileList:M,listType:"picture-card",onChange:e=>{let{fileList:i}=e;if(i.length<M.length)return;const l=new FormData;0!==i.length&&(l.append("uploaded_images",i[i.length-1].originFileObj),X({url:"/about/images/",formData:l}),R("technology"))},onPreview:ue,beforeUpload:()=>!1,onRemove:i=>{const l=[];M.map((e=>{(null===e||void 0===e?void 0:e.uid)!==(null===i||void 0===i?void 0:i.uid)&&l.push(e)})),!l.length>0&&e.setFieldsValue({technology_images:[]});const a={image_ids:[null===i||void 0===i?void 0:i.uid]};de({url:"/delete-images",ids:a}),T(l)},children:M.length>4?"":"+Upload"})})})})]}),(0,q.jsx)(P,{level:3,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"}),(0,q.jsx)(r.Z.List,{name:"characteristic",children:(e,i)=>{let{add:l,remove:a}=i;return(0,q.jsxs)(q.Fragment,{children:[e.map(((e,i)=>(0,q.jsxs)("div",{style:{marginBottom:20},children:[(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"To'ldirish talab qilinadi",label:"Xususiyatni sarlavhasi misol uchun:(O'lchami va vazni) Uz ".concat(i+1),name:[e.name,"title_uz"]})}),(0,q.jsx)(o.Z,{span:12,children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: (\u0420\u0410\u0417\u041c\u0415\u0420 \u0418 \u041c\u0410\u0421\u0421\u0410) Ru ".concat(i+1),name:[e.name,"title_ru"]})})]}),(0,q.jsx)(r.Z.List,{name:[e.name,"characteristics_child"],style:{paddingLeft:"100px"},children:(e,i)=>{let{add:l,remove:a}=i;return(0,q.jsxs)(q.Fragment,{children:[e.map(((e,i)=>(0,q.jsx)("div",{style:{marginBottom:20},children:(0,q.jsxs)(s.Z,{gutter:20,children:[(0,q.jsx)(o.Z,{span:11,offset:1,className:"character-child",children:(0,q.jsx)(Z.Z,{required:!0,required_text:"To'ldirish talab qilinadi",label:"Xususiyat nomi (Uzunlik*kenglik*balandlik,mm) Uz ".concat(i+1),name:[e.name,"key_uz"]})}),(0,q.jsx)(o.Z,{span:11,children:(0,q.jsx)(Z.Z,{required:!1,required_text:"To'ldirish talab qilinadi",label:"Xususiyat qiymati (4630\xd71910\xd71655) Uz ".concat(i+1),warning:"!!! Agar \u2705 qo'ymoqchi bo'lsangiz qatorni bo'sh qoldiring",name:[e.name,"value_uz"]})}),(0,q.jsx)(o.Z,{span:11,offset:1,className:"character-child",children:(0,q.jsx)(Z.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430 (\u0414\u043b\u0438\u043d\u0430*\u0448\u0438\u0440\u0438\u043d\u0430*\u0432\u044b\u0441\u043e\u0442\u0430, \u043c\u043c) Ru ".concat(i+1),name:[e.name,"key_ru"]})}),(0,q.jsx)(o.Z,{span:11,children:(0,q.jsx)(Z.Z,{required:!1,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",label:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (4630\xd71910\xd71655) Ru ".concat(i+1,",   \n                                                                            "),warning:"!!! \u0415\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u2705, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u0443\u0441\u0442\u043e\u0439",name:[e.name,"value_ru"]})}),(0,q.jsx)(o.Z,{span:6,offset:1,children:(0,q.jsxs)(P,{level:3,children:[" ",(0,q.jsx)(g.Z,{onClick:()=>a(e.name)})," \u0423\u0434\u0430\u043b\u0438\u0442\u044c  \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 (\u0414\u043b\u0438\u043d\u0430*\u0448\u0438\u0440\u0438\u043d\u0430*\u0432\u044b\u0441\u043e\u0442\u0430, \u043c\u043c)"]})})]})},e.fieldKey))),(0,q.jsx)(s.Z,{children:(0,q.jsx)(o.Z,{offset:1,span:10,children:(0,q.jsx)(r.Z.Item,{children:(0,q.jsx)(c.Z,{type:"primary",onClick:()=>l(),block:!0,style:{backgroundColor:"#1677ff"},children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e"})})})})]})}}),(0,q.jsxs)(P,{level:3,children:[" ",(0,q.jsx)(g.Z,{onClick:()=>a(e.name)})," \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u043c\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 (\u0420\u0410\u0417\u041c\u0415\u0420 \u0418 \u041c\u0410\u0421\u0421\u0410)"]})]},e.fieldKey))),(0,q.jsx)(r.Z.Item,{children:(0,q.jsx)(c.Z,{type:"primary",onClick:()=>l(),block:!0,style:{backgroundColor:"#28a745"},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0434\u043b\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430"})})]})}}),(0,q.jsx)(c.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:te?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c"})]})})}}}]);
//# sourceMappingURL=851.9fbbce47.chunk.js.map