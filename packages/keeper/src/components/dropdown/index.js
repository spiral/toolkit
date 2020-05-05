export default class Dropdown {
  static init(elem) {
    return new Dropdown(elem);
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.toggleElem = elem.querySelector('[data-sf="dropdown-toggle"]');
    this.menuElem = elem.querySelector('[data-sf="dropdown-menu"]');

    if (!this.toggleElem || !this.menuElem) {
      // eslint-disable-next-line no-console
      console.error('Dropdown missing toggle button or menu');
      return;
    }


    this.usePortal = this.menuElem.hasAttribute('data-sf-use-portal');
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
    if (this.usePortal) {
      if (this.isExpanded) {
        if (this.elem.querySelector('[data-sf="dropdown-menu"]')) {
          document.body.append(this.menuElem); // put to document
          const {
            top, left, right, height,
          } = this.toggleElem.getBoundingClientRect();
          const pos = { top: top + window.scrollY + height, left: left + window.scrollX };
          this.menuElem.style.top = `${pos.top}px`;
          this.menuElem.style.left = `${pos.left}px`;
          const rect = this.menuElem.getBoundingClientRect();
          if (rect.left + rect.width > document.body.clientWidth) {
            pos.left = (right - rect.width + window.scrollX);
          }
          this.menuElem.style.top = `${pos.top}px`;
          this.menuElem.style.left = `${pos.left}px`;
        }
      } else {
        this.elem.appendChild(this.menuElem); // put back
        this.menuElem.style.top = '';
        this.menuElem.style.left = '';
      }
    }
  }
}
