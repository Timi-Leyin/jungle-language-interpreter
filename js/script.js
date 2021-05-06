"use strict";
//declear varables;
var jungleInput = document.querySelector(" #home > .en textarea");
var panelBtn = document.querySelectorAll("main .panels a");
var panelTabs = document.querySelector(".panel-tabs");
var jungleOutput = document.querySelector(" #home .en textarea");
var historyParentEl = document.querySelector("#history .history");
//  history
var histories = [], storage;
storage = localStorage;
storage.setItem("histories", JSON.stringify(histories));
// JUNGLE LANGUAGE CLASS
var Jungle = /** @class */ (function () {
    function Jungle(str) {
        //  STRING TO BE CONVERTED
        this.str = str;
    }
    //convert words to jungle language
    Jungle.prototype.convert = function (callback) {
        //  destructure string to be converted 
        var str = this.str;
        var vowels;
        vowels = ["a", "e", "i", "o", "u"].join("");
        var vowelMatch = '', err = null;
        if (str || str.match(/(a|e|i|o|u)/gi)) {
            vowelMatch = str
                .replace(/a/gi, '1')
                .replace(/e/gi, '2')
                .replace(/i/gi, '3')
                .replace(/o/gi, '4')
                .replace(/u/gi, '5');
        }
        var newArray = [];
        var join;
        for (var i = 0; i < vowelMatch.length; i++) {
            join = newArray.push(vowelMatch[i]);
            if (!vowelMatch[i].match(/(a|e|i|o|u|[0-9]|\s|\W)/gi)) {
                join = newArray.push("a");
            }
        }
        callback(err, [newArray.join(""), str]);
        return newArray.join('');
    };
    Jungle.prototype.reverse = function (callback) {
        var str = this.str;
        var err = null, data = undefined;
        callback(err, [str, data]);
    };
    return Jungle;
}());
//update input field functions
function update(arg) {
    new Jungle(arg).convert(function (err, data) {
        jungleOutput.value = data[0];
    });
}
// update(jungleInput.value);
jungleInput.addEventListener("input", function (e) {
    update(e.target.value);
});
jungleInput.addEventListener("blur", function (e) {
    //  save(jungleInput.value);
});