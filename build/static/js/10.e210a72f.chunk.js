(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{923:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return d}));var c=n(2),r=n.n(c),a=n(6),i=n(99),o=n.n(i),s=n(81),l=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},930:function(e,t,n){"use strict";var c,r=n(13),a=(n(0),n(3)),i=n(11),o=n(1),s=a.e.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),l=function(e){var t=e.onClick,n=e.expanded;return Object(o.jsxs)(s,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(o.jsx)(i.U,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(o.jsx)(i.x,{}):Object(o.jsx)(i.u,{})]})};l.defaultProps={expanded:!1},t.a=l},962:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Me}));var c,r,a,i,o,s,l,b,d,j,u,x,p,O,m,h,f,k,y,g,v=n(17),S=n(18),T=n(0),C=n(38),w=n(27),U=n(9),A=n.n(U),L=n(53),z=n(11),I=n(246),q=n(409),P=n(138),D=n(58),B=n(172),Q=n(36),N=n(5),E=n(37),M=n(13),F=n(3),W=n(244),Y=n(930),H=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[56],a=c[56];return"".concat(r,"/").concat(a)},R=n(1),V=F.e.div(c||(c=Object(M.a)(["\n  margin-top: 24px;\n"]))),J=Object(F.e)(z.F)(r||(r=Object(M.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),G=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,r=e.lpLabel,a=e.addLiquidityUrl,i=Object(E.a)();return Object(R.jsxs)(V,{children:[Object(R.jsxs)(z.z,{justifyContent:"space-between",children:[Object(R.jsxs)(z.U,{children:[i(316,"Stake"),":"]}),Object(R.jsx)(J,{href:a,children:r})]}),!n&&Object(R.jsxs)(z.z,{justifyContent:"space-between",children:[Object(R.jsxs)(z.U,{children:[i(23,"Total Liquidity"),":"]}),Object(R.jsx)(z.U,{children:c})]}),Object(R.jsx)(z.z,{justifyContent:"flex-start",children:Object(R.jsx)(z.E,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},K=n(120),X=Object(F.e)(z.z)(a||(a=Object(M.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),$=Object(F.e)(z.T)(i||(i=Object(M.a)(["\n  margin-left: 4px;\n"]))),_=function(e){var t=e.lpLabel,n=e.multiplier,c=e.isCommunityFarm,r=e.farmImage,a=e.tokenSymbol;return Object(R.jsxs)(X,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(R.jsx)(z.C,{src:"/images/farms/".concat(r,".svg"),alt:a,width:64,height:64}),Object(R.jsxs)(z.z,{flexDirection:"column",alignItems:"flex-end",children:[Object(R.jsx)(z.A,{mb:"4px",children:t}),Object(R.jsxs)(z.z,{justifyContent:"center",children:[c?Object(R.jsx)(K.b,{}):Object(R.jsx)(K.c,{}),Object(R.jsx)($,{variant:"secondary",children:n})]})]})]})},Z=n(2),ee=n.n(Z),te=n(6),ne=n(923),ce=n(19),re=n(243),ae=n(255),ie=n(413),oe=n(414),se=n(59),le=n(107),be=F.e.div(o||(o=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,c=e.theme;return n?c.shadows.warning:c.shadows.inset}),(function(e){return e.theme.colors.text})),de=Object(F.e)(z.D)(s||(s=Object(M.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),je=Object(F.e)(z.U)(l||(l=Object(M.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),ue=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,o=e.inputTitle,s=Object(E.a)(),l="0"===t||!t,b=l?"0":parseFloat(t).toFixed(4);return Object(R.jsxs)("div",{style:{position:"relative"},children:[Object(R.jsxs)(be,{isWarning:l,children:[Object(R.jsxs)(z.z,{justifyContent:"space-between",pl:"16px",children:[Object(R.jsx)(z.U,{fontSize:"14px",children:o}),Object(R.jsxs)(z.U,{fontSize:"14px",children:[s(1120,"Balance"),": ",b.toLocaleString()]})]}),Object(R.jsxs)(z.z,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(R.jsx)(de,{onChange:c,placeholder:"0",value:a}),Object(R.jsx)(z.i,{size:"sm",onClick:r,mr:"8px",children:s(452,"Max")}),Object(R.jsx)(z.U,{fontSize:"16px",children:n})]})]}),l&&Object(R.jsxs)(je,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",Object(R.jsxs)(z.E,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:[s(999,"get")," ",n]})]})]})},xe=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,i=e.addLiquidityUrl,o=Object(T.useState)(""),s=Object(S.a)(o,2),l=s[0],b=s[1],d=Object(T.useState)(!1),j=Object(S.a)(d,2),u=j[0],x=j[1],p=Object(E.a)(),O=Object(T.useMemo)((function(){return Object(se.b)(t)}),[t]),m=Object(T.useCallback)((function(e){b(e.currentTarget.value)}),[b]),h=Object(T.useCallback)((function(){b(O)}),[O,b]);return Object(R.jsxs)(z.J,{title:p(1068,"Stake LP tokens"),onDismiss:c,children:[Object(R.jsx)(ue,{value:l,onSelectMax:h,onChange:m,max:O,symbol:a,addLiquidityUrl:i,inputTitle:p(1070,"Stake")}),Object(R.jsxs)(le.a,{children:[Object(R.jsx)(z.i,{variant:"secondary",onClick:c,fullWidth:!0,children:p(462,"Cancel")}),Object(R.jsx)(z.i,{fullWidth:!0,disabled:u||"0"===O||"0"===l,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(l);case 3:x(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:u?p(488,"Pending Confirmation"):p(464,"Confirm")})]}),Object(R.jsxs)(z.F,{href:i,style:{alignSelf:"center"},children:[p(999,"Get")," ",a]})]})},pe=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,i=Object(T.useState)(""),o=Object(S.a)(i,2),s=o[0],l=o[1],b=Object(T.useState)(!1),d=Object(S.a)(b,2),j=d[0],u=d[1],x=Object(E.a)(),p=Object(T.useMemo)((function(){return Object(se.b)(c)}),[c]),O=Object(T.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(T.useCallback)((function(){l(p)}),[p,l]);return Object(R.jsxs)(z.J,{title:x(1126,"Unstake LP tokens"),onDismiss:n,children:[Object(R.jsx)(ue,{onSelectMax:m,onChange:O,value:s,max:p,symbol:a,inputTitle:x(588,"Unstake")}),Object(R.jsxs)(le.a,{children:[Object(R.jsx)(z.i,{variant:"secondary",onClick:n,fullWidth:!0,children:x(462,"Cancel")}),Object(R.jsx)(z.i,{disabled:j,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(s);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),fullWidth:!0,children:j?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},Oe=F.e.div(b||(b=Object(M.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),me=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.addLiquidityUrl,i=Object(E.a)(),o=Object(ie.a)(r).onStake,s=Object(oe.a)(r).onUnstake,l=Object(se.a)(t),b=l.toLocaleString(),d=Object(z.fb)(Object(R.jsx)(xe,{max:n,onConfirm:o,tokenName:c,addLiquidityUrl:a})),j=Object(S.a)(d,1)[0],u=Object(z.fb)(Object(R.jsx)(pe,{max:t,onConfirm:s,tokenName:c})),x=Object(S.a)(u,1)[0];return Object(R.jsxs)(z.z,{justifyContent:"space-between",alignItems:"center",children:[Object(R.jsx)(z.A,{color:0===l?"textDisabled":"text",children:b}),0===l?Object(R.jsx)(z.i,{onClick:j,children:i(999,"Stake LP")}):Object(R.jsxs)(Oe,{children:[Object(R.jsx)(z.B,{variant:"tertiary",onClick:x,mr:"6px",children:Object(R.jsx)(z.I,{color:"primary"})}),Object(R.jsx)(z.B,{variant:"tertiary",onClick:j,children:Object(R.jsx)(z.a,{color:"primary"})})]})]})},he=n(256),fe=function(e){var t=e.earnings,n=e.pid,c=Object(E.a)(),r=Object(T.useState)(!1),a=Object(S.a)(r,2),i=a[0],o=a[1],s=Object(he.b)(n).onReward,l=Object(se.a)(t),b=l.toLocaleString();return Object(R.jsxs)(z.z,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(R.jsx)(z.A,{color:0===l?"textDisabled":"text",children:b}),Object(R.jsx)(z.i,{disabled:0===l||i,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,s();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(562,"Harvest")})]})},ke=F.e.div(d||(d=Object(M.a)(["\n  padding-top: 16px;\n"]))),ye=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=e.addLiquidityUrl,a=Object(E.a)(),i=Object(T.useState)(!1),o=Object(S.a)(i,2),s=o[0],l=o[1],b=Object(D.b)(t.lpSymbol),d=b.pid,j=b.lpAddresses,u=Object(D.c)(d),x=u.allowance,p=u.tokenBalance,O=u.stakedBalance,m=u.earnings,h=Object(ce.a)(j),f=t.lpSymbol.toUpperCase(),k=c&&x&&x.isGreaterThan(0),y=Object(T.useMemo)((function(){return Object(ne.b)(n,h)}),[n,h]),g=Object(ae.a)(y).onApprove,v=Object(T.useCallback)(Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,g();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[g]);return Object(R.jsxs)(ke,{children:[Object(R.jsxs)(z.z,{children:[Object(R.jsx)(z.U,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"MANY"}),Object(R.jsx)(z.U,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(1072,"Earned")})]}),Object(R.jsx)(fe,{earnings:m,pid:d}),Object(R.jsxs)(z.z,{children:[Object(R.jsx)(z.U,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:f}),Object(R.jsx)(z.U,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(1074,"Staked")})]}),c?k?Object(R.jsx)(me,{stakedBalance:O,tokenBalance:p,tokenName:f,pid:d,addLiquidityUrl:r}):Object(R.jsx)(z.i,{mt:"8px",fullWidth:!0,disabled:s,onClick:v,children:a(758,"Approve Contract")}):Object(R.jsx)(re.a,{mt:"8px",fullWidth:!0})]})},ge=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,i=a*Math.pow(1+c/365,365*r);return t=i-a,Math.round(100*t)/100},ve=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Se=F.e.div(j||(j=Object(M.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Te=F.e.div(u||(u=Object(M.a)(["\n  margin-bottom: '10px';\n"]))),Ce=Object(F.e)(z.U)(x||(x=Object(M.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),we=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.cakePrice,r=e.apy,a=e.addLiquidityUrl,i=Object(E.a)(),o=r.times(new A.a(100)).toNumber(),s=1e3/c.toNumber(),l=ge({numberOfDays:1,farmApy:o,cakePrice:c}),b=ge({numberOfDays:7,farmApy:o,cakePrice:c}),d=ge({numberOfDays:30,farmApy:o,cakePrice:c}),j=ge({numberOfDays:365,farmApy:o,cakePrice:c});return Object(R.jsxs)(z.J,{title:"ROI",onDismiss:t,children:[Object(R.jsxs)(Se,{children:[Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(860,"Timeframe")})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(858,"ROI")})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(864,"CAKE per $1000")})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:"1d"})}),Object(R.jsx)(Te,{children:Object(R.jsxs)(z.U,{children:[ve({amountEarned:l,amountInvested:s}),"%"]})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:l})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:"7d"})}),Object(R.jsx)(Te,{children:Object(R.jsxs)(z.U,{children:[ve({amountEarned:b,amountInvested:s}),"%"]})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:b})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:"30d"})}),Object(R.jsx)(Te,{children:Object(R.jsxs)(z.U,{children:[ve({amountEarned:d,amountInvested:s}),"%"]})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:d})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:"365d(APY)"})}),Object(R.jsx)(Te,{children:Object(R.jsxs)(z.U,{children:[ve({amountEarned:j,amountInvested:s}),"%"]})}),Object(R.jsx)(Te,{children:Object(R.jsx)(z.U,{children:j})})]}),Object(R.jsx)(Ce,{fontSize:"12px",color:"textSubtle",children:i(866,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(R.jsx)(z.z,{justifyContent:"center",children:Object(R.jsxs)(z.F,{href:a,children:[i(999,"Get")," ",n]})})]})},Ue=function(e){var t=e.lpLabel,n=e.cakePrice,c=e.apy,r=e.addLiquidityUrl,a=Object(z.fb)(Object(R.jsx)(we,{lpLabel:t,cakePrice:n,apy:c,addLiquidityUrl:r})),i=Object(S.a)(a,1)[0];return Object(R.jsx)(z.B,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(R.jsx)(z.l,{})})},Ae=Object(F.f)(p||(p=Object(M.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),Le=F.e.div(O||(O=Object(M.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Ae),ze=F.e.div(m||(m=Object(M.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Ie=F.e.div(h||(h=Object(M.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),qe=F.e.div(f||(f=Object(M.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Pe=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethPrice,i=e.ethereum,o=e.account,s=Object(E.a)();console.log("farm",t),console.log("cake",c),console.log("bnb",r),console.log("eth",a),console.log("ethereum",i);var l=Object(T.useState)(!1),b=Object(S.a)(l,2),d=b[0],j=b[1],u=W.a.includes(t.tokenSymbol),x=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),p=Object(T.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===N.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===N.b.CAKE?c.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===N.b.ETH?a.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,a,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),O=p?"$".concat(Number(p).toLocaleString(void 0,{maximumFractionDigits:0})):"-",m=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("MANYSWAP",""),h=t.dual?t.dual.earnLabel:"MANY",f=t.apy&&t.apy.times(new A.a(100)).toNumber().toLocaleString("en-US").slice(0,-1),k=t.quoteTokenAdresses,y=t.quoteTokenSymbol,g=t.tokenAddresses,v=H({quoteTokenAdresses:k,quoteTokenSymbol:y,tokenAddresses:g}),C="".concat(I.a,"/").concat(v);return Object(R.jsxs)(ze,{children:["MANY"===t.tokenSymbol&&Object(R.jsx)(Le,{}),Object(R.jsx)(_,{lpLabel:m,multiplier:t.multiplier,isCommunityFarm:u,farmImage:x,tokenSymbol:t.tokenSymbol}),!n&&Object(R.jsxs)(z.z,{justifyContent:"space-between",alignItems:"center",children:[Object(R.jsxs)(z.U,{children:[s(736,"APR"),":"]}),Object(R.jsx)(z.U,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Ue,{lpLabel:m,addLiquidityUrl:C,cakePrice:c,apy:t.apy}),f,"%"]}):Object(R.jsx)(z.S,{height:24,width:80})})]}),Object(R.jsxs)(z.z,{justifyContent:"space-between",children:[Object(R.jsxs)(z.U,{children:[s(318,"Earn"),":"]}),Object(R.jsx)(z.U,{bold:!0,children:h})]}),Object(R.jsx)(ye,{farm:t,ethereum:i,account:o,addLiquidityUrl:C}),Object(R.jsx)(Ie,{}),Object(R.jsx)(Y.a,{onClick:function(){return j(!d)},expanded:d}),Object(R.jsx)(qe,{expanded:d,children:Object(R.jsx)(G,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:O,lpLabel:m,addLiquidityUrl:C})})]})},De=n(60),Be=function(e){var t=e.stackedOnly,n=e.setStackedOnly,c=Object(C.i)(),r=c.url,a=c.isExact,i=Object(E.a)();return Object(R.jsxs)(Qe,{children:[Object(R.jsxs)(Ne,{children:[Object(R.jsx)(z.Y,{checked:t,onChange:function(){return n(!t)}}),Object(R.jsxs)(z.U,{children:[" ",i(1116,"Staked only")]})]}),Object(R.jsxs)(z.j,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(R.jsx)(z.k,{as:De.a,to:"".concat(r),children:i(698,"Active")}),Object(R.jsx)(z.k,{as:De.a,to:"".concat(r,"/history"),children:i(700,"Inactive")})]})]})},Qe=F.e.div(k||(k=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ne=F.e.div(y||(y=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),z.U),Ee=F.e.div(g||(g=Object(M.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Me=function(){var e=Object(C.i)().path,t=Object(E.a)(),n=Object(D.d)(),c=Object(D.j)(),r=Object(D.i)(),a=Object(L.j)(),i=a.account,o=a.ethereum,s=Object(D.l)(),l=Object(w.b)(),b=Object(B.a)().fastRefresh;Object(T.useEffect)((function(){i&&l(Object(Q.b)(i))}),[i,l,b]);var d=Object(T.useState)(!1),j=Object(S.a)(d,2),u=j[0],x=j[1],p=n.filter((function(e){return"0X"!==e.multiplier})),O=n.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier})),m=p.filter((function(e){return e.userData&&new A.a(e.userData.stakedBalance).isGreaterThan(0)})),h=Object(T.useCallback)((function(e,t){var a,l=new A.a((null===(a=n.find((function(e){return e.pid===I.d})))||void 0===a?void 0:a.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=I.c.times(e.poolWeight),n=t.times(I.b),a=l.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===N.b.BUSD||e.quoteTokenSymbol===N.b.UST)a=l.times(n).div(e.lpTotalInQuoteToken).times(r);else if(e.quoteTokenSymbol===N.b.ETH)a=c.div(s).times(n).div(e.lpTotalInQuoteToken);else if(e.quoteTokenSymbol===N.b.CAKE)a=n.div(e.lpTotalInQuoteToken);else if(e.dual){var i=e&&l.times(t).times(I.b).div(e.lpTotalInQuoteToken),o=e.tokenPriceVsQuote&&new A.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(I.b).div(e.lpTotalInQuoteToken);a=i&&o&&i.plus(o)}return Object(v.a)(Object(v.a)({},e),{},{apy:a})})).map((function(e){return Object(R.jsx)(Pe,{farm:e,removed:t,bnbPrice:r,cakePrice:c,ethPrice:s,ethereum:o,account:i},e.pid)}))}),[n,r,s,c,o,i]);return Object(R.jsxs)(P.a,{children:[Object(R.jsx)(z.A,{as:"h1",size:"lg",color:"secondary",mb:"50px",style:{textAlign:"center"},children:t(696,"Stake LP tokens to earn MANY")}),Object(R.jsx)(Be,{stackedOnly:u,setStackedOnly:x}),Object(R.jsxs)("div",{children:[Object(R.jsx)(Ee,{}),Object(R.jsxs)(q.a,{children:[Object(R.jsx)(C.b,{exact:!0,path:"".concat(e),children:h(u?m:p,!1)}),Object(R.jsx)(C.b,{exact:!0,path:"".concat(e,"/history"),children:h(O,!0)})]})]}),Object(R.jsx)(z.C,{src:"/images/space_Banner Mobile.svg",alt:"ManySwap illustration",width:949,height:384,responsive:!0})]})}}}]);
//# sourceMappingURL=10.e210a72f.chunk.js.map