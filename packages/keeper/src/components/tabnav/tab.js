export default class TabnavTab {
  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.href = this.elem.getAttribute('href');
    this.contentId = this.elem.getAttribute('aria-controls');

    this.contentElem = document.getElementById(this.contentId);
    if (!this.contentElem) return;

    this.isVisible = this.elem.getAttribute('aria-selected') === 'true';
    if (this.isVisible) this.redraw();

    this.showCallback = false;

    this.handleClickListener = this.handleClick.bind(this);
    this.bind();
  }

  bind() {
    this.elem.addEventListener('click', this.handleClickListener);
  }

  handleClick(e) {
    if (e) {
      e.preventDefault(); // Prevent scroll effect
      window.history.replaceState({}, '', e.target.href);
    }
    this.show();
  }

  getContentId() {
    return this.contentId;
  }

  show() {
    if (this.isVisible) return;
    this.isVisible = true;
    this.redraw();

    if (this.showCallback) this.showCallback(this.contentId);
  }

  onShow(callback) {
    this.showCallback = callback;
  }

  hide() {
    if (!this.isVisible) return;
    this.isVisible = false;
    this.redraw();
  }

  redraw() {
    this.elem.setAttribute('aria-selected', this.isVisible);
    this.elem.classList.toggle('active', this.isVisible);
    this.contentElem.classList.toggle('active', this.isVisible);
  }
}
