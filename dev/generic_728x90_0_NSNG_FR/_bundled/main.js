(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _plusHelperJs = require('./plusHelper.js');

window.plusSettings = {
    "160x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: 1 }
    },
    "300x250": {
        br: { DYANAMIC: 2, NEW_SPORTS: 2, SINGLE: 3, NEW_WAY: null }
    },
    "300x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: null }
    },
    "320x50": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null }
    },
    "728x90": {
        br: { DYANAMIC: 2, NEW_SPORTS: 2, SINGLE: 2, NEW_WAY: null }
    },
    "970x250": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null }
    }
};

var sports = {
    baseball: {
        playa: { x: 1220, y: 180 },
        playaStart: { x: -600, y: -90, scale: .3 },
        flares: [[423, 20], [448, 20], [490, 52]]
    },
    football: {
        playa: { x: 1260, y: 120 },
        playaStart: { x: -624, y: -60, scale: .2 },
        flares: [[430, 20], [490, 52]]
    },
    generic: {
        playa: { x: 1200, y: 100 },
        playaStart: { x: -555, y: -25, scale: .3 },
        flares: [[423, 20], [448, 20], [490, 52]]

    }
};

start();

var _config = undefined;

function start() {

    var len = plusData.bonus.toString().length;
    if (len >= 3) {
        TweenLite.set([".get", "#bonus"], { x: "-=5" });
    }

    document.getElementById("t1a").innerHTML = "LE CÔTÉ PLUS";
    document.getElementById("t1b").innerHTML = "DES MISES SPORTIVES EST ARRIVÉ";

    var tl = initCommon(sports);
    endBonus(tl);
    // tl.play("t3")
}

function initCommon(sports) {

    var sportItem = sports[plusData.type];

    if (plusData.bonus === 0) {
        TweenLite.set([".get", "#bonus"], { display: 'none' });
    }
    var config = window.plusSettings[window.plusData.size];
    var isSingle = window.plusData.single === "single";
    var msg = isSingle ? { msg2: "DYANAMIC", msg3: "SINGLE" } : { msg2: "NEW_SPORTS", msg3: "NEW_WAY" };
    config = _extends({}, config, msg, { bonus: "_" + window.plusData.bonus });

    _config = config;
    var msg2 = (0, _plusHelperJs.addBR)(config, config.msg2);
    var msg3 = (0, _plusHelperJs.addBR)(config, config.msg3);

    console.log(config);
    // @include pos(228, 35);

    document.getElementById("t2").innerHTML = msg2;
    document.getElementById("t3").innerHTML = msg3;
    document.getElementById("bonus").innerHTML = "$" + _plusHelperJs.TXT[config.bonus] + " BONUS";

    document.getElementById("cta").addEventListener("mouseover", function () {
        document.getElementById("cta").classList.add("shadow");
    });

    document.getElementById("cta").addEventListener("mouseout", function () {
        document.getElementById("cta").classList.remove("shadow");
    });

    var tracker = new Date().getTime();
    var tl = new TimelineMax({ onComplete: function onComplete() {
            var d = new Date().getTime();
            console.log(d - tracker);
        } });
    tl.set(".frame1", { opacity: 1 });

    tl.from([".bg", ".cloudMain", ".bg_border"], { opacity: 0, duration: .3 }, "+=.2");
    tl.add(function () {
        TweenLite.to(".bg_border", { duration: 1, opacity: 0, repeat: 9, repeatDelay: 1, yoyo: true });
    });

    // console.log(sportItem);

    tl.add((0, _plusHelperJs.textFX)("#t1a"), "+=.1");

    tl.add("playa", "+=.3");

    tl.add(function () {
        playa(sportItem);
    }, "playa");

    tl.add((0, _plusHelperJs.textFX)("#t1b"), "playa");

    tl.to(".t1", { duration: .2, opacity: 0 }, "+=1.5");

    tl.add("logo");
    tl.from([".proline_new", ".proline_new2"], { duration: .3, opacity: 0 }, "logo");
    tl.from(".proline_logo", { duration: .6, maskImage: 'linear-gradient(to left, transparent 100%, black 100%)' }, "logo");
    tl.from(".proline_online", { duration: .3, opacity: 0 }, "logo+=.5");
    tl.set(".proline_plus", { opacity: 1 }, "logo+=.6");
    tl.to(".proline_plus", { duration: .4, scale: "+=.4", ease: 'power1.inOut' }, "logo+=.6");

    tl.from('.proline_plus', { duration: .2, rotation: 90, ease: 'power1.inOut' }, 'logo+=.7');
    tl.to('.proline_plus', { duration: .6, scale: .5, ease: 'power1.inOut' }, 'logo+=1.3');
    tl.to('.proline_plus', { duration: .02, opacity: 0, yoyo: true, repeat: 1 }, 'logo+=1.3');
    tl.to('.proline_plus', { duration: .02, opacity: 0, yoyo: true, repeat: 1 }, 'logo+=1.4');
    tl.to('.proline_plus', { duration: .02, opacity: 0, yoyo: true, repeat: 2 }, 'logo+=1.5');

    tl.add("logoShift", "+=.3");
    tl.to([".proline_online", ".proline_new2"], { duration: .3, opacity: 0 }, "logoShift");
    tl.to(".proline_new", { duration: .3, x: -56 }, "logoShift");
    tl.to(".proline_logo", { duration: .3, x: -56 }, "logoShift");

    // return
    tl.add("t2", "+=.2");
    tl.add((0, _plusHelperJs.textFX)("#t2"), "t2");
    tl.add(function () {
        TweenMax.to('.star', { duration: 1, opacity: 1, yoyo: true, repeat: 1 });
    }, "t2");
    tl.to("#t2", { duration: .3, opacity: 0 }, "+=" + _plusHelperJs.TXT[_config.msg2].read);

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

    TweenLite.fromTo(".cloud1", { scale: 1, opacity: 1 }, { opacity: .7, scale: "+=1.5", duration: 22, ease: 'power.in' });

    return tl;
}

function endBonus(tl, shift) {

    tl.to("#t3", { duration: .2, opacity: 0 }, "+=" + _plusHelperJs.TXT[_config.msg3].read);
    // tl.to("#t3", {duration:.2, opacity:0})
    console.log(shift);
    showBonus(tl);
    tl.add("shift");
    tl.to(".proline", { duration: .2, x: -24 }, "shift");

    tl.from("#cta", { duration: .2, opacity: 0 });
    endFooter(tl);
}

function showBonus(tl) {

    if (plusData.bonus > 0) {
        tl.from(".get", { duration: .2, opacity: 0 }, "+=.2");
        tl.add((0, _plusHelperJs.textFX)("#bonus", .04), "+=.1");
    }
    return tl;
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

function playa(sportItem) {

    sportItem.flares.map(function (item, i) {
        var scale = item[2] || 1;
        TweenLite.set(".flare" + (i + 1), { x: item[0], y: item[1], scale: scale });
    });

    // return

    var playa = sportItem.playa;
    var playaStart = sportItem.playaStart;

    var tl = new TimelineMax();
    tl.set(".playa", _extends({ transformOrigin: playa.x + "px " + playa.y + "px" }, playaStart));
    tl.to(".playa", { duration: 1, x: -playa.x / 2, y: -playa.y / 2, opacity: 1, scale: .5, ease: "power3.out" });

    tl.add(function () {
        TweenLite.to(".playa", { duration: 20, scale: .51, ease: "linear.easeNone" });
    });

    sportItem.flares.map(function (item, i) {
        tl.add(function () {
            (0, _plusHelperJs.flare)(".flare" + (i + 1));
        }, "+=" + i / sportItem.flares.length * .6);
    });
}

module.exports = {};

},{"./plusHelper.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var TXT_FR = {
    DYANAMIC: { txt: "DES COTES DYNAMIQUES ET CONCURRENTIELLES", read: 2 },
    NEW_SPORTS: { txt: "DE NOUVEAUX SPORTS, DE NOUVEAUX MATCHS", read: 2 },
    SINGLE: { txt: "MISES SIMPLES SUR UN ÉVÉNEMENT ET PLUS ENCORE", read: 2.2 },
    NEW_WAY: { txt: "DE NOUVELLES FAÇONS DE MISER", read: 1.8 },
    FIFTY: { txt: "$50 FIRST DEPOSIT MATCH - V2", read: 2.5 },
    _0: "0",
    _25: "25",
    _50: "50",
    _100: "100",
    _200: "200"
};

function configSize(sport) {
    sport.flares.map(function (item, i) {
        TweenLite.set(".flare" + (i + 1), { x: item[0], y: item[1] });
    });
}

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
    tl.from(splitText, { duration: .08, stagger: .017, autoAlpha: 0 });
    return tl;
}

function flare(id) {
    var tl = new TimelineMax({ repeat: 8, repeatDelay: .3, yoyo: true });
    tl.to(id, { duration: 1, opacity: 1 });
}

function playa(sportItem) {

    sportItem.flares.map(function (item, i) {
        var scale = item[2] || 1;
        TweenLite.set(".flare" + (i + 1), { x: item[0], y: item[1], scale: scale });
    });

    // return

    var playa = sportItem.playa;
    var playaStart = sportItem.playaStart;

    var tl = new TimelineMax();
    tl.set(".playa", _extends({ transformOrigin: playa.x + "px " + playa.y + "px" }, playaStart));
    tl.to(".playa", { duration: 1, x: -playa.x / 2, y: -playa.y / 2, opacity: 1, scale: .5, ease: "power3.out" });

    tl.add(function () {
        TweenLite.to(".playa", { duration: 20, scale: .53, ease: "linear.easeNone" });
    });

    sportItem.flares.map(function (item, i) {
        tl.add(function () {
            flare(".flare" + (i + 1));
        }, "+=" + i / sportItem.flares.length * .6);
    });
}

function addBR(config, key) {

    var txt = window.plusData.lang === "FR" ? TXT_FR : TXT;
    var str = txt[key].txt;
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
exports.configSize = configSize;
exports.TXT_FR = TXT_FR;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsFr_lbJs = require('../../_common/js/fr_lb.js');

},{"../../_common/js/fr_lb.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
