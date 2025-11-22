document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Render Content from data.js ---
    renderPortfolio();

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 4. Scroll Animations (Fade In) ---
    initAnimations();

    // --- 5. Mouse Parallax for Orbs ---
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const orbs = document.querySelectorAll('.orb');

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

            orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});

function renderPortfolio() {
    const data = portfolioData;

    // Hero
    const heroHTML = `
        <div class="hero-content">
            <span class="section-subtitle">Hello, I am</span>
            <h1>${data.profile.name}</h1>
            <h2 class="gradient-text">${data.profile.roles.join(' & ')}</h2>
            <p>${data.profile.bio}</p>
            <div class="cta-group">
                <a href="#projects" class="btn-primary">View Projects</a>
                <div class="social-links">
                    <a href="${data.profile.social.github}" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
                    <a href="${data.profile.social.linkedin}" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
                    <a href="${data.profile.social.huggingface}" target="_blank" class="social-icon">🤗</a>
                    <a href="${data.profile.social.email}" class="social-icon"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
        <div class="hero-image-container">
            <img src="${data.profile.profileImage}" alt="${data.profile.name}" class="hero-img">
        </div>
    `;
    document.getElementById('hero-content').innerHTML = heroHTML;

    // About
    document.getElementById('about-content').innerHTML = `
        <p>${data.about.summary}</p>
    `;

    // Education
    const eduHTML = data.education.map(edu => `
        <div class="glass-card education-card">
            <h3>${edu.degree}</h3>
            <span class="gradient-text">${edu.institution}</span>
            <div style="margin-top: 10px; color: var(--text-secondary); display: flex; justify-content: space-between;">
                <span>${edu.year}</span>
                <span>${edu.score}</span>
            </div>
        </div>
    `).join('');
    document.getElementById('education-container').innerHTML = eduHTML;

    // Skills
    const skillsHTML = data.skills.map(cat => `
        <div class="glass-card skill-category">
            <h4>${cat.category}</h4>
            <div class="skill-tags">
                ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
    document.getElementById('skills-container').innerHTML = skillsHTML;

    // Experience
    const expHTML = data.experience.map(exp => `
        <div class="timeline-item">
            <span class="timeline-date">${exp.duration}</span>
            <h3>${exp.role}</h3>
            <h4 class="gradient-text">${exp.company}</h4>
            <p>${exp.description}</p>
        </div>
    `).join('');
    document.getElementById('experience-container').innerHTML = expHTML;

    // Projects
    const projHTML = data.projects.map(proj => `
        <div class="glass-card project-card">
            <div class="project-header">
                <div class="project-icon"><i class="${proj.icon || 'fas fa-code'}"></i></div>
                <div class="project-links">
                    <a href="${proj.links.demo}" target="_blank" class="live-demo-btn">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${proj.links.github}" target="_blank" class="github-link" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <h3>${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-tech">
                ${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
    document.getElementById('projects-container').innerHTML = projHTML;

    // Contact
    document.getElementById('contact-content').innerHTML = `
        <span class="section-subtitle">Get In Touch</span>
        <h2>Let's Work Together</h2>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
        </p>
        <a href="${data.profile.social.email}" class="btn-primary contact-btn">Say Hello</a>
        
        <div class="email-display">
            <i class="fas fa-envelope"></i>
            <span id="email-text">${data.profile.email}</span>
            <button class="copy-btn" onclick="copyEmail(this)" title="Copy Email">
                <i class="fas fa-copy"></i>
            </button>
        </div>

        <div style="margin-top: 50px; color: var(--text-secondary); font-size: 0.9rem;">
            <p>${data.profile.phone}</p>
            <p>${data.profile.location}</p>
        </div>
    `;
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.glass-card, h2, .hero-content > *, .timeline-item, .hero-image-container');

    animateElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });
}

window.copyEmail = function (btn) {
    const email = document.getElementById('email-text').innerText;
    navigator.clipboard.writeText(email).then(() => {
        btn.classList.add('copied');
        const icon = btn.querySelector('i');
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');

        setTimeout(() => {
            btn.classList.remove('copied');
            icon.classList.remove('fa-check');
            icon.classList.add('fa-copy');
        }, 2000);
    });
}
