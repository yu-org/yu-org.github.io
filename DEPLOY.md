# Deployment Guide

## 🚀 Quick Deploy to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   cd yu-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**
   - Click **Connect to Git**
   - Select your repository
   - Configure build settings:
     - **Framework preset**: Next.js (Static HTML Export)
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
     - **Node version**: 18 or 20
   - Click **Save and Deploy**

### Method 2: Direct Upload

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
npm run build
wrangler pages deploy out --project-name=yu-framework
```

## 🎨 Customization

### Update Content

Edit `app/page.tsx` to modify:
- Hero section text
- Features list
- Enterprise users
- Code examples

### Change Colors

Edit `app/globals.css` to customize the color scheme:
```css
:root {
  --primary: YOUR_COLOR;
  --background: YOUR_COLOR;
}
```

### Update Metadata

Edit `app/layout.tsx` to change:
- Page title
- Description
- Keywords

## 🔧 Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Test production build locally
npx serve out
```

## 📊 Performance

The built site is:
- ✅ Fully static (no server required)
- ✅ ~100KB First Load JS
- ✅ Optimized images
- ✅ Dark mode enabled
- ✅ Responsive design
- ✅ SEO optimized

## 🌐 Custom Domain

1. In Cloudflare Pages dashboard
2. Go to **Custom domains**
3. Click **Set up a custom domain**
4. Follow the DNS configuration steps

## 🐛 Troubleshooting

**Build fails on Cloudflare:**
- Check Node version is set to 18 or 20
- Verify build command is `npm run build`
- Ensure output directory is `out`

**Styling issues:**
- Clear browser cache
- Check Tailwind CSS is properly configured
- Verify all CSS imports are working

**Images not loading:**
- Ensure `next.config.js` has `images.unoptimized: true`
- Use relative paths for all assets

## 📝 Notes

- The site uses dark mode by default
- All external links open in new tabs
- Icons from Lucide React
- Fonts: Inter + JetBrains Mono
