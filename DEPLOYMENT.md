# Deployment Guide - Netlify

This website is configured to deploy easily on Netlify with automatic deployments from your Git repository.

## Quick Deploy (2 minutes)

### Option 1: Deploy with Git (Recommended)

1. **Push your code to GitHub** (already done!)

2. **Go to Netlify**
   - Visit https://netlify.com
   - Click "Sign up" (use GitHub to sign in)

3. **Import your project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your `website` repository
   - Select branch: `main` (or your current branch)

4. **Configure build settings**
   - Build command: (leave empty)
   - Publish directory: `.` (or leave empty - Netlify will use netlify.toml)
   - Click "Deploy site"

5. **Done!** 🎉
   - Your site will be live in ~30 seconds
   - You'll get a URL like: `https://random-name-123456.netlify.app`
   - Every push to main will auto-deploy

### Option 2: Drag & Drop (Super Quick)

If you don't want continuous deployment:

1. **Download your website files**
   - Click the green "Code" button on GitHub
   - Select "Download ZIP"
   - Extract the ZIP file

2. **Go to Netlify**
   - Visit https://app.netlify.com/drop
   - Drag your website folder onto the page
   - Done! Site is live immediately

## Customize Your Domain

### Use a Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `yourname.com`)
4. Follow instructions to update DNS settings
5. Netlify provides free HTTPS automatically!

### Change Netlify Subdomain

1. Go to "Domain settings"
2. Click "Options" next to your netlify.app domain
3. Click "Edit site name"
4. Choose a better name: `yourname.netlify.app`

## Environment Variables (if needed)

If you add any features that need environment variables:

1. Go to "Site settings" → "Environment variables"
2. Add your variables
3. Redeploy

## Build Commands (for future use)

Currently, this is a static site with no build step. If you add build tools later:

Update `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Preview Deployments

Netlify automatically creates preview deployments for:
- Pull requests
- Branch pushes

Each gets a unique URL for testing before merging to main.

## Rollback Deployments

If something goes wrong:
1. Go to "Deploys" in your Netlify dashboard
2. Find a working deployment
3. Click "Publish deploy"
4. Instant rollback!

## Performance Tips

The site is already optimized, but Netlify adds:
- ✅ Global CDN (fast worldwide)
- ✅ Automatic HTTPS
- ✅ HTTP/2 & HTTP/3
- ✅ Asset optimization
- ✅ Automatic cache headers (configured in netlify.toml)

## Adding a Blog Post After Deployment

1. **Create your post locally**
   ```bash
   # Create blog/markdown/my-new-post.md
   npm run md2html
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Add new blog post"
   git push
   ```

3. **Automatic deployment**
   - Netlify detects the push
   - Deploys in ~30 seconds
   - Your new post is live!

## Monitoring

Netlify provides:
- Deploy logs (see if anything goes wrong)
- Analytics (page views, popular pages) - free tier available
- Forms (if you add contact forms later) - built-in spam protection

## Common Issues

### Site not updating?

- Clear your browser cache (Cmd/Ctrl + Shift + R)
- Check deploy status in Netlify dashboard
- Look at deploy logs for errors

### 404 errors?

- Make sure all file paths are correct
- Check that files are committed to Git
- Verify publish directory is set to `.` in netlify.toml

### Blog posts not showing?

- Make sure you ran `npm run md2html` before pushing
- Check that `blog/posts.json` was updated
- Verify HTML files exist in `blog/posts/`

## Alternative: Vercel

If you prefer Vercel instead:

1. Visit https://vercel.com
2. Import your GitHub repository
3. Deploy (it's even simpler than Netlify!)
4. Vercel will auto-detect it's a static site

Both are excellent choices with generous free tiers!

## Cost

**Free tier includes:**
- ✅ Unlimited sites
- ✅ 100GB bandwidth/month
- ✅ Automatic deployments
- ✅ HTTPS certificates
- ✅ Global CDN
- ✅ Deploy previews

This is more than enough for a personal website with moderate traffic.

---

**Questions?** Check the [Netlify docs](https://docs.netlify.com/) or open an issue!
