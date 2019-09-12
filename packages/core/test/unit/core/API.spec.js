"use strict";
// var assert = chai.assert;
// var should = chai.should();
var expect = chai.expect;

require("../../../src/sf-wrapper");

var Module = function (sf, node, options) {
};

Module.prototype = sf.createModulePrototype();
Module.prototype.name = "module";
Module.prototype.die = function () {
};

var testNode = document.createElement('div');
testNode.classList.add('js-sf-module-class');
document.body.appendChild(testNode);
var testNode1 = document.createElement('div');

describe('API', function () {
    describe('#sf.createModulePrototype()', function () {
        it("it's a function", function () {
            expect(sf.createModulePrototype).be.a('function');
        });
        it('on called with should return new object', function () {
            expect(sf.createModulePrototype()).be.a('object');
        });
    });
    describe('#sf.registerInstanceType()', function () {
        it("it's a function", function () {
            expect(sf.registerInstanceType).be.a('function');
        });
        sf.registerInstanceType(Module, "js-sf-module-class");
        it("on called should register new instance", function () {
            expect(window.sf.instancesController._storage.instances[Module.prototype.name]);
        });
        it("new instance should be array", function () {
            expect(window.sf.instancesController._storage.instances[Module.prototype.name]).be.a('array');
        });
        it("0.node element of array should equal testNode", function () {
            expect(window.sf.instancesController._storage.instances[Module.prototype.name][0].node).to.equal(testNode);
        });
    });
    describe('#sf.addInstance()', function () {
        sf.addInstance(Module.prototype.name, testNode1);
        it("1.node element of array should equal testNode1", function () {
            expect(window.sf.instancesController._storage.instances[Module.prototype.name][1].node).to.equal(testNode1);
        });
    });
    describe('#sf.getInstance()', function () {
        var inst = sf.getInstance(Module.prototype.name, testNode);
        it("function should return object", function () {
            expect(inst).be.a('object');
        });
    });
    describe('#sf.getInstances()', function () {
        var inst = sf.getInstances(Module.prototype.name);
        it("function should return array", function () {
            expect(inst).be.a('array');
        });
    });
    describe('#sf.removeInstance()', function () {
        it("removed instance should be undefined", function () {
            sf.removeInstance(Module.prototype.name, testNode1);
            expect(window.sf.instancesController._storage.instances[Module.prototype.name][1]).to.be.undefined;
        });
    });
    // console.log(sf.getInstance('module', testNode1))
});
