"use strict";
var hw = "Hello World";
var myName = "Matt";
var loaded = function () {
    var msg = hw + " " + myName;
    var ctrl = document.getElementById("myName");
    if (ctrl != null)
        ctrl.innerHTML = msg;
};
