# 🚀 Adrin Bershik C J - Portfolio

A modern, responsive portfolio website built with Angular 18+ showcasing my projects, skills, and experience as a Software Engineering Trainee.

[![Angular](https://img.shields.io/badge/Angular-18+-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Responsive Design](https://img.shields.io/badge/Responsive-Design-brightgreen?style=flat)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🌐 Live Demo

**🔗 [View Live Portfolio](https://adrin-bershik-c-j.github.io/portfolio-angular)**

## ✨ Features

### 🎨 **Modern UI/UX**
- **Dark theme** with gradient backgrounds
- **Glassmorphism** design elements
- **Smooth animations** and transitions
- **Interactive hover effects**

### 📱 **Fully Responsive**
- **Mobile-first** design approach
- **Flexible grid layouts** that adapt to all screen sizes
- **Touch-friendly** interactions
- **Optimized typography** with fluid scaling

### 🧭 **Navigation**
- **Sticky header** with scroll effects
- **Mobile hamburger menu** with smooth animations
- **Single Page Application** (SPA) routing
- **Route animations** between sections

### 📧 **Contact Integration**
- **Functional contact form** with validation
- **Direct email integration** via mailto
- **Social media links** (GitHub, LinkedIn, Linktree)
- **Form feedback** and error handling

### ⚡ **Performance**
- **Lazy loading** for optimal performance
- **Optimized animations** with reduced motion support
- **Efficient component architecture**
- **Fast build times** with Angular CLI

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Angular 18+** | Frontend framework |
| **TypeScript** | Type-safe JavaScript |
| **CSS3** | Styling with modern features |
| **Angular Animations** | Smooth page transitions |
| **Angular Router** | Client-side routing |
| **Angular Forms** | Contact form handling |

## 📂 Project Structure

```
adrin-bershik-c-j-portfolio-angular/
├── README.md
├── angular.json                 # Angular CLI configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── src/
    ├── index.html              # Main HTML file
    ├── main.ts                 # Application bootstrap
    ├── styles.css              # Global styles
    └── app/
        ├── app.config.ts       # App configuration
        ├── app.css             # App-level styles
        ├── app.html            # App template
        ├── app.routes.ts       # Route definitions
        ├── app.ts              # Root component
        └── components/         # Feature components
            ├── about/          # About section
            ├── contact/        # Contact form
            ├── footer/         # Footer component
            ├── header/         # Navigation header
            ├── projects/       # Projects showcase
            └── skills/         # Skills grid
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Angular CLI** (v18.0.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adrin-Bershik-C-J/portfolio-angular.git
   cd portfolio-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open in browser**
   ```
   http://localhost:4200
   ```

### 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng lint` | Run code linting |
| `ng e2e` | Run end-to-end tests |

## 📱 Responsive Breakpoints

| Device | Screen Size | Layout Changes |
|--------|-------------|----------------|
| **Desktop** | > 768px | Full grid layouts, side navigation |
| **Tablet** | 481px - 768px | Adjusted spacing, responsive grids |
| **Mobile** | 321px - 480px | Stacked layouts, hamburger menu |
| **Small Mobile** | ≤ 320px | Minimal spacing, single columns |

## 🎯 Sections

### 👨‍💻 About
- Professional introduction
- Profile picture with hover effects
- Call-to-action buttons (Resume, Contact)

### 🚀 Projects
- Featured project cards
- Technology tags
- Project links and descriptions
- Responsive grid layout

### ⚡ Skills
- Interactive skill grid
- Hover animations
- Categorized technologies
- Visual skill indicators

### 📧 Contact
- Functional contact form
- Form validation
- Direct email integration
- Social media links

## 🎨 Customization

### Colors
Update the CSS custom properties in `src/styles.css`:

```css
:root {
  --primary: #34d399;      /* Green accent */
  --secondary: #e5e7eb;    /* Light gray */
  --background: #0b1022;   /* Dark blue */
  --surface: #11162e;      /* Dark surface */
}
```

### Content
Update personal information in component TypeScript files:
- `src/app/components/about/about.ts` - Personal info
- `src/app/components/projects/projects.ts` - Project data
- `src/app/components/skills/skills.ts` - Skills list
- `src/app/components/contact/contact.ts` - Contact details

## 🚀 Deployment

### GitHub Pages
1. **Install Angular GitHub Pages deployer**
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Build and deploy**
   ```bash
   ng build --prod
   ngh --dir=dist/portfolio
   ```

### Netlify
1. **Build the project**
   ```bash
   ng build --prod
   ```

2. **Deploy the `dist/` folder** to Netlify

### Vercel
1. **Connect your GitHub repository** to Vercel
2. **Configure build settings:**
   - Build Command: `ng build`
   - Output Directory: `dist/portfolio`

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📞 Contact

**Adrin Bershik C J**
- 📧 Email: [adrinbershik.2201008@srec.ac.in](mailto:adrinbershik.2201008@srec.ac.in)
- 💼 LinkedIn: [linkedin.com/in/adrinbershik](https://www.linkedin.com/in/adrinbershik/)
- 🐱 GitHub: [github.com/Adrin-Bershik-C-J](https://github.com/Adrin-Bershik-C-J)
- 🔗 Linktree: [linktr.ee/adrinbershik](https://linktr.ee/adrinbershik)

## 🌟 Acknowledgments

- **Angular Team** - For the amazing framework
- **CSS Grid & Flexbox** - For responsive layout capabilities
- **Modern Web Standards** - For enabling rich user experiences

---

⭐ **If you found this project helpful, please consider giving it a star!**

**Built with ❤️ using Angular**
