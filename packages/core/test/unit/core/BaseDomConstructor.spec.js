"use strict";
// var assert = chai.assert;
// var should = chai.should();
var expect = chai.expect;

if (!window.sf) {
    window.sf = {};
}

if (!window.sf.options) {
    window.sf.options = {};
}

if (!window.sf.options.instances) {
    window.sf.options.instances = {};
}


window.sf.options.instances.testInstance = {
    testSfOptions1: "NOT expected from sf.options",
    testSfOptions2: "expected value from sf.options",
    testSfOptions3: "NOT expected value from sf.options"
};


require("../../../src/sf-wrapper");


/**
 * Lets create test instance for testing
 * @param {Object} spiral
 * @param {HTMLElement} node
 * @param {Object} options
 * @constructor
 */
var TestInstance = function (spiral, node, options) {
    this.init(spiral, node, options);
};

TestInstance.prototype = Object.create(sf.core.BaseDOMConstructor.prototype);
TestInstance.prototype.name = "testInstance";
TestInstance.prototype.optionsToGrab = {
    test1: {
        value: "test1-value"
    },
    test2: {
        processor: function (option) {
            return "aaaa";
        }
    },
    test3: {
        domAttr: "someAttr"
    },
    test4: {
        domAttr: "someAttr",
        processor: function (node, val, key) {
            return val + "aaaa";
        }
    },
    test5: {
        value: "bb",
        processor: function (node, val, key) {
            return val + "aaaa";
        }
    },
    testSfOptions2: {
        value: "test"
    },
    testSfOptions3: {
        domAttr: "someAttr"
    }
};

describe('BaseDomConstructor', function () {
    describe('#grabOptions()', function () {
        it('should have method grabOptions', function () {
            expect(TestInstance.prototype.grabOptions).to.exist;
        });
        it('grabOptions and its a function', function () {
            expect(TestInstance.prototype.grabOptions).be.a('function');
        });
        var testDomNode = document.createElement("div");
        testDomNode.setAttribute("someAttr", "test");

        var instanceOptions = new TestInstance(sf, testDomNode).options;

        it('should return default option if node have no attr', function () {
            expect(instanceOptions).to.have.property('test1').with.equal("test1-value");
        });
        it('should return processed option if processor available', function () {
            expect(instanceOptions).to.have.property('test2').with.equal("aaaa");
        });
        it('should return option from dom', function () {
            expect(instanceOptions).to.have.property('test3').with.equal("test");
        });
        it('should return processed option from dom if processor available', function () {
            expect(instanceOptions).to.have.property('test4').with.equal("testaaaa");
        });
        it('should return processed option from default value if processor available and dom attribute not available', function () {
            expect(instanceOptions).to.have.property('test5').with.equal("bbaaaa");
        });

        /* values from sf.options */
        it('should return undefined from if NOT optionsToGrab[option]', function () {
            expect(instanceOptions).to.not.have.property('testSfOptions1');
        });
        it('should return option from sf.options if optionsToGrab[option] and dom attribute not available', function () {
            expect(instanceOptions).to.have.property('testSfOptions2').with.equal("expected value from sf.options");
        });
        it('should return option from optionsToGrab value if optionsToGrab[option] and dom attribute is available', function () {
            expect(instanceOptions).to.have.property('testSfOptions3').with.equal("test");
        });
    });
});
