// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.05
});

// Initialize Swiper
const swiper = new Swiper('.music-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

// Cursor hover effects
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6c63ff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6c63ff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Navbar scroll behavior
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        scroll.scrollTo(target);
    });
});

// Form submission
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Mesajınız göndərildi!');
        contactForm.reset();
    });
}

// Music player functionality
const playButtons = document.querySelectorAll('.play-overlay');
playButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add your music player logic here
        const musicCard = this.closest('.music-card');
        const trackTitle = musicCard.querySelector('h4').textContent;
        alert(`${trackTitle} oxunur...`);
    });
});

// Gallery Image Modal
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const modal = document.createElement('div');
        modal.classList.add('gallery-modal');
        modal.innerHTML = `
            <div class="gallery-modal-content">
                <img src="${img.src}" alt="${img.alt}">
                <span class="gallery-modal-close">&times;</span>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.gallery-modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Add dynamic style for gallery modal
const style = document.createElement('style');
style.textContent = `
    .gallery-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
    }
    
    .gallery-modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90vh;
    }
    
    .gallery-modal-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
    }
    
    .gallery-modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// Add scroll reveal animation for stats
const stats = document.querySelectorAll('.stats h4');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

stats.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    statsObserver.observe(stat);
});

// Slideshow functionality with performance optimizations
function initSlideshows() {
    const slideshows = document.querySelectorAll('.artist-slideshow');
    let currentSlideIndex = 0;
    const totalSlides = 5;
    let animationFrameId = null;
    
    // Preload images for smooth transitions
    function preloadImages() {
        slideshows.forEach(slideshow => {
            const slides = slideshow.querySelectorAll('.artist-slide');
            slides.forEach(slide => {
                if (slide.tagName === 'IMG') {
                    slide.loading = 'eager'; // Load images immediately
                    // Create a scaled version of the image in memory
                    const img = new Image();
                    img.src = slide.src;
                }
            });
        });
    }

    function updateSlides() {
        // Cancel any pending animation frame
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        // Use RequestAnimationFrame for smooth animation
        animationFrameId = requestAnimationFrame(() => {
            slideshows.forEach(slideshow => {
                const slides = slideshow.querySelectorAll('.artist-slide');
                
                // Update slides efficiently
                slides.forEach((slide, index) => {
                    if (index === currentSlideIndex) {
                        slide.style.opacity = '1';
                        slide.classList.add('active');
                    } else {
                        slide.style.opacity = '0';
                        slide.classList.remove('active');
                    }
                });
            });
        });

        // Update index for next iteration
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    }

    // Throttle the slideshow interval
    let lastUpdateTime = 0;
    const minUpdateInterval = 3000; // Minimum time between updates (3 seconds)

    function throttledUpdate() {
        const currentTime = Date.now();
        if (currentTime - lastUpdateTime >= minUpdateInterval) {
            updateSlides();
            lastUpdateTime = currentTime;
        }
    }

    // Initial setup
    preloadImages();
    updateSlides();
    
    // Use more efficient interval handling
    const intervalId = setInterval(throttledUpdate, minUpdateInterval);

    // Cleanup function
    return () => {
        clearInterval(intervalId);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };
}

// Initialize when DOM is loaded with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        const cleanup = initSlideshows();
        
        // Cleanup on page unload
        window.addEventListener('unload', cleanup);
    } catch (error) {
        console.error('Error initializing slideshows:', error);
    }
});

 