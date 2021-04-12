function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  const ativoClass = 'ativo';

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ativoClass)

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(ativoClass)
      });
      tabContent[index].classList.add(ativoClass)
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      });
    });
  }
}
initTabNav();


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')

  if (accordionList.length) {
    const ativoClass = 'ativo';
    accordionList[0].classList.add(ativoClass)
    accordionList[0].nextElementSibling.classList.add(ativoClass)

    function activeAccordion() {
      this.classList.toggle(ativoClass)
      this.nextElementSibling.classList.toggle(ativoClass)
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion();

function initScrollSmooth() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Forma alternativa
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: 'smooth'
    // })
  }

  const linksInternos = document.querySelectorAll('.js-menu ul li a[href^="#"]')
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}
initScrollSmooth();

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  console.log(sections)
  if (sections.length) {
    const windowStartAnimation = window.innerHeight * 0.5;
    function animationScroll() {
      console.log('sim')
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowStartAnimation < 0
        if (isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
    animationScroll()
    window.addEventListener('scroll', animationScroll)
  }
}
initAnimationScroll()