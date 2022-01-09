export function menuOpen() {
   // Меню бургер
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.menu__body');
   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });
   };
   // Прокрутка при клике
   const anchors = document.querySelectorAll('a.menu__link')

   for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      if (iconMenu.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
      }
      const blockID = anchor.getAttribute('href')
      
      document.querySelector(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
   }
}