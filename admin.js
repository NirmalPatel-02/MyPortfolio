let currentData = JSON.parse(JSON.stringify(portfolioData));

document.addEventListener("DOMContentLoaded", () => {
  if (!currentData.problemSolving) currentData.problemSolving = [];
  loadData();
});

function switchTab(tabId) {
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document
    .querySelector(`button[onclick="switchTab('${tabId}')"]`)
    .classList.add("active");
}

function loadData() {
  document.getElementById("p-name").value = currentData.profile.name;
  document.getElementById("p-roles").value =
    currentData.profile.roles.join(", ");
  document.getElementById("p-bio").value = currentData.profile.bio;
  document.getElementById("p-email").value = currentData.profile.email;
  document.getElementById("p-phone").value = currentData.profile.phone;
  document.getElementById("p-location").value = currentData.profile.location;
  document.getElementById("p-image").value =
    currentData.profile.profileImage || "";
  document.getElementById("s-github").value = currentData.profile.social.github;
  document.getElementById("s-linkedin").value =
    currentData.profile.social.linkedin;
  document.getElementById("s-huggingface").value =
    currentData.profile.social.huggingface;

  renderLists();
}

function renderLists() {
  const eduContainer = document.getElementById("education-list");
  eduContainer.innerHTML = currentData.education
    .map(
      (edu, idx) => `
        <div class="item-card">
            <button class="remove-btn" onclick="removeItem('education', ${idx})"><i class="fas fa-trash"></i></button>
            <div class="form-group"><label>Degree</label><input type="text" value="${edu.degree}" onchange="updateItem('education', ${idx}, 'degree', this.value)"></div>
            <div class="form-group"><label>Institution</label><input type="text" value="${edu.institution}" onchange="updateItem('education', ${idx}, 'institution', this.value)"></div>
            <div class="form-group"><label>Year</label><input type="text" value="${edu.year}" onchange="updateItem('education', ${idx}, 'year', this.value)"></div>
            <div class="form-group"><label>Score</label><input type="text" value="${edu.score}" onchange="updateItem('education', ${idx}, 'score', this.value)"></div>
        </div>
    `
    )
    .join("");

  const probContainer = document.getElementById("problems-list");
  probContainer.innerHTML = (currentData.problemSolving || [])
    .map(
      (prob, idx) => `
        <div class="item-card">
            <button class="remove-btn" onclick="removeItem('problemSolving', ${idx})"><i class="fas fa-trash"></i></button>
            <div class="form-group"><label>Platform Name</label><input type="text" value="${
              prob.platform
            }" onchange="updateItem('problemSolving', ${idx}, 'platform', this.value)"></div>
            <div class="form-group"><label>Stats (e.g., 100+ Solved)</label><input type="text" value="${
              prob.stats
            }" onchange="updateItem('problemSolving', ${idx}, 'stats', this.value)"></div>
            <div class="form-group"><label>Profile Link</label><input type="text" value="${
              prob.link
            }" onchange="updateItem('problemSolving', ${idx}, 'link', this.value)"></div>
            <div class="form-group"><label>Icon Class (e.g., fas fa-code)</label><input type="text" value="${
              prob.icon || ""
            }" onchange="updateItem('problemSolving', ${idx}, 'icon', this.value)"></div>
        </div>
    `
    )
    .join("");

  const skillsContainer = document.getElementById("skills-list");
  skillsContainer.innerHTML = currentData.skills
    .map(
      (cat, idx) => `
        <div class="item-card">
            <button class="remove-btn" onclick="removeItem('skills', ${idx})"><i class="fas fa-trash"></i></button>
            <div class="form-group"><label>Category</label><input type="text" value="${
              cat.category
            }" onchange="updateItem('skills', ${idx}, 'category', this.value)"></div>
            <div class="form-group"><label>Items (comma separated)</label><input type="text" value="${cat.items.join(
              ", "
            )}" onchange="updateItem('skills', ${idx}, 'items', this.value)"></div>
        </div>
    `
    )
    .join("");

  const projectsContainer = document.getElementById("projects-list");
  projectsContainer.innerHTML = currentData.projects
    .map(
      (proj, idx) => `
        <div class="item-card">
            <button class="remove-btn" onclick="removeItem('projects', ${idx})"><i class="fas fa-trash"></i></button>
            <div class="form-group"><label>Title</label><input type="text" value="${
              proj.title
            }" onchange="updateItem('projects', ${idx}, 'title', this.value)"></div>
            <div class="form-group"><label>Short Description</label><textarea onchange="updateItem('projects', ${idx}, 'description', this.value)" style="height:60px;">${
        proj.description
      }</textarea></div>
            <div class="form-group"><label>Detailed Notes (For Modal)</label><textarea onchange="updateItem('projects', ${idx}, 'notes', this.value)" style="height:120px;">${
        proj.notes || ""
      }</textarea></div>
            <div class="form-group"><label>Icon Class (e.g., fas fa-robot)</label><input type="text" value="${
              proj.icon || "fas fa-code"
            }" onchange="updateItem('projects', ${idx}, 'icon', this.value)"></div>
            <div class="form-group"><label>Tech Stack (comma separated)</label><input type="text" value="${proj.tech.join(
              ", "
            )}" onchange="updateItem('projects', ${idx}, 'tech', this.value)"></div>
            <div class="form-group"><label>Demo Link</label><input type="text" value="${
              proj.links.demo
            }" onchange="updateItem('projects', ${idx}, 'links.demo', this.value)"></div>
            <div class="form-group"><label>GitHub Link</label><input type="text" value="${
              proj.links.github
            }" onchange="updateItem('projects', ${idx}, 'links.github', this.value)"></div>
        </div>
    `
    )
    .join("");

  const expContainer = document.getElementById("experience-list");
  expContainer.innerHTML = currentData.experience
    .map(
      (exp, idx) => `
        <div class="item-card">
            <button class="remove-btn" onclick="removeItem('experience', ${idx})"><i class="fas fa-trash"></i></button>
            <div class="form-group"><label>Role</label><input type="text" value="${exp.role}" onchange="updateItem('experience', ${idx}, 'role', this.value)"></div>
            <div class="form-group"><label>Company</label><input type="text" value="${exp.company}" onchange="updateItem('experience', ${idx}, 'company', this.value)"></div>
            <div class="form-group"><label>Duration</label><input type="text" value="${exp.duration}" onchange="updateItem('experience', ${idx}, 'duration', this.value)"></div>
            <div class="form-group"><label>Description</label><textarea onchange="updateItem('experience', ${idx}, 'description', this.value)">${exp.description}</textarea></div>
        </div>
    `
    )
    .join("");
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
    renderLists();
  }
}

