# Docuiq - Setup Instructions

## 🚀 Getting Started

Your React + TypeScript + Tailwind CSS application is ready! Follow these steps to run it.

---

## ⚙️ Commands to Run

### 1. Navigate to Project Directory
```bash
cd "c:\Users\Utkarsh\Documents\Daap Projects\Docuiq"
```

### 2. Start Development Server
```bash
npm run dev
```

This will start the Vite development server. You should see output like:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 3. Open in Browser
Open your browser and navigate to `http://localhost:5173/`

---

## 📁 Project Structure

```
Docuiq/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with dropdowns
│   │   ├── Footer.tsx              # Multi-column footer
│   │   └── sections/
│   │       ├── Hero.tsx            # Hero section with gradient
│   │       ├── Features.tsx        # Features grid with filters
│   │       ├── Products.tsx        # Product showcase (CSR, CTD, Search)
│   │       ├── DocumentTypes.tsx   # Document type pills
│   │       ├── WhyChoose.tsx       # Benefits section
│   │       ├── Security.tsx        # Security features
│   │       └── CTA.tsx             # Call-to-action section
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Tailwind base styles
├── public/                         # Static assets (logos, icons)
├── tailwind.config.js              # Tailwind configuration
├── index.html                      # HTML template
└── package.json                    # Dependencies
```

---

## 🎨 Features Implemented

### ✅ Shared Components
- **Navbar**: Sticky navigation with Products/Company dropdowns, responsive mobile menu
- **Footer**: Multi-column layout with links and social media

### ✅ Page Sections
1. **Hero**: Gradient background, badge, headline, dual CTAs, logo carousel
2. **Features**: 4-column grid with category filters and hover effects
3. **Products**: Tabbed showcase for CSR, CTD Automation, and Regulatory Search
4. **Document Types**: Pill-style badges for document categories
5. **Why Choose**: 4 benefit cards with icons
6. **Security**: 3 security features with colored icon backgrounds
7. **CTA**: Final call-to-action with gradient headline

### ✅ Design System
- Custom Tailwind theme with Ritivel color palette
- Indigo/purple gradients for primary elements
- Dark navy backgrounds for contrast sections
- Inter font family throughout
- Responsive grid layouts
- Smooth animations and transitions

---

## 🛠️ Available Commands

### Development
```bash
npm run dev        # Start development server
```

### Production Build
```bash
npm run build      # Build for production
npm run preview    # Preview production build
```

### Linting
```bash
npm run lint       # Run ESLint
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (2-column layouts)
- **Desktop**: > 1024px (full multi-column layouts)

---

## 🎯 Next Steps (Optional Enhancements)

1. **Add Real Content**: Replace placeholder text with actual content
2. **Image Optimization**: Add product mockup images to enhance visual appeal
3. **Animation Library**: Consider adding Framer Motion for advanced animations
4. **Form Functionality**: Implement actual form submission for "Book a Demo"
5. **Analytics**: Add tracking for user interactions
6. **Blog Integration**: Connect to a CMS for blog content
7. **SEO**: Add structured data and meta tags for better search visibility

---

## 📝 Notes

- All components are fully typed with TypeScript
- Tailwind classes follow utility-first approach
- Components are modular and reusable
- Mobile-first responsive design
- Semantic HTML for accessibility

---

**Ready to see your website? Run `npm run dev` and open http://localhost:5173 in your browser!** 🎉
