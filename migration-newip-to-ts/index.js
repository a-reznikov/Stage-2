(()=>{"use strict";var e={208:()=>{},717:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(s(842)),r=o(s(310)),i=s(527);t.default=class{constructor(){this.controller=new n.default,this.topNews=new r.default,this.view=new i.AppView}start(){const e=document.querySelector(".sources"),t=document.querySelector(".form__button");e&&t&&(e.addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),t.addEventListener("click",(e=>{e.preventDefault(),this.controller.getNews(e,(e=>this.view.drawNews(e)))})),this.topNews.getNews((e=>this.view.drawNews(e))),this.controller.getSources((e=>this.view.drawSources(e))))}}},853:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(699),r=o(s(24));class i extends r.default{constructor(){super(n.BaseLink.proxy,{apiKey:n.ApiKeys.main})}}t.default=i},842:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(699),r=o(s(853)),i=o(s(801));class c extends r.default{constructor(){super(...arguments),this.optionName="",this.option={}}getSources(e){super.getResp({endpoint:n.EndpointName.sources},e)}getNews(e,t){const s=e.target;this.option=(0,i.default)(s);const[o]=Object.values(this.option);this.optionName=o;const r=document.querySelector(".section__title");s&&r&&r.getAttribute("data-source")!==this.optionName&&(this.optionName&&(r.setAttribute("data-source",this.optionName),r.textContent=`${this.optionName[0].toUpperCase()}${this.optionName.slice(1)}`.split("-").join(" ")),super.getResp({endpoint:n.EndpointName.everything,options:this.option},t))}}t.default=c},24:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.baseLink=e,this.options=t}getResp({endpoint:e,options:t={}},s=(()=>{console.error("No callback for GET response")})){this.load("GET",e,s,t)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,t){const s=Object.assign(Object.assign({},this.options),e),o=Object.assign(Object.assign({},e),this.options);let n=`${this.baseLink}${t}?`;return"top-headlines"===t?Object.keys(o).forEach((e=>{n+=`${e}=${o[e]}&`})):Object.keys(s).forEach((e=>{n+=`${e}=${s[e]}&`})),n.slice(0,-1)}load(e,t,s,o={}){fetch(this.makeUrl(o,t),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>s(e))).catch((e=>console.error(e)))}}},801:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t="",s={};if(e){let o=e.getAttribute("data-source-id");if(e.classList.contains("source__item")||e.classList.contains("source__item-name")){if(e.classList.contains("source__item-name")){const t=e.closest(".source__item");t&&(o=t.getAttribute("data-source-id"))}t=o,s={sources:t}}else if(e.classList.contains("form__button")){const e=document.querySelector(".form__input");e&&(t=e.value,s={q:t})}}return s}},310:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(699),r=o(s(853));class i extends r.default{constructor(){super(...arguments),this.optionName="us",this.option={country:this.optionName}}getSources(e){super.getResp({endpoint:n.EndpointName.sources},e)}getNews(e){const t=document.querySelector(".section__title");t&&(t.setAttribute("data-source","Top News"),super.getResp({endpoint:"top-headlines",options:this.option},e))}}t.default=i},527:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppView=void 0;const n=o(s(798)),r=o(s(53));class i{constructor(){this.news=new n.default,this.sources=new r.default}drawNews(e){const t=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(t)}drawSources(e){const t=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(t)}}t.AppView=i,t.default=i},798:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{draw(e){const t=e.length>=10?e.filter(((e,t)=>t<10)):e,s=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");o&&o instanceof HTMLElement&&t.forEach(((e,t)=>{const n=o.content.cloneNode(!0),r=n.querySelector(".news__item");if(t%2&&r&&r.classList.add("alt"),n){const t=n.querySelector(".news__meta-photo");t&&(e.urlToImage?t.style.backgroundImage=`url(${e.urlToImage})`:t.classList.add("placeholder"));const s=n.querySelector(".news__meta-author");s&&(s.textContent=e.author||e.source.name);const o=n.querySelector(".news__meta-date");o&&(o.textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"));const r=n.querySelector(".news__description-title");r&&(r.textContent=e.title);const i=n.querySelector(".news__description-source");i&&(i.textContent=e.source.name);const c=n.querySelector(".news__description-content");c&&(c.textContent=e.description);const u=n.querySelector(".news__read-more a");u&&u.setAttribute("href",e.url)}s.append(n)}));const n=document.querySelector(".news");n&&(n.innerHTML="",n.appendChild(s))}}},53:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{draw(e){const t=document.createDocumentFragment(),s=document.querySelector("#sourceItemTemp");s&&s instanceof HTMLElement&&e.forEach((e=>{const o=s.content.cloneNode(!0),n=o.querySelector(".source__item");if(n){n.setAttribute("data-source-id",e.id);const t=o.querySelector(".source__item-name");t&&(t.textContent=e.name)}t.append(o)}));const o=document.querySelector(".sources");o&&o.append(t)}}},607:function(e,t,s){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),(new(o(s(717)).default)).start()},699:(e,t)=>{var s,o,n;Object.defineProperty(t,"__esModule",{value:!0}),t.EndpointName=t.ApiKeys=t.BaseLink=void 0,function(e){e.main="https://newsapi.org/v2/",e.rss="https://rss-news-api.onrender.com/",e.proxy="https://news-proxy.spanb4.shop/"}(s||(t.BaseLink=s={})),function(e){e.main="bd767d6423de451fac45cea1e3bc8157",e.spare="4fc1c4cdb41f48e8bdd14259015df9c1"}(o||(t.ApiKeys=o={})),function(e){e.sources="sources",e.everything="everything"}(n||(t.EndpointName=n={}))}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,s),r.exports}s(607),s(208)})();