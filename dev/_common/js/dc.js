function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);



var creative = {};

creative.init = function() {
  
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.VISIBLE,
        creative.enablerInitHandler
      );
    }
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      creative.enablerInitHandler
    );
  }
};

creative.setupDOMElements = function() {
  creative.domElements = {};
  creative.domElements.exit_button = document.getElementById("pn-bg-exit");
  creative.domElements.title = document.getElementById("dynamicContent_title");
};



creative.enablerInitHandler = function(event) {
  creative.dynamicDataAvailable();

  creative.domElements.exit_button.addEventListener( "click", creative.exitClickHandler );

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler );
  }
};

creative.exitClickHandler = function(event) {
  Enabler.exit("exit", creative.dynamicExitUrl);
};

creative.pageLoadHandler = function(event) {
  console.log(creative.dynamicData);  
  // creative.domElements.title.innerHTML = creative.dynamicData.bonus;
  // creative.showAd();
};

window.addEventListener('load', creative.init.bind(creative));

// Handle Animation
// creative.showAd = function() {
//   // add your animation js here
// };



const TEXT = {
  msg1: {
      dynamic: "Dynamic Competitive Odds",
      new: "New Sports, New Games",
      single: "Single Event Betting & More"
  },
  msg2: {
      single: "Single Event Betting & More",
      new: "New Ways to Bet",
      fifty: "$50 first deposit match - v2"
  },
  bonus: {
    _25: 25,
    _50: 50,
    _100: 100,
    _200: 200
  }

  
}

TweenLite.defaultEase = Power2.easeOut

function olg(){
    const tl = new TimelineMax()
    
    
    tl.to("#bluewedge1", {duration:.5, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)
    tl.to("#redwedge1", {duration:.8, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)

    // tl.to("#bluewedge1", {duration: .8, morphSVG: "#bluewedge2", ease: 'power1.inOut'}, 0)
    // .to("#redwedge1", {duration: .8, morphSVG: "#redwedge2", ease: 'power1.inOut'}, 0)

    .from('#group-o', {duration: 1, y: 200, ease: "custom"}, 0)
    .from('#group-l', {duration: 1, y: 200, ease: "custom"}, .1)
    .from('#group-g', {duration: 1, y: 200, ease: "custom"}, .2)

    .from('#group-o', {duration: .8, scale: .4, ease: "power1.out"}, .3)
    .from('#group-l', {duration: .8, scale: .4, ease: "power1.out"}, .4)
    .from('#group-g', {duration: .8, scale: .4, ease: "power1.out"}, .5)

    .from('#letter-o', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt'}, .9)
    .from('#letter-l', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt'}, 1)
    .from('#letter-g', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt'}, 1.1)

    return tl
}


function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function textFX(id, stagger=.01){    
    const tl = new TimelineMax()
    var splitText = new SplitText(id, {type: "chars"})
    splitText = shuffle(splitText.chars)
    tl.from(splitText, {duration:.08, stagger, autoAlpha: 0})
    return tl
}


function flare(id){
    const tl = new TimelineMax({repeat:30, repeatDelay:.3, yoyo:true})
    tl.to(id, {duration:1, opacity:1})
}

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ")

export {creative, TEXT, olg, textFX, flare}


