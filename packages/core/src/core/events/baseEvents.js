/* eslint-disable no-restricted-globals */

module.exports = function baseEvents(events) {
  events.on('redirect', (event) => {
    const url = Object.prototype.toString.call(event) === '[object String]' ? event : event.url;
    // http://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative
    const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(url);
    if (isAbsolute) {
      self.location.href = url;
    } else {
      const origin = window.location.origin
                || (`${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`);
      self.location.href = origin + ((url.charAt(0) === '/') ? url : (`/${url}`)); // Relative path
    }
  });

  events.on('reload', () => {
    window.location.reload();
  });

  events.on('refresh', () => {
    events.trigger('reload');
  });

  events.on('close', () => {
    self.close();
  });
};
