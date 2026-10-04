const tests=[
["CBC","Complete Blood Count","₹299"],["LFT","Liver Function Test","₹399"],["RFT","Kidney / Renal Function Test","₹449"],["Lipid Profile","Cholesterol & Lipid Profile","₹499"],["TFT","Thyroid Function Test","₹399"],["HbA1c","Diabetes / Average Sugar","₹399"],["Vitamin D","25-OH Vitamin D","₹699"],["Vitamin B12","Vitamin B12","₹599"],["C-Peptide","C-Peptide Test","₹999"],["DHT & Free Testosterone","Hormone Profile","₹1,200"],["PCOD Package","PCOD Screening Package","₹1,499"],["Full Body","Complete Health Screening","₹1,599"]];
const grid=document.getElementById("testGrid"), select=document.getElementById("test");
function render(list=tests){grid.innerHTML=list.map((t,i)=>`<article class="test"><div class="ticon">${["◉","♥","⌁","◈"][i%4]}</div><h3>${t[0]}</h3><p>${t[1]}</p><div class="price">${t[2]}</div><div class="patients">1 patient • 2 patient & 3 patient pricing available</div></article>`).join("");select.innerHTML='<option value="">Select Test / Package</option>'+tests.map(t=>`<option>${t[0]}</option>`).join("")}
function filterTests(){let q=document.getElementById("search").value.toLowerCase();render(tests.filter(t=>t.join(" ").toLowerCase().includes(q)))}
function quick(q){document.getElementById("search").value=q;filterTests();document.getElementById("tests").scrollIntoView({behavior:"smooth"})}
function showAll(){document.getElementById("search").value="";render()}
function selectPackage(x){select.value=x;document.getElementById("booking").scrollIntoView({behavior:"smooth"})}
document.getElementById("bookingForm").addEventListener("submit",e=>{e.preventDefault();let msg=`Hello Tricity Thyrocare Collection Centre,%0A%0ABooking Request%0AName: ${name.value}%0AMobile: ${mobile.value}%0AAddress: ${address.value}%0APincode: ${pincode.value}%0ATest: ${test.value}%0ADate: ${date.value}%0ATime: ${time.value}`;window.open("https://wa.me/918178009011?text="+msg,"_blank")});
render();
