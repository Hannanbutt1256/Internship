"use strict";
class Father {
    constructor() {
        this.name = "Younas";
    }
}
class Me extends Father {
    constructor() {
        super();
        this.MeName = "Hannan" + this.name;
        console.log(this.MeName);
    }
}
const pt = new Me();
pt.MeName;
