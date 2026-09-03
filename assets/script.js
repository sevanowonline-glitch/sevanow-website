document.getElementById('year').textContent=new Date().getFullYear();
function sendWhatsApp(e){e.preventDefault();}
document.querySelectorAll('[data-menu]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('[data-nav]').classList.toggle('open')));
document.querySelectorAll('[data-nav] a').forEach(a=>a.addEventListener('click',()=>document.querySelector('[data-nav]').classList.remove('open')));
function openSevaNowDirections(){const destination='17.776446557698108,83.22750232745385';const url='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(destination)+'&travelmode=driving';window.open(url,'_blank');}
