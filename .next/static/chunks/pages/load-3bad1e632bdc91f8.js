(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{2896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(9499),i=n(5617),o=n(1163),a=n(7294),s=n(5113),c=n(8462),l=n(3321),u=n(2293),f=n(155),d=n(3946),m=n(8862),p=n(8456),g=n(7212),h=n(9368),v=n(8619),y=n(8987),x=n(9334),j=n(6486),b=n.n(j),O=n(6761),w=n(3744),S=n(176),Z=n(3795),k=n(9358),C=n(4957),P=n(3329),N=n(594),I=n(9287),D=n(2238),E=n.n(D),M=n(5071),F=n(5893);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(){var e=(0,i.I0)(),t=(0,o.useRouter)(),n=(0,a.useState)([]),r=n[0],g=n[1],h=(0,a.useState)(1),v=h[0],y=h[1],x=(0,a.useState)(!1),j=x[0],S=x[1],I=(0,a.useState)(!1),D=I[0],T=I[1],_=(0,a.useState)([]),A=_[0],V=_[1],H=(0,a.useState)(!1),B=H[0],W=H[1],U=function(e){return A.some((function(t){return t===e.list.creationTime}))},q=r.map((function(e){return JSON.parse(localStorage[e])}));(0,a.useEffect)((function(){var e=window.navigator.userAgent,t=new(E())(e).getDevice();W("mobile"===t.type)}),[]),(0,a.useEffect)((function(){var e,t=function(){return Object.keys(localStorage).filter((function(e){return e.startsWith("AF_Save")}))},n=L(t());try{for(n.s();!(e=n.n()).done;){var r=e.value;localStorage.getItem(r).indexOf('"listPoints":0')>=0&&delete localStorage[r]}}catch(i){n.e(i)}finally{n.f()}g(t())}),[v]);var J=function(e){console.log("Item clicked"),0!==A.length||D?X(e):R(e)},R=function(n){S(!0),w.Z.load(e,n,(function(e){t.push({pathname:"/list",query:{listId:n.list.creationTime}}),S(!1)}))},G=function(e){var t,n=L(A);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=Object.keys(localStorage).find((function(e){return e.endsWith(r)}));e(JSON.parse(localStorage.getItem(i)))}}catch(o){n.e(o)}finally{n.f()}y(v+1),g([]),T(!1)},X=function(e){V((function(t){return U(e)?t.filter((function(t){return t!==e.list.creationTime})):t.concat(e.list.creationTime)}))},$=function(e){w.Z.delete(e.list)},K=function(e){var t;return null===(t=q.find((function(t){return t.list.creationTime===e})))||void 0===t?void 0:t.favourite},Q=function(e){var t=A.some((function(e){return!K(e)}));w.Z.toggleFavourite(e,t)},Y=function(e){var t=e.saves;return(0,F.jsx)(s.Z,{square:!0,elevation:0,children:(0,F.jsx)(c.Z,{className:"p-0",children:b().sortBy(t,(function(e){return e.modified})).reverse().map((function(e){return(0,F.jsx)(z,{save:e,selected:U(e),onSelect:X,onItemClick:J,showCheckbox:(null===A||void 0===A?void 0:A.length)>0||!B||D,isMobile:B},e.list.creationTime)}))})})},ee=q.filter((function(e){return e.favourite}));return(0,F.jsxs)(F.Fragment,{children:[0!==A.length||D?(0,F.jsx)(s.Z,{elevation:2,square:!0,children:(0,F.jsx)(u.Z,{color:"transparent",position:"static",children:(0,F.jsxs)(f.Z,{children:[(0,F.jsx)(d.Z,{size:"large",edge:"start",color:"primary","aria-label":"menu",sx:{mr:2},onClick:function(){V([]),T(!1)},children:(0,F.jsx)(N.Z,{})}),(0,F.jsxs)(m.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:[A.length," selected lists"]}),(0,F.jsx)(d.Z,{disabled:!A.length,color:"primary",onClick:function(){return G(Q)},children:A.some((function(e){return!K(e)}))?(0,F.jsx)(C.Z,{}):(0,F.jsx)(P.Z,{})}),(0,F.jsx)(d.Z,{color:"primary",disabled:!A.length,onClick:function(){confirm("Are you sure you want to delete ".concat(A.length," list(s)?"))&&(G($),V([]))},children:(0,F.jsx)(O.Z,{})})]})})}):(0,F.jsx)(Z.j,{title:"Open a List",onBackClick:function(){return(0,k.kh)((function(){return t.replace("/")}))},right:B&&(0,F.jsx)(l.Z,{color:"inherit",onClick:function(){return T((function(e){return!e}))},children:"Select"})}),(0,F.jsxs)("div",{className:"container",children:[(0,F.jsx)("input",{type:"file",id:"file-input",style:{display:"none"},onChange:function(n){var r=n.target.files[0];if(r){S(!0);var i=new FileReader;i.onload=function(r){try{var i=r.target.result,o=JSON.parse(i),a=(new Date).getTime().toString();o.list.creationTime=a,w.Z.load(e,o,(function(e){t.push("/list"),w.Z.saveImport(a,JSON.stringify(o)),S(!1)}))}catch(n){S(!1)}},i.readAsText(r)}}}),(0,F.jsxs)("div",{className:"mx-auto",style:{maxWidth:"480px"},children:[(0,F.jsx)("div",{className:"is-flex is-justify-content-center p-4 my-4",children:(0,F.jsxs)(l.Z,{variant:"contained",color:"primary",onClick:function(){document.getElementById("file-input").dispatchEvent(new MouseEvent("click"))},children:[(0,F.jsx)(M.Z,{fill:"white"})," ",(0,F.jsx)("span",{className:"ml-2",children:"Upload Army Forge File"})]})}),j&&(0,F.jsxs)("div",{className:"is-flex is-flex-direction-column is-align-items-center",children:[(0,F.jsx)(p.Z,{}),(0,F.jsx)("p",{children:"Loading army data..."})]}),ee.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("p",{className:"px-4 mb-2",style:{fontWeight:600},children:"Favourite Lists"}),(0,F.jsx)(Y,{saves:ee})]}),(0,F.jsx)("p",{className:"px-4 my-2",style:{fontWeight:600},children:"Saved Lists"}),(0,F.jsx)(Y,{saves:q.filter((function(e){return!e.favourite}))})]})]})]})}function z(e){var t,n=e.save,r=e.selected,i=e.onItemClick,o=e.onSelect,a=e.showCheckbox,s=e.isMobile,c=(0,I.T)((function(){return o(n)}),{onCancel:function(e,t){var r=t.reason;return console.log("reason",r),"canceled-by-timeout"===r&&i(n)},detect:s?"touch":"mouse",cancelOnMovement:5}),l=new Date(n.modified),u=l.getHours()+":"+l.getMinutes(),f=n.listPoints,d=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("span",{style:{fontWeight:600},children:[null===(t=n.gameSystem)||void 0===t?void 0:t.toUpperCase()," - ",n.list.name]}),(0,F.jsxs)("span",{style:{color:"#656565"},children:[" \u2022 ",f,"pts"]})]});return(0,F.jsx)(g.ZP,{disablePadding:!0,secondaryAction:a&&(0,F.jsx)(h.Z,{checked:r,onClick:function(){return o(n)}}),style:{backgroundColor:r?"#F9FDFF":null},children:(0,F.jsxs)(v.Z,_(_({},c()),{},{children:[(0,F.jsx)(y.Z,{children:(0,F.jsx)(S.Z,{name:n.armyFaction||n.armyName,armyData:{gameSystem:n.gameSystem},size:"32px"})}),(0,F.jsx)(x.Z,{className:"ml-2"+(n.saveVersion>=2?"":" has-text-danger"),primary:d,secondary:n.saveVersion>=2?"Modified "+l.toLocaleDateString()+" "+u:"Outdated save format!"})]}))},n.list.creationTime)}},176:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9499),i=n(4730),o=n(5893),a=["imageUrl","armyData","name","size"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={};function u(e){var t,n=e.imageUrl,r=void 0===n?null:n,s=e.armyData,u=void 0===s?null:s,f=e.name,d=void 0===f?null:f,m=e.size,p=void 0===m?"100px":m,g=(0,i.Z)(e,a),h=(u.gameSystem?u.gameSystem.indexOf("aof"):u.gameSystemId,d.replace(/Daemons of.+/gi,"Daemons").replace(/\s+/g,"-").toLowerCase()),v=r||"https://onepagerules.files.wordpress.com/".concat("jackals"===h?"2022/04":"havoc-war-clans"===h?"2022/05":"2022/02","/").concat(h,".png");return(0,o.jsxs)("div",c(c({},g),{},{className:"".concat(null!==(t=g.className)&&void 0!==t?t:""," is-flex p-2"),style:c(c({},g.style),{},{position:"relative",height:p,flexBasis:p,boxSizing:"content-box"}),children:[(0,o.jsx)("div",{style:{zIndex:0,position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:'url("img/army_bg.png")',backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",transform:"rotate(".concat(l[d]||(l[d]=360*Math.random()),"deg)")}}),(0,o.jsx)("div",{className:"is-flex",style:{height:"100%",width:"100%",backgroundImage:'url("'.concat(v,'")'),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",position:"relative",zIndex:1}})]}))}},3795:function(e,t,n){"use strict";n.d(t,{j:function(){return u}});var r=n(2293),i=n(155),o=n(3946),a=n(8862),s=n(5113),c=n(8298),l=n(5893);function u(e){var t=(0,l.jsx)(r.Z,{position:"static",elevation:0,color:e.transparent?"transparent":void 0,children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(o.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:e.onBackClick,children:(0,l.jsx)(c.Z,{})}),(0,l.jsx)(a.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:e.title}),e.right]})});return e.transparent?t:(0,l.jsx)(s.Z,{elevation:2,color:"primary",square:!0,children:t})}},5071:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.fill,n=void 0===t?"rgba(0,0,0,.38)":t;return(0,r.jsx)("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium",width:"24",height:"24",viewBox:"0 0 24 24",fill:n,xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M13 10.925H11V15.125L9.39999 13.525L7.99999 14.925L12 18.95L16 14.925L14.575 13.55L13 15.125V10.925ZM17.925 22.2H6.07499C5.44165 22.2 4.90432 21.9793 4.46299 21.538C4.02099 21.096 3.79999 20.5583 3.79999 19.925V4.07499C3.79999 3.44165 4.02099 2.90399 4.46299 2.46199C4.90432 2.02065 5.44165 1.79999 6.07499 1.79999H14.075L20.2 7.92499V19.925C20.2 20.5583 19.9793 21.096 19.538 21.538C19.096 21.9793 18.5583 22.2 17.925 22.2ZM12.925 9.07499V4.07499H6.07499V19.925H17.925V9.07499H12.925ZM6.07499 4.07499V9.07499V19.925V4.07499Z"})})}},6830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/load",function(){return n(2896)}])}},function(e){e.O(0,[750,712,774,888,179],(function(){return t=6830,e(e.s=t);var t}));var t=e.O();_N_E=t}]);