/* ============================================================
   DATA STORE
   ============================================================ */

const destinations = [
  { id: 1, name: "Goa", state: "Goa", desc: "Sun-kissed beaches, vibrant nightlife and Portuguese heritage await you.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500", best: "Nov – Mar", badge: "Trending", category: "beach" },
  { id: 2, name: "Jaipur", state: "Rajasthan", desc: "The Pink City dazzles with majestic forts, palaces and bazaars.", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500", best: "Oct – Mar", badge: "Heritage", category: "history" },
  { id: 3, name: "Rishikesh", state: "Uttarakhand", desc: "Yoga capital of the world — experience thrilling rafting on the Ganga.", image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=500", best: "Sep – Jun", badge: "Adventure", category: "adventure" },
  { id: 4, name: "Leh", state: "Ladakh", desc: "Dramatic high-altitude landscapes, ancient monasteries and starry skies.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", best: "May – Sep", badge: "Offbeat", category: "adventure" },
  { id: 5, name: "Kerala", state: "South India", desc: "Backwaters, spice gardens and pristine beaches — God's Own Country.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500", best: "Oct – Feb", badge: "Scenic", category: "nature" },
  { id: 6, name: "Varanasi", state: "Uttar Pradesh", desc: "One of the world's oldest cities — a spiritual awakening on the Ganges.", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500", best: "Nov – Mar", badge: "Spiritual", category: "history" },
  { id: 7, name: "Manali", state: "Himachal Pradesh", desc: "Snow-capped peaks, adventure sports and lush Himalayan valleys.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", best: "Oct – Jun", badge: "Hill Station", category: "hills" },
  { id: 8, name: "Andaman", state: "Andaman & Nicobar", desc: "Crystal blue waters, coral reefs and untouched natural beauty.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500", best: "Oct – May", badge: "Island", category: "beach" },
];

const tourPackages = [
  { id: 1, name: "Romantic Goa Getaway", type: "honeymoon", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500", duration: "5 Days / 4 Nights", price: 18999, includes: "Flights, 4★ Hotel, Breakfast, Airport Transfer", itinerary: ["Day 1: Arrive Goa, Check-in, Calangute Beach sunset", "Day 2: North Goa beaches & water sports", "Day 3: Old Goa churches & spice plantation", "Day 4: Boat cruise & nightlife", "Day 5: Departure"], tag: "Honeymoon" },
  { id: 2, name: "Rajasthan Royal Tour", type: "family", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500", duration: "7 Days / 6 Nights", price: 32000, includes: "Train, 3★ Hotels, Breakfast, Sightseeing", itinerary: ["Day 1: Arrive Jaipur, Amber Fort", "Day 2: City Palace, Hawa Mahal", "Day 3: Drive to Jodhpur, Mehrangarh Fort", "Day 4: Jodhpur – Jaisalmer Desert", "Day 5: Camel Safari", "Day 6: Udaipur Lake Palace", "Day 7: Departure"], tag: "Family" },
  { id: 3, name: "Leh Ladakh Expedition", type: "adventure", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", duration: "8 Days / 7 Nights", price: 28500, includes: "Flights, Guesthouse, Meals, Permits", itinerary: ["Day 1: Arrive Leh, Acclimatize", "Day 2: Shanti Stupa, Leh Palace", "Day 3: Pangong Lake", "Day 4: Nubra Valley via Khardung La", "Day 5: Camel Safari, Diskit Monastery", "Day 6: Magnetic Hill, Gurudwara Pathar Sahib", "Day 7: Zanskar River Rafting", "Day 8: Departure"], tag: "Adventure" },
  { id: 4, name: "Kerala Backwater Bliss", type: "honeymoon", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500", duration: "6 Days / 5 Nights", price: 22999, includes: "Flights, Houseboat, Resort, Breakfast", itinerary: ["Day 1: Arrive Kochi, Fort Kochi walk", "Day 2: Munnar Tea Gardens", "Day 3: Thekkady Periyar Wildlife", "Day 4: Alleppey Houseboat", "Day 5: Kovalam Beach", "Day 6: Departure"], tag: "Honeymoon" },
  { id: 5, name: "Rishikesh Adventure Camp", type: "adventure", image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=500", duration: "4 Days / 3 Nights", price: 9999, includes: "Camping, Meals, Rafting, Bungee", itinerary: ["Day 1: Arrive, Evening Ganga Aarti", "Day 2: River Rafting Grade IV rapids", "Day 3: Bungee jumping, Zip-lining", "Day 4: Yoga session, Departure"], tag: "Adventure" },
  { id: 6, name: "Golden Triangle Classic", type: "family", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500", duration: "6 Days / 5 Nights", price: 16500, includes: "Train/AC Bus, 3★ Hotels, Breakfast, Guide", itinerary: ["Day 1: Delhi monuments tour", "Day 2: Delhi to Agra, Taj Mahal at sunset", "Day 3: Agra Fort, Fatehpur Sikri", "Day 4: Agra to Jaipur", "Day 5: Jaipur forts & markets", "Day 6: Return Delhi, Departure"], tag: "Family" },
];

const hotels = [
  { id: 1, name: "The Leela Palace", city: "New Delhi", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500", stars: 5, rating: 4.9, price: 9500, amenities: "Pool, Spa, Fine Dining, Gym" },
  { id: 2, name: "Taj Lake Palace", city: "Udaipur", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500", stars: 5, rating: 4.8, price: 12000, amenities: "Boat Transfer, Spa, Rooftop Pool" },
  { id: 3, name: "Zostel Rishikesh", city: "Rishikesh", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500", stars: 3, rating: 4.5, price: 1200, amenities: "River View, Yoga, Café, Wi-Fi" },
  { id: 4, name: "Grand Hyatt", city: "Goa", image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500", stars: 5, rating: 4.7, price: 7500, amenities: "Beachfront, Pool, Spa, Water Sports" },
  { id: 5, name: "Manali Ski Resort", city: "Manali", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500", stars: 4, rating: 4.4, price: 3500, amenities: "Mountain View, Ski Rentals, Bonfire" },
  { id: 6, name: "Treehouse Hideaway", city: "Bandhavgarh", image: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=500", stars: 4, rating: 4.6, price: 5200, amenities: "Jungle View, Safari, Pool, Yoga" },
];

const blogs = [
  { id: 1, title: "Top 10 Hidden Beaches in Goa", cat: "adventure", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500", excerpt: "Beyond Baga and Calangute lies a world of pristine, uncrowded beaches waiting to be discovered.", full: "Palolem, Patnem, Butterfly Beach and Cabo de Rama are among the most stunning hidden gems. Best explored on a rented scooter, these beaches offer turquoise waters, swaying palms and a serene atmosphere far from the tourist crowds. Pack a picnic, arrive early and you might have the whole beach to yourself!", date: "Dec 12, 2024", author: "Priya Sharma" },
  { id: 2, title: "Backpacking Rajasthan on ₹1000/day", cat: "budget", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500", excerpt: "Yes, you can experience India's most royal state without breaking the bank.", full: "Stay in heritage havelis-turned-hostels, eat at local dhabas, take overnight sleeper buses between cities and skip the tourist trap restaurants near monuments. Local markets offer the best value handicrafts. The real Rajasthan is found in its chai stalls and narrow bazaar lanes.", date: "Nov 28, 2024", author: "Ranjit Verma" },
  { id: 3, title: "Manali in Winter: A Snow Lover's Guide", cat: "hills", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", excerpt: "December through February transforms Manali into a magical snow-covered paradise.", full: "Rohtang Pass gets its heaviest snowfall from January, and skiing at Solang Valley starts in December. Pack thermal layers, rent proper snow boots and enjoy frozen waterfalls. Hot maggi and chai at roadside stalls taste inexplicably better in the cold. Don't miss the Hadimba Temple shrouded in snow.", date: "Nov 10, 2024", author: "Anjali Nair" },
  { id: 4, title: "The Spiritual Trail of Varanasi", cat: "history", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=500", excerpt: "Dawn on the Ganges in Varanasi is an experience that changes you forever.", full: "Wake before sunrise and take a boat ride along the ghats as the city awakens. Attend the Ganga Aarti at Dashashwamedh Ghat every evening — a spectacular ritual of fire and faith. Visit the narrow lanes of the old city, the Kashi Vishwanath Temple and Sarnath where Buddha gave his first sermon.", date: "Oct 22, 2024", author: "Sudhir Kulkarni" },
  { id: 5, title: "Rishikesh: Beyond the Rafting Hype", cat: "adventure", image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=500", excerpt: "Rishikesh offers so much more than river rafting — yoga, meditation and forest treks await.", full: "The Beatles Ashram (Chaurasi Kutia) is a fascinating ruin filled with psychedelic murals. The Neelkanth Mahadev Trek through dense forests is breathtaking. Rishikesh's café culture — particularly near Laxman Jhula — offers incredible views with your chai. Evening meditation by the river is profoundly peaceful.", date: "Oct 5, 2024", author: "Meera Iyer" },
  { id: 6, title: "Budget Kerala: Backwaters Without the Houseboat Price Tag", cat: "budget", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500", excerpt: "Experience Kerala's iconic backwaters for a fraction of the usual cost.", full: "Instead of expensive private houseboats, take the public ferry (KSRTC) between Alleppey and Kollam for just ₹60 — a 8-hour journey through the same backwaters. Stay in homestays in Kumarakom for ₹800/night. The local toddy shops serve fresh fish curry and rice meals for under ₹150.", date: "Sep 18, 2024", author: "Dev Krishnamurthy" },
];

/* Itinerary templates per destination */
const itineraryTemplates = {
  Goa: ["Arrive at Goa Airport. Check in, head to Baga Beach for sunset. Light seafood dinner.", "North Goa: Anjuna Flea Market, Fort Aguada, water sports at Calangute.", "Old Goa: Basilica of Bom Jesus, Spice Plantation tour, local cuisine.", "South Goa: Colva Beach, Cabo de Rama, evening Palolem.", "Day trip to Dudhsagar Waterfall. Pack and depart."],
  Jaipur: ["Arrive Jaipur. Check in. Bapu Bazaar for handicraft shopping.", "Amber Fort, Jal Mahal, City Palace, Jantar Mantar.", "Hawa Mahal, Nahargarh Fort sunrise, local gem market.", "Day trip to Ranthambore National Park.", "Birla Mandir, Albert Hall Museum. Depart."],
  Rishikesh: ["Arrive, settle in camp, evening Ganga Aarti at Triveni Ghat.", "Grade 3-4 White Water Rafting on Ganga, 16 km stretch.", "Bungee Jumping at Jumpin Heights, zip-lining, cliff jumping.", "Beatles Ashram, yoga session at sunrise, Neelkanth Mahadev Trek.", "Morning meditation, Laxman Jhula walk. Depart."],
  Leh: ["Arrive Leh (3500m). Acclimatize. Short walk to Hall of Fame Museum.", "Shanti Stupa, Leh Palace, Leh Market and local cuisine.", "Pangong Tso Lake 4-hour drive. Overnight near lake.", "Nubra Valley via Khardung La Pass (5359m) – world's highest road.", "Diskit Monastery, Hunder Sand Dunes, camel safari.", "Zanskar river rafting or Chadar Trek preparation.", "Magnetic Hill, Gurudwara, Hemis Monastery.", "Fly out of Leh."],
  Manali: ["Arrive Manali. Hadimba Temple, Old Manali café walk.", "Solang Valley skiing / paragliding / snow activities.", "Rohtang Pass (if open) or Naggar Castle.", "Great Himalayan National Park trek.", "Beas River fishing, Vashisht hot springs. Depart."],
  Kerala: ["Arrive Kochi. Fort Kochi walk, Chinese fishing nets, sunset Kathakali show.", "Munnar: Tea Museum, Echo Point, Mattupetty Dam.", "Thekkady: Periyar Tiger Reserve jeep safari, spice plantation.", "Alleppey: Check in houseboat, backwater cruise overnight.", "Kovalam Beach: lighthouse, Ayurvedic massage.", "Depart from Trivandrum."],
  Shimla: ["Arrive Shimla. Mall Road stroll, Scandal Point, Ridge.", "Jakhu Temple trek, Christ Church, Gaiety Theatre.", "Day trip to Kufri snow park and Fagu.", "Naldehra golf course and Chail Palace.", "Toy Train to Kalka or scenic mountain drive. Depart."],
  Varanasi: ["Arrive Varanasi. Evening boat ride on Ganga, Dashashwamedh Ghat Aarti.", "Dawn sunrise boat cruise, Tulsi Ghat, Harishchandra Ghat.", "Sarnath Buddhist pilgrimage site, Archaeological Museum.", "Kashi Vishwanath Temple, Annapurna Temple, Durga Temple.", "Old city lanes, silk weaving tour, final Ganga Aarti. Depart."],
};

/* ============================================================
   STATE
   ============================================================ */
let currentUser = JSON.parse(localStorage.getItem("ii_user")) || null;
let wishlist = JSON.parse(localStorage.getItem("ii_wishlist")) || [];
let bookings = JSON.parse(localStorage.getItem("ii_bookings")) || [];
let reviews = JSON.parse(localStorage.getItem("ii_reviews")) || [
  { name: "Arjun Mehta", rating: 5, text: "Incredible experience booking through this site. The Rajasthan trip was perfectly organized!", date: "Dec 2024" },
  { name: "Sneha Patel", rating: 4, text: "Great value packages for Goa. Customer support was very responsive.", date: "Nov 2024" },
];
let selectedRating = 0;
let currentSlide = 0;
let activePackageFilter = "all";

/* Currency rates (approximate) */
const rates = { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.79, AED: 0.044 };
const currSymbols = { USD: "$", EUR: "€", GBP: "£", JPY: "¥", AED: "د.إ" };

/* OpenWeather API key — replace with your real key */
const WEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader after page loads
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 1800);

  renderDestinations();
  renderPackages();
  renderHotels();
  renderBlogs();
  renderReviews();
  renderBookingHistory();
  renderWishlistPanel();
  updateWishCount();
  setupHeroSlider();
  setupHeroDots();
  setupNavScroll();
  setupScrollTop();
  setupDarkMode();
  setupStarRating();
  setupPackageFilters();
  setupBlogFilters();
  setupMobileMenu();
  updateLoginButton();
});

/* ============================================================
   HERO SLIDER
   ============================================================ */
function setupHeroSlider() {
  const slides = document.querySelectorAll(".slide");
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
    updateDots();
  }, 5000);
}

function setupHeroDots() {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("heroDots");
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "hero-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => {
      document.querySelectorAll(".slide")[currentSlide].classList.remove("active");
      currentSlide = i;
      document.querySelectorAll(".slide")[i].classList.add("active");
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll(".hero-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

/* ============================================================
   NAVBAR
   ============================================================ */
function setupNavScroll() {
  window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 80);
    document.getElementById("scrollTop").classList.toggle("show", window.scrollY > 400);
  });
}

function setupMobileMenu() {
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function setupScrollTop() {
  document.getElementById("scrollTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   DARK MODE
   ============================================================ */
function setupDarkMode() {
  const saved = localStorage.getItem("ii_darkmode");
  if (saved === "true") {
    document.body.classList.add("dark");
    document.getElementById("darkToggle").innerHTML = '<i class="fas fa-sun"></i>';
  }
  document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("ii_darkmode", isDark);
    document.getElementById("darkToggle").innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });
}

/* ============================================================
   RENDER DESTINATIONS
   ============================================================ */
function renderDestinations(data = destinations) {
  const grid = document.getElementById("destGrid");
  grid.innerHTML = "";
  data.forEach((d, i) => {
    const inWish = wishlist.some(w => w.id === d.id && w.type === "dest");
    const card = document.createElement("div");
    card.className = "dest-card fade-in";
    card.style.animationDelay = (i * 0.08) + "s";
    card.innerHTML = `
      <div class="dest-img">
        <img src="${d.image}" alt="${d.name}" loading="lazy"/>
        <span class="dest-badge">${d.badge}</span>
      </div>
      <div class="dest-body">
        <h3>${d.name}, ${d.state}</h3>
        <p>${d.desc}</p>
        <div class="dest-meta">
          <span><i class="fas fa-calendar-alt"></i> Best: ${d.best}</span>
          <button class="wish-btn ${inWish ? "active" : ""}" onclick="toggleWish(${d.id}, '${d.name}','${d.image}','${d.state}', this)" title="Add to Wishlist">
            ${inWish ? "❤️" : "🤍"}
          </button>
        </div>
        <button class="btn-sm" onclick="alert('Showing details for ${d.name}\\n\\nBest time: ${d.best}\\n${d.desc}')">View Details</button>
      </div>`;
    grid.appendChild(card);
  });
}

/* ============================================================
   RENDER PACKAGES
   ============================================================ */
function renderPackages(data = tourPackages) {
  const grid = document.getElementById("packagesGrid");
  const maxPrice = parseInt(document.getElementById("priceRange").value);
  let filtered = data.filter(p =>
    (activePackageFilter === "all" || p.type === activePackageFilter) && p.price <= maxPrice
  );
  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-light);grid-column:1/-1">No packages found. Try adjusting the filters.</p>`;
    return;
  }
  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "pkg-card fade-in";
    card.style.animationDelay = (i * 0.08) + "s";
    card.innerHTML = `
      <div class="pkg-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        <span class="pkg-tag">${p.tag}</span>
      </div>
      <div class="pkg-body">
        <h3>${p.name}</h3>
        <div class="pkg-meta">
          <span><i class="fas fa-clock"></i> ${p.duration}</span>
          <span><i class="fas fa-check-circle"></i> Flights + Hotel</span>
        </div>
        <p style="font-size:0.82rem;color:var(--text-light);margin-bottom:10px">${p.includes}</p>
        <div class="pkg-price">₹${p.price.toLocaleString("en-IN")} <span>per person</span></div>
        <div class="pkg-actions">
          <button class="btn-outline-sm" onclick="showPackageModal(${p.id})">View Itinerary</button>
          <button class="btn-sm" onclick="bookItem('package','${p.name}',${p.price})">Book Now</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function filterPackages() {
  const val = document.getElementById("priceRange").value;
  document.getElementById("priceVal").textContent = parseInt(val).toLocaleString("en-IN");
  renderPackages();
}

function setupPackageFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activePackageFilter = btn.dataset.filter;
      renderPackages();
    });
  });
}

function showPackageModal(id) {
  const pkg = tourPackages.find(p => p.id === id);
  if (!pkg) return;
  const content = document.getElementById("packageModalContent");
  content.innerHTML = `
    <img src="${pkg.image}" style="width:100%;height:220px;object-fit:cover;border-radius:12px;margin-bottom:20px;" alt="${pkg.name}"/>
    <h2 style="font-family:var(--font-display);margin-bottom:8px;">${pkg.name}</h2>
    <p style="color:var(--text-light);margin-bottom:16px;">${pkg.duration} | ₹${pkg.price.toLocaleString("en-IN")} per person</p>
    <h4 style="margin-bottom:10px;color:var(--saffron);">📋 Day-by-Day Itinerary</h4>
    ${pkg.itinerary.map((day, i) => `<div style="padding:10px;margin-bottom:8px;background:var(--section-bg);border-radius:8px;border-left:3px solid var(--saffron)"><strong>Day ${i+1}:</strong> <span style="font-size:0.88rem;color:var(--text-light)">${day}</span></div>`).join("")}
    <h4 style="margin:16px 0 8px;color:var(--saffron);">✅ Inclusions</h4>
    <p style="font-size:0.88rem;color:var(--text-light);margin-bottom:20px;">${pkg.includes}</p>
    <button class="btn-primary full-w" onclick="bookItem('package','${pkg.name}',${pkg.price}); closeModal('packageModal')">Book This Package</button>
  `;
  openModal("packageModal");
}

/* ============================================================
   RENDER HOTELS
   ============================================================ */
function renderHotels(data = hotels) {
  const grid = document.getElementById("hotelsGrid");
  const maxPrice = parseInt(document.getElementById("hotelPriceRange").value);
  let filtered = data.filter(h => h.price <= maxPrice);
  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-light);grid-column:1/-1">No hotels in this price range.</p>`;
    return;
  }
  filtered.forEach((h, i) => {
    const card = document.createElement("div");
    card.className = "hotel-card fade-in";
    card.style.animationDelay = (i * 0.08) + "s";
    const stars = "★".repeat(h.stars) + "☆".repeat(5 - h.stars);
    card.innerHTML = `
      <div class="hotel-img">
        <img src="${h.image}" alt="${h.name}" loading="lazy"/>
      </div>
      <div class="hotel-body">
        <h3>${h.name}</h3>
        <p class="hotel-loc"><i class="fas fa-map-marker-alt"></i> ${h.city}</p>
        <div class="stars">${stars} <span style="color:var(--text-light);font-size:0.78rem;">(${h.rating}/5)</span></div>
        <p style="font-size:0.78rem;color:var(--text-light);margin-bottom:8px;">${h.amenities}</p>
        <div class="hotel-actions">
          <div class="hotel-price">₹${h.price.toLocaleString("en-IN")} <span>/ night</span></div>
          <button class="btn-sm" onclick="bookItem('hotel','${h.name}',${h.price})">Book Now</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function filterHotels() {
  const val = document.getElementById("hotelPriceRange").value;
  document.getElementById("hotelPriceVal").textContent = parseInt(val).toLocaleString("en-IN");
  renderHotels();
}

/* ============================================================
   RENDER BLOGS
   ============================================================ */
function renderBlogs(cat = "all") {
  const grid = document.getElementById("blogGrid");
  const filtered = cat === "all" ? blogs : blogs.filter(b => b.cat === cat);
  grid.innerHTML = "";
  filtered.forEach((b, i) => {
    const card = document.createElement("div");
    card.className = "blog-card fade-in";
    card.style.animationDelay = (i * 0.08) + "s";
    card.innerHTML = `
      <div class="blog-img">
        <img src="${b.image}" alt="${b.title}" loading="lazy"/>
      </div>
      <div class="blog-body">
        <span class="blog-tag">${b.cat}</span>
        <h3>${b.title}</h3>
        <p class="blog-excerpt">${b.excerpt}</p>
        <p class="blog-full" id="blogFull_${b.id}">${b.full}</p>
        <button class="read-more-btn" onclick="toggleBlogFull(${b.id}, this)">Read More <i class="fas fa-chevron-down"></i></button>
        <div class="blog-meta"><i class="fas fa-user"></i> ${b.author} &nbsp;|&nbsp; <i class="fas fa-calendar"></i> ${b.date}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function toggleBlogFull(id, btn) {
  const el = document.getElementById(`blogFull_${id}`);
  const isOpen = el.style.display === "block";
  el.style.display = isOpen ? "none" : "block";
  btn.innerHTML = isOpen
    ? 'Read More <i class="fas fa-chevron-down"></i>'
    : 'Read Less <i class="fas fa-chevron-up"></i>';
}

function setupBlogFilters() {
  document.querySelectorAll(".blog-cat").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".blog-cat").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderBlogs(btn.dataset.cat);
    });
  });
}

/* ============================================================
   AI ITINERARY PLANNER
   ============================================================ */
function generateItinerary() {
  const dest = document.getElementById("planDest").value;
  const type = document.getElementById("planType").value;
  const start = document.getElementById("planStart").value;
  const end = document.getElementById("planEnd").value;
  const budget = document.getElementById("planBudget").value;
  const travellers = document.getElementById("planTravellers").value;

  if (!dest || !type || !start || !end || !budget) {
    alert("Please fill all fields to generate your itinerary.");
    return;
  }

  const startDate = new Date(start);
  const endDate = new Date(end);
  const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    alert("End date must be after start date.");
    return;
  }

  const template = itineraryTemplates[dest] || [];
  const output = document.getElementById("plannerOutput");
  const content = document.getElementById("itineraryContent");

  const budgetPerDay = Math.round(budget / days);
  const budgetNote = budgetPerDay < 2000
    ? "💡 Tip: Budget-focused trip. Consider hostels & local transport."
    : budgetPerDay < 5000
    ? "💡 Tip: Mid-range trip. Comfortable hotels & some dining out."
    : "💡 Tip: Premium trip. Consider luxury hotels & guided tours.";

  let html = `
    <div style="background:var(--section-bg);padding:12px;border-radius:8px;margin-bottom:16px;font-size:0.85rem;color:var(--text-light)">
      <strong>📍 ${dest}</strong> | ${type} Trip | ${days} Days | ₹${parseInt(budget).toLocaleString("en-IN")} total<br>
      👥 ${travellers} Traveller(s) | ₹${budgetPerDay.toLocaleString("en-IN")}/day<br>
      ${budgetNote}
    </div>`;

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dayStr = date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" });
    const activity = template[i] || generateGenericDay(dest, i + 1, type);
    html += `
      <div class="itin-day">
        <h4>Day ${i + 1} — ${dayStr}</h4>
        <p>${activity}</p>
      </div>`;
  }

  html += `<div style="font-size:0.8rem;color:var(--text-light);text-align:center;margin-top:12px;">✨ AI-generated suggestion. Actual itinerary may vary.</div>`;
  content.innerHTML = html;
  output.style.display = "block";
  output.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function generateGenericDay(dest, day, type) {
  const activities = {
    Honeymoon: ["Sunset beach walk and candlelight dinner", "Couple's spa and leisure day", "Boat cruise and local cuisine", "Photography walk through scenic spots", "Shopping for souvenirs and evening entertainment"],
    Family: ["Visit main monument and local market", "Theme park or children's activity zone", "Nature walk and picnic", "Cultural show and local food tour", "Shopping day and leisure time"],
    Adventure: ["Morning trekking session", "White water rafting or rock climbing", "Paragliding or zip-lining adventure", "Night camping under the stars", "Cycling trail or ATV ride"],
    Solo: ["Explore local neighbourhood on foot", "Museum and gallery hopping", "Day hike to scenic viewpoint", "Evening at local café and journaling", "Sunrise photography session"],
  };
  const opts = activities[type] || activities.Solo;
  return `Explore ${dest}: ${opts[(day - 1) % opts.length]}.`;
}

/* ============================================================
   WEATHER API
   ============================================================ */
async function fetchWeather() {
  const city = document.getElementById("weatherCity").value.trim();
  const result = document.getElementById("weatherResult");
  if (!city) { alert("Please enter a city name."); return; }

  result.innerHTML = `<div class="weather-icon">⏳</div><p>Fetching weather...</p>`;

  // If user hasn't set an API key, show a realistic demo
  if (WEATHER_API_KEY === "YOUR_OPENWEATHER_API_KEY") {
    showDemoWeather(city, result);
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    const icon = getWeatherEmoji(data.weather[0].main);
    result.innerHTML = `
      <div class="weather-icon">${icon}</div>
      <div class="weather-temp">${Math.round(data.main.temp)}°C</div>
      <div class="weather-desc">${data.weather[0].description}</div>
      <p style="font-weight:600;font-size:1.1rem;margin-bottom:8px">${data.name}, ${data.sys.country}</p>
      <div class="weather-details">
        <div class="weather-detail"><i class="fas fa-tint"></i> ${data.main.humidity}% Humidity</div>
        <div class="weather-detail"><i class="fas fa-wind"></i> ${data.wind.speed} m/s Wind</div>
        <div class="weather-detail"><i class="fas fa-thermometer-half"></i> Feels like ${Math.round(data.main.feels_like)}°C</div>
      </div>`;
  } catch (e) {
    showDemoWeather(city, result);
  }
}

function showDemoWeather(city, result) {
  const demos = {
    "Goa": { temp: 32, desc: "Partly Cloudy", humidity: 72, wind: 14, feels: 36, icon: "⛅" },
    "Jaipur": { temp: 26, desc: "Clear Sky", humidity: 38, wind: 8, feels: 27, icon: "☀️" },
    "Manali": { temp: -2, desc: "Heavy Snowfall", humidity: 85, wind: 22, feels: -8, icon: "❄️" },
    "Rishikesh": { temp: 19, desc: "Clear Sky", humidity: 52, wind: 6, feels: 18, icon: "🌤️" },
    "Leh": { temp: 4, desc: "Sunny & Cold", humidity: 28, wind: 12, feels: -1, icon: "🌨️" },
    "Kerala": { temp: 30, desc: "Humid & Overcast", humidity: 88, wind: 10, feels: 35, icon: "🌧️" },
  };
  const w = demos[city] || { temp: 24, desc: "Partly Cloudy", humidity: 60, wind: 10, feels: 26, icon: "🌤️" };
  result.innerHTML = `
    <div class="weather-icon">${w.icon}</div>
    <div class="weather-temp">${w.temp}°C</div>
    <div class="weather-desc">${w.desc}</div>
    <p style="font-weight:600;font-size:1.1rem;margin-bottom:8px">${city}, India</p>
    <div class="weather-details">
      <div class="weather-detail"><i class="fas fa-tint"></i> ${w.humidity}% Humidity</div>
      <div class="weather-detail"><i class="fas fa-wind"></i> ${w.wind} km/h Wind</div>
      <div class="weather-detail"><i class="fas fa-thermometer-half"></i> Feels like ${w.feels}°C</div>
    </div>
    <p style="font-size:0.75rem;color:var(--text-light);margin-top:10px;">⚠️ Demo data. Add OpenWeather API key for live weather.</p>`;
}

function getWeatherEmoji(condition) {
  const map = { Clear: "☀️", Clouds: "⛅", Rain: "🌧️", Drizzle: "🌦️", Thunderstorm: "⛈️", Snow: "❄️", Mist: "🌫️", Haze: "🌫️" };
  return map[condition] || "🌤️";
}

/* ============================================================
   CURRENCY CONVERTER
   ============================================================ */
function convertCurrency() {
  const amount = parseFloat(document.getElementById("inrAmount").value);
  const target = document.getElementById("currencyTarget").value;
  const result = document.getElementById("currencyResult");
  if (!amount || isNaN(amount)) { result.textContent = "Enter amount above"; return; }
  const converted = (amount * rates[target]).toFixed(2);
  result.textContent = `${currSymbols[target]} ${parseFloat(converted).toLocaleString("en-US")} ${target}`;
}

/* ============================================================
   GOOGLE MAPS
   ============================================================ */
const mapQueries = {
  india: "India&z=5",
  goa: "Goa,India&z=11",
  jaipur: "Jaipur,Rajasthan,India&z=12",
  rishikesh: "Rishikesh,Uttarakhand,India&z=13",
  leh: "Leh,Ladakh,India&z=11",
  manali: "Manali,Himachal Pradesh,India&z=12",
};

function updateMap() {
  const key = document.getElementById("mapSelect").value;
  const q = mapQueries[key] || "India&z=5";
  document.getElementById("googleMap").src =
    `https://maps.google.com/maps?q=${q}&t=&ie=UTF8&iwloc=&output=embed`;
}

/* ============================================================
   HERO SEARCH
   ============================================================ */
function handleSearch() {
  const query = document.getElementById("heroSearch").value.toLowerCase().trim();
  if (!query) { document.getElementById("destinations").scrollIntoView({ behavior: "smooth" }); return; }
  const found = destinations.filter(d =>
    d.name.toLowerCase().includes(query) || d.state.toLowerCase().includes(query) ||
    d.badge.toLowerCase().includes(query) || d.category.toLowerCase().includes(query)
  );
  renderDestinations(found.length ? found : destinations);
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
  if (!found.length) setTimeout(() => alert(`No results for "${query}". Showing all destinations.`), 500);
}

document.addEventListener("keydown", e => {
  if (e.key === "Enter" && document.activeElement.id === "heroSearch") handleSearch();
});

/* ============================================================
   BOOKING SYSTEM
   ============================================================ */
function bookItem(type, name, price) {
  if (!currentUser) {
    alert("Please login to book!");
    openModal("loginModal");
    return;
  }
  const booking = {
    id: "IND" + Date.now(),
    type, name, price,
    user: currentUser.name,
    date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    status: "Confirmed"
  };
  bookings.unshift(booking);
  localStorage.setItem("ii_bookings", JSON.stringify(bookings));
  renderBookingHistory();
  showBookingConfirmation(booking);
}

function showBookingConfirmation(booking) {
  document.getElementById("bookingModalContent").innerHTML = `
    <div class="booking-success">
      <div class="success-icon">🎉</div>
      <h3>Booking Confirmed!</h3>
      <p>Thank you, <strong>${booking.user}</strong>!</p>
      <p>Your booking for <strong>${booking.name}</strong> is confirmed.</p>
      <div class="booking-ref">Ref: ${booking.id}</div>
      <p>Amount: <strong>₹${booking.price.toLocaleString("en-IN")}</strong></p>
      <p>Date: ${booking.date}</p>
      <p style="margin-top:14px;color:var(--text-light);font-size:0.82rem;">Confirmation details have been saved to your profile.</p>
      <button class="btn-primary full-w" style="margin-top:20px;" onclick="closeModal('bookingModal')">Done</button>
    </div>`;
  openModal("bookingModal");
}

function renderBookingHistory() {
  const container = document.getElementById("bookingHistory");
  if (!currentUser || bookings.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-light)">No bookings yet. <a href="#packages" style="color:var(--saffron)">Explore packages →</a></p>`;
    return;
  }
  container.innerHTML = bookings.map(b => `
    <div class="bh-item">
      <div class="bh-info">
        <h4>${b.name}</h4>
        <p>${b.type.charAt(0).toUpperCase() + b.type.slice(1)} | Booked: ${b.date} | Ref: ${b.id}</p>
      </div>
      <div>
        <div style="font-weight:700;color:var(--saffron);margin-bottom:6px;">₹${b.price.toLocaleString("en-IN")}</div>
        <span class="bh-badge">✅ ${b.status}</span>
      </div>
    </div>`).join("");
}

/* ============================================================
   WISHLIST
   ============================================================ */
function toggleWish(id, name, image, loc, btn) {
  const idx = wishlist.findIndex(w => w.id === id && w.type === "dest");
  if (idx > -1) {
    wishlist.splice(idx, 1);
    btn.textContent = "🤍";
    btn.classList.remove("active");
  } else {
    wishlist.push({ id, type: "dest", name, image, loc });
    btn.textContent = "❤️";
    btn.classList.add("active");
  }
  localStorage.setItem("ii_wishlist", JSON.stringify(wishlist));
  updateWishCount();
  renderWishlistPanel();
}

function updateWishCount() {
  document.getElementById("wishCount").textContent = wishlist.length;
}

function renderWishlistPanel() {
  const container = document.getElementById("wishlistItems");
  if (!wishlist.length) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-light);padding:20px;">Your wishlist is empty. ❤️ destinations to save them.</p>`;
    return;
  }
  container.innerHTML = wishlist.map(w => `
    <div class="wish-item">
      <img src="${w.image}" alt="${w.name}"/>
      <div>
        <div class="wi-name">${w.name}</div>
        <div class="wi-loc">${w.loc}</div>
      </div>
    </div>`).join("");
}

function toggleWishlist() {
  document.getElementById("wishlistPanel").classList.toggle("open");
}
document.getElementById("wishlistToggle").addEventListener("click", toggleWishlist);

/* ============================================================
   AUTH – LOGIN / SIGNUP
   ============================================================ */
function openModal(id) {
  document.getElementById(id).classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  document.body.style.overflow = "";
}
document.getElementById("openLogin").addEventListener("click", e => {
  e.preventDefault();
  openModal("loginModal");
});
// Close on overlay click
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

function switchTab(tabId, modalId) {
  const modal = document.getElementById(modalId);
  modal.querySelectorAll(".modal-body").forEach(t => t.style.display = "none");
  modal.querySelectorAll(".mtab").forEach(t => t.classList.remove("active"));
  document.getElementById(tabId).style.display = "block";
  modal.querySelectorAll(".mtab").forEach(t => {
    if (t.textContent.toLowerCase().includes(tabId.replace("Tab", "").toLowerCase())) t.classList.add("active");
  });
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPass").value;
  const msg = document.getElementById("loginMsg");
  const users = JSON.parse(localStorage.getItem("ii_users")) || [];
  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) {
    msg.textContent = "Invalid credentials. Please try again.";
    msg.className = "form-msg error";
    return;
  }
  currentUser = user;
  localStorage.setItem("ii_user", JSON.stringify(user));
  msg.textContent = `Welcome back, ${user.name}! 🎉`;
  msg.className = "form-msg success";
  updateLoginButton();
  renderBookingHistory();
  setTimeout(() => closeModal("loginModal"), 1000);
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const pass = document.getElementById("signupPass").value;
  const msg = document.getElementById("signupMsg");
  const users = JSON.parse(localStorage.getItem("ii_users")) || [];
  if (users.find(u => u.email === email)) {
    msg.textContent = "Email already registered. Please login.";
    msg.className = "form-msg error"; return;
  }
  const newUser = { name, email, pass };
  users.push(newUser);
  localStorage.setItem("ii_users", JSON.stringify(users));
  currentUser = newUser;
  localStorage.setItem("ii_user", JSON.stringify(newUser));
  msg.textContent = `Account created! Welcome, ${name}! 🎊`;
  msg.className = "form-msg success";
  updateLoginButton();
  setTimeout(() => closeModal("loginModal"), 1000);
}

function updateLoginButton() {
  const btn = document.getElementById("openLogin");
  if (currentUser) {
    btn.textContent = `👤 ${currentUser.name.split(" ")[0]}`;
    btn.onclick = e => {
      e.preventDefault();
      if (confirm(`Logged in as ${currentUser.name}. Logout?`)) {
        currentUser = null;
        localStorage.removeItem("ii_user");
        btn.textContent = "Login";
        btn.onclick = e2 => { e2.preventDefault(); openModal("loginModal"); };
        renderBookingHistory();
      }
    };
  }
}

/* ============================================================
   STAR RATING & REVIEWS
   ============================================================ */
function setupStarRating() {
  const stars = document.querySelectorAll("#starRating span");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.val);
      stars.forEach(s => s.classList.toggle("active", parseInt(s.dataset.val) <= selectedRating));
    });
    star.addEventListener("mouseover", () => {
      stars.forEach(s => s.classList.toggle("active", parseInt(s.dataset.val) <= parseInt(star.dataset.val)));
    });
    star.addEventListener("mouseout", () => {
      stars.forEach(s => s.classList.toggle("active", parseInt(s.dataset.val) <= selectedRating));
    });
  });
}

function submitReview() {
  const name = document.getElementById("reviewName").value.trim();
  const text = document.getElementById("reviewText").value.trim();
  if (!name || !text) { alert("Please enter your name and review."); return; }
  if (!selectedRating) { alert("Please select a star rating."); return; }
  const review = {
    name, rating: selectedRating, text,
    date: new Date().toLocaleDateString("en-IN", { month: "short", year: "numeric" })
  };
  reviews.unshift(review);
  localStorage.setItem("ii_reviews", JSON.stringify(reviews));
  renderReviews();
  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  document.querySelectorAll("#starRating span").forEach(s => s.classList.remove("active"));
}

function renderReviews() {
  const list = document.getElementById("reviewsList");
  list.innerHTML = reviews.map(r => `
    <div class="review-item">
      <div class="rev-header">
        <span class="rev-name">${r.name}</span>
        <span class="rev-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
      </div>
      <p class="rev-text">${r.text}</p>
      <p class="rev-date">${r.date}</p>
    </div>`).join("");
}

/* ============================================================
   NEWSLETTER
   ============================================================ */
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById("newsEmail").value;
  const subs = JSON.parse(localStorage.getItem("ii_subs")) || [];
  if (subs.includes(email)) { alert("You're already subscribed!"); return; }
  subs.push(email);
  localStorage.setItem("ii_subs", JSON.stringify(subs));
  alert(`🎉 Subscribed successfully! Watch ${email} for amazing deals.`);
  document.getElementById("newsEmail").value = "";
}
