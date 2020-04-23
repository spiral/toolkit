import TabnavTab from './tab';
import './tabnav.scss';

export default class Tabnav {
  static init(elem) {
    return new Tabnav(elem);
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.tabs = [];

    this.elem.querySelectorAll('[data-sf="tabnav-tab"]').forEach((tabElem) => {
      this.tabs.push(new TabnavTab(tabElem));
    });

    this.handleShowListener = this.handleShow.bind(this);
    this.bind();
  }

  bind() {
    this.tabs.forEach((elem) => elem.onShow(this.handleShowListener));
  }

  handleShow(currentId) {
    this.tabs.forEach((tab) => {
      if (currentId !== tab.getContentId()) tab.hide();
    });
  }
}
