(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{9166:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(5944),i=n(7294),o=n(146),a=n(9008),l=function(){return(0,r.BX)(a.default,{children:[(0,r.tZ)("title",{children:"Quiz Game"}),(0,r.tZ)("link",{rel:"icon",href:"/favicon.ico"})]})},c=n(1163),u=n(1664),d=n(6212),s=n(8440),f=n(3011),h=n(5366);var m=(0,h.Z)("span",{target:"e1vr2ned1"})({name:"ssiym2",styles:"position:relative;display:flex;align-items:center;padding:0 0.4rem"}),p=(0,h.Z)("input",{target:"e1vr2ned0"})({name:"radjrp",styles:"position:relative;width:4rem;height:1rem;background:#555;border-radius:0.5rem;outline:none;cursor:pointer;appearance:none;&+label{position:absolute;left:0.2rem;display:inline-block;width:1.8rem;height:1.8rem;background-color:#f0cd6e;border-radius:50%;cursor:pointer;opacity:0.9;transition:all 0.3s ease;}&:checked+label{left:3rem;}&:focus-visible{outline:solid 0.2rem #f7ead7;}"}),g=function(e){var t=e.checked,n=e.onChange;return(0,r.BX)(m,{className:"toggle-control",children:[(0,r.tZ)(p,{id:"dmcheck",className:"dmcheck",type:"checkbox",checked:t,onChange:n}),(0,r.tZ)("label",{htmlFor:"dmcheck"})]})},v=n(2852),Z=(0,h.Z)("div",{target:"egwopn40"})("position:absolute;top:50%;right:0;display:flex;justify-content:flex-end;margin:0 auto;transform:translateY(-50%);&>button{color:#ffe600;font-size:1.2rem;background:none;border:none;cursor:pointer;transition:color 0.3s ease;&:last-child{color:#666;}&:focus{outline:none;}}",v.My,"{position:static;}"),b=function(){var e=(0,f.Z)(!1),t=e.value,n=e.disable,i=e.enable,o=e.toggle;return(0,r.BX)(Z,{children:[(0,r.tZ)("button",{type:"button",onClick:n,children:"\u2600"}),(0,r.tZ)(g,{checked:t,onChange:o}),(0,r.tZ)("button",{type:"button",onClick:i,children:"\u263e"})]})},k=n(917),y=function(e){return(0,k.iv)("box-sizing:border-box;width:100%;height:0.3rem;background-color:",e.text.primary,";transition:all 0.3s;","")},x=(0,h.Z)("div",{target:"e17f7gvm3"})("position:absolute;top:50%;left:1.5rem;z-index:",20,";box-sizing:border-box;width:2.2rem;transform:translateY(-50%);cursor:pointer;transition:all 0.3s;"),w=(0,h.Z)("div",{target:"e17f7gvm2"})((function(e){var t=e.theme;return y(t)}),";position:relative;float:left;margin-top:0.3rem;opacity:",(function(e){return e.isOpen?0:1}),";"),z=(0,h.Z)("div",{target:"e17f7gvm1"})((function(e){var t=e.theme;return y(t)}),";position:relative;float:left;margin-top:",(function(e){return e.isOpen?"0.8rem":"0"}),";transform:",(function(e){return e.isOpen?"rotate(135deg)":"rotate(0)"}),";"),O=(0,h.Z)("div",{target:"e17f7gvm0"})((function(e){var t=e.theme;return y(t)}),";position:relative;float:left;margin-top:",(function(e){return e.isOpen?"-0.9rem":"0.3rem"}),";transform:",(function(e){return e.isOpen?"rotate(-135deg)":"rotate(0)"}),";"),C=(0,i.forwardRef)((function(e,t){var n=e.isOpen,i=e.onOpen;return(0,s.ZP)()?null:(0,r.BX)(x,{ref:t,onClick:i,children:[(0,r.tZ)(z,{isOpen:n}),(0,r.tZ)(w,{isOpen:n}),(0,r.tZ)(O,{isOpen:n})]})}));C.displayName="Burger";var X=C,B=n(1871),E=n(6378),A=(0,h.Z)("header",{target:"e1w5hzr2"})("position:fixed;top:0;left:0;z-index:",30,";width:100%;height:var(--header-height);color:",(function(e){var t;return null===(t=e.theme.text)||void 0===t?void 0:t.primary}),";background-color:",(function(e){var t;return null===(t=e.theme.bg)||void 0===t?void 0:t.primary}),";"),P=(0,h.Z)("nav",{target:"e1w5hzr1"})(E.AF,";position:fixed;top:0;left:0;z-index:",10,";width:30rem;height:calc(100% + 6rem);margin:0;padding:var(--header-height) 0 6rem 0;overflow-y:auto;color:",(function(e){var t;return null===(t=e.theme.text)||void 0===t?void 0:t.primary}),";background-color:",(function(e){var t;return null===(t=e.theme.bg)||void 0===t?void 0:t.primary}),";transform:",(function(e){return e.isOpen?"translateX(0)":"translateX(-100vw)"}),";transition:transform 0.5s ease,opacity ease 0.2s;will-change:transform;ul{margin:0;padding:0;}li{list-style:none;a{",(function(e){var t=e.theme;return(0,E.td)(t)})," display:block;padding:1.6rem;}}"),G=(0,h.Z)("div",{target:"e1w5hzr0"})("position:fixed;top:0;right:0;bottom:0;left:0;z-index:",(function(e){return e.isOpen?10:-1}),";background-color:",B.Sn,";opacity:",(function(e){return e.isOpen?.5:0}),";transition:opacity ease 1s;"),M=function(){var e=(0,c.useRouter)(),t=(0,s.ZP)(),n=(0,d.ZP)().data,a=(0,i.useRef)(null),l=(0,i.useRef)(null),f=(0,i.useState)(!1),h=f[0],m=f[1],p=(0,i.useCallback)((function(){m(!h)}),[h]),g=(0,i.useCallback)((function(e){var t,n;null!==(t=l.current)&&void 0!==t&&t.contains(e.target)||null!==(n=a.current)&&void 0!==n&&n.contains(e.target)||m(!1)}),[]);return(0,i.useEffect)((function(){document.body.style.overflow=h?"hidden":"auto"}),[h]),(0,i.useEffect)((function(){return document.addEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g)}}),[]),(0,r.BX)(o.pU,{at:"xs",children:[(0,r.BX)(A,{children:[(0,r.tZ)(X,{ref:a,isOpen:h,onOpen:p}),(0,r.tZ)(b,{})]}),(0,r.tZ)(G,{isOpen:h}),(0,r.tZ)(P,{ref:l,isOpen:h,children:(0,r.BX)("ul",{children:[t?null:(0,r.tZ)("li",{children:null!==n&&void 0!==n&&n.player?(0,r.tZ)(u.default,{href:"/account",children:"\ud83d\udd13 Account"}):(0,r.tZ)(u.default,{href:"/signin",children:"\ud83d\udd10 Enter Game"})}),(0,r.tZ)("li",{children:(0,r.tZ)(u.default,{href:"/",children:"Home"})}),(0,r.tZ)("li",{children:(0,r.tZ)(u.default,{href:"/about",children:"About"})}),(null===n||void 0===n?void 0:n.player)&&"/game"!==e.pathname&&(0,r.tZ)("li",{children:(0,r.tZ)(u.default,{href:"/game",children:"New Game"})})]})})]})},N=(0,h.Z)("nav",{target:"e1b80j0l1"})("position:fixed;top:0;left:0;z-index:",30,";display:flex;align-items:center;width:100%;height:6.4rem;padding:1rem;color:",(function(e){var t;return null===(t=e.theme.text)||void 0===t?void 0:t.primary}),";line-height:6.4rem;background-color:",(function(e){var t;return null===(t=e.theme.bg)||void 0===t?void 0:t.primary}),";",E.AF,">div{flex:1 0;}"),j=(0,h.Z)("a",{target:"e1b80j0l0"})((function(e){var t=e.theme;return(0,E.td)(t)}),";"),R=function(e){var t=e.href,n=e.children;return(0,r.tZ)(u.default,{href:t,passHref:!0,children:(0,r.tZ)(j,{children:n})})},_=function(){var e=(0,c.useRouter)(),t=(0,s.ZP)(),n=(0,d.ZP)().data;return(0,r.tZ)(o.pU,{greaterThan:"xs",children:(0,r.BX)(N,{children:[t?null:null!==n&&void 0!==n&&n.player?(0,r.tZ)(R,{href:"/account",children:"My Account"}):(0,r.tZ)(R,{href:"/signin",children:"Enter Game"}),(0,r.tZ)(R,{href:"/",children:"Home"}),(0,r.tZ)(R,{href:"/about",children:"About"}),(null===n||void 0===n?void 0:n.player)&&"/game"!==e.pathname&&(0,r.tZ)(R,{href:"/game",children:"Start a new Game"}),(0,r.tZ)(b,{})]})})},S=(0,h.Z)("footer",{target:"e2e5icg0"})("padding:1rem;color:",(function(e){var t=e.theme;return"".concat(t.text.primary," !important")}),";font-weight:bold;text-align:right;margin-bottom:0%;"),F=function(){return(0,r.tZ)(S,{children:"Group 21, CMPE 272"})};var H=(0,h.Z)("main",{target:"e5mpgka1"})({name:"1azakc",styles:"text-align:center"}),U=(0,h.Z)("div",{target:"e5mpgka0"})("position:fixed;top:0;left:0;z-index:",-1,";width:100%;min-height:100%;background:url('https://img.freepik.com/free-photo/separation-coin-bank-note-puzzle-green-background_23-2148207339.jpg?w=2000') no-repeat center center fixed;background-size:cover;"),L=function(e){var t=e.children;return(0,r.BX)(H,{children:[(0,r.tZ)(l,{}),(0,r.BX)(o.C1,{children:[(0,r.tZ)(_,{}),(0,r.tZ)(M,{})]}),(0,r.tZ)(U,{}),t,(0,r.tZ)(F,{})]})}},146:function(e,t,n){"use strict";n.d(t,{pU:function(){return i},C1:function(){return o},Xi:function(){return a}});var r=(0,n(2082).Wm)({breakpoints:{xs:0,sm:768,md:1024,lg:1200,xl:1440}}),i=(r.createMediaStyle(),r.Media),o=r.MediaContextProvider,a=r.findBreakpointAtWidth}}]);