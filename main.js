/* ============================================
   GSAP Setup — Native smooth scroll, no Lenis
   ============================================ */
gsap.registerPlugin(ScrollTrigger);

/* ============================================
   Custom Cursor
   ============================================ */
const cursor = document.getElementById("cursor");
const cursorDot = cursor?.querySelector(".cursor-dot");
const cursorOutline = cursor?.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let dotX = 0, dotY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  dotX += (mouseX - dotX) * 0.5;
  dotY += (mouseY - dotY) * 0.5;
  if (cursorDot) {
    cursorDot.style.left = dotX + "px";
    cursorDot.style.top = dotY + "px";
  }

  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  if (cursorOutline) {
    cursorOutline.style.left = cursorX + "px";
    cursorOutline.style.top = cursorY + "px";
  }

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover states
const hoverTargets = document.querySelectorAll("a, button, .service-card, .case-card, .about-card, .fw-card, .stack-item, .cta-button, .pipeline-step, .bubble");
hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
  el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
});

/* ============================================
   Page Load Animation
   ============================================ */
const loadTl = gsap.timeline({ defaults: { ease: "expo.out" } });

loadTl
  .set(".transition-panel", { scaleY: 1, transformOrigin: "top" })
  .to(".transition-panel", {
    scaleY: 0,
    duration: 1,
    stagger: 0.15,
    delay: 0.2,
  })
  .to(".hero-title .title-word", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
  }, "-=0.6")
  .to(".hero-sub", {
    opacity: 1,
    y: 0,
    duration: 0.8,
  }, "-=0.5")
  .to(".hero-ctas", {
    opacity: 1,
    y: 0,
    duration: 0.7,
  }, "-=0.4")
  .to(".hero-logos-bar", {
    opacity: 1,
    y: 0,
    duration: 0.7,
  }, "-=0.3")
  .to(".hero-photo", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.out",
  }, "-=1.2");

/* ============================================
   Navigation Scroll Effect
   ============================================ */
const nav = document.getElementById("nav");

ScrollTrigger.create({
  start: "top -80",
  onUpdate: (self) => {
    if (self.scroll() > 80) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  },
});

/* ============================================
   Menu Toggle
   ============================================ */
const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const menuLinks = document.querySelectorAll(".menu-link");
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuToggle.classList.toggle("active", menuOpen);
  menuOverlay.classList.toggle("active", menuOpen);
  document.body.style.overflow = menuOpen ? "hidden" : "";
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuOpen = false;
    menuToggle.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});

/* ============================================
   Scroll Animations — Generic Reveal
   ============================================ */
gsap.utils.toArray(".reveal-card").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "expo.out",
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });
});

/* ============================================
   Scroll Animations — Section Titles
   ============================================ */
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "expo.out",
    scrollTrigger: {
      trigger: title,
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });
});

gsap.utils.toArray(".section-tag").forEach((tag) => {
  gsap.from(tag, {
    y: 15,
    opacity: 0,
    duration: 0.6,
    ease: "expo.out",
    scrollTrigger: {
      trigger: tag,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
});

/* ============================================
   Schema Animations — ICP Rows
   ============================================ */
gsap.utils.toArray(".icp-row").forEach((row, i) => {
  gsap.from(row, {
    opacity: 0,
    x: -20,
    duration: 0.6,
    ease: "expo.out",
    scrollTrigger: {
      trigger: row,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    delay: i * 0.1,
  });
});

/* ============================================
   Schema Animations — Workflow Steps
   ============================================ */
gsap.utils.toArray(".wf-step").forEach((step, i) => {
  gsap.from(step, {
    opacity: 0,
    x: -15,
    duration: 0.5,
    ease: "expo.out",
    scrollTrigger: {
      trigger: step,
      start: "top 92%",
      toggleActions: "play none none none",
    },
    delay: i * 0.08,
  });
});

/* ============================================
   Schema Animations — Bubbles
   ============================================ */
gsap.utils.toArray(".bubble").forEach((bubble, i) => {
  gsap.from(bubble, {
    scale: 0,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".bubble-chart",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    delay: i * 0.1,
  });
});

/* ============================================
   Table Row Animation
   ============================================ */
gsap.utils.toArray(".gtm-table tbody tr").forEach((row, i) => {
  gsap.from(row, {
    opacity: 0,
    x: -15,
    duration: 0.5,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".gtm-table",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    delay: 0.2 + i * 0.08,
  });
});

/* ============================================
   Metric Cards — Counter & Bars
   ============================================ */
gsap.utils.toArray(".metric-card").forEach((card) => {
  const numberEl = card.querySelector(".metric-number");
  const bar = card.querySelector(".metric-bar");
  const target = parseFloat(numberEl?.dataset.target) || 0;
  const suffix = numberEl?.dataset.suffix || "";

  ScrollTrigger.create({
    trigger: card,
    start: "top 85%",
    once: true,
    onEnter: () => {
      if (bar) bar.classList.add("animated");

      if (numberEl) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: "expo.out",
          onUpdate: () => {
            const formatted = target % 1 !== 0
              ? obj.val.toFixed(1)
              : Math.round(obj.val);
            numberEl.textContent = formatted + suffix;
          },
        });
      }
    },
  });
});

/* ============================================
   ICP Schema Counter Animation
   ============================================ */
gsap.utils.toArray("[data-counter]").forEach((el) => {
  const target = parseFloat(el.dataset.counter) || 0;
  const suffix = el.dataset.suffix || "";

  ScrollTrigger.create({
    trigger: el,
    start: "top 90%",
    once: true,
    onEnter: () => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.2,
        ease: "expo.out",
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        },
      });
    },
  });
});

