import {end, TXT, textFX, playa, addBR, initHorizonal} from '../../_common/js/plus.js'
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
    bonus: "_200",
    br
}

start()    

creative.showAd = ()=>{
    // start()    
}





function start(){
    const tl = initHorizonal(config)    
    const shift = {
        cta: {x:-420, y:-45},
        logo: 121
    }
    end.horizontal(tl, shift)     
}

let _config



module.exports = {};

