const pinInput=document.getElementById('pincode');
const pinSelect=document.getElementById('pinSelect');
const selectedPin=document.getElementById('selectedPin');
const pinMsg=document.getElementById('pinMsg');

function setPin(v){
  v=String(v||'').replace(/\D/g,'').slice(0,6);
  pinInput.value=v;
  if(v.length===6){
    selectedPin.textContent=v;
    pinMsg.textContent='Pincode selected. Home collection availability can be checked at booking.';
    pinMsg.style.color='#087d50';
  }else{
    pinMsg.textContent='Enter a valid 6-digit Indian PIN code.';
    pinMsg.style.color='#68778e';
  }
}
pinInput.addEventListener('input',e=>setPin(e.target.value));
pinSelect.addEventListener('change',e=>setPin(e.target.value));
// Tricity PINs are intentionally prioritised in the selector.
// The production version can replace these samples with the complete India dataset.


document.querySelectorAll('.price-card').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.price-card').forEach(c=>c.classList.remove('selected'));
    card.classList.add('selected');
  });
});
document.getElementById('clearSearch').onclick=()=>document.getElementById('testSearch').value='';
document.getElementById('searchBtn').onclick=()=>{
  const q=document.getElementById('testSearch').value.trim();
  document.getElementById('testTitle').textContent=q ? q+' Test' : 'Test / Package';
};
document.getElementById('bookBtn').onclick=()=>{
  alert('Booking form demo: Name, Mobile, Address, Pincode, Date and Time will open here.');
};