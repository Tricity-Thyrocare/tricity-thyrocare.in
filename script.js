let cart = JSON.parse(localStorage.getItem('tricityCart') || '[]');
function save(){localStorage.setItem('tricityCart',JSON.stringify(cart));updateCart()}
function updateCart(){document.getElementById('cartCount').textContent=cart.length}
function addItem(name,price){cart.push({name,price});save();alert(name+' added to cart');openCart()}
function openCart(){renderCart();document.getElementById('cartModal').classList.add('show')}
function closeCart(){document.getElementById('cartModal').classList.remove('show')}
function renderCart(){
 const box=document.getElementById('cartItems');
 if(!cart.length){box.innerHTML='<p>Your cart is empty. Add a test or package to continue.</p>'}
 else {box.innerHTML=cart.map((x,i)=>`<div class="cart-row"><span>${x.name}<br><b>₹${x.price}</b></span><button onclick="removeItem(${i})">Remove</button></div>`).join('')}
 document.getElementById('cartTotal').textContent='₹'+cart.reduce((a,b)=>a+b.price,0);
}
function removeItem(i){cart.splice(i,1);save();renderCart()}
function openBooking(){document.getElementById('bookingModal').classList.add('show')}
function closeBooking(){document.getElementById('bookingModal').classList.remove('show')}
function openBookingFromCart(){closeCart();if(cart.length)document.getElementById('bookingItem').value=cart.map(x=>x.name).join(', ');openBooking()}
function submitBooking(e){e.preventDefault();const f=e.target;const name=f.querySelector('input').value;const phone=f.querySelector('input[type=tel]').value;const date=f.querySelector('input[type=date]').value;const item=document.getElementById('bookingItem').value||'Test / Package';const msg=`Hello Tricity Thyrocare Collection Centre,%0A%0ABooking Request%0AName: ${name}%0AMobile: ${phone}%0ADate: ${date}%0ATest/Package: ${item}`;window.open('https://wa.me/918178009011?text='+msg,'_blank');}
function doSearch(){const q=document.getElementById('searchInput').value.trim();if(q){document.getElementById('packages').scrollIntoView({behavior:'smooth'});alert('Showing results for: '+q)}}
function doMobileSearch(){const q=document.getElementById('mobileSearch').value.trim();if(q){document.getElementById('packages').scrollIntoView({behavior:'smooth'});alert('Showing results for: '+q)}}
updateCart();
document.querySelectorAll('.gallery-grid img').forEach(img=>img.addEventListener('click',()=>window.open(img.src,'_blank')));
