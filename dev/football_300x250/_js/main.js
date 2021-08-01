import {init, end} from '../../_common/js/plus.js'
import {creative} from '../../_common/js/dc.js'



const br = {
    DYANAMIC: null,
    NEW_SPORTS: null,
    SINGLE: null,
    NEW_WAY: null
}


const config = {
    playa: {x:340, y:380},
    msg2: "NEW_SPORTS",
    bonus: "_100",
    br
}

start()    

creative.showAd = ()=>{
    // start()    
}





function start(){
    const tl = init(config)
    end.bb(tl)
}







module.exports = {};

