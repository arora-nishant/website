# Personal Website

A fast, minimal, and classy personal website with an integrated blog. Built with pure HTML, CSS, and JavaScript—no frameworks, no build tools required (unless you want to use Markdown for blog posts).

## Features

- **Clean, Minimalist Design** - Grey borders, elegant typography, content-focused layout
- **Fast & Responsive** - Works perfectly on all devices with no frameworks
- **Easy Blog Management** - Write posts in Markdown or HTML
- **Contact Form** - Built-in Netlify form that sends messages to your email (free!)
- **Resume Page** - Embedded PDF viewer with download option
- **Profile Picture** - Circular profile image on home page
- **No Dependencies** - Pure HTML/CSS/JS (optional Node.js for Markdown conversion)
- **Free Hosting** - Ready to deploy on Netlify (or Vercel, GitHub Pages)
- **SEO Friendly** - Semantic HTML with proper meta tags

## Getting Started

### 1. Customize Your Content

Replace placeholder content with your own information:

- **index.html** - Update the "About Me" section with your background
- **experience.html** - Add your work experience, education, and skills
- **contact.html** - Update with your email and social media links
- **resume.html** - Add your resume PDF to `files/resume.pdf`
- **images/profile.jpg** - Add your profile picture (400x400px recommended)
- **All files** - Replace "Your Name" with your actual name throughout

### 2. Preview Locally

You can preview the website locally using any static file server:

**Using Python:**
```bash
npm run dev
# or
python3 -m http.server 8000
```

**Using Node.js:**
```bash
npx serve
```

Then open http://localhost:8000 in your browser.

### 3. Write Blog Posts

See [HOW_TO_BLOG.md](HOW_TO_BLOG.md) for detailed instructions.

**Quick start:**
1. Create a Markdown file in `blog/markdown/`
2. Run `npm run md2html` to convert it to HTML
3. Commit and push

### 4. Deploy to Netlify

This website is configured for easy deployment on Netlify with automatic deployments.

**Quick Deploy (2 minutes):**
1. Push your code to GitHub (already done!)
2. Go to [netlify.com](https://netlify.com) and sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Click "Deploy site" - Netlify auto-detects everything!
6. Your site is live at `https://your-site-name.netlify.app`

**That's it!** Every push to main will auto-deploy.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions, custom domains, and more options.

## Project Structure

```
.
├── index.html              # Home page with profile picture
├── experience.html         # Experience and skills
├── contact.html           # Contact page with form
├── resume.html            # Resume viewer and download
├── blog.html              # Blog listing page
├── styles.css             # All styles (grey borders, serif fonts)
├── images/                # Profile picture and other images
├── files/                 # Resume PDF and other files
├── .nojekyll              # Tells GitHub Pages not to use Jekyll
├── blog/
│   ├── posts.json         # Blog post metadata (auto-generated)
│   ├── markdown/          # Write posts here (Markdown)
│   └── posts/             # Generated HTML posts
├── js/
│   └── blog-loader.js     # Loads blog posts dynamically
├── scripts/
│   └── markdown-to-html.js # Converts Markdown to HTML
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment
```

## Writing Blog Posts

### Option 1: Markdown (Recommended)

1. Create `blog/markdown/my-post.md`:

```markdown
---
title: My First Post
slug: my-first-post
date: 2024-01-25
excerpt: A brief summary of my post.
---

# My First Post

Your content here...
```

2. Convert to HTML:
```bash
npm run md2html
```

3. Commit and push!

### Option 2: HTML

Create an HTML file directly in `blog/posts/` using an existing post as a template.

See [HOW_TO_BLOG.md](HOW_TO_BLOG.md) for complete instructions.

## Customization

### Colors and Fonts

Edit the CSS variables in `styles.css`:

```css
:root {
    --text-primary: #1a1a1a;
    --text-secondary: #666;
    --accent-color: #0066cc;
    --background: #ffffff;
    /* ... */
}
```

### Adding Sections

The website is built with standard HTML. Just add new sections to the existing pages or create new HTML files.

### Adding Images

1. Create an `images/` folder in the root
2. Add your images there
3. Reference them in your HTML: `<img src="images/photo.jpg" alt="Description">`

## Performance

This website is optimized for performance:

- ✅ No JavaScript frameworks
- ✅ Minimal CSS
- ✅ No external dependencies
- ✅ Fast loading on all devices
- ✅ Works without JavaScript (blog posts require JS for listing)

## Browser Support

Works on all modern browsers:
- Chrome, Edge, Safari, Firefox (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Alternative Hosting Options

While this is configured for Netlify, you can host it anywhere:

- **Vercel** - Similar to Netlify, excellent performance
- **GitHub Pages** - Free hosting from GitHub (see .github/workflows/deploy.yml)
- **Cloudflare Pages** - Fast global CDN, free tier
- **Any static host** - Just upload the files!

## Development

No build step required! Just edit the HTML/CSS files and refresh your browser.

Optional: If you want to use the Markdown converter, you need Node.js installed.

## Contributing

This is your personal website! Customize it however you like. The code is intentionally simple and well-commented to make modifications easy.

## License

MIT License - Feel free to use this as a template for your own website.

## Questions?

Check out:
- [HOW_TO_BLOG.md](HOW_TO_BLOG.md) - Blog post guide
- The example posts in `blog/posts/` - See how posts are structured
- The code comments - Explanations throughout the code

---

**Built with ❤️ and minimal JavaScript**
