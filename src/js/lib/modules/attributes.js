import $ from "../core";

$.prototype.changeAttribute = function(attr, value) {
    if (attr && value) {
        for (let i = 0; i < this.length; i++) {
            this[i].setAttribute(attr, value);
        }
    }

    return this;
};

$.prototype.deleteAttribute = function(attr) {
    if (attr) {
        for (let i = 0; i < this.length; i++) {
            this[i].removeAttribute(attr);
        }
    }

    return this;
};