function openBooking(){document.getElementById('modal').classList.add('show')}
function closeBooking(){document.getElementById('modal').classList.remove('show')}
function book(pkg){document.getElementById('package').value=pkg;openBooking()}
function submitBooking(e){e.preventDefault();const n=document.getElementById('name').value,p=document.getElementById('phone').value,k=document.getElementById('package').value||'Diagnostic Test',d=document.getElementById('date').value||'To be confirmed';const msg=`Hello Tricity Thyrocare,%0A%0AI want to book a test.%0AName: ${encodeURIComponent(n)}%0AMobile: ${encodeURIComponent(p)}%0ATest/Package: ${encodeURIComponent(k)}%0APreferred Date: ${encodeURIComponent(d)}`;window.open('https://wa.me/918178009011?text='+msg,'_blank');closeBooking()}
document.addEventListener('click',e=>{if(e.target.id==='modal')closeBooking()});
