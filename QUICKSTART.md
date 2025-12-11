# Quick Start Guide - Enhanced Portfolio

## 🚀 Getting Started

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Set Up Environment Variables
Create a `.env.local` file:
\`\`\`env
RESEND_API_KEY=your_resend_api_key_here
UMAMI_DOMAIN=your_umami_domain (optional)
UMAMI_SITE_ID=your_umami_site_id (optional)
\`\`\`

### 3. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Visit: http://localhost:3000

---

## 📝 What to Customize

### Personal Information
📁 `src/data/config.ts`
\`\`\`typescript
{
  title: "Yash Dharme | AI Enthusiast",
  email: "yashdharme@gmail.com",
  site: "https://yashdharme.com",
  social: {
    twitter: "your_twitter_url",
    linkedin: "your_linkedin_url",
    github: "your_github_url",
    // ... update all social links
  }
}
\`\`\`

### Statistics/Achievements
📁 `src/components/sections/stats.tsx`
\`\`\`typescript
const stats = [
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 1000, label: "GitHub Contributions", suffix: "+" },
  { value: 20, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "+" },
];
\`\`\`

### Resume Link
📁 `src/components/sections/hero.tsx`
Update the Google Drive link to your resume.

### Typing Animation Roles
📁 `src/components/sections/hero.tsx`
\`\`\`typescript
<TypingAnimation 
  texts={[
    "AI Enthusiast",
    "Full Stack Developer", 
    "DevOps Engineer",
    "Problem Solver"
    // Add your roles here
  ]}
/>
\`\`\`

---

## 🎨 Styling & Theming

### Gradient Colors
Most components use purple/pink gradients. To change:

**Scroll Progress**: `src/components/scroll-progress.tsx`
\`\`\`typescript
className="... bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
\`\`\`

**Gradient Text**: Use predefined gradients or create custom ones
\`\`\`typescript
<GradientText gradient="rainbow">Text</GradientText>
// Options: purple, blue, rainbow, sunset, ocean
\`\`\`

---

## 🔧 Component Usage

### Use Tilt Effect
\`\`\`tsx
import TiltCard from "@/components/ui/tilt-card";

<TiltCard className="your-classes">
  <YourContent />
</TiltCard>
\`\`\`

### Use Spotlight Effect
\`\`\`tsx
import SpotlightCard from "@/components/ui/spotlight-card";

<SpotlightCard spotlightColor="rgba(147, 51, 234, 0.1)">
  <YourContent />
</SpotlightCard>
\`\`\`

### Use Animations
\`\`\`tsx
import { FadeInUp, ScaleIn } from "@/components/advanced-animations";

<FadeInUp delay={0.2}>
  <div>Fades in from bottom</div>
</FadeInUp>

<ScaleIn delay={0.4}>
  <div>Scales up with spring</div>
</ScaleIn>
\`\`\`

---

## 📦 Build & Deploy

### Build for Production
\`\`\`bash
npm run build
\`\`\`

### Deploy to Vercel
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

---

## 🐛 Troubleshooting

### Animations not working?
- Check if Framer Motion is installed: `npm list framer-motion`
- Ensure `"use client"` is at the top of component files

### Stats not animating?
- Make sure you're scrolling to trigger viewport animations
- Check browser console for errors

### Form not sending emails?
- Verify `RESEND_API_KEY` is set in `.env.local`
- Check Resend dashboard for API status

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Performance Tips

1. **Images**: Optimize all images before adding
2. **Fonts**: Use Next.js font optimization
3. **Animations**: Keep `once: true` for viewport animations
4. **Bundle**: Monitor bundle size with `npm run build`

---

## 📞 Support

For issues or questions:
1. Check `ENHANCEMENTS.md` for detailed docs
2. Review component files for inline comments
3. Check Next.js and Framer Motion documentation

---

## ✨ Feature Checklist

- [ ] Update personal information in config.ts
- [ ] Update all social media links
- [ ] Add your resume link
- [ ] Customize statistics numbers
- [ ] Update typing animation roles
- [ ] Add your projects
- [ ] Test contact form with Resend
- [ ] Optimize images in public/assets
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Deploy to production

---

**Happy coding! 🚀**

Your enhanced portfolio is ready to impress visitors!
