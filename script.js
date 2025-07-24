
// -------------------Counter animation for statistics-----------------------
// Options pour IntersectionObserver (à définir si pas déjà défini)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  // Fonction d’animation du compteur
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
  
    // Pour afficher uniquement le nombre, on vide d'abord le contenu texte
    element.textContent = '0+';
  
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start) + '+';
      }
    }, 16);
  }
  
  // Observer qui lance l'animation quand le compteur entre dans le viewport
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        // Extraire uniquement le nombre (ignore le texte après)
        const text = counter.textContent;
        const target = parseInt(text.replace(/\D/g, ''));
  
        if (target) {
          animateCounter(counter, target);
          counterObserver.unobserve(counter);
        }
      }
    });
  }, observerOptions);
  
  // Cibler tous les compteurs et les observer
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    statNumbers.forEach(counter => {
      counterObserver.observe(counter);
    });
  }
  

  



//--------------experiencies----------------

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container = document.querySelector('.container-experiences');
const slides = document.querySelectorAll('.slide-persons');

let idx = 0;

function showImg() {
  if (idx >= slides.length) idx = 0;
  if (idx < 0) idx = slides.length - 1;

  container.style.transform = `translateX(-${idx * 100}%)`;
}

next.addEventListener('click', () => {
  idx++;
  showImg();
});

prev.addEventListener('click', () => {
  idx--;
  showImg();
});

// // Auto scroll
// setInterval(() => {
//   idx++;
//   showImg();
// }, 5000);

showImg(); // initial render










//  ----------------empty contact-----------------
const contactForm = document.querySelector("#submit-contact");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const inputemail = document.querySelector("#email");
    const inputtextarea = document.querySelector("#textarea");
    if (!inputemail.value || !inputtextarea.value) {
      e.preventDefault();
      alert("Input contact cannot be empty");
    }
  });
}


//---------------------valid email-------------
const mainForm = document.querySelector(".form");
if (mainForm) {
  mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const errMsg = document.getElementById("error-message");
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (pattern.test(email)) {
      errMsg.textContent = "Form Submitted.";
      errMsg.style.color = "green";
      mainForm.reset();
    } else {
      errMsg.textContent = "Please enter a valid email address.";
      errMsg.style.color = "red";
    }

    errMsg.style.display = "inline";
    errMsg.style.fontSize = "14px";
    errMsg.style.marginBottom = "5px";

    setTimeout(() => {
      errMsg.style.display = "none";
    }, 3000);
  });
}







// -------------humburger-----------------------------

  const navMenu = document.querySelector(".navbar nav ul");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humbergerMenu = document.querySelector(".humburger");

if (navMenu && bars && xmark && humbergerMenu) {
  humbergerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

const dropdown = document.querySelector(".dropdown");
const dropdownToggleIcon = document.querySelector(".dropdown-toggle-icon");

if (dropdown && dropdownToggleIcon) {
  dropdownToggleIcon.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
}

 
  






// --------------------fAQs Toggle-------------------

const faqs = document.querySelectorAll('.faq-question');
if (faqs.length > 0) {
  faqs.forEach(question => {
    question.addEventListener('click', (e) => {
      if (e.target.classList.contains('faq-icon')) {
        const faqItem = question.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer')?.classList.remove('active');
          }
        });

        faqItem.classList.toggle('active');
        faqAnswer.classList.toggle('active');
      }
    });
  });
}





// // --------------------Scroll to Top-------------------

const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });
}



