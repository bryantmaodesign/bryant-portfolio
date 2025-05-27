// hamburger menu 
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.site-nav').classList.toggle('site-nav--open');
    this.classList.toggle('open');
});

// collapsible approach section
document.querySelectorAll('.collapsible').forEach(coll => {
    coll.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// back to top button
const topButton = document.getElementById('top');

// Debounce function to limit how often the scroll handler runs
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', debounce(() => {
    if (document.documentElement.scrollTop > 50) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
}, 100));

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// tooltip - only initialize if tooltip element exists
const tooltip = document.getElementById('tooltip');
if (tooltip) {
    window.addEventListener('mousemove', debounce((e) => {
        tooltip.style.top = (e.clientY + 10) + 'px';
        tooltip.style.left = (e.clientX + 10) + 'px';
    }, 16)); // 60fps
}