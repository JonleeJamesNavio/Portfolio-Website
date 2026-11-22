// ---- Theme toggle ----
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "dark"); // default dark to match reference
  document.documentElement.setAttribute("data-theme", theme);
})();

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// ---- Align hero outline vertically with the h1 (h1 lives in a narrower
// centered column, so we measure and position the full-width track to match) ----
function alignHeroOutline() {
  const hero = document.getElementById("hero");
  const h1 = document.getElementById("heroName");
  const track = document.getElementById("heroOutlineTrack");
  if (!hero || !h1 || !track) return;
  const heroRect = hero.getBoundingClientRect();
  const h1Rect = h1.getBoundingClientRect();
  const centerY = h1Rect.top - heroRect.top + h1Rect.height / 2;
  track.style.top = centerY + "px";
  track.style.transform = "translateY(-50%)";
}
window.addEventListener("load", alignHeroOutline);
window.addEventListener("resize", alignHeroOutline);
document.fonts && document.fonts.ready.then(alignHeroOutline);
alignHeroOutline();

// ---- Scrolling outline text behind section headings — disabled site-wide,
// hero-only per current design direction. Kept as an opt-in helper. ----
function addHeadingOutlines() {
  return;
}

// ---- Projects data ----
const projects = [
  {
    title: "Meta Ads to Monday.com Data Pipeline",
    description:
      "A daily ETL pipeline that extracts Facebook/Meta ad campaign data via API, transforms it into calculated performance metrics, and loads it into live reports. Saves 5–8 staff hours weekly and removes manual data entry error.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Monday.com", icon: "assets/images/monday.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/liberty.png",
      "assets/projects/Liberty2.png",
    ],
  },
  {
    title: "Oas Volleyball Alliance Messenger Assistant",
    description:
      "Saved time and improved communication quality by automating replies, organizing conversations, and logging messages into structured records.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Messenger", icon: "assets/images/messenger.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/ova.png",
      "assets/projects/ova1.png",
      "assets/projects/ova2.png",
      "assets/projects/ova3.png",
      "assets/projects/ova4.png",
    ],
  },
  {
    title: "AI Calendar Assistant with Memory (GPT-4o-mini + Telegram)",
    description:
      "Fully automated AI calendar assistant that understands natural language text commands, creates/updates/deletes Google Calendar events via Telegram, maintains conversation memory, and operates 24/7 with zero manual input.",
    TechStack: [
      { name: "n8n", icon: "assets/images/n8n-color.webp" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Google Calendar", icon: "assets/images/google-calendar.svg" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
    ],
    images: ["assets/projects/Calendar Agent.png"],
  },
  {
    title: "Budget-Aware Expense Tracker with Telegram, OpenAI & Google Sheets",
    description:
      "A chat-based expense and budget tracker built as two connected Make.com scenarios. Each Telegram message is classified by OpenAI into an intent (add, delete, undo, set budget, status, help) and routed to the matching flow, which updates Google Sheets and replies with spending against each bucket's monthly budget, flagging buckets at 80% and 100%. A second scenario runs monthly and compiles the previous month's totals and line items into an HTML email report.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "OpenAI", icon: "assets/images/openai.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Gmail", icon: "assets/images/gmail.svg" },
    ],
    images: [
      "assets/projects/Expense-v2-canvas.png",
      "assets/projects/Expense-v2-telegram.png",
      "assets/projects/Expense-v2-report-canvas.png",
      "assets/projects/Expense-v2-email.png",
      "assets/projects/Expense-v2-sheet.png",
    ],
  },
  {
    title: "Messenger Food Order Assistant",
    description:
      "Transformed manual order processing into an automated system that handles customer inquiries, validates business hours and inventory, and maintains organized order records with instant staff notifications.",
    TechStack: [
      { name: "n8n", icon: "assets/images/n8n-color.webp" },
      { name: "Messenger", icon: "assets/images/messenger.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "assets/images/openai.svg",
      },
    ],
    images: [
      "assets/projects/Food.png",
      "assets/projects/Food I.png",
      "assets/projects/Food II.png",
      "assets/projects/Food III.png",
    ],
  },
  {
    title: "Instant Lead Response & AI Qualification System",
    description:
      "A Zapier workflow that starts the moment a prospect submits a Google Form. It logs the lead's details to HubSpot, then AI by Zapier qualifies the lead and scores it Hot, Warm, or Cold. The score is written back to the HubSpot record and a new row is added to a Google Sheets lead log. The lead gets an email thanking them for reaching out and confirming the team will review their details, and the team gets a Slack message with the full lead summary. If the lead is Hot, a second Slack alert flags it as a priority. After a 2-hour delay, the workflow searches HubSpot for the contact by email, and if the lead status is still New, meaning no one has touched it, it sends a Slack escalation that the Hot lead is untouched. Built and tested end to end; the final live run was limited by the free Zap task allowance.",
    TechStack: [
      { name: "Zapier", icon: "assets/images/zapier-icon-svgrepo-com.svg" },
      { name: "Google Forms", icon: "assets/images/google-forms.svg" },
      { name: "HubSpot", icon: "assets/images/hubspot.svg" },
      { name: "AI by Zapier", icon: "assets/images/zapier-icon-svgrepo-com.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Gmail", icon: "assets/images/gmail.svg" },
      { name: "Slack", icon: "assets/images/slack.svg" },
    ],
    images: [
      "assets/projects/Lead-cover.png",
      "assets/projects/Lead-zap-trigger.png",
      "assets/projects/Lead-form.png",
      "assets/projects/Lead-zap-steps-8-14.png",
      "assets/projects/Lead-zap-steps-11-15.png",
      "assets/projects/Lead-log.png",
      "assets/projects/Lead-hubspot.png",
      "assets/projects/Lead-slack.png",
    ],
  },
  {
    title: "RAG Support Chatbot with Source Citations & Human Handoff",
    description:
      "Demonstration build for a fictional company, self-hosted with n8n on Docker. A support assistant that answers only from a company's own documents and names the sources it used. When the answer is not in the documents, it says so and emails the team, with a daily cap and no repeat alerts for the same question. The PDF knowledge base in Google Drive keeps itself current: new and edited files are cleaned, split into question-and-answer chunks, embedded with Gemini, and stored in Supabase, while deleted files are removed on a schedule. Follow-up questions are rewritten into standalone queries, a backup model and a friendly fallback reply cover AI outages, and every chat is logged. Built around a fictional company, Cera Automation Agency. Self-hosted on Docker and built within free-tier AI limits, so it runs as a working demonstration rather than a production service.",
    TechStack: [
      { name: "n8n", icon: "assets/images/n8n-color.webp" },
      { name: "Docker", icon: "assets/images/docker.svg" },
      { name: "Gemini", icon: "assets/images/gemini.svg" },
      { name: "Supabase", icon: "assets/images/supabase.svg" },
      { name: "Google Drive", icon: "assets/images/google-drive.svg" },
      { name: "Gmail", icon: "assets/images/gmail.svg" },
      { name: "JavaScript", icon: "assets/images/javascript.svg" },
      { name: "SQL", icon: "assets/images/sql.svg" },
    ],
    images: [
      "assets/projects/RAG-canvas.png",
      "assets/projects/RAG-ingest.png",
      "assets/projects/RAG-chat.png",
      "assets/projects/RAG-cleanup.png",
      "assets/projects/RAG-alerts.png",
      "assets/projects/RAG-tester.png",
      "assets/projects/RAG-chat-demo.png",
      "assets/projects/RAG-handoff-email.png",
      "assets/projects/RAG-drive-folder.png",
      "assets/projects/RAG-supabase-documents.png",
      "assets/projects/RAG-supabase-schema.png",
    ],
  },
];

