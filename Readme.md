# 🧑‍💻 Personal Portfolio Website

A clean, minimal personal portfolio built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies — just fast, lightweight, and fully customizable.

---

## ✨ Features

- **Responsive design** — mobile-first layout that adapts across all screen sizes
- **Smooth scroll animations** — fade-in effects triggered by an Intersection Observer
- **Fixed navigation** — glassmorphism-style navbar with scroll-aware border
- **Hero section** — two-column layout with animated rotating badge
- **Skills section** — hard and soft skills displayed as interactive chips
- **Software tools** — icon-labeled tool cards
- **Projects grid** — 3-column card grid with hover lift effect
- **CTA banner** — full-width dark call-to-action strip
- **Experience timeline** — role list paired with company logo grid
- **Contact section** — contact info + inquiry form

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── style.css
├── script.js   
└── README.md       
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```
## 2. Test
Serve it with a local dev server for live reload:

```bash
# Using VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"

# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then visit `http://localhost:8000`.

---

## ✏️ Customization

### Personal Info

| Placeholder | Where to find it | What to replace with |
|---|---|---|
| `Your Name` | Nav, footer, hero | Your full name |
| `YN` | Logo icon (×2) | Your initials |
| `hello@yourname.com` | CTA banner, footer, contact form | Your email address |
| `2+` | Hero badge, skills badge | Your years of experience |
| `Available for work` | Hero eyebrow | Your current status |

### Hero Section

```html
<h1 class="headline">
  Designing experiences that matter.   <!-- ← Your headline -->
</h1>
<p class="subheadline">
  I'm a designer & developer...        <!-- ← Your tagline -->
</p>
```

### Skills

Find the `.skill-chips` divs under `<!-- SKILLS -->` and edit the chip labels:

```html
<div class="chip"><span class="chip-dot"></span>UI Design</div>
```

### Software Tools

Find `<!-- SOFTWARE -->` and update the tool list. Each item follows this pattern:

```html
<div class="soft-item">
  <div class="soft-icon" style="background:#ffe3e3;color:#e64545">Fg</div>
  Figma
</div>
```

Change the icon background/text color, abbreviation, and label to match your tools.

### Projects

Find `<!-- PROJECTS -->` and update the 3 project cards:

```html
<div class="project-tags">
  <span class="project-tag">UI Design</span>
  <span class="project-tag">Web</span>
</div>
<div class="project-title">Project Name One</div>
<div class="project-desc">A brief description...</div>
```

To add a real project image, replace the `.project-img-bg` div with an `<img>` tag:

```html
<div class="project-img">
  <img src="assets/project-1.jpg" alt="Project One" style="width:100%;height:100%;object-fit:cover;">
</div>
```

### Experience

Find `<!-- EXPERIENCE -->` and update the role entries and company logo cards.

### Profile Photo

In the hero section, replace the placeholder with your photo:

```html
<!-- Remove this placeholder block -->
<div class="hero-photo-placeholder">...</div>

<!-- Add your image inside .hero-photo-frame -->
<img src="assets/photo.jpg" alt="Your Name"
  style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;">
```

### Social Links

In the footer, update the href values:

```html
<a href="mailto:hello@yourname.com">Email</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://behance.net/yourusername">Behance</a>
<a href="https://github.com/yourusername">GitHub</a>
```

---

## 🎨 Theming

CSS custom properties are defined at `style.css` Licenseese to retheme the entire site:

```css
:root {
  --bg: #f9f8f5;        /* Page background */
  --text: #1a1a1a;      /* Primary text & accents */
  --muted: #888;        /* Secondary text */
  --border: #e0ddd6;    /* Borders and dividers */
  --card-bg: #fff;      /* Card backgrounds */
  --tag-bg: #f0ede6;    /* Project tag pills */
}
```

### Fonts

The site uses [Miriam Libre](https://fonts.google.com/specimen/Miriam+Libre) loaded from Google Fonts. To change it, swap the `@import` at the top and update `font-family` in the `body` rule.

---

## 🌐 Deployment

### GitHub Pages (free, recommended)

1. Push your code to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify

1. Drag and drop your project folder at [netlify.com/drop](https://app.netlify.com/drop)
2. Get an instant live URL — no account needed

### Vercel

```bash
npx vercel
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and content |
| CSS3 | Styling, animations, CSS variables, Grid, Flexbox |
| Vanilla JavaScript | Scroll effects, Intersection Observer |
| Google Fonts | Miriam Libre typeface |

---

## 📄 License

This project is open source and available under the [GPL 3.0](LICENSE).

---

## 🤝 Contributing

Found a bug or want to improve something? Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create a new branch: `git checkout -b fix/your-fix`
3. Commit your changes: `git commit -m 'Fix: description'`
4. Push to the branch: `git push origin fix/your-fix`
5. Open a pull request

---

Made with care. ☕ (Documentation Built with Claude)
