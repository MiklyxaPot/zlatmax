// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions );

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block ');
if(menuBlocks){
   menuBlocks.forEach(menuBlock => {
      const  menuBlockItem = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
      menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItem}`);
   });
}

function documentActions(e){
   const targetEltment = e.target;
   if(targetEltment.closest('[data-parent]')){
      const subMenuId = targetEltment.dataset.parent ? targetEltment.dataset.parent : null;
      const subMenu = document.querySelector(`[data-submenu = "${subMenuId}"]`);
      if(subMenu){
         const activeLink = document.querySelector('._sub-menu-active');
         const activeBlock = document.querySelector('._sub-menu-open');


         if(activeLink && activeLink !== targetEltment){
            activeLink.classList.remove('_sub-menu-active');
            activeBlock.classList.remove('_sub-menu-open');
            document.documentElement.classList.remove('sub-menu-open');

         }
         document.documentElement.classList.toggle('sub-menu-open');
         targetEltment.classList.toggle('_sub-menu-active');
         subMenu.classList.toggle('_sub-menu-open');
      }else{
        console.log('нет такого меню'); 
      }

      e.preventDefault();
   }
   if(targetEltment.closest('.menu-top-header__link_catalog ')){
      document.documentElement.classList.add('catalog-open');
      e.preventDefault();
   }
   if(targetEltment.closest('.menu-catalog__back')){
      document.documentElement.classList.remove('catalog-open');
      // document.documentElement.classList.remove('sub-catalog-open');
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('._sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('._sub-menu-open') : null;
      e.preventDefault();
   }
   if(targetEltment.closest('.sub-menu-catalog__back')){
      document.documentElement.classList.remove('sub-menu-open');
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('._sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('._sub-menu-open') : null;
      e.preventDefault();
   }
};