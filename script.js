
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
//  ----------------empty contact-----------------
document.querySelector("#submit-contact").addEventListener("submit", (e) => {
    let inputemail = document.querySelector("#email");
    let inputtextarea = document.querySelector("#textarea");
    if (!inputemail.value || !inputtextarea.value) {
        e.preventDefault(); // Prevent form submission
        alert("Input contact cannot be empty");
    }
});
//---------------------valid email-------------

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const errMsg = document.getElementById("error-message");

    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (pattern.test(email)) {
        errMsg.style.display = "inline";
        errMsg.textContent ="Form Submitted.";
        errMsg.style.color = "green";
        errMsg.style.fontSize = "14px";
        errMsg.style.marginBottom = "5px";
        document.querySelector(".form").reset();
    } else {
        errMsg.style.display = "inline";
        errMsg.textContent = "Please enter a valid email address.";
        errMsg.style.color = "red";
        errMsg.style.fontSize = "14px";
        errMsg.style.marginBottom = "5px";
    }
    setTimeout(()=>{
        errMsg.style.display = "none";
    },3000); //actualiser le msg d"erreur
    
});





// -------------humburger-----------------------------
const ul=document.querySelector(".navbar nav ul");
const bars=document.querySelector(".fa-bars");
const xmark=document.querySelector(".fa-xmark");
const humbergerMenu=document.querySelector(".humburger");
humbergerMenu.addEventListener("click",()=>{

    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    ul.classList.toggle("active");
});
// --------------------fAQs Toggle-------------------
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', (e) => {
        if(e.target.classList.contains('faq-icon')){
            const faqItem = question.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('active');
            }
        });
        
        // Toggle current FAQ item
        faqItem.classList.toggle('active');
        faqAnswer.classList.toggle('active');
        }
        
    });
});