let currentSlideIndex = 0;

// ---- Work Gallery coverflow ----
// "index" points into the projects array above (the modal uses it).
// To add a project: add it to `projects`, then add one line here.
const galleryItems = [
  // Order: Meta Ads first, then Make.com, then n8n (RAG first), then Zapier
  { index: 0, client: "Music Marketing Agency Client", title: "Meta Ads to Monday.com Data Pipeline", blurb: "Daily ETL pipeline that extracts Meta Ads data and loads it into live reports." },
  { index: 3, client: "Personal Expense Tracker", title: "Budget-Aware Expense Tracker with Telegram, OpenAI & Google Sheets", blurb: "Chat-based expense logging with live budget tracking, undo and delete commands, and a monthly emailed report." },
  { index: 1, client: "Messenger Automation Workflow", title: "Oas Volleyball Alliance Messenger Assistant", blurb: "Automated autoreply workflow that logs messages and organizes conversation data." },
  { index: 6, client: "Personal Project", title: "RAG Support Chatbot with Source Citations & Human Handoff", blurb: "Answers only from company documents, cites its sources, and emails the team when it cannot answer." },
  { index: 2, client: "Personal AI Calendar Assistant", title: "AI Calendar Assistant with Memory (GPT-4o-mini + Telegram)", blurb: "Creates, updates, and deletes calendar events via text commands." },
  { index: 4, client: "Small Business Client", title: "Messenger Food Order Assistant", blurb: "Understands customer messages and manages orders end-to-end automatically." },
  { index: 5, client: "Personal Project", title: "Instant Lead Response & AI Qualification System", blurb: "Google Form to HubSpot, with AI lead scoring, instant email, Slack alerts, and automated follow-up." },
];

const CF_TILT = 45; // degrees the side cards rotate
const CF_OVERLAP = 0.55; // card spacing as a fraction of card width (lower = tighter)

let cfActive = 0;
let cfDragged = false;
const cfStage = document.getElementById("coverflowStage");
const cfDots = document.getElementById("cfDots");

galleryItems.forEach((item, i) => {
  const el = document.createElement("div");
  el.className = "cf-item";
  const img = document.createElement("img");
  img.src = projects[item.index].images[0];
  img.alt = item.client;
  el.appendChild(img);
  el.addEventListener("click", () => {
    if (cfDragged) return;
    if (i === cfActive) openModal(item.index);
    else cfGoTo(i);
  });
  cfStage.appendChild(el);

  const dot = document.createElement("button");
  dot.className = "cf-dot";
  dot.setAttribute("aria-label", `Go to project ${i + 1}`);
  dot.addEventListener("click", () => cfGoTo(i));
  cfDots.appendChild(dot);
});

function renderCoverflow() {
  const items = cfStage.querySelectorAll(".cf-item");
  const spacing = items[0].offsetWidth * CF_OVERLAP;

  items.forEach((el, i) => {
    const offset = i - cfActive;
    const abs = Math.abs(offset);
    const dir = Math.sign(offset);
    el.style.transform = `translateX(calc(-50% + ${offset * spacing}px)) translateZ(${-abs * 140}px) rotateY(${-dir * CF_TILT}deg) scale(${abs === 0 ? 1 : 0.9})`;
    el.style.zIndex = 10 - abs;
    el.style.opacity = abs > 2 ? 0 : 1 - abs * 0.22;
    el.style.filter = abs === 0 ? "none" : "brightness(0.55)";
    el.style.pointerEvents = abs > 2 ? "none" : "auto";
  });

  const cur = galleryItems[cfActive];
  document.getElementById("cfClient").textContent = cur.client;
  document.getElementById("cfTitle").textContent = cur.title;
  document.getElementById("cfBlurb").textContent = cur.blurb;
  document.getElementById("cfOpen").onclick = () => openModal(cur.index);
  cfDots
    .querySelectorAll(".cf-dot")
    .forEach((d, i) => d.classList.toggle("active", i === cfActive));
}

function cfGoTo(i) {
  cfActive = (i + galleryItems.length) % galleryItems.length;
  renderCoverflow();
}
function cfMove(dir) {
  cfGoTo(cfActive + dir);
}

// Arrow keys: only while the gallery is on screen and the modal is closed
document.addEventListener("keydown", (e) => {
  if (document.getElementById("projectModal").classList.contains("active")) return;
  const r = document.getElementById("coverflow").getBoundingClientRect();
  if (r.bottom < 0 || r.top > window.innerHeight) return;
  if (e.key === "ArrowLeft") cfMove(-1);
  if (e.key === "ArrowRight") cfMove(1);
});

// Drag / swipe (mouse + touch)
let cfStartX = null;
cfStage.addEventListener("pointerdown", (e) => {
  cfStartX = e.clientX;
  cfDragged = false;
});
cfStage.addEventListener("pointerup", (e) => {
  if (cfStartX === null) return;
  const dx = e.clientX - cfStartX;
  if (Math.abs(dx) > 40) {
    cfDragged = true;
    cfMove(dx < 0 ? 1 : -1);
    setTimeout(() => (cfDragged = false), 0);
  }
  cfStartX = null;
});

window.addEventListener("resize", renderCoverflow);
window.addEventListener("load", renderCoverflow);
renderCoverflow();

// ---- Mobile menu ----
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    document.getElementById("navMenu").classList.remove("active");
  });
});

// ---- Navbar active state + back-to-top on scroll ----
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) current = section.getAttribute("id");
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current)
      link.classList.add("active");
  });

  const backToTop = document.getElementById("backToTop");
  if (backToTop) backToTop.classList.toggle("visible", scrollY > 600);
});

// ---- Reveal animation ----
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".reveal")
  .forEach((section) => observer.observe(section));

// ---- Modal extras: "at a glance" stats + optional image captions ----
// stats: up to 3 { value, label } tiles. captions: one per image, in order (optional).
const projectExtras = {
  0: { stats: [{ value: "Daily", label: "ETL run" }, { value: "5–8 hrs", label: "Saved weekly" }, { value: "Live", label: "Reports" }] },
  1: { stats: [{ value: "Auto", label: "Replies" }, { value: "Logged", label: "Messages" }, { value: "Organized", label: "Conversations" }] },
  2: { stats: [{ value: "24/7", label: "Always on" }, { value: "3", label: "Calendar actions" }, { value: "Memory", label: "Conversation context" }] },
  3: {
    stats: [{ value: "2", label: "Scenarios" }, { value: "7", label: "Chat intents" }, { value: "Monthly", label: "Email report" }],
    captions: [
      "Scenario 1: intent router with seven paths",
      "Telegram: logging reply with budget status",
      "Scenario 2: monthly report flow",
      "Monthly email summary",
      "Google Sheets data store",
    ],
  },
  4: { stats: [{ value: "Instant", label: "Staff alerts" }, { value: "Auto", label: "Order records" }, { value: "Validated", label: "Hours & inventory" }] },
  5: {
    stats: [{ value: "15", label: "Zap steps" }, { value: "3-tier", label: "Hot, Warm, Cold scoring" }, { value: "Instant", label: "Email + Slack alerts" }],
    captions: [
      "Zap overview: form trigger, name split, HubSpot, AI scoring, Sheets log",
      "Formatter step: splitting the full name for HubSpot",
      "Intake form: Automation Consultation",
      "Steps 8-14: priority alert, delay, contact re-check",
      "Steps 11-15: follow-up reminder to Slack",
      "Lead Log in Google Sheets with score and reason",
      "HubSpot: contact created and synced from the form",
      "Slack: new lead alert, priority ping, and 2-hour escalation",
    ],
  },
  6: {
    stats: [{ value: "18/20", label: "Clean benchmark passes" }, { value: "20/20", label: "Correct handoff flags" }, { value: "3", label: "Self-running automations" }],
    captions: [
      "Full canvas: ingest, chat, tester, alerts, and cleanup",
      "Ingest: Drive trigger, text cleaning, question-based chunking, Gemini embeddings, Supabase",
      "Chat: secret check, history, question rewrite, vector search, grounded answer, logging, handoff email",
      "Cleanup: removes stored chunks of PDFs deleted from Drive, with a mass-delete safety stop",
      "Failure alerts: email notification on any unhandled error",
      "n8n chat panel workflow: calls the same webhook a website visitor would use",
      "Live test: a cited answer, then an out-of-scope question that triggers handoff",
      "Handoff email: the unanswered question, session, and bot reply sent to the team",
      "Knowledge base: source PDFs in Google Drive",
      "Supabase documents table: question-based chunks with source metadata and embeddings",
      "Supabase schema: documents (vector store) and chat_logs (monitoring)",
    ],
  },
};

// ---- Modal functions ----
let modalImages = [];
let modalCaptions = [];

function openModal(index) {
  const modal = document.getElementById("projectModal");
  const project = projects[index];
  const extra = projectExtras[index] || {};
  const gallery = galleryItems.find((g) => g.index === index);

  document.getElementById("modalClient").textContent = gallery ? gallery.client : "";
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;

  // At a glance
  const glance = document.getElementById("modalGlance");
  glance.innerHTML = "";
  const stats = extra.stats || [];
  document.getElementById("modalGlanceWrap").style.display = stats.length ? "block" : "none";
  stats.forEach((s) => {
    const tile = document.createElement("div");
    tile.className = "glance-tile";
    const b = document.createElement("b");
    b.textContent = s.value;
    const span = document.createElement("span");
    span.textContent = s.label;
    tile.appendChild(b);
    tile.appendChild(span);
    glance.appendChild(tile);
  });

  // Tech stack pills
  const tech = document.getElementById("modalTech");
  tech.innerHTML = "";
  (project.TechStack || []).forEach((t) => {
    const pill = document.createElement("span");
    pill.className = "tech-pill";
    const img = document.createElement("img");
    img.src = t.icon || "";
    img.alt = "";
    const label = document.createElement("span");
    label.textContent = t.name;
    pill.appendChild(img);
    pill.appendChild(label);
    tech.appendChild(pill);
  });

  // Media viewer
  modalImages = project.images || [];
  modalCaptions = extra.captions || [];
  const thumbs = document.getElementById("modalThumbs");
  thumbs.innerHTML = "";
  const multi = modalImages.length > 1;
  thumbs.style.display = multi ? "flex" : "none";
  document.getElementById("prevSlide").style.display = multi ? "" : "none";
  document.getElementById("nextSlide").style.display = multi ? "" : "none";
  document.getElementById("modalCount").style.display = multi ? "" : "none";
  modalImages.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.className = "modal-thumb";
    btn.setAttribute("aria-label", `Show image ${i + 1}`);
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    btn.appendChild(img);
    btn.addEventListener("click", () => showSlide(i));
    thumbs.appendChild(btn);
  });
  document.getElementById("modalStage").style.display = modalImages.length ? "flex" : "none";
  if (modalImages.length) showSlide(0);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function showSlide(i) {
  currentSlideIndex = i;
  const big = document.getElementById("modalBigImg");
  big.src = modalImages[i];
  big.alt = modalCaptions[i] || `Project screenshot ${i + 1}`;
  document.getElementById("modalCaption").textContent = modalCaptions[i] || "";
  document.getElementById("modalCount").textContent =
    String(i + 1).padStart(2, "0") + " / " + String(modalImages.length).padStart(2, "0");
  document.querySelectorAll(".modal-thumb").forEach((t, j) => t.classList.toggle("active", j === i));
  const active = document.querySelectorAll(".modal-thumb")[i];
  if (active && active.scrollIntoView) active.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function changeSlide(direction) {
  if (modalImages.length < 2) return;
  showSlide((currentSlideIndex + direction + modalImages.length) % modalImages.length);
}

function closeModal() {
  document.getElementById("lightbox").hidden = true;
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

document.getElementById("projectModal").addEventListener("click", (e) => {
  if (e.target.id === "projectModal") closeModal();
});

// Click the main image to zoom
document.getElementById("modalStage").addEventListener("click", (e) => {
  if (e.target.closest(".slide-btn")) return;
  document.getElementById("lightboxImg").src = modalImages[currentSlideIndex];
  document.getElementById("lightbox").hidden = false;
});
document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").hidden = true;
});

// Keyboard: Esc closes (zoom first), arrows change image
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("projectModal").classList.contains("active")) return;
  const lb = document.getElementById("lightbox");
  if (e.key === "Escape") {
    if (!lb.hidden) lb.hidden = true;
    else closeModal();
  }
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "ArrowRight") changeSlide(1);
});

