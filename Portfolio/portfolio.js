document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidenav = document.getElementById("mySidenav");
  const navLinks = document.querySelectorAll(".sidenav a[href^='#']");

  if(openBtn) {
    openBtn.onclick = function(e) {
      e.preventDefault();
      sidenav.classList.add("active");
    };
  }

  if(closeBtn) {
    closeBtn.onclick = function(e) {
      e.preventDefault();
      sidenav.classList.remove("active");
    };
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      sidenav.classList.remove("active");
      
      if (targetElement) {
        // Défilement fluide
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
  
const backToTopButton = document.getElementById("backToTop");

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});