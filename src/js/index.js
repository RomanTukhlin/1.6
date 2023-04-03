import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'
import Swiper, { Pagination } from 'swiper'
import '../scss/style.scss'
import '../scss/fonts.scss'

//menu variable
const menuOpen = document.querySelectorAll('.menu-open')
const menu = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu__container')
//menu active
menuOpen.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault()
    const click = e.composedPath().includes(menuContainer)
    if (toggler.classList.contains('menu__open')) {
      document.body.classList.add('lock')
      menu.classList.add('active')
      menuContainer.classList.add('active')
    } else if (toggler.classList.contains('menu__close') || !click) {
      document.body.classList.remove('lock')
      menu.classList.remove('active')
      menuContainer.classList.remove('active')
    }
  })
})
//call variable
const callOpen = document.querySelectorAll('.call-open')
const call = document.querySelector('.call')
const callContainer = document.querySelector('.call__container')
//call active
callOpen.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault()
    const click = e.composedPath().includes(callContainer)
    if (toggler.classList.contains('contacts__contacts-link')) {
      document.body.classList.add('lock')
      call.classList.add('active')
      callContainer.classList.add('active')
      menu.classList.remove('active')
      menuContainer.classList.remove('active')
    } else if (toggler.classList.contains('call__close') || !click) {
      document.body.classList.remove('lock')
      call.classList.remove('active')
      callContainer.classList.remove('active')
    }
  })
})
//feedback variable
const feedbackOpen = document.querySelectorAll('.feedback-open')
const feedback = document.querySelector('.feedback')
const feedbackContainer = document.querySelector('.feedback__container')
//feedback active
feedbackOpen.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault()
    const click = e.composedPath().includes(feedbackContainer)
    if (toggler.classList.contains('contacts__contacts-link')) {
      document.body.classList.add('lock')
      feedback.classList.add('active')
      feedbackContainer.classList.add('active')
      menu.classList.remove('active')
      menuContainer.classList.remove('active')
    } else if (toggler.classList.contains('feedback__close') || !click) {
      document.body.classList.remove('lock')
      feedback.classList.remove('active')
      feedbackContainer.classList.remove('active')
    }
  })
})
// active on read-more
const showMore = document.querySelectorAll('.show-more')
showMore.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault()
    const brands = document.querySelector('.brands__items')
    const about = document.querySelector('.about__text')
    const technique = document.querySelector('.technique__items')
    toggler.classList.toggle('active')
    if (toggler.classList.contains('brands__show-more')) {
      brands.classList.toggle('active')
    } else if (toggler.classList.contains('about__read-more')) {
      about.classList.toggle('active')
    } else if (toggler.classList.contains('technique__show-more')) {
      technique.classList.toggle('active')
    }
  })
})

Swiper.use([Pagination])
if (document.documentElement.clientWidth < 768) {
  const brandsSwiper = new Swiper('.brands__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1.25
      },
      375: {
        slidesPerView: 'auto'
      }
    }
  })
  const techniqueSwiper = new Swiper('.technique__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1.25
      },
      375: {
        slidesPerView: 'auto'
      }
    }
  })
  const priceSlider = new Swiper('.price-list__body', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1.15
      },
      375: {
        slidesPerView: 'auto'
      }
    }
  })
}
