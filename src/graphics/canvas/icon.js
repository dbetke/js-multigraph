window.multigraph.util.namespace("window.multigraph.graphics.canvas", function (ns) {
    "use strict";

    ns.mixin.add(function (ns) {
        ns.Icon.respondsTo("renderBorder", function (context, x, y, opacity) {
            context.save();
            context.strokeStyle = "rgba(0, 0, 0, " + opacity + ")";
            context.strokeRect(x, y, this.width(), this.height());
            context.restore();
        });
    });
});
