const themeIcon = document.querySelector('#theme__icon');
const body = document.querySelector('body');

themeIcon.addEventListener('click', () => {
    body.style.transition = '0.7s';
    body.classList.toggle('body__dark__theme');
    themeIcon.classList.toggle('uil-moon');
    themeIcon.classList.toggle('uil-sun');

    // Save it to local storage
    localStorage.setItem('theme', body.className);
    localStorage.setItem('icon', themeIcon.className);
});

// Renders current theme when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the saved state from localStorage
    const savedTheme = localStorage.getItem('theme');
    const savedThemeIcon = localStorage.getItem('icon');

    // If there is a saved state, apply it to the page
    if (savedTheme) {
        body.className = savedTheme;
    }
    if (savedThemeIcon) {
        themeIcon.className = savedThemeIcon;
    }

    body.style.visibility = 'visible';
});

// Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('card__show');
      } //remove else statement to only play once
      /*
       else {
        entry.target.classList.remove('card__show');
      }
      */
    });
  });

  const hiddenElements = document.querySelectorAll('.card__hidden');
  hiddenElements.forEach((el) => observer.observe(el));
