(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{8298:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),o=n(5893),a=(0,i.default)((0,o.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");t.Z=a},8619:function(e,t,n){"use strict";var r=n(3366),i=n(7462),o=n(7294),a=n(6010),s=n(7192),c=n(1796),l=n(2151),u=n(7623),d=n(7739),m=n(8974),f=n(1705),p=n(9773),y=n(8686),v=n(5893);const g=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected"],b=(0,l.ZP)(d.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.Z.selected}`]:{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${y.Z.focusVisible}`]:{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${y.Z.selected}:hover`]:{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${y.Z.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${y.Z.disabled}`]:{opacity:e.palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},"flex-start"===t.alignItems&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4}))),h=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiListItemButton"}),{alignItems:c="center",autoFocus:l=!1,component:d="div",children:h,dense:x=!1,disableGutters:j=!1,divider:Z=!1,focusVisibleClassName:O,selected:k=!1}=n,w=(0,r.Z)(n,g),S=o.useContext(p.Z),P={dense:x||S.dense||!1,alignItems:c,disableGutters:j},C=o.useRef(null);(0,m.Z)((()=>{l&&C.current&&C.current.focus()}),[l]);const N=(0,i.Z)({},n,{alignItems:c,dense:P.dense,disableGutters:j,divider:Z,selected:k}),I=(e=>{const{alignItems:t,classes:n,dense:r,disabled:o,disableGutters:a,divider:c,selected:l}=e,u={root:["root",r&&"dense",!a&&"gutters",c&&"divider",o&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},d=(0,s.Z)(u,y.t,n);return(0,i.Z)({},n,d)})(N),R=(0,f.Z)(C,t);return(0,v.jsx)(p.Z.Provider,{value:P,children:(0,v.jsx)(b,(0,i.Z)({ref:R,component:d,focusVisibleClassName:(0,a.Z)(I.focusVisible,O),ownerState:N},w,{classes:I,children:h}))})}));t.Z=h},8223:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(7294),i=n(5617),o=n(1163),a=n(1903),s=n(7622),c=n(8595),l=n(176),u=n(3795),d=n(29),m=n(7794),f=n.n(m),p=n(3457),y=n(480),v=n(9368),g=n(3321),b=n(3744),h=n(5893);function x(e){var t=(0,i.I0)(),n=(0,o.useRouter)(),a=(0,i.v9)((function(e){return e.army})),l=(0,r.useState)(!0),u=l[0],m=l[1],x=(0,r.useState)(!1),j=x[0],Z=x[1],O=(n.query.faction,n.query.armyId);(0,r.useEffect)((function(){var e;(null===(e=a.armyBooks)||void 0===e?void 0:e.length)<1||O&&0===a.loadedArmyBooks.length&&t((0,c.zK)({armyUid:O,gameSystem:a.gameSystem,reset:!1}))}),[a.armyBooks]);var k=function(){var r=(0,d.Z)(f().mark((function r(){var i,o;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=e.armyName||"My List",o=u?b.Z.createSave(a,i):null,t((0,s.$l)({name:i,units:[],points:0,pointsLimit:e.pointsLimit||0,creationTime:o,campaignMode:j})),n.push({pathname:"/list",query:{listId:o}});case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.Z,{className:"mt-4 is-flex-direction-row is-align-items-center",children:(0,h.jsx)(y.Z,{control:(0,h.jsx)(v.Z,{checked:u,onClick:function(){return m((function(e){return!e}))}}),label:"Auto-save changes"})}),(0,h.jsx)(p.Z,{className:"mb-2 is-flex-direction-row is-align-items-center",children:(0,h.jsx)(y.Z,{control:(0,h.jsx)(v.Z,{checked:j,onClick:function(){return Z((function(e){return!e}))}}),label:"Campaign Mode"})}),(0,h.jsx)(g.Z,{className:"mx-auto px-6",variant:"contained",onClick:function(){return k()},disabled:a.loadingArmyData,children:"Create List"})]})}var j=n(9499);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=(0,i.I0)(),n=(0,o.useRouter)();return(0,h.jsx)(g.Z,{className:"mt-4 mx-auto px-6",variant:"contained",onClick:function(){return t((0,s.vw)({name:e.armyName,pointsLimit:e.pointsLimit||0})),void n.push({pathname:"/list",query:O({},n.query)})},children:"Save Changes"})}var w=n(8862),S=n(5113),P=n(8462),C=n(7212),N=n(8619),I=n(9334),R=n(3946),D=n(7720),A=n(594),B=n(6486),F=n.n(B);function E(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(){var e=(0,o.useRouter)(),t=(0,i.v9)((function(e){return e.army})),n=t.selectedFactions,r=t.loadedArmyBooks,a=!!e.query.edit,s=F().uniq(t.selectedFactions.concat(r.filter((function(e){return!e.factionName})).map((function(e){return e.name})))).length>1;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(w.Z,{className:"my-2",fontWeight:600,children:"Selected Army Books"}),(0,h.jsx)(S.Z,{sx:{background:"rgba(33, 33, 33, 0.08)"},elevation:0,children:(0,h.jsxs)(P.Z,{children:[r.filter((function(e){return!e.factionName})).map((function(e){return(0,h.jsx)(_,{army:e,allowRemove:s,editMode:a},e.uid)})),n.map((function(e){return(0,h.jsx)(T,{faction:e,allowRemove:s,editMode:a},e)})),(0,h.jsx)(C.ZP,{disablePadding:!0,children:(0,h.jsx)(N.Z,{color:"primary",onClick:function(){e.replace({pathname:"/armyBookSelection",query:z(z({},e.query),{},{append:!0})})},children:(0,h.jsx)(I.Z,{primary:(0,h.jsx)(w.Z,{color:"primary",fontWeight:600,children:"ADD ANOTHER ARMY"})})})})]})})]})}function _(e){var t=e.army,n=e.allowRemove,o=e.editMode,a=(0,i.I0)();return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(C.ZP,{secondaryAction:n&&(0,h.jsx)(R.Z,{edge:"end","aria-label":"comments",color:"primary",onClick:function(){return e=t.uid,void((!o||confirm("Removing this army book will remove all associated units. Remove anyway?"))&&(a((0,c.dn)(e)),a((0,s.TF)(e))));var e},children:(0,h.jsx)(A.Z,{})}),children:(0,h.jsx)(I.Z,{primary:t.name})}),(0,h.jsx)(D.Z,{})]})}function T(e){var t,n=e.faction,o=e.allowRemove,a=e.editMode,l=(0,i.I0)(),u=(0,i.v9)((function(e){return e.army})),d=u.armyBooks,m=u.loadedArmyBooks.filter((function(e){return e.factionName===n})),f=d.filter((function(e){return e.factionName===n})),p=null===(t=f.filter((function(e){return e.factionRelation}))[0])||void 0===t?void 0:t.factionRelation;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(C.ZP,{secondaryAction:o&&(0,h.jsx)(R.Z,{edge:"end","aria-label":"comments",color:"primary",onClick:function(){return function(e){if(!a||confirm("Removing this faction will remove all associated units. Remove anyway?")){var t=m.map((function(e){return e.uid}));l((0,c.ZT)(e));var n,r=E(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;l((0,s.TF)(i))}}catch(o){r.e(o)}finally{r.f()}}}(n)},children:(0,h.jsx)(A.Z,{})}),children:(0,h.jsx)(I.Z,{primary:n+" "+p,secondary:(0,h.jsx)("span",{style:{color:"#B00020"},children:0===m.length?"Select at least one option":""})})}),f.map((function(e,t){var n=m.some((function(t){return t.uid===e.uid}));return(0,h.jsxs)(r.Fragment,{children:[t>0&&(0,h.jsx)(D.Z,{sx:{marginLeft:"26px"}}),(0,h.jsx)(C.ZP,{secondaryAction:(0,h.jsx)(v.Z,{sx:{right:"-12px"},checked:n,onClick:function(){var t;n?(t=e.uid,(!a||confirm("Removing this army book will remove all associated units. Remove anyway?"))&&(l((0,c.dn)(t)),l((0,s.TF)(t)))):l((0,c.zK)({armyUid:e.uid,gameSystem:u.gameSystem,reset:!1}))}}),children:(0,h.jsx)(I.Z,{primary:e.name,sx:{textIndent:"12px"}})})]},e.uid)})),(0,h.jsx)(D.Z,{})]})}function G(){var e,t,n=(0,i.I0)(),d=(0,o.useRouter)(),m=!!d.query.edit,f=(0,i.v9)((function(e){return e.army})),p=(0,i.v9)((function(e){return e.list})),y=(0,r.useState)(m?p.name:""),v=y[0],g=y[1],b=(0,r.useState)(m?p.pointsLimit:null),j=b[0],Z=b[1],O=null===(e=f.loadedArmyBooks)||void 0===e?void 0:e[0];return(0,r.useEffect)((function(){f.gameSystem||n((0,c.zi)(d.query.gameSystem))}),[f.gameSystem]),(0,r.useEffect)((function(){var e;f.gameSystem&&(null===(e=f.armyBooks)||void 0===e?void 0:e.length)<=0&&n((0,c.V4)(f.gameSystem))}),[f.gameSystem,f.armyBooks]),(0,r.useEffect)((function(){n((0,s.WZ)(null)),m||n((0,s.cU)())}),[]),(0,r.useEffect)((function(){var e;g(null!==(e=null===O||void 0===O?void 0:O.name)&&void 0!==e?e:"")}),[O]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.j,{title:m?"List Details":(null===O||void 0===O?void 0:O.name)||"New Army",onBackClick:function(){return d.back()},transparent:!0}),(0,h.jsxs)("div",{className:"is-flex is-flex-direction-column p-4 mx-auto",style:{maxWidth:"480px"},children:[(0,h.jsx)("div",{className:"mb-6",children:O&&(0,h.jsx)(l.Z,{name:null!==(t=null===O||void 0===O?void 0:O.factionName)&&void 0!==t?t:null===O||void 0===O?void 0:O.name,armyData:f})}),(0,h.jsx)(a.Z,{variant:"filled",label:"List Name",className:"mb-4",value:v,onChange:function(e){return g(e.target.value)}}),(0,h.jsx)(a.Z,{variant:"filled",label:"Points Limit",type:"number",className:"mb-4",value:null!==j&&void 0!==j?j:"",onChange:function(e){return Z(e.target.value?parseInt(e.target.value):null)}}),(0,h.jsx)(M,{}),m?(0,h.jsx)(k,{armyName:v,pointsLimit:j}):(0,h.jsx)(x,{armyName:v,pointsLimit:j})]})]})}},176:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9499),i=n(4730),o=n(5893),a=["imageUrl","armyData","name","size"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={};function u(e){var t,n=e.imageUrl,r=void 0===n?null:n,s=e.armyData,u=void 0===s?null:s,d=e.name,m=void 0===d?null:d,f=e.size,p=void 0===f?"100px":f,y=(0,i.Z)(e,a),v=(u.gameSystem?u.gameSystem.indexOf("aof"):u.gameSystemId,m.replace(/Daemons of.+/gi,"Daemons").replace(/\s+/g,"-").toLowerCase()),g=r||"https://onepagerules.files.wordpress.com/".concat("jackals"===v?"2022/04":"havoc-war-clans"===v?"2022/05":"2022/02","/").concat(v,".png");return(0,o.jsxs)("div",c(c({},y),{},{className:"".concat(null!==(t=y.className)&&void 0!==t?t:""," is-flex p-2"),style:c(c({},y.style),{},{position:"relative",height:p,flexBasis:p,boxSizing:"content-box"}),children:[(0,o.jsx)("div",{style:{zIndex:0,position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:'url("img/army_bg.png")',backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",transform:"rotate(".concat(l[m]||(l[m]=360*Math.random()),"deg)")}}),(0,o.jsx)("div",{className:"is-flex",style:{height:"100%",width:"100%",backgroundImage:'url("'.concat(g,'")'),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",position:"relative",zIndex:1}})]}))}},3795:function(e,t,n){"use strict";n.d(t,{j:function(){return u}});var r=n(2293),i=n(155),o=n(3946),a=n(8862),s=n(5113),c=n(8298),l=n(5893);function u(e){var t=(0,l.jsx)(r.Z,{position:"static",elevation:0,color:e.transparent?"transparent":void 0,children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(o.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:e.onBackClick,children:(0,l.jsx)(c.Z,{})}),(0,l.jsx)(a.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:e.title}),e.right]})});return e.transparent?t:(0,l.jsx)(s.Z,{elevation:2,color:"primary",square:!0,children:t})}},6133:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listConfiguration",function(){return n(8223)}])}},function(e){e.O(0,[750,89,151,774,888,179],(function(){return t=6133,e(e.s=t);var t}));var t=e.O();_N_E=t}]);