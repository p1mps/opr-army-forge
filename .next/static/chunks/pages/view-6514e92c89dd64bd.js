(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{5709:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),o=n(5893),s=(0,i.default)((0,o.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");t.Z=s},6023:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),o=n(5893),s=(0,i.default)((0,o.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print");t.Z=s},4229:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),o=n(5893),s=(0,i.default)((0,o.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=s},1340:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),o=n(5893),s=(0,i.default)((0,o.jsx)("path",{d:"M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0-10H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ViewAgenda");t.Z=s},6514:function(e,t,n){"use strict";var r=n(7462),i=n(3366),o=n(7294),s=n(8885),a=n(2734),c=n(577),l=n(1705),u=n(5893);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(e){return`scale(${e}, ${e**2})`}const h={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},f="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent),m=o.forwardRef((function(e,t){const{addEndListener:n,appear:m=!0,children:x,easing:g,in:v,onEnter:y,onEntered:j,onEntering:Z,onExit:b,onExited:w,onExiting:k,style:S,timeout:P="auto",TransitionComponent:R=s.ZP}=e,N=(0,i.Z)(e,d),O=o.useRef(),E=o.useRef(),C=(0,a.Z)(),z=o.useRef(null),A=(0,l.Z)(x.ref,t),D=(0,l.Z)(z,A),$=e=>t=>{if(e){const n=z.current;void 0===t?e(n):e(n,t)}},T=$(Z),I=$(((e,t)=>{(0,c.n)(e);const{duration:n,delay:r,easing:i}=(0,c.C)({style:S,timeout:P,easing:g},{mode:"enter"});let o;"auto"===P?(o=C.transitions.getAutoHeightDuration(e.clientHeight),E.current=o):o=n,e.style.transition=[C.transitions.create("opacity",{duration:o,delay:r}),C.transitions.create("transform",{duration:f?o:.666*o,delay:r,easing:i})].join(","),y&&y(e,t)})),B=$(j),M=$(k),_=$((e=>{const{duration:t,delay:n,easing:r}=(0,c.C)({style:S,timeout:P,easing:g},{mode:"exit"});let i;"auto"===P?(i=C.transitions.getAutoHeightDuration(e.clientHeight),E.current=i):i=t,e.style.transition=[C.transitions.create("opacity",{duration:i,delay:n}),C.transitions.create("transform",{duration:f?i:.666*i,delay:f?n:n||.333*i,easing:r})].join(","),e.style.opacity=0,e.style.transform=p(.75),b&&b(e)})),U=$(w);return o.useEffect((()=>()=>{clearTimeout(O.current)}),[]),(0,u.jsx)(R,(0,r.Z)({appear:m,in:v,nodeRef:z,onEnter:I,onEntered:B,onEntering:T,onExit:_,onExited:U,onExiting:M,addEndListener:e=>{"auto"===P&&(O.current=setTimeout(e,E.current||0)),n&&n(z.current,e)},timeout:"auto"===P?null:P},N,{children:(e,t)=>o.cloneElement(x,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:p(.75),visibility:"exited"!==e||v?void 0:"hidden"},h[e],S,x.props.style),ref:D},t))}))}));m.muiSupportAuto=!0,t.Z=m},9779:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ue}});var r=n(9499),i=n(7294),o=n(5617),s=n(1163),a=n(7812),c=n(9973),l=n.n(c),u=n(8052),d=n(5113),p=n(6242),h=n(9605),f=n(9358),m=n(8449),x=n(970),g=n(6486),v=n.n(g),y=n(6503),j=n(4631),Z=n(5893);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t,n=e.prefs,r=(0,o.v9)((function(e){return e.list})),i=(0,o.v9)((function(e){return e.army})),s=i.rules,c=i.loadedArmyBooks.flatMap((function(e){return e.specialRules})),u=s.concat(c),d=(0,j.g)(),p=(null!==(t=null===r||void 0===r?void 0:r.units)&&void 0!==t?t:[]).map((function(e){return(0,f.FM)(e)})),h=[],g=p.filter((function(e){return!e.combined||!e.joinToUnit})).map((function(e){return e.combined?m.Z.mergeCombinedUnit(e,function(e){return p.find((function(t){return t.joinToUnit===e.selectionId&&t.combined}))}(e)):e}));console.log(g);var y=v().groupBy(g,(function(e){return JSON.stringify({id:(t=e).id,customName:t.customName,joinToUnit:t.joinToUnit,upgrades:t.selectedUpgrades.map((function(e){return{sectionId:e.upgrade.uid,optionId:e.option.id}})),loadout:t.loadout.map((function(e){return{id:e.id,count:e.count}}))});var t})),b=function(e,t){var r=function(e){var t=e.specialRules.filter((function(e){return"-"!=e.name})),n=m.Z.getAllUpgradedRules(e),r=m.Z.getAllEquipment(e).filter((function(e){return e.attacks>0})).flatMap((function(e){return e.specialRules})),i=t.concat(n).filter((function(e){return!!e&&"-"!=e.name})),o=(0,f.vM)(i,"name");return{keys:Object.keys(o),groups:o,weaponRules:r}}(e);h.push.apply(h,(0,a.Z)(r.keys)),h.push.apply(h,(0,a.Z)(r.weaponRules.map((function(e){return e.name}))));var i=p.find((function(t){return t.selectionId===e.selectionId})),o=p.find((function(t){return t.joinToUnit===e.selectionId&&t.id===e.id})),s=x.Z.calculateUnitTotal(i),c=o?x.Z.calculateUnitTotal(o):0,l=p.find((function(t){return t.selectionId===e.joinToUnit}));return(0,Z.jsx)(S,{rules:r,unit:e,attachedTo:l,pointCost:s+c,count:t,prefs:n,ruleDefinitions:u,traitDefinitions:d})};return(0,Z.jsxs)("div",{className:"mx-4",children:[(0,Z.jsxs)("div",{className:l().grid,children:[n.combineSameUnits?Object.values(y).map((function(e,t){var n=e[0],r=e.length;return b(n,r)})):p.map((function(e,t){return b(e,1)})),n.showPsychic&&(0,Z.jsx)(P,{army:i})]}),!n.showFullRules&&(0,Z.jsx)(R,{usedRules:h,ruleDefinitions:u})]})}function S(e){var t,n=e.unit,r=e.attachedTo,i=e.pointCost,o=e.count,s=e.prefs,a=e.ruleDefinitions,c=e.traitDefinitions,d=function(e){var t=0;return t+=e.specialRules.reduce((function(e,t){return"Tough"===t.name&&(e+=parseInt(t.rating)),e}),0),(t+=m.Z.getAllUpgradedRules(e).reduce((function(e,t){var n=t.name,r=t.rating;return"Tough"===n&&(e+=parseInt(r)),e}),0))||1}(n),p=n.specialRules.filter((function(e){return"-"!=e.name})).concat(m.Z.getUpgradeRules(n)),f=n.loadout.filter((function(e){return"ArmyBookItem"===e.type})),x=(0,Z.jsxs)("div",{className:"is-flex mb-3",style:{justifyContent:"center"},children:[(0,Z.jsxs)("div",{className:l().profileStat2,children:[(0,Z.jsx)("p",{children:"Quality"}),(0,Z.jsx)("div",{className:"stat-break"}),(0,Z.jsxs)("p",{children:[n.quality,"+"]})]}),(0,Z.jsxs)("div",{className:l().profileStat2,children:[(0,Z.jsx)("p",{children:"Defense"}),(0,Z.jsx)("div",{className:"stat-break"}),(0,Z.jsxs)("p",{children:[n.defense,"+"]})]}),d>1&&(0,Z.jsxs)("div",{className:l().profileStat2,children:[(0,Z.jsx)("p",{children:"Tough"}),(0,Z.jsx)("div",{className:"stat-break"}),(0,Z.jsx)("p",{children:d})]})]}),g=v().groupBy(p,(function(e){return e.name})),j=Object.keys(g),b=v().groupBy(f,(function(e){return e.name})),k=Object.keys(b),S=(null===p||void 0===p?void 0:p.length)>0&&(0,Z.jsxs)("div",{className:"px-2 mb-2",style:{fontSize:"14px"},children:[j.map((function(e,t){var n=g[e];if(!s.showFullRules)return(0,Z.jsxs)("span",{children:[0===t?"":", ",(0,Z.jsx)(y.Z,{specialRules:n})]},t);var r=n[0],i=n.reduce((function(e,t){return t.rating?e+parseInt(t.rating):e}),0),c=a.filter((function(e){return/(.+?)(?:\(|$)/.exec(e.name)[0]===r.name}))[0];return(0,Z.jsxs)("p",{children:[(0,Z.jsxs)("span",{style:{fontWeight:600},children:[h.Z.displayName(w(w({},r),{},{rating:i}),o)," -"]}),(0,Z.jsxs)("span",{children:[" ",(null===c||void 0===c?void 0:c.description)||""]})]},t)})),k.map((function(e,t){var r,i=b[e],o=i[0],s=i.reduce((function(e,t){return e+(t.count||1)}),0),a=o.content.filter((function(e){return"ArmyBookRule"===e.type||"ArmyBookDefense"===e.type})),c=a.length>0,l=null===(r=n.selectedUpgrades.find((function(e){return e.option.gains.some((function(e){return e.name===o.name}))})))||void 0===r?void 0:r.upgrade,u="all"===(null===l||void 0===l?void 0:l.affects),d=a.some((function(e){return"Impact"===e.name})),p=u&&!d;return(0,Z.jsxs)("span",{children:[", ",s>1&&!p&&"".concat(s,"x "),o.name,c&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("span",{children:"("}),(0,Z.jsx)(y.Z,{specialRules:a}),(0,Z.jsx)("span",{children:")"})]})]},t)}))]}),P=(null===(t=n.traits)||void 0===t?void 0:t.length)>0&&(0,Z.jsx)("div",{className:"px-2 mb-4",style:{fontSize:"14px"},children:n.traits.map((function(e,t){var n=c.find((function(t){return t.name===e}));return s.showFullRules?(0,Z.jsxs)("p",{children:[(0,Z.jsxs)("span",{style:{fontWeight:600},children:[n.name," -"]}),(0,Z.jsxs)("span",{children:[" ",n.description]})]},t):(0,Z.jsxs)("span",{children:[0===t?"":", ",(0,Z.jsx)(y.Z,{specialRules:[n]})]},t)}))});r&&(Z.Fragment,r.customName||r.name);return(0,Z.jsx)(N,{title:(0,Z.jsxs)(Z.Fragment,{children:[o>1?"".concat(o,"x "):"",n.customName||n.name,(0,Z.jsxs)("span",{className:"",style:{color:"#666666"},children:[" ","[",n.size,"]"]}),s.showPointCosts&&(0,Z.jsxs)("span",{className:"is-size-6 ml-1",style:{color:"#666666"},children:["- ",i,"pts"]})]}),content:(0,Z.jsxs)(Z.Fragment,{children:[!1,x,S,P,(0,Z.jsx)("div",{className:"mt-4",children:(0,Z.jsx)(u.Z,{unit:n,hideEquipment:!0,square:!0})})]})})}function P(e){var t=e.army;return(0,Z.jsx)(Z.Fragment,{children:t.loadedArmyBooks.map((function(e){return(0,Z.jsx)(N,{title:"Psychic/Spells",content:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("hr",{className:"my-0"}),(0,Z.jsx)(d.Z,{square:!0,elevation:0,children:(0,Z.jsx)("div",{className:"px-2 my-2",children:e.spells.map((function(e){return(0,Z.jsxs)("p",{children:[(0,Z.jsxs)("span",{style:{fontWeight:600},children:[e.name," (",e.threshold,"+):"," "]}),(0,Z.jsx)("span",{children:e.effect})]},e.id)}))})})]})})}))})}function R(e){var t=e.usedRules,n=e.ruleDefinitions;return(0,Z.jsx)(N,{title:"Special Rules",content:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("hr",{className:"my-0"}),(0,Z.jsx)(d.Z,{square:!0,elevation:0,children:(0,Z.jsx)("div",{className:"px-2 my-2 ".concat(l().grid," has-text-left"),children:v().uniq(t).sort().map((function(e,t){var r;return(0,Z.jsxs)("p",{style:{breakInside:"avoid"},children:[(0,Z.jsxs)("span",{style:{fontWeight:600},children:[e," - "]}),(0,Z.jsx)("span",{children:null===(r=n.find((function(t){return t.name===e})))||void 0===r?void 0:r.description})]},t)}))})})]})})}function N(e){var t=e.title,n=e.content;return(0,Z.jsx)(p.Z,{elevation:1,className:l().card,children:(0,Z.jsxs)("div",{className:"card-body",children:[(0,Z.jsx)("h3",{className:"is-size-5 my-2",style:{fontWeight:600,textAlign:"center"},children:t}),n]})})}var O=n(3366),E=n(7462),C=n(6010),z=n(7192),A=n(8628),D=n(8885),$=n(7144),T=n(1705),I=n(2734),B=n(577),M=n(5340);const _=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function U(e,t,n){var r;const i=function(e,t,n){const r=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),o=(0,M.Z)(t);let s;if(t.fakeTransform)s=t.fakeTransform;else{const e=o.getComputedStyle(t);s=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let a=0,c=0;if(s&&"none"!==s&&"string"===typeof s){const e=s.split("(")[1].split(")")[0].split(",");a=parseInt(e[4],10),c=parseInt(e[5],10)}return"left"===e?i?`translateX(${i.right+a-r.left}px)`:`translateX(${o.innerWidth+a-r.left}px)`:"right"===e?i?`translateX(-${r.right-i.left-a}px)`:`translateX(-${r.left+r.width-a}px)`:"up"===e?i?`translateY(${i.bottom+c-r.top}px)`:`translateY(${o.innerHeight+c-r.top}px)`:i?`translateY(-${r.top-i.top+r.height-c}px)`:`translateY(-${r.top+r.height-c}px)`}(e,t,"function"===typeof(r=n)?r():r);i&&(t.style.webkitTransform=i,t.style.transform=i)}var F=i.forwardRef((function(e,t){const n=(0,I.Z)(),r={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:s,appear:a=!0,children:c,container:l,direction:u="down",easing:d=r,in:p,onEnter:h,onEntered:f,onEntering:m,onExit:x,onExited:g,onExiting:v,style:y,timeout:j=o,TransitionComponent:b=D.ZP}=e,w=(0,O.Z)(e,_),k=i.useRef(null),S=(0,T.Z)(c.ref,k),P=(0,T.Z)(S,t),R=e=>t=>{e&&(void 0===t?e(k.current):e(k.current,t))},N=R(((e,t)=>{U(u,e,l),(0,B.n)(e),h&&h(e,t)})),C=R(((e,t)=>{const r=(0,B.C)({timeout:j,style:y,easing:d},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",(0,E.Z)({},r)),e.style.transition=n.transitions.create("transform",(0,E.Z)({},r)),e.style.webkitTransform="none",e.style.transform="none",m&&m(e,t)})),z=R(f),A=R(v),F=R((e=>{const t=(0,B.C)({timeout:j,style:y,easing:d},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",t),e.style.transition=n.transitions.create("transform",t),U(u,e,l),x&&x(e)})),W=R((e=>{e.style.webkitTransition="",e.style.transition="",g&&g(e)})),q=i.useCallback((()=>{k.current&&U(u,k.current,l)}),[u,l]);return i.useEffect((()=>{if(p||"down"===u||"right"===u)return;const e=(0,$.Z)((()=>{k.current&&U(u,k.current,l)})),t=(0,M.Z)(k.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[u,p,l]),i.useEffect((()=>{p||q()}),[p,q]),(0,Z.jsx)(b,(0,E.Z)({nodeRef:k,onEnter:N,onEntered:z,onEntering:C,onExit:F,onExited:W,onExiting:A,addEndListener:e=>{s&&s(k.current,e)},appear:a,in:p,timeout:j},w,{children:(e,t)=>i.cloneElement(c,(0,E.Z)({ref:P,style:(0,E.Z)({visibility:"exited"!==e||p?void 0:"hidden"},y,c.props.style)},t))}))})),W=n(8216),q=n(7623),H=n(2151),L=n(8979),V=n(6087);function X(e){return(0,L.Z)("MuiDrawer",e)}(0,V.Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Y=["BackdropProps"],J=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Q=(e,t)=>{const{ownerState:n}=e;return[t.root,("permanent"===n.variant||"persistent"===n.variant)&&t.docked,t.modal]},G=(0,H.ZP)(A.Z,{name:"MuiDrawer",slot:"Root",overridesResolver:Q})((({theme:e})=>({zIndex:e.zIndex.drawer}))),K=(0,H.ZP)("div",{shouldForwardProp:H.FO,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Q})({flex:"0 0 auto"}),ee=(0,H.ZP)(d.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`paperAnchor${(0,W.Z)(n.anchor)}`],"temporary"!==n.variant&&t[`paperAnchorDocked${(0,W.Z)(n.anchor)}`]]}})((({theme:e,ownerState:t})=>(0,E.Z)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===t.anchor&&{left:0},"top"===t.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===t.anchor&&{right:0},"bottom"===t.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===t.anchor&&"temporary"!==t.variant&&{borderRight:`1px solid ${e.palette.divider}`},"top"===t.anchor&&"temporary"!==t.variant&&{borderBottom:`1px solid ${e.palette.divider}`},"right"===t.anchor&&"temporary"!==t.variant&&{borderLeft:`1px solid ${e.palette.divider}`},"bottom"===t.anchor&&"temporary"!==t.variant&&{borderTop:`1px solid ${e.palette.divider}`}))),te={left:"right",right:"left",top:"down",bottom:"up"};var ne=i.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiDrawer"}),r=(0,I.Z)(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{anchor:s="left",BackdropProps:a,children:c,className:l,elevation:u=16,hideBackdrop:d=!1,ModalProps:{BackdropProps:p}={},onClose:h,open:f=!1,PaperProps:m={},SlideProps:x,TransitionComponent:g=F,transitionDuration:v=o,variant:y="temporary"}=n,j=(0,O.Z)(n.ModalProps,Y),b=(0,O.Z)(n,J),w=i.useRef(!1);i.useEffect((()=>{w.current=!0}),[]);const k=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?te[t]:t}(r,s),S=s,P=(0,E.Z)({},n,{anchor:S,elevation:u,open:f,variant:y},b),R=(e=>{const{classes:t,anchor:n,variant:r}=e,i={root:["root"],docked:[("permanent"===r||"persistent"===r)&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${(0,W.Z)(n)}`,"temporary"!==r&&`paperAnchorDocked${(0,W.Z)(n)}`]};return(0,z.Z)(i,X,t)})(P),N=(0,Z.jsx)(ee,(0,E.Z)({elevation:"temporary"===y?u:0,square:!0},m,{className:(0,C.Z)(R.paper,m.className),ownerState:P,children:c}));if("permanent"===y)return(0,Z.jsx)(K,(0,E.Z)({className:(0,C.Z)(R.root,R.docked,l),ownerState:P,ref:t},b,{children:N}));const A=(0,Z.jsx)(g,(0,E.Z)({in:f,direction:te[k],timeout:v,appear:w.current},x,{children:N}));return"persistent"===y?(0,Z.jsx)(K,(0,E.Z)({className:(0,C.Z)(R.root,R.docked,l),ownerState:P,ref:t},b,{children:A})):(0,Z.jsx)(G,(0,E.Z)({BackdropProps:(0,E.Z)({},a,p,{transitionDuration:v}),className:(0,C.Z)(R.root,R.modal,l),open:f,ownerState:P,onClose:h,hideBackdrop:d,ref:t},b,j,{children:A}))})),re=n(1796),ie=n(1964);function oe(e){return(0,L.Z)("MuiSwitch",e)}var se=(0,V.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);const ae=["className","color","edge","size","sx"],ce=(0,H.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.edge&&t[`edge${(0,W.Z)(n.edge)}`],t[`size${(0,W.Z)(n.size)}`]]}})((({ownerState:e})=>(0,E.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${se.thumb}`]:{width:16,height:16},[`& .${se.switchBase}`]:{padding:4,[`&.${se.checked}`]:{transform:"translateX(16px)"}}}))),le=(0,H.ZP)(ie.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.switchBase,{[`& .${se.input}`]:t.input},"default"!==n.color&&t[`color${(0,W.Z)(n.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${se.checked}`]:{transform:"translateX(20px)"},[`&.${se.disabled}`]:{color:"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]},[`&.${se.checked} + .${se.track}`]:{opacity:.5},[`&.${se.disabled} + .${se.track}`]:{opacity:"light"===e.palette.mode?.12:.2},[`& .${se.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,E.Z)({"&:hover":{backgroundColor:(0,re.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${se.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:(0,re.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${se.disabled}`]:{color:"light"===e.palette.mode?(0,re.$n)(e.palette[t.color].main,.62):(0,re._j)(e.palette[t.color].main,.55)}},[`&.${se.checked} + .${se.track}`]:{backgroundColor:e.palette[t.color].main}}))),ue=(0,H.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.mode?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.mode?.38:.3}))),de=(0,H.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})));var pe=i.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiSwitch"}),{className:r,color:i="primary",edge:o=!1,size:s="medium",sx:a}=n,c=(0,O.Z)(n,ae),l=(0,E.Z)({},n,{color:i,edge:o,size:s}),u=(e=>{const{classes:t,edge:n,size:r,color:i,checked:o,disabled:s}=e,a={root:["root",n&&`edge${(0,W.Z)(n)}`,`size${(0,W.Z)(r)}`],switchBase:["switchBase",`color${(0,W.Z)(i)}`,o&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=(0,z.Z)(a,oe,t);return(0,E.Z)({},t,c)})(l),d=(0,Z.jsx)(de,{className:u.thumb,ownerState:l});return(0,Z.jsxs)(ce,{className:(0,C.Z)(u.root,r),sx:a,ownerState:l,children:[(0,Z.jsx)(le,(0,E.Z)({type:"checkbox",icon:d,checkedIcon:d,ref:t,ownerState:l},c,{classes:(0,E.Z)({},u,{root:u.switchBase})})),(0,Z.jsx)(ue,{className:u.track,ownerState:l})]})})),he=n(2293),fe=n(155),me=n(3946),xe=n(8862),ge=n(8462),ve=n(7212),ye=n(9334),je=n(3321),Ze=n(594),be=n(4229),we=n(1340),ke=n(5709),Se=n(3343),Pe=n(3744),Re=n(6023),Ne=n(2882),Oe=n(7906),Ee=n(3184),Ce=n(3816),ze=n(3252);function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $e(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return Te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function Te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ie(e){var t,n,r=e.prefs,s=(0,o.v9)((function(e){return e.list})),c=(0,o.v9)((function(e){return e.army})),u=(0,i.useState)(0),h=u[0],x=u[1],g=c.rules,y=c.loadedArmyBooks.flatMap((function(e){return e.specialRules})),j=g.concat(y),b=(null!==(t=null===s||void 0===s?void 0:s.units)&&void 0!==t?t:[]).map((function(e){return(0,f.FM)(e)})),w=$e(b);try{for(w.s();!(n=w.n()).done;){delete n.value.selectionId}}catch(R){w.e(R)}finally{w.f()}(0,i.useEffect)((function(){var e=Array.from(document.querySelectorAll(".weapon-name-cell")).reduce((function(e,t){return Math.max(e,t.getBoundingClientRect().width)}),0);x(e)}));var k=[],S=v().groupBy(b,(function(e){return JSON.stringify(function(e){return{id:e.id,upgrades:e.selectedUpgrades.map((function(e){return{sectionId:e.upgrade.uid,optionId:e.option.id}}))}}(e))})),P=function(e,t){var n=function(e){var t=(e.specialRules||[]).filter((function(e){return"-"!=e.name})),n=m.Z.getAllUpgradedRules(e),r=m.Z.getAllEquipment(e).filter((function(e){return e.attacks>0})).flatMap((function(e){return e.specialRules})),i=t.concat(n).filter((function(e){return!!e&&"-"!=e.name})),o=(0,f.vM)(i,"name");return{keys:Object.keys(o),groups:o,weaponRules:r}}(e);return k.push.apply(k,(0,a.Z)(n.keys)),k.push.apply(k,(0,a.Z)(n.weaponRules.map((function(e){return e.name})))),(0,Z.jsx)(Be,{rules:n,unit:e,count:t,prefs:r,ruleDefinitions:j,maxCellWidth:h})};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ne.Z,{children:(0,Z.jsxs)(Oe.Z,{size:"small",children:[(0,Z.jsx)(Ee.Z,{children:(0,Z.jsxs)(Ce.Z,{children:[(0,Z.jsx)(ze.Z,{style:{fontWeight:"600"},children:"Unit"}),(0,Z.jsx)(ze.Z,{style:{fontWeight:"600"},children:"Stats"}),(0,Z.jsx)(ze.Z,{style:{fontWeight:"600"},children:"Loadout"}),(0,Z.jsx)(ze.Z,{style:{fontWeight:"600"},children:"Rules"})]})}),r.combineSameUnits?Object.values(S).map((function(e,t){var n=e[0],r=e.length;return P(n,r)})):b.map((function(e,t){return P(e,1)}))]})}),r.showPsychic&&c.loadedArmyBooks.map((function(e){return(0,Z.jsx)("div",{className:l().card,children:(0,Z.jsx)(p.Z,{elevation:1,children:(0,Z.jsx)("div",{className:"mb-4",children:(0,Z.jsxs)("div",{className:"card-body",children:[(0,Z.jsx)("h3",{className:"is-size-4 my-2",style:{fontWeight:500,textAlign:"center"},children:"Psychic/Spells"}),(0,Z.jsx)("hr",{className:"my-0"}),(0,Z.jsx)(d.Z,{square:!0,elevation:0,children:(0,Z.jsx)("div",{className:"px-2 my-2",children:e.spells.map((function(e){return(0,Z.jsxs)("p",{children:[(0,Z.jsxs)("span",{style:{fontWeight:600},children:[e.name," (",e.threshold,"+):"," "]}),(0,Z.jsx)("span",{children:e.effect})]},e.id)}))})})]})})})},e.uid)})),!r.showFullRules&&(0,Z.jsx)("div",{className:"mx-4 ".concat(l().card),children:(0,Z.jsx)(p.Z,{elevation:1,children:(0,Z.jsx)("div",{className:"mb-4",children:(0,Z.jsxs)("div",{className:"card-body",children:[(0,Z.jsx)("h3",{className:"is-size-4 my-2",style:{fontWeight:500,textAlign:"center"},children:"Special Rules"}),(0,Z.jsx)("hr",{className:"my-0"}),(0,Z.jsx)(d.Z,{square:!0,elevation:0,children:(0,Z.jsx)("div",{className:"px-2 my-2 ".concat(l().grid," has-text-left"),children:v().uniq(k).sort().map((function(e,t){var n;return(0,Z.jsxs)("p",{style:{breakInside:"avoid"},children:[(0,Z.jsxs)("span",{style:{fontWeight:600},children:[e," - "]}),(0,Z.jsx)("span",{children:null===(n=j.find((function(t){return t.name===e})))||void 0===n?void 0:n.description})]},t)}))})})]})})})})]})}function Be(e){var t=e.unit,n=e.rules,r=e.count,i=e.prefs,o=e.ruleDefinitions,s=e.maxCellWidth,a=n.keys,c=n.groups;a.sort((function(e,t){return e.localeCompare(t)}));var l=(0,Z.jsx)(ze.Z,{children:(0,Z.jsxs)("table",{children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{paddingRight:"8px"},children:"Quality "}),(0,Z.jsxs)("td",{style:{fontWeight:"600"},children:[" ",t.quality,"+"]})]}),(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{paddingRight:"8px"},children:"Defense"}),(0,Z.jsxs)("td",{style:{fontWeight:"600"},children:[" ",t.defense,"+"]})]})]})}),u={padding:"2px 4px"},d=(0,Z.jsx)(ze.Z,{children:(0,Z.jsx)("table",{children:t.loadout.map((function(e,t){var n;return(0,Z.jsxs)("tr",{children:[(0,Z.jsxs)("td",{className:"weapon-name-cell",style:De(De({},u),{},{paddingRight:"12px",fontWeight:"600",width:s?s+"px":null}),children:[e.count,"x ",e.name]}),(0,Z.jsx)("td",{style:u,children:e.range?e.range+'"':"-"}),(0,Z.jsxs)("td",{style:u,children:["A",e.attacks]}),(0,Z.jsx)("td",{style:u,children:null===(n=e.specialRules)||void 0===n?void 0:n.map((function(e){return h.Z.displayName(e)})).join(", ")})]},t)}))})}),p=(null===a||void 0===a?void 0:a.length)>0&&(0,Z.jsx)(ze.Z,{children:a.map((function(e,t){var n=c[e];if(!i.showFullRules)return(0,Z.jsxs)("span",{children:[0===t?"":", ",(0,Z.jsx)(y.Z,{specialRules:n})]},t);var s=n[0],a=n.reduce((function(e,t){return t.rating?e+parseInt(t.rating):e}),0),l=o.filter((function(e){return/(.+?)(?:\(|$)/.exec(e.name)[0]===s.name}))[0];return(0,Z.jsxs)("p",{children:[(0,Z.jsxs)("span",{style:{fontWeight:600},children:[h.Z.displayName(De(De({},s),{},{rating:a}),r)," -"]}),(0,Z.jsxs)("span",{children:[" ",(null===l||void 0===l?void 0:l.description)||""]})]},t)}))});return(0,Z.jsxs)(Ce.Z,{children:[(0,Z.jsxs)(ze.Z,{style:{fontWeight:"600",fontSize:"16px"},children:[r>1?"".concat(r,"x "):"",t.customName||t.name,(0,Z.jsxs)("span",{className:"",style:{color:"#666666"},children:[" ","[",t.size,"]"]}),i.showPointCosts&&(0,Z.jsxs)("span",{className:"ml-1",style:{fontSize:"14px",color:"#666666"},children:["- ",x.Z.calculateUnitTotal(t),"pts"]})]}),l,d,p]})}function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ue(){var e=(0,o.v9)((function(e){return e.list})),t=(0,s.useRouter)(),n={showFullRules:!1,showPointCosts:!0,combineSameUnits:!0,showPsychic:Fe(e)},r=(0,i.useState)(n),a=r[0],c=r[1],l=(0,i.useState)(!0),u=l[0],p=l[1],h=(0,i.useState)(!1),f=h[0],m=h[1];function x(e){var t=e(a);c(e),Pe.Z.saveViewPreferences(t)}return(0,i.useEffect)((function(){var t=Pe.Z.getViewPreferences()||{};c((function(n){var r;return _e(_e(_e({},n),t),{},{showPsychic:Fe(e)||null!==(r=null===t||void 0===t?void 0:t.showPsychic)&&void 0!==r&&r})}))}),[]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(d.Z,{className:"no-print",elevation:2,color:"primary",square:!0,children:(0,Z.jsx)(he.Z,{position:"static",elevation:0,children:(0,Z.jsxs)(fe.Z,{children:[(0,Z.jsx)(me.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return t.back()},children:(0,Z.jsx)(Ze.Z,{})}),(0,Z.jsxs)(xe.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:[e.name," \u2022 ",e.points,"pts"]}),(0,Z.jsx)(me.Z,{className:"mr-4",size:"large",edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return window.print()},children:(0,Z.jsx)(Re.Z,{})}),(0,Z.jsx)(me.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return m(!0)},children:(0,Z.jsx)(be.Z,{})})]})})}),(0,Z.jsxs)(ne,{anchor:"right",open:f,onClose:function(){return m(!1)},children:[(0,Z.jsxs)("div",{className:"is-flex p-4",children:[(0,Z.jsx)("h3",{className:"is-size-4",style:{flex:1},children:"Display Settings"}),(0,Z.jsx)(me.Z,{onClick:function(){return m(!1)},children:(0,Z.jsx)(Se.Z,{})})]}),(0,Z.jsxs)(ge.Z,{children:[(0,Z.jsxs)(ve.ZP,{children:[(0,Z.jsx)(ye.Z,{children:"Show Psychic/Spells"}),(0,Z.jsx)(pe,{edge:"end",checked:a.showPsychic,onChange:function(){return x((function(e){return _e(_e({},e),{},{showPsychic:!e.showPsychic})}))}})]}),(0,Z.jsxs)(ve.ZP,{children:[(0,Z.jsx)(ye.Z,{children:"Show full special rules text"}),(0,Z.jsx)(pe,{edge:"end",checked:a.showFullRules,onChange:function(){return x((function(e){return _e(_e({},e),{},{showFullRules:!e.showFullRules})}))}})]}),(0,Z.jsxs)(ve.ZP,{children:[(0,Z.jsx)(ye.Z,{children:"Show point costs"}),(0,Z.jsx)(pe,{edge:"end",checked:a.showPointCosts,onChange:function(){return x((function(e){return _e(_e({},e),{},{showPointCosts:!e.showPointCosts})}))}})]}),(0,Z.jsxs)(ve.ZP,{children:[(0,Z.jsx)(ye.Z,{children:"Combine Similar Units"}),(0,Z.jsx)(pe,{edge:"end",checked:a.combineSameUnits,onChange:function(){return x((function(e){return _e(_e({},e),{},{combineSameUnits:!e.combineSameUnits})}))}})]})]})]}),(0,Z.jsxs)("div",{className:"is-flex px-4 py-2 no-print",style:{alignItems:"center"},children:[(0,Z.jsx)("div",{className:"is-flex-grow-1"}),(0,Z.jsxs)(je.Z,{onClick:function(){return p(!u)},children:[u?(0,Z.jsx)(ke.Z,{}):(0,Z.jsx)(we.Z,{}),(0,Z.jsx)("span",{className:"pl-1 full-compact-text",children:u?"cards":"list"})]})]}),u?(0,Z.jsx)(k,{prefs:a}):(0,Z.jsx)(Ie,{prefs:a})]})}function Fe(e){return function(e,t){return e.units.some((function(e){var n=e.specialRules;return Boolean(n.find((function(e){return e.name===t.name})))}))}(e,{key:"psychic",name:"Psychic",rating:"1"})}},5924:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view",function(){return n(9779)}])},9973:function(e){e.exports={grid:"Cards_grid__zA87S",card:"Cards_card__Igz_I",profileStat:"Cards_profileStat__xPPHR",profileStat2:"Cards_profileStat2__h6jqH"}}},function(e){e.O(0,[750,758,797,774,888,179],(function(){return t=5924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);