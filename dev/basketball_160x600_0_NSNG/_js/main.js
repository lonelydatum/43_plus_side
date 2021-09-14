import {init, end} from '../../_common/js/plus.js'
import {configSize} from '../../_common/js/plusHelper.js'
// import {creative} from '../../_common/js/dc.js'


// window.plusData.

const sports = {
    baseball: {
        playa: {x:170, y:780},
        playaStart: {x:-70, y:-390, scale:.18},
        flares: [ [-41, 272], [20, 272], [5, 338] ]
    },
    basketball: {
        playa: {x:170, y:780},
        playaStart: {x:-70, y:-390, scale:.18},
        flares: [ [15, 275], [25, 338] ]
    },
    football: {
        playa: {x:220, y:700},
        playaStart: {x:-108, y:-354, scale:.18},
        flares: [ [-41, 272], [25, 338] ]
    },
    hockey: {
        playa: {x:160, y:630},
        playaStart: {x:-0, y:-312, scale:.18},
        flares: [ [-41, 272], [25, 383] ]
    },
    generic: {
        playa: {x:130, y:625},
        playaStart: {x:-0, y:-312, scale:.18},
        flares: [ [-41, 272], [20, 272], [5, 338] ]
    }
}


start()





function start(){
    // const sportName = window.plusData.type==="generic" ? "SPORTS":window.plusData.type
    
    const sportName = window.plusData.type==="generic" ? "SPORTS":window.plusData.type
    if(window.plusData.type==="basketball"){
        document.getElementById("t1b").innerHTML = `OF NBA<br/> ${sportName}<br/> BETTING IS HERE`    
    }else{
        document.getElementById("t1b").innerHTML = `OF ${sportName}<br/> BETTING IS HERE`
    }
    
    
    
    
    // return
    const tl = init(sports)
    tl.set(".get", {x: 0 })
    end.bonus(tl)
    // tl.play("t3")
}







module.exports = {};

