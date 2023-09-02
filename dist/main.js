(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,'html,\nbody,\n#content, #wrapper{\n  height: 100%;\n  width: 100%;\n  \n}\n\nbody {\n  font-family: \'Press Start 2P\', cursive;\n  z-index: -2;\n}\n\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  gap: 2vh;\n  height: 100%;\n  width: 100%;\n\n}\n\n#bodyContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row: 1fr 1fr;\n  margin: 3vh;\n}\n\n#sortDiv {\n  order: 2;\n  grid-template-columns: 1fr 1fr;\n  display: grid;\n  background-color: #cbffd8; /* Light green background */\n  border-radius: 10px; /* Rounded corners */\n  padding: 10px; /* Space between border and content */\n  margin: 1vh;\n  box-shadow: 8px 8px  #ffffff68; /* Subtle shadow for depth */\n}\n\n\nbody {\n  background: linear-gradient(-45deg, #cbffd8, #6db970, #3ed157);\n  background-size: 400% 400%;\n  animation: hueShift 3s alternate infinite;\n\n}\n@keyframes hueShift {\n  0% {\n    background-position: 50% 2%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n}\n\n#wrapper {\nheight: 100%;\n}\n\nh1 {\n  font-size: 22px;\n}  \n\n\n#todoContainer>div {\n  display: grid;\n  width: 90%;\n  border: 2px solid #6bda7e;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #8cdfa5, #82f391);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  padding: 4%;\n  height: 20vh; /* set a fixed height */\n  box-shadow: 8px 8px  #ffffff68; /* Subtle shadow for depth */\n}\n\n\n\n\n\n#todoContainer {\n  order: 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 100px;\n}\n\n\n#todoContainer>div:hover {\n  transform: translateY(-5px); /* Slight lift on hover */\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */\n}\n\n.buttonContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n\n\n.delete {\n  background-color: #ff4d4d; /* Red background color */\n  color: white; /* White font color */\n  border: none; /* Remove border */\n  border-radius: 5px; /* Rounded corners */\n  padding: 5px 10px; /* Padding around the text */\n  cursor: pointer; /* Change cursor to pointer when hovering */\n  transition: background-color 0.3s ease; /* Smooth transition for hover effect */\n}\n\n.delete:hover {\n  background-color: #b40000; /* Darker red background color on hover */\n}\n\n\n\n[id*="todoTitle"] {\n  font-size: 1em;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n}\n\n[id*="todoTitle"]>p {\n  font-size: 1em;\n  font-weight: 100;\n  color: white;\n}\n\n.collapsible {\n  border-radius: 10px;\n  color: white;\n  cursor: pointer;\n  width: 200px;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n\n.shownotes {\n  background-color: #adcaa4;\n  border-radius: 5px; /* Rounded corners */\n  padding: 5px 10px; /* Padding around the text */\n}\n\n.shownotes:hover {\n  background-color: #555;\n}\n\n.notes {\n  display: none;\n  overflow-y: auto; /* Enable scrolling when content exceeds the fixed height */\n  height: 50px; /* Set a fixed height for the notes */\n  transition: max-height 2s ease-in-out;\n}\n\ninput {\n  background: none;\n  border: none;\n  color: black;\n  font-family: \'Press Start 2P\', cursive;\n\n}\n\ninput::placeholder {\n  color: rgba(80, 80, 80, 0.555);\n  font-family: \'Press Start 2P\', cursive;\n}\n\nbutton {\n  font-family: \'Press Start 2P\', cursive;\n  text-shadow: 1px 1px black;\n  border-radius: 10px;\n  background-color: #61ac648a;\n  color: white;\n  cursor: pointer;\n  width: 15vh;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: background-color 0.5s ease; /* Add transition effect */\n}\n\nbutton:hover {\n  background-color: #91f58db1; /* Darker green on hover */\n}\n\n#lists {\n  order: 1;\n  padding: 3%;\n  display: grid;\n  border: 10px solid #aef58d8a;\n\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 0.1fr 0.7fr 1fr;\n  background-color: #d6ebcd;\n  box-shadow: 3px 5px 5px rgb(0, 0, 0);\n  min-height: 100vh;\n  margin: 3vh;\n  gap: 3%;\n}\n#listsh1 {\n  order: -2;\n}\n\n#lists>ul {\n  order: -1;\n  grid-column: 1 / span 2;\n  border-radius: 1%;\n  box-shadow: 1px 2px 2px 2px rgb(78, 77, 77);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n#AllTodos, #CompletedTodos{\n  background-color: #e1eedd;\n}\n\n\n\n#lists>ul>li {\n  position: relative;\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr;\n  background-color: #adcaa4;\n  padding: 10px;\n  height: 4vh;\n  width: 15vh;\n  font-size: 0.8em;\n  border-radius: 5px;\n  box-shadow: 2px 1px 1px 1px rgb(255, 255, 255);\n  transition: all 0.3s ease; /* Add transition to normal state */\n}\n\n#lists>ul>li:hover {\n  transform: translateY(-5px); /* Slight lift on hover */\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */\n  background-color: #fff59b;\n}\n#lists>ul>li>button {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 20px;\n  height: 20px;\n  border-radius: 10%;\n  background-color: #64a16f;\n  border: 2px solid #d6ebcd;\n  box-shadow: 1px 1px 1px #646464;\n  font-size: 1.2em;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1.2;\n  cursor: pointer;\n  transition: background-color 0.1s ease, border-color 0.3s ease;\n}\n\n#lists>ul>li>button:hover {\n  background-color: #b40000;\n  border-color: #fcfcfc;\n}\n\n#lists>ul>li>button::before {\n  content: "x";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#lists>ul>.selected {\n  background-color: #7eff93;\n}\n\n#inputContainer {\n  display: grid;\n  grid-template-rows: repeat(7, 0.1fr);\n  gap: 5px;\n}\n.add-list-form {\n  display: grid;\n  grid-template-rows: 0.1fr 0.2fr 0.2fr;\n}\n#inputContainer button,\n.add-list-form button {\n  background-color: #6bda7e;\n  width: 200px;\n  height: 50px;\n}\n\n\n#AllTodos {\n  order: -1;\n}\n\n#CompletedTodos {\n  order: -1;\n}\n\ninput[type="date"] {\n  font-family: \'Press Start 2P\', cursive;\n  appearance: none;\n  box-sizing: border-box;\n  border: 1px solid black;\n  background: transparent;\n  font-size: 0.7rem;\n  padding: 8px;\n\n  ::-webkit-datetime-edit-text {\n    padding: 0 2rem;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    text-transform: uppercase;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    text-transform: uppercase;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    text-transform: uppercase;\n  }\n\n  ::-webkit-inner-spin-button {\n    display: none;\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    background: transparent;\n  }\n}\n\n\n\nh1 {\n  font-size: 22px;\n  animation: jump 2s ease-in-out infinite;\n}\n\n@keyframes jump {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-3px);\n    text-shadow: 2px 2px 2px #36a047;\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\nhtml,\nbody,\n#content {\n  height: 100%;\n}\n\ninput[type="checkbox"] {\n  position: relative;\n  appearance: none;\n  -webkit-appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #64a16f;\n  outline: none;\n  background-color: #b8e6aa;\n  font-family: "Ｖａｐｏｒｗａｖｅ";\n  font-size: 16px;\n  transition: all 0.9s ease-in-out;\n}\n\ninput[type="checkbox"]::before {\n  content: "✓";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 2px;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n  font-size: 25px;\n  font-weight: bold;\n}\n\ninput[type="checkbox"]:checked::before {\n  opacity: 1;\n}\n\n\n',""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var s=e[d],l=o.base?s[0]+o.base:s[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=r(h,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var s=o(e,r),l=0;l<i.length;l++){var c=t(i[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),d=t(565),s=t.n(d),l=t(216),c=t.n(l),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const g=(e,n,...t)=>{const o=document.createElement(e);for(let e in n)o.setAttribute(e,n[e]);return t.forEach((e=>{"string"==typeof e?o.appendChild(document.createTextNode(e)):o.appendChild(e)})),o},m=(document.getElementById("bodyContainer"),document.getElementById("sortDiv")),b=document.createElement("button");b.textContent="Sort High to Low";const x=document.createElement("button");x.textContent="Sort Low to High",m.append(b,x);let v="highToLow";const y=()=>{"highToLow"===v?E.sort(((e,n)=>{const t=["high","medium","low"];return t.indexOf(n.priority)-t.indexOf(e.priority)})):"lowToHigh"===v&&E.sort(((e,n)=>{const t=["low","medium","high"];return t.indexOf(n.priority)-t.indexOf(e.priority)})),console.table(E),console.log(k),w()};b.addEventListener("click",(()=>{v="highToLow",y()})),x.addEventListener("click",(()=>{v="lowToHigh",y()}));let k="All Todos";const w=function(){C(this);const e=document.querySelector(".selected");if(k=e?e.textContent.replace("Delete","").trim():"All Todos",console.log(k),todoContainer.innerHTML="","All Todos"===k)console.table(E),E.forEach((e=>{D(e.title,e.description,e.notes,e.dueDate,e.priority,e.list,e.checked)}));else if("Done Todos"===k){const e=E.filter((e=>!0===e.checked));console.log(e),e.forEach((e=>{D(e.title,e.description,e.notes,e.dueDate,e.priority,e.list,e.checked)}))}else k&&T(k).forEach((e=>{D(e.title,e.description,e.notes,e.dueDate,e.priority,e.list)}))},C=e=>{if(console.log(e),!e)return;let n="";return[...e.parentElement.children].forEach((e=>e.classList.remove("selected"))),e.classList.add("selected"),n=e.textContent.replace("Delete",""),n},E=[{id:1,title:"Buy Groceries",description:"Go to the supermarket to buy food for the week",notes:"Remember to get eggs, milk, bread, and vegetables",priority:"high",dueDate:"2024-05-03",list:"General",checked:!0},{id:5,title:"Buy banana",description:"Go to the supermarket to buy food for the week",notes:"Remember to get eggs, milk, bread, and vegetables",priority:"medium",dueDate:"2023-05-10",list:"General",checked:!1},{id:2,title:"Finish Project Report",description:"Write a detailed report on the recent project",notes:"Make sure to include all the key findings and recommendations",priority:"high",dueDate:"2023-04-24",list:"Work",checked:!1},{id:3,title:"Book Dentist Appointment",description:"Call the dentist office to schedule a check-up appointment",notes:"Check the availability for the earliest appointment",priority:"low",dueDate:"2023-09-04",list:"Health",checked:!1},{id:4,title:"Pay Rent",description:"Transfer the rent payment for the month to the landlord",notes:"Do not forget to save a receipt of the transaction",priority:"high",dueDate:"2023-02-20",list:"Finance",checked:!1}],T=e=>E.filter((n=>n.list===e)),L=()=>{var e,n=document.getElementsByClassName("shownotes");const t=function(){console.log(this.parentElement.className),this.parentElement.classList.toggle("active");var e=this.parentElement.parentElement.children.item(2);"block"===e.style.display?(e.style.display="none",e.style.maxHeight="0",console.log("close")):(e.style.display="block",console.log("open"))};for(e=0;e<n.length;e++)n[e].onclick=t};window.onload=()=>{L()};const D=(e,n,t,o,r,i)=>{const a=document.getElementById("todoContainer"),d=g("div",{id:`${e}`,class:"collapsible"}),s=g("h1",{id:`todoTitle_${e}`,contentEditable:"true"},`${e}`),l=g("p",{class:"description",contentEditable:"true"},`${n}`),c=g("p",{class:"notes",contentEditable:"true"},`${t}`),p=g("input",{type:"date",class:"dueDate",contentEditable:"true"},`${o}`),u=g("select",{class:"priority",contentEditable:"true"}),h=g("option",{value:"high"},"High Priority"),f=g("option",{value:"medium"},"Medium Priority"),m=g("option",{value:"low"},"Low Priority");u.append(h,f,m),u.value=r;const b=g("input",{type:"checkbox"}),x=g("button",{class:"delete"}),v=g("button",{class:"shownotes"}),y=g("p",{class:"list"},`${i}`),k=g("div",{class:"buttonContainer"});p.value=o,v.textContent="Show Notes",x.textContent="Delete Todo";const w=E.findIndex((n=>n.title===e));function C(e){const n=E.findIndex((n=>n.id===e));E.splice(n,1),this.remove(),console.log(E)}return s.addEventListener("blur",(()=>{console.log(E),-1!==w&&(E[w].title=s.textContent)})),l.addEventListener("input",(()=>{l.addEventListener("blur",(()=>{E[w].description=l.textContent}))})),c.addEventListener("input",(()=>{c.addEventListener("blur",(()=>{E[w].notes=c.textContent}))})),p.addEventListener("input",(()=>{p.addEventListener("blur",(()=>{E[w].dueDate=p.textContent}))})),u.addEventListener("change",(()=>{const n=E.findIndex((n=>n.title===e));E[n].priority=u.value})),y.addEventListener("blur",(()=>{E[w].list=y.textContent})),v.addEventListener("click",L),x.addEventListener("click",(()=>C.bind(d,E.id)())),b.addEventListener("click",(function(){const n=E.findIndex((n=>n.title===e));console.log(E[n].checked),1==b.checked?(E[n].checked=!0,this.parentNode.parentNode.style.opacity="0.7",console.log("checked bitch")):(E[n].checked=!1,console.log("unchekckckerd"),this.parentNode.parentNode.style.opacity="1"),console.log(E)})),E[w].checked&&(b.checked=!0),E[w].value=todoDue.value,k.append(b,v,x),d.append(s,l,c,p,u,k),a.appendChild(d),E.filter((e=>e.checked)).forEach((e=>{const n=document.getElementById(e.title);n&&(n.querySelector('input[type="checkbox"]').checked=!0,n.style.opacity="0.7")})),{title:e,description:n,notes:t,dueDate:o,priority:r,list:y.textContent}};document.getElementById("content"),document.getElementById("todoContainer"),document.addEventListener("DOMContentLoaded",(function(){w.call(document.querySelector("#AllTodos"))})),(e=>{document.getElementById("todoContainer");const n=document.getElementById("lists"),t=g("h1",{id:"listsTitle"});t.textContent="Create a new list";const o=document.createElement("ul"),r=g("li",{id:"AllTodos"});r.textContent="All Todos";const i=g("li",{id:"CompletedTodos"});i.textContent="Done Todos",i.onclick=w;const a=e.reduce(((e,n)=>(e[n.list]||(e[n.list]=[]),e[n.list].push(n),e)),{});Object.keys(a).forEach((e=>{const n=g("li",{});n.textContent=e,c(n),o.append(n)})),r.onclick=w,Array.from(o.querySelectorAll("li")).forEach((e=>{e.onclick=w}));const d=document.createElement("form");d.classList.add("add-list-form");const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("placeholder","Enter list name"),s.classList.add("list-input"),s.required=!0;const l=document.createElement("button");function c(n){const t=document.createElement("button");t.textContent="",n.append(t),t.addEventListener("click",(()=>{const t=n.textContent.replace("Delete","");console.log(t);const o=e.filter((e=>e.list==t));o.forEach((n=>{const t=e.indexOf(n);e.splice(t,1)})),console.log(n),n.parentNode.removeChild(n),w.call(document.querySelector("#AllTodos")),console.log(o)}))}l.textContent="Create List",l.classList.add("create-list-btn"),d.append(t,s,l),n.append(o,d),l.addEventListener("click",(e=>{if(e.preventDefault(),!s.value)return;const n=g("li",{});n.textContent=s.value,c(n),n.onclick=w,o.append(n),console.log(n.textContent),s.value=""}));const p=document.createElement("h1");p.setAttribute("ID","listsh1"),p.textContent="Todo Lists",n.appendChild(p),o.append(r,i),o.classList.add("lists-container")})(E),(()=>{const e=g("div",{id:"inputContainer"}),n=g("h1",{id:"inputTitle"});n.textContent="Create a new todo";const t=g("input",{id:"todoTitle",type:"text",placeholder:"Title"}),o=g("input",{id:"todoDecription",type:"text",placeholder:"Description"}),r=g("input",{id:"todoNotes",type:"text",placeholder:"Notes"}),i=g("select",{id:"todoPriority"}),a=g("option",{value:"high"});a.textContent="High Priority";const d=g("option",{value:"medium"});d.textContent="Medium Priority";const s=g("option",{value:"low"});s.textContent="Low Priority",i.append(a,d,s);const l=g("input",{id:"todoDue",type:"date",placeholder:"Due Date"}),c=g("button",{id:"newTodo",value:"New Todo"});c.addEventListener("click",(function(){const n=i.options[i.selectedIndex].value;var a,d,s,c,p,u;console.log(n),a=t.value,d=o.value,s=l.value,c=n,p=r.value,u=k,E.push({id:E.length+1,title:a,description:d,notes:s,priority:c,dueDate:p,list:u}),D(t.value,o.value,r.value,l.value,n,k),console.log(E);for(let n=1;n<e.children.length;n++)e.children[n].value="";w(k)})),c.textContent="Create Todo";const p=document.getElementById("lists");e.append(n,t,o,r,l,i,c),p.appendChild(e)})(),console.log("yo")})()})();