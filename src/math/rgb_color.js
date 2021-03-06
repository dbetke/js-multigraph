window.multigraph.util.namespace("window.multigraph.math", function (ns) {
    "use strict";

    ns.RGBColor = new window.jermaine.Model( "RGBColor", function () {
        
        this.hasA("r").which.validatesWith(function (r) {
            return window.multigraph.utilityFunctions.validateNumberRange(r, 0, 1.0);
        });
        this.hasA("g").which.validatesWith(function (g) {
            return window.multigraph.utilityFunctions.validateNumberRange(g, 0, 1.0);
        });
        this.hasA("b").which.validatesWith(function (b) {
            return window.multigraph.utilityFunctions.validateNumberRange(b, 0, 1.0);
        });

        var numberToHex = function (number) {
            number = parseInt(number * 255, 10).toString(16);
            if (number.length === 1) {
                number = "0" + number;
            }
            return number;
        };

        this.respondsTo("getHexString", function (prefix) {
            if (!prefix) {
                prefix = "0x";
            }
            return prefix + numberToHex(this.r()) + numberToHex(this.g()) + numberToHex(this.b());
        });

        this.respondsTo("toRGBA", function (alpha) {
            if (alpha === undefined) {
                alpha = 1.0;
            }
            if (typeof(alpha) !== "number") {
                throw new Error("RGBColor.toRGBA: The argument, if present, must be a number");
            }
            return "rgba(" + (255*this.r()) + ", " + (255*this.g()) + ", " + (255*this.b()) + ", " + alpha + ")";
        });

        this.respondsTo("eq", function (color) {
            return ((this.r()===color.r()) && (this.g()===color.g()) && (this.b()===color.b()));
        });

        this.isBuiltWith("r", "g", "b");

    });

    ns.RGBColor.parse = function (input) {
        var red,
            green,
            blue,
            grey,
            parsedInput,
            colorObj;

        if (input === undefined) {
            return undefined;
        } else if (typeof(input) === "string") {
            parsedInput = input.toLowerCase();

            switch (parsedInput) {
            case "black":
                red = 0;
                green = 0;
                blue = 0;
                break;
            case "red":
                red = 1;
                green = 0;
                blue = 0;
                break;
            case "green":
                red = 0;
                green = 1;
                blue = 0;
                break;
            case "blue":
                red = 0;
                green = 0;
                blue = 1;
                break;
            case "yellow":
                red = 1;
                green = 1;
                blue = 0;
                break;
            case "magenta":
                red = 1;
                green = 0;
                blue = 1;
                break;
            case "cyan":
                red = 0;
                green = 1;
                blue = 1;
                break;
            case "white":
                red = 1;
                green = 1;
                blue = 1;
                break;
            case "grey":
                grey = parseInt("ee", 16) / 255;
                red = grey;
                green = grey;
                blue = grey;
                break;
            default:
                parsedInput = parsedInput.replace(/(0(x|X)|#)/, "");
                if (parsedInput.search(new RegExp(/([^0-9a-f])/)) !== -1) {
                    throw new Error("'" + input + "' is not a valid color");
                }

                if (parsedInput.length === 6) {
                    red = parseInt(parsedInput.substring(0,2), 16) / 255;
                    green = parseInt(parsedInput.substring(2,4), 16) / 255;
                    blue = parseInt(parsedInput.substring(4,6), 16) / 255;
                } else if (parsedInput.length === 3) {
                    red = parseInt(parsedInput.charAt(0), 16) / 15;
                    green = parseInt(parsedInput.charAt(1), 16) / 15;
                    blue = parseInt(parsedInput.charAt(2), 16) / 15;
                } else {
                    throw new Error("'" + input + "' is not a valid color");
                }
                break;
            }
            colorObj = new ns.RGBColor(red, green, blue);
            return colorObj;
        }
        throw new Error("'" + input + "' is not a valid color");
    };
});
