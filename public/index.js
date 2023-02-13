(()=>{"use strict";class e{constructor({id:e,title:t,description:s,currency:i,price:c,time:n}){this.id=e,this.title=t,this.description=s,this.currency=i,this.price=c,this.time=n}generatePrices(){let e="",t=document.createElement("div");return t.className="price-selected hidden",t.setAttribute("data-id",this.id),(this.title||this.description||this.price||this.time)&&(e+='<div class="price-selected__content">',e+=`<h3 class="price-selected__title">${this.title}</h3>`,e+=`<p class="price-selected__description">${this.description}</p>`,e+=`<p class="price-selected__price">\n                    <span class="price-selected__currency">${this.currency}</span><span class="price-selected__count">${this.price}</span>\n                    <span class="price-selected__time">${this.time}</span>\n                  </p>`,e+='<div class="price-selected__button">',e+='<a class="price-selected__btn" href="#contacts">Order</a>',e+="</div>",e+="</div>"),t.innerHTML=e,t}}const t=[{id:0,title:"Basics",description:"Release of Letraset sheets<br>containing Lorem Ipsum passages, and more recently",currency:"$",price:"15",time:" / per hour"},{id:1,title:"Standard",description:"Release of Letraset sheets<br>containing Lorem Ipsum passages, and more recently",currency:"$",price:"25",time:" / per hour"},{id:2,title:"Pro care",description:"Release of Letraset sheets<br>containing Lorem Ipsum passages, and more recently",currency:"$",price:"35",time:" / per hour"}],s=[{id:0,city:"Yonkers, NY",phone:"+19146780003",address:"511 Warburton Ave"},{id:1,city:"Canandaigua, NY",phone:"+15853930001",address:"151 Charlotte Street"},{id:2,city:"Sherrill, NY",phone:"+13159080004",address:"14 WEST Noyes BLVD"},{id:3,city:"New York City",phone:"+12124560002",address:"9 East 91st Street"}];class i{constructor(e){this.classes=e,this.modal="",this.modalContent="",this.modalCloseBtn="",this.overlay=""}buildModal(e){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal__content"),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"span","modal__close-icon"),this.modalCloseBtn.innerHTML='<img src="images/navigation/close.png" width="16" height="16" alt="close">',this.setContent(e),this.appendModalElements(),this.bindEvents(),this.openModal()}createDomNode(e,t,...s){return(e=document.createElement(t)).classList.add(...s),e}setContent(e){"string"==typeof e?this.modalContent.innerHTML=e:(this.modalContent.innerHTML="",this.modalContent.append(e))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}bindEvents(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}openModal(){document.body.prepend(this.overlay)}closeModal(e){let t=e.target.classList;if(t.contains("overlay")||t.contains("modal__close-icon"))try{document.querySelector(".overlay").remove()}catch(e){console.log(`Something's going wrong when trying to close modal window two or more times: '${e.message}'`)}}}function c(e){let t=[],s=document.getElementsByClassName("select-items"),i=document.getElementsByClassName("select-selected"),c=s.length,n=i.length;for(let s=0;s<n;s++)e===i[s]?t.push(s):i[s].classList.remove("select-arrow-active");for(let e=0;e<c;e++)t.indexOf(e)&&s[e].classList.add("select-hide")}class n{constructor({id:e,city:t,phone:s,address:i}){this.id=e,this.city=t,this.phone=s,this.address=i}generateSelect(){let e="",t=document.createElement("div");return t.className="option-selected",t.setAttribute("data-id",this.id),(this.city||this.phone||this.address)&&(e+='<div class="option-selected__content">',e+='<div class="option-selected__details">',e+='<div class="option-selected__items">',e+="<p>City:</p>",e+="<p>Phone:</p>",e+="<p>Office address:</p>",e+="</div>",e+='<div class="option-selected__description">',e+=`<p>${this.city}</p>`,e+=`<p>${this.phone}</p>`,e+=`<p>${this.address}</p>`,e+="</div>",e+="</div>",e+='<div class="option-selected__button text__button">',e+=`<a class="option-selected__btn btn" href="tel:${this.phone}">Call us</a>`,e+="</div>",e+="</div>"),t.innerHTML=e,t}}console.log("Score 100 from 110 for first part.\nScore 75 from 85 for second part.\nScore 100 from 125 for third part."),window.onload=function(){!function(){let e=document.getElementsByClassName("custom-select"),t=e.length;for(let s=0;s<t;s++){let t=e[s].getElementsByTagName("select")[0],i=t.length,n=document.createElement("div"),o=document.createElement("div");n.setAttribute("class","select-selected"),n.innerHTML=t.options[t.selectedIndex].innerHTML,e[s].append(n),o.setAttribute("class","select-items select-hide");for(let e=1;e<i;e++){let s=document.createElement("div");s.innerHTML=t.options[e].innerHTML,s.addEventListener("click",(function(){let e=this.parentNode.parentNode.getElementsByTagName("select")[0],t=e.length,s=this.parentNode.previousSibling;for(let i=0;i<t;i++)if(e.options[i].innerHTML===this.innerHTML){let t=this.parentNode.getElementsByClassName("same-as-selected"),c=t.length;e.selectedIndex=i,s.innerHTML=this.innerHTML;for(let e=0;e<c;e++)t[e].removeAttribute("class");this.setAttribute("class","same-as-selected");break}s.click()})),o.append(s)}e[s].append(o),n.addEventListener("click",(function(e){e.stopPropagation(),c(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active"),"City"!==n.innerHTML&&(n.style.backgroundColor="#C1E698")}))}}(),document.body.addEventListener("click",c),t&&m(),s&&q(),o(),S(),window.matchMedia("(max-width: 768px)").matches&&(document.querySelectorAll(".content-item__img").forEach(((e,t)=>{e.src=`images/gallery/${t}-768.jpg`})),_(),y(),g(),v(),L(),b())};const o=()=>{document.querySelector(".section-third__list").addEventListener("click",(e=>{if(e.target.classList.contains("section-third__list__li")){let t=e.target;if(t.classList.contains("tag_selected"))return l(),void a();d(t.innerText),l(),r(t)}}))},l=()=>{document.querySelectorAll(".section-third__list .section-third__list__li").forEach((e=>{e.classList.remove("tag_selected")}))},r=e=>{e.classList.add("tag_selected")},a=()=>{document.querySelectorAll(".section-third__content .content-item").forEach((e=>{e.classList.remove("content-item_blur")}))},d=e=>{let t=document.querySelectorAll(".section-third__content .content-item");switch(a(),e){case"Gardens":t[1].classList.add("content-item_blur"),t[2].classList.add("content-item_blur"),t[3].classList.add("content-item_blur"),t[5].classList.add("content-item_blur");break;case"Lawn":t[0].classList.add("content-item_blur"),t[1].classList.add("content-item_blur"),t[3].classList.add("content-item_blur"),t[4].classList.add("content-item_blur"),t[5].classList.add("content-item_blur");break;case"Planting":t[0].classList.add("content-item_blur"),t[2].classList.add("content-item_blur"),t[4].classList.add("content-item_blur")}},m=()=>{document.querySelector(".prices").addEventListener("click",(e=>{let t=e.target;if(t.classList.contains("prices__list__li")&&h(t.innerText),t.classList.contains("price-selected__title")){let e=document.querySelector(".price-selected");e.classList.add("hidden"),setTimeout((()=>{e.remove()}),400)}}))},h=e=>{if(!document.querySelector(".price-selected"))switch(e){case"Basics":u(0);break;case"Standard":u(1);break;case"Pro care":u(2)}},u=e=>{let s=document.querySelector(".prices"),i=p(t)[e].generatePrices();s.append(i),setTimeout((()=>{i.classList.remove("hidden")}),0)},p=t=>{let s=[];return t.forEach((t=>{s.push(new e(t))})),s},_=()=>{let e=document.querySelector(".wrapper-prices"),t=document.querySelector(".prices__header");e.prepend(t)},y=()=>{let e=document.querySelector(".wrapper-contacts"),t=document.querySelector(".contacts__header");e.append(t)},g=()=>{let e=document.querySelector(".ul__list"),t=document.querySelector(".overlay");document.querySelector(".hamburger").addEventListener("click",(()=>{t.style.display="block",e.classList.add("show"),setTimeout((()=>{e.classList.toggle("change-opacity")}),0)}))},L=()=>{let e=document.querySelector(".ul__list");document.querySelector(".hamburger").classList.contains("change")&&(e.classList.toggle("change-opacity"),setTimeout((()=>{e.classList.remove("show")}),400))},v=()=>{let e=document.querySelectorAll(".nav__link"),t=document.querySelector(".ul__list"),s=document.querySelector(".overlay");e.forEach((e=>{e.addEventListener("click",(()=>{s.style.display="none",document.querySelector(".hamburger").classList.toggle("change"),t.classList.toggle("change-opacity"),setTimeout((()=>{t.classList.toggle("show")}),400)}))}))},b=()=>{let e=document.querySelector(".ul__list"),t=document.querySelector(".hamburger"),s=document.querySelector(".overlay");s.addEventListener("click",(()=>{e.classList.toggle("change-opacity"),setTimeout((()=>{e.classList.remove("show")}),400),t.classList.toggle("change"),s.style.display="none"}))},S=()=>{let e=document.querySelectorAll(".btn_modal");e.forEach(((t,s)=>{e[s].addEventListener("click",(()=>{f(s)}))}))},f=e=>{E(0===e?"Learn more here":"Contact us")},E=e=>{new i("button-modal").buildModal(e)},q=()=>{document.querySelector(".select-items").addEventListener("click",(e=>{let t=e.target;t.classList.contains("same-as-selected")&&C(t.innerText)}))},C=e=>{let t=document.querySelector(".option-selected");switch(t&&t.remove(),e){case"Canandaigua, NY":w(1);break;case"New York City":w(3);break;case"Yonkers, NY":w(0);break;case"Sherrill, NY":w(2)}},w=e=>{let t=document.querySelector(".wrapper-contacts"),i=k(s)[e].generateSelect();t.prepend(i)},k=e=>{let t=[];return e.forEach((e=>{t.push(new n(e))})),t}})();
//# sourceMappingURL=index.js.map