// ---- Contact tabs: message / book a call ----
// The booking page loads only the first time its tab opens, so it never slows the initial page load.
function showContactTab(tab) {
  const book = tab === "book";
  document.getElementById("tabMessage").classList.toggle("active", !book);
  document.getElementById("tabBook").classList.toggle("active", book);
  document.getElementById("tabMessage").setAttribute("aria-selected", String(!book));
  document.getElementById("tabBook").setAttribute("aria-selected", String(book));
  document.getElementById("paneMessage").hidden = book;
  document.getElementById("paneBook").hidden = !book;
  document.getElementById("contactEyebrow").textContent = book
    ? "Book a call"
    : "Send a message";
  if (book) {
    const frame = document.getElementById("bookingFrame");
    if (frame && !frame.getAttribute("src")) {
      frame.setAttribute("src", frame.dataset.src);
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  event.target.reset();
}

window.addEventListener("load", () => {
  document.getElementById("hero").classList.add("visible");
});

// ---- Online certifications ----
// To add a new box: add another { provider, certs } object below.
// To add a photo to a box: add another { title, date, image } to its certs list.
const certifications = [
  {
    provider: "Zapier Academy",
    certs: [
      {
        title: "Jumpstart",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-jumpstart.jpg",
      },
      {
        title: "Building Basic Zaps",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-basic-zaps.jpg",
      },
      {
        title: "Building Intermediate Zaps",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-intermediate-zaps.jpg",
      },
      {
        title: "What is Zapier MCP?",
        date: "Oct 1, 2026",
        image: "assets/images/certs/zapier-mcp.jpg",
      },
    ],
  },
  {
    provider: "n8n Academy",
    certs: [
      {
        title: "n8n Quickstart",
        date: "Sep 10, 2026",
        image: "assets/images/certs/n8n-quickstart.jpg",
      },
      {
        title: "Essentials: Your First Workflows",
        date: "Sep 28, 2026",
        image: "assets/images/certs/n8n-essentials.jpg",
      },
    ],
  },
];

function renderCertifications() {
  const wrap = document.getElementById("certBoxes");
  if (!wrap) return;

  certifications.forEach((group) => {
    const multi = group.certs.length > 1;
    const box = document.createElement("div");
    box.className = "cert-box";

    const slides = group.certs
      .map(
        (c) =>
          `<a class="cert-slide" href="${c.image}" target="_blank" rel="noopener">
            <img src="${c.image}" alt="${group.provider} certificate: ${c.title}" loading="lazy" />
          </a>`,
      )
      .join("");

    box.innerHTML = `
      <h3 class="cert-provider-name">${group.provider}</h3>
      <div class="cert-viewport">
        <div class="cert-track">${slides}</div>
        ${
          multi
            ? `<button class="cert-btn prev" aria-label="Previous certificate">❮</button>
               <button class="cert-btn next" aria-label="Next certificate">❯</button>`
            : ""
        }
      </div>
      <div class="cert-caption">
        <div>
          <h4 class="cert-title"></h4>
          <span class="cert-date"></span>
        </div>
        <span class="cert-count"></span>
      </div>`;

    const track = box.querySelector(".cert-track");
    const titleEl = box.querySelector(".cert-title");
    const dateEl = box.querySelector(".cert-date");
    const countEl = box.querySelector(".cert-count");
    let index = 0;

    function show(i) {
      const total = group.certs.length;
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      titleEl.textContent = group.certs[index].title;
      dateEl.textContent = group.certs[index].date;
      countEl.textContent = multi ? `${index + 1} / ${total}` : "";
    }

    if (multi) {
      box
        .querySelector(".prev")
        .addEventListener("click", () => show(index - 1));
      box
        .querySelector(".next")
        .addEventListener("click", () => show(index + 1));

      // Swipe support on touch devices
      const viewport = box.querySelector(".cert-viewport");
      let startX = null;
      viewport.addEventListener(
        "touchstart",
        (e) => (startX = e.touches[0].clientX),
        { passive: true },
      );
      viewport.addEventListener("touchend", (e) => {
        if (startX === null) return;
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 40) show(index + (diff < 0 ? 1 : -1));
        startX = null;
      });
    }

    show(0);
    wrap.appendChild(box);
  });
}
renderCertifications();

// ---- Slideshows (Trainings) ----
// Any element with data-slideshow: a .slideshow-track of images, prev/next buttons, and a .ss-dots holder.
// Autoplays every 5s, pauses on hover/focus, and stays still for reduced-motion users.
function initSlideshows() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-slideshow]").forEach((box) => {
    const track = box.querySelector(".slideshow-track");
    const total = track.children.length;
    const dotsWrap = box.querySelector(".ss-dots");
    const dots = [];
    let index = 0;
    let timer = null;

    function go(i, fromUser) {
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle("active", j === index));
      if (fromUser) start();
    }
    function stop() {
      clearInterval(timer);
      timer = null;
    }
    function start() {
      stop();
      if (reduceMotion || total < 2) return;
      timer = setInterval(() => go(index + 1), 5000);
    }

    for (let i = 0; i < total; i++) {
      const dot = document.createElement("button");
      dot.className = "ss-dot";
      dot.setAttribute("aria-label", `Show photo ${i + 1}`);
      dot.addEventListener("click", () => go(i, true));
      dotsWrap.appendChild(dot);
      dots.push(dot);
    }

    const prev = box.querySelector(".prev");
    const next = box.querySelector(".next");
    if (total < 2) {
      prev.style.display = next.style.display = "none";
      dotsWrap.style.display = "none";
    }
    prev.addEventListener("click", () => go(index - 1, true));
    next.addEventListener("click", () => go(index + 1, true));

    // Swipe on touch devices
    let startX = null;
    box.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
    box.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 40) go(index + (diff < 0 ? 1 : -1), true);
      startX = null;
    });

    box.addEventListener("mouseenter", stop);
    box.addEventListener("mouseleave", start);
    box.addEventListener("focusin", stop);
    box.addEventListener("focusout", start);

    go(0);
    start();
  });
}
initSlideshows();
