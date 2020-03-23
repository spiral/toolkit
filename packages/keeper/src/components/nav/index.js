import './nav.css';

export default class Nav {
  static init() {
    return new Nav(document.querySelector('[data-sf="nav"]'));
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.items = {};
    this.handleToggleListeners = {};
    this.elem.querySelectorAll('[data-sf="nav-item-toggle"]').forEach((toggleElem, index) => {
      this.items[index] = {
        index,
        toggleElem,
        contentElem: toggleElem.nextElementSibling,
        isExpanded: toggleElem.getAttribute('aria-expanded') === 'true',
      };
      this.handleToggleListeners[index] = this.handleToggle.bind(this, index);
    });

    this.init();
    this.bind();
  }

  bind() {
    Object.values(this.items).forEach((item) => item.toggleElem.addEventListener('click', this.handleToggleListeners[item.index]));
  }

  handleToggle(index) {
    this.items[index].isExpanded = !this.items[index].isExpanded;
    this.redraw(index);

    if (!this.items[index].isExpanded) return;

    // hide others
    Object.values(this.items).forEach((item) => {
      if (item.index !== index) this.hide(item.index);
    });
  }

  toggle(index) {
    this.items[index].isExpanded = !this.items[index].isExpanded;
    this.redraw(index);
  }

  hide(index) {
    if (!this.items[index].isExpanded) return;
    this.items[index].isExpanded = false;
    this.redraw(index);
  }

  redraw(index) {
    const { toggleElem, contentElem, isExpanded } = this.items[index];
    toggleElem.classList.toggle('active', isExpanded);
    toggleElem.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    if (!isExpanded) {
      contentElem.style.maxHeight = null;
    } else {
      contentElem.style.maxHeight = `${contentElem.scrollHeight}px`;
    }
  }

  init() {
    Object.values(this.items).forEach((item) => {
      this.redraw(item.index);
    });
  }
}
