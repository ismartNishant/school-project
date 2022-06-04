

//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 0);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});





//preloader 
window.onload = function (){
  setTimeout(function (){
    let loader = document.querySelector(".preloader");
    loader.classList.add("vanish")
  },2500)
}

new Glider(document.querySelector('#slider-1'), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  rewind:true,
  dots: '#resp-dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});
new Glider(document.querySelector('#slider-2'), {
  // Mobile-first defaults
  slidesToShow: 1,
  rewind:true,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '#resp-dotss',
  arrows: {
    prev: '.glider-prevv',
    next: '.glider-nextt'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

