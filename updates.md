# Rolling Dough - Project Updates Log

---

## 📅 October 23, 2026

### ✅ Updated Classic Package Price & Removed Download Menu Buttons
- **Changes**:
  - Updated Classic Package price from $26 to $25 per person (+ GST) across the site (`Home.jsx`, `ContactUs.jsx`, `About.jsx`, and `README.md`).
  - Removed "Download Menu" buttons from both the Classic Package and Unlimited Pizza cards in `Home.jsx`.
- **Files Modified**:
  - `/src/pages/Home.jsx`
  - `/src/pages/ContactUs.jsx`
  - `/src/pages/About.jsx`
  - `/README.md`

---

## 📅 November 27, 2025 - 15:30 UTC

### ✅ Refactored Font Usage: Headings Bold + Body Delius
- **Strategy**: Remove `font-delius` from all headings (except hero), add to body content
- **Files Modified**:
  - `/src/pages/Home.jsx` - Removed from 6 feature headings, added to descriptions & stats
  - `/src/pages/About.jsx` - Removed from all h1/h2/h3, added to story paragraphs & descriptions
  - `/src/pages/Gallery.jsx` - Removed from h1 and item titles
  - `/src/pages/ContactUs.jsx` - Removed from h1/h2, contact h3s; added to contact info text
  - `/src/components/FAQSection.jsx` - Removed from h2 title
  - `/src/pages/NotFound.jsx` - Removed from h1/h2, added to error description

- **Design Pattern**:
  - **Headings**: Bold font-weight, normal font family (system fonts)
  - **Body Content**: Regular weight, `font-delius` (decorative font)
  - **Hero Section**: Unchanged (kept existing styling)

- **Result**: Cleaner hierarchy with readable headings and decorative body text

---

## 📅 November 27, 2025 - 15:05 UTC

### ✅ Refactored Inline Styles to Tailwind CSS Classes
- **Files Modified**: 
  - `/src/pages/About.jsx` - Replaced 14 fontFamily inline styles
  - `/src/pages/ContactUs.jsx` - Replaced 7 fontFamily inline styles + 1 backgroundColor style
  - `/src/pages/Gallery.jsx` - Replaced 2 fontFamily inline styles
  - `/src/components/FAQSection.jsx` - Replaced 1 fontFamily inline style
  - `/src/components/ErrorBoundary.jsx` - Replaced 1 fontFamily inline style
  - `/src/pages/NotFound.jsx` - Replaced 2 fontFamily inline styles

- **Changes**:
  1. Removed all `style={{ fontFamily: 'Delius' }}` inline styles
  2. Replaced with `font-delius` Tailwind utility class
  3. Replaced button backgroundColor inline style with Tailwind classes: `bg-orange-400 hover:bg-orange-500`
  4. Total inline styles eliminated: 28 occurrences
  5. Maintained gridRow inline style in Gallery for CSS Grid (legitimate use case)

- **Rationale**: 
  - Improved code consistency and maintainability
  - Reduced inline CSS bloat
  - Leveraged Tailwind CSS for better code organization
  - Aligned with established design system approach

---

## 📅 November 27, 2025 - 14:45 UTC

### ✅ Updated Business Content & Integrated All Details
- **Files Modified**: 
  - `/src/pages/Home.jsx` - Updated add-ons card, added package notes, updated experience stat
  - `/src/pages/ContactUs.jsx` - Updated contact info (phone, email, ABN), added booking requirements note, added add-ons checkboxes
  - `/src/pages/About.jsx` - Merged personal story, removed Meet the Team section

- **Changes**:
  1. **Home.jsx Package Section**: Updated add-ons card from generic text to specific "Garlic Bread & Bruschetta"
  2. **Home.jsx Important Notes**: Added centered card with minimum 30 guests requirement and 15% public holiday surcharge (max-w-5xl, double border left/right)
  3. **Home.jsx Why Choose Us**: Updated first stat from "5+ Years" to "20+ Years Experience"
  4. **ContactUs.jsx Contact Info**: 
     - Updated phone to 0478 540 160 (combined with alternative 0433 770 065 in one card)
     - Updated email to rollingdoughpizza5@gmail.com (clickable mailto link)
     - Added ABN card: 40 680 206 366
  5. **ContactUs.jsx Booking Note**: Added same requirement notes before form (min 30 guests, 15% holiday surcharge)
  6. **ContactUs.jsx Add-ons**: Added Garlic Bread & Bruschetta checkboxes (side-by-side layout) with state management
  7. **About.jsx Story**: Merged 20+ years experience journey with current narrative, kept original structure
  8. **About.jsx**: Removed entire "Meet the Team" section with 3 team member cards

