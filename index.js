import{a as p,S as m,i as l}from"./assets/vendor-DVva8SYe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="49635382-66eda9712402d4470ed35045b",h="https://pixabay.com/api/";function g(o){return p.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error("Error fetching images:",t),[]))}const u=document.querySelector(".gallery");let i;function L(o){const t=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:s,comments:f,downloads:d})=>`
      <a href="${a}" class="gallery-item">
        <img src="${n}" alt="${e}" />
        <div class="info">
          <p>👍 ${r}</p>
          <p>👀 ${s}</p>
          <p>💬 ${f}</p>
          <p>⬇️ ${d}</p>
        </div>
      </a>`).join("");u.innerHTML=t,i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){u.innerHTML="",i&&i.destroy(),i=null}function q(){document.querySelector(".loader").classList.add("visible")}function v(){document.querySelector(".loader").classList.remove("visible")}const c=document.querySelector(".form"),S=c.querySelector("input[name='search-text']");c.addEventListener("submit",async o=>{o.preventDefault();const t=S.value.trim();if(!t){l.error({message:"Please enter a search query!"});return}b(),q(),g(t).then(n=>{if(v(),n.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset();return}L(n),c.reset()})});
//# sourceMappingURL=index.js.map
