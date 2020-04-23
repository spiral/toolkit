import './bootstrap.scss';
import './bootstrap-dark.scss';

import '@fortawesome/fontawesome-free/css/all.css';

import './components/autocomplete.scss';
import './components/breadcrumb.scss';
import './components/header.scss';
import './components/heading.scss';
import './components/main.scss';
import './components/pattern-input.scss';
import './components/signin.scss';
import './components/statpanel.scss';
import './components/table.scss';
import './components/tag.scss';
import './components/user.scss';

import DarkTheme from './components/darkTheme';
import Dropdown from './components/dropdown';
import Modal from './components/modal';
import Nav from './components/nav';
import NotificationCenter from './components/notificationCenter';
import Sidebar from './components/sidebar';
import Tabnav from './components/tabnav';

import { on, dispatch } from './utils/events';

document.addEventListener('DOMContentLoaded', () => {
  NotificationCenter.init();

  document.querySelectorAll('[data-sf="dropdown"]').forEach((elem) => Dropdown.init(elem));
  document.querySelectorAll('[data-sf="modal"]').forEach((elem) => Modal.init(elem));

  document.querySelectorAll('[data-sf="tabnav"]').forEach((elem) => Tabnav.init(elem));

  Nav.init();
  Sidebar.init();

  DarkTheme.init();

  setTimeout(() => document.body.classList.add('loaded'), 1);
});

export {
  on,
  dispatch,
};
