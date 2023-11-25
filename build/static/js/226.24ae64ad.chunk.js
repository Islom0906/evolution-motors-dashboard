"use strict";(self.webpackChunkevolution_motors=self.webpackChunkevolution_motors||[]).push([[226],{90226:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});var o=t(72791),r=t(83099),l=t(87309),i=t(34571),a=t(92883),c=t(31752),s=t(82622),u=t(16030),d=t(77221),p=t(57689),v=t(80184);const f=e=>{let{data:n,deleteHandle:t}=e;const f=(0,u.I0)(),m=(0,p.s0)(),[h,Z]=(0,o.useState)([]);(0,o.useEffect)((()=>{const e=null===n||void 0===n?void 0:n.reverse();Z(e)}),[n]);const y=[{title:"Name",dataIndex:"name",id:"name",render:e=>(0,v.jsx)("p",{children:e})},{title:"Action",id:"action",render:(e,n)=>(0,v.jsxs)(r.Z,{size:20,children:[(0,v.jsx)(l.Z,{onClick:()=>{return e=n.id,localStorage.setItem("editDataId",e),f({type:d.Pb,payload:e}),void m("/map/add");var e},type:"primary",icon:(0,v.jsx)(c.Z,{}),children:"Edit"}),(0,v.jsx)(i.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{t("/about/map",e)})(n.id),children:(0,v.jsx)(l.Z,{type:"danger",icon:(0,v.jsx)(s.Z,{}),children:"Delete"})})]})}];return(0,v.jsx)("div",{children:(0,v.jsx)(a.Z,{columns:y,dataSource:h,rowKey:e=>e.id})})};var m=t(50419),h=t(66106),Z=t(30914),y=t(49389),x=t(37083),C=t(79286),g=t(27169),E=t(91933);const j=()=>{const e=(0,p.s0)(),n=(0,u.I0)(),{mutate:t,isSuccess:i,isLoading:a}=(0,E.useMutation)((e=>{let{url:n,id:t}=e;return g.Z.deleteData(n,t)})),{data:c,isLoading:s,refetch:j}=(0,E.useQuery)("map-get",(()=>g.Z.getData("/about/map")),{onError:e=>{m.ZP.error(e)}}),[b,k]=(0,o.useState)([]),[w,O]=(0,o.useState)(!1);(0,o.useEffect)((()=>{i&&j()}),[i]);return(0,v.jsx)("div",{className:"site-space-compact-wrapper",children:(0,v.jsxs)(r.Z,{direction:"vertical",style:{width:"100%"},children:[(0,v.jsxs)(h.Z,{gutter:20,children:[(0,v.jsx)(Z.Z,{span:16,children:(0,v.jsx)(y.default,{onChange:e=>(e=>{O(""!==e);const n=null===c||void 0===c?void 0:c.filter((n=>n.name.toLowerCase().includes(e.toLowerCase())));k(n)})(e.target.value)})}),(0,v.jsx)(Z.Z,{span:8,children:(0,v.jsx)(l.Z,{type:"primary",icon:(0,v.jsx)(C.Z,{}),style:{width:"100%"},onClick:()=>{n({type:d.Pb,payload:""}),e("/map/add")},children:"Add"})})]}),(0,v.jsx)(x.Z,{size:"medium",spinning:s||a,children:(0,v.jsx)(f,{data:w?b:c,deleteHandle:(e,n)=>{t({url:e,id:n})}})})]})})}},82622:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(1413),r=t(72791);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var i=t(54291),a=function(e,n){return r.createElement(i.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:l}))};a.displayName="DeleteOutlined";const c=r.forwardRef(a)},41783:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(87462),r=t(29439),l=t(98368),i=t(72791),a=t(87309),c=t(2571);function s(e){return!(!e||!e.then)}const u=function(e){var n=i.useRef(!1),t=i.useRef(null),u=(0,l.Z)(!1),d=(0,r.Z)(u,2),p=d[0],v=d[1],f=e.close,m=function(){null===f||void 0===f||f.apply(void 0,arguments)};i.useEffect((function(){var n=null;return e.autoFocus&&(n=setTimeout((function(){var e;null===(e=t.current)||void 0===e||e.focus()}))),function(){n&&clearTimeout(n)}}),[]);var h=e.type,Z=e.children,y=e.prefixCls,x=e.buttonProps;return i.createElement(a.Z,(0,o.Z)({},(0,c.n)(h),{onClick:function(t){var o=e.actionFn;if(!n.current)if(n.current=!0,o){var r;if(e.emitEvent){if(r=o(t),e.quitOnNullishReturnValue&&!s(r))return n.current=!1,void m(t)}else if(o.length)r=o(f),n.current=!1;else if(!(r=o()))return void m();!function(e){s(e)&&(v(!0),e.then((function(){v(!1,!0),m.apply(void 0,arguments),n.current=!1}),(function(e){return v(!1,!0),n.current=!1,Promise.reject(e)})))}(r)}else m()},loading:p,prefixCls:y},x,{ref:t}),Z)}},34571:(e,n,t)=>{t.d(n,{Z:()=>j});var o=t(87462),r=t(29439),l=t(10187),i=t(81694),a=t.n(i),c=t(75179),s=t(11354),u=t(72791),d=t(71929),p=t(69228),v=t(61113),f=t(87309),m=t(2571),h=t(41783),Z=t(93486),y=t(70454),x=t(57924),C=function(e){var n=e.prefixCls,t=e.okButtonProps,r=e.cancelButtonProps,l=e.title,i=e.cancelText,a=e.okText,c=e.okType,s=e.icon,p=e.showCancel,v=void 0===p||p,C=e.close,g=e.onConfirm,E=e.onCancel,j=u.useContext(d.E_).getPrefixCls;return u.createElement(Z.Z,{componentName:"Popconfirm",defaultLocale:y.Z.Popconfirm},(function(e){return u.createElement("div",{className:"".concat(n,"-inner-content")},u.createElement("div",{className:"".concat(n,"-message")},s&&u.createElement("span",{className:"".concat(n,"-message-icon")},s),u.createElement("div",{className:"".concat(n,"-message-title")},(0,x.Z)(l))),u.createElement("div",{className:"".concat(n,"-buttons")},v&&u.createElement(f.Z,(0,o.Z)({onClick:E,size:"small"},r),null!==i&&void 0!==i?i:e.cancelText),u.createElement(h.Z,{buttonProps:(0,o.Z)((0,o.Z)({size:"small"},(0,m.n)(c)),t),actionFn:g,close:C,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==a&&void 0!==a?a:e.okText)))}))},g=void 0,E=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};const j=u.forwardRef((function(e,n){var t=e.prefixCls,i=e.placement,f=void 0===i?"top":i,m=e.trigger,h=void 0===m?"click":m,Z=e.okType,y=void 0===Z?"primary":Z,x=e.icon,j=void 0===x?u.createElement(l.Z,null):x,b=e.children,k=e.overlayClassName,w=e.onOpenChange,O=e.onVisibleChange,P=E(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=u.useContext(d.E_).getPrefixCls,T=(0,c.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),S=(0,r.Z)(T,2),D=S[0],z=S[1],V=function(e,n){z(e,!0),null===O||void 0===O||O(e,n),null===w||void 0===w||w(e,n)},H=N("popover",t),I=N("popconfirm",t),R=a()(I,k);return u.createElement(p.Z,(0,o.Z)({},P,{trigger:h,prefixCls:H,placement:f,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||V(n)},open:D,ref:n,overlayClassName:R,_overlay:u.createElement(C,(0,o.Z)({okType:y,icon:j},e,{prefixCls:H,close:function(e){V(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(g,n)},onCancel:function(n){var t;V(!1,n),null===(t=e.onCancel)||void 0===t||t.call(g,n)}}))}),(0,v.Tm)(b,{onKeyDown:function(e){var n,t;u.isValidElement(b)&&(null===(t=null===b||void 0===b?void 0:(n=b.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===s.Z.ESC&&D&&V(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=226.24ae64ad.chunk.js.map