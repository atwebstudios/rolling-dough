# Rolling Dough - Pizza Catering Website

A modern, responsive website for **Rolling Dough**, a Perth-based pizza food truck catering service. Built with React, Vite, and Tailwind CSS for a seamless user experience across all devices.

## 🍕 Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Interactive Gallery**: Masonry layout showcasing pizza and event photography
- **Contact Management**: Complete contact form with contact information and FAQ section
- **Hero Carousel**: Auto-rotating images with smooth transitions
- **Package Showcase**: Event types and dietary options
- **Why Choose Us**: Statistics and feature highlights
- **FAQ Section**: Expandable questions and answers
- **Social Integration**: Footer with social media links

## 🛠️ Tech Stack

- **Frontend**: React 18+ with React Router
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Font**: Delius (custom font for headings)
- **Package Manager**: npm

## 📁 Project Structure

```
RollingDough/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation and mobile menu
│   │   └── Footer.jsx          # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero and features
│   │   ├── Gallery.jsx         # Masonry gallery layout
│   │   └── ContactUs.jsx       # Contact form and info
│   ├── App.jsx                 # Main app component with routing
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point
├── public/                      # Static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🎨 Color Palette

- **Brand Green**: `#2d4a3e` (primary, dark backgrounds)
- **Green Accents**: `green-800`, `green-600`, `green-100`
- **Brand Coral**: `#d4634d` (CTAs, interactive elements)
- **Light Background**: `#f5f1e8`
- **Accent Gold**: `#d4a574` (hover states)

## 📱 Responsive Breakpoints

- **Mobile**: Default (320px+)
- **Tablet**: `sm:` (640px+), `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd RollingDough
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📄 Page Overview

### Home (`src/pages/Home.jsx`)
- **Hero Section**: Auto-rotating carousel with CTA buttons
- **Dietary Options**: 3 cards showcasing dietary accommodations
- **Event Packages**: 4 event type cards
- **Why Choose Rolling Dough**: 
  - 4 Statistics cards with gradients
  - 6 Feature cards with icons
- **FAQ Section**: 4 expandable questions
- **Call-to-Action**: Booking encouragement banner

### Gallery (`src/pages/Gallery.jsx`)
- Masonry layout using CSS Grid
- Variable-height image cards with hover effects
- Image scaling animation on hover
- Dark overlay with title display
- 12 sample gallery items with categories

### Contact Us (`src/pages/ContactUs.jsx`)
- **Contact Information**: Phone, email, location, hours
- **Contact Form**: 
  - Required fields: Name, Email, Phone, Message
  - Optional fields: Event Date, Guest Count
  - Form validation and submission
  - Success confirmation message (3-second auto-reset)
- **FAQ Section**: 4 collapsible items with browser-native `<details>` element

### Navbar (`src/components/Navbar.jsx`)
- Navigation menu with React Router links
- Mobile menu toggle with animated hamburger icon
- Menu positioned below navbar on mobile
- Responsive padding and layout

### Footer (`src/components/Footer.jsx`)
- Logo (tablet and up)
- Social media icons (Facebook, etc.)
- Copyright text with custom styling
- Fully responsive layout

## 🔧 Configuration Files

### `package.json`
Defines project dependencies and scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### `vite.config.js`
Vite configuration with React plugin support

### `eslint.config.js`
ESLint rules for code quality

## 🎯 Key Components & Features

### Form Handling
Contact form uses React `useState` hook for state management:
```javascript
const [formData, setFormData] = useState({
  name: '', email: '', phone: '', 
  eventDate: '', guestCount: '', message: ''
});
```

### Gallery Masonry Layout
CSS Grid implementation with dynamic row spanning:
```javascript
gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
gridAutoRows: '250px',
gridRow: `span ${rowSpan}` // Variable row spans
```

### Mobile Menu Animation
Hamburger icon rotates on toggle:
- Closed: Hamburger icon (≡)
- Open: Close icon (✕) with `transform rotate-90`

### Auto-Rotating Carousel
Home page hero with 5-second interval:
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex(prev => (prev + 1) % carouselImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

## 📝 Styling Notes

- **Custom Font**: Delius applied via inline styles on headings: `style={{ fontFamily: 'Delius' }}`
- **Tailwind Classes**: 
  - `bg-linear-to-br` for gradient backgrounds (formerly `bg-gradient-to-br`)
  - `shrink-0` for flex items (formerly `flex-shrink-0`)
  - `scale-110 transition-transform` for hover effects
  - `bg-black/40` for semi-transparent overlays

## 🔄 State Management

All state managed with React hooks (`useState`, `useEffect`):
- **Navigation**: `useState` for mobile menu visibility
- **Forms**: `useState` for form data and submission status
- **Carousel**: `useState` for current image index
- **Accordions**: `useState` for FAQ/details toggle state

## ✅ Testing

Run ESLint to check code quality:
```bash
npm run lint
```

## 📦 Dependencies

Key dependencies in `package.json`:
- `react` - UI library
- `react-router-dom` - Routing
- `tailwindcss` - Utility-first CSS
- `vite` - Build tool

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔮 Future Enhancements

- [ ] WhatsApp social media integration
- [ ] Form backend integration (email service)
- [ ] Blog/News section
- [ ] Testimonials section
- [ ] Video integration
- [ ] Team section
- [ ] About Us page
- [ ] Animated counters for statistics
- [ ] Google Maps integration for service areas

## 📧 Contact & Support

**Rolling Dough** - Perth Pizza Catering Service
- Phone: (08) XXXX XXXX
- Email: info@rollingdough.com
- Service Area: All Perth, Western Australia

## 📄 License

This project is proprietary and owned by Rolling Dough.

## 👨‍💻 Development Team

Built and maintained by **AtWebStudios**

---

**Last Updated**: November 2025
