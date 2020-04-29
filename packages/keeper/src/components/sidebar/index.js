import './sidebar.scss';

import { disableBodyScroll, enableBodyScroll } from '../../utils/bodyScroll';

export default class Sidebar {
  static init() {
    return new Sidebar(document.querySelector('[data-sf="sidebar"]'));
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.toggleElems = document.querySelectorAll('[data-sf="sidebar-toggle"]');

    if (!this.toggleElems.length) return;

    this.isMobile = false;
    this.checkMobile();

    this.isExpanded = this.isMobile ? false : this.toggleElems[0].getAttribute('aria-expanded') === 'true';
    this.redraw();

    this.handleClickListener = this.handleClick.bind(this);
    this.handleInsideClickListener = this.handleInsideClick.bind(this);
    this.handleOutsideClickListener = this.handleOutsideClick.bind(this);
    this.handleResizeListener = this.handleResize.bind(this);
    this.isInnerClick = false;
    this.bind();
  }

  bind() {
    this.toggleElems.forEach((elem) => elem.addEventListener('click', this.handleClickListener));
    this.elem.addEventListener('click', this.handleInsideClickListener);
    document.addEventListener('click', this.handleOutsideClickListener);
    window.addEventListener('resize', this.handleResizeListener);
  }

  handleClick() {
    this.isInnerClick = true;
    this.toggle();
  }

  handleInsideClick() {
    this.isInnerClick = true;
  }

  handleOutsideClick() {
    if (!this.isMobile) {
      this.isInnerClick = false;
      return;
    }
    if (!this.isInnerClick) {
      this.hide();
    }
    this.isInnerClick = false;
  }

  handleResize() {
    this.checkMobile();
  }

  checkMobile() {
    const currentIsMobile = this.isMobile;
    if (window.matchMedia('(max-width: 980px)').matches) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    if (currentIsMobile === this.isMobile) return;

    if (!this.isExpanded) return;

    if (this.isMobile) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
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
    this.toggleElems.forEach((elem) => elem.setAttribute('aria-expanded', this.isExpanded));
    this.elem.classList.toggle('active', this.isExpanded);

    if (!this.isMobile) {
      return;
    }
    if (this.isExpanded) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }
}
