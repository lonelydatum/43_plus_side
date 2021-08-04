import {olg, shuffle, textFX, flare, playa, addBR, TXT} from './plusHelper.js'
// import {creative} from './dc.js'
import {transformOrigin} from './helpers/bannerHelpers'

window.plusSettings = {
    "160x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: 1 }, 
        playa: {x:220, y:700},
    },
    "300x250": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null }, 
        playa: {x:340, y:380},     
    },
    "300x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: null }, 
        playa: {x:380, y:720},     
    },
    "320x50": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null }, 
        playa: {x:585, y:63},     
    },
    "728x90": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null }, 
        playa: {x:1260, y:120},     
    },
}

let _config

function initCommon() {
    let config = window.plusSettings[window.plusData.size]    
    const isSingle = window.plusData.single==="single"
    const msg = isSingle ? {msg2: "DYANAMIC", msg3:"SINGLE"} : {msg2:"NEW_SPORTS", msg3:"NEW_WAY"}
    config = {...config, ...msg, bonus: `_${window.plusData.bonus}`}

    _config = config
    const msg2 = addBR(config, config.msg2)
    const msg3 = addBR(config, config.msg3)
    console.log(msg3);
    document.getElementById("t2").innerHTML = msg2
    document.getElementById("t3").innerHTML = msg3
    document.getElementById("bonus").innerHTML = `$${TXT[config.bonus]} BONUS.`

    document.getElementById("cta").addEventListener("mouseover", ()=>{    
        document.getElementById("cta").classList.add("shadow");
    })

    document.getElementById("cta").addEventListener("mouseout", ()=>{    
        document.getElementById("cta").classList.remove("shadow");
    })


    const tl = new TimelineMax()
    tl.set(".frame1", {opacity:1})
    

    tl.from([".bg", ".bg_border"], {opacity:0, scale:.5, duration:.3}, "+=.2")
    tl.add(()=>{
        TweenLite.to(".bg_border", {duration:1, opacity:.3, repeat:9, repeatDelay:1, yoyo:true})
        // TweenLite.to(".bg_border", {duration:.3, opacity:.3})
    })

    tl.add(textFX("#t1a"), "+=.3")
    tl.add(textFX("#t1b"), "+=.5")
    tl.add("playa")   
    tl.add(playa(config.playa), "-=.2")   
    tl.to(".t1", {duration:.2, opacity:0}, "+=1.2")

    tl.add("logo")
    tl.from(".proline_new", {duration:.3, opacity:0}, "logo")        
    tl.from(".proline_logo", {duration:.6, maskImage:'linear-gradient(to left, transparent 100%, black 100%)'}, "logo")
    tl.set(".proline_plus", {opacity:1}, "logo+=.6")   
    tl.to(".proline_plus", {duration:.4, scale:"+=.4", ease:'power1.inOut'}, "logo+=.6")
    
    
    tl.from('.proline_plus', {duration: .2, rotation: 90, ease:'power1.inOut'},'logo+=.7')
    tl.to('.proline_plus', {duration: .6, scale: .5, ease: 'power1.inOut'},'logo+=1.3')
    tl.to('.proline_plus', {duration: .02, opacity:0, yoyo: true, repeat: 1},'logo+=1.3')
    tl.to('.proline_plus', {duration: .02, opacity:0, yoyo: true, repeat: 1},'logo+=1.4')
    tl.to('.proline_plus', {duration: .02, opacity:0, yoyo: true, repeat: 2},'logo+=1.5')

    

    

    tl.add("t2", "+=.2")
    tl.add(textFX("#t2"), "t2")
    tl.add(()=>{
        TweenMax.to('.star', {duration:1, opacity:1, yoyo: true, repeat: 1})    
    }, "t2")
    tl.to("#t2", {duration:.3, opacity:0}, `+=${TXT[_config.msg2].read}`)
    
    tl.add("t3")
    tl.add(textFX("#t3"), "t3")
    tl.add(()=>{
        TweenMax.to('.star', {duration:1, opacity:1, yoyo: true, repeat: 1})    
    }, "t3")
    
    // tl.set(".get", {x: TXT[config.bonus].length===3 ? -4 : 0 })

    
    return tl
}

function initHorizonal(){
    const tl = initCommon()            
    tl.to("#t3", {duration:.2, opacity:0}, `+=${TXT[_config.msg3].read}`)
    return tl
}


function init(){
    
    
    
    if(plusData.bonus===0){
        TweenLite.set([".get", "#bonus"], {display:'none'})
    }


    return initCommon()
}

function showBonus(tl){
    if(plusData.bonus>0){
        tl.from(".get", {duration:.2, opacity:0}, "+=.2")
        tl.add(textFX("#bonus", .04), "+=.1")    
    }
    return tl
}

function endHorizontal(tl, shift) {
    showBonus(tl)
    tl.from("#cta", {duration:.3, opacity:0})
    if(plusData.bonus>0){
        tl.to(["#bonus", ".get"], {duration:.2, opacity:0}, "+=2")    
    }
    
    tl.add("shift")
    tl.to(".proline", {duration:.2, x:`+=${shift.logo}`}, "shift")
    tl.to("#cta", {duration:.2, scale:.5, x:shift.cta.x, y:shift.cta.y}, "shift")
    endFooter(tl)
}

function endVertical(tl) {
    tl.to("#t3", {duration:.2, opacity:0}, `+=${TXT[_config.msg3].read}`)
    

    showBonus(tl)
    
    tl.from("#cta", {duration:.2, opacity:0}, "+=.3")
    if(plusData.bonus>0){
        tl.to(["#bonus", ".get"], {duration:.2, opacity:0}, "+=2")
    }
    
    tl.to(".proline", {duration:.2, y:"+=25"})
    endFooter(tl)
}


function endBB(tl) {
    tl.to([".proline_new", "#t3"], {duration:.2, opacity:0}, `+=${TXT[_config.msg3].read}`)
    showBonus(tl)
    if(plusData.bonus>0){
        tl.to(["#bonus", ".get"], {duration:.2, opacity:0}, "+=2")
    }
    
    tl.from("#cta", {duration:.2, opacity:0}, "+=.3")
    endFooter(tl)
}

function endFooter(tl){
    tl.add("footer", "+=.3")
    tl.from("#legal-btn", {duration:.2, x:"+=80"}, "footer")
    tl.add( olg(), "footer" )
    tl.add(()=>{
        TweenLite.set("#legalBtn", {display:"block"})
    }, "+=.3")

    // tl.play("footer")
}

const end = {
    horizontal: endHorizontal,
    vertical: endVertical,
    bb: endBB
}



export {TXT, olg, textFX, flare, playa, init, end, addBR, initHorizonal}

