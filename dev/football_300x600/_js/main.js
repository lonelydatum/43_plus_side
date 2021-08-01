import {init, end} from '../../_common/js/plus.js'
import {creative} from '../../_common/js/dc.js'



const br = {
    DYANAMIC: 1,
    NEW_SPORTS: 1,
    SINGLE: 1,
    NEW_WAY: null
}

const config = {
    playa: {x:380, y:720},
    msg2: "NEW_SPORTS",
    bonus: "_100",
    br
}

start()    

creative.showAd = ()=>{
    // start()    
}





function start(){
    document.getElementById("t1b").innerHTML = "OF SPORTS BETTING<br/> IS HERE"
    const tl = init(config)
    end.vertical(tl)
     // tl.play("playa")
}







module.exports = {};

