(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsPlusJs = require('../../_common/js/plus.js');

start();

function start() {
    var config = window.plusSettings[window.plusData.size];
    document.getElementById("t1b").innerHTML = "OF SPORTS BETTING<br/> IS HERE";
    var len = plusData.size.length;
    if (len >= 3) {
        TweenLite.set([".get", "#bonus"], { x: "-=5" });
    }
    var tl = (0, _commonJsPlusJs.init)();
    _commonJsPlusJs.end.vertical(tl);
    // tl.play("playa")
}

module.exports = {};

},{"../../_common/js/plus.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function transformOrigin(id, xy) {
	// TweenLite.set(id, {duration:.6, x:-xy.x/2, y:-xy.y/2, scale:.5})   
	TweenLite.set(id, { transformOrigin: xy.x + "px " + xy.y + "px", x: -xy.x / 2, y: -xy.y / 2, scale: .5 });
}

exports.transformOrigin = transformOrigin;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _plusHelperJs = require('./plusHelper.js');

// import {creative} from './dc.js'

var _helpersBannerHelpers = require('./helpers/bannerHelpers');

window.plusSettings = {
    "160x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: 1 },
        playa: { x: 220, y: 700 }
    },
    "300x250": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null },
        playa: { x: 340, y: 380 }
    },
    "300x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: null },
        playa: { x: 380, y: 720 }
    },
    "320x50": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null },
        playa: { x: 585, y: 63 }
    },
    "728x90": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null },
        playa: { x: 1260, y: 120 }
    }
};

var _config = undefined;

function initCommon() {
    if (plusData.bonus === 0) {
        TweenLite.set([".get", "#bonus"], { display: 'none' });
    }
    var config = window.plusSettings[window.plusData.size];
    var isSingle = window.plusData.single === "single";
    var msg = isSingle ? { msg2: "DYANAMIC", msg3: "SINGLE" } : { msg2: "NEW_SPORTS", msg3: "NEW_WAY" };
    config = _extends({}, config, msg, { bonus: '_' + window.plusData.bonus });

    _config = config;
    var msg2 = (0, _plusHelperJs.addBR)(config, config.msg2);
    var msg3 = (0, _plusHelperJs.addBR)(config, config.msg3);
    console.log(msg3);
    document.getElementById("t2").innerHTML = msg2;
    document.getElementById("t3").innerHTML = msg3;
    document.getElementById("bonus").innerHTML = '$' + _plusHelperJs.TXT[config.bonus] + ' BONUS.';

    document.getElementById("cta").addEventListener("mouseover", function () {
        document.getElementById("cta").classList.add("shadow");
    });

    document.getElementById("cta").addEventListener("mouseout", function () {
        document.getElementById("cta").classList.remove("shadow");
    });

    var tl = new TimelineMax();
    tl.set(".frame1", { opacity: 1 });

    tl.from([".bg", ".cloudMain", ".bg_border"], { opacity: 0, duration: .3 }, "+=.2");
    tl.add(function () {
        TweenLite.to(".bg_border", { duration: 1, opacity: 0, repeat: 9, repeatDelay: 1, yoyo: true });
        // TweenLite.to(".bg_border", {duration:.3, opacity:.3})
    });

    tl.add((0, _plusHelperJs.textFX)("#t1a"), "+=.3");
    tl.add((0, _plusHelperJs.textFX)("#t1b"), "+=.5");
    tl.add("playa");
    tl.add((0, _plusHelperJs.playa)(config.playa), "-=.2");
    tl.to(".t1", { duration: .2, opacity: 0 }, "+=1.2");

    tl.add("logo");
    tl.from(".proline_new", { duration: .3, opacity: 0 }, "logo");
    tl.from(".proline_logo", { duration: .6, maskImage: 'linear-gradient(to left, transparent 100%, black 100%)' }, "logo");
    tl.set(".proline_plus", { opacity: 1 }, "logo+=.6");
    tl.to(".proline_plus", { duration: .4, scale: "+=.4", ease: 'power1.inOut' }, "logo+=.6");

    tl.from('.proline_plus', { duration: .2, rotation: 90, ease: 'power1.inOut' }, 'logo+=.7');
    tl.to('.proline_plus', { duration: .6, scale: .5, ease: 'power1.inOut' }, 'logo+=1.3');
    tl.to('.proline_plus', { duration: .02, opacity: 0, yoyo: true, repeat: 1 }, 'logo+=1.3');
    tl.to('.proline_plus', { duration: .02, opacity: 0, yoyo: true, repeat: 1 }, 'logo+=1.4');
    tl.to('.proline_plus', { duration: .02, opacity: 0, yoyo: true, repeat: 2 }, 'logo+=1.5');

    tl.add("t2", "+=.2");
    tl.add((0, _plusHelperJs.textFX)("#t2"), "t2");
    tl.add(function () {
        TweenMax.to('.star', { duration: 1, opacity: 1, yoyo: true, repeat: 1 });
    }, "t2");
    tl.to("#t2", { duration: .3, opacity: 0 }, '+=' + _plusHelperJs.TXT[_config.msg2].read);

    tl.add("t3");
    tl.add((0, _plusHelperJs.textFX)("#t3"), "t3");
    tl.add(function () {
        TweenMax.to('.star', { duration: 1, opacity: 1, yoyo: true, repeat: 1 });
    }, "t3");

    // tl.set(".get", {x: TXT[config.bonus].length===3 ? -4 : 0 })

    // const total = 4
    // for(let i=1; i<=total; i++){
    //     // TweenLite.set(".cloud"+i, {x:Math.random()*50})
    //     makeSmoke(".cloud"+i, (i-1)/total) 
    // }

    // makeSmoke(".cloud1", 0) 

    TweenLite.fromTo(".cloud1", { scale: 1, opacity: 1 }, { opacity: .7, scale: "+=1.5", duration: 18, ease: 'linear.easeNone' });

    return tl;
}

