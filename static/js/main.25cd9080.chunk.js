(this.webpackJsonpwhoami=this.webpackJsonpwhoami||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),m=(a(31),a(7)),i=a(2),o=(a(32),a(11)),u=(a(33),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(e){e.preventDefault(),r(!a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.b,{to:"#",className:a?"menu-btn open":"menu-btn",onClick:c},l.a.createElement("div",{className:"btn-line"}),l.a.createElement("div",{className:"btn-line"}),l.a.createElement("div",{className:"btn-line"})),a&&l.a.createElement("nav",{className:"menu",onClick:c},l.a.createElement("ul",{className:"menu__list"},l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(m.b,{to:"/"},"Home")),l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(m.b,{to:"/about/"},"AboutMe")),l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(m.b,{to:"/gallery/"},"Gallery")),l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(m.b,{to:"/game/"},"Game")))))}),s=(a(38),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"nav__list"},l.a.createElement("li",{className:"nav__list-item"},l.a.createElement(m.b,{to:"/"},"home")),l.a.createElement("li",{className:"nav__list-item"},l.a.createElement(m.b,{to:"/about/"},"aboutMe")),l.a.createElement("li",{className:"nav__list-item"},l.a.createElement(m.b,{to:"/gallery/"},"gallery")),l.a.createElement("li",{className:"nav__list-item"},l.a.createElement(m.b,{to:"/game/"},"game")))))}),E=(a(39),function(){return l.a.createElement("header",null,l.a.createElement("span",null,"whoami"),l.a.createElement(s,null),l.a.createElement(u,null))}),d=function(){return l.a.createElement(l.a.Fragment,null,"I dev UI",l.a.createElement("br",null),"(...at least I try)")},f=a(25),p=(a(40),a(19));p.initializeApp({apiKey:"AIzaSyA8xlVqeTpJWRLXPfP4M-yA-jgZv6GrSZw",authDomain:"gllr-8e7bc.firebaseapp.com",databaseURL:"https://gllr-8e7bc.firebaseio.com",projectId:"gllr-8e7bc",storageBucket:"gllr-8e7bc.appspot.com",messagingSenderId:"339978758267",appId:"1:339978758267:web:39df0485d991205eb3dade"});var b=p,v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"form"},l.a.createElement("input",{type:"text",placeholder:"Enter image URL",onChange:function(e){e.target.value&&r(e.target.value)},value:a}),l.a.createElement("button",{onClick:function(){var e=b.database().ref("Images"),t={src:a};t.src&&e.push(t),r("")}},"Add image"))},h=(a(51),function(e){var t=e.src;return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{onClick:function(){b.database().ref("Images").child(t.id).remove()},src:t.src,alt:""}))}),g=(a(52),a(53),function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"lds-ripple"},l.a.createElement("div",null),l.a.createElement("div",null)))}),N=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){b.database().ref("Images").on("value",(function(e){var t=e.val(),a=[];for(var n in t)a.push(Object(f.a)({id:n},t[n]));r(a)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("br",null),l.a.createElement("p",null,"click on the image for delete"),l.a.createElement("div",{className:"gallery-wrapper"},a?a.map((function(e,t){return l.a.createElement(h,{src:e,key:t})})).reverse():l.a.createElement(g,null)))},y=(a(54),[{text:"\u0417\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c frontend \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439",id:Math.floor(100*Math.random())},{text:"\u041d\u043e \u0432\u0441\u0435 \u0435\u0449\u0435 \u0443\u0447\u0443\u0441\u044c...",id:Math.floor(100*Math.random()),href:"https://ru.hexlet.io/u/goodman"},{text:"\u0422\u0443\u0442 \u0434\u043e\u0441\u044c\u0435 \u043d\u0430 \u043c\u0435\u043d\u044f:)",id:Math.floor(100*Math.random()),href:"https://career.habr.com/dimastad"},{text:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u043c\u043d\u043e\u0439",id:Math.floor(100*Math.random()),href:"https://t.me/dimastad"}]),_=function(){return l.a.createElement("div",{className:"info"},l.a.createElement("h1",null,"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0414\u0438\u043c\u0430"),l.a.createElement("ul",null,y.map((function(e){return l.a.createElement("li",{key:e.id},e.href?l.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},e.text):l.a.createElement("span",null,e.text))}))))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null))},M=(a(55),function(){var e=function(e){e.preventDefault();var t=document.getElementsByClassName("emptyCell"),a=e.target.style.order,n=t[0].style.order;t[0].style.order=a,e.target.style.order=n};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"playField"},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""].sort((function(){return Math.random()-.5})).map((function(t,a){return l.a.createElement("div",{style:{order:a},className:0===t.length?"emptyCell":"cell",key:t,onClick:e},t)}))),l.a.createElement("div",{className:"do"},l.a.createElement("p",null,"have to do"),l.a.createElement("ul",null,l.a.createElement("li",null,"prohibit the possibility of cell moves"),l.a.createElement("li",null,"win alert"),l.a.createElement("li",null,"..."))))});var x=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("main",{className:"App-main"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:d}),l.a.createElement(i.a,{path:"/about/",component:k}),l.a.createElement(i.a,{path:"/gallery/",component:N}),l.a.createElement(i.a,{path:"/game/",component:M})))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.25cd9080.chunk.js.map