import {TXT, init, end} from '../../_common/js/plus.js'
// import {TXT} from '../../_common/js/bannerHelpers'
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
    bonus: "_25",
    br
}

start()    

creative.showAd = ()=>{
    // start()    
}





function start(){
    const len = TXT[config.bonus].length
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }
    const tl = init(config)
    end.bb(tl)
}







module.exports = {};

