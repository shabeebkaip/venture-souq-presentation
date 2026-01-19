# VenterSouq - Business Setup Partner in Saudi Arabia

A premium presentation-style landing page built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## Features

- 🎨 **Premium Dark Theme** - Deep charcoal background with gradient glows
- ✨ **Glassmorphism UI** - Blur effects, soft borders, and elegant cards
- 🎭 **Smooth Animations** - Scroll reveals and hover interactions
- 📱 **Fully Responsive** - Beautiful on all devices
- ⚡ **Next.js 15** - Latest App Router with React 19
- 🎨 **Tailwind CSS v4** - Modern utility-first styling
- 🎬 **Framer Motion** - Professional animations

## Design Inspiration

Inspired by modern pitch deck presentations like [9hdigital.com](https://9hdigital.com/)

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ventersouq/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── GlassCard.tsx    # Glassmorphism card component
│       ├── Section.tsx      # Scroll section wrapper
│       └── SlideHeading.tsx # Animated heading component
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Update Contact Information

Edit the contact details in `src/app/page.tsx` (Slide 15):

```tsx
Phone: +966 XXX XXX XXX
Email: your@email.com
Website: yourwebsite.com
```

### Change Colors

Modify the glow colors and gradients in `src/app/globals.css`:

```css
.glow-blue { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3); }
.glow-purple { box-shadow: 0 0 40px rgba(168, 85, 247, 0.3); }
.glow-cyan { box-shadow: 0 0 40px rgba(6, 182, 212, 0.3); }
```

### Adjust Animations

Customize animation timing in `tailwind.config.ts` or component props.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set
- **TypeScript** - Type safety

## License

MIT

---

Built with ❤️ for Saudi Arabia's entrepreneurial ecosystem
# venture-souq-presentation
