module.exports = function (events) {
    events.on("redirect", function (event) {
        var url = Object.prototype.toString.call(event) === "[object String]" ? event : event.url;
        // http://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative
        var isAbsolute = /^(?:[a-z]+:)?\/\//i.test(url);
        if (isAbsolute) {
            self.location.href = url;
        } else {
            var origin = window.location.origin ||
                (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
            self.location.href = origin + ((url.charAt(0) === '/') ? url : ('/' + url)); // Relative path
        }
    });

    events.on('reload', function () {
        location.reload();
    });

    events.on('refresh', function () {
        events.trigger('reload');
    });

    events.on('close', function () {
        self.close();
    });
};
