(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{6491:function(e,n,i){"use strict";var l=i(5944),t=(i(7294),i(9166)),r=i(3751),u=i(849);n.Z=function(e){var n=e.isDark;return(0,l.tZ)(t.Z,{children:(0,l.tZ)(r.Z,{active:!0,inverted:!n,children:(0,l.tZ)(u.Z,{size:"big",children:"Loading"})})})}},7102:function(e,n,i){"use strict";var l=i(7294),t=i(3279),r=i.n(t),u=i(146),o=i(8440);n.Z=function(){var e=(0,o.ZP)(),n=(0,l.useState)(0),i=n[0],t=n[1];return(0,l.useEffect)((function(){var e=r()((function(){return t(window.innerWidth)}),200);return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,l.useMemo)((function(){if(e)return{};var n=(0,u.Xi)(i),l="xs"===n,t="sm"===n,r="md"===n,o="lg"===n,a="xl"===n;return{isExtraSmall:l,isSmall:t,isMedium:r,isLarge:o,isExtraLarge:a,gteSmall:t||r||o||a,gteMedium:r||o||a,lteSmall:l||t,lteMedium:l||t||r}}),[e,i])}},2855:function(e,n,i){"use strict";var l=i(7294),t=i(1163),r=i(6212);n.Z=function(){var e=(0,t.useRouter)(),n=(0,r.ZP)(),i=n.data,u=n.isLoading;(0,l.useEffect)((function(){null!==(null===i||void 0===i?void 0:i.player)||u||e.push("/")}),[i,e,u])}},7483:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return x}});var l=i(5944),t=i(7294),r=i(3011),u=i(2283),o=i(8188),a=i(9574),d=i(5382),s=i(345),c=i(8311),v=i(4520),Z=i(2855),m=i(6212),f=i(7102),p=i(8440),g=i(9166),h=i(8736),y=i(5366);var b=(0,y.Z)(h.Z,{target:"e1pcgbtx0"})({name:"bqeav3",styles:"border:0.2rem solid darkblue"}),k=function(e){var n=e.gender,i=e.onSetGender,r=(0,t.useCallback)((function(e){return function(){return i(e)}}),[i]);return(0,l.BX)(h.Z.Group,{size:"tiny",children:["female"===n?(0,l.tZ)(b,{src:"female.png",rounded:!0,size:"mini",onClick:r("female")}):(0,l.tZ)(h.Z,{src:"female.png",rounded:!0,size:"mini",onClick:r("female")}),"male"===n?(0,l.tZ)(b,{src:"male.png",rounded:!0,size:"mini",onClick:r("male")}):(0,l.tZ)(h.Z,{src:"male.png",rounded:!0,size:"mini",onClick:r("male")})]})},w=i(6491),z=i(6378),S=i(8237),E=i(2852);var _=(0,y.Z)(o.Z.Group,{target:"e130otn3"})({name:"zl1inp",styles:"display:flex;justify-content:center"}),C=(0,y.Z)(c.Z.Group,{target:"e130otn2"})({name:"f7ay7b",styles:"justify-content:center"}),X=(0,y.Z)(S.Z,{target:"e130otn1"})("&.ui.button{margin-top:1rem;",E.My,"{margin-top:0;}}"),L=(0,y.Z)(S.Z,{target:"e130otn0"})("&.ui.button{width:100%;",E.My,"{width:auto;}}"),x=function(){var e,n,i,h,y,b,S,E,x,B,P,M;(0,Z.Z)();var N=(0,r.Z)(!1).value,Q=(0,p.ZP)(),G=(0,f.Z)().lteSmall,q=(0,m.ZP)(),I=q.isLoading,j=q.data,A=q.updatePreferences,D=q.logout,F=(0,t.useState)(null!==(e=null===j||void 0===j||null===(n=j.player)||void 0===n||null===(i=n.preferences)||void 0===i?void 0:i.gender)&&void 0!==e?e:""),O=F[0],T=F[1],V=(0,u.cI)({defaultValues:{numQuestions:3}}),R=V.handleSubmit,W=V.register,H=V.setValue,J=(0,t.useCallback)((function(e){var n,i=e.numQuestions;j&&A(null===j||void 0===j||null===(n=j.player)||void 0===n?void 0:n.name,i,O)}),[j,O,A]),K=(0,t.useCallback)((function(e){return T(e)}),[]);return(0,t.useEffect)((function(){var e,n,i,l;null!==j&&void 0!==j&&j.player&&(H("numQuestions",null===j||void 0===j||null===(e=j.player)||void 0===e||null===(n=e.preferences)||void 0===n?void 0:n.numQuestions),T(null===j||void 0===j||null===(i=j.player)||void 0===i||null===(l=i.preferences)||void 0===l?void 0:l.gender))}),[j,H]),I||null===j||void 0===j||!j.player?(0,l.tZ)(w.Z,{isDark:N}):(0,l.tZ)(g.Z,{children:(0,l.BX)(z.og,{inverted:N,raised:!0,padded:!!G||"very",children:[(0,l.tZ)(_,{children:(0,l.BX)(o.Z,{children:[null!==j&&void 0!==j&&null!==(h=j.player)&&void 0!==h&&null!==(y=h.preferences)&&void 0!==y&&y.gender?(0,l.tZ)(o.Z.Image,{size:"tiny",src:"female"===(null===j||void 0===j||null===(b=j.player)||void 0===b||null===(S=b.preferences)||void 0===S?void 0:S.gender)?"female.png":"male.png",circular:!0}):null,(0,l.tZ)(o.Z.Content,{verticalAlign:"middle",children:(0,l.tZ)(a.Z,{children:(0,l.BX)(a.Z.Item,{children:[(0,l.tZ)(d.Z,{name:"user circle"}),null===j||void 0===j||null===(E=j.player)||void 0===E?void 0:E.name]})})}),(0,l.tZ)(X,{primary:!0,size:"big",onClick:D,children:"Logout"})]})}),(0,l.tZ)(s.Z,{}),(0,l.BX)(C,{inverted:N,size:G?"mini":"small",children:[(0,l.tZ)(c.Z,{label:"Score",color:"olive",value:null===j||void 0===j||null===(x=j.player)||void 0===x||null===(B=x.statistics)||void 0===B?void 0:B.points}),(0,l.tZ)(c.Z,{label:"Questions",color:"teal",value:null===j||void 0===j||null===(P=j.player)||void 0===P||null===(M=P.statistics)||void 0===M?void 0:M.questionsAnswered})]}),(0,l.tZ)(s.Z,{}),(0,l.BX)(v.Z,{inverted:N,onSubmit:R(J),children:[(0,l.tZ)(v.Z.Field,{children:(0,l.tZ)(k,{gender:O,onSetGender:K})}),(0,l.BX)(v.Z.Field,{inline:!0,children:[(0,l.tZ)("label",{children:"No of questions"}),!Q&&(0,l.tZ)("input",{ref:W,name:"numQuestions",type:"number",min:3,max:20})]}),(0,l.tZ)(L,{primary:!0,size:"big",children:"Save"})]})]})})}},886:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return i(7483)}])}},function(e){e.O(0,[774,805,862,943,535,166,888,179],(function(){return n=886,e(e.s=n);var n}));var n=e.O();_N_E=n}]);