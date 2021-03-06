window.multigraph.util.namespace("window.multigraph.core", function (ns) {
    "use strict";

    var NumberValue = function (value) {
        this.value = value;
    };

    NumberValue.prototype.getRealValue = function () {
        return this.value;
    };

    NumberValue.prototype.toString = function () {
        return this.value.toString();
    };

    NumberValue.prototype.compareTo = function (x) {
        if (this.value < x.value) {
            return -1;
        } else if (this.value > x.value) {
            return 1;
        }
        return 0;
    };

    NumberValue.prototype.add = function (/*DataMeasure*/ measure) {
        // NOTE: deliberately accessing the 'measure' property of a NumberMeasure here, rather
        // than calling its getRealValue() method, for convenience and efficiency:
        return new NumberValue(this.value + measure.measure);
    };

    NumberValue.prototype.type = ns.DataValue.NUMBER;

    NumberValue.prototype.clone = function() {
        return new NumberValue(this.value);
    };

    NumberValue.parse = function (s) {
        return new NumberValue(parseFloat(s));
    };

    ns.DataValue.mixinComparators(NumberValue.prototype);

    ns.NumberValue = NumberValue;

});
