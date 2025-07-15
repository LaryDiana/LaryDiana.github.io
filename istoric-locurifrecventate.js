window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY; // Cât ai dat scroll în px
    let docHeight = document.documentElement.scrollHeight - window.innerHeight; // Înălțimea totală a paginii
    let scrollPercent = scrollTop / docHeight; // Procent de scroll (0 - 1)
    
    let opacity = Math.min(scrollPercent * 1.5, 1); // Crește opacitatea (maxim 1)
    
    document.querySelector("header::before")?.style.setProperty("background", `rgba(0, 0, 0, ${opacity})`);
  });










