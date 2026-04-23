# Towner Distributor Opportunity Platform

A beautiful, bilingual (Kannada/English) Next.js landing page for the Towner Distributor Opportunity program. This application is production-ready and fully deployable on Vercel.

## Features

- ✨ Stunning bilingual UI (Kannada & English)
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- 🚀 Optimized for performance
- ♿ Semantic HTML for accessibility
- 📊 Interactive income charts and progress indicators
- 🎮 Engaging gamification elements
- 💚 Government-backed initiative showcase

## Tech Stack

- **Framework**: Next.js 16 (with App Router)
- **Styling**: Pure CSS with CSS animations
- **Fonts**: Google Fonts (DM Sans, Baloo Tamma 2, Noto Sans Kannada)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/KCTU2026/Townerdistributor.git
cd Townerdistributor

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata and fonts
├── page.tsx            # Main landing page component
└── globals.css         # Global styles and animations
```

## Deployment

This project is configured for easy deployment on Vercel:

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 3: Deploy via Vercel Dashboard

1. Visit [https://vercel.com/new](https://vercel.com/new)
2. Select "GitHub" as your Git provider
3. Choose the repository
4. Click "Deploy"

## Features Breakdown

### Hero Section
- Gradient background with animated pattern
- Bilingual titles and call-to-action buttons
- Smooth scroll indicator

### Problem & Solution Sections
- Visual problem identification
- Feature highlights with icons
- Responsive grid layouts

### Driver Benefits
- Multiple benefit cards with hover effects
- Organized in responsive grid
- Clear value proposition

### How It Works
- 4-step process visualization
- Step-by-step guidance
- Arrow connectors between steps

### Subscription Plan
- Pricing display
- Subscription benefits list
- Clear value proposition

### Income Opportunity
- Animated bar charts showing earning potential
- Statistics boxes
- Growth projection visualization

### Gamification Section
- Progress bar with animation
- Milestone tracking (100, 500, 1000 drivers)
- Interactive milestone selection

### Call-to-Action
- Phone and WhatsApp contact options
- Eye-catching button designs
- Clear next steps

## Styling Details

### Color Scheme
- **Primary Blue**: `#0D47A1`
- **Accent Orange**: `#F4520A`
- **Success Green**: `#1B7A3E`
- **Accent Gold**: `#F5A623`
- **Dark Background**: `#0A0E1A`

### Typography
- **Headings**: Baloo Tamma 2 (Kannada), DM Sans (English)
- **Body**: Noto Sans Kannada (Kannada), DM Sans (English)
- **Font Sizing**: Responsive scaling for mobile

### Animations
- `fadeDown`: Entrance animation for hero content
- `bounce`: Continuous bounce for scroll indicator
- `shimmer`: Progress bar shine effect
- Hover effects on all interactive elements

## Responsive Design

- Mobile-first approach
- Breakpoint: `768px` for tablet/desktop
- Flexible grid layouts
- Touch-friendly button sizes

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Color contrast compliance
- Keyboard navigation support

## Performance Optimizations

- Next.js 16 Turbopack for fast builds
- Static generation where possible
- Optimized CSS
- Minimal JavaScript bundle
- Google Fonts with `display=swap`

## Environment Variables

Create a `.env.local` file if needed:

```env
# Example environment variables (if needed)
NEXT_PUBLIC_CONTACT_PHONE=+918000000000
NEXT_PUBLIC_CONTACT_WHATSAPP=+918000000000
```

## Troubleshooting

### Build Issues

If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Port Already in Use

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test on mobile and desktop
4. Push to GitHub
5. Create a Pull Request

## License

ISC - See package.json for details

## Support

For issues or questions, create an issue on GitHub or contact the Towner team at +91 8000000000

---

**Built with ❤️ for Towner Distributors**
