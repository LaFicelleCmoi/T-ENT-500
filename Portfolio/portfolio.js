document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidenav = document.getElementById("mySidenav");
  const navLinks = document.querySelectorAll(".sidenav a[href^='#']");


  openBtn.onclick = function() {
    sidenav.classList.add("active");
  };

 
  closeBtn.onclick = function() {
    sidenav.classList.remove("active");
  };

  
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      
      e.preventDefault();

      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      
      sidenav.classList.remove("active");

      
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
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
