---
title: How to Write a Blog Post
slug: how-to-write-blog-post
date: 2024-01-25
excerpt: A guide to creating new blog posts for this website using Markdown.
---

# How to Write a Blog Post

This is a sample blog post written in Markdown. It demonstrates how easy it is to create new content for your website.

## Getting Started

To create a new blog post, simply create a `.md` file in the `blog/markdown/` directory with the following structure:

### Frontmatter

At the top of your file, add metadata in YAML format:

```
---
title: Your Post Title
slug: url-friendly-slug
date: 2024-01-25
excerpt: A brief summary of your post that appears on the blog listing page.
---
```

### Content

After the frontmatter, write your content using Markdown syntax:

## Markdown Features

You can use all standard Markdown features:

### Text Formatting

- **Bold text** with `**bold**`
- *Italic text* with `*italic*`
- `Inline code` with backticks

### Links and Images

Create [links](https://example.com) and embed images:

```
![Alt text](path/to/image.jpg)
```

### Lists

Unordered lists:
- Item one
- Item two
- Item three

### Code Blocks

```
function hello() {
    console.log("Hello, world!");
}
```

### Blockquotes

> This is a blockquote. Use it for highlighting important information or quotes.

## Publishing Your Post

1. Write your post in `blog/markdown/your-post-name.md`
2. Run `npm run md2html` to convert it to HTML
3. Commit and push to GitHub
4. Your post is now live!

It's that simple. Happy writing!
