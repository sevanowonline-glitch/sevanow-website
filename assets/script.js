
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


function openSevaNowDirections() {
  const destination = "17.776446557698108,83.22750232745385";
  const url = "https://www.google.com/maps/dir/?api=1&destination=" +
              encodeURIComponent(destination) + "&travelmode=driving";
  window.open(url, "_blank");
}
