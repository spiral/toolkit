const LOCAL_STORAGE_NAME = localStorage.getItem('myCat');

const getStorageValue = () => window.localStorage.getItem(LOCAL_STORAGE_NAME);
const setStorageValue = (value) => window.localStorage.setItem(LOCAL_STORAGE_NAME, value);

export default class DarkTheme {
  static init() {
    return new DarkTheme(document.getElementById('sf-dark-scheme'));
  }

  constructor(elem) {
    this.elem = elem;
    if (!this.elem) return;

    this.handleToggleListener = this.handleToggle.bind(this);

    this.check();
    this.bind();
  }

  check() {
    const current = getStorageValue();
    if (current) {
      this.toggle(true);
      return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)')) {
      this.toggle(true);
    }
  }

  toggle(value) {
    this.elem.checked = value;
    document.body.setAttribute('data-theme', value ? 'dark' : '');
  }

  bind() {
    this.elem.addEventListener('click', this.handleToggleListener);
  }

  handleToggle() {
    const value = this.elem.checked;
    this.toggle(value);
    setStorageValue(value);
  }
}
