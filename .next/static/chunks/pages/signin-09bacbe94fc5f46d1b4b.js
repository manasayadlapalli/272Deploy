(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{6491:function(e,n,r){"use strict";var t=r(5944),a=(r(7294),r(9166)),i=r(3751),s=r(849);n.Z=function(e){var n=e.isDark;return(0,t.tZ)(a.Z,{children:(0,t.tZ)(i.Z,{active:!0,inverted:!n,children:(0,t.tZ)(s.Z,{size:"big",children:"Loading"})})})}},7102:function(e,n,r){"use strict";var t=r(7294),a=r(3279),i=r.n(a),s=r(146),c=r(8440);n.Z=function(){var e=(0,c.ZP)(),n=(0,t.useState)(0),r=n[0],a=n[1];return(0,t.useEffect)((function(){var e=i()((function(){return a(window.innerWidth)}),200);return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,t.useMemo)((function(){if(e)return{};var n=(0,s.Xi)(r),t="xs"===n,a="sm"===n,i="md"===n,c="lg"===n,d="xl"===n;return{isExtraSmall:t,isSmall:a,isMedium:i,isLarge:c,isExtraLarge:d,gteSmall:a||i||c||d,gteMedium:i||c||d,lteSmall:t||a,lteMedium:t||a||i}}),[e,r])}},4224:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var t,a=r(5944),i=r(7294),s=r(9445),c=r(3011),d=r(7102),l=r(6212),o=r(6491),u=r(9166),m=r(2283),Z=r(1163),h=r(4520),f=r(8237),v=r(4456),p=r(6378);!function(e){e.Error="ERROR",e.Success="SUCCESS"}(t||(t={}));var g=(0,r(5366).Z)(h.Z,{target:"ekodh7v0"})({name:"dotbno",styles:"position:relative;width:40rem;margin:0 auto"}),E=function(){var e=(0,Z.useRouter)(),n=(0,m.cI)(),r=n.handleSubmit,s=n.register,c=n.errors,d=(0,v.nw)(),o=d.add,u=d.clear,E=(0,l.ZP)(),b=E.data,w=E.loginPlayer,y=E.error;return(0,i.useEffect)((function(){u(),null!==b&&void 0!==b&&b.player?(o({category:t.Success}),e.push("/")):y&&o({category:t.Error,message:null===y||void 0===y?void 0:y.message})}),[u,o,e,b,y]),(0,a.BX)(g,{onSubmit:r(w),children:[(0,a.BX)(h.Z.Field,{children:[(0,a.tZ)("input",{name:"name",placeholder:"Userame",ref:s({required:"Required field"})}),(0,a.tZ)(p.jj,{children:c.username&&c.username.message})]}),(0,a.BX)(h.Z.Field,{children:[(0,a.tZ)("input",{name:"password",placeholder:"Password",type:"password",ref:s({required:"Required field"})}),(0,a.tZ)(p.jj,{children:c.password&&c.password.message})]}),(0,a.tZ)(f.Z,{size:"big",children:"Enter"})]})},b=function(){var e=(0,c.Z)(!1).value,n=(0,d.Z)().lteSmall;return(0,l.ZP)().isLoading?(0,a.tZ)(o.Z,{isDark:e}):(0,a.tZ)(u.Z,{children:(0,a.BX)(p.og,{inverted:e,raised:!0,padded:!!n||"very",children:[(0,a.tZ)(s.Z,{as:"h1",children:"Enter your credentials"}),(0,a.tZ)("p",{children:"You can type in any name and password to create account. Thank you!"}),(0,a.tZ)(E,{})]})})}},5242:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return r(4224)}])},9445:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});var t=r(2122),a=r(6010),i=r(7294),s=r(2063),c=r(8935),d=r(2519),l=r(2248),o=r(5382),u=r(8736),m=r(5071);function Z(e){var n=e.children,r=e.className,s=e.content,o=(0,a.Z)("sub header",r),u=(0,c.Z)(Z,e),m=(0,d.Z)(Z,e);return i.createElement(m,(0,t.Z)({},u,{className:o}),l.kK(n)?s:n)}Z.handledProps=["as","children","className","content"],Z.propTypes={},Z.create=(0,m.u5)(Z,(function(e){return{content:e}}));var h=Z;function f(e){var n=e.children,r=e.className,s=e.content,o=(0,a.Z)("content",r),u=(0,c.Z)(f,e),m=(0,d.Z)(f,e);return i.createElement(m,(0,t.Z)({},u,{className:o}),l.kK(n)?s:n)}f.handledProps=["as","children","className","content"],f.propTypes={};var v=f;function p(e){var n=e.attached,r=e.block,m=e.children,Z=e.className,f=e.color,g=e.content,E=e.disabled,b=e.dividing,w=e.floated,y=e.icon,N=e.image,k=e.inverted,S=e.size,_=e.sub,G=e.subheader,P=e.textAlign,X=(0,a.Z)("ui",f,S,(0,s.lG)(r,"block"),(0,s.lG)(E,"disabled"),(0,s.lG)(b,"dividing"),(0,s.cD)(w,"floated"),(0,s.lG)(!0===y,"icon"),(0,s.lG)(!0===N,"image"),(0,s.lG)(k,"inverted"),(0,s.lG)(_,"sub"),(0,s.sU)(n,"attached"),(0,s.X4)(P),"header",Z),x=(0,c.Z)(p,e),z=(0,d.Z)(p,e);if(!l.kK(m))return i.createElement(z,(0,t.Z)({},x,{className:X}),m);var K=o.Z.create(y,{autoGenerateKey:!1}),L=u.Z.create(N,{autoGenerateKey:!1}),R=h.create(G,{autoGenerateKey:!1});return K||L?i.createElement(z,(0,t.Z)({},x,{className:X}),K||L,(g||R)&&i.createElement(v,null,g,R)):i.createElement(z,(0,t.Z)({},x,{className:X}),g,R)}p.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],p.propTypes={},p.Content=v,p.Subheader=h;var g=p}},function(e){e.O(0,[774,805,862,943,166,888,179],(function(){return n=5242,e(e.s=n);var n}));var n=e.O();_N_E=n}]);