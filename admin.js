let currentData = JSON.parse(JSON.stringify(portfolioData));

document.addEventListener("DOMContentLoaded", () => {
  if (!currentData.problemSolving) currentData.problemSolving = [];
  if (!currentData.achievements) currentData.achievements = [];
  if (!currentData.customSections) currentData.customSections = {};
  if (!currentData.profile.social.kaggle) currentData.profile.social.kaggle = "";
  loadData();
});

function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach((el) => el.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document.querySelector(`button[onclick="switchTab('${tabId}')"]`).classList.add("active");
}

function loadData() {
  document.getElementById("p-name").value = currentData.profile.name;
  document.getElementById("p-roles").value = currentData.profile.roles.join(", ");
  document.getElementById("p-bio").value = currentData.profile.bio;
  document.getElementById("p-email").value = currentData.profile.email;
  document.getElementById("p-phone").value = currentData.profile.phone;
  document.getElementById("p-location").value = currentData.profile.location;
  document.getElementById("p-image").value = currentData.profile.profileImage || "";
  document.getElementById("p-resume").value = currentData.profile.resume || "";
  document.getElementById("s-github").value = currentData.profile.social.github;
  document.getElementById("s-linkedin").value = currentData.profile.social.linkedin;
  document.getElementById("s-huggingface").value = currentData.profile.social.huggingface;
  document.getElementById("s-kaggle").value = currentData.profile.social.kaggle || "";

  renderSections();
  renderLists();
}

/* ================= SECTIONS MANAGER ================= */
function renderSections() {
  const container = document.getElementById("sections-list");
  container.innerHTML = currentData.sections
    .map((sec, idx) => {
      const isHero = sec.type === "hero";
      const isCustom = sec.type === "custom";
      const itemCount = isCustom ? ((currentData.customSections[sec.id] || []).length) : null;
      return `
        <div class="section-row">
          <div style="display:flex; flex-direction:column; gap:4px;">
            <button class="icon-tool" onclick="moveSection(${idx}, -1)" ${idx === 0 ? "disabled" : ""}><i class="fas fa-chevron-up"></i></button>
            <button class="icon-tool" onclick="moveSection(${idx}, 1)" ${idx === currentData.sections.length - 1 ? "disabled" : ""}><i class="fas fa-chevron-down"></i></button>
          </div>
          <input type="text" value="${escapeAttr(sec.title)}" ${isHero ? "disabled" : ""} placeholder="Section title" onchange="renameSection(${idx}, this.value)">
          <span class="section-type-badge">${isHero ? "hero (fixed)" : sec.type}</span>
          ${isCustom ? `<span class="section-type-badge">${itemCount} card${itemCount === 1 ? "" : "s"}</span>` : ""}
          <label class="switch"><input type="checkbox" ${sec.enabled ? "checked" : ""} ${isHero ? "disabled" : ""} onchange="toggleSection(${idx}, this.checked)"><span class="slider"></span></label>
          ${isCustom ? `<button class="icon-tool" onclick="toggleCustomPanel(${idx})" title="Manage cards"><i class="fas fa-layer-group"></i></button>` : ""}
          ${isCustom ? `<button class="icon-tool danger" onclick="removeSection(${idx})" title="Delete section"><i class="fas fa-trash"></i></button>` : ""}
        </div>
        ${isCustom ? `<div class="custom-items-panel" id="custom-panel-${idx}">${renderCustomItemsEditor(sec.id)}</div>` : ""}
      `;
    })
    .join("");
}

