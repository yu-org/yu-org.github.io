# Yu Framework Website

A modern, minimal landing page for the Yu blockchain framework.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

Build for production:

```bash
npm run build
```

This creates a static export in the `out/` directory.

## Deploy to Cloudflare Pages

### Option 1: Connect Git Repository

1. Push this code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your GitHub repository
5. Use these build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 18 or higher

### Option 2: Direct Upload

```bash
npm run build
npx wrangler pages deploy out
```

## Environment Variables

No environment variables required for basic deployment.

## License

Same as Yu framework - Apache 2.0
