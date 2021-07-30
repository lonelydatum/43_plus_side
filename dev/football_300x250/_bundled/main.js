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

var TEXT = {
  msg1: {
    dynamic: "Dynamic Competitive Odds",
    'new': "New Sports, New Games",
    single: "Single Event Betting & More"
  },
  msg2: {
    single: "Single Event Betting & More",
    'new': "New Ways to Bet",
    fifty: "$50 first deposit match - v2"
  },
  bonus: {
    _25: 25,
    _50: 50,
    _100: 100,
    _200: 200
  }

};

TweenLite.defaultEase = Power2.easeOut;

function olg() {
  var tl = new TimelineMax();

  tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
  tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0)

  // tl.to("#bluewedge1", {duration: .8, morphSVG: "#bluewedge2", ease: 'power1.inOut'}, 0)
  // .to("#redwedge1", {duration: .8, morphSVG: "#redwedge2", ease: 'power1.inOut'}, 0)

  .from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

  return tl;
}

function shuffle(array) {
  var currentIndex = array.length,
      randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
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

function flare(id) {
  var tl = new TimelineMax({ repeat: 30, repeatDelay: .3, yoyo: true });
  tl.to(id, { duration: 1, opacity: 1 });
}

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

exports.creative = creative;
exports.TEXT = TEXT;
exports.olg = olg;
exports.textFX = textFX;
exports.flare = flare;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsDcJs = require('../../_common/js/dc.js');

start();

_commonJsDcJs.creative.showAd = function () {
    start();
};

_commonJsDcJs.creative.dynamicDataAvailable = function () {

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

    _commonJsDcJs.creative.dynamicData = {
        bonus: dynamicContent.proline_test_sheet_1[0].bonus
    };
};

function start() {

    document.getElementById("t2a").innerHTML = _commonJsDcJs.TEXT.msg2.single;
    document.getElementById("bonus").innerHTML = "$" + _commonJsDcJs.TEXT.bonus._25 + " BONUS.";
    // gsap.set('#header', {rotation:0.001, force3D: true, transformPerspective:100, willChange: 'transform'});

    var tl = new TimelineMax();
    tl.set(".frame1", { opacity: 1 });
    tl.from(".bg", { opacity: 0, scale: .5, duration: .3 }, "+=.2");

    tl.add((0, _commonJsDcJs.textFX)("#t1a"), "+=.3");
    tl.add((0, _commonJsDcJs.textFX)("#t1b"), "+=.5");

    tl.add(playa(), "+=.3");

    tl.to(".frame1 .t1", { duration: .2, opacity: 0 }, "+=1.2");

    tl.add("logo");
    tl.from(".proline_new", { duration: .3, opacity: 0 }, "logo");
    tl.fromTo(".proline_logo", { maskImage: 'linear-gradient(to left, transparent 80%, black 115%)' }, { duration: .6, maskImage: 'linear-gradient(to left, transparent 0%, black 10%)' }, "logo");

    tl.set(".proline_plus", { opacity: 1 });
    tl.to(".proline_plus", { duration: .3, rotate: 90, ease: 'power3.out' });

    tl.add((0, _commonJsDcJs.textFX)("#t2a"), "+=.3");
    tl.to([".proline_new", "#t2a"], { duration: .2, opacity: 0 }, "+=2.2");

    tl.from(".get", { duration: .2, opacity: 0 }, "+=.5");
    tl.add((0, _commonJsDcJs.textFX)("#bonus", .04));

    tl.to(["#bonus", ".get"], { duration: .2, opacity: 0 }, "+=2");

    tl.from("#cta", { duration: .2, opacity: 0 }, "+=.3");

    tl.add("footer");
    tl.from("#legal-btn", { duration: .2, x: "+=60" }, "footer");
    tl.add((0, _commonJsDcJs.olg)(), "footer");

    tl.add(function () {
        TweenLite.set("#legalBtn", { display: "block" });
    }, "+=.3");

    // tl.play("playa")
}

function playa() {
    var tl = new TimelineMax();
    tl.set([".playa", ".bg_cover"], { opacity: 1 });
    tl.to(".playa", { duration: .6, x: -170, y: -190, scale: .5, ease: "power3.inOut" });
    tl.set(".bg_cover", { opacity: 0 }, "=-.1");
    tl.add(function () {
        (0, _commonJsDcJs.flare)(".flare1");
    });

    tl.add(function () {
        (0, _commonJsDcJs.flare)(".flare2");
    }, "+=.6");
    return tl;
}

module.exports = {};

},{"../../_common/js/dc.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
