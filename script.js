
 // Fade in animation on scroll
 const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.card1').forEach(el => {
    observer.observe(el);
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start) + '+';
        
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        }
    }, 16);
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const text = counter.textContent;
            const target = parseInt(text.replace(/\D/g, ''));
            
            if (target) {
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});


 // Incrémenter le compteur de j’aime
 const likeBtn = document.getElementById('like-btn');
 const likeCount = document.getElementById('like-count');
 const heartIcon = document.getElementById('heart-icon');

 let liked = false; // pour empêcher plusieurs clics si nécessaire

likeBtn.addEventListener('click', () => {
  let current = parseInt(likeCount.textContent);
  
 if (!liked) {
    likeCount.textContent = current + 1;
    heartIcon.classList.remove('fa-regular');
    heartIcon.classList.add('fa-solid');
    liked = true;
  } else {
    // Si tu veux que le like soit réversible :
    likeCount.textContent = current - 1;
    heartIcon.classList.remove('fa-solid');
    heartIcon.classList.add('fa-regular');
    liked = false;
  }
 });
//  ---------------------------------
