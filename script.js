const packages=[
["Jaanch Thyroid Profile - Basic",5,585],["Jaanch Thyroid Profile - Basic Plus",5,1200],
["Jaanch Thyroid Profile - Advanced",8,2995],["Jaanch Cancer Screening Breast And Ovarian",3,1385],
["Jaanch Cancer Screening Female Basic",6,2140],["Jaanch Cancer Screening Female Advanced",37,4275],
["Jaanch Cancer Screening Male Basic",3,1385],["Jaanch Cancer Screening Male Advanced",35,2140],
["Jaanch Autoimmune Screening Package",34,1799],["Jaanch Autoimmune Advanced Package",38,3499],
["Jaanch Rheumatoid Arthritis Package",38,2099],["Jaanch SLE Panel",5,4990],
["Jaanch Autoimmune Thyroid Screening Panel",6,2645],["Jaanch Celiac Disease Screening Panel",35,3925],
["Jaanch Healthy Mind Package",37,1799],["Jaanch Bone And Muscle Health",41,2135],
["Jaanch STD Profile Basic",12,2940],["Jaanch STD Profile Advanced",12,7645],
["Jaanch STD Profile Extended",14,12350],["Jaanch - PCOD (Mini)",50,2350],
["Jaanch - PCOD Basic",69,5880],["Jaanch - PCOD Advanced",73,6740],
["Jaanch Smoking Impact Package",70,2499],["Jaanch Female Hormone Screening",7,1499],
["Jaanch Male Hormone Screening",6,3599],["Jaanch - Mens Hairfall Screening Advanced",47,3495],
["Jaanch - Womens Hairfall Screening Advanced",51,3530],["Jaanch Antenatal Profile - Basic",35,1760],
["Jaanch Antenatal Profile - Advanced",51,3290],["Jaanch Post Delivery Health Check",56,2599],
["Jaanch Anemia Profile Basic",58,2560],["Jaanch Anemia Profile Advanced",70,4595],
["Jaanch Menopause Assessment Panel",20,3565]];
let cart=JSON.parse(localStorage.getItem("tt_cart")||"[]");
function save(){localStorage.setItem("tt_cart",JSON.stringify(cart));document.querySelectorAll("#count").forEach(x=>x.textContent=cart.length)}
function add(i){cart.push(packages[i]);save();alert("Package added to cart");}
const grid=document.getElementById("grid");
if(grid){packages.forEach((p,i)=>grid.innerHTML+=`<article class="card"><div class="pic">🧪</div><h3>${p[0]}</h3><div class="tests">${p[1]} Tests</div><p class="price">₹${p[2].toLocaleString("en-IN")}</p><div class="actions"><a href="#">View Details</a><button onclick="add(${i})">Add to Cart</button></div></article>`)}
const cartEl=document.getElementById("cart");
if(cartEl){if(!cart.length){cartEl.innerHTML='<div class="cartbox"><h3>Your cart is empty</h3><a class="book" href="index.html#packages">Browse Packages</a></div>'}else{let total=0;let rows=cart.map((p,i)=>{total+=p[2];return `<div class="row"><span>${p[0]}<br><small>${p[1]} Tests</small></span><b>₹${p[2].toLocaleString("en-IN")}</b></div>`}).join("");cartEl.innerHTML=`<div class="cartbox">${rows}<div class="total">Total: ₹${total.toLocaleString("en-IN")}</div><div class="form"><input placeholder="Patient Name"><input placeholder="Mobile Number"><textarea placeholder="Address"></textarea><a class="waBtn" href="https://wa.me/918178009011?text=I%20want%20to%20book%20my%20selected%20health%20packages">Book via WhatsApp • 8178009011</a></div></div>`}}
save();