function escapeAttr(s) {
  return (s || "").replace(/"/g, "&quot;");
}

function moveSection(idx, dir) {
  const target = idx + dir;
  if (target < 0 || target >= currentData.sections.length) return;
  if (currentData.sections[idx].type === "hero" || currentData.sections[target].type === "hero") return;
  const arr = currentData.sections;
  [arr[idx], arr[target]] = [arr[target], arr[idx]];
  renderSections();
}

function toggleSection(idx, val) {
  currentData.sections[idx].enabled = val;
}

function renameSection(idx, val) {
  currentData.sections[idx].title = val;
}

function removeSection(idx) {
  const sec = currentData.sections[idx];
  if (!confirm(`Delete the "${sec.title}" section and all its cards? This can't be undone.`)) return;
  delete currentData.customSections[sec.id];
  currentData.sections.splice(idx, 1);
  renderSections();
}

function addCustomSection() {
  const title = prompt("Section title (e.g. Research, Publications, Certifications):");
  if (!title || !title.trim()) return;
  const id = "sec-" + title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Math.floor(Math.random() * 1000);
  currentData.sections.push({ id, type: "custom", enabled: true, title: title.trim() });
  currentData.customSections[id] = [];
  renderSections();
}

function toggleCustomPanel(idx) {
  const panel = document.getElementById(`custom-panel-${idx}`);
  panel.classList.toggle("open");
}

function renderCustomItemsEditor(sectionId) {
  const items = currentData.customSections[sectionId] || [];
  const cards = items
    .map(
      (item, i) => `
      <div class="item-card">
        <div class="item-toolbar"><button class="icon-tool danger" onclick="removeCustomItem('${sectionId}', ${i})"><i class="fas fa-trash"></i></button></div>
        <div class="form-group"><label>Title</label><input type="text" value="${escapeAttr(item.title)}" onchange="updateCustomItem('${sectionId}', ${i}, 'title', this.value)"></div>
        <div class="form-group"><label>Subtitle</label><input type="text" value="${escapeAttr(item.subtitle)}" onchange="updateCustomItem('${sectionId}', ${i}, 'subtitle', this.value)"></div>
        <div class="form-group"><label>Description</label><textarea onchange="updateCustomItem('${sectionId}', ${i}, 'description', this.value)">${item.description || ""}</textarea></div>
        <div class="form-group"><label>Tags <span class="hint">comma separated</span></label><input type="text" value="${(item.tags || []).join(", ")}" onchange="updateCustomItem('${sectionId}', ${i}, 'tags', this.value)"></div>
        <div class="form-group"><label>Link</label><input type="text" value="${escapeAttr(item.link)}" onchange="updateCustomItem('${sectionId}', ${i}, 'link', this.value)"></div>
      </div>
    `
    )
    .join("");
  return `${cards || '<p class="empty-hint">No cards yet.</p>'}<button class="btn-secondary" onclick="addCustomItem('${sectionId}')">+ Add Card</button>`;
}

function addCustomItem(sectionId) {
  if (!currentData.customSections[sectionId]) currentData.customSections[sectionId] = [];
  currentData.customSections[sectionId].push({ title: "New Card", subtitle: "", description: "", tags: [], link: "" });
  renderSections();
  const idx = currentData.sections.findIndex((s) => s.id === sectionId);
  document.getElementById(`custom-panel-${idx}`)?.classList.add("open");
}

function removeCustomItem(sectionId, i) {
  currentData.customSections[sectionId].splice(i, 1);
  renderSections();
  const idx = currentData.sections.findIndex((s) => s.id === sectionId);
  document.getElementById(`custom-panel-${idx}`)?.classList.add("open");
}

function updateCustomItem(sectionId, i, field, value) {
  if (field === "tags") {
    currentData.customSections[sectionId][i].tags = value.split(",").map((s) => s.trim()).filter(Boolean);
  } else {
    currentData.customSections[sectionId][i][field] = value;
  }
}

/* ================= EXISTING LIST SECTIONS ================= */
function renderLists() {
  const eduContainer = document.getElementById("education-list");
  eduContainer.innerHTML = currentData.education
    .map(
      (edu, idx) => `
        <div class="item-card">
            <div class="item-toolbar"><button class="icon-tool danger" onclick="removeItem('education', ${idx})"><i class="fas fa-trash"></i></button></div>
            <div class="form-group"><label>Degree</label><input type="text" value="${escapeAttr(edu.degree)}" onchange="updateItem('education', ${idx}, 'degree', this.value)"></div>
            <div class="form-group"><label>Institution</label><input type="text" value="${escapeAttr(edu.institution)}" onchange="updateItem('education', ${idx}, 'institution', this.value)"></div>
            <div class="form-row">
              <div class="form-group"><label>Year</label><input type="text" value="${escapeAttr(edu.year)}" onchange="updateItem('education', ${idx}, 'year', this.value)"></div>
              <div class="form-group"><label>Score</label><input type="text" value="${escapeAttr(edu.score)}" onchange="updateItem('education', ${idx}, 'score', this.value)"></div>
            </div>
        </div>`
    )
    .join("");

  const probContainer = document.getElementById("problems-list");
  probContainer.innerHTML = (currentData.problemSolving || [])
    .map(
      (prob, idx) => `
        <div class="item-card">
            <div class="item-toolbar"><button class="icon-tool danger" onclick="removeItem('problemSolving', ${idx})"><i class="fas fa-trash"></i></button></div>
            <div class="form-group"><label>Platform Name</label><input type="text" value="${escapeAttr(prob.platform)}" onchange="updateItem('problemSolving', ${idx}, 'platform', this.value)"></div>
            <div class="form-group"><label>Stats <span class="hint">e.g. 100+ Solved</span></label><input type="text" value="${escapeAttr(prob.stats)}" onchange="updateItem('problemSolving', ${idx}, 'stats', this.value)"></div>
            <div class="form-group"><label>Profile Link</label><input type="text" value="${escapeAttr(prob.link)}" onchange="updateItem('problemSolving', ${idx}, 'link', this.value)"></div>
            <div class="form-group"><label>Icon Class <span class="hint">e.g. fas fa-code</span></label><input type="text" value="${escapeAttr(prob.icon)}" onchange="updateItem('problemSolving', ${idx}, 'icon', this.value)"></div>
        </div>`
    )
    .join("");

  const skillsContainer = document.getElementById("skills-list");
  skillsContainer.innerHTML = currentData.skills
    .map(
      (cat, idx) => `
        <div class="item-card">
            <div class="item-toolbar"><button class="icon-tool danger" onclick="removeItem('skills', ${idx})"><i class="fas fa-trash"></i></button></div>
            <div class="form-group"><label>Category</label><input type="text" value="${escapeAttr(cat.category)}" onchange="updateItem('skills', ${idx}, 'category', this.value)"></div>
            <div class="form-group"><label>Items <span class="hint">comma separated</span></label><input type="text" value="${cat.items.join(", ")}" onchange="updateItem('skills', ${idx}, 'items', this.value)"></div>
        </div>`
    )
    .join("");

  const expContainer = document.getElementById("experience-list");
  expContainer.innerHTML = currentData.experience
    .map(
      (exp, idx) => `
        <div class="item-card">
            <div class="item-toolbar"><button class="icon-tool danger" onclick="removeItem('experience', ${idx})"><i class="fas fa-trash"></i></button></div>
            <div class="form-row">
              <div class="form-group"><label>Role</label><input type="text" value="${escapeAttr(exp.role)}" onchange="updateItem('experience', ${idx}, 'role', this.value)"></div>
              <div class="form-group"><label>Company</label><input type="text" value="${escapeAttr(exp.company)}" onchange="updateItem('experience', ${idx}, 'company', this.value)"></div>
            </div>
            <div class="form-group"><label>Duration</label><input type="text" value="${escapeAttr(exp.duration)}" onchange="updateItem('experience', ${idx}, 'duration', this.value)"></div>
            <div class="form-group"><label>Description</label><textarea onchange="updateItem('experience', ${idx}, 'description', this.value)">${exp.description}</textarea></div>
        </div>`
    )
    .join("");

  renderProjects();

  const achContainer = document.getElementById("achievements-list");
  achContainer.innerHTML = currentData.achievements
    .map(
      (a, idx) => `
        <div class="item-card">
            <div class="item-toolbar"><button class="icon-tool danger" onclick="removeItem('achievements', ${idx})"><i class="fas fa-trash"></i></button></div>
            <div class="form-row">
              <div class="form-group"><label>Title</label><input type="text" value="${escapeAttr(a.title)}" onchange="updateItem('achievements', ${idx}, 'title', this.value)"></div>
              <div class="form-group"><label>Issuer</label><input type="text" value="${escapeAttr(a.issuer)}" onchange="updateItem('achievements', ${idx}, 'issuer', this.value)"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label>Date</label><input type="text" value="${escapeAttr(a.date)}" onchange="updateItem('achievements', ${idx}, 'date', this.value)"></div>
              <div class="form-group"><label>Badge/Image URL</label><input type="text" value="${escapeAttr(a.image)}" onchange="updateItem('achievements', ${idx}, 'image', this.value)"></div>
            </div>
            <div class="form-group"><label>Credential Link <span class="hint">optional</span></label><input type="text" value="${escapeAttr(a.link)}" onchange="updateItem('achievements', ${idx}, 'link', this.value)"></div>
            <div class="form-group"><label>Description</label><textarea onchange="updateItem('achievements', ${idx}, 'description', this.value)">${a.description || ""}</textarea></div>
        </div>`
    )
    .join("");
}

function renderProjects() {
  const projectsContainer = document.getElementById("projects-list");
  projectsContainer.innerHTML = currentData.projects
    .map(
      (proj, idx) => `
        <div class="item-card">
            <div class="item-toolbar">
              <button class="icon-tool" onclick="moveProject(${idx}, -1)" ${idx === 0 ? "disabled" : ""} title="Move up"><i class="fas fa-chevron-up"></i></button>
              <button class="icon-tool" onclick="moveProject(${idx}, 1)" ${idx === currentData.projects.length - 1 ? "disabled" : ""} title="Move down"><i class="fas fa-chevron-down"></i></button>
              <button class="icon-tool danger" onclick="removeItem('projects', ${idx})" title="Delete"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-group"><label>Title</label><input type="text" value="${escapeAttr(proj.title)}" onchange="updateItem('projects', ${idx}, 'title', this.value)"></div>
            <div class="form-group"><label>Short Description</label><textarea onchange="updateItem('projects', ${idx}, 'description', this.value)" style="height:60px;">${proj.description}</textarea></div>
            <div class="form-group"><label>README Notes <span class="hint">markdown supported — headings, **bold**, lists, links, code</span></label><textarea class="md" onchange="updateItem('projects', ${idx}, 'notes', this.value)">${proj.notes || ""}</textarea></div>
            <div class="form-row">
              <div class="form-group"><label>Icon Class <span class="hint">e.g. fas fa-robot</span></label><input type="text" value="${escapeAttr(proj.icon || "fas fa-code")}" onchange="updateItem('projects', ${idx}, 'icon', this.value)"></div>
              <div class="form-group"><label>Tech Stack <span class="hint">comma separated</span></label><input type="text" value="${proj.tech.join(", ")}" onchange="updateItem('projects', ${idx}, 'tech', this.value)"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label>Demo Link</label><input type="text" value="${escapeAttr(proj.links.demo)}" onchange="updateItem('projects', ${idx}, 'links.demo', this.value)"></div>
              <div class="form-group"><label>GitHub Link</label><input type="text" value="${escapeAttr(proj.links.github)}" onchange="updateItem('projects', ${idx}, 'links.github', this.value)"></div>
            </div>
            <div class="form-group"><label>Demo Video <span class="hint">YouTube URL or direct .mp4 — optional, shows as embedded preview</span></label><input type="text" value="${escapeAttr(proj.video || "")}" onchange="updateItem('projects', ${idx}, 'video', this.value)"></div>
        </div>`
    )
    .join("");
}

function moveProject(idx, dir) {
  const target = idx + dir;
  if (target < 0 || target >= currentData.projects.length) return;
  const arr = currentData.projects;
  [arr[idx], arr[target]] = [arr[target], arr[idx]];
  renderProjects();
}

function updateItem(section, index, field, value) {
  if (section === "skills" && field === "items") {
    currentData.skills[index].items = value.split(",").map((s) => s.trim());
  } else if (section === "projects" && field === "tech") {
    currentData.projects[index].tech = value.split(",").map((s) => s.trim());
  } else if (field.includes(".")) {
    const [parent, child] = field.split(".");
    currentData[section][index][parent][child] = value;
  } else {
    currentData[section][index][field] = value;
  }
}

function removeItem(section, index) {
  if (confirm("Are you sure?")) {
    currentData[section].splice(index, 1);
    if (section === "projects") renderProjects();
    else renderLists();
  }
}

function addSkillCategory() {
  currentData.skills.push({ category: "New Category", items: ["Item 1", "Item 2"] });
  renderLists();
}

function addProject() {
  currentData.projects.push({
    title: "New Project",
    description: "Project description...",
    notes: "## Overview\nWrite about this project here.",
    tech: ["Tech 1", "Tech 2"],
    links: { demo: "#", github: "#" },
    video: "",
    icon: "fas fa-code",
  });
  renderProjects();
}

function addEducation() {
  currentData.education.push({ degree: "Degree Name", institution: "University Name", year: "202X - 202X", score: "CGPA: X.X" });
  renderLists();
}

function addExperience() {
  currentData.experience.push({ role: "Role Name", company: "Company Name", duration: "Jan 202X - Present", description: "Description..." });
  renderLists();
}

function addProblemSolving() {
  if (!currentData.problemSolving) currentData.problemSolving = [];
  currentData.problemSolving.push({ platform: "New Platform", stats: "Stats here", link: "#", icon: "fas fa-code" });
  renderLists();
}

function addAchievement() {
  currentData.achievements.push({ title: "New Achievement", issuer: "Issuing organization", date: "2026", link: "", image: "", description: "" });
  renderLists();
}

function generateCode() {
  currentData.profile.name = document.getElementById("p-name").value;
  currentData.profile.roles = document.getElementById("p-roles").value.split(",").map((s) => s.trim());
  currentData.profile.bio = document.getElementById("p-bio").value;
  currentData.profile.email = document.getElementById("p-email").value;
  currentData.profile.phone = document.getElementById("p-phone").value;
  currentData.profile.location = document.getElementById("p-location").value;
  currentData.profile.profileImage = document.getElementById("p-image").value;
  currentData.profile.resume = document.getElementById("p-resume").value;

  currentData.profile.social.github = document.getElementById("s-github").value;
  currentData.profile.social.linkedin = document.getElementById("s-linkedin").value;
  currentData.profile.social.huggingface = document.getElementById("s-huggingface").value;
  currentData.profile.social.kaggle = document.getElementById("s-kaggle").value;
  currentData.profile.social.email = "mailto:" + currentData.profile.email;

  const code = `const portfolioData = ${JSON.stringify(currentData, null, 4)};`;

  const exportArea = document.getElementById("export-area");
  exportArea.style.display = "block";
  exportArea.value = code;
  exportArea.select();
  document.execCommand("copy");
  alert("Code copied to clipboard! Paste it into data.js");
}