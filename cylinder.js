'use strict';
var Cylinder = {
    getBaseArea: function (radius) {
        return Math.PI * radius * radius;
    },

    getPerimeter: function (radius) {
        return 2 * Math.PI * radius;
    },

    getVolume: function (radius, height) {
        var baseArea = this.getBaseArea(radius);
        var perimeter = this.getPerimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    }
};
