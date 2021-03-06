window.multigraph.util.namespace("window.multigraph.utilityFunctions", function (ns) {
    "use strict";
    
    ns.validateNumberRange = function (number, lowerBound, upperBound) {
        return typeof(number) === "number" && number >= lowerBound && number <= upperBound;
    };

    // This function, from http://javascript.crockford.com/remedial.html, should correctly
    // return 'array' for any Array object, including [].
    ns.typeOf = function(value) {
        var s = typeof value;
        if (s === 'object') {
            if (value) {
                if (Object.prototype.toString.call(value) == '[object Array]') {
                    s = 'array';
                }
            } else {
                s = 'null';
            }
        }
        return s;
    };

});
