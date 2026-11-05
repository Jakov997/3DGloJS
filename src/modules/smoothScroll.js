const smoothScroll = () => {
  const links = document.querySelectorAll('.menu__list > li a[href^="#"], main > a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  console.log(links);
};

export default smoothScroll;
