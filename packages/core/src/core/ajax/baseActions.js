"use strict";

/**
 * This plugin adds ability to perform actions from the server.
 * @param {Object} sf
 * "action":"reload"
 * "action":{"redirect":"/account"}
 * "action":{"redirect":"/account","delay":3000}
 * "action":{"name":"redirect","url":"/account","delay":3000}
 */
module.exports = function (sf) {
    sf.ajax.events.on('load', function (options) {
        var response = options.response;
        if (response.hasOwnProperty('action')) {
            if (typeof response.action === 'string') { // "action":"reload"
                sf.events.trigger(response.action);
            } else if (typeof response.action === 'object') {
                var keys = Object.keys(response.action);
                if (keys.indexOf('flash') !== -1) {
                    var flash = response.action['flash'];
                    var timestamp = Date.now();
                    var sfFlashMessage = {};

                    if (typeof response.action['flash'] === 'object') {
                        sfFlashMessage = flash;
                        sfFlashMessage.timestamp = timestamp;
                    } else {
                        sfFlashMessage = {
                            message: flash,
                            timestamp: timestamp
                        };
                    }

                    sessionStorage.setItem('sfFlashMessage', JSON.stringify(sfFlashMessage));
                }

                if (keys.indexOf('redirect') !== -1) {
                    setTimeout(function () {
                        sf.events.trigger('redirect', response.action['redirect'], options);
                    }, +response.action.delay | 0);
                } else if (keys.indexOf('name') !== -1) {
                    setTimeout(function () {
                        sf.events.trigger(response.action.name, response.action.url);
                    }, +response.action.delay || 0);
                }

                // if (keys.length === 1) {//"action":{"redirect":"/account"}
                //    sf.events.trigger(keys[0], response.action[keys[0]], options);
                // } else if (keys.length === 2 && response.action.delay) {//"action":{"redirect":"/account","delay":3000}
                //    setTimeout(function () {
                //        var action = keys.filter(function (value) {
                //            return value !== 'delay';
                //        })[0];
                //        sf.events.trigger(action, response.action[action], options);
                //    }, +response.action.delay);
                // } else if (keys.length > 1) {//"action":{"name":"redirect","url":"/account","delay":3000}
                //    setTimeout(function () {
                //        sf.events.trigger(response.action.name, response.action, options);
                //    }, +response.action.delay || 0);
                // } else {
                //    console.error("Action from server. Object doesn't have keys. ", response.action);
                // }
            } else {
                console.error("Action from server. Something wrong. ", response.action);
            }
        }
    });

    (function (sfFlashMessage) {
        if (!sfFlashMessage) return;

        var message = JSON.parse(sfFlashMessage);
        var timestamp = Date.now();
        var node;
        var nodeWrapper;
        var flashClass;

        if (timestamp - message.timestamp > 10000) return;

        if (message.type === 'debug' || message.type === 'success') {
            flashClass = 'debug';
        } else if (message.type === 'info' || !message.type || message.type === 'notice') {
            flashClass = 'info';
        } else {
            flashClass = 'danger';
        }

        node = document.createElement('div');
        nodeWrapper = document.createElement('div');
        nodeWrapper.classList.add('flash-wrapper');
        node.classList.add('flash', flashClass);
        node.innerHTML = message.message;
        document.body.appendChild(nodeWrapper);
        nodeWrapper.appendChild(node);

        setTimeout(function () {
            nodeWrapper.classList.add('show');
        }, 1);

        setTimeout(function () {
            nodeWrapper.classList.remove('show');
        }, message.timeout || 5000);

        sessionStorage.removeItem('sfFlashMessage');
    }(sessionStorage.getItem('sfFlashMessage')));
};
