const modal = () => {
  const popupBtns = document.querySelectorAll('.popup-btn');
  const modalWindow = document.querySelector('.popup');
  const closeBtn = modalWindow.querySelector('.popup-close');
  const content = modalWindow.querySelector('.popup-content');

  const animate = ({ duration, draw }) => {
    const start = performance.now();
    const frame = (time) => {
      let progress = (time - start) / duration;
      if (progress > 1) {
        progress = 1;
      } else {
        requestAnimationFrame(frame);
      }
      draw(progress);
    };

    requestAnimationFrame(frame);
  };

  popupBtns.forEach((popupBtn) => {
    popupBtn.addEventListener('click', () => {
      modalWindow.style.display = 'block';
      if (window.innerWidth < 768) {
        // мобильное устройство: анимации нет, окно просто показываем
        return;
      }

      animate({
        duration: 400,
        draw: (p) => {
          modalWindow.style.opacity = p;
          content.style.transform = `translateY(${(1 - p) * 200}px)`;
        },
      });
    });
  });

  closeBtn.addEventListener('click', () => {
    modalWindow.style.display = '';
    modalWindow.style.opacity = '';
    content.style.transform = '';
  });

  console.log(popupBtns);
};

export default modal;
