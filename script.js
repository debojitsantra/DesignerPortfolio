
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme (default: dark)
const savedTheme = localStorage.getItem('sm-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('sm-theme', next);
});

//cursor
const cursor   = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left    = mx + 'px';
  cursor.style.top     = my + 'px';
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
  updateMarqueeGlow();
});

document.addEventListener('touchmove', e => {
  if (!e.touches.length) return;
  mx = e.touches[0].clientX; my = e.touches[0].clientY;
  cursor.style.left    = mx + 'px';
  cursor.style.top     = my + 'px';
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
}, { passive: true });

//marquee
const words = [
  'Brand Identity','Motion Design','Typography','Social Media',
  'Campaign Design','Editorial','Branding','D2C',
  'Visual Strategy','Print Design'
];
const track = document.getElementById('marqueeTrack');
if (track) {
  let html2 = '';
  for (let i = 0; i < 2; i++) {
    words.forEach(w => {
      html2 += `<span>${w} <em style="color:var(--accent);font-style:normal">✦</em></span>`;
    });
  }
  track.innerHTML = html2;
}

function updateMarqueeGlow() {
  document.querySelectorAll('.marquee-track span').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.right < 0 || r.left > window.innerWidth) return;
    const cx = r.left + r.width / 2;
    const cy = r.top  + r.height / 2;
    const dist = Math.hypot(mx - cx, my - cy);
    if (dist < 120) {
      el.classList.add('lit'); el.classList.remove('near');
    } else if (dist < 280) {
      el.classList.add('near'); el.classList.remove('lit');
    } else {
      el.classList.remove('lit', 'near');
    }
  });
}

//skills
const skills = [
  { name: 'Branding Design',       pct: 92, color: '#E2FF00' },
  { name: 'Social Media Ads',      pct: 90, color: '#ff6b35' },
  { name: 'Campaign Design',       pct: 88, color: '#31a8ff' },
  { name: 'Digital & Print Media', pct: 87, color: '#9396ff' },
  { name: 'Editorial & Layout',    pct: 85, color: '#E2FF00' },
  { name: 'Motion Graphics',       pct: 72, color: '#ff3c82' },
];

const barsEl = document.getElementById('skillBars');
if (barsEl) {
  skills.forEach(s => {
    const item = document.createElement('div');
    item.className = 'skill-item sr';
    item.innerHTML = `
      <div class="skill-label">
        <span>${s.name}</span>
        <span class="skill-pct">${s.pct}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-pct="${s.pct}"
          style="background:${s.color};box-shadow:0 0 12px ${s.color}55;"></div>
      </div>`;
    barsEl.appendChild(item);
  });
}


const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.pct + '%';
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });


document.querySelectorAll('.skill-bar-fill').forEach(b => barObs.observe(b));


const revealData = {
  text: "Let's create something remarkable together",
  accent: ['remarkable']
};
const rl = document.getElementById('revealLine');
if (rl) {
  revealData.text.split(' ').forEach((word, i) => {
    const clean = word.replace(/[^a-z]/gi,'').toLowerCase();
    const span = document.createElement('span');
    span.className = 'reveal-word' + (revealData.accent.includes(clean) ? ' accent-word' : '');
    span.style.transitionDelay = (i * 0.09) + 's';
    span.textContent = word;
    rl.appendChild(span);
  });

  const rlObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.reveal-word').forEach(el => el.classList.add('revealed'));
      rlObs.disconnect();
    }
  }, { threshold: 0.4 });
  rlObs.observe(rl);
}


function initScrollReveal() {
  const srObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        
        const siblings = Array.from(e.target.parentElement.querySelectorAll('.sr'));
        const idx = siblings.indexOf(e.target);
        e.target.style.transitionDelay = (idx % 4 * 0.1) + 's';
        e.target.classList.add('visible');
        srObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.sr').forEach(el => srObs.observe(el));
}


setTimeout(initScrollReveal, 0);

//nav
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});


const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    const isActive = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', isActive);
  });
}, { passive: true });


window.addEventListener('scroll', () => {
  const heroBg = document.getElementById('heroBg');
  if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
}, { passive: true });


const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('formBtn');
    const original = btn.textContent;
    btn.textContent = 'Sent! ✓';
    btn.style.background = '#4cff91';
    btn.style.color = '#000';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}