(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);

var creative = {};

creative.init = function () {

  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, creative.enablerInitHandler);
    }
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, creative.enablerInitHandler);
  }
};

creative.setupDOMElements = function () {
  creative.domElements = {};
  creative.domElements.exit_button = document.getElementById("pn-bg-exit");
  creative.domElements.title = document.getElementById("dynamicContent_title");
};

creative.enablerInitHandler = function (event) {
  creative.dynamicDataAvailable();

  creative.domElements.exit_button.addEventListener("click", creative.exitClickHandler);

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler);
  }
};

creative.exitClickHandler = function (event) {
  Enabler.exit("exit", creative.dynamicExitUrl);
};

creative.pageLoadHandler = function (event) {
  console.log(creative.dynamicData);
  // creative.domElements.title.innerHTML = creative.dynamicData.bonus;
  // creative.showAd();
};

window.addEventListener('load', creative.init.bind(creative));

// Handle Animation
// creative.showAd = function() {
//   // add your animation js here
// };

// Dynamic Competitive Odds 
// Single Event Betting & More
// New Sports, New Games
// New Ways to Bet
// $50 first deposit match - v2

exports.creative = creative;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dcJs = require('./dc.js');

_dcJs.creative.dynamicDataAvailable = function () {

    // Dynamic Content variables and sample values
    Enabler.setProfileId(10660348);
    var devDynamicContent = {};

    devDynamicContent.proline_test_sheet_1 = [{}];
    devDynamicContent.proline_test_sheet_1[0]._id = 0;
    devDynamicContent.proline_test_sheet_1[0].Unique_ID = 1;
    devDynamicContent.proline_test_sheet_1[0].Reporting_Label = "label 1";
    devDynamicContent.proline_test_sheet_1[0].single_event = true;
    devDynamicContent.proline_test_sheet_1[0].message1 = "Single Event Wagering";
    devDynamicContent.proline_test_sheet_1[0].message2 = "Live Betting";
    devDynamicContent.proline_test_sheet_1[0].bonus = 25;
    devDynamicContent.proline_test_sheet_1[0].Default = true;
    devDynamicContent.proline_test_sheet_1[0].Active = true;
    devDynamicContent.Profile = [{}];
    devDynamicContent.Profile[0]._id = 0;
    devDynamicContent.Profile[0].single_event = 0;
    Enabler.setDevDynamicContent(devDynamicContent);

    _dcJs.creative.dynamicData = {
        bonus: dynamicContent.proline_test_sheet_1[0].bonus
    };
};

var TXT = {
    DYANAMIC: { txt: "DYNAMIC COMPETITIVE ODDS", read: 2 },
    NEW_SPORTS: { txt: "NEW SPORTS, NEW GAMES", read: 3 },
    SINGLE: { txt: "SINGLE EVENT BETTING & MORE", read: 2.2 },
    NEW_WAY: { txt: "NEW WAYS TO BET", read: 1.5 },
    FIFTY: { txt: "$50 FIRST DEPOSIT MATCH - V2", read: 3 },
    _25: "25",
    _50: "50",
    _100: "100",
    _200: "200"
};

TweenLite.defaultEase = Power2.easeOut;

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
    var stagger = arguments.length <= 1 || arguments[1] === undefined ? .01 : arguments[1];

    var tl = new TimelineMax();
    var splitText = new SplitText(id, { type: "chars" });
    splitText = shuffle(splitText.chars);
    tl.from(splitText, { duration: .08, stagger: stagger, autoAlpha: 0 });
    return tl;
}

function playa(_ref2) {
    var x = _ref2.x;
    var y = _ref2.y;

    var tl = new TimelineMax();
    tl.set([".playa", ".bg_cover"], { opacity: 1 });
    tl.to(".playa", { duration: .6, x: -x / 2, y: -y / 2, scale: .5, ease: "power3.inOut" });
    tl.set(".bg_cover", { opacity: 0 }, "=-.25");
    tl.add(function () {
        flare(".flare1");
    });

    tl.add(function () {
        flare(".flare2");
    }, "+=.6");
    return tl;
}

function flare(id) {
    var tl = new TimelineMax({ repeat: 30, repeatDelay: .3, yoyo: true });
    tl.to(id, { duration: 1, opacity: 1 });
}

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function addBR(config, key) {

    var str = TXT[key].txt;
    var br = config.br[key];
    if (!br) {
        return str;
    }

    var msg2Split = str.split(" ");
    msg2Split[br] += "<br/>";
    return msg2Split.join(" ");
}

function init(config) {
    var msg2 = addBR(config, config.msg2);
    var msg2Read = TXT[config.msg2].read;

    document.getElementById("t2").innerHTML = msg2;
    document.getElementById("bonus").innerHTML = "$" + TXT[config.bonus] + " BONUS.";

    var tl = new TimelineMax();
    tl.set(".frame1", { opacity: 1 });
    tl.set(".get", { x: TXT[config.bonus].length === 3 ? -4 : 0 });
    tl.set(".playa", { transformOrigin: config.playa.x + "px " + config.playa.y + "px" });

    // return

    tl.from(".bg", { opacity: 0, scale: .5, duration: .3 }, "+=.2");

    tl.add(textFX("#t1a"), "+=.3");
    tl.add(textFX("#t1b"), "+=.5");

    tl.add(playa(config.playa), "+=.3");

    tl.to(".t1", { duration: .2, opacity: 0 }, "+=1.2");

    tl.add("logo");
    tl.from(".proline_new", { duration: .3, opacity: 0 }, "logo");
    tl.fromTo(".proline_logo", { maskImage: 'linear-gradient(to left, transparent 80%, black 115%)' }, { duration: .6, maskImage: 'linear-gradient(to left, transparent 0%, black 10%)' }, "logo");

    tl.add("t2", "+=.2");
    tl.add(textFX("#t2"), "t2");
    tl.set(".proline_plus", { opacity: 1 }, "t2");

    return tl;
}

function endVertical(tl) {
    tl.to("#t2", { duration: .2, opacity: 0 }, "+=2.2");

    tl.from(".get", { duration: .2, opacity: 0 }, "+=.2");
    tl.add(textFX("#bonus", .04), "+=.1");

    tl.from("#cta", { duration: .2, opacity: 0 }, "+=.3");

    tl.to(["#bonus", ".get"], { duration: .2, opacity: 0 }, "+=2");
    tl.to(".proline", { duration: .2, y: "+=25" });

    endFooter(tl);
}

function endBB(tl) {
    tl.to([".proline_new", "#t2"], { duration: .2, opacity: 0 }, "+=2.2");

    tl.from(".get", { duration: .2, opacity: 0 }, "+=.2");
    tl.add(textFX("#bonus", .04), "+=.1");
    tl.to(["#bonus", ".get"], { duration: .2, opacity: 0 }, "+=2");

    tl.from("#cta", { duration: .2, opacity: 0 }, "+=.3");

    endFooter(tl);
}

function endFooter(tl) {
    tl.add("footer");
    tl.from("#legal-btn", { duration: .2, x: "+=80" }, "footer");
    tl.add(olg(), "footer");

    tl.add(function () {
        TweenLite.set("#legalBtn", { display: "block" });
    }, "+=.3");
}

var end = {
    vertical: endVertical,
    bb: endBB
};

exports.TXT = TXT;
exports.olg = olg;
exports.textFX = textFX;
exports.flare = flare;
exports.playa = playa;
exports.init = init;
exports.end = end;

},{"./dc.js":1}],3:[function(require,module,exports){
'use strict';

var _commonJsPlusJs = require('../../_common/js/plus.js');

var _commonJsDcJs = require('../../_common/js/dc.js');

var br = {
    DYANAMIC: null,
    NEW_SPORTS: null,
    SINGLE: null,
    NEW_WAY: null
};

var config = {
    playa: { x: 340, y: 380 },
    msg2: "NEW_SPORTS",
    bonus: "_100",
    br: br
};

start();

_commonJsDcJs.creative.showAd = function () {
    // start()   
};

function start() {
    var tl = (0, _commonJsPlusJs.init)(config);
    _commonJsPlusJs.end.bb(tl);
}

module.exports = {};

},{"../../_common/js/dc.js":1,"../../_common/js/plus.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
