const IMGS = {"images/beef.jpg": "images/beef.jpg", "images/food.jpg": "images/food.jpg", "images/logo.jpg": "images/logo.jpg", "images/porkchicken.jpg": "images/porkchicken.jpg", "images/seafood.jpg": "images/seafood.jpg", "images/sides.jpg": "images/sides.jpg", "images/soup.jpg": "images/soup.jpg", "images/store.jpg": "images/store.jpg", "images/veggies.jpg": "images/veggies.jpg", "images/mushrooms.jpg": "images/mushrooms.jpg", "images/tofu.jpg": "images/tofu.jpg", "images/dipping.jpg": "images/dipping.jpg", "images/howto.jpg": "images/howto.jpg"};

// ============ EDIT THIS FILE to change the website ============
// Prices, names, reviews and hours are SAMPLES. Replace them with the real ones.
const CONFIG = {
  name: "The Famous Japanese Shabu-Shabu",
  shortName: "The Famous Shabu-Shabu",
  slogan: "Fresh Ingredients, Great Flavor, Together at the Table.",
  tagline: "A Japanese hot pot ritual. We bring the finest slices and a steaming pot of broth. You and your friends cook together, slowly, the way it was meant to be.",
  handle: "@TheFamousShabuShabu",
  currency: "₱",
  deliveryFee: 50,                 // added when order type is Delivery
  adminPassword: "admin123",       // CHANGE THIS (visible in source, demo only)
  hours: "Daily · 11:00 AM – 10:00 PM",
  address: "Add your shop address here",
  phone: "Add your mobile number",
  social: { facebook: "#", instagram: "#", tiktok: "#" },
  soups: ["Original broth", "Miso", "Spicy"],
  // Describe each broth. heat = 0 (mild) to 3 (very hot). Names must match "soups" above.
  broths: [
    { name: "Original broth", heat: 0, icon: "🍵", desc: "A clear dashi simmered from kombu (kelp) and katsuobushi (bonito flakes). Light, clean and gentle, it lets the flavor of the meat and vegetables shine. Best for first-timers and seafood." },
    { name: "Miso", heat: 1, icon: "🥣", desc: "Smooth, savory white miso with a gentle sweetness, finished with a touch of sesame. Rich and comforting, and a favorite with beef and pork." },
    { name: "Spicy", heat: 3, icon: "🌶️", desc: "A bold chili broth with sesame, garlic and roasted chili. Warm, aromatic and full of heat. For those who like the fire." }
  ],
  orderTypes: ["Dine-in", "Pickup", "Delivery"],
  payments: ["Cash (pay at counter / on delivery)", "GCash"],
  // Main hot pots. heat = spice level, serves = portion, ingredients = what comes on the plate.
  menu: [
    { id: "chicken", img: "images/porkchicken.jpg", name: "Chicken Shabu-Shabu", price: 299, kanji: "鶏", serves: "1–2 people", heat: 0, desc: "Thinly sliced chicken thigh, which stays tender and juicy in the broth. Served with napa cabbage, enoki, shiitake and silken tofu for a light, nourishing pot.", ingredients: ["Chicken thigh slices", "Napa cabbage", "Enoki", "Shiitake", "Tofu"], badge: "" },
    { id: "pork", img: "images/porkchicken.jpg", name: "Pork Shabu-Shabu", price: 349, kanji: "豚", serves: "1–2 people", heat: 0, desc: "Lightly marbled pork belly, sliced paper-thin. It turns sweet and savory in the broth and pairs well with seasonal greens and leeks.", ingredients: ["Pork belly slices", "Spinach", "Leek", "Shiitake", "Tofu"], badge: "" },
    { id: "beef", img: "images/beef.jpg", name: "Beef Shabu-Shabu", price: 399, kanji: "牛", serves: "2 people", heat: 1, desc: "Premium beef sliced thin enough to cook in seconds. Swish it in the broth until it turns pink, then dip. Our most-ordered pot, with glass noodles to soak up the broth.", ingredients: ["Premium beef slices", "Napa cabbage", "Enoki", "Shiitake", "Tofu", "Glass noodles"], badge: "Best seller" },
    { id: "seafood", img: "images/seafood.jpg", name: "Seafood Shabu-Shabu", price: 449, kanji: "海", serves: "2 people", heat: 1, desc: "Fresh prawns, scallops, mussels and salmon with a fish fillet and seaweed. Seafood cooks fast, so dip for about 30 seconds. Best in the Original or Miso broth.", ingredients: ["Prawns", "Scallops", "Mussels", "Salmon", "Fish fillet", "Seaweed"], badge: "Chef's pick" },
    { id: "family", img: "images/soup.jpg", name: "Family Hot Pot Package", price: 999, kanji: "家", serves: "4–6 people", heat: 2, desc: "A big shared pot for the whole table: beef, pork, chicken and seafood, a full vegetable platter, rice for four and all four house sauces. Ideal for birthdays and family dinners.", ingredients: ["Beef, pork & chicken", "Seafood platter", "Full vegetable platter", "Rice for 4", "Dipping sauces"], badge: "Good for groups" }
  ],
  // Extras to add with any hot pot.
  addons: [
    { id: "rice", img: "images/sides.jpg", name: "Steamed Japanese Rice", price: 60, desc: "Fluffy Japanese short-grain rice, served warm. Ideal for soaking up the broth at the end of your meal.", kanji: "飯" },
    { id: "matcha", img: "images/sides.jpg", name: "Matcha Latte", price: 110, desc: "Creamy iced matcha latte made with ceremonial-style matcha. Smooth and earthy, with a light sweetness.", kanji: "茶" },
    { id: "dessert", img: "images/sides.jpg", name: "Matcha & Mochi Dessert", price: 120, desc: "Matcha soft-serve topped with sweet red bean paste (anko) and chewy mochi. A cool, classic finish after a hot pot.", kanji: "甘" }
  ],
  // Dipping sauces served with every pot (for display only).
  dipping: [
    { name: "Goma Sauce", desc: "Creamy sesame with a nutty finish." },
    { name: "Ponzu", desc: "Citrusy soy with a light tang." },
    { name: "Chili Ponzu", desc: "Ponzu with a gentle kick." },
    { name: "Yuzu Pepper", desc: "Bright yuzu with a fragrant bite." }
  ],
  // Promotions shown on the Offers page
  promos: [
    { title: "Opening Discount", text: "A welcome offer for our first customers.", terms: "Sample terms: valid for dine-in during opening weeks.", tag: "Limited" },
    { title: "Student Discount", text: "Show your school ID and save on every hot pot.", terms: "Sample terms: valid with a valid school ID.", tag: "Every day" },
    { title: "Group Packages", text: "Bring friends and family and share one big pot.", terms: "Sample terms: for 4 or more guests, reservation required.", tag: "Groups" },
    { title: "Birthday Treat", text: "Celebrate your day with a free dessert for the birthday guest.", terms: "Sample terms: show a valid ID on the day.", tag: "Special" }
  ],
  // Stats strip on the Home page
  stats: [
    { num: "5", label: "Signature hot pots" },
    { num: "3", label: "Handcrafted broths" },
    { num: "Daily", label: "Fresh ingredients" },
    { num: "100%", label: "Cook it yourself" }
  ],
  // Steps shown on the Home page (the ritual)
  ritual: [
    { t: "Pick your broth", d: "Miso, spicy or original. Each pot is simmered fresh every day." },
    { t: "Choose your slices", d: "Beef, pork, chicken or seafood, with seasonal vegetables and mushrooms." },
    { t: "Cook together", d: "Swish each slice in the hot pot until just done, then share the joy." },
    { t: "Dip and enjoy", d: "Finish with rice, drinks and dessert, and dip in our house sauces." }
  ],
  // Customer feedback shown on the site (SAMPLE text, replace with real feedback)
  reviews: [
    { name: "Mia & friends", text: "The food was delicious and so fresh. Cooking our own hot pot together made the night so fun." },
    { name: "Carlo R.", text: "Best beef slices in town. The miso broth was rich and comforting." },
    { name: "Dani L.", text: "Cozy Japanese vibe, perfect for families and birthdays. We will be back!" }
  ],
  faq: [
    { q: "Do I cook the food myself?", a: "Yes! Shabu-shabu is a hot pot you cook at your table. Our staff will help you get started." },
    { q: "Do you accept reservations?", a: "Yes. Reserve a table for groups and special occasions from the Reserve page." },
    { q: "Are there vegetarian options?", a: "Yes. Ask our staff about vegetable-only broths and extra vegetable platters." },
    { q: "Can I track my order?", a: "Yes. Use the Track order button with the order number on your receipt." },
    { q: "How long does it take to cook?", a: "Thin slices cook in a few seconds. Beef takes about 10 to 15 seconds, seafood about 30, and vegetables a few minutes. Our staff will show you how." },
    { q: "Is shabu-shabu healthy?", a: "It is light and nutritious: lean meat, fresh vegetables, mushrooms and tofu cooked in a clean broth, with no deep frying." },
    { q: "Which sauce should I choose?", a: "Goma (sesame) is creamy and nutty, ponzu is citrusy and light, chili ponzu adds a gentle kick, and yuzu pepper is bright and fragrant. Try a few." },
    { q: "Can I choose a broth for the whole table?", a: "Yes. Each pot has one broth, so pick one for the table, or order two pots to try the Original and the Spicy broth together." }
  ],
  // Photo gallery on the Home page (img + label). Add or remove tiles freely.
  gallery: [
    { img: "images/beef.jpg", label: "Premium Beef", size: "wide" },
    { img: "images/porkchicken.jpg", label: "Pork & Chicken", size: "tall" },
    { img: "images/veggies.jpg", label: "Fresh Vegetables & Mushrooms", size: "" },
    { img: "images/seafood.jpg", label: "Seafood", size: "" },
    { img: "images/soup.jpg", label: "Broths & Dipping Sauces", size: "wide" },
    { img: "images/sides.jpg", label: "Rice, Drinks & Desserts", size: "" },
    { img: "images/mushrooms.jpg", label: "Shiitake & Enoki Mushrooms", size: "" },
    { img: "images/tofu.jpg", label: "Silken Tofu", size: "wide" },
    { img: "images/dipping.jpg", label: "Signature Dipping Sauces", size: "" }
  ],
  ticker: ["Fresh Ingredients", "Great Flavor", "Together at the Table", "Cook it yourself", "Miso · Spicy · Original", "Reserve your table"]
};

