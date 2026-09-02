
function sendWhatsApp(e){
  e.preventDefault();
  const name=document.querySelector("#name")?.value.trim()||"";
  const service=document.querySelector("#service")?.value.trim()||"";
  const message=document.querySelector("#message")?.value.trim()||"";
  const text=`Hello SevaNow, I am ${name}. I need help with ${service}.${message?" Details: "+message:""}`;
  window.open("https://wa.me/919494020023?text="+encodeURIComponent(text),"_blank");
}
document.querySelectorAll("[data-menu]").forEach(btn=>{
 btn.addEventListener("click",()=>document.querySelector("[data-nav]").classList.toggle("open"));
});
document.querySelectorAll("[data-nav] a").forEach(a=>a.addEventListener("click",()=>document.querySelector("[data-nav]").classList.remove("open")));
