import Notification from '../notification';

function createNotificationElem(message, type = 'info') {
  const elem = document.createElement('div');

  elem.classList.add('sf-notification', 'alert', `alert-${type}`, 'alert-dismissible');
  elem.setAttribute('role', 'alert');
  elem.innerHTML = `${message}
    <button type="button" class="close" data-sf="notification-close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>`;

  return elem;
}

export default class NotificationCenter {
  static init() {
    return new NotificationCenter();
  }

  constructor() {
    this.corners = ['tl', 'tr', 'bl', 'br'];
    this.cornerElems = {};

    this.handleShowNotificationListener = this.handleShowNotification.bind(this);

    this.initNotifications();
    this.bind();
  }

  initNotifications() {
    const cornersNotifications = {};

    document.querySelectorAll('[data-sf="notification"]').forEach((elem) => {
      const pos = elem.getAttribute('data-position');
      if (pos && pos !== 'inline' && this.corners.includes(pos)) {
        if (!cornersNotifications[pos]) cornersNotifications[pos] = [];
        // TODO: handle close notification and remove corner?
        cornersNotifications[pos].push(new Notification(elem));
      } else {
        // inline
        Notification.init(elem);
      }
    });

    this.corners.forEach((pos) => {
      if (cornersNotifications[pos] && cornersNotifications[pos].length) {
        this.createCorner(pos, cornersNotifications[pos]);
      }
    });
  }

  bind() {
    document.addEventListener('sf:notification-show', this.handleShowNotificationListener);
  }

  handleShowNotification(event) {
    const { message, type, position } = event.detail;

    const elem = createNotificationElem(message, type);
    const notification = new Notification(elem);

    this.appendNotification(position, notification);
  }

  createCorner(position, notifications) {
    const elem = document.createElement('div');
    elem.classList.add('sf-notification__corner', `sf-notification__corner--${position}`);
    document.body.appendChild(elem);
    this.cornerElems[position] = elem;

    notifications.forEach((notification) => this.appendNotification(position, notification));
  }

  appendNotification(position, notification) {
    this.cornerElems[position].appendChild(notification.getElem());
  }
}