// Shared helpers. Data is saved in the browser (localStorage). No server needed.
const Store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  orders() { return this.get("fs_orders", []); },
  addOrder(o) { const a = this.orders(); a.unshift(o); this.set("fs_orders", a); },
  saveOrders(a) { this.set("fs_orders", a); },
  reservations() { return this.get("fs_res", []); },
  addRes(r) { const a = this.reservations(); a.unshift(r); this.set("fs_res", a); },
  nextId() { const n = this.get("fs_seq", 1000) + 1; this.set("fs_seq", n); return "FS-" + n; }
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => CONFIG.currency + Number(n).toLocaleString();
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const STATUSES = ["Pending", "Preparing", "Ready", "Completed"];

// Customer website logic: menu, cart, checkout, tracking, reservations, pages.
// Images are read through src() so the same code works in the zip and in the single-file version.
const src = p => (typeof IMGS !== "undefined" && IMGS[p]) || p;
const VALUES = [
  { icon: "🍲", t: "Fresh every day", d: "Meats, seafood and vegetables are prepared fresh each morning." },
  { icon: "🤝", t: "Made to share", d: "Every pot is designed for conversation, laughter and sharing." },
  { icon: "⛩️", t: "Warm hospitality", d: "A calm Japanese atmosphere, and staff who help you start cooking." }
];
const HEAT_LABEL = ["Mild", "Mild", "Medium", "Hot"];

