import {TXT, init, end} from '../../_common/js/plus.js'





const sports = {
    baseball: {
        playa: {x:290, y:840},     
        playaStart: {x:-117, y:-420, scale:.3},
        flares: [[-14, 198],[-23, 198], [44, 342]]
    },
    football: {
        playa: {x:380, y:720},     
        playaStart: {x:-190, y:-360, scale:.2},
        flares: [[-83, 262],[44, 345]]
    },
    generic: {
        playa: {x:1600, y:250},
        playaStart: {x:-720, y:-105, scale:.18},
        flares: [[670, 21],[703, 110], [574, 152], [677, 205]]
    }
}



start()    




function start(){
    
    // document.getElementById("t1b").innerHTML = "OF SPORTS BETTING<br/> IS HERE"
    const len = plusData.size.length
    
    const tl = init(sports)
    end.vertical(tl, 37)
    // tl.play("t3")
}







module.exports = {};

