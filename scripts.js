// Fade-in Effekt für Blog-Posts
document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach((post, index) => {
        setTimeout(() => {
            post.style.opacity = 1;
            post.style.transform = "translateY(0)";
        }, index * 500);
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