let cart = Store.get("fs_cart", []);
const all = () => [...CONFIG.menu, ...CONFIG.addons];

function toast(t) {
  const e = $("#toast"); e.textContent = t; e.classList.add("show");
  clearTimeout(e.t); e.t = setTimeout(() => e.classList.remove("show"), 2200);
}
const heatHTML = h => `<span class="heat" title="${HEAT_LABEL[h]}">${[0, 1, 2].map(i => `<i class="${i < h ? "on" : ""}"></i>`).join("")}<em>${HEAT_LABEL[h]}</em></span>`;

// ---------- fill text & links from config ----------
$$("[data-bind]").forEach(el => el.textContent = CONFIG[el.dataset.bind]);
$$("[data-social]").forEach(a => a.href = CONFIG.social[a.dataset.social]);
$("#tagline").textContent = CONFIG.tagline;
$("#ticker").innerHTML = (CONFIG.ticker.join(" ✦ ") + " ✦ ").repeat(4);
$("#statGrid").innerHTML = CONFIG.stats.map((s, i) => `<div class="stat rv" style="--d:${i * 90}ms"><b>${esc(s.num)}</b><span>${esc(s.label)}</span></div>`).join("");
$("#ritualGrid").innerHTML = CONFIG.ritual.map((s, i) => `<div class="step rv" style="--d:${i * 110}ms"><i>${String(i + 1).padStart(2, "0")}</i><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div>`).join("");
$("#brothGrid").innerHTML = CONFIG.broths.map((b, i) => `<div class="broth rv" style="--d:${i * 100}ms"><span class="bicon">${b.icon}</span><div><h4>${esc(b.name)}</h4><p>${esc(b.desc)}</p>${heatHTML(b.heat)}</div></div>`).join("");
$("#galGrid").innerHTML = CONFIG.gallery.map((g, i) => `<figure class="tile rv ${g.size || ""}" style="--d:${i * 80}ms" data-img="${g.img}"><img src="${src(g.img)}" alt="${esc(g.label)}" loading="lazy"><figcaption>${esc(g.label)}</figcaption></figure>`).join("");
$("#galGrid").onclick = e => { const f = e.target.closest(".tile"); if (f) { $("#lbImg").src = src(f.dataset.img); $("#lb").showModal(); } };
$("#reviewGrid").innerHTML = CONFIG.reviews.map((r, i) => `<blockquote class="qcard rv" style="--d:${i * 100}ms"><span class="qmark">“</span><p>${esc(r.text)}</p><cite>${esc(r.name)}</cite><span class="stars">★★★★★</span></blockquote>`).join("");
$("#valueGrid").innerHTML = VALUES.map((v, i) => `<div class="value rv" style="--d:${i * 100}ms"><span>${v.icon}</span><h3>${esc(v.t)}</h3><p>${esc(v.d)}</p></div>`).join("");
$("#faqList").innerHTML = CONFIG.faq.map(f => `<details class="rv"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
$("#promoGrid").innerHTML = CONFIG.promos.map((p, i) => `<article class="ticket rv" style="--d:${i * 90}ms"><span class="tag">${esc(p.tag)}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><small>${esc(p.terms)}</small></article>`).join("");
$("#orderType").innerHTML = CONFIG.orderTypes.map(t => `<option>${t}</option>`).join("");
$("#payment").innerHTML = CONFIG.payments.map(t => `<option>${t}</option>`).join("");
$("#rsvSoup").innerHTML = CONFIG.soups.map(s => `<option>${esc(s)}</option>`).join("");
$("#rsvDate").min = new Date().toISOString().split("T")[0];

// ---------- menu ----------
const soupSelect = id => `<label class="soup-pick">Broth<select id="soup-${id}">${CONFIG.soups.map(s => `<option>${esc(s)}</option>`).join("")}</select></label>`;
$("#menuGrid").innerHTML = CONFIG.menu.map((m, i) => `
  <article class="dish rv" style="--d:${i * 90}ms">
    <div class="dish-img"><img src="${src(m.img)}" alt="${esc(m.name)}" loading="lazy"><span class="kj" aria-hidden="true">${m.kanji}</span>${m.badge ? `<span class="ribbon">${esc(m.badge)}</span>` : ""}</div>
    <div class="dish-body">
      <h3>${esc(m.name)}</h3>
      <p class="desc">${esc(m.desc)}</p>
      <ul class="ings">${m.ingredients.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <div class="meta"><span>👥 ${esc(m.serves)}</span>${heatHTML(m.heat)}</div>
      ${soupSelect(m.id)}
      <div class="mbot"><b class="price">${money(m.price)}</b><button class="btn add" data-id="${m.id}">Add to order</button></div>
    </div>
  </article>`).join("");
$("#addonGrid").innerHTML = CONFIG.addons.map((a, i) => `
  <article class="addon rv" style="--d:${i * 80}ms">
    <span class="addon-kj" aria-hidden="true">${a.kanji}</span>
    <div><h4>${esc(a.name)}</h4><p>${esc(a.desc)}</p></div>
    <div class="addon-bot"><b class="price">${money(a.price)}</b><button class="btn sm add" data-id="${a.id}">+ Add</button></div>
  </article>`).join("");
$("#dipGrid").innerHTML = CONFIG.dipping.map((d, i) => `<div class="dip rv" style="--d:${i * 80}ms"><b>${esc(d.name)}</b><span>${esc(d.desc)}</span></div>`).join("");

// add to cart (menu and add-ons)
document.addEventListener("click", e => {
  const b = e.target.closest(".add"); if (!b) return;
  const m = all().find(x => x.id === b.dataset.id); if (!m) return;
  const sel = $("#soup-" + m.id), soup = sel ? sel.value : "";
  const f = cart.find(c => c.id === m.id && c.soup === soup);
  f ? f.qty++ : cart.push({ id: m.id, name: m.name, soup, price: m.price, qty: 1 });
  save(); toast(m.name + " added");
  $$(".cartb,.fab").forEach(x => { x.classList.remove("bump"); void x.offsetWidth; x.classList.add("bump"); });
});

// ---------- cart ----------
const save = () => { Store.set("fs_cart", cart); renderCart(); };
const count = () => cart.reduce((a, c) => a + c.qty, 0);
const subtotal = () => cart.reduce((a, c) => a + c.qty * c.price, 0);
function renderCart() {
  $$(".cc").forEach(e => e.textContent = count());
  $("#cartList").innerHTML = cart.length ? cart.map((c, i) => `
    <div class="ci"><div><b>${esc(c.name)}</b><small>${c.soup ? esc(c.soup) + " · " : ""}${money(c.price)}</small></div>
    <div class="q"><button data-act="-" data-i="${i}" aria-label="Less">−</button><b>${c.qty}</b><button data-act="+" data-i="${i}" aria-label="More">+</button></div></div>`).join("")
    : `<div class="empty">Your cart is empty.<br>Pick a hot pot from the menu.</div>`;
  $("#cartTotal").textContent = money(subtotal());
}
$("#cartList").onclick = e => {
  const b = e.target.closest("button"); if (!b) return; const c = cart[b.dataset.i];
  c.qty += b.dataset.act === "+" ? 1 : -1; if (c.qty <= 0) cart.splice(b.dataset.i, 1); save();
};
const drawer = open => { $("#drawer").classList.toggle("open", open); $("#ov").classList.toggle("open", open); };
$$(".cartb,.fab").forEach(b => b.onclick = () => drawer(true));
$("#ov").onclick = $("#closeCart").onclick = () => drawer(false);

// ---------- checkout ----------
function sum() {
  const fee = $("#orderType").value === "Delivery" ? CONFIG.deliveryFee : 0;
  $("#addrWrap").hidden = fee === 0;
  $("#sum").innerHTML = cart.map(c => `<div><span>${c.qty}× ${esc(c.name)}${c.soup ? " (" + esc(c.soup) + ")" : ""}</span><span>${money(c.qty * c.price)}</span></div>`).join("")
    + (fee ? `<div><span>Delivery fee</span><span>${money(fee)}</span></div>` : "")
    + `<div><b>Total</b><b>${money(subtotal() + fee)}</b></div>`;
  return fee;
}
$("#checkoutBtn").onclick = () => { if (!cart.length) return toast("Add something first"); drawer(false); sum(); $("#co").showModal(); };
$("#orderType").onchange = sum;
$("#coForm").onsubmit = e => {
  e.preventDefault();
  const err = $("#coErr"), v = id => $("#" + id).value.trim(), fee = sum();
  const phone = v("phone").replace(/[\s-]/g, "");
  if (!v("cname")) return err.textContent = "Please enter your name.";
  if (!/^(\+?63|0)?9\d{9}$/.test(phone)) return err.textContent = "Enter a valid mobile number (e.g. 09123456789).";
  if (fee && !v("addr")) return err.textContent = "Please enter your delivery address.";
  const o = {
    id: Store.nextId(), createdAt: Date.now(),
    customer: { name: v("cname"), phone, address: fee ? v("addr") : "" },
    type: $("#orderType").value, payment: $("#payment").value, notes: v("notes"),
    items: cart.map(c => ({ ...c })), subtotal: subtotal(), fee, total: subtotal() + fee, status: "Pending"
  };
  Store.addOrder(o); cart = []; save(); err.textContent = ""; $("#coForm").reset(); $("#co").close();
  $("#doneId").textContent = o.id; $("#done").showModal();
};
$$("[data-close]").forEach(b => b.onclick = () => b.closest("dialog").close());

// ---------- track order ----------
$("#trackBtn").onclick = () => { $("#trackOut").innerHTML = ""; $("#tr").showModal(); };
$("#trackForm").onsubmit = e => {
  e.preventDefault();
  const id = $("#trackId").value.trim().toUpperCase(), o = Store.orders().find(x => x.id === id);
  if (!o) return $("#trackOut").innerHTML = `<p class="err">Order not found. Check the number on your receipt.</p>`;
  const at = STATUSES.indexOf(o.status);
  $("#trackOut").innerHTML = o.status === "Cancelled"
    ? `<p class="err">This order was cancelled.</p>`
    : `<div class="tl">${STATUSES.map((s, i) => `<span class="${i <= at ? "on" : ""}">${s}</span>`).join("")}</div>
       <p>${o.items.map(i => i.qty + "× " + esc(i.name)).join(", ")}<br><b>Total ${money(o.total)}</b></p>`;
};

// ---------- reservations ----------
$("#rsvForm").onsubmit = e => {
  e.preventDefault();
  const m = $("#rsvMsg"), v = id => $("#" + id).value.trim(); m.className = "err";
  if (!v("rsvName")) return m.textContent = "Please enter your name.";
  if (!v("rsvDate")) return m.textContent = "Please choose a date.";
  const g = +v("rsvGuests"); if (!g || g < 1 || g > 20) return m.textContent = "Guests must be 1 to 20.";
  Store.addRes({ id: Date.now(), name: v("rsvName"), date: v("rsvDate"), guests: g, soup: $("#rsvSoup").value, createdAt: Date.now() });
  m.className = "ok"; m.textContent = `Thank you, ${v("rsvName")}! A table for ${g} is requested. We will confirm soon.`;
  $("#rsvForm").reset(); $("#rsvGuests").value = 2;
};

// ---------- pages: each nav link opens one page (back button works) ----------
const links = $$("nav .links a"), views = $$(".view");
function go() {
  let id = location.hash.slice(1); if (!views.some(v => v.id === id)) id = "home";
  views.forEach(v => v.classList.toggle("active", v.id === id));
  links.forEach(a => a.classList.toggle("active", a.hash === "#" + id));
  scrollTo({ top: 0, behavior: "instant" });
}
addEventListener("hashchange", go); go();

// ---------- hero petals ----------
for (let i = 0; i < 18; i++) {
  const p = document.createElement("i"), s = 8 + Math.random() * 9; p.className = "petal";
  p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s * 1.3}px;animation-duration:${9 + Math.random() * 9}s;animation-delay:${-Math.random() * 14}s`;
  $(".hero").appendChild(p);
}

// ---------- scroll reveal ----------
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
$$(".rv").forEach(el => io.observe(el));
$$(".sec h2,.page-head h1,.kicker").forEach(el => { el.classList.add("rv"); io.observe(el); });

renderCart();

const VIEWS = ["home", "menu", "offers", "about", "reserve"];
function showView(id) {
  if (!VIEWS.includes(id)) id = "home";
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === id));
  document.querySelectorAll("nav .links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  window.scrollTo({ top: 0, behavior: "instant" });
}
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute("href").slice(1);
  if (VIEWS.includes(id)) { e.preventDefault(); showView(id); }
});
showView(location.hash.slice(1));


// ---------- Raining sakura ----------
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "rain";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);
  const n = innerWidth < 640 ? 14 : 28;
  for (let i = 0; i < n; i++) {
    const p = document.createElement("i");
    const s = 9 + Math.random() * 11;
    p.className = "sakura";
    p.style.cssText =
      `left:${Math.random() * 100}%;width:${s}px;height:${s * 1.25}px;` +
      `animation-duration:${22 + Math.random() * 16}s;` +
      `animation-delay:${-Math.random() * 20}s;` +
      `--sway:${Math.round(Math.random() * 80 - 40)}px`;
    layer.appendChild(p);
  }
})();


// ---------- Sakura rain: Home page only ----------
// Follows the page that is actually showing (the Home view's "active" class),
// so it works even when the viewer does not update the URL hash.
(function () {
  const home = document.getElementById("home");
  if (!home) return;
  const sync = () => document.body.classList.toggle("on-home", home.classList.contains("active"));
  sync();
  new MutationObserver(sync).observe(home, { attributes: true, attributeFilter: ["class"] });
})();
