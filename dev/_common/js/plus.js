import {olg, shuffle, textFX, flare, playa, addBR, TXT} from './plusHelper.js'
import {creative} from './dc.js'
import {transformOrigin} from './helpers/bannerHelpers'



creative.dynamicDataAvailable = function() {
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

    creative.dynamicData = {
        bonus: dynamicContent.proline_test_sheet_1[0].bonus
    }
};

let _config

function initCommon(config) {
    _config = config
    const msg2 = addBR(config, config.msg2)
    document.getElementById("t2").innerHTML = msg2
    document.getElementById("bonus").innerHTML = `$${TXT[config.bonus]} BONUS.`
    const tl = new TimelineMax()
    tl.set(".frame1", {opacity:1})
    tl.set(".playa", {transformOrigin:`${config.playa.x}px ${config.playa.y}px`})

    tl.from(".bg", {opacity:0, scale:.5, duration:.3}, "+=.2")
    tl.add(textFX("#t1a"), "+=.3")
    tl.add(textFX("#t1b"), "+=.5")
    tl.add(playa(config.playa), "+=.3")   
    tl.to(".t1", {duration:.2, opacity:0}, "+=1.2")

    tl.add("logo")
    tl.from(".proline_new", {duration:.3, opacity:0}, "logo")        
    tl.from(".proline_logo", {duration:.6, maskImage:'linear-gradient(to left, transparent 100%, black 100%)'}, "logo")
    
    tl.add("t2", "+=.2")
    tl.add(textFX("#t2"), "t2")
    tl.set(".proline_plus", {opacity:1}, "t2")    
    // tl.set(".get", {x: TXT[config.bonus].length===3 ? -4 : 0 })
    return tl
}

function initHorizonal(config){
    const tl = initCommon(config)            
    tl.to("#t2", {duration:.2, opacity:0}, `+=${TXT[config.msg2].read}`)
    return tl
}


function init(config){
    return initCommon(config)
}


function endHorizontal(tl, shift) {
    tl.from(".get", {duration:.2, opacity:0}, "+=.2")
    tl.add(textFX("#bonus", .04), "+=.1")
    tl.from("#cta", {duration:.3, opacity:0})
    tl.to(["#bonus", ".get"], {duration:.2, opacity:0}, "+=2")    
    tl.add("shift")
    tl.to(".proline", {duration:.2, x:`+=${shift.logo}`}, "shift")
    tl.to("#cta", {duration:.2, scale:.5, x:shift.cta.x, y:shift.cta.y}, "shift")
    endFooter(tl)
}

function endVertical(tl) {
    tl.to("#t2", {duration:.2, opacity:0}, `+=${TXT[_config.msg2].read}`)
    tl.from(".get", {duration:.2, opacity:0}, "+=.2")
    tl.add(textFX("#bonus", .04), "+=.1")
    tl.from("#cta", {duration:.2, opacity:0}, "+=.3")
    tl.to(["#bonus", ".get"], {duration:.2, opacity:0}, "+=2")
    tl.to(".proline", {duration:.2, y:"+=25"})
    endFooter(tl)
}


function endBB(tl) {
    tl.to([".proline_new", "#t2"], {duration:.2, opacity:0}, `+=${TXT[_config.msg2].read}`)
    tl.from(".get", {duration:.2, opacity:0}, "+=.2")
    tl.add(textFX("#bonus", .04), "+=.1")
    tl.to(["#bonus", ".get"], {duration:.2, opacity:0}, "+=2")
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
}

const end = {
    horizontal: endHorizontal,
    vertical: endVertical,
    bb: endBB
}



export {TXT, olg, textFX, flare, playa, init, end, addBR, initHorizonal}

