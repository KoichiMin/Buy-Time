(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{86:function(n,e,t){"use strict";t.r(e);var c,o,a,r,i,d,s,l,b,h,j,u,p,f,x,O,g,v,m,w,y,C,k,D,S,F,E,N,M,I,z,L,A,H,T,B,q,P,V,W,G,R,J,_,Y,U,$,K,Q,X,Z,nn,en,tn,cn,on,an,rn,dn,sn,ln,bn,hn,jn,un,pn,fn,xn,On,gn,vn,mn,wn,yn,Cn,kn,Dn,Sn,Fn=t(1),En=t(24),Nn=t.n(En),Mn=t(3),In=t(4),zn=t(19),Ln=t(7),An=t(58),Hn=t(8),Tn=t(10),Bn=t(2),qn=Object(Fn.createContext)(),Pn={SearchBarInput:"",WatchDataGlobal:{watchDataHasLoaded:!1,watchIds:void 0,watchNames:void 0,categories:void 0},DisplayCheckoutModal:!1,DisplaySuccessModal:!1,DisplayErrorModal:!1,ErrorModalData:null,grandTotal:0,SearchResults:"",category:"Fitness",SideBarFetchHasLoaded:!1},Vn=function(n,e){switch(e.type){case"update-search-bar-input-value":return Object(Tn.a)(Object(Tn.a)({},n),{},{SearchBarInput:e.data});case"update-watch-data-global-with-server":return Object(Tn.a)(Object(Tn.a)({},n),{},{WatchDataGlobal:e.data});case"open-checkout-modal":return Object(Tn.a)(Object(Tn.a)({},n),{},{DisplayCheckoutModal:!0});case"close-checkout-modal":return Object(Tn.a)(Object(Tn.a)({},n),{},{DisplayCheckoutModal:!1});case"open-success-modal":return Object(Tn.a)(Object(Tn.a)({},n),{},{DisplaySuccessModal:!0});case"close-success-modal":return Object(Tn.a)(Object(Tn.a)({},n),{},{DisplaySuccessModal:!1});case"open-error-modal":return Object(Tn.a)(Object(Tn.a)({},n),{},{DisplayErrorModal:!0,ErrorModalData:e.data});case"close-error-modal":return Object(Tn.a)(Object(Tn.a)({},n),{},{DisplayErrorModal:!1});case"update-grand-total":return Object(Tn.a)(Object(Tn.a)({},n),{},{grandTotal:e.data});case"update-search-results":return Object(Tn.a)(Object(Tn.a)({},n),{},{SearchResults:e.data});case"update-category":return Object(Tn.a)(Object(Tn.a)({},n),{},{category:e.data});case"side-bar-has-loaded":return Object(Tn.a)(Object(Tn.a)({},n),{},{SideBarFetchHasLoaded:!0})}},Wn=function(n){var e=n.children,t=Object(Fn.useReducer)(Vn,Pn),c=Object(Hn.a)(t,2),o=c[0],a=c[1];return Object(Bn.jsx)(qn.Provider,{value:{state:o,dispatch:a,actions:{updateSearchBarValue:function(n){a(Object(Tn.a)({type:"update-search-bar-input-value"},n))},updateWatchDataGlobal:function(n){a(Object(Tn.a)({type:"update-watch-data-global-with-server"},n))},openCheckoutModal:function(){a({type:"open-checkout-modal"})},closeCheckoutModal:function(){a({type:"close-checkout-modal"})},openSuccessModal:function(){a({type:"open-success-modal"})},closeSuccessModal:function(){a({type:"close-success-modal"})},openErrorModal:function(n){a(Object(Tn.a)({type:"open-error-modal"},n))},closeErrorModal:function(){a({type:"close-error-modal"})},updateGrandTotal:function(n){a(Object(Tn.a)({type:"update-grand-total"},n))},updateSearchResults:function(n){a(Object(Tn.a)({type:"update-search-results"},n))},updateCategory:function(n){a(Object(Tn.a)({type:"update-category"},n))},sideBarHasLoaded:function(){a({type:"side-bar-has-loaded"})}}},children:e})},Gn=Object(In.b)(zn.b)(c||(c=Object(Mn.a)(["\n    background-color: rgb(187,222,251);\n    text-decoration: none;\n    color:#0d47a1;\n    padding-top:2vh;\n    padding-left:1.2vh;\n    padding-right:1.2vh;\n    padding-bottom:2vh;\n    border-style: solid;\n    border-width: 2px;\n    border-color: white;\n    border-bottom: 0px;\n    &:hover{\n        cursor: pointer;\n        background-color:rgb(100,181,246);\n    }\n"]))),Rn=In.b.span(o||(o=Object(Mn.a)(["\n    font-weight: none;\n"]))),Jn=In.b.span(a||(a=Object(Mn.a)(["\n    font-weight: bold;\n"]))),_n=function(n){for(var e=n.watchName,t=n.userInput,c=n.id,o=Object(Fn.useContext)(qn).actions.updateSearchBarValue,a=e.toLowerCase().indexOf(t.toLowerCase()),r=e.toLowerCase().indexOf(t.toLowerCase())+t.length,i="",d="",s="",l=0;l<a;l++)i+=e[l];for(var b=a;b<r;b++)d+=e[b];for(var h=r;h<e.length;h++)s+=e[h];return i.includes("undefined")||d.includes("undefined")||s.includes("undefined")?Object(Bn.jsx)("div",{}):Object(Bn.jsxs)(Gn,{onClick:function(){return o({data:""})},to:"/item-details/".concat(c),children:[Object(Bn.jsx)(Rn,{children:i}),Object(Bn.jsx)(Jn,{children:d}),Object(Bn.jsx)(Rn,{children:s})]})},Yn=t(57),Un=In.b.div(r||(r=Object(Mn.a)(["\n    input {\n        -webkit-box-shadow: 1px 1px 2px 0px #A4A4A4; \n        box-shadow: 1px 1px 2px 0px #A4A4A4;\n        width: 30vw;\n        height: 2.5vh;\n        border-width: 0;\n        padding: 10px;\n        font-size: 20px;\n        color:grey;\n\n        &:focus{\n            outline: none;\n        }\n    }\n    z-index: 1;\n"]))),$n=In.b.div(i||(i=Object(Mn.a)(["\n    z-index: 3;\n    position:absolute;\n    margin-top: 1vh;\n    border-color: white;\n    left: 35.9vw;\n    display:flex;\n    flex-direction: column;\n    overflow: scroll;\n    overflow-x: hidden;\n    max-height: 25.1vh;\n    width: 31.5vw;\n"]))),Kn=Object(In.b)(Yn.a)(d||(d=Object(Mn.a)(["\n    padding:0.7vw;\n    position: relative;\n    left: -2.5vw;\n    top:1.6vh;\n"]))),Qn=function(){var n=Object(Ln.f)(),e=Object(Fn.useContext)(qn),t=e.state,c=t.SearchBarInput,o=t.WatchDataGlobal,a=e.actions,r=a.updateSearchBarValue,i=a.updateWatchDataGlobal,d=a.updateSearchResults;Object(Fn.useEffect)((function(){fetch("https://buy-time.onrender.com/api/getWatchesNames").then((function(n){return n.json()})).then((function(n){i({data:{watchDataHasLoaded:!0,watchIds:n.ids,watchNames:n.names,categories:n.categories}})})).catch((function(n){console.log(n)}))}),[]);var s=[],l=[];return void 0!==o.watchNames&&o.watchNames.forEach((function(n,e){n.toLowerCase().replace(/\s+/g,"").match(c.replace(/\s+/g,"").toLowerCase())&&(s.push(n),l.push(o.watchIds[e]))})),o.watchDataHasLoaded?Object(Bn.jsxs)(Un,{children:[o.watchDataHasLoaded&&Object(Bn.jsx)("input",{id:"smartSearch",type:"text",placeholder:"What are you looking for?",onChange:function(n){r({data:n.target.value})},onClick:function(n){n.preventDefault(),document.getElementById("smartSearch").value=c},onKeyDown:function(e){"Enter"===e.code&&fetch("https://buy-time.onrender.com/api/getWatchesByName/6/".concat(c)).then((function(n){return n.json()})).then((function(e){d({data:e.pages}),n("/searchResults")}))}}),Object(Bn.jsx)(Kn,{}),""!==c&&o.watchDataHasLoaded&&Object(Bn.jsx)($n,{children:s.map((function(n,e){if(void 0!==n&&void 0!==c)return Object(Bn.jsx)(_n,{watchName:n,userInput:c,id:l[e]})}))})]}):Object(Bn.jsxs)(Un,{children:[Object(Bn.jsx)("input",{disabled:!0,id:"smartSearchDisabled",type:"text",defaultValue:"What are you looking for?"}),Object(Bn.jsx)(Kn,{})]})},Xn=function(){return Object(Bn.jsxs)(Zn,{children:[Object(Bn.jsx)(zn.b,{to:"/",className:"link",children:Object(Bn.jsx)("p",{children:"BUY TIME"})}),Object(Bn.jsx)(ne,{children:Object(Bn.jsx)(Qn,{})}),Object(Bn.jsx)(zn.b,{to:"/cart",children:Object(Bn.jsx)(An.a,{className:"cart"})})]})},Zn=In.b.div(s||(s=Object(Mn.a)(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-around;\nalign-items: center;\npadding-bottom: 1.5vh;\n\n.link{\n    text-decoration: none;\n    color: #3F72AF;\n    font-size: 30px;\n    font-weight: bolder;\n    margin-top: 1.5vh;\n\n    &:active{\n        transform: translateY(0.5px);\n    }\n}\n\n.cart{\n    height: 40px;\n    width: 40px;\n    color: #3F72AF;\n    margin-top: 1.5vh;\n\n    &:active{\n        transform: translateY(0.5px);\n    }\n}\n"]))),ne=In.b.div(l||(l=Object(Mn.a)(["\n\nbutton {\n    font-size: 20px;\n    width: 90px;\n    height: 40px;\n    background-color: #3217d5;\n    color: #f6f5fd;\n    border: none;\n    border-radius: 6px;\n}\n"]))),ee=function(n){var e=Object(Fn.useContext)(qn),t=e.state.WatchDataGlobal,c=e.actions.updateCategory;return Object(Bn.jsx)(te,{children:t.watchDataHasLoaded&&void 0!==t.categories&&t.categories.map((function(n){return Object(Bn.jsx)(ce,{to:"/",onClick:function(e){c({data:n})},children:n})}))})},te=In.b.div(b||(b=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 20vw;\n    padding: 10vh 2vw 0 5vw;\n    height: 100%;\n    position: fixed;\n    overflow-x: hidden;\n"]))),ce=Object(In.b)(zn.b)(h||(h=Object(Mn.a)(["\n    align-items: center;\n    margin: 10px 0 10px;\n    padding: 4px 8px 4px 8px;\n    border-radius: 20px;\n    width: max-content;\n    font-size: 20px;\n    border: none;\n    text-decoration: none;\n    color:#3F72AF;\n    \n&:hover {\n    color: var(--color-light-blue);\n    background-color: #EFE9FE;\n}\n"]))),oe=t(29),ae=function(n){var e=n.object;return Object(Bn.jsx)(re,{onClick:function(){return n=e,void fetch("https://buy-time.onrender.com/api/add-cart-item",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({cartId:"58bf7fa8-2892-46dd-a0dc-0f95188acea1",item:n})}).then((function(n){return n.json()})).then((function(n){}));var n},children:"Add to Cart"})},re=In.b.button(j||(j=Object(Mn.a)(["\nwidth: auto;\npadding-left: 0.5vw;\npadding-right: 0.5vw;\nheight: 3vh;\nfont-size: 15px;\nborder:none;\ncolor: #F9F7F7;\nborder-radius: 5px;\nfont-weight: 2px;\nbackground-color: #3F72AF;\n&:hover {\n    opacity: 0.7;\n}\n\n&:active {\n    /* opacity: 0.8; */\n    /* box-shadow: 0 5px #666; */\n    transform: translateY(2px);\n    }\n"]))),ie=t(59),de=t.n(ie),se={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},le=In.b.h1(u||(u=Object(Mn.a)(["\n    color:#0d47a1;\n    margin-top:2vh;\n    margin-bottom: 2vh;\n    font-size: 2vw;\n"]))),be=In.b.div(p||(p=Object(Mn.a)(["\n    width:30vw;\n    height: 50vh;\n"]))),he=(In.b.form(f||(f=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),In.b.div(x||(x=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-left: 2vw;\n    margin-bottom: 2vh;\n"])))),je=In.b.label(O||(O=Object(Mn.a)(["\n    font-size: large;\n    margin-bottom: 1vh;\n"]))),ue=In.b.input(g||(g=Object(Mn.a)(["\n    color:grey;\n    border:solid 1px;\n    padding-top:0.2vh;\n    padding-bottom:0.2vh;\n    width: 25.3vw;\n"]))),pe=In.b.div(v||(v=Object(Mn.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 1vh;\n"]))),fe=In.b.input(m||(m=Object(Mn.a)(["\n    color:gray;\n    width: 11.5vw;\n    border:solid 1px;\n    padding-top:0.2vh;\n    padding-bottom:0.2vh;\n"]))),xe=In.b.div(w||(w=Object(Mn.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding-top: 3vh;\n"]))),Oe=In.b.button(y||(y=Object(Mn.a)(["\n    background-color: #fcb900;\n    border-width: 0;\n    border-radius: 2vw;\n    margin-right: 2vw;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),ge=In.b.button(C||(C=Object(Mn.a)(["\n    background-color: #d32f2f;\n    border-width: 0;\n    border-radius: 2vw;\n    margin-left: 2vw;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),ve=In.b.button(k||(k=Object(Mn.a)(["\n    background-color: #0d47a1;\n    border: none;\n    border-radius: 5px;\n    width: 80px;\n    color:white;\n    margin-top: 10px;\n    font-size: 18px;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),me=In.b.div(D||(D=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .closeButton{\n        background-color: #d32f2f;\n    }\n"]))),we=In.b.button(S||(S=Object(Mn.a)(["\nwidth: 6vw;\nheight: 3vh;\nfont-size: 15px;\nborder:none;\ncolor: #F9F7F7;\nborder-radius: 5px;\nfont-weight: 2px;\nbackground-color: #3F72AF;\n&:hover {\n    opacity: 0.7;\n}\n\n&:active {\n    transform: translateY(2px);\n    }\n"]))),ye=function(n){var e=n.object,t=Object(Fn.useState)(!1),c=Object(Hn.a)(t,2),o=c[0],a=c[1],r=Object(Fn.useState)(!1),i=Object(Hn.a)(r,2),d=i[0],s=i[1],l=function(){a(!1),s(!1)};return Object(Bn.jsxs)(Bn.Fragment,{children:[Object(Bn.jsx)(we,{onClick:function(){a(!0)},children:"Buy now"}),Object(Bn.jsx)(de.a,{isOpen:o,onRequestClose:l,style:se,contentLabel:"Buy Now Modal",children:!1===d?Object(Bn.jsxs)(be,{children:[Object(Bn.jsx)(le,{children:"Payment"}),Object(Bn.jsx)(he,{children:Object(Bn.jsxs)("h1",{children:["Total: ",e.price]})}),Object(Bn.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=e._id;fetch("https://buy-time.onrender.com/api/updatestock/".concat(e._id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:t})}).then((function(n){return n.json()})).then((function(n){s(!0)}))},children:[Object(Bn.jsxs)(he,{children:[Object(Bn.jsx)(je,{children:"Card Holder Name"}),Object(Bn.jsx)(ue,{required:!0,type:"text",placeholder:"Card Holder Name"})]}),Object(Bn.jsxs)(he,{children:[Object(Bn.jsx)(je,{children:"Card Number"}),Object(Bn.jsx)(ue,{required:!0,type:"text",placeholder:"Card Number"})]}),Object(Bn.jsxs)(pe,{children:[Object(Bn.jsxs)(he,{children:[Object(Bn.jsx)(je,{children:"Expiry Date"}),Object(Bn.jsx)(fe,{required:!0,type:"text",placeholder:"Expiry Date"})]}),Object(Bn.jsxs)(he,{children:[Object(Bn.jsx)(je,{children:"CVV Code"}),Object(Bn.jsx)(fe,{required:!0,type:"text",placeholder:"CVV Code"})]})]}),Object(Bn.jsxs)(xe,{children:[Object(Bn.jsx)(Oe,{type:"submit",children:"Confirm"}),Object(Bn.jsx)(ge,{onClick:l,children:"Cancel"})]})]})]}):!0===d&&Object(Bn.jsx)(Bn.Fragment,{children:Object(Bn.jsxs)(me,{children:[Object(Bn.jsx)(je,{children:"Thank you for your purchase!"}),Object(Bn.jsx)(ve,{onClick:l,children:"close"})]})})})]})},Ce=In.b.div(F||(F=Object(Mn.a)(["\n    padding-bottom:2vh;\n    margin-left: 0.2vw;\n    margin-right: 0.2vw;\n    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    height: 100%;\n    .link{\n        text-decoration: none;\n        color: black;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        \n        .name{\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 10vw;\n            text-align: center;\n            opacity: 0.5;\n        }\n        .price{\n            font-size: 14px;\n            color: #112D4E;\n        }\n    }\n    .buttons{\n        gap: 10px;\n        display:flex;\n        flex-direction: row ;\n        align-items: center;\n    }\n    .button{\n        width: 6vw;\n        font-size: 15px;\n        border:none;\n        color: white;\n        border-radius: 3px;\n        opacity: 0.5;\n        background-color: #3F72AF;\n    }\n"]))),ke=In.b.img(E||(E=Object(Mn.a)(["\n    width: 10vw;\n    height: 22vh;\n"]))),De=function(n){var e=n.object;return Object(Bn.jsx)(Bn.Fragment,{children:Object(Bn.jsxs)(Ce,{children:[Object(Bn.jsxs)(zn.b,{to:"/item-details/".concat(e._id),className:"link",children:[Object(Bn.jsx)(ke,{src:e.imageSrc,alt:"the watches in the top sellers"}),Object(Bn.jsx)("div",{className:"name",children:e.name}),Object(Bn.jsx)("div",{className:"price",children:e.price})]}),e.numInStock>0?Object(Bn.jsxs)("div",{className:"buttons",children:[Object(Bn.jsx)(ye,{object:e}),Object(Bn.jsx)(ae,{object:e})]}):Object(Bn.jsx)("button",{disabled:!0,className:"button",children:"Out of Stock"})]})})},Se=In.b.div(N||(N=Object(Mn.a)(["\n    width:60vw;\n    height: 80vh;\n"]))),Fe=In.b.div(M||(M=Object(Mn.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    margin-top: 1vh;\n"]))),Ee=In.b.button(I||(I=Object(Mn.a)(["\n    margin-right:0.2vw;\n    border-width: 0;\n    background-color: transparent;\n    &:hover{\n        background-color:rgb(187,222,251,0.5);\n        cursor: pointer;\n    }\n"]))),Ne=In.b.button(z||(z=Object(Mn.a)(["\n    margin-left:0.2vw;\n    margin-right: 0.5vw;\n    border-width: 0;\n    background-color: transparent;\n    &:hover{\n        background-color:rgb(187,222,251,0.5);\n        cursor: pointer;\n    }\n"]))),Me=Object(In.b)(oe.a)(L||(L=Object(Mn.a)(["\n    width: 2vw;\n    height: 2.5vh;\n"]))),Ie=Object(In.b)(oe.b)(A||(A=Object(Mn.a)(["\n    width: 2vw;\n    height: 2.5vh;\n"]))),ze=In.b.h3(H||(H=Object(Mn.a)(["\n    margin-left: 2vh;\n    margin-right: 2vh;\n"]))),Le=In.b.div(T||(T=Object(Mn.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto auto auto;\n    grid-gap: 3vh;\n    padding:1vw;\n    background-color: white;\n"]))),Ae=function(n){var e=Object(Fn.useState)(1),t=Object(Hn.a)(e,2),c=t[0],o=t[1],a=Object(Fn.useContext)(qn).state.category,r=[],i=0;return Object(Fn.useEffect)((function(){o(1)}),[a]),void 0!==n.pages&&n.pages.forEach((function(n){n.pageNumber===c&&n.watchesInPage.forEach((function(n){r.push(n)})),i++})),Object(Bn.jsxs)(Se,{children:[Object(Bn.jsxs)(Fe,{children:[Object(Bn.jsx)(Ee,{style:{color:"#3F72AF"},onClick:function(n){n.preventDefault(),c>1&&o(c-1)},children:Object(Bn.jsx)(Me,{})}),Object(Bn.jsx)(ze,{style:{color:"#112D4E"},children:c}),Object(Bn.jsx)(Ne,{style:{color:"#3F72AF"},onClick:function(n){n.preventDefault(),c<i&&o(c+1)},children:Object(Bn.jsx)(Ie,{})})]}),Object(Bn.jsx)(Le,{children:r.map((function(n){return Object(Bn.jsx)(De,{object:n})}))})]})},He=t(109),Te=Object(In.b)(He.a)(B||(B=Object(Mn.a)(["\n    position: absolute;\n    top:50vh;\n    left: 50vw;\n"]))),Be=function(){var n=Object(Fn.useContext)(qn).state,e=n.category,t=n.WatchDataGlobal,c=Object(Fn.useState)(null),o=Object(Hn.a)(c,2),a=o[0],r=o[1],i=Object(Fn.useState)(!1),d=Object(Hn.a)(i,2),s=d[0],l=d[1];return Object(Fn.useEffect)((function(){t.watchDataHasLoaded&&fetch("https://buy-time.onrender.com/api/getWatchesByCategory/6/".concat(e)).then((function(n){return n.json()})).then((function(n){r(n),l(!0)})).catch((function(n){console.log(n)}))}),[t.watchDataHasLoaded&&e]),t.watchDataHasLoaded&&s&&void 0!==a?Object(Bn.jsx)(Ae,{pages:a.pages}):Object(Bn.jsx)(Te,{})},qe=function(){return Object(Bn.jsx)(Pe,{children:Object(Bn.jsx)(Be,{})})},Pe=In.b.div(q||(q=Object(Mn.a)(["\nmargin-left: 20vw;\n"]))),Ve=In.b.div(P||(P=Object(Mn.a)(["\n    display: grid;\n    align-items: center;\n    width: 68vw;\n    grid-template-columns: 37vw 7vw 7vw 7vw 7vw 7vw;\n    margin-left: 0.4vw;\n    margin-right: 1vw;\n    margin-top: 0.3vh;\n    margin-bottom: 0.3vh;\n    padding-top: 1vh;\n    padding-bottom: 1vh;\n    padding-left:0.4vw;\n    color:white;\n    background-color: rgb(255,255,255,0.5);\n"]))),We=In.b.div(V||(V=Object(Mn.a)(["\n    display: flex;\n    flex-direction: row;\n"]))),Ge=In.b.button(W||(W=Object(Mn.a)(["\n    width:1vw;\n    height:2vh;\n    margin:0.2vh;\n    border: 0;\n    background-color: transparent;\n    &:hover {\n        cursor: pointer;\n    }\n"]))),Re=Object(In.b)(oe.d)(G||(G=Object(Mn.a)(["\n    width:1vw;\n    height: 2vh;\n    position:relative;\n    left:-0.25vw;\n    top:-0.15vh;\n"]))),Je=Object(In.b)(oe.c)(R||(R=Object(Mn.a)(["\n    width:1vw;\n    height: 2vh;\n    position:relative;\n    left:-0.25vw;\n    top:-0.15vh;\n"]))),_e=function(n){var e=n.singleItem,t=n.setChange,c=n.change,o=Object(Fn.useContext)(qn).actions.openErrorModal,a=parseFloat(e.price.slice(1,e.price.length));return Object(Bn.jsxs)(Ve,{children:[Object(Bn.jsx)("div",{children:e.name}),Object(Bn.jsx)("div",{children:e.category}),Object(Bn.jsx)("div",{children:e.count}),Object(Bn.jsx)("div",{children:"".concat(e.price," ")}),Object(Bn.jsx)("div",{children:"$".concat((a*e.count).toFixed(2))}),Object(Bn.jsxs)(We,{children:[Object(Bn.jsx)(Ge,{onClick:function(){return n=e._id,void fetch("https://buy-time.onrender.com/api/delete-cart-item/".concat("58bf7fa8-2892-46dd-a0dc-0f95188acea1","/",n),{method:"DELETE"}).then((function(n){return n.json()})).then((function(n){t(!c)}));var n},children:Object(Bn.jsx)(Je,{})}),Object(Bn.jsx)(Ge,{onClick:function(){return function(n){fetch("https://buy-time.onrender.com/api/add-cart-item",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({cartId:"58bf7fa8-2892-46dd-a0dc-0f95188acea1",item:n})}).then((function(n){return n.json()})).then((function(e){"Cannot add more of this item to cart, out of stock"===e.message&&o({data:[n.name]}),t(!c)})).catch((function(n){console.log(n)}))}(e)},children:Object(Bn.jsx)(Re,{})})]})]})},Ye=In.b.button(J||(J=Object(Mn.a)(["\n    background-color: #fcb900;\n    border-width: 0;\n    border-radius: 2vw;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),Ue=function(n){var e=n.handleClick;return Object(Bn.jsx)(Bn.Fragment,{children:Object(Bn.jsx)(Ye,{onClick:e,children:"Empty Cart"})})},$e=t(107),Ke=In.b.div(_||(_=Object(Mn.a)(["\n    width:30vw;\n    height: 50vh;\n"]))),Qe=In.b.h1(Y||(Y=Object(Mn.a)(["\n    color:#0d47a1;\n    margin-top:2vh;\n    margin-bottom: 2vh;\n    font-size: 2vw;\n"]))),Xe=In.b.form(U||(U=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),Ze=In.b.div($||($=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin-left: 2vw;\n    margin-bottom: 2vh;\n"]))),nt=In.b.div(K||(K=Object(Mn.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 1vh;\n"]))),et=In.b.label(Q||(Q=Object(Mn.a)(["\n    font-size: large;\n    margin-bottom: 1vh;\n"]))),tt=In.b.input(X||(X=Object(Mn.a)(["\n    color:grey;\n    border:solid 1px;\n    padding-top:0.2vh;\n    padding-bottom:0.2vh;\n    width: 25.3vw;\n"]))),ct=In.b.input(Z||(Z=Object(Mn.a)(["\n    color:gray;\n    width: 11.5vw;\n    border:solid 1px;\n    padding-top:0.2vh;\n    padding-bottom:0.2vh;\n"]))),ot=In.b.div(nn||(nn=Object(Mn.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]))),at=In.b.button(en||(en=Object(Mn.a)(["\n    background-color: #fcb900;\n    border-width: 0;\n    border-radius: 2vw;\n    margin-left: 2vw;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),rt=In.b.button(tn||(tn=Object(Mn.a)(["\n    background-color: #d32f2f;\n    border-width: 0;\n    border-radius: 2vw;\n    margin-right: 2vw;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),it=function(){var n=Object(Fn.useContext)(qn),e=n.state,t=e.DisplayCheckoutModal,c=e.grandTotal,o=n.actions,a=o.openSuccessModal,r=o.closeCheckoutModal,i=o.openErrorModal;return Object(Bn.jsx)($e.a,{open:t,onClose:function(){return r()},children:Object(Bn.jsxs)(Ke,{children:[Object(Bn.jsx)(Qe,{children:"Payment"}),Object(Bn.jsxs)(Xe,{children:[Object(Bn.jsx)(Ze,{children:Object(Bn.jsx)("h1",{children:"Total Amount: $".concat(c)})}),Object(Bn.jsxs)(Ze,{children:[Object(Bn.jsx)(et,{children:"Card Holder Name"}),Object(Bn.jsx)(tt,{placeholder:"Card Holder Name"})]}),Object(Bn.jsxs)(Ze,{children:[Object(Bn.jsx)(et,{children:"Card Number"}),Object(Bn.jsx)(tt,{placeholder:"Card Number"})]}),Object(Bn.jsxs)(nt,{children:[Object(Bn.jsxs)(Ze,{children:[Object(Bn.jsx)(et,{children:"Expiry Date"}),Object(Bn.jsx)(ct,{placeholder:"Expiry Date"})]}),Object(Bn.jsxs)(Ze,{children:[Object(Bn.jsx)(et,{children:"CVV Code"}),Object(Bn.jsx)(ct,{placeholder:"CVV"})]})]}),Object(Bn.jsxs)(ot,{children:[Object(Bn.jsx)(at,{onClick:function(n){n.preventDefault(),fetch("https://buy-time.onrender.com/api/checkout",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartId:"58bf7fa8-2892-46dd-a0dc-0f95188acea1"})}).then((function(n){return n.json()})).then((function(n){n.warnings.failedUpdates.length>0?i({data:n.warnings.failedUpdates}):a()}))},children:"Checkout"}),Object(Bn.jsx)(rt,{onClick:function(n){n.preventDefault(),r()},children:"Cancel"})]})]})]})})},dt=In.b.div(cn||(cn=Object(Mn.a)(["\n    width:15vw;\n    height: 20vh;\n    background-color: #008b02;\n"]))),st=In.b.h1(on||(on=Object(Mn.a)(["\n    color:white;\n    margin-top:2vh;\n    margin-bottom: 2vh;\n    font-size: 2vw;\n"]))),lt=In.b.div(an||(an=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),bt=In.b.button(rn||(rn=Object(Mn.a)(["\n    background-color: #0d47a1;\n    border-width: 0;\n    border-radius: 2vw;\n    margin-top:2vh;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),ht=function(n){var e=n.change,t=n.setChange,c=Object(Fn.useContext)(qn),o=c.state.DisplaySuccessModal,a=c.actions,r=a.closeSuccessModal,i=a.closeCheckoutModal;return Object(Bn.jsx)($e.a,{open:o,onClose:function(){return r()},children:Object(Bn.jsxs)(dt,{children:[Object(Bn.jsx)(st,{children:"Success"}),Object(Bn.jsx)(lt,{children:Object(Bn.jsx)(bt,{onClick:function(n){n.preventDefault(),r(),i(),t(!e)},children:"Close"})})]})})},jt=In.b.div(dn||(dn=Object(Mn.a)(["\n    width:30vw;\n    height: 30vh;\n    background-color: #fccb00;\n"]))),ut=In.b.h1(sn||(sn=Object(Mn.a)(["\n    color:red;\n    margin-top:2vh;\n    margin-bottom: 2vh;\n    font-size: 2vw;\n"]))),pt=In.b.div(ln||(ln=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),ft=In.b.p(bn||(bn=Object(Mn.a)(["\n    color:red;\n    margin-left: 2vw;\n    max-width: 26.5vw;\n"]))),xt=In.b.p(hn||(hn=Object(Mn.a)(["\n    color:red;\n    font-weight: bold;\n    font-size: large;\n    margin-left: 2vw;\n    max-width: 26.5vw;\n    margin-bottom: 1vh;\n"]))),Ot=In.b.button(jn||(jn=Object(Mn.a)(["\n    background-color: #0d47a1;\n    border-width: 0;\n    border-radius: 2vw;\n    margin-top:2vh;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),gt=function(n){var e=n.change,t=n.setChange,c=Object(Fn.useContext)(qn),o=c.state,a=o.DisplayErrorModal,r=o.ErrorModalData,i=c.actions.closeErrorModal,d="";return null!==r&&r.map((function(n){d+=n+", "})),Object(Bn.jsx)($e.a,{open:a,onClose:function(){return i()},children:Object(Bn.jsxs)(jt,{children:[Object(Bn.jsx)(ut,{children:"It seems an error has occured"}),Object(Bn.jsx)(xt,{children:"The Following Items Are Out Of Stock: "}),Object(Bn.jsx)(ft,{children:d}),Object(Bn.jsx)(pt,{children:Object(Bn.jsx)(Ot,{onClick:function(n){n.preventDefault(),i(),t(!e)},children:"Close"})})]})})},vt=In.b.button(un||(un=Object(Mn.a)(["\n    background-color: #fcb900;\n    border-width: 0;\n    border-radius: 2vw;\n    margin-left: 2vw;\n    padding:1vh 2vw;\n    color:white;\n    font-weight: bold;\n    &:hover{\n        cursor: pointer;\n    }\n"]))),mt=function(n){var e=n.change,t=n.setChange,c=Object(Fn.useContext)(qn).actions,o=c.openCheckoutModal,a=c.updateGrandTotal;return Object(Bn.jsxs)(Bn.Fragment,{children:[Object(Bn.jsx)(it,{}),Object(Bn.jsx)(ht,{change:e,setChange:t}),Object(Bn.jsx)(gt,{change:e,setChange:t}),Object(Bn.jsx)(vt,{onClick:function(n){n.preventDefault(),o(),fetch("https://buy-time.onrender.com/api/get-total/58bf7fa8-2892-46dd-a0dc-0f95188acea1").then((function(n){return n.json()})).then((function(n){a({data:n.totalCost})}))},children:"Checkout"})]})},wt=In.b.div(pn||(pn=Object(Mn.a)(["\n    /* z-index: 10; */\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    margin-left: 20vw;\n"]))),yt=In.b.div(fn||(fn=Object(Mn.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width:70vw;\n    margin-top: 2vh;\n"]))),Ct=In.b.div(xn||(xn=Object(Mn.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border: solid 1px; */\n    width:70vw;\n    height: 65vh;\n    margin-top: 8vh;\n    /* overflow: scroll; */\n    overflow-x: hidden;\n    background-color: #112D4E;\n    font-family: var(--font-family);\n"]))),kt=In.b.div(On||(On=Object(Mn.a)(["\n    display: grid;\n    grid-template-columns: 37vw 7vw 7vw 7vw 7vw 7vw;\n    margin-left: 0.8vw;\n    margin-top: 1vh;\n    margin-bottom: 1vh;\n    font-weight: bold;\n    color:white;\n"]))),Dt=function(){var n=Object(Fn.useState)(null),e=Object(Hn.a)(n,2),t=e[0],c=e[1],o=Object(Fn.useState)(!1),a=Object(Hn.a)(o,2),r=a[0],i=a[1],d=Object(Fn.useState)(!1),s=Object(Hn.a)(d,2),l=s[0],b=s[1];return Object(Fn.useEffect)((function(){fetch("https://buy-time.onrender.com/api/get-cart-items/58bf7fa8-2892-46dd-a0dc-0f95188acea1").then((function(n){return n.json()})).then((function(n){c(n.data),i(!0)})).catch((function(n){return console.log(n)}))}),[l]),Object(Bn.jsxs)(wt,{children:[Object(Bn.jsxs)(Ct,{children:[Object(Bn.jsxs)(kt,{children:[Object(Bn.jsx)("div",{children:"Name"}),Object(Bn.jsx)("div",{children:"Category"}),Object(Bn.jsx)("div",{children:"Count"}),Object(Bn.jsx)("div",{children:"Price/item"}),Object(Bn.jsx)("div",{children:"Total Price"})]}),r&&t&&t.map((function(n){return Object(Bn.jsx)(_e,{singleItem:n,change:l,setChange:b})}))]}),Object(Bn.jsxs)(yt,{children:[Object(Bn.jsx)(Ue,{handleClick:function(n){n.preventDefault(),n.stopPropagation(),fetch("https://buy-time.onrender.comapi/remove-items/58bf7fa8-2892-46dd-a0dc-0f95188acea1",{method:"PATCH",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){b(!l)}))}}),Object(Bn.jsx)(mt,{change:l,setChange:b})]})]})},St=In.b.div(gn||(gn=Object(Mn.a)(["\n    background-color: #F9F7F7;\n    height: 88vh;\n"]))),Ft=function(){return Object(Bn.jsx)(St,{children:Object(Bn.jsx)(Dt,{})})},Et=In.b.div(vn||(vn=Object(Mn.a)(["\n    margin-left: 8vw;\n    margin-top: 10vh;\n\n    .img{\n        width: 300px;\n        margin-left: 38vw;\n    }\n    \n    .contentdiv{\n        margin-top: 30px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .name{\n        margin-top: 20px;\n        text-align: center;\n        opacity: 0.5;\n        font-size: 19px;\n    }\n\n    .price{\n        margin-top: 20px;\n        font-weight: bold;\n    }\n\n    .brand{\n        margin-top: 10px;\n        font-size: 17px;\n        margin-bottom: 20px;\n    }\n\n    .link{\n        text-decoration: none;\n        color: #3F72AF;\n    }\n"]))),Nt=In.b.div(mn||(mn=Object(Mn.a)(["\n    display: flex;\n    gap: 8px;\n"]))),Mt=Object(In.b)(He.a)(wn||(wn=Object(Mn.a)(["\n\n"]))),It=In.b.div(yn||(yn=Object(Mn.a)(["\n    width: 100vw;\n    height: 80vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),zt=function(){var n=Object(Ln.g)().itemId,e=Object(Fn.useState)(null),t=Object(Hn.a)(e,2),c=t[0],o=t[1],a=Object(Fn.useState)(null),r=Object(Hn.a)(a,2),i=r[0],d=r[1],s=Object(Fn.useContext)(qn).state.WatchDataGlobal;return Object(Fn.useEffect)((function(){s.watchDataHasLoaded&&fetch("https://buy-time.onrender.com/api/get-item/".concat(n)).then((function(n){return n.json()})).then((function(n){o(n.data),fetch("https://buy-time.onrender.com/api/get-all-companies").then((function(n){return n.json()})).then((function(n){d(n.data)})).catch((function(n){return console.log(n)}))})).catch((function(n){return console.log(n)}))}),[s.watchDataHasLoaded&&n]),c&&i?Object(Bn.jsxs)(Et,{children:[Object(Bn.jsx)("img",{className:"img",src:c.imageSrc,atl:"watch"}),Object(Bn.jsxs)("div",{className:"contentdiv",children:[Object(Bn.jsx)("p",{className:"name",children:c.name}),Object(Bn.jsx)("p",{className:"price",children:c.price}),i.map((function(n){return n._id===c.companyId&&Object(Bn.jsx)(Bn.Fragment,{children:Object(Bn.jsx)("p",{className:"brand",children:Object(Bn.jsx)("a",{className:"link",href:n.url,children:n.name})})})})),c.numInStock>0?Object(Bn.jsxs)(Nt,{children:[Object(Bn.jsx)(ye,{object:c}),Object(Bn.jsx)(ae,{object:c})]}):Object(Bn.jsx)("button",{disabled:!0,children:"Out of Stock"})]})]}):Object(Bn.jsx)(It,{children:Object(Bn.jsx)(Mt,{})})},Lt=In.b.div(Cn||(Cn=Object(Mn.a)(["\n    margin-left: 20vw;\n"]))),At=In.b.div(kn||(kn=Object(Mn.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 80vh;\n"]))),Ht=function(){var n=Object(Fn.useContext)(qn),e=n.actions.updateSearchBarValue,t=n.state.SearchResults;Object(Fn.useEffect)((function(){e({data:""})}),[]);var c=t;return void 0!==c?Object(Bn.jsx)(Lt,{children:Object(Bn.jsx)(Ae,{pages:c})}):Object(Bn.jsx)(At,{children:Object(Bn.jsx)(He.a,{})})},Tt=function(){return Object(Bn.jsxs)(zn.a,{children:[Object(Bn.jsx)(Xn,{}),Object(Bn.jsx)(ee,{}),Object(Bn.jsx)(Bt,{children:Object(Bn.jsxs)(Ln.c,{children:[Object(Bn.jsx)(Ln.a,{exact:!0,path:"/",element:Object(Bn.jsx)(qe,{})}),Object(Bn.jsx)(Ln.a,{exact:!0,path:"/item-details/:itemId",element:Object(Bn.jsx)(zt,{})}),Object(Bn.jsx)(Ln.a,{exact:!0,path:"/cart",element:Object(Bn.jsx)(Ft,{})}),Object(Bn.jsx)(Ln.a,{exact:!0,path:"/searchResults",element:Object(Bn.jsx)(Ht,{})})]})})]})},Bt=In.b.div(Dn||(Dn=Object(Mn.a)(["\n"]))),qt=Object(In.a)(Sn||(Sn=Object(Mn.a)(["\n  :root {\n    --color-white: #F9F7F7;\n    --color-pale-blue: #DBE2EF;\n    --color-light-blue: #3F72AF;\n    --color-dark-blue: #112D4E;\n    --color-buttons: #add8e6;\n    --font-family: 'Poppins', sans-serif;\n  }\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      box-sizing: border-box;\n      font-size: 100%;\n      vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n      display: block;\n  }\n  body {\n      line-height: 1;\n  }\n  ol, ul {\n      list-style: none;\n  }\n  blockquote, q {\n      quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n      content: '';\n      content: none;\n  }\n\n  h1,\n  h2,\n  h3,\n  label,\n  button {\n    font-family: var(--font-family);\n    text-align: center;\n  }\n\n  p,\n  a,\n  li,\n  blockquote,\n  input {\n    font-family: var(--font-family);\n  }\n"])));Nn.a.render(Object(Bn.jsxs)(Wn,{children:[Object(Bn.jsx)(qt,{}),Object(Bn.jsx)(Tt,{})]}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.8cf69fc2.chunk.js.map