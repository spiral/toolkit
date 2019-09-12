"use strict";
// var assert = chai.assert;
// var should = chai.should();
var expect = chai.expect;


require("../../../src/sf-wrapper");

describe('Events', function () {
    it("it's a function", function () {
        expect(sf.core.Events).be.a('function');
    });

    it("on called with NEW should return new object", function () {
        var events = new sf.core.Events();
        expect(events).be.a('object');
    });

    it("on called WITHOUT NEW should return nothing", function () {
        /* eslint-disable */
        var events = sf.core.Events();
        /* eslint-enable */
        expect(events).to.not.exist;
    });

    describe('#on()', function () {
        it('should have method on', function () {
            var events = new sf.core.Events();
            expect(events.on).to.exist;
        });
        it('on - its a function', function () {
            var events = new sf.core.Events();
            expect(events.on).be.a('function');
        });
    });

    describe('#off()', function () {
        it('should have method off', function () {
            var events = new sf.core.Events();
            expect(events.off).to.exist;
        });
        it('off - its a function', function () {
            var events = new sf.core.Events();
            expect(events.off).be.a('function');
        });
    });

    describe('#trigger()', function () {
        it('should have method trigger', function () {
            var events = new sf.core.Events();
            expect(events.trigger).to.exist;
        });
        it('trigger - its a function', function () {
            var events = new sf.core.Events();
            expect(events.trigger).be.a('function');
        });
    });
});
