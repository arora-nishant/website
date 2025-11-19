# How to Add Blog Posts

This website makes it incredibly easy to publish new blog posts. You have two options:

## Option 1: Write in Markdown (Recommended)

This is the easiest way to write blog posts!

### Step 1: Create a Markdown File

Create a new file in `blog/markdown/` with a `.md` extension:

```
blog/markdown/my-awesome-post.md
```

### Step 2: Add Frontmatter

At the very top of your file, add metadata:

```markdown
---
title: My Awesome Post
slug: my-awesome-post
date: 2024-01-25
excerpt: This is a brief summary of my post that will appear on the blog listing page.
---
```

**Frontmatter fields:**
- `title`: The title of your post (required)
- `slug`: The URL-friendly version of your title (required, use lowercase and hyphens)
- `date`: Publication date in YYYY-MM-DD format (required)
- `excerpt`: A short summary for the blog listing page (required)

### Step 3: Write Your Content

After the frontmatter, write your post using Markdown:

```markdown
---
title: My Awesome Post
slug: my-awesome-post
date: 2024-01-25
excerpt: A great post about something interesting.
---

# Introduction

This is my blog post. I can use **bold**, *italic*, and all the standard Markdown features.

## A Section

Here's some content with a [link](https://example.com).

### Code Example

```javascript
function greet() {
    console.log("Hello, world!");
}
```

## Conclusion

Thanks for reading!
```

### Step 4: Convert to HTML

Run the converter script:

```bash
npm run md2html
```

Or convert a specific file:

```bash
node scripts/markdown-to-html.js my-awesome-post.md
```

This will:
- Create an HTML file in `blog/posts/`
- Update `blog/posts.json` with your post metadata
- Make your post appear on the website

### Step 5: Preview Locally

Start a local server:

```bash
npm run dev
```

Then open http://localhost:8000 in your browser.

### Step 6: Publish

Commit and push your changes:

```bash
git add .
git commit -m "Add new blog post: My Awesome Post"
git push
```

Your post will be live on GitHub Pages in a few minutes!

---

## Option 2: Write HTML Directly

If you prefer more control, you can write HTML directly:

### Step 1: Create HTML File

Create a new file in `blog/posts/`:

```
blog/posts/my-post.html
```

### Step 2: Use the Template

Copy one of the existing post files as a template, like `blog/posts/welcome-to-my-blog.html`. Update the content while keeping the same structure (nav, header, footer).

### Step 3: Update posts.json

Manually add an entry to `blog/posts.json`:

```json
{
  "title": "My Post Title",
  "slug": "my-post",
  "date": "2024-01-25",
  "excerpt": "A brief summary of my post."
}
```

### Step 4: Publish

Commit and push your changes.

---

## Markdown Syntax Reference

### Headers

```markdown
# H1 Header
## H2 Header
### H3 Header
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
`Inline code`
```

### Links

```markdown
[Link text](https://example.com)
```

### Images

```markdown
![Alt text](path/to/image.jpg)
```

### Lists

```markdown
- Item one
- Item two
- Item three
```

### Code Blocks

````markdown
```javascript
function example() {
    console.log("Code here");
}
```
````

### Blockquotes

```markdown
> This is a blockquote
```

---

## Tips for Great Blog Posts

1. **Write a compelling title** - Make it clear and interesting
2. **Keep paragraphs short** - Easier to read on screens
3. **Use headers** - Break up your content into sections
4. **Add code examples** - If you're writing about technical topics
5. **Proofread** - Check for typos and unclear sentences
6. **Update the excerpt** - Write a compelling summary that makes people want to read more

---

## Troubleshooting

### My post doesn't appear on the blog page

- Make sure you ran `npm run md2html` after creating your Markdown file
- Check that `blog/posts.json` contains your post
- Verify that the HTML file was created in `blog/posts/`

### The formatting looks wrong

- Check that your Markdown syntax is correct
- Ensure there's a blank line before and after lists, code blocks, and headers

### Images aren't showing

- Make sure image paths are correct relative to the HTML file
- For posts in `blog/posts/`, images should be referenced like `../../images/photo.jpg`

---

## Next Steps

- Customize the "About Me" section in `index.html`
- Update your experience in `experience.html`
- Add your contact information in `contact.html`
- Change "Your Name" throughout the site to your actual name
- Update the footer copyright year

Happy blogging! 🎉
