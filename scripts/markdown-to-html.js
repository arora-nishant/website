#!/usr/bin/env node

/**
 * Simple Markdown to HTML Converter for Blog Posts
 *
 * This script converts Markdown files in blog/markdown/ to HTML files in blog/posts/
 * and updates the posts.json index file.
 *
 * Usage: node scripts/markdown-to-html.js [filename.md]
 * If no filename is provided, all markdown files will be converted.
 */

const fs = require('fs');
const path = require('path');

// Directories
const MARKDOWN_DIR = path.join(__dirname, '../blog/markdown');
const POSTS_DIR = path.join(__dirname, '../blog/posts');
const POSTS_JSON = path.join(__dirname, '../blog/posts.json');

/**
 * Simple Markdown parser
 * Note: This is a basic implementation. For production use, consider using a proper
 * Markdown library, but that would require npm packages.
 */
function parseMarkdown(markdown) {
    let html = markdown;

    // Extract frontmatter (YAML-style metadata at the top)
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = html.match(frontmatterRegex);

    let metadata = {};
    let content = html;

    if (match) {
        const frontmatter = match[1];
        content = match[2];

        // Parse frontmatter
        frontmatter.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
                metadata[key.trim()] = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
            }
        });
    }

    // Convert Markdown to HTML
    // Headers
    content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    content = content.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Italic
    content = content.replace(/\*(.+?)\*/g, '<em>$1</em>');
    content = content.replace(/_(.+?)_/g, '<em>$1</em>');

    // Links
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Images
    content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

    // Code blocks
    content = content.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    // Inline code
    content = content.replace(/`(.+?)`/g, '<code>$1</code>');

    // Blockquotes
    content = content.replace(/^> (.+)/gim, '<blockquote>$1</blockquote>');

    // Lists
    content = content.replace(/^\* (.+)$/gim, '<li>$1</li>');
    content = content.replace(/^- (.+)$/gim, '<li>$1</li>');
    content = content.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Paragraphs (lines separated by blank lines)
    const lines = content.split('\n');
    let inParagraph = false;
    let result = [];

    lines.forEach((line, i) => {
        const trimmed = line.trim();

        // Skip empty lines
        if (!trimmed) {
            if (inParagraph) {
                result.push('</p>');
                inParagraph = false;
            }
            return;
        }

        // Don't wrap if already an HTML tag
        if (trimmed.match(/^<(h\d|ul|ol|li|blockquote|pre|hr|div)/)) {
            if (inParagraph) {
                result.push('</p>');
                inParagraph = false;
            }
            result.push(line);
        } else {
            if (!inParagraph) {
                result.push('<p>');
                inParagraph = true;
            }
            result.push(line);
        }
    });

    if (inParagraph) {
        result.push('</p>');
    }

    content = result.join('\n');

    return { metadata, content };
}

/**
 * Generate HTML file from Markdown
 */
function generateHTML(filename) {
    const markdownPath = path.join(MARKDOWN_DIR, filename);
    const markdownContent = fs.readFileSync(markdownPath, 'utf-8');

    const { metadata, content } = parseMarkdown(markdownContent);

    // Get slug from filename or metadata
    const slug = metadata.slug || path.basename(filename, '.md');
    const title = metadata.title || 'Untitled Post';
    const date = metadata.date || new Date().toISOString().split('T')[0];
    const excerpt = metadata.excerpt || content.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

    // Create HTML file
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Your Name</title>
    <link rel="stylesheet" href="../../styles.css">
</head>
<body>
    <nav class="nav">
        <div class="nav-content">
            <a href="../../index.html" class="nav-brand">Your Name</a>
            <div class="nav-links">
                <a href="../../index.html">About</a>
                <a href="../../experience.html">Experience</a>
                <a href="../../blog.html" class="active">Blog</a>
                <a href="../../contact.html">Contact</a>
            </div>
        </div>
    </nav>

    <main class="container">
        <article>
            <header class="post-header">
                <h1>${title}</h1>
                <div class="post-meta">
                    <time datetime="${date}">${formatDate(date)}</time>
                </div>
            </header>

            <div class="post-content">
                ${content}
            </div>
        </article>

        <div style="margin-top: 3rem;">
            <a href="../../blog.html">← Back to all posts</a>
        </div>
    </main>

    <footer class="footer">
        <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
</body>
</html>
`;

    // Write HTML file
    const htmlPath = path.join(POSTS_DIR, `${slug}.html`);
    fs.writeFileSync(htmlPath, html);

    console.log(`✓ Generated: ${slug}.html`);

    return { slug, title, date, excerpt };
}

/**
 * Format date for display
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Update posts.json index
 */
function updatePostsIndex(posts) {
    // Read existing posts
    let existingPosts = [];
    if (fs.existsSync(POSTS_JSON)) {
        existingPosts = JSON.parse(fs.readFileSync(POSTS_JSON, 'utf-8'));
    }

    // Merge new posts (avoid duplicates)
    const slugs = new Set(existingPosts.map(p => p.slug));
    posts.forEach(post => {
        if (!slugs.has(post.slug)) {
            existingPosts.push(post);
        } else {
            // Update existing post
            const index = existingPosts.findIndex(p => p.slug === post.slug);
            existingPosts[index] = post;
        }
    });

    // Sort by date (newest first)
    existingPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Write updated index
    fs.writeFileSync(POSTS_JSON, JSON.stringify(existingPosts, null, 2));
    console.log('✓ Updated posts.json');
}

/**
 * Main function
 */
function main() {
    // Ensure directories exist
    if (!fs.existsSync(MARKDOWN_DIR)) {
        fs.mkdirSync(MARKDOWN_DIR, { recursive: true });
        console.log('Created blog/markdown directory');
    }

    if (!fs.existsSync(POSTS_DIR)) {
        fs.mkdirSync(POSTS_DIR, { recursive: true });
    }

    // Get target file from command line or process all
    const targetFile = process.argv[2];
    const newPosts = [];

    if (targetFile) {
        // Convert single file
        if (!targetFile.endsWith('.md')) {
            console.error('Error: File must be a .md (Markdown) file');
            process.exit(1);
        }

        if (!fs.existsSync(path.join(MARKDOWN_DIR, targetFile))) {
            console.error(`Error: File not found: ${targetFile}`);
            process.exit(1);
        }

        const post = generateHTML(targetFile);
        newPosts.push(post);
    } else {
        // Convert all markdown files
        const files = fs.readdirSync(MARKDOWN_DIR).filter(f => f.endsWith('.md'));

        if (files.length === 0) {
            console.log('No markdown files found in blog/markdown/');
            console.log('Create a .md file there to get started!');
            return;
        }

        files.forEach(file => {
            const post = generateHTML(file);
            newPosts.push(post);
        });
    }

    // Update posts index
    if (newPosts.length > 0) {
        updatePostsIndex(newPosts);
        console.log(`\n✓ Converted ${newPosts.length} post(s) successfully!`);
    }
}

// Run the script
main();
