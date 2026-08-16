document.addEventListener("DOMContentLoaded", () => {
  buildLattice();

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const setIcon = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    };
    setIcon();
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
      setIcon();
    });
  }

  const isSiteShell = document.getElementById("sections-root");
  if (isSiteShell) renderPortfolio();

  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
      if (themeToggle) {
        if (window.scrollY > 40) themeToggle.classList.add("scrolled");
        else themeToggle.classList.remove("scrolled");
      }
    }
    parallaxLattice();
    if (isSiteShell) updateScrollSpy();
  });

  if (isSiteShell) initAnimations();
});

/* =========================================================
   LATTICE BACKGROUND
   ========================================================= */
function buildLattice() {
  const wrapper = document.getElementById("lattice-container");
  if (!wrapper) return;

  const W = 1600, H = 2600;
  const layers = [4, 6, 8, 6, 3]; // perceptron-ish layer sizes
  const layerX = (i) => 120 + i * ((W - 240) / (layers.length - 1));
  const nodePositions = [];

  layers.forEach((count, li) => {
    const col = [];
    for (let n = 0; n < count; n++) {
      const y = (H / (count + 1)) * (n + 1) + (li % 2 === 0 ? 0 : 60);
      col.push({ x: layerX(li), y });
    }
    nodePositions.push(col);
  });

  let edges = "";
  for (let li = 0; li < nodePositions.length - 1; li++) {
    nodePositions[li].forEach((a) => {
      nodePositions[li + 1].forEach((b) => {
        if (Math.random() > 0.55) {
          edges += `<path class="edge" d="M${a.x},${a.y} C${(a.x+b.x)/2},${a.y} ${(a.x+b.x)/2},${b.y} ${b.x},${b.y}" />`;
        }
      });
    });
  }

  const pops = ["pop-indigo", "pop-cyan", "pop-rose", "pop-amber"];
  let nodes = "";
  nodePositions.forEach((col) => {
    col.forEach((p, idx) => {
      const isPop = Math.random() > 0.85;
      const cls = isPop ? `node ${pops[Math.floor(Math.random() * pops.length)]}` : "node";
      const pulsing = isPop && Math.random() > 0.4;
      const r = isPop ? 6 : 3.5;
      const style = pulsing ? `style="--r:${r};--delay:${(Math.random()*4).toFixed(2)}s"` : "";
      nodes += `<circle class="${cls}${pulsing ? " pulsing" : ""}" cx="${p.x}" cy="${p.y}" r="${r}" ${style} />`;
    });
  });

  // A couple of extra math/attention glyphs scattered for a "data science" feel
  const glyphs = `
    <path class="glyph" d="M180,${H*0.72} q40,-60 80,0 q40,60 80,0" />
    <circle class="glyph" cx="${W*0.15}" cy="${H*0.42}" r="34" />
    <path class="glyph" d="M${W*0.68},${H*0.55} h60 M${W*0.68+30},${H*0.55} v60" />
  `;

  wrapper.innerHTML = `
    <svg class="lattice-svg" id="lattice-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
      ${edges}
      ${glyphs}
      ${nodes}
    </svg>
  `;
}

function parallaxLattice() {
  const svg = document.getElementById("lattice-svg");
  if (!svg) return;
  const shift = window.scrollY * 0.12;
  svg.style.transform = `translateY(-${shift}px)`;
}

/* =========================================================
   MAIN RENDER — driven by data.sections
   ========================================================= */
function renderPortfolio() {
  const data = portfolioData;
  const root = document.getElementById("sections-root");
  const navList = document.getElementById("nav-links");
  root.innerHTML = "";
  navList.innerHTML = "";

  const enabled = data.sections.filter((s) => s.enabled);

  enabled.forEach((section) => {
    if (section.type !== "hero") {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${section.id}">${section.title || section.id}</a>`;
      navList.appendChild(li);
    }

    const el = renderSection(section, data);
    if (el) root.appendChild(el);
  });

  attachSmoothScroll();
}

function renderSection(section, data) {
  switch (section.type) {
    case "hero": return renderHero(section, data);
    case "about": return renderAbout(section, data);
    case "education": return renderEducation(section, data);
    case "problemSolving": return renderProblemSolving(section, data);
    case "skills": return renderSkills(section, data);
    case "experience": return renderExperience(section, data);
    case "projects": return renderProjects(section, data);
    case "achievements": return renderAchievements(section, data);
    case "contact": return renderContact(section, data);
    case "custom": return renderCustom(section, data);
    default: return null;
  }
}

function el(tag, attrs = {}, html = "") {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  node.innerHTML = html;
  return node;
}

function sectionWrap(id, inner, wide) {
  const s = document.createElement("section");
  s.id = id;
  s.innerHTML = `<div class="container">${inner}</div>`;
  return s;
}

function headHTML(section, eyebrow) {
  if (!section.title) return "";
  return `
    <div class="section-head">
      ${eyebrow ? `<span class="section-eyebrow">${eyebrow}</span>` : ""}
      <h2>${section.title}</h2>
    </div>
  `;
}

/* ---------- HERO ---------- */
function renderHero(section, data) {
  const p = data.profile;
  const socials = [
    { url: p.social.github, icon: "fab fa-github" },
    { url: p.social.linkedin, icon: "fab fa-linkedin" },
    { url: p.social.huggingface, icon: "custom-hf" },
    { url: p.social.kaggle, icon: "fab fa-kaggle" },
    { url: p.social.email, icon: "fas fa-envelope" }
  ].filter((s) => s.url);

  const socialHTML = socials
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener" class="social-icon">${s.icon === "custom-hf" ? "🤗" : `<i class="${s.icon}"></i>`}</a>`)
    .join("");

  const s = document.createElement("section");
  s.className = "hero";
  s.id = section.id;
  s.innerHTML = `
    <div class="container">
      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-kicker">Hello, I'm</span>
          <h1>${p.name}</h1>
          <h2 class="gradient-text">${p.roles.join(" · ")}</h2>
          <p class="lead">${p.bio}</p>
          <div class="cta-group">
            <a href="#projects" class="btn-primary">View Projects</a>
            ${p.resume ? `<a href="${p.resume}" target="_blank" class="btn-ghost"><i class="fas fa-file-arrow-down"></i>&nbsp; Resume</a>` : ""}
            <div class="social-links">${socialHTML}</div>
          </div>
        </div>
        <div class="hero-image-container">
          <img src="${p.profileImage}" alt="${p.name}" class="hero-img" onerror="this.style.display='none'">
        </div>
      </div>
    </div>
    <a href="#about" class="scroll-cue"><i class="fas fa-chevron-down"></i></a>
  `;
  return s;
}

/* ---------- ABOUT ---------- */
function renderAbout(section, data) {
  const a = data.about;
  const highlights = (a.highlights || [])
    .map((h) => `<div class="highlight-stat"><span class="value">${h.value}</span><span class="label">${h.label}</span></div>`)
    .join("");

  return sectionWrap(section.id, `
    ${headHTML(section, "Who I am")}
    <div class="about-grid">
      <div class="glass-card"><p style="color:var(--text-secondary); font-size:1.05rem;">${a.summary}</p></div>
      ${highlights ? `<div class="glass-card about-highlights">${highlights}</div>` : ""}
    </div>
  `);
}

/* ---------- EDUCATION ---------- */
function renderEducation(section, data) {
  const cards = data.education.map((edu) => `
    <div class="glass-card education-card">
      <h3>${edu.degree}</h3>
      <span class="gradient-text" style="font-weight:600;">${edu.institution}</span>
      <div class="education-meta"><span>${edu.year}</span><span>${edu.score}</span></div>
    </div>
  `).join("");

  return sectionWrap(section.id, `${headHTML(section, "Academics")}<div class="education-grid">${cards}</div>`);
}

/* ---------- PROBLEM SOLVING ---------- */
function renderProblemSolving(section, data) {
  const list = data.problemSolving || [];
  if (!list.length) return null;
  const cards = list.map((prob) => `
    <div class="glass-card problem-card">
      <div class="problem-icon"><i class="${prob.icon || 'fas fa-code'}"></i></div>
      <div class="problem-info">
        <h3>${prob.platform}</h3>
        <p class="stat-line">${prob.stats}</p>
        ${prob.link ? `<a href="${prob.link}" target="_blank" rel="noopener">View Profile <i class="fas fa-arrow-right"></i></a>` : ""}
      </div>
    </div>
  `).join("");

  return sectionWrap(section.id, `${headHTML(section, "Practice")}<div class="education-grid">${cards}</div>`);
}

/* ---------- SKILLS ---------- */
function renderSkills(section, data) {
  const cats = data.skills.map((cat) => `
    <div class="glass-card skill-category">
      <h4>${cat.category}</h4>
      <div class="skill-tags">${cat.items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}</div>
    </div>
  `).join("");

  return sectionWrap(section.id, `${headHTML(section, "Toolbox")}<div class="skills-grid">${cats}</div>`);
}

/* ---------- EXPERIENCE ---------- */
function renderExperience(section, data) {
  const items = data.experience.map((exp) => `
    <div class="timeline-item">
      <span class="timeline-date">${exp.duration}</span>
      <h3>${exp.role}</h3>
      <h4 class="gradient-text" style="background:none; -webkit-text-fill-color:var(--text-secondary);">${exp.company}</h4>
      <p>${exp.description}</p>
    </div>
  `).join("");

  return sectionWrap(section.id, `${headHTML(section, "Journey")}<div class="timeline">${items}</div>`);
}

/* ---------- PROJECTS ---------- */
function renderProjects(section, data) {
  const projects = data.projects;

  const cards = projects.map((proj, index) => {
    const hasDemo = proj.links && proj.links.demo && proj.links.demo !== "#";
    const hasGithub = proj.links && proj.links.github && proj.links.github !== "#";
    const hasNotes = proj.notes && proj.notes.trim().length > 0;
    const hasVideo = proj.video && proj.video.trim().length > 0;

    let media = "";
    if (hasVideo) {
      const yt = toYouTubeEmbed(proj.video);
      media = `<div class="project-media">${yt ? `<iframe src="${yt}" title="${proj.title} demo" allowfullscreen loading="lazy"></iframe>` : `<video src="${proj.video}" controls preload="metadata"></video>`}</div>`;
    }

    return `
      <div class="glass-card project-card">
        ${media}
        <div class="project-body">
          <div class="project-header">
            <h3>${proj.title}</h3>
            <div class="project-icon"><i class="${proj.icon || 'fas fa-code'}"></i></div>
          </div>
          <p class="project-desc">${proj.description}</p>
          <div class="project-tech">${proj.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>
          <div class="project-links">
            <button class="btn-notes" onclick="openModal(${index})" title="${hasNotes ? 'Read project notes' : 'No notes added yet'}">
              <i class="fas fa-book"></i> Notes
            </button>
            ${hasDemo ? `<a href="${proj.links.demo}" target="_blank" rel="noopener" class="live-demo-btn"><i class="fas fa-external-link-alt"></i> Live</a>` : ""}
            ${hasGithub ? `<a href="${proj.links.github}" target="_blank" rel="noopener" class="icon-btn" title="GitHub"><i class="fab fa-github"></i></a>` : ""}
          </div>
        </div>
      </div>
    `;
  }).join("");

  window.__sortedProjects = projects;
  return sectionWrap(section.id, `${headHTML(section, "Build log")}<div class="project-grid">${cards}</div>`);
}

function toYouTubeEmbed(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

/* ---------- ACHIEVEMENTS ---------- */
function renderAchievements(section, data) {
  const list = data.achievements || [];
  if (!list.length) return null;
  const cards = list.map((a) => `
    <div class="glass-card achievement-card">
      <div class="achievement-top">
        <div class="achievement-badge">${a.image ? `<img src="${a.image}" alt="${a.title}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-award\\'></i>'">` : `<i class="fas fa-award"></i>`}</div>
        <div>
          <h3>${a.title}</h3>
          <span class="achievement-issuer">${a.issuer}${a.date ? ` · ${a.date}` : ""}</span>
        </div>
      </div>
      ${a.description ? `<p>${a.description}</p>` : ""}
      ${a.link ? `<a href="${a.link}" target="_blank" rel="noopener" class="achievement-link">View<i class="fas fa-arrow-right"></i></a>` : ""}
    </div>
  `).join("");

  return sectionWrap(section.id, `${headHTML(section, "Recognition")}<div class="achievements-grid">${cards}</div>`);
}

/* ---------- CUSTOM SECTIONS ---------- */
function renderCustom(section, data) {
  const items = (data.customSections && data.customSections[section.id]) || [];
  if (!items.length) return null;
  const cards = items.map((c) => `
    <div class="glass-card custom-card">
      <h3>${c.title || ""}</h3>
      ${c.subtitle ? `<span class="gradient-text" style="font-weight:600; display:block; margin-bottom:8px;">${c.subtitle}</span>` : ""}
      ${c.description ? `<p>${c.description}</p>` : ""}
      ${c.tags && c.tags.length ? `<div class="tags">${c.tags.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>` : ""}
      ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener" class="achievement-link" style="margin-top:14px; display:inline-flex;">Open <i class="fas fa-arrow-right"></i></a>` : ""}
    </div>
  `).join("");

  return sectionWrap(section.id, `${headHTML(section, "More")}<div class="custom-grid">${cards}</div>`);
}

/* ---------- CONTACT ---------- */
function renderContact(section, data) {
  const p = data.profile;
  return sectionWrap(section.id, `
    <div class="contact-wrapper">
      <span class="section-eyebrow" style="justify-content:center;">Get in touch</span>
      <h2>${section.title || "Let's Work Together"}</h2>
      <p style="margin-bottom: 10px;">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      <a href="${p.social.email}" class="btn-primary contact-btn">Say Hello</a>
      <div class="email-display">
        <i class="fas fa-envelope"></i>
        <span id="email-text">${p.email}</span>
        <button class="copy-btn" onclick="copyEmail(this)"><i class="fas fa-copy"></i></button>
      </div>
      <div class="contact-meta">
        <p>${p.phone}</p>
        <p>${p.location}</p>
      </div>
    </div>
  `);
}

/* =========================================================
   README-STYLE PROJECT MODAL
   ========================================================= */
window.openModal = function (index) {
  const project = window.__sortedProjects[index];
  document.getElementById("modal-title").innerText = project.title;
  document.getElementById("modal-filename").innerText = "README.md";
  const body = project.notes && project.notes.trim().length
    ? mdToHtml(project.notes)
    : `<p>No notes added yet for this project. Open the admin panel to write one — it renders here like a GitHub README.</p>`;
  document.getElementById("modal-body").innerHTML = body;

  const modal = document.getElementById("project-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeModal = function () {
  document.getElementById("project-modal").classList.remove("active");
  document.body.style.overflow = "auto";
};

document.addEventListener("click", (e) => {
  if (e.target.id === "project-modal") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* Minimal markdown -> HTML (headings, bold/italic, code, lists, links, blockquote) */
function mdToHtml(src) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let inCode = false, codeBuf = "";
  let listBuf = [], listType = null;

  const flushList = () => {
    if (listBuf.length) {
      html += `<${listType}>${listBuf.map((li) => `<li>${inline(li)}</li>`).join("")}</${listType}>`;
      listBuf = [];
      listType = null;
    }
  };

  const inline = (t) => {
    t = esc(t);
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  };

  for (const raw of lines) {
    const line = raw;
    if (line.trim().startsWith("```")) {
      if (!inCode) { inCode = true; codeBuf = ""; }
      else { html += `<pre><code>${esc(codeBuf)}</code></pre>`; inCode = false; }
      continue;
    }
    if (inCode) { codeBuf += line + "\n"; continue; }

    if (!line.trim()) { flushList(); continue; }

    let m;
    if ((m = line.match(/^###\s+(.*)/))) { flushList(); html += `<h3>${inline(m[1])}</h3>`; continue; }
    if ((m = line.match(/^##\s+(.*)/))) { flushList(); html += `<h2>${inline(m[1])}</h2>`; continue; }
    if ((m = line.match(/^#\s+(.*)/))) { flushList(); html += `<h1>${inline(m[1])}</h1>`; continue; }
    if ((m = line.match(/^>\s?(.*)/))) { flushList(); html += `<blockquote>${inline(m[1])}</blockquote>`; continue; }
    if ((m = line.match(/^---+$/))) { flushList(); html += `<hr>`; continue; }
    if ((m = line.match(/^[-*]\s+(.*)/))) {
      if (listType !== "ul") { flushList(); listType = "ul"; }
      listBuf.push(m[1]);
      continue;
    }
    if ((m = line.match(/^\d+\.\s+(.*)/))) {
      if (listType !== "ol") { flushList(); listType = "ol"; }
      listBuf.push(m[1]);
      continue;
    }

    flushList();
    html += `<p>${inline(line)}</p>`;
  }
  flushList();
  return html;
}

/* =========================================================
   MISC UX
   ========================================================= */
function attachSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function updateScrollSpy() {
  const links = document.querySelectorAll(".nav-links a");
  if (!links.length) return;
  let currentId = null;
  document.querySelectorAll("main > section[id]").forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) currentId = sec.id;
  });
  links.forEach((a) => {
    a.classList.toggle("active", currentId && a.getAttribute("href") === `#${currentId}`);
  });
}

function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".glass-card, h2, .hero-content > *, .timeline-item")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });
}

window.copyEmail = function (btn) {
  const email = document.getElementById("email-text").innerText;
  navigator.clipboard.writeText(email).then(() => {
    btn.classList.add("copied");
    const icon = btn.querySelector("i");
    icon.classList.remove("fa-copy");
    icon.classList.add("fa-check");
    setTimeout(() => {
      btn.classList.remove("copied");
      icon.classList.remove("fa-check");
      icon.classList.add("fa-copy");
    }, 2000);
  });
};