function addSkillCategory() {
  currentData.skills.push({
    category: "New Category",
    items: ["Item 1", "Item 2"],
  });
  renderLists();
}

function addProject() {
  currentData.projects.push({
    title: "New Project",
    description: "Project description...",
    notes: "Detailed project notes...",
    tech: ["Tech 1", "Tech 2"],
    links: { demo: "#", github: "#" },
    icon: "fas fa-code",
  });
  renderLists();
}

function addEducation() {
  currentData.education.push({
    degree: "Degree Name",
    institution: "University Name",
    year: "202X - 202X",
    score: "CGPA: X.X",
  });
  renderLists();
}

function addExperience() {
  currentData.experience.push({
    role: "Role Name",
    company: "Company Name",
    duration: "Jan 202X - Present",
    description: "Description...",
  });
  renderLists();
}

function addProblemSolving() {
  if (!currentData.problemSolving) currentData.problemSolving = [];
  currentData.problemSolving.push({
    platform: "New Platform",
    stats: "Stats here",
    link: "#",
    icon: "fas fa-code",
  });
  renderLists();
}

function generateCode() {
  currentData.profile.name = document.getElementById("p-name").value;
  currentData.profile.roles = document
    .getElementById("p-roles")
    .value.split(",")
    .map((s) => s.trim());
  currentData.profile.bio = document.getElementById("p-bio").value;
  currentData.profile.email = document.getElementById("p-email").value;
  currentData.profile.phone = document.getElementById("p-phone").value;
  currentData.profile.location = document.getElementById("p-location").value;
  currentData.profile.profileImage = document.getElementById("p-image").value;

  currentData.profile.social.github = document.getElementById("s-github").value;
  currentData.profile.social.linkedin =
    document.getElementById("s-linkedin").value;
  currentData.profile.social.huggingface =
    document.getElementById("s-huggingface").value;
  currentData.profile.social.email = "mailto:" + currentData.profile.email;

  const code = `const portfolioData = ${JSON.stringify(currentData, null, 4)};`;

  const exportArea = document.getElementById("export-area");
  exportArea.style.display = "block";
  exportArea.value = code;
  exportArea.select();
  document.execCommand("copy");
  alert("Code copied to clipboard! Paste it into data.js");
}
