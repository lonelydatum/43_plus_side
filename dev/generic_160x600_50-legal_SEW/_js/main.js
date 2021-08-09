import {init, end} from '../../_common/js/plus.js'
import {configSize} from '../../_common/js/plusHelper.js'
// import {creative} from '../../_common/js/dc.js'


const sports = {
    baseball: {
        playa: {x:170, y:780},
        playaStart: {x:-70, y:-390, scale:.18},
        flares: [ [-41, 272], [20, 272], [5, 338] ]
    },
    football: {
        playa: {x:220, y:700},
        playaStart: {x:-108, y:-354, scale:.18},
        flares: [ [-41, 272], [25, 338] ]
    },
    generic: {
        playa: {x:130, y:625},
        playaStart: {x:-0, y:-312, scale:.18},
        flares: [ [-41, 272], [20, 272], [5, 338] ]
    }
}


start()    







function start(){
    
    document.getElementById("t1b").innerHTML = "OF SPORTS<br/> BETTING IS HERE"
    
    
    

    const tl = init(sports)
    tl.set(".get", {x: 0 })
    end.vertical(tl)
     // tl.play("playa")
}







module.exports = {};

