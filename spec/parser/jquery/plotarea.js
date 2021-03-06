/*global describe, it, beforeEach, expect, xit, jasmine */

describe("Plotarea parsing", function () {
    "use strict";

    var Plotarea = window.multigraph.core.Plotarea,
        xmlString = '<plotarea margintop="5" marginleft="10" marginbottom="19" marginright="5" bordercolor="0x111223" border="0"/>',
        $xml,
        p;

    beforeEach(function () {
        window.multigraph.parser.jquery.mixin.apply(window.multigraph, "parseXML", "serialize");
	$xml = window.multigraph.parser.jquery.stringToJQueryXMLObj(xmlString);
        p = Plotarea.parseXML($xml);
    });

    it("should be able to parse a plotarea from XML and read its 'margin().bottom' attribute", function () {
        expect(p.margin().bottom()).toBe(19);
    });

    it("should be able to parse a plotarea from XML and read its 'margin().left' attribute", function () {
        expect(p.margin().left()).toBe(10);
    });

    it("should be able to parse a plotarea from XML and read its 'margin().top' attribute", function () {
        expect(p.margin().top()).toBe(5);
    });

    it("should be able to parse a plotarea from XML and read its 'margin().right' attribute", function () {
        expect(p.margin().right()).toBe(5);
    });

    it("should be able to parse a plotarea from XML and read its 'border' attribute", function () {
        expect(p.border()).toBe(0);
    });

    it("should be able to parse a plotarea from XML and read its 'bordercolor' attribute", function () {
        expect(p.bordercolor().getHexString()).toBe("0x111223");
    });

    it("should be able to parse a plotarea from XML, serialize it and get the same XML as the original", function () {
        var xmlString2 = '<plotarea margintop="5" marginleft="10" marginbottom="19" marginright="5" bordercolor="0xeeeeee" border="0"/>';
        expect(p.serialize()).toBe(xmlString);
	p = Plotarea.parseXML(window.multigraph.parser.jquery.stringToJQueryXMLObj(xmlString2));
        expect(p.serialize()).toBe(xmlString2);
    });

});