- **Technical Details**:
  - Added `addOns` array to form state in ContactUs.jsx
  - Created `handleAddOnsChange` function for checkbox management
  - Updated form reset to clear add-ons array
  - All new fields properly styled with Tailwind CSS

- **Impact**: Website now displays accurate business information, package details, add-on options, and founder's authentic story. Professional appearance with complete contact details.

---

## 📅 November 27, 2025 - 14:35 UTC

### ✅ Created Comprehensive Updates Log  
- **Description**: Set up reverse chronological changelog with date/time tracking
- **Format**: Each entry with date/time, status emoji, and detailed changes

---

## 📅 November 27, 2025 - 14:32 UTC

### ✅ Updated Scroll to Top on Form Submission
- **File**: `/src/pages/ContactUs.jsx`
- **Changes**: Removed formRef, scroll to page top instead of form section
- **Git Commit**: `04a8bcb` - Update scroll to top of page on form submission

---

## 📅 November 27, 2025 - 14:28 UTC

### ✅ Added Smooth Scroll After Form Submission
- **File**: `/src/pages/ContactUs.jsx`
- **Changes**: Added useRef, scroll with 100ms delay for UI render
- **Git Commit**: `6788f8c` - Add smooth scroll to Send us a Message section

---

## 📅 November 27, 2025 - 14:25 UTC

### ✅ Improved Mobile Navbar Styling
- **File**: `/src/components/Navbar.jsx`
- **Changes**: Removed focus ring, added border-b-2 to menu items
- **Git Commit**: `1a21d78` - Update mobile navbar styling

---

## 📅 November 27, 2025 - 14:20 UTC

### ✅ Created Custom Dropdown Component
- **File**: `/src/components/CustomDropdown.jsx` (new)
- **Updated**: `/src/pages/ContactUs.jsx`
- **Features**: Mobile-friendly, animated chevron, checkmark selection
- **Git Commit**: `ef20825` - Add custom dropdown component

---

## 📅 November 27, 2025 - 14:15 UTC

### ✅ Code Optimization - Removed Unnecessary Comments
- **Files**: `/api/send-email.js`, `/src/pages/ContactUs.jsx`
- **Reduction**: ~50 lines (~25% average)
- **Changes**: Removed comments, JSX blocks, console.log statements
- **Git Commit**: `2097cd0` - Optimize code and clean up formatting

---

## 📅 November 27, 2025 - 14:10 UTC

### ✅ Implemented Custom Rate Limiter
- **File**: `/api/send-email.js`
- **Features**: IP tracking, 2 req/hour limit, 429 response
- **Git Commit**: `8d16865` - Implement custom rate limiter for serverless

---

## 📅 November 27, 2025 - 14:05 UTC

### ✅ Fixed Rate Limiter - Custom Message Display
- **File**: `/src/pages/ContactUs.jsx`
- **Changes**: Detect 429 status, show friendly message
- **Git Commit**: `8612e20` - Display custom rate limit message

---

## 📅 November 27, 2025 - 14:00 UTC

### ✅ Fixed API Email Handler & Validation
- **File**: `/api/send-email.js`
- **Changes**: Moved Resend init inside handler, env validation, optional customer email
- **Git Commit**: Multiple commits during troubleshooting

---

## 📅 November 27, 2025 - 13:50 UTC

### 🔴 Initial Issues Identified
- **500 Error**: `/api/send-email` endpoint
- **Root Cause**: Incomplete `.env` variables
- **Status**: Started troubleshooting

---

## 📋 Quick Reference

**Latest Commits:**
```
04a8bcb - Update scroll to top
6788f8c - Add smooth scroll
1a21d78 - Mobile navbar
ef20825 - Custom dropdown
2097cd0 - Code optimization
8d16865 - Rate limiter
8612e20 - Rate limit message
```

---

**Format Template for New Entries:**
```
## 📅 YYYY-MM-DD - HH:MM UTC

### ✅/🔴/⏳ [Brief Title]
- **File(s)**: List files changed
- **Changes**: What was modified
- **Impact**: Result/improvement
- **Git Commit**: Hash - message
```

---

*Last Updated: November 27, 2025 - 14:35 UTC*
*Total Changes: 8+ commits | Files Modified: 7 | Files Created: 2*
