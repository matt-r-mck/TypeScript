"use strict";
var counter = 0;
var Increment = function () {
    counter++;
    Display();
};
var Decrement = function () {
    counter--;
    Display();
};
var Display = function () {
    var ctrl = document.getElementById("inp");
    if (ctrl != null)
        ctrl.innerText = counter.toString();
};
