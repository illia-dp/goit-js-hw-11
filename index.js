import{a as f,S as p,i}from"./assets/vendor-1AYLTIiv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",g="24246852-77467cbf1dd5333394cba3aaf";function h(o){return f.get(d,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error("Error fetching images:",t),[]))}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:m})=>`
      <li class="gallery-item-wrapper">
        <a class="gallery-image-wrapper" href="${a}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item">Likes<span class="info-item-numbers">${r}</span></p>
          <p class="info-item">Views<span class="info-item-numbers">${n}</span></p>
          <p class="info-item">Comments<span class="info-item-numbers">${u}</span></p>
          <p class="info-item">Downloads<span class="info-item-numbers">${m}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const v=document.querySelector(".form"),w=document.querySelector(".form-input");v.addEventListener("submit",o=>{o.preventDefault();const t=w.value.trim();if(t===""){i.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}b(),S(),h(t).then(s=>{s.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(s)}).catch(s=>{i.error({message:"An error occurred while fetching images."})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
