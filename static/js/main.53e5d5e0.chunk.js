(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,function(e,t,r){e.exports={BreadBottom:"src-components-Burger-BurgerIngridient-BurgerIngridient__BreadBottom--KNGSI",BreadTop:"src-components-Burger-BurgerIngridient-BurgerIngridient__BreadTop--gLKm8",Seeds1:"src-components-Burger-BurgerIngridient-BurgerIngridient__Seeds1--1CC-L",Seeds2:"src-components-Burger-BurgerIngridient-BurgerIngridient__Seeds2--2JQuo",Meat:"src-components-Burger-BurgerIngridient-BurgerIngridient__Meat--fpeUf",Cheese:"src-components-Burger-BurgerIngridient-BurgerIngridient__Cheese--2ZngM",Salad:"src-components-Burger-BurgerIngridient-BurgerIngridient__Salad--3lXW9",Bacon:"src-components-Burger-BurgerIngridient-BurgerIngridient__Bacon--3E3hs"}},function(e,t,r){e.exports={BuildControl:"src-components-Burger-BurgerControls-BuildControl-BuildControl__BuildControl--3M2BP",Label:"src-components-Burger-BurgerControls-BuildControl-BuildControl__Label--2aJ8X",Less:"src-components-Burger-BurgerControls-BuildControl-BuildControl__Less--39tyZ",More:"src-components-Burger-BurgerControls-BuildControl-BuildControl__More--1dcab"}},,,,,,function(e,t,r){e.exports={BuildControls:"src-components-Burger-BurgerControls-BurgeControls__BuildControls--3RHMH",OrderButton:"src-components-Burger-BurgerControls-BurgeControls__OrderButton--102Fs",enable:"src-components-Burger-BurgerControls-BurgeControls__enable--3pI-J"}},,,function(e,t,r){e.exports={Content:"src-components-Layout-Layout__Content--LhJtv"}},function(e,t,r){e.exports={Burger:"src-components-Burger-Burger__Burger--3K4F-"}},function(e,t,r){e.exports={Modal:"src-components-UI-Modal-Modal__Modal--32_-a"}},function(e,t,r){e.exports={Backdrop:"src-components-UI-Backdrop-Backdrop__Backdrop--efy1y"}},,function(e,t,r){e.exports=r(22)},,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(10),i=r.n(o),l=(r(21),function(e){return e.children}),c=r(11),s=r.n(c),u=function(e){return a.a.createElement(l,null,a.a.createElement("div",null,"Toolbar,SideDrawer,Backdrop"),a.a.createElement("main",{className:s.a.Content},e.children))},d=r(7),m=r(3),g=r(4),p=r(5),B=r(6),h=r(15),b=r(12),f=r.n(b),C=r(1),E=r.n(C),v=function(e){Object(B.a)(r,e);var t=Object(p.a)(r);function r(){return Object(m.a)(this,r),t.apply(this,arguments)}return Object(g.a)(r,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:E.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:E.a.BreadTop},a.a.createElement("div",{className:E.a.Seeds1}),a.a.createElement("div",{className:E.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:E.a.Meat});break;case"Cheese":e=a.a.createElement("div",{className:E.a.Cheese});break;case"Salad":e=a.a.createElement("div",{className:E.a.Salad});break;case"Bacon":e=a.a.createElement("div",{className:E.a.Bacon});break;default:e=null}return e}}]),r}(n.Component),_=function(e){var t=Object.keys(e.ingridients).map((function(t){return Object(h.a)(Array(e.ingridients[t])).map((function(e,r){return a.a.createElement(v,{key:t+r,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please Introduce ingridientes")),a.a.createElement("div",{className:f.a.Burger},a.a.createElement(v,{type:"bread-top"}),t,a.a.createElement(v,{type:"bread-bottom"}))},k=r(8),y=r.n(k),I=r(2),S=r.n(I),O=function(e){return a.a.createElement("div",{className:S.a.BuildControl},a.a.createElement("div",{className:S.a.Label},e.label),a.a.createElement("button",{className:S.a.Less,onClick:e.Remove,disabled:e.disabled},"Less"),a.a.createElement("button",{className:S.a.More,onClick:e.Added},"More"))},N=[{label:"Salad",type:"Salad"},{label:"Bacon",type:"Bacon"},{label:"Cheese",type:"Cheese"},{label:"meat",type:"meat"}],w=function(e){return a.a.createElement("div",{className:y.a.BuildControls},a.a.createElement("p",null,"Current Price : ",a.a.createElement("strong",null,e.price.toFixed(2))),N.map((function(t){return a.a.createElement(O,{key:t.label,label:t.label,Added:function(){return e.ingridientAdded(t.label)},Remove:function(){return e.ingridientRemove(t.label)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:y.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},"ORDER NOW"))},M=r(13),j=r.n(M),L=r(14),P=r.n(L),x=function(e){return e.show?a.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked}):null},H=function(e){return a.a.createElement(l,null,a.a.createElement(x,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:j.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},A=function(e){var t=Object.keys(e.ingridients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingridients[t])}));return a.a.createElement(l,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingridientes:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,"Continue to CheckOut"))},R={Salad:.5,Cheese:.4,meat:1.3,Bacon:.6},J=function(e){Object(B.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(m.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={ingridients:{Salad:0,Bacon:0,Cheese:0,meat:0},totalPrice:4,purchaseable:!1,purchasing:!1},e.addIngridientHandler=function(t){var r=Object(d.a)({},e.state.ingridients);r[t]=e.state.ingridients[t]+1,e.setState({totalPrice:e.state.totalPrice+R[t],ingridients:r}),e.updatePurchaseState(r)},e.removeIngridientHandler=function(t){if(!(e.state.ingridients[t]<=0)){var r=Object(d.a)({},e.state.ingridients);r[t]=e.state.ingridients[t]-1,e.setState({totalPrice:e.state.totalPrice-R[t],ingridients:r}),e.updatePurchaseState(r)}},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e}return Object(g.a)(r,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"purchaseHandler",value:function(){this.setState({purchasing:!0})}},{key:"render",value:function(){var e=Object(d.a)({},this.state.ingridients);for(var t in e)e[t]=e[t]<=0;return a.a.createElement(l,null,a.a.createElement(H,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a.a.createElement(A,{ingridients:this.state.ingridients})),a.a.createElement(_,{ingridients:this.state.ingridients}),a.a.createElement(w,{ingridientAdded:this.addIngridientHandler,ingridientRemove:this.removeIngridientHandler,disabled:e,price:this.state.totalPrice,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler.bind(this)}))}}]),r}(n.Component);var T=function(){return a.a.createElement("div",null,a.a.createElement(u,null,a.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.53e5d5e0.chunk.js.map