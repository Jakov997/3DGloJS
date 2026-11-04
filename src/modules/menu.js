export default function menu() {
  const burger = document.querySelector('.menu');
  const menuModal = document.querySelector('menu');
  const closeBtn = menuModal.querySelector('.close-btn');
  const menuItems = menuModal.querySelectorAll('ul > li > a');

  const handleMenu = () => {
    // if (!menuModal.style.transform) {
    //   menuModal.style.transform = 'translateX(0)';
    // } else {
    //   menuModal.style.transform = '';
    // }

    menuModal.classList.toggle('active-menu');
  };

  burger.addEventListener('click', () => {
    handleMenu();
  });

  closeBtn.addEventListener('click', handleMenu);

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', handleMenu);
  });

  console.log(menuItems);
  console.dir(closeBtn);
}
