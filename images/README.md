# Images Directory

Place your images here for use in your website.

## Profile Picture

Add your profile picture as `profile.jpg` (or `.png`) in this directory.

The image will be displayed as a circular profile picture on the home page.

**Recommended specifications:**
- Size: At least 400x400 pixels (square)
- Format: JPG or PNG
- File size: Keep under 500KB for fast loading

**To add your photo:**
1. Add your photo to this directory as `profile.jpg`
2. Update `index.html` if you used a different filename or format

**Temporary placeholder:**
You can use a placeholder image service while you prepare your photo:
- Replace `images/profile.jpg` in index.html with:
  `https://via.placeholder.com/180` (or use any other placeholder service)

## Other Images

You can add other images for blog posts or other pages here as well.

Reference them in your content using:
```html
<img src="../images/your-image.jpg" alt="Description">
```

Or in Markdown:
```markdown
![Description](../images/your-image.jpg)
```
