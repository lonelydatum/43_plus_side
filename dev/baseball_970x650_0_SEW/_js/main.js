import {TXT, init, end} from '../../_common/js/plus.js'





const sports = {
    baseball: {
        playa: {x:1092, y:1188},     
        
        playaStart: {x:-549, y:-596, scale:.1},
        flares: [[154, 356],[447, 392], [477, 482]]
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
    
    document.getElementById("t1b").innerHTML = "OF BASEBALL BETTING IS HERE"
    const len = plusData.size.length
    
    const tl = init(sports)
    end.vertical(tl, 0)
    // tl.play("t3")
}







module.exports = {};

