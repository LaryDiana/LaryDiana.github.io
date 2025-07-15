const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  ScrollReveal().reveal(".header__container h2", scrollRevealOption);

  ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 800,
  });

  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
   
