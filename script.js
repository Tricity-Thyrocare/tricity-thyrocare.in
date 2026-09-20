const packages = [
  ["Jaanch Cancer Screening Breast And Ovarian", 3, 1385, "Cancer Screening"],
  ["Jaanch Cancer Screening Female Basic", 6, 2140, "Cancer Screening"],
  ["Jaanch Cancer Screening Female Advanced", 37, 4275, "Cancer Screening"],
  ["Jaanch Cancer Screening Male Basic", 3, 1385, "Cancer Screening"],
  ["Jaanch Cancer Screening Male Advanced", 35, 2140, "Cancer Screening"],

  ["Jaanch - Mens Hairfall Screening Advanced", 47, 3495, "Hair Fall"],
  ["Jaanch - Womens Hairfall Screening Advanced", 51, 3530, "Hair Fall"],

  ["Jaanch Thyroid Profile - Basic", 5, 585, "Thyroid"],
  ["Jaanch Thyroid Profile - Basic Plus", 5, 1200, "Thyroid"],
  ["Jaanch Thyroid Profile - Advanced", 8, 2995, "Thyroid"],

  ["Jaanch Female Hormone Screening", 7, 1499, "Hormone Check"],
  ["Jaanch Male Hormone Screening", 6, 3599, "Hormone Check"],

  ["Jaanch Antenatal Profile - Basic", 35, 1760, "Women's Health"],
  ["Jaanch Antenatal Profile - Advanced", 51, 3290, "Women's Health"],
  ["Jaanch Post Delivery Health Check", 56, 2599, "Women's Health"],
  ["Jaanch Anemia Profile Basic", 58, 2560, "Women's Health"],
  ["Jaanch Anemia Profile Advanced", 70, 4595, "Women's Health"],
  ["Jaanch Menopause Assessment Panel", 20, 3565, "Women's Health"],

  ["Jaanch – PCOD (Mini)", 50, 2350, "Women's Health"],
  ["Jaanch – PCOD Basic", 69, 5880, "Women's Health"],
  ["Jaanch – PCOD Advanced", 73, 6740, "Women's Health"],

  ["Jaanch STD Profile Basic", 12, 2940, "STDs"],
  ["Jaanch STD Profile Advanced", 12, 7645, "STDs"],
  ["Jaanch STD Profile Extended", 14, 12350, "STDs"],

  ["Jaanch Healthy Mind Package", 37, 1799, "Healthy Mind"],
  ["Jaanch Bone And Muscle Health", 41, 2135, "Bone & Muscle"],

  ["Jaanch Smoking Impact Package", 70, 2499, "Respiratory"],

  ["Jaanch Autoimmune Screening Package", 34, 1799, "Autoimmunity"],
  ["Jaanch Autoimmune Advanced Package", 38, 3499, "Autoimmunity"],
  ["Jaanch Rheumatoid Arthritis Package", 38, 2099, "Autoimmunity"],
  ["Jaanch SLE Panel", 5, 4990, "Autoimmunity"],
  ["Jaanch Autoimmune Thyroid Screening Panel", 6, 2645, "Autoimmunity"],
  ["Jaanch Celiac Disease Screening Panel", 35, 3925, "Autoimmunity"]
];


/* =========================
   PACKAGE CARD DESIGN
========================= */

const packageCardStyle = document.createElement("style");

packageCardStyle.textContent = `
#cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

#cards .card {
  overflow: hidden;
  border: 1px solid #e9edf4;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 12px 40px rgba(37,52,75,.06);
  transition: .2s ease;
}

#cards .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 55px rgba(37,52,75,.10);
}

#cards .card-img {
  height: 150px;
  background: #f6f8fc;
  overflow: hidden;
}

#cards .card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

#cards .card-body {
  padding: 18px;
}

#cards .tag {
  font-size: 9px;
  letter-spacing: .7px;
  color: #6371e5;
  font-weight: 800;
}

#cards .card h3 {
  font-size: 16px;
  line-height: 1.35;
  margin: 8px 0 10px;
  min-height: 44px;
}

#cards .price {
  display: flex;
  align-items: center;
}

#cards .price b {
  font-size: 21px;
  color: #162b55;
}

#cards .card button {
  width: 100%;
  margin-top: 13px;
}

@media (max-width: 1000px) {
  #cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  #cards {
    grid-template-columns: 1fr;
  }

  #cards .card-img {
    height: 180px;
  }
}
`;

document.head.appendChild(packageCardStyle);


/* =========================
   PACKAGE CARDS
========================= */

const cards = document.getElementById("cards");
const sel = document.getElementById("package");

if (cards) {

  packages.forEach((p) => {

    const safeName = p[0]
      .replace(/'/g, "&#39;")
      .replace(/"/g, "&quot;");

    const bookingName = p[0].replace(/'/g, "\\'");

    cards.innerHTML += `
      <article class="card">

        <div class="card-img">
          <img
            src="assets/popup-offer.jpg"
            alt="${safeName}"
            loading="lazy"
          >
        </div>

        <div class="card-body">

          <span class="tag">
            ${p[1]} PARAMETERS • ${p[3]}
          </span>

          <h3>${safeName}</h3>

          <div class="price">
            <b>₹${p[2]}</b>
          </div>

          <button
            class="btn primary"
            onclick="openBooking('${bookingName}')">
            Book Now →
          </button>

        </div>

      </article>
    `;
  });
}


/* =========================
   BOOKING PACKAGE DROPDOWN
========================= */

if (sel) {

  packages.forEach((p) => {

    const option = document.createElement("option");

    option.value = p[0];
    option.textContent = `${p[0]} — ₹${p[2]}`;

    sel.appendChild(option);
  });

  sel.innerHTML += `
    <option value="Thyroid Profile">Thyroid Profile</option>
    <option value="Diabetes Profile">Diabetes Profile</option>
    <option value="Lipid Profile">Lipid Profile</option>
    <option value="Liver Function Test">Liver Function Test</option>
    <option value="Kidney Function Test">Kidney Function Test</option>
    <option value="Other Blood Test">Other Blood Test</option>
  `;
}


/* =========================
   BOOKING MODAL
========================= */

function openBooking(pkg = "") {

  const modal = document.getElementById("modal");

  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  if (pkg && sel) {
    sel.value = pkg;
  }
}


function closeBooking() {

  const modal = document.getElementById("modal");

  if (modal) {
    modal.classList.remove("show");
  }

  document.body.style.overflow = "";
}


/* =========================
   POPUP
========================= */

function closePopup() {

  const popup = document.getElementById("popup");

  if (popup) {
    popup.classList.remove("show");
  }
}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

  const nav = document.querySelector("nav");

  if (nav) {
    nav.classList.toggle("mobile-open");
  }
}


/* =========================
   CATEGORY BUTTON
========================= */

function category(name) {
  openBooking(name);
}


/* =========================
   DATE MINIMUM
========================= */

const dateInput = document.getElementById("date");

if (dateInput) {
  dateInput.min = new Date()
    .toISOString()
    .split("T")[0];
}


/* =========================
   WHATSAPP BOOKING
========================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

  bookingForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
      document.getElementById("name")?.value || "";

    const mobile =
      document.getElementById("mobile")?.value || "";

    const age =
      document.getElementById("age")?.value || "";

    const collection =
      document.getElementById("collection")?.value || "";

    const date =
      document.getElementById("date")?.value || "";

    const slot =
      document.getElementById("slot")?.value || "";

    const pin =
      document.getElementById("pin")?.value || "";

    const address =
      document.getElementById("address")?.value || "";

    const selectedPackage =
      sel?.value || "";


    const message =
`*TRICITY THYROCARE COLLECTION CENTRE*

*BOOKING REQUEST*

*Test / Package:* ${selectedPackage}

*Patient Name:* ${name}

*Mobile:* ${mobile}

*Age:* ${age}

*Collection:* ${collection}

*Date:* ${date}

*Slot:* ${slot}

*Pincode:* ${pin}

*Address:* ${address}`;


    const whatsappURL =
      "https://wa.me/918178009011?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

  });
}


/* =========================
   OFFER POPUP
========================= */

window.addEventListener("load", function() {

  setTimeout(function() {

    const popup = document.getElementById("popup");

    if (popup) {
      popup.classList.add("show");
    }

  }, 1800);

});


/* =========================
   CLOSE POPUP ON BACKGROUND
========================= */

const popup = document.getElementById("popup");

if (popup) {

  popup.addEventListener("click", function(e) {

    if (e.target.id === "popup") {
      closePopup();
    }

  });
}


/* =========================
   CLOSE MODAL ON BACKGROUND
========================= */

const modal = document.getElementById("modal");

if (modal) {

  modal.addEventListener("click", function(e) {

    if (e.target.id === "modal") {
      closeBooking();
    }

  });
}
