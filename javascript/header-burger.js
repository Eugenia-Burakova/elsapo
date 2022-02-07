/*
const iconMenu = document.querySelector('.burger_icon');
if(iconMenu){
    const menuBody = document.querySelector('.nav_menu');
    iconMenu.addEventListener("click",function(e){
        iconMenu.classList.toggle('._active');
        menuBody.classList.toggle('._active');
    });
}
*/

(function () {
    const iconBurger = document.querySelector(".burger_icon");
    const navigationsBody = document.querySelector(".nav_menu");
    const headerButtons = document.querySelector(".header__buttons");
    iconBurger.addEventListener("click", function (e) {
      document.body.classList.toggle("lock");
      iconBurger.classList.toggle("active");
      navigationsBody.classList.toggle("active");
      headerButtons.classList.toggle("active");
    });
  
    const navLinks = document.querySelectorAll(".header__buttons");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
                document.body.classList.remove("lock");
                iconBurger.classList.remove("active");
                navigationsBody.classList.remove("active");
                headerButtons.classList.remove("active");
            }
          }
      );
    });
  })();
