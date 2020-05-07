import './modal.scss';

export default class Modal {
  static init(elem) {
    return new Modal(elem);
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.id = this.elem.id;

    this.toggleElems = document.querySelectorAll(`[data-sf="modal-toggle"][data-target="${this.id}"]`);
    // if (!this.toggleElems || !this.toggleElems.length) return;

    this.contentElem = elem.querySelector('[data-sf="modal-content"]');
    this.closeElem = elem.querySelector('[data-sf="modal-close"]');
    this.confirmElem = elem.querySelector('[data-sf="modal-confirm"]');
    this.cancelElem = elem.querySelector('[data-sf="modal-cancel"]');

    const hidden = this.elem.getAttribute('aria-hidden');
    this.isOpened = !hidden || hidden !== 'true';
    if (this.isOpened) this.redraw();

    this.handleClickToggleListener = this.handleClickToggle.bind(this);

    this.handleClickCloseListener = this.handleClickClose.bind(this);
    this.handleClickConfirmListener = this.handleClickConfirm.bind(this);
    this.handleClickCancelListener = this.handleClickCancel.bind(this);

    this.handleInsideClickListener = this.handleInsideClick.bind(this);
    this.handleOutsideClickListener = this.handleOutsideClick.bind(this);
    this.isInnerClick = false;

    this.openTimeout = false;
    this.closeTimeout = false;

    this.bind();
  }

  bind() {
    this.toggleElems.forEach((elem) => elem.addEventListener('click', this.handleClickToggleListener));

    if (this.closeElem) this.closeElem.addEventListener('click', this.handleClickCloseListener);
    if (this.confirmElem) this.confirmElem.addEventListener('click', this.handleClickConfirmListener);
    if (this.cancelElem) this.cancelElem.addEventListener('click', this.handleClickCancelListener);

    this.contentElem.addEventListener('click', this.handleInsideClickListener);
    document.addEventListener('click', this.handleOutsideClickListener);
  }

  die() {
    document.removeEventListener('click', this.handleOutsideClickListener);
  }

  handleClickToggle() {
    this.isInnerClick = true;
    this.toggle();
  }

  handleClickClose() {
    this.close();
  }

  handleClickConfirm() {
    this.dispatch('sf:modal-confirm');
    this.close();
  }

  handleClickCancel() {
    this.dispatch('sf:modal-cancel');
    this.close();
  }

  handleInsideClick() {
    this.isInnerClick = true;
  }

  handleOutsideClick() {
    if (!this.isInnerClick) {
      this.dispatch('sf:modal-cancel');
      this.close();
    }
    this.isInnerClick = false;
  }

  toggle() {
    this.isOpened = !this.isOpened; // true;
    this.redraw();
  }

  open() {
    if (this.isOpened) return;
    this.isOpened = true;
    this.redraw();
  }

  close() {
    if (!this.isOpened) return;
    this.isOpened = false;
    this.redraw();
  }

  redraw() {
    if (this.openTimeout) clearTimeout(this.openTimeout);
    if (this.closeTimeout) clearTimeout(this.closeTimeout);

    if (this.isOpened) {
      this.dispatch('sf:modal-show');
    } else {
      this.dispatch('sf:modal-hide');
    }

    this.elem.setAttribute('aria-hidden', !this.isOpened);
    this.elem.classList.toggle('show', this.isOpened);

    if (this.isOpened) {
      this.openTimeout = setTimeout(() => {
        const hasScrollbar = document.body.scrollHeight > window.innerHeight;
        if (hasScrollbar) {
          document.body.classList.add('modal-open-scroll');
        } else {
          document.body.classList.add('modal-open');
        }
        this.dispatch('sf:modal-shown');
      }, 300);
    } else {
      document.body.classList.remove('modal-open');
      document.body.classList.remove('modal-open-scroll');
      this.closeTimeout = setTimeout(() => {
        this.dispatch('sf:modal-hidden');
      }, 300);
    }
  }

  dispatch(eventName) {
    const event = new CustomEvent(eventName);
    this.elem.dispatchEvent(event);
  }
}
