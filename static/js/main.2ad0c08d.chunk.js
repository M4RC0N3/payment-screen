(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(a,e,t){},125:function(a,e,t){},126:function(a,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),r=t(46),m=t.n(r),o=(t(70),t(13)),s=t(12),c=t.n(s),d=t(47),x=t(48),l=t(49),k=t(50),p=t(51),E=(t(124),t(125),t(52)),u=t.n(E),y=t(53),v=t.n(y),h=t(54),b=t.n(h),g=t(55),B=t.n(g),D=t(56),A=t.n(D),S=t(57),f=t.n(S),w=t(58),C=t.n(w),T=t(59),G=t.n(T),N=t(60),V=t.n(N);function I(){var a=[document.getElementById("name"),document.getElementById("card-number"),document.getElementById("expire"),document.getElementById("cvv")],e=[document.getElementById("cardholher-name-view"),document.getElementById("card-number-view"),document.getElementById("expire-card-view"),document.getElementById("security-code")];a.forEach(function(t){t.id;t.addEventListener("focus",function(){var i=a.indexOf(t);t.addEventListener("keyup",function(){var a=t.value;e[i].innerHTML=a})})})}var j=[4],L=[5,6],M=[34,37],O=[36,38],F=[63,60],q=[51,52,53,54,55],P=[35],R=[50],z=[6011,65];var Y=function(){var a=Object(i.useState)(!0),e=Object(o.a)(a,2),t=e[0],r=e[1],m=Object(i.useState)(!0),s=Object(o.a)(m,2),E=s[0],y=s[1],h=Object(i.useState)(!0),g=Object(o.a)(h,2),D=g[0],S=g[1],w=Object(i.useState)(!0),T=Object(o.a)(w,2),N=T[0],Y=T[1],J=Object(i.useState)(!0),H=Object(o.a)(J,2),$=H[0],X=H[1],Z=function(){var a=[document.getElementById("name"),document.getElementById("card-number"),document.getElementById("expire"),document.getElementById("cvv")],e=document.querySelectorAll("[data-animation]");a.forEach(function(a){var t=a.id,i=a.id;a.addEventListener("focus",function(){!function(a,e){switch(a){case"name":y(!1),e[2].classList.add("anime");break;case"card-number":r(!1),S(!1),e[0].classList.add("anime"),e[1].classList.add("anime");break;case"expire":Y(!1),e[3].classList.add("anime");break;case"cvv":X(!1),e[4].classList.add("anime")}}(t,e)}),a.addEventListener("focusout",function(){!function(a,e){switch(a){case"name":y(!0),e[2].classList.remove("anime");break;case"card-number":r(!0),S(!0),e[0].classList.remove("anime"),e[1].classList.remove("anime");break;case"expire":Y(!0),e[3].classList.remove("anime");break;case"cvv":X(!0),e[4].classList.remove("anime")}}(i,e)})})};return Object(i.useEffect)(function(){!function(){var a=document.getElementById("discover"),e=document.getElementById("visa"),t=document.getElementById("elo"),i=document.getElementById("american-express"),n=document.getElementById("dinners-club"),r=document.getElementById("hipercard"),m=document.getElementById("mastercard"),o=document.getElementById("jcb"),s=document.getElementById("aura"),c=document.getElementById("card-number");[a,e,t,i,n,r,m,o,s].forEach(function(a){a.style.display="none"}),c.addEventListener("keyup",function(){var d=c.value,x=d.length,l=d.substring(0,4);if(x>=4){var k=[a,e,t,i,n,r,m,o,s],p=function(a){for(var e=k[a],t=k.indexOf(e);t>=0;)k.splice(t,1),t=k.indexOf(e);k.forEach(function(a){a.style.display="none"})};l==z[0]||l.substring(0,2)==z[1]?(k[0].style.display="block",p(0),l="discover"):l.substring(0,2)==M[0]||l.substring(0,2)==M[1]?(k[3].style.display="block",p(3),l="American Express"):l.substring(0,2)==O[0]||l.substring(0,2)==O[1]?(k[4].style.display="block",p(4),l="Diners Club"):l.substring(0,2)==F[0]||l.substring(0,2)==F[1]?(k[5].style.display="block",p(5),l="Hipercard"):l.substring(0,2)==q[0]||l.substring(0,2)==q[1]||l.substring(0,2)==q[2]||l.substring(0,2)==q[3]||l.substring(0,2)==q[4]?(k[6].style.display="block",p(6),l="master"):l.substring(0,2)==P?(k[7].style.display="block",p(7),l="jcb"):l.substring(0,2)==R?(k[8].style.display="block",p(8),l="aura"):l.substring(0,1)==L[0]||l.substring(0,1)==L[1]?(k[2].style.display="block",p(2),l="elo"):l.substring(0,1)==j&&(k[1].style.display="block",p(1),l="visa")}})}(),I(),Z()}),n.a.createElement("div",{className:"payment-card-container"},n.a.createElement("div",{className:"form-container"},n.a.createElement("div",{className:"form-content"},n.a.createElement("h1",{className:"title"},"Comece a participar hoje mesmo!"),n.a.createElement("form",{action:""},n.a.createElement("div",{className:"cardholder-name-container"},n.a.createElement("label",{htmlFor:"name"},"Cardholder Name"),n.a.createElement("input",{id:"name",className:"input",type:"text",placeholder:"JOSE S FRAGOSO",name:"ccname",maxLength:31,pattern:"[a-zA-Z\xe1\xe3\xe2\xe9\xea\xed\xee\xf3\xf4\xf5\xfa\\s]+$",required:!0})),n.a.createElement("div",{className:"card-number-container"},n.a.createElement("label",{htmlFor:"name"},"Card Number"),n.a.createElement("input",{id:"card-number",className:"input",type:"text",placeholder:"0000 0000 0000 0000",maxLength:16,pattern:"[0-9\\s]+$",required:!0})),n.a.createElement("div",{className:"dualfield-container"},n.a.createElement("div",{className:"expire-date-container"},n.a.createElement("label",{htmlFor:"expire"},"Expire date"),n.a.createElement("input",{className:"input",id:"expire",type:"text",placeholder:" 00/0000",name:"ccexpiration",maxLength:7,minLength:7,pattern:"\\d{2}/\\d{4}",title:"EX: 00/0000",required:!0})),n.a.createElement("div",{className:"security-code-container"},n.a.createElement("label",{htmlFor:"ccv"},"Security code"),n.a.createElement("input",{className:"input division",type:"text",id:"cvv",placeholder:" 000",name:"cccvv",title:"EX: 000",maxLength:3,minLength:3,pattern:"[0-9]+$",required:!0}))),n.a.createElement("div",{className:"type-payment-container"},n.a.createElement("label",{htmlFor:"formaPagamento"},"Forma de pagamento"),n.a.createElement("select",{className:"input",id:"type-payment",name:"payType"},n.a.createElement("option",{id:"credit",value:"crd"},"Credit"),n.a.createElement("option",{id:"debt",value:"crd"},"Debt"))),n.a.createElement("button",{type:"submit",className:"button",id:"pay",onClick:I},"Pay")))),n.a.createElement("div",{className:"card-container"},n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-flag-container"},n.a.createElement("div",{className:"arrow-flag-container"},n.a.createElement("p",{"data-animation":"card-name-opacity"},"Flags"),n.a.createElement(c.a,{options:{animationData:d,autoplay:!1,loop:!1,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},isStopped:t})),n.a.createElement("div",{id:"flags"},n.a.createElement("img",{id:"american-express",src:u.a,width:84,height:84,alt:"American Express",draggable:!1}),n.a.createElement("img",{id:"aura",src:v.a,width:84,height:84,alt:"Aura",draggable:!1}),n.a.createElement("img",{id:"dinners-club",src:b.a,width:84,height:84,alt:"Dinners Club",draggable:!1}),n.a.createElement("img",{id:"discover",src:B.a,width:84,height:84,alt:"Discover",draggable:!1}),n.a.createElement("img",{id:"elo",src:A.a,width:84,height:84,alt:"Elo",draggable:!1}),n.a.createElement("img",{id:"hipercard",src:f.a,width:84,height:84,alt:"Hipercard",draggable:!1}),n.a.createElement("img",{id:"jcb",src:C.a,width:84,height:84,alt:"Jcb",draggable:!1}),n.a.createElement("img",{id:"mastercard",src:G.a,width:84,height:84,alt:"Mastercard",draggable:!1}),n.a.createElement("img",{id:"visa",src:V.a,width:84,height:84,alt:"Visa",draggable:!1}))),n.a.createElement("div",{className:"chip-container"},n.a.createElement("div",{className:"chip"})),n.a.createElement("div",{className:"card-number-container"},n.a.createElement("div",{className:"arrow-card-number-container"},n.a.createElement("p",{"data-animation":"card-name-opacity"},"Card number"),n.a.createElement(c.a,{options:{animationData:l,autoplay:!1,loop:!1,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},isStopped:D})),n.a.createElement("p",{id:"card-number-view"},"0000 0000 0000 0000")),n.a.createElement("div",{className:"cardholder-container"},n.a.createElement("div",{className:"arrow-cardholder-container"},n.a.createElement("p",{"data-animation":"card-name-opacity"},"Cardholer"),n.a.createElement(c.a,{options:{animationData:x,autoplay:!1,loop:!1,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},isStopped:E})),n.a.createElement("p",{id:"cardholher-name-view"},"Antonio Carlos")),n.a.createElement("div",{className:"dual-view-container"},n.a.createElement("div",{className:"expire-container"},n.a.createElement("div",{className:"arrow-expire-container"},n.a.createElement("p",{"data-animation":"card-name-opacity"},"Expire date"),n.a.createElement(c.a,{options:{animationData:p,autoplay:!1,loop:!1,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},isStopped:N})),n.a.createElement("p",{className:"expire-name"},"Expire"),n.a.createElement("p",{className:"expire-date",id:"expire-card-view"},"12/05")),n.a.createElement("div",{className:"code-security-container"},n.a.createElement("div",{className:"arrow-code-container"},n.a.createElement("p",{"data-animation":"card-name-opacity"},"Code security"),n.a.createElement(c.a,{options:{animationData:k,autoplay:!1,loop:!1,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},isStopped:$})),n.a.createElement("p",{className:"cvv"},"CVV"),n.a.createElement("p",{id:"security-code"},"555")))),n.a.createElement("div",{className:"balls-container"},n.a.createElement("div",{className:"big-ball"}),n.a.createElement("div",{className:"small-ball"}),n.a.createElement("div",{className:"mid-ball"})))))},J=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,127)).then(function(e){var t=e.getCLS,i=e.getFID,n=e.getFCP,r=e.getLCP,m=e.getTTFB;t(a),i(a),n(a),r(a),m(a)})};m.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null))),J()},47:function(a){a.exports={v:"5.8.1",fr:25,ip:0,op:37,w:300,h:300,nm:"Composi\xe7\xe3o 1",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Camada 1/arrow-flag contornos",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[150,150,0],ix:2,l:2},a:{a:0,k:[61,68.5,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"n",pt:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[126,2.5],[9,2.5],[9,137]],c:!1},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"M\xe1scara 1"}],ef:[{ty:22,nm:"Tra\xe7ado",np:13,mn:"ADBE Stroke",ix:1,en:1,ef:[{ty:10,nm:"Caminho",mn:"ADBE Stroke-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Todas as m\xe1scaras",mn:"ADBE Stroke-0010",ix:2,v:{a:0,k:0,ix:2}},{ty:7,nm:"Tra\xe7ar sequencialmente",mn:"ADBE Stroke-0011",ix:3,v:{a:0,k:1,ix:3}},{ty:2,nm:"Cor",mn:"ADBE Stroke-0002",ix:4,v:{a:0,k:[1,1,1,1],ix:4}},{ty:0,nm:"Tamanho do pincel",mn:"ADBE Stroke-0003",ix:5,v:{a:0,k:9.5,ix:5}},{ty:0,nm:"Dureza do pincel",mn:"ADBE Stroke-0004",ix:6,v:{a:0,k:.75,ix:6}},{ty:0,nm:"Opacidade",mn:"ADBE Stroke-0005",ix:7,v:{a:0,k:1,ix:7}},{ty:0,nm:"In\xedcio",mn:"ADBE Stroke-0008",ix:8,v:{a:0,k:100,ix:8}},{ty:0,nm:"Fim",mn:"ADBE Stroke-0009",ix:9,v:{a:1,k:[{i:{x:[.077],y:[1]},o:{x:[.04],y:[0]},t:0,s:[100]},{t:37,s:[0]}],ix:9}},{ty:7,nm:"Espa\xe7amento",mn:"ADBE Stroke-0006",ix:10,v:{a:0,k:15,ix:10}},{ty:7,nm:"Estilo de pintura",mn:"ADBE Stroke-0007",ix:11,v:{a:0,k:3,ix:11}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-55,58.564],[-55,-58.564],[55,-58.564]],c:!1},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[64.289,60.564],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],o:[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],v:[[0,-7],[7,0],[0,7],[-7,0]],c:!0},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[9,127.986],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 2",np:2,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:750,st:0,bm:0}],markers:[]}},48:function(a){a.exports={v:"5.8.1",fr:25,ip:0,op:37,w:500,h:500,nm:"Composi\xe7\xe3o 1",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Camada 1/arrow-cardholder contornos",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[250,250,0],ix:2,l:2},a:{a:0,k:[105,146.5,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"n",pt:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[211,291],[9.5,291],[9.5,-.875]],c:!1},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"M\xe1scara 1"}],ef:[{ty:22,nm:"Tra\xe7ado",np:13,mn:"ADBE Stroke",ix:1,en:1,ef:[{ty:10,nm:"Caminho",mn:"ADBE Stroke-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Todas as m\xe1scaras",mn:"ADBE Stroke-0010",ix:2,v:{a:0,k:0,ix:2}},{ty:7,nm:"Tra\xe7ar sequencialmente",mn:"ADBE Stroke-0011",ix:3,v:{a:0,k:1,ix:3}},{ty:2,nm:"Cor",mn:"ADBE Stroke-0002",ix:4,v:{a:0,k:[1,1,1,1],ix:4}},{ty:0,nm:"Tamanho do pincel",mn:"ADBE Stroke-0003",ix:5,v:{a:0,k:10.9,ix:5}},{ty:0,nm:"Dureza do pincel",mn:"ADBE Stroke-0004",ix:6,v:{a:0,k:.75,ix:6}},{ty:0,nm:"Opacidade",mn:"ADBE Stroke-0005",ix:7,v:{a:0,k:1,ix:7}},{ty:0,nm:"In\xedcio",mn:"ADBE Stroke-0008",ix:8,v:{a:0,k:100,ix:8}},{ty:0,nm:"Fim",mn:"ADBE Stroke-0009",ix:9,v:{a:1,k:[{i:{x:[.077],y:[1]},o:{x:[.04],y:[0]},t:0,s:[100]},{t:37,s:[0]}],ix:9}},{ty:7,nm:"Espa\xe7amento",mn:"ADBE Stroke-0006",ix:10,v:{a:0,k:15,ix:10}},{ty:7,nm:"Estilo de pintura",mn:"ADBE Stroke-0007",ix:11,v:{a:0,k:3,ix:11}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-99.355,-137.434],[-99.355,137.434],[99.355,137.434]],c:!1},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[108.355,153.434],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],o:[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],v:[[0,-7],[7,0],[0,7],[-7,0]],c:!0},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[9,9],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 2",np:2,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:750,st:0,bm:0}],markers:[]}},49:function(a){a.exports={v:"5.8.1",fr:25,ip:0,op:37,w:500,h:500,nm:"Composi\xe7\xe3o 1",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Camada 1/arrow-cardnumber contornos",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[250,250,0],ix:2,l:2},a:{a:0,k:[117,122.5,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"n",pt:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[237.5,2.5],[9.5,2.5],[9.5,242]],c:!1},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"M\xe1scara 1"}],ef:[{ty:22,nm:"Tra\xe7ado",np:13,mn:"ADBE Stroke",ix:1,en:1,ef:[{ty:10,nm:"Caminho",mn:"ADBE Stroke-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Todas as m\xe1scaras",mn:"ADBE Stroke-0010",ix:2,v:{a:0,k:0,ix:2}},{ty:7,nm:"Tra\xe7ar sequencialmente",mn:"ADBE Stroke-0011",ix:3,v:{a:0,k:1,ix:3}},{ty:2,nm:"Cor",mn:"ADBE Stroke-0002",ix:4,v:{a:0,k:[1,1,1,1],ix:4}},{ty:0,nm:"Tamanho do pincel",mn:"ADBE Stroke-0003",ix:5,v:{a:0,k:11.1,ix:5}},{ty:0,nm:"Dureza do pincel",mn:"ADBE Stroke-0004",ix:6,v:{a:0,k:.75,ix:6}},{ty:0,nm:"Opacidade",mn:"ADBE Stroke-0005",ix:7,v:{a:0,k:1,ix:7}},{ty:0,nm:"In\xedcio",mn:"ADBE Stroke-0008",ix:8,v:{a:0,k:100,ix:8}},{ty:0,nm:"Fim",mn:"ADBE Stroke-0009",ix:9,v:{a:1,k:[{i:{x:[.077],y:[1]},o:{x:[.04],y:[0]},t:0,s:[100]},{t:37,s:[0]}],ix:9}},{ty:7,nm:"Espa\xe7amento",mn:"ADBE Stroke-0006",ix:10,v:{a:0,k:15,ix:10}},{ty:7,nm:"Estilo de pintura",mn:"ADBE Stroke-0007",ix:11,v:{a:0,k:3,ix:11}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-111,112.5],[-111,-112.5],[111,-112.5]],c:!1},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[120.289,114.5],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],o:[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],v:[[0,-7],[7,0],[0,7],[-7,0]],c:!0},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[9,235.805],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 2",np:2,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:750,st:0,bm:0}],markers:[]}},50:function(a){a.exports={v:"5.8.1",fr:25,ip:0,op:37,w:500,h:500,nm:"Composi\xe7\xe3o 1",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Camada 1/arrow-dualfield contornos",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[250,250,0],ix:2,l:2},a:{a:0,k:[118.5,83.5,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"n",pt:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[240.5,166],[9.5,166],[9.5,.5]],c:!1},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"M\xe1scara 1"}],ef:[{ty:22,nm:"Tra\xe7ado",np:13,mn:"ADBE Stroke",ix:1,en:1,ef:[{ty:10,nm:"Caminho",mn:"ADBE Stroke-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Todas as m\xe1scaras",mn:"ADBE Stroke-0010",ix:2,v:{a:0,k:0,ix:2}},{ty:7,nm:"Tra\xe7ar sequencialmente",mn:"ADBE Stroke-0011",ix:3,v:{a:0,k:1,ix:3}},{ty:2,nm:"Cor",mn:"ADBE Stroke-0002",ix:4,v:{a:0,k:[1,1,1,1],ix:4}},{ty:0,nm:"Tamanho do pincel",mn:"ADBE Stroke-0003",ix:5,v:{a:0,k:10.6,ix:5}},{ty:0,nm:"Dureza do pincel",mn:"ADBE Stroke-0004",ix:6,v:{a:0,k:.75,ix:6}},{ty:0,nm:"Opacidade",mn:"ADBE Stroke-0005",ix:7,v:{a:0,k:1,ix:7}},{ty:0,nm:"In\xedcio",mn:"ADBE Stroke-0008",ix:8,v:{a:0,k:100,ix:8}},{ty:0,nm:"Fim",mn:"ADBE Stroke-0009",ix:9,v:{a:1,k:[{i:{x:[.077],y:[1]},o:{x:[.04],y:[0]},t:0,s:[100]},{t:37,s:[0]}],ix:9}},{ty:7,nm:"Espa\xe7amento",mn:"ADBE Stroke-0006",ix:10,v:{a:0,k:15,ix:10}},{ty:7,nm:"Estilo de pintura",mn:"ADBE Stroke-0007",ix:11,v:{a:0,k:3,ix:11}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-112.855,-74.435],[-112.855,74.435],[112.855,74.435]],c:!1},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[121.855,90.434],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],o:[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],v:[[0,-7],[7,0],[0,7],[-7,0]],c:!0},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[9,9],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 2",np:2,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:750,st:0,bm:0}],markers:[]}},51:function(a){a.exports={v:"5.8.1",fr:25,ip:0,op:37,w:500,h:500,nm:"Composi\xe7\xe3o 1",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Camada 1/arrow-dualfield contornos",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[250,250,0],ix:2,l:2},a:{a:0,k:[118.5,83.5,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,hasMask:!0,masksProperties:[{inv:!1,mode:"n",pt:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[240.5,166],[9.5,166],[9.5,.5]],c:!1},ix:1},o:{a:0,k:100,ix:3},x:{a:0,k:0,ix:4},nm:"M\xe1scara 1"}],ef:[{ty:22,nm:"Tra\xe7ado",np:13,mn:"ADBE Stroke",ix:1,en:1,ef:[{ty:10,nm:"Caminho",mn:"ADBE Stroke-0001",ix:1,v:{a:0,k:1,ix:1}},{ty:7,nm:"Todas as m\xe1scaras",mn:"ADBE Stroke-0010",ix:2,v:{a:0,k:0,ix:2}},{ty:7,nm:"Tra\xe7ar sequencialmente",mn:"ADBE Stroke-0011",ix:3,v:{a:0,k:1,ix:3}},{ty:2,nm:"Cor",mn:"ADBE Stroke-0002",ix:4,v:{a:0,k:[1,1,1,1],ix:4}},{ty:0,nm:"Tamanho do pincel",mn:"ADBE Stroke-0003",ix:5,v:{a:0,k:10.6,ix:5}},{ty:0,nm:"Dureza do pincel",mn:"ADBE Stroke-0004",ix:6,v:{a:0,k:.75,ix:6}},{ty:0,nm:"Opacidade",mn:"ADBE Stroke-0005",ix:7,v:{a:0,k:1,ix:7}},{ty:0,nm:"In\xedcio",mn:"ADBE Stroke-0008",ix:8,v:{a:0,k:100,ix:8}},{ty:0,nm:"Fim",mn:"ADBE Stroke-0009",ix:9,v:{a:1,k:[{i:{x:[.077],y:[1]},o:{x:[.04],y:[0]},t:0,s:[100]},{t:37,s:[0]}],ix:9}},{ty:7,nm:"Espa\xe7amento",mn:"ADBE Stroke-0006",ix:10,v:{a:0,k:15,ix:10}},{ty:7,nm:"Estilo de pintura",mn:"ADBE Stroke-0007",ix:11,v:{a:0,k:3,ix:11}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-112.855,-74.435],[-112.855,74.435],[112.855,74.435]],c:!1},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[121.855,90.434],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],o:[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],v:[[0,-7],[7,0],[0,7],[-7,0]],c:!0},ix:2},nm:"Caminho 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Tra\xe7ado 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[9,9],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Grupo 2",np:2,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:750,st:0,bm:0}],markers:[]}},52:function(a,e,t){a.exports=t.p+"static/media/american-express.afbb2152.svg"},53:function(a,e,t){a.exports=t.p+"static/media/aura.2da05ecc.svg"},54:function(a,e,t){a.exports=t.p+"static/media/dinners-club.cca4a6ab.svg"},55:function(a,e,t){a.exports=t.p+"static/media/discover.464cbb77.svg"},56:function(a,e,t){a.exports=t.p+"static/media/elo.6e0d022b.svg"},57:function(a,e,t){a.exports=t.p+"static/media/hipercard.d6495071.svg"},58:function(a,e,t){a.exports=t.p+"static/media/jcb.e354f092.svg"},59:function(a,e,t){a.exports=t.p+"static/media/mastercard.ed5386a5.svg"},60:function(a,e,t){a.exports=t.p+"static/media/visa.866a7d96.svg"},61:function(a,e,t){a.exports=t(126)},70:function(a,e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.2ad0c08d.chunk.js.map