"use strict";(self.webpackChunkevolution_motors=self.webpackChunkevolution_motors||[]).push([[732],{85732:(e,n,t)=>{t.r(n),t.d(n,{default:()=>E});var o=t(72791),r=t(50390),i=t(83099),a=t(87309),l=t(34571),c=t(92883),s=t(31752),u=t(82622),d=t(16030),f=t(77221),v=t(57689),p=t(80184);const m=e=>{let{data:n,deleteHandle:t}=e;const m=(0,d.I0)(),h=(0,v.s0)(),[Z,x]=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=null===n||void 0===n?void 0:n.reverse();x(e)}),[n]);const C=[{title:"Link Uz",dataIndex:"url",id:"url",render:e=>(0,p.jsx)("p",{children:e})},{title:"Image",dataIndex:"image",id:"image",render:e=>(0,p.jsx)(r.Z,{width:50,src:e})},{title:"Action",id:"action",render:(e,n)=>(0,p.jsxs)(i.Z,{size:20,children:[(0,p.jsx)(a.Z,{onClick:()=>{return e=n.id,localStorage.setItem("editDataId",e),m({type:f.Pb,payload:e}),void h("/banner/add");var e},type:"primary",icon:(0,p.jsx)(s.Z,{}),children:"Edit"}),(0,p.jsx)(l.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{t("/about/header-banner",e)})(n.id),children:(0,p.jsx)(a.Z,{type:"danger",icon:(0,p.jsx)(u.Z,{}),children:"Delete"})})]})}];return(0,p.jsx)("div",{children:(0,p.jsx)(c.Z,{columns:C,dataSource:Z,rowKey:e=>e.id})})};var h=t(50419),Z=t(66106),x=t(30914),C=t(49389),y=t(37083),g=t(79286),b=t(27169),j=t(91933);const E=()=>{const e=(0,v.s0)(),n=(0,d.I0)(),{mutate:t,isSuccess:r,isLoading:l}=(0,j.useMutation)((e=>{let{url:n,id:t}=e;return b.Z.deleteData(n,t)})),{data:c,isLoading:s,refetch:u}=(0,j.useQuery)("banner-get",(()=>b.Z.getData("/about/header-banner/")),{onError:e=>{for(let n in e.response.data)h.ZP.error("".concat(n,": ").concat(e.response.data[n][0]))}}),[E,k]=(0,o.useState)([]),[w,O]=(0,o.useState)(!1);(0,o.useEffect)((()=>{r&&u()}),[r]);return(0,p.jsx)("div",{className:"site-space-compact-wrapper",children:(0,p.jsxs)(i.Z,{direction:"vertical",style:{width:"100%"},children:[(0,p.jsxs)(Z.Z,{gutter:20,children:[(0,p.jsx)(x.Z,{span:16,children:(0,p.jsx)(C.default,{onChange:e=>(e=>{O(""!==e);const n=null===c||void 0===c?void 0:c.filter((n=>n.name_uz.toLowerCase().includes(e.toLowerCase())||n.name_ru.toLowerCase().includes(e.toLowerCase())));k(n)})(e.target.value)})}),(0,p.jsx)(x.Z,{span:8,children:(0,p.jsx)(a.Z,{type:"primary",icon:(0,p.jsx)(g.Z,{}),style:{width:"100%"},onClick:()=>{n({type:f.Pb,payload:""}),e("/banner/add")},children:"Add"})})]}),(0,p.jsx)(y.Z,{size:"medium",spinning:s||l,children:(0,p.jsx)(m,{data:w?E:c,deleteHandle:(e,n)=>{t({url:e,id:n})}})})]})})}},82622:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(1413),r=t(72791);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var a=t(54291),l=function(e,n){return r.createElement(a.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:i}))};l.displayName="DeleteOutlined";const c=r.forwardRef(l)},41783:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(87462),r=t(29439),i=t(98368),a=t(72791),l=t(87309),c=t(2571);function s(e){return!(!e||!e.then)}const u=function(e){var n=a.useRef(!1),t=a.useRef(null),u=(0,i.Z)(!1),d=(0,r.Z)(u,2),f=d[0],v=d[1],p=e.close,m=function(){null===p||void 0===p||p.apply(void 0,arguments)};a.useEffect((function(){var n=null;return e.autoFocus&&(n=setTimeout((function(){var e;null===(e=t.current)||void 0===e||e.focus()}))),function(){n&&clearTimeout(n)}}),[]);var h=e.type,Z=e.children,x=e.prefixCls,C=e.buttonProps;return a.createElement(l.Z,(0,o.Z)({},(0,c.n)(h),{onClick:function(t){var o=e.actionFn;if(!n.current)if(n.current=!0,o){var r;if(e.emitEvent){if(r=o(t),e.quitOnNullishReturnValue&&!s(r))return n.current=!1,void m(t)}else if(o.length)r=o(p),n.current=!1;else if(!(r=o()))return void m();!function(e){s(e)&&(v(!0),e.then((function(){v(!1,!0),m.apply(void 0,arguments),n.current=!1}),(function(e){return v(!1,!0),n.current=!1,Promise.reject(e)})))}(r)}else m()},loading:f,prefixCls:x},C,{ref:t}),Z)}},34571:(e,n,t)=>{t.d(n,{Z:()=>j});var o=t(87462),r=t(29439),i=t(10187),a=t(81694),l=t.n(a),c=t(75179),s=t(11354),u=t(72791),d=t(71929),f=t(69228),v=t(61113),p=t(87309),m=t(2571),h=t(41783),Z=t(93486),x=t(70454),C=t(57924),y=function(e){var n=e.prefixCls,t=e.okButtonProps,r=e.cancelButtonProps,i=e.title,a=e.cancelText,l=e.okText,c=e.okType,s=e.icon,f=e.showCancel,v=void 0===f||f,y=e.close,g=e.onConfirm,b=e.onCancel,j=u.useContext(d.E_).getPrefixCls;return u.createElement(Z.Z,{componentName:"Popconfirm",defaultLocale:x.Z.Popconfirm},(function(e){return u.createElement("div",{className:"".concat(n,"-inner-content")},u.createElement("div",{className:"".concat(n,"-message")},s&&u.createElement("span",{className:"".concat(n,"-message-icon")},s),u.createElement("div",{className:"".concat(n,"-message-title")},(0,C.Z)(i))),u.createElement("div",{className:"".concat(n,"-buttons")},v&&u.createElement(p.Z,(0,o.Z)({onClick:b,size:"small"},r),null!==a&&void 0!==a?a:e.cancelText),u.createElement(h.Z,{buttonProps:(0,o.Z)((0,o.Z)({size:"small"},(0,m.n)(c)),t),actionFn:g,close:y,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==l&&void 0!==l?l:e.okText)))}))},g=void 0,b=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const j=u.forwardRef((function(e,n){var t=e.prefixCls,a=e.placement,p=void 0===a?"top":a,m=e.trigger,h=void 0===m?"click":m,Z=e.okType,x=void 0===Z?"primary":Z,C=e.icon,j=void 0===C?u.createElement(i.Z,null):C,E=e.children,k=e.overlayClassName,w=e.onOpenChange,O=e.onVisibleChange,P=b(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=u.useContext(d.E_).getPrefixCls,T=(0,c.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),z=(0,r.Z)(T,2),S=z[0],D=z[1],I=function(e,n){D(e,!0),null===O||void 0===O||O(e,n),null===w||void 0===w||w(e,n)},L=N("popover",t),V=N("popconfirm",t),_=l()(V,k);return u.createElement(f.Z,(0,o.Z)({},P,{trigger:h,prefixCls:L,placement:p,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||I(n)},open:S,ref:n,overlayClassName:_,_overlay:u.createElement(y,(0,o.Z)({okType:x,icon:j},e,{prefixCls:L,close:function(e){I(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(g,n)},onCancel:function(n){var t;I(!1,n),null===(t=e.onCancel)||void 0===t||t.call(g,n)}}))}),(0,v.Tm)(E,{onKeyDown:function(e){var n,t;u.isValidElement(E)&&(null===(t=null===E||void 0===E?void 0:(n=E.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===s.Z.ESC&&S&&I(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=732.b1279dec.chunk.js.map