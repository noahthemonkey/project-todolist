(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'html,\nbody,\n#content,\n#wrapper {\n  height: 100%;\n  width: 100%;\n\n}\n\nbody {\n  font-family: \'Press Start 2P\', cursive;\n  z-index: -2;\n}\n\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2vh;\n  height: 100%;\n  width: 100%;\n\n}\n\n#bodyContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row: 1fr 1fr;\n  margin: 3vh;\n}\n\n#sortDiv {\n  order: 2;\n  grid-template-columns: 1fr 1fr;\n  display: grid;\n  background-color: #cbffd8;\n  /* Light green background */\n  border-radius: 10px;\n  /* Rounded corners */\n  padding: 10px;\n  /* Space between border and content */\n  margin: 1vh;\n  box-shadow: 8px 8px #ffffff68;\n  /* Subtle shadow for depth */\n  gap: 10px;\n  width: 100%;\n}\n\n#sortDiv > button {\nwidth: 100%;\npadding: 10px;\ntext-align: center;\ngap: 10px;\n}\n\n\nbody {\n  background: linear-gradient(-45deg, #cbffd8, #6db970, #3ed157);\n  background-size: 400% 400%;\n  animation: hueShift 3s alternate infinite;\n\n}\n\n@keyframes hueShift {\n  0% {\n    background-position: 50% 2%;\n  }\n\n  50% {\n    background-position: 50% 100%;\n  }\n\n  100% {\n    background-position: 50% 0%;\n  }\n}\n\n#wrapper {\n  height: 100%;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n\n#todoContainer>div {\n  display: grid;\n  grid-template-columns: 175px 3fr;\n  width: 100%;\n  border: 2px solid #6bda7e;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #8cdfa5, #82f391);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  padding: 4%;\n  height: 30vh;\n  /* set a fixed height */\n  box-shadow: 8px 8px #ffffff68;\n  /* Subtle shadow for depth */\n}\n#todoContainer>div>p{\n  grid-column: 1 / 3;\n}\n\n\n#todoContainer {\n  order: 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 100px;\n}\n\n\n#todoContainer>div:hover {\n  transform: translateY(-5px);\n  /* Slight lift on hover */\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\n  /* Increased shadow on hover */\n}\n\n.buttonContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n\n\n.delete {\n  background-color: #ff4d4d;\n  /* Red background color */\n  color: white;\n  /* White font color */\n  border: none;\n  /* Remove border */\n  border-radius: 5px;\n  /* Rounded corners */\n  padding: 5px 10px;\n  /* Padding around the text */\n  cursor: pointer;\n  /* Change cursor to pointer when hovering */\n  transition: background-color 0.3s ease;\n  /* Smooth transition for hover effect */\n}\n\n.delete:hover {\n  background-color: #b40000;\n  /* Darker red background color on hover */\n}\n\n\n\n[id*="todoTitle"] {\n  text-align: center;\n  grid-column: 1 / 3;\n  font-size: 1em;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n}\n\n[id*="todoTitle"]>p {\n  font-size: 1em;\n  font-weight: 100;\n  color: white;\n}\n\n.collapsible {\n  border-radius: 10px;\n  color: white;\n  cursor: pointer;\n  width: 200px;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n\n.shownotes {\n  background-color: #adcaa4;\n  border-radius: 5px;\n  /* Rounded corners */\n  padding: 5px 10px;\n  /* Padding around the text */\n}\n\n.shownotes:hover {\n  background-color: #555;\n}\n\n.notes {\n  display: hidden;\n  overflow-y: auto;\n  /* Enable scrolling when content exceeds the fixed height */\n  height: 50px;\n  /* Set a fixed height for the notes */\n  transition: max-height 2s ease-in-out;\n}\n\ninput {\n  background: none;\n  border: none;\n  color: black;\n  font-family: \'Press Start 2P\', cursive;\n\n}\n\ninput::placeholder {\n  color: rgba(80, 80, 80, 0.555);\n  font-family: \'Press Start 2P\', cursive;\n}\n\nbutton {\n  font-family: \'Press Start 2P\', cursive;\n  text-shadow: 1px 1px black;\n  border-radius: 10px;\n  background-color: #61ac648a;\n  color: white;\n  cursor: pointer;\n  width: 15vh;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: background-color 0.5s ease;\n  /* Add transition effect */\n}\n\nbutton:hover {\n  background-color: #91f58db1;\n  /* Darker green on hover */\n}\n\n#lists {\n  order: 1;\n  padding: 3%;\n  display: grid;\n  border: 10px solid #aef58d8a;\n\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 0.1fr 0.7fr 1fr;\n  background-color: #d6ebcd;\n  box-shadow: 3px 5px 5px rgb(0, 0, 0);\n  min-height: 100vh;\n  margin: 3vh;\n  gap: 3%;\n}\n\n#listsh1 {\n  order: -2;\n}\n\n#lists>ul {\n  order: -1;\n  grid-column: 1 / span 2;\n  border-radius: 1%;\n  box-shadow: 1px 2px 2px 2px rgb(78, 77, 77);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n#AllTodos,\n#CompletedTodos {\n  background-color: #e1eedd;\n}\n\n\n\n#lists>ul>li {\n  position: relative;\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr;\n  background-color: #adcaa4;\n  padding: 10px;\n  height: 4vh;\n  width: 15vh;\n  font-size: 0.8em;\n  border-radius: 5px;\n  box-shadow: 2px 1px 1px 1px rgb(255, 255, 255);\n  transition: all 0.3s ease;\n  /* Add transition to normal state */\n}\n\n#lists>ul>li:hover {\n  transform: translateY(-5px);\n  /* Slight lift on hover */\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\n  /* Increased shadow on hover */\n  background-color: #fff59b;\n}\n\n#lists>ul>li>button {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10%;\n  background-color: #64a16f;\n  border: 2px solid #d6ebcd;\n  box-shadow: 1px 1px 1px #646464;\n  font-size: 1.2em;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1.2;\n  cursor: pointer;\n  transition: background-color 0.1s ease, border-color 0.3s ease;\n}\n\n#lists>ul>li>button:hover {\n  background-color: #b40000;\n  border-color: #fcfcfc;\n}\n\n#lists>ul>li>button::before {\n  content: "x";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#lists>ul>.selected {\n  background-color: #7eff93;\n}\n\n#inputContainer {\n  display: grid;\n  grid-template-rows: repeat(7, 0.1fr);\n  gap: 5px;\n}\n\n.add-list-form {\n  display: grid;\n  grid-template-rows: 0.1fr 0.2fr 0.2fr;\n}\n\n#inputContainer button,\n.add-list-form button {\n  background-color: #6bda7e;\n  width: 200px;\n  height: 50px;\n}\n\n\n#AllTodos {\n  order: -1;\n}\n\n#CompletedTodos {\n  order: -1;\n}\n\ninput[type="date"] {\n  text-align: center;\n  font-family: \'Press Start 2P\', cursive;\n  appearance: none;\n  box-sizing: border-box;\n  border: 1px solid black;\n  background: transparent;\n  font-size: 0.7rem;\n  padding: 8px;\n  width: 100%;\n  border-radius: 9px;\n\n\n  ::-webkit-datetime-edit-text {\n    padding: 0 2rem;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    text-transform: uppercase;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    text-transform: uppercase;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    text-transform: uppercase;\n  }\n\n  ::-webkit-inner-spin-button {\n    display: none;\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    background: transparent;\n  }\n}\n\n\n\nh1 {\n  font-size: 22px;\n  animation: jump 2s ease-in-out infinite;\n}\n\n@keyframes jump {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-3px);\n    text-shadow: 2px 2px 2px #36a047;\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\nhtml,\nbody,\n#content {\n  height: 100%;\n}\n\ninput[type="checkbox"] {\n  grid-column: 1 / 3;\n  position: relative;\n  appearance: none;\n  -webkit-appearance: none;\n  width: 20px;\n  height: 20px;\n  \n  border: 2px solid #64a16f;\n  outline: none;\n  background-color: #b8e6aa;\n  font-family: "Ｖａｐｏｒｗａｖｅ";\n  font-size: 16px;\n  transition: all 0.9s ease-in-out;\n}\n\ninput[type="checkbox"]::before {\n  content: "✓";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 2px;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n  font-size: 25px;\n  font-weight: bold;\n}\n\ninput[type="checkbox"]:checked::before {\n  opacity: 1;\n}\n\nselect {\n  appearance: none;\n  text-align: center;\n  background-color: #b8e6aa;\n  border: 2px solid black;\n  justify-content: center;\n  padding: 5px;\n  text-align: center;\n  font-family: \'Press Start 2P\', cursive;\n  font-size: 0.7em;\n  color: #000;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  border-radius: 9px;\n\n}\n\nselect::after {\n  content: \'\\25BC\';\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: #fff;\n}\n\nselect option {\n  background-color: #b8e6aa;\n  color: #000;\n  font-family: \'Press Start 2P\', cursive;\n  font-size: 16px;\n}\n\nselect option:checked {\n  background-color: #64a16f;\n  color: #fff;\n}',""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],d=0;d<n.length;d++){var s=n[d],l=o.base?s[0]+o.base:s[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var s=o(n,r),l=0;l<i.length;l++){var c=t(i[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),d=t(565),s=t.n(d),l=t(216),c=t.n(l),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=(n,e,...t)=>{const o=document.createElement(n);for(let n in e)o.setAttribute(n,e[n]);return t.forEach((n=>{"string"==typeof n?o.appendChild(document.createTextNode(n)):o.appendChild(n)})),o},m=[{id:1,title:"Buy Groceries",description:"Go to the supermarket to buy food for the week",notes:"Remember to get eggs, milk, bread, and vegetables",priority:"high",dueDate:"2024-05-03",list:"General",checked:!0},{id:5,title:"Buy banana",description:"Go to the supermarket to buy food for the week",notes:"Remember to get eggs, milk, bread, and vegetables",priority:"medium",dueDate:"2023-05-10",list:"General",checked:!1},{id:2,title:"Finish Project Report",description:"Write a detailed report on the recent project",notes:"Make sure to include all the key findings and recommendations",priority:"high",dueDate:"2023-04-24",list:"Work",checked:!1},{id:3,title:"Book Dentist Appointment",description:"Call the dentist office to schedule a check-up appointment",notes:"Check the availability for the earliest appointment",priority:"low",dueDate:"2023-09-04",list:"Health",checked:!1},{id:4,title:"Pay Rent",description:"Transfer the rent payment for the month to the landlord",notes:"Do not forget to save a receipt of the transaction",priority:"high",dueDate:"2023-02-20",list:"Finance",checked:!1}],b=()=>{var n,e=document.getElementsByClassName("shownotes");const t=function(){console.log(this.parentElement.className),this.parentElement.classList.toggle("active");var n=this.parentElement.parentElement.children.item(3);"block"===n.style.display?(n.style.display="hidden",n.style.maxHeight="0",console.log("close")):(n.style.display="block",console.log("open"))};for(n=0;n<e.length;n++)e[n].onclick=t};window.onload=()=>{b()};const x=(document.getElementById("bodyContainer"),document.getElementById("sortDiv")),v=document.createElement("button");v.textContent="Sort High to Low";const y=document.createElement("button");y.textContent="Sort Low to High",x.append(v,y);let k="highToLow";const w=()=>{"highToLow"===k?m.sort(((n,e)=>{const t=["high","medium","low"];return t.indexOf(n.priority)-t.indexOf(e.priority)})):"lowToHigh"===k&&m.sort(((n,e)=>{const t=["low","medium","high"];return t.indexOf(n.priority)-t.indexOf(e.priority)})),console.table(m),console.log(C),E()};v.addEventListener("click",(()=>{k="highToLow",w()})),y.addEventListener("click",(()=>{k="lowToHigh",w()}));let C="All Todos";const E=function(){T(this);const n=document.querySelector(".selected");if(C=n?n.textContent.replace("Delete","").trim():"All Todos",console.log(C),todoContainer.innerHTML="","All Todos"===C)console.table(m),m.forEach((n=>{L(n.title,n.description,n.notes,n.dueDate,n.priority,n.list,n.checked)}));else if("Done Todos"===C){const n=m.filter((n=>!0===n.checked));console.log(n),n.forEach((n=>{L(n.title,n.description,n.notes,n.dueDate,n.priority,n.list,n.checked)}))}else C&&(e=C,m.filter((n=>n.list===e))).forEach((n=>{L(n.title,n.description,n.notes,n.dueDate,n.priority,n.list)}));var e},T=n=>{if(console.log(n),!n)return;let e="";return[...n.parentElement.children].forEach((n=>n.classList.remove("selected"))),n.classList.add("selected"),e=n.textContent.replace("Delete",""),e},L=(n,e,t,o,r,i)=>{const a=document.getElementById("todoContainer"),d=g("div",{id:`${n}`,class:"collapsible"}),s=g("h1",{id:`todoTitle_${n}`,contentEditable:"true"},`${n}`),l=g("p",{class:"description",contentEditable:"true"},`${e}`),c=g("p",{class:"notes",contentEditable:"true"},`${t}`),p=g("input",{type:"date",class:"dueDate",contentEditable:"true"},`${o}`),u=g("select",{class:"priority",contentEditable:"true"}),h=g("option",{value:"high"},"High Priority"),f=g("option",{value:"medium"},"Medium Priority"),x=g("option",{value:"low"},"Low Priority");u.append(h,f,x),u.value=r;const v=g("input",{type:"checkbox"}),y=g("button",{class:"delete"}),k=g("button",{class:"shownotes"}),C=g("p",{class:"list"},`${i}`),E=g("div",{class:"buttonContainer"});p.value=o,k.textContent="Show Notes",y.textContent="Delete Todo";const T=m.findIndex((e=>e.title===n));function L(n){const e=m.findIndex((e=>e.id===n));m.splice(e,1),this.remove(),console.log(m)}return s.addEventListener("blur",(()=>{console.log(m),-1!==T&&(m[T].title=s.textContent)})),l.addEventListener("input",(()=>{l.addEventListener("blur",(()=>{m[T].description=l.textContent}))})),c.addEventListener("input",(()=>{c.addEventListener("blur",(()=>{m[T].notes=c.textContent}))})),p.addEventListener("input",(()=>{p.addEventListener("blur",(()=>{m[T].dueDate=p.textContent}))})),u.addEventListener("change",(()=>{const e=m.findIndex((e=>e.title===n));m[e].priority=u.value,w()})),C.addEventListener("blur",(()=>{m[T].list=C.textContent})),k.addEventListener("click",b),y.addEventListener("click",(()=>L.bind(d,m.id)())),v.addEventListener("click",(function(){const e=m.findIndex((e=>e.title===n));console.log(m[e].checked),1==v.checked?(m[e].checked=!0,this.parentNode.style.opacity="0.7",console.log("checked bitch")):(m[e].checked=!1,console.log("unchekckckerd"),this.parentNode.style.opacity="1"),console.log(m)})),m[T].checked&&(v.checked=!0),m[T].value=todoDue.value,E.append(k,y),d.append(v,s,l,c,p,u,E),a.appendChild(d),m.filter((n=>n.checked)).forEach((n=>{const e=document.getElementById(n.title);e&&(e.querySelector('input[type="checkbox"]').checked=!0,e.style.opacity="0.7")})),{title:n,description:e,notes:t,dueDate:o,priority:r,list:C.textContent}};document.getElementById("content"),document.getElementById("todoContainer"),document.addEventListener("DOMContentLoaded",(function(){E.call(document.querySelector("#AllTodos"))})),(n=>{document.getElementById("todoContainer");const e=document.getElementById("lists"),t=g("h1",{id:"listsTitle"});t.textContent="Create a new list";const o=document.createElement("ul"),r=g("li",{id:"AllTodos"});r.textContent="All Todos";const i=g("li",{id:"CompletedTodos"});i.textContent="Done Todos",i.onclick=E;const a=n.reduce(((n,e)=>(n[e.list]||(n[e.list]=[]),n[e.list].push(e),n)),{});Object.keys(a).forEach((n=>{const e=g("li",{});e.textContent=n,c(e),o.append(e)})),r.onclick=E,Array.from(o.querySelectorAll("li")).forEach((n=>{n.onclick=E}));const d=document.createElement("form");d.classList.add("add-list-form");const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("placeholder","Enter list name"),s.classList.add("list-input"),s.required=!0;const l=document.createElement("button");function c(e){const t=document.createElement("button");t.textContent="",e.append(t),t.addEventListener("click",(()=>{const t=e.textContent.replace("Delete","");console.log(t);const o=n.filter((n=>n.list==t));o.forEach((e=>{const t=n.indexOf(e);n.splice(t,1)})),console.log(e),e.parentNode.removeChild(e),E.call(document.querySelector("#AllTodos")),console.log(o)}))}l.textContent="Create List",l.classList.add("create-list-btn"),d.append(t,s,l),e.append(o,d),l.addEventListener("click",(n=>{if(n.preventDefault(),!s.value)return;const e=g("li",{});e.textContent=s.value,c(e),e.onclick=E,o.append(e),console.log(e.textContent),s.value=""}));const p=document.createElement("h1");p.setAttribute("ID","listsh1"),p.textContent="Todo Lists",e.appendChild(p),o.append(r,i),o.classList.add("lists-container")})(m),(()=>{const n=g("div",{id:"inputContainer"}),e=g("h1",{id:"inputTitle"});e.textContent="Create a new todo";const t=g("input",{id:"todoTitle",type:"text",placeholder:"Title"}),o=g("input",{id:"todoDecription",type:"text",placeholder:"Description"}),r=g("input",{id:"todoNotes",type:"text",placeholder:"Notes"}),i=g("select",{id:"todoPriority"}),a=g("option",{value:"high"});a.textContent="High Priority";const d=g("option",{value:"medium"});d.textContent="Medium Priority";const s=g("option",{value:"low"});s.textContent="Low Priority",i.append(a,d,s);const l=g("input",{id:"todoDue",type:"date",placeholder:"Due Date"}),c=g("button",{id:"newTodo",value:"New Todo"});c.addEventListener("click",(function(){const e=i.options[i.selectedIndex].value;var a,d,s,c,p,u;console.log(e),a=t.value,d=o.value,s=l.value,c=e,p=r.value,u=C,m.push({id:m.length+1,title:a,description:d,notes:s,priority:c,dueDate:p,list:u}),L(t.value,o.value,r.value,l.value,e,C),console.log(m);for(let e=1;e<n.children.length;e++)n.children[e].value="";E(C)})),c.textContent="Create Todo";const p=document.getElementById("lists");n.append(e,t,o,r,l,i,c),p.appendChild(n)})(),console.log("yo")})()})();