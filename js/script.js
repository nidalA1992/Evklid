document.addEventListener('DOMContentLoaded', function()
{
  // slider

  const swiper = new Swiper('.swiper-container',
  {
    slidesPerView: 1,
    loop: true,

    pagination:
    {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation:
    {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  document.querySelector('.swiper-pagination-bullet:nth-child(1)').setAttribute('aria-label', 'Перейти к слайду 1');
  document.querySelector('.swiper-pagination-bullet:nth-child(2)').setAttribute('aria-label', 'Перейти к слайду 2');
  document.querySelector('.swiper-pagination-bullet:nth-child(3)').setAttribute('aria-label', 'Перейти к слайду 3');
  document.querySelector('.swiper-button-prev').removeAttribute('aria-label');
  document.querySelector('.swiper-button-prev').removeAttribute('tabindex');
  document.querySelector('.swiper-button-next').removeAttribute('aria-label');
  document.querySelector('.swiper-button-next').removeAttribute('tabindex');

  // tabs

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(element) {
      const path = element.currentTarget.dataset.path;

      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
        btn.classList.remove('tabs-nav__btn--active');
      });

      element.currentTarget.classList.add('tabs-nav__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });

  });


  // accordion

  $(".accordion").accordion ({
    collapsible: true,
    active: false,
    heightStyle: "content",
  });

  // accordion icon rotate when accordion item open
  const accordionTittle = document.querySelectorAll('.accordion__item-title');
  accordionTittle.forEach((element) => {
  element.addEventListener('click', () => {

    const plusIcon = document.querySelectorAll('.accordion__plus-icon');
    const indexPlustIcon = Array.from(accordionTittle).indexOf(element);

    plusIcon[indexPlustIcon].classList.toggle('accordion__plus-icon--active');

    for(let i = 0; i < plusIcon.length; i++) {
      console.log('del')
      if(i !== indexPlustIcon) {
        plusIcon[i].classList.remove('accordion__plus-icon--active');
      }
    }

  });

});

    // menu
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.toggle('is-active');
  });

  document.querySelector('.burger-menu__close-btn').addEventListener('click', function() {
    document.querySelector('.burger-menu').classList.toggle('is-active');
  });

  // search-form

  document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#search').classList.add('search-form--is-active');
    document.querySelector('.header-nav').classList.add('header-nav--hidden');
    document.querySelector('#hide').classList.add('hide-on');
    document.querySelector('#hide').classList.remove('hide-off');
  });

  document.querySelector('#search-form__btn-close').addEventListener('click', function() {
    document.querySelector('#search').classList.remove('search-form--is-active');
    document.querySelector('.header-nav').classList.remove('header-nav--hidden');
    document.querySelector('#hide').classList.remove('hide-on');
    document.querySelector('#hide').classList.add('hide-off');
  });

  document.querySelector('#hide').addEventListener('click', function() {
    document.querySelector('#search').classList.remove('search-form--is-active');
    document.querySelector('.header-nav').classList.remove('header-nav--hidden');
    document.querySelector('#hide').classList.remove('hide-on');
    document.querySelector('#hide').classList.add('hide-off');
  });
});

