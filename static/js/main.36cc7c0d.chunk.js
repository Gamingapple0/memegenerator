(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(36)},21:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(12),m=a.n(c);a(21),a(23),a(24),a(26);var l=function(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logo-and-title"},o.a.createElement("img",{src:"/favicon.ico?",className:"logo"}),o.a.createElement("div",{className:"logo-title"},"Meme Generator")),o.a.createElement("div",{className:"project-name"},"React Project Meme Generator"))},r=a(1),i=a(3),u=a(4),s=(a(28),a(7)),f=a.n(s);var p=function(){var e=o.a.useState({"top-text":"","bottom-text":""}),t=Object(u.a)(e,2),a=t[0],n=t[1],c=o.a.useState({}),m=Object(u.a)(c,2),l=m[0],s=m[1];o.a.useEffect(function(){fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(e){return s(e)}),console.log("fetched")},[]),console.log("b");var p=o.a.useState({"top-text":"Top Text","bottom-text":"Bottom Text",image:"https://i.imgflip.com/2wifvo.jpg"}),g=Object(u.a)(p,2),d=g[0],v=g[1];function E(e){n(function(t){return Object(i.a)({},t,Object(r.a)({},e.target.name,e.target.value))}),v(function(t){return Object(i.a)({},t,Object(r.a)({},e.target.name,e.target.value))}),document.getElementById("main-image").offsetWidth}return o.a.createElement("div",{className:"body"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=Math.ceil(99*Math.random());v(function(e){return Object(i.a)({},e,{image:l.data.memes[t].url})})},className:"form"},o.a.createElement("input",{type:"text",onChange:E,autoComplete:"off",placeholder:"Top text",name:"top-text",className:"top-text",value:a["top-text"]}),o.a.createElement("input",{type:"text",onChange:E,autoComplete:"off",placeholder:"Bottom text",name:"bottom-text",className:"bottom-text",value:a["bottom-text"]}),o.a.createElement("button",{className:"submit"},"Get a new meme image")),o.a.createElement("div",null,o.a.createElement(f.a,null,o.a.createElement("div",{className:"top-text-1"},d["top-text"])),o.a.createElement(f.a,null,o.a.createElement("div",{className:"bottom-text-1"},d["bottom-text"])),o.a.createElement("img",{id:"main-image",src:d.image})))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement(p,null))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,m=t.getTTFB;a(e),n(e),o(e),c(e),m(e)})};m.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null))),d()}},[[13,3,2]]]);
//# sourceMappingURL=main.36cc7c0d.chunk.js.map