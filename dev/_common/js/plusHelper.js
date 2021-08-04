TweenLite.defaultEase = Power2.easeOut
const TXT = {
  DYANAMIC: {txt:"DYNAMIC COMPETITIVE ODDS", read:2},
  NEW_SPORTS: {txt:"NEW SPORTS, NEW GAMES", read:2},
  SINGLE: {txt:"SINGLE EVENT BETTING & MORE", read:2.2},
  NEW_WAY: {txt:"NEW WAYS TO BET", read:1.8},
  FIFTY: {txt:"$50 FIRST DEPOSIT MATCH - V2", read:2.5},
  _0: "0",
  _25: "25",
  _50: "50",
  _100: "100",
  _200: "200"
}


function olg(){
    const tl = new TimelineMax()
        
    tl.to("#bluewedge1", {duration:.5, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)
    tl.to("#redwedge1", {duration:.8, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)

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
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}




function textFX(id, stagger=.021){    
    const tl = new TimelineMax()
    var splitText = new SplitText(id, {type: "chars"})
    splitText = shuffle(splitText.chars)
    tl.from(splitText, {duration:.08, stagger:.021, autoAlpha: 0})
    return tl
}


function flare(id){
    const tl = new TimelineMax({repeat:30, repeatDelay:.3, yoyo:true})
    tl.to(id, {duration:1, opacity:1})
}



function playa({x, y}){
    const tl = new TimelineMax()
    tl.set(".playa", {transformOrigin:`${x}px ${y}px`})    
    tl.to(".playa", {duration:.8, x:-x/2, y:-y/2, opacity:1, scale:.5, ease:"power3.inOut"})
    tl.set(".bg_cover", {opacity:0}, "=-.3")
    tl.add(()=>{
        TweenLite.to(".playa", {duration:5, scale:.53, ease:"linear.easeNone"})        
    })
    
    
    tl.add(()=>{
        flare(".flare1")
    })

    tl.add(()=>{
        flare(".flare2")
    }, "+=.6")
    return tl;
}

function addBR(config, key){
    console.log(config, key);
    const str = TXT[key].txt
    const br = config.br[key]
    
    if(br==null || br==undefined){
     return str   
    }
    const msg2Split = str.split(" ")
    msg2Split[br] += "<br/>"
    return msg2Split.join(" ")
}


CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ")



export {olg, shuffle, textFX, flare, playa, addBR, TXT}