export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona evento pra cada accordion
  addDtEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // ativa
  init() {
    if (this.accordionList.length) {
      // mantem o 1 item aberto
      this.toggleAccordion(this.accordionList[0]);
      this.addDtEvent();
    }
    return this;
  }
}
