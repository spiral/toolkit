"use strict";

import sf from "sf-core";
import moment from "moment";
import Pikaday from "pikaday";

var DateInput = function(sf, node, options) {
    this._construct(sf, node, options);
};

/**
 * @lends sf.Form.prototype
 */
DateInput.prototype = Object.create(sf.modules.core.BaseDOMConstructor.prototype);

/**
 * Name to register
 * @type {string}
 */
DateInput.prototype.name = "date";

DateInput.prototype._construct = function(sf, node, options) {
    this.init(sf, node, options); // call parent

    if (options) {
        // if we pass options extend all options by passed options
        this.options = Object.assign(this.options, options);
    }

    this.options = Object.assign(this.options, options, this.options.config);

    // Elements
    this.els = {
        node: node
    };

    this.picker = new Pikaday({field: this.els.node});

    var momentDate = moment(this.els.node.dataset.value, this.options.valueMask);

    this.els.node.value = momentDate.format(this.options.format);
};

/**
 * @override
 * @inheritDoc
 * @enum {string}
 */
DateInput.prototype.optionsToGrab = {
    /**
     *  Predefined value in any format
     */
    "value": {
        "domAttr": "data-value"
    },
    /**
     *  Mask of predefined value, for example: "X" - Unix timestamp, "x" - Unix ms timestamp, "YYYY" - 4 or 2 digit year
     *  http://momentjs.com/docs/  Section: "String+Format"
     */
    "valueMask": {
        "domAttr": "data-value-mask",
        "value": "X"
    },
    /**
     *  Format of value in input
     *  http://momentjs.com/docs/  Section: "String+Format"
     */
    "format": {
        "domAttr": "data-format",
        "value": "YYYY-MM-DD"
    },
    /**
     *  Pass all other custom options of Pikaday via json
     */
    "config": {
        value: {},
        domAttr: "data-config",
        processor: function(node, val, self) {
            if (!val) return this.value;
            if (typeof val == "string") {
                try {
                    val = JSON.parse(val);
                } catch (e) {
                    console.error("Config JSON.parse error: ", e);
                }
            }
            return Object.assign(self.value, val);
        }
    }

};


DateInput.prototype.die = function() {
    delete this;
};

export {DateInput as default};
