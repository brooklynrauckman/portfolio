# Portfolio

A modern, bold portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── Nav.tsx
│   ├── Intro.tsx
│   ├── Project.tsx
│   ├── Skills.tsx
├── lib/              # Utilities
│   └── config.ts     # Project & skills data
└── public/           # Static assets
```

## Deployment to Vercel

This project is optimized for Vercel deployment. Here are two ways to deploy:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure everything
6. Click "Deploy"

That's it! Your site will be live in minutes.

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. In your project directory, run:

```bash
vercel
```

3. Follow the prompts to link your project

4. For production deployment:

```bash
vercel --prod
```

### Environment Variables

If you need any environment variables, add them in the Vercel dashboard under Project Settings → Environment Variables.

### Custom Domain

You can add a custom domain in the Vercel dashboard under Project Settings → Domains.

## Notes

- Add a screenshot of Habit Challenge project to `/public/habit-challenge.png` and update the thumbnail path in `lib/config.ts`
- Skill icons for Laravel, PHP, Vercel, Figma, TypeScript, Next.js, and Tailwind are using placeholder icons. Replace with actual icons when available.