function makeSmoke(id, delay) {
    var scale = arguments.length <= 2 || arguments[2] === undefined ? 1.5 : arguments[2];

    var smoke = new TimelineMax({ repeat: 0 });
    var time = 6;
    smoke.fromTo(id, { scale: 1, opacity: 0 }, { duration: 2, scale: "+=.1", opacity: .7, ease: "power1.in" });
    smoke.to(id, { duration: 1, scale: "+=.7", opacity: 0, ease: "power1.out" });

    return smoke;
}

function initHorizonal() {
    var tl = initCommon();
    tl.to("#t3", { duration: .2, opacity: 0 }, '+=' + _plusHelperJs.TXT[_config.msg3].read);
    return tl;
}

function init() {

    return initCommon();
}

function showBonus(tl) {
    if (plusData.bonus > 0) {
        tl.from(".get", { duration: .2, opacity: 0 }, "+=.2");
        tl.add((0, _plusHelperJs.textFX)("#bonus", .04), "+=.1");
    }
    return tl;
}

function endHorizontal(tl, shift) {
    showBonus(tl);
    tl.from("#cta", { duration: .3, opacity: 0 });
    if (plusData.bonus > 0) {

        tl.to(["#bonus", ".get"], { duration: .2, opacity: 0 }, "+=2");
    }

    tl.add("shift");
    tl.to(".proline", { duration: .2, x: '+=' + shift.logo }, "shift");
    tl.to("#cta", { duration: .2, scale: .5, x: shift.cta.x, y: shift.cta.y }, "shift");
    endFooter(tl);
}

function endVertical(tl) {
    tl.to("#t3", { duration: .2, opacity: 0 }, '+=' + _plusHelperJs.TXT[_config.msg3].read);

    showBonus(tl);

    tl.from("#cta", { duration: .2, opacity: 0 }, "+=.3");
    if (plusData.bonus > 0) {
        tl.to(["#bonus", ".get"], { duration: .2, opacity: 0 }, "+=2");
    }

    tl.to(".proline", { duration: .2, y: "+=25" });
    endFooter(tl);
}

