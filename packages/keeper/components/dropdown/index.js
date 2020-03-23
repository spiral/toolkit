export default class Dropdown {
  static init(elem) {
    return new Dropdown(elem);
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.toggleElem = elem.querySelector('[data-sf="dropdown-toggle"]');
    this.menuElem = elem.querySelector('[data-sf="dropdown-menu"]');

    if (!this.toggleElem || !this.menuElem) return;

    this.isExpanded = this.toggleElem.getAttribute('aria-expanded') === 'true';
    if (this.isExpanded) this.redraw();

    this.handleClickListener = this.handleClick.bind(this);
    this.handleInsideClickListener = this.handleInsideClick.bind(this);
    this.handleOutsideClickListener = this.handleOutsideClick.bind(this);
    this.isInnerClick = false;
    this.bind();
  }

  bind() {
    this.toggleElem.addEventListener('click', this.handleClickListener);
    this.elem.addEventListener('click', this.handleInsideClickListener);
    document.addEventListener('click', this.handleOutsideClickListener);
  }

  handleClick() {
    // const isExpanded = this.toggleElem.getAttribute('aria-expanded') === 'true';
    // this.isExpanded = !this.isExpanded;
    // this.redraw();
    this.toggle();
  }

  handleInsideClick() {
    this.isInnerClick = true;
  }

  handleOutsideClick() {
    if (!this.isInnerClick) {
      this.hide();
    }
    this.isInnerClick = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.redraw();
  }

  show() {
    if (this.isExpanded) return;
    this.isExpanded = true;
    this.redraw();
  }

  hide() {
    if (!this.isExpanded) return;
    this.isExpanded = false;
    this.redraw();
  }

  redraw() {
    this.toggleElem.setAttribute('aria-expanded', this.isExpanded);
    this.menuElem.classList.toggle('show', this.isExpanded);
  }
}
