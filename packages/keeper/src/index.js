import './bootstrap.scss';
import './global.css';

import '@fortawesome/fontawesome-free/css/all.css';

import './components/main.css';
import './components/header.css';
import './components/heading.css';
import './components/signin.css';
import './components/statpanel.css';
import './components/table.css';
import './components/user.css';

import Nav from './components/nav';
import Dropdown from './components/dropdown';
import Sidebar from './components/sidebar';
import Modal from './components/modal';
import NotificationCenter from './components/notificationCenter';
import Tabnav from './components/tabnav';

import { on, dispatch } from './utils/events';

document.addEventListener('DOMContentLoaded', () => {
  NotificationCenter.init();

  document.querySelectorAll('[data-sf="dropdown"]').forEach((elem) => Dropdown.init(elem));
  document.querySelectorAll('[data-sf="modal"]').forEach((elem) => Modal.init(elem));

  document.querySelectorAll('[data-sf="tabnav"]').forEach((elem) => Tabnav.init(elem));

  Nav.init();
  Sidebar.init();

  setTimeout(() => document.body.classList.add('loaded'), 1);
});

export {
  on,
  dispatch,
};
