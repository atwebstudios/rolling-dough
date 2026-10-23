# Rolling Dough — Wood Fired Pizza Catering

Website for **Rolling Dough**, a premium woodfire pizza catering business based in Perth, Western Australia. Built as a fast, SEO-optimised single-page application with a serverless contact/booking form.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Email | Resend API |
| Deployment | Vercel (serverless) |
| Testing | Vitest |

---

## Features

- **Event booking form** — full validation, package selection, add-ons (Garlic Bread, Bruschetta, Vegan, Gluten Free), custom date picker and dropdown
- **Serverless email handler** (`/api/send-email`) — sends inquiry to the business and a confirmation email to the customer via Resend
- **Rate limiting** — max 20 submissions per IP per hour
- **Gallery** — full photo gallery of past events
- **SEO** — dynamic meta tags, sitemap, robots.txt, Open Graph tags per page
- **Responsive design** — mobile-first layout with animated mobile nav

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, packages, dietary options, why choose us, FAQ |
| `/about` | About Us |
| `/gallery` | Photo gallery |
| `/contactus` | Contact & booking form |
| `*` | 404 Not Found |

---

## Project Structure

```
rolling-dough/
├── api/
│   └── send-email.js        # Vercel serverless function (Resend integration)
├── public/
│   ├── logo.png
│   ├── hero.png
│   ├── classic_pizza_menu.png
│   ├── unlimited_pizza_menu.png
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FAQSection.jsx
│   │   ├── CustomDatePicker.jsx
│   │   ├── CustomDropdown.jsx
│   │   └── ErrorBoundary.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Gallery.jsx
│   │   ├── ContactUs.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   ├── seoUtils.js
│   │   └── validations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) account and API key

### Install

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_BUSINESS_EMAIL=business@yourdomain.com
RESEND_CONFIRMATION_EMAIL=noreply@yourdomain.com
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm test
```

---

## Deployment

The project is deployed on **Vercel**. The `vercel.json` rewrites all routes to `/` for client-side routing. The `api/` folder is automatically picked up as Vercel serverless functions.

Push to `main` to trigger a production deploy.

---

## Event Packages

| Package | Price | Details |
|---|---|---|
| Classic | $25 / person + GST | Personal gourmet pizza per guest |
| Unlimited | $28 / person + GST | 2 hours of unlimited pizza including dessert pizzas |

> Minimum event size: **30 guests**  
> Public holiday surcharge: **15%**

---

## Contact

- Phone: 0478 540 160 / 0433 770 065
- Email: rollingdoughpizza5@gmail.com
- Instagram: [@rollingdoughwoodfired](https://www.instagram.com/rollingdoughwoodfired/)
- Facebook: [Rolling Dough Woodfired Pizza](https://www.facebook.com/p/Rolling-Dough-Woodfired-Pizza-61567309387876/)
- WhatsApp: [Chat](https://wa.me/61433770065)
- Website: [www.rollingdough.com.au](https://www.rollingdough.com.au)

---

*Built by [AtWebStudios](https://atwebstudios.com)*
