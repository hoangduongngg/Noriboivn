document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle'); // Changed from menu-btn
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    const languageSelector = document.querySelector('.language-select');
    const languageCurrent = document.querySelector('.language-current');
    const video = document.querySelector('.hero-video');
    const menuText = document.querySelector('.menu-text'); // Changed from .text

    // Header Scroll Effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.classList.add('scrolled', 'shadow');
        } else {
            header.classList.remove('scrolled', 'shadow');
        }
        lastScroll = currentScroll;
    });

    // Menu Functionality
    function toggleMenu() {
        document.body.classList.toggle('menu-active');
        menuOverlay.classList.toggle('active');
        
        // Update menu text and colors based on state
        if (document.body.classList.contains('menu-active')) {
            menuText.textContent = 'Close';
            menuText.style.color = '#000';
            document.querySelectorAll('.line').forEach(line => {
                line.style.backgroundColor = '#000';
            });
        } else {
            menuText.textContent = 'Menu';
            menuText.style.color = '#fff';
            document.querySelectorAll('.line').forEach(line => {
                line.style.backgroundColor = '#fff';
            });
        }
        
        document.body.style.overflow = document.body.classList.contains('menu-active') ? 'hidden' : '';
    }

    function closeMenu() {
        document.body.classList.remove('menu-active');
        menuOverlay.classList.remove('active');
        menuText.textContent = 'Menu';
        menuText.style.color = '#fff';
        document.querySelectorAll('.line').forEach(line => {
            line.style.backgroundColor = '#fff';
        });
        document.body.style.overflow = '';
    }

    // Menu Event Listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Rest of the code remains the same...
});

// Menu Hover Image Effect
function initMenuHoverEffect() {
    const hoverImageContainer = document.createElement('img');
    hoverImageContainer.className = 'hover-image';
    document.body.appendChild(hoverImageContainer);

    function moveImage(e) {
        requestAnimationFrame(() => {
            const x = e.clientX;
            const y = e.clientY;
            // Offset để ảnh không che menu text
            const offsetX = 20;
            const offsetY = -100;
            hoverImageContainer.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
        });
    }

    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        // Mouse enter - hiện ảnh
        link.addEventListener('mouseenter', (e) => {
            const imageUrl = e.target.dataset.image;
            hoverImageContainer.src = imageUrl;
            hoverImageContainer.style.opacity = '1';
            document.addEventListener('mousemove', moveImage);
        });

        // Mouse leave - ẩn ảnh
        link.addEventListener('mouseleave', () => {
            hoverImageContainer.style.opacity = '0';
            document.removeEventListener('mousemove', moveImage);
        });
    });
}

// Khởi tạo effect khi document ready
document.addEventListener('DOMContentLoaded', function() {
    initMenuHoverEffect();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const hoverImage = document.querySelector('.hover-image');

    function moveImage(e) {
        requestAnimationFrame(() => {
            hoverImage.style.transform = `translate(${e.clientX + 20}px, ${e.clientY - 100}px)`;
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            hoverImage.src = e.target.getAttribute('image');
            hoverImage.style.opacity = '1';
            document.addEventListener('mousemove', moveImage);
        });

        link.addEventListener('mouseleave', () => {
            hoverImage.style.opacity = '0';
            document.removeEventListener('mousemove', moveImage);
        });
    });
});

function moveImage(e) {
    requestAnimationFrame(() => {
        const imageWidth = 200;  // Chiều rộng ảnh hover
        const imageHeight = 200; // Chiều cao ảnh hover
        
        // Tính toán vị trí để con trỏ nằm chính giữa ảnh
        const x = e.clientX - (imageWidth / 2);
        const y = e.clientY - (imageHeight / 2);
        
        hoverImage.style.transform = `translate(${x}px, ${y}px)`;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const hoverImage = document.querySelector('.hover-image');

    function moveImage(e) {
        requestAnimationFrame(() => {
            const imageWidth = 200;
            const imageHeight = 200;
            const x = e.clientX - (imageWidth / 2);
            const y = e.clientY - (imageHeight / 2);
            hoverImage.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            // Thêm class active cho link đang hover
            link.classList.add('active');
            
            // Hiện ảnh hover
            hoverImage.src = e.target.getAttribute('image');
            hoverImage.style.opacity = '1';
            document.addEventListener('mousemove', moveImage);
            
            // Làm mờ các link khác
            menuLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.style.opacity = '0.3';
                }
            });
        });

        link.addEventListener('mouseleave', () => {
            // Xóa class active
            link.classList.remove('active');
            
            // Ẩn ảnh hover
            hoverImage.style.opacity = '0';
            document.removeEventListener('mousemove', moveImage);
            
            // Khôi phục opacity cho tất cả links
            menuLinks.forEach(otherLink => {
                otherLink.style.opacity = '1';
            });
        });
    });
});

// Language Selector
const languageSelect = document.querySelector('.language-select');
const languageCurrent = document.querySelector('.language-current');
const languageOptions = document.querySelector('.language-dropdown');

if (languageCurrent) {
    // Set default language based on URL
    const currentPath = window.location.pathname;
    const isVietnamese = currentPath.includes('/vi');
    languageCurrent.textContent = isVietnamese ? 'VI' : 'EN';

    // Toggle dropdown
    languageCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSelect.classList.toggle('active');
    });

    // Handle language change
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const langCode = option.getAttribute('data-lang');
            
            // Update URL based on language
            const currentUrl = window.location.href;
            let newUrl;
            
            if (langCode === 'vi') {
                // Add /vi to path
                newUrl = currentUrl.replace(/(?:\/vi)?$/, '/vi');
            } else {
                // Remove /vi from path
                newUrl = currentUrl.replace(/\/vi(?:\/)?/, '/');
            }
            
            window.location.href = newUrl;
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        languageSelect.classList.remove('active');
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, lineIndex) => {
        const text = line.textContent.trim();
        line.textContent = '';
        
        // Tách thành từng từ, sau đó tách thành từng chữ
        const words = text.split(' ');
        const chars = words.map((word, wordIndex) => {
            // Tách từng chữ trong từ
            return word.split('').map((char, charIndex) => {
                // Dòng 2 sẽ đợi dòng 1 hoàn thành (1s) rồi mới bắt đầu
                const baseDelay = lineIndex === 0 ? 0 : 1;
                const delay = baseDelay + (charIndex + (wordIndex * 6)) * 0.05;
                return `<span class="char" style="animation-delay: ${delay}s">${char}</span>`;
            }).join('') + (wordIndex < words.length - 1 ? '<span class="space"> </span>' : '');
        });
        
        line.innerHTML = chars.join('');
    });
});