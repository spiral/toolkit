"use strict";
// var assert = chai.assert;
// var should = chai.should();
var expect = chai.expect;

require("../../../src/sf-wrapper");

describe('helpers', function () {
    var node = document.createElement('p');
    var parentNode = document.createElement('div');

    parentNode.classList.add('test-class');
    parentNode.appendChild(node);
    document.body.appendChild(parentNode);

    describe('#sf.helpers.domTools.closest()', function () {
        it("returns node if success", function () {
            var nodeToTest = sf.helpers.domTools.closest(node, 'div');
            expect(nodeToTest).to.equals(parentNode);
        });
        it("returns false if failed", function () {
            expect(sf.helpers.domTools.closest(node, 'span')).to.be.false;
        });
    });

    describe('#sf.helpers.domTools.closestByClassName()', function () {
        it("returns node if success", function () {
            var nodeToTest = sf.helpers.domTools.closestByClassName(node, 'test-class');
            expect(nodeToTest).to.equals(parentNode);
        });
        it("returns false if failed", function () {
            expect(sf.helpers.domTools.closestByClassName(node, 'class')).to.be.false;
        });
    });
});

describe('LikeFormData', function () {
    var formData;
    var formDataWithoutObject;

    describe('#new LikeFormData()', function () {
        it("new LikeFormData() should return Object", function () {
            formData = new sf.helpers.LikeFormData({testKey: "testValue"});
            expect(formData).be.a('object');
        });
        it("new LikeFormData() should return Object. data not object", function () {
            formDataWithoutObject = new sf.helpers.LikeFormData("testValue");
            expect(formData).be.a('object');
        });
    });

    describe('#toString()', function () {
        it("should return string", function () {
            expect(formData.toString()).be.a('string');
        });
    });

    describe('#append()', function () {
        it("should append key to object", function () {
            formData.append("key2", "val2");
            expect(formData.data.key2).to.equals('val2');
        });
    });

    describe('#get()', function () {
        it("should return key value", function () {
            expect(formData.get('key2')).to.equals('val2');
        });
    });

    describe('#getAll()', function () {
        it("should return Object", function () {
            expect(formData.getAll()).be.a('object');
        });
        it("should return Object with specific key", function () {
            expect(formData.getAll().key2).to.equals('val2');
        });
    });

    describe('#has()', function () {
        it("should return true", function () {
            expect(formData.has('key2')).to.be.true;
        });
    });

    describe('#set()', function () {
        it("should set new value to key", function () {
            formData.set('testKey', 'val3');
            expect(formData.data.testKey).to.equals('val3');
        });
    });

    describe('#delete()', function () {
        it("should return true", function () {
            expect(formData.delete('key2')).to.be.true;
        });
    });

    describe('#getContentTypeHeader()', function () {
        it("should return header content", function () {
            expect(formData.getContentTypeHeader()).to.equals("multipart/form-data; charset=utf-8; boundary=" + formData.boundary);
        });
    });
});

describe('DOMEvents', function () {
    var events;
    var node = document.createElement('div');

    describe('#new sf.helpers.DOMEvents()', function () {
        it("should return object with _DOMEventsStorage key", function () {
            events = new sf.helpers.DOMEvents();
            expect(events).be.a('object');
            expect(events._DOMEventsStorage).to.exist;
        });
    });

    describe('#add()', function () {
        before(function () {
            events.add([{
                DOMNode: node,
                eventType: "click",
                eventFunction: function () {
                    console.log("test1");
                }
            }]);
            sinon.spy(console, 'log');
        });

        after(function () {
            console.log.restore();
        });

        it("_DOMEventsStorage should contain event object", function () {
            expect(events._DOMEventsStorage[0]).to.exist;
        });

        it("listener should work", function () {
            node.click();
            expect(console.log.withArgs("test1").calledOnce).to.be.true;
        });
    });

    describe('#removeAll()', function () {
        before(function () {
            events.removeAll();
            sinon.spy(console, 'log');
        });

        after(function () {
            console.log.restore();
        });

        it("_DOMEventsStorage should not contain event object", function () {
            expect(events._DOMEventsStorage[0]).to.not.exist;
        });

        it("listener shouldn't work", function () {
            node.click();
            expect(console.log.withArgs("test1").calledOnce).to.be.false;
        });
    });

    describe('#sf.resolveKeyPath()', function () {
        it("function by path should fire", function () {
            var test = 0;
            window.a = {
                b: function () {
                    test = 2;
                }
            };
            sf.resolveKeyPath('a.b')();
            expect(test).to.equals(2);
        });
    });
});
