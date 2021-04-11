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