function endBB(tl) {
    tl.to([".proline_new", "#t3"], { duration: .2, opacity: 0 }, '+=' + _plusHelperJs.TXT[_config.msg3].read);
    showBonus(tl);
    if (plusData.bonus > 0) {
        tl.to(["#bonus", ".get"], { duration: .2, opacity: 0 }, "+=2");
    }

    tl.from("#cta", { duration: .2, opacity: 0 }, "+=.3");
    endFooter(tl);
}

function endFooter(tl) {
    tl.add("footer", "+=.3");
    tl.from("#legal-btn", { duration: .2, x: "+=80" }, "footer");
    tl.add((0, _plusHelperJs.olg)(), "footer");
    tl.add(function () {
        TweenLite.set("#legalBtn", { display: "block" });
    }, "+=.3");

    // tl.play("footer")
}

var end = {
    horizontal: endHorizontal,
    vertical: endVertical,
    bb: endBB
};

exports.TXT = _plusHelperJs.TXT;
exports.olg = _plusHelperJs.olg;
exports.textFX = _plusHelperJs.textFX;
exports.flare = _plusHelperJs.flare;
exports.playa = _plusHelperJs.playa;
exports.init = init;
exports.end = end;
exports.addBR = _plusHelperJs.addBR;
exports.initHorizonal = initHorizonal;

},{"./helpers/bannerHelpers":2,"./plusHelper.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
TweenLite.defaultEase = Power2.easeOut;
var TXT = {
    DYANAMIC: { txt: "DYNAMIC COMPETITIVE ODDS", read: 2 },
    NEW_SPORTS: { txt: "NEW SPORTS, NEW GAMES", read: 2 },
    SINGLE: { txt: "SINGLE EVENT BETTING & MORE", read: 2.2 },
    NEW_WAY: { txt: "NEW WAYS TO BET", read: 1.8 },
    FIFTY: { txt: "$50 FIRST DEPOSIT MATCH - V2", read: 2.5 },
    _0: "0",
    _25: "25",
    _50: "50",
    _100: "100",
    _200: "200"
};

function olg() {
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    return tl;
}

function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        var _ref = [array[randomIndex], array[currentIndex]];
        array[currentIndex] = _ref[0];
        array[randomIndex] = _ref[1];
    }

    return array;
}

function textFX(id) {
    var stagger = arguments.length <= 1 || arguments[1] === undefined ? .021 : arguments[1];

    var tl = new TimelineMax();
    var splitText = new SplitText(id, { type: "chars" });
    splitText = shuffle(splitText.chars);
    tl.from(splitText, { duration: .08, stagger: .021, autoAlpha: 0 });
    return tl;
}

function flare(id) {
    var tl = new TimelineMax({ repeat: 8, repeatDelay: .3, yoyo: true });
    tl.to(id, { duration: 1, opacity: 1 });
}

function playa(_ref2) {
    var x = _ref2.x;
    var y = _ref2.y;

    var tl = new TimelineMax();
    tl.set(".playa", { transformOrigin: x + "px " + y + "px" });
    tl.to(".playa", { duration: 1, x: -x / 2, y: -y / 2, opacity: 1, scale: .5, ease: "power3.inOut" });

    tl.add(function () {
        TweenLite.to(".playa", { duration: 15, scale: .55, ease: "linear.easeNone" });
    });

    tl.add(function () {
        flare(".flare1");
    });

    tl.add(function () {
        flare(".flare2");
    }, "+=.6");
    return tl;
}

function addBR(config, key) {
    console.log(config, key);
    var str = TXT[key].txt;
    var br = config.br[key];

    if (br == null || br == undefined) {
        return str;
    }
    var msg2Split = str.split(" ");
    msg2Split[br] += "<br/>";
    return msg2Split.join(" ");
}

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

exports.olg = olg;
exports.shuffle = shuffle;
exports.textFX = textFX;
exports.flare = flare;
exports.playa = playa;
exports.addBR = addBR;
exports.TXT = TXT;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
