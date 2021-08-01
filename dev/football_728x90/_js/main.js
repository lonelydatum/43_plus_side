import {end, TXT, textFX, playa, addBR} from '../../_common/js/plus.js'
import {transformOrigin} from '../../_common/js/helpers/bannerHelpers.js'

import {creative} from '../../_common/js/dc.js'



const br = {
    DYANAMIC: null,
    NEW_SPORTS: null,
    SINGLE: null,
    NEW_WAY: null
}

const config = {
    playa: {x:1260, y:120},
    msg2: "DYANAMIC",
    bonus: "_25",
    br
}

start()    

creative.showAd = ()=>{
    // start()    
}





function start(){
    
    const tl = init(config)
    const shift = {
        cta: {x:-420, y:-45},
        logo: 121
    }

    end.horizontal(tl, shift)
     // tl.play("playa")
}

let _config
function init(config){
    _config = config
    const msg2 = addBR(config, config.msg2)
    const msg2Read = TXT[config.msg2].read
    


    document.getElementById("t2").innerHTML = msg2
    document.getElementById("bonus").innerHTML = `$${TXT[config.bonus]} BONUS.`

    const tl = new TimelineMax()
    tl.set(".frame1", {opacity:1})
    tl.set(".get", {x: TXT[config.bonus].length===3 ? -4 : 0 })
    tl.set(".playa", {transformOrigin:`${config.playa.x}px ${config.playa.y}px`})

    // return

    
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
    


    tl.to("#t2", {duration:.2, opacity:0}, `+=${TXT[config.msg2].read}`)




    return tl
}




module.exports = {};

