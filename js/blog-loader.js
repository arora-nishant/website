/**
 * Blog Post Loader
 * Loads and displays blog posts from the posts data file
 */

// Blog posts data will be loaded from this file
const POSTS_DATA_URL = 'blog/posts.json';

/**
 * Fetch and display blog posts
 */
async function loadBlogPosts(limit = null) {
    try {
        const response = await fetch(POSTS_DATA_URL);
        const posts = await response.json();

        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Limit posts if specified
        const displayPosts = limit ? posts.slice(0, limit) : posts;

        // Display posts on the appropriate page
        const recentPostsContainer = document.getElementById('recent-posts');
        const blogPostsContainer = document.getElementById('blog-posts');

        if (recentPostsContainer) {
            displayPostList(displayPosts, recentPostsContainer);
        }

        if (blogPostsContainer) {
            displayPostList(posts, blogPostsContainer);
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
        // Display a friendly message if posts can't be loaded
        const container = document.getElementById('recent-posts') || document.getElementById('blog-posts');
        if (container) {
            container.innerHTML = '<p>Blog posts will appear here soon.</p>';
        }
    }
}

/**
 * Display a list of posts in the given container
 */
function displayPostList(posts, container) {
    if (posts.length === 0) {
        container.innerHTML = '<p>No posts yet. Check back soon!</p>';
        return;
    }

    container.innerHTML = posts.map(post => `
        <article class="post-item">
            <div class="post-date">${formatDate(post.date)}</div>
            <h3><a href="blog/posts/${post.slug}.html">${escapeHtml(post.title)}</a></h3>
            <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
        </article>
    `).join('');
}

/**
 * Format date to readable string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load recent posts (limit to 3) on home page
    if (document.getElementById('recent-posts')) {
        loadBlogPosts(3);
    }

    // Load all posts on blog page
    if (document.getElementById('blog-posts')) {
        loadBlogPosts();
    }
});
