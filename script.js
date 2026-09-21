let cart=JSON.parse(localStorage.getItem("ttccart")||"[]");
const $=id=>document.getElementById(id);
function save(){localStorage.setItem("ttccart",JSON.stringify(cart));$("count").textContent=cart.length}
function add(name,price){cart.push({name,price});save();openCart()}
function openCart(){renderCart();$("cartModal").classList.add("show")}
function closeCart(){$("cartModal").classList.remove("show")}
function renderCart(){let b=$("cartItems");if(!cart.length){b.innerHTML="<p>Your cart is empty.</p>"}else{b.innerHTML=cart.map((x,i)=>`<div class="cart-row"><span>${x.name}<br><b>₹${x.price}</b></span><button onclick="removeItem(${i})">Remove</button></div>`).join("")}$("total").textContent="₹"+cart.reduce((a,x)=>a+x.price,0)}
function removeItem(i){cart.splice(i,1);save();renderCart()}
function openBooking(){$("bookingModal").classList.add("show")}
function closeBooking(){$("bookingModal").classList.remove("show")}
function checkout(){closeCart();$("item").value=cart.map(x=>x.name).join(", ");openBooking()}
function booking(e){e.preventDefault();let f=e.target,n=f[0].value,p=f[1].value,d=f[2].value,i=$("item").value||"Test / Package";let m=`Hello Tricity Thyrocare Collection Centre,%0AName: ${n}%0AMobile: ${p}%0ADate: ${d}%0ATest/Package: ${i}`;window.open("https://wa.me/918178009011?text="+m,"_blank")}
function searchSite(){let q=$("search").value.trim();if(q){location.hash="packages";alert("Search: "+q)}}
save();