/* ============================================
   Stack Items Stagger
   ============================================ */
gsap.utils.toArray(".stack-item").forEach((item, i) => {
  gsap.to(item, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".stack-grid",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    delay: i * 0.04,
  });
});

/* ============================================
   FAQ Accordion
   ============================================ */
document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

/* ============================================
   Contact Section Animation
   ============================================ */
const contactTitle = document.querySelector(".contact-title");
if (contactTitle) {
  const contactWords = contactTitle.querySelectorAll(".title-word");
  gsap.to(contactWords, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.08,
    ease: "expo.out",
    scrollTrigger: {
      trigger: contactTitle,
      start: "top 82%",
      toggleActions: "play none none none",
    },
  });
}

gsap.to(".contact-sub", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".contact-sub",
    start: "top 88%",
    toggleActions: "play none none none",
  },
});

/* ============================================
   Magnetic Buttons (all .magnetic-btn)
   ============================================ */
document.querySelectorAll(".magnetic-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.15, y: y * 0.15, duration: 0.4, ease: "power2.out" });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
  });
});

/* ============================================
   3D Tilt on Case Cards
   ============================================ */
document.querySelectorAll(".case-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 5,
      rotateX: -y * 5,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "elastic.out(1, 0.6)" });
  });
});

/* ============================================
   Footer Time
   ============================================ */
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const el = document.getElementById("footerTime");
  if (el) el.textContent = "Paris \u2014 " + timeStr;
}
updateTime();
setInterval(updateTime, 1000);

/* ============================================
   Hero Canvas — Animated Mesh / Wave
   ============================================ */
(function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, cols, rows, points;
  const spacing = 40;
  let time = 0;

  function resize() {
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    cols = Math.ceil(width / spacing) + 2;
    rows = Math.ceil(height / spacing) + 2;
    points = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        points.push({
          x: c * spacing,
          y: r * spacing,
          baseX: c * spacing,
          baseY: r * spacing,
        });
      }
    }
  }

  function getPoint(r, c) {
    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      return points[r * cols + c];
    }
    return null;
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    time += 0.008;

    // Update point positions with wave
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const wave1 = Math.sin(p.baseX * 0.008 + time) * 12;
      const wave2 = Math.cos(p.baseY * 0.006 + time * 0.7) * 10;
      const wave3 = Math.sin((p.baseX + p.baseY) * 0.005 + time * 1.2) * 8;
      p.x = p.baseX;
      p.y = p.baseY + wave1 + wave2 + wave3;
    }

    // Draw lines
    ctx.strokeStyle = "rgba(180, 155, 120, 0.12)";
    ctx.lineWidth = 0.5;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const p = getPoint(r, c);
        const right = getPoint(r, c + 1);
        const down = getPoint(r + 1, c);

        if (right) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(right.x, right.y);
          ctx.stroke();
        }
        if (down) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(down.x, down.y);
          ctx.stroke();
        }
      }
    }

    // Draw dots at intersections
    ctx.fillStyle = "rgba(180, 155, 120, 0.25)";
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const distFromCenter = Math.abs(p.baseX - width * 0.5) / width;
      const size = 1.5 + Math.sin(time * 2 + i * 0.1) * 0.5;
      if (Math.random() > 0.7 || distFromCenter < 0.3) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
})();



/* ============================================
   Smooth Scroll to Anchors (native)
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
