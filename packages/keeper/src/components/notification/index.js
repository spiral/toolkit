import './notification.css';

export default class Notification {
  static init(elem) {
    return new Notification(elem);
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.closeElem = elem.querySelector('[data-sf="notification-close"]');
    if (!this.closeElem) return;

    this.handleClickCloseListener = this.handleClickClose.bind(this);
    this.closeTimeout = false;

    this.bind();
  }

  getElem() {
    return this.elem;
  }

  bind() {
    this.closeElem.addEventListener('click', this.handleClickCloseListener);
  }

  unbind() {
    this.closeElem.removeEventListener('click', this.handleClickCloseListener);
  }

  handleClickClose() {
    this.unbind();
    this.close();
  }

  close() {
    if (this.closeTimeout) clearTimeout(this.closeTimeout);

    this.elem.classList.add('closing');

    this.closeTimeout = setTimeout(() => {
      this.elem.remove();
    }, 300);
  }
}
