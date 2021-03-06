import {end, TXT, textFX, playa, addBR, initHorizonal} from '../../_common/js/plus.js'

const sports = {
    baseball: {
        playa: {x:1220, y:180},   
        playaStart: {x:-600, y:-90, scale:.3},
        flares: [[423, 20],[448, 20], [490, 52]]
    },
    basketball: {
        playa: {x:1260, y:120},   
        playaStart: {x:-624, y:-60, scale:.2},
        flares: [[480, 20, .7],[447, 52, .7]]
    },
    football: {
        playa: {x:1260, y:120},   
        playaStart: {x:-624, y:-60, scale:.2},
        flares: [[430, 20],[490, 52]]
    },
    hockey: {
        playa: {x:1260, y:120},   
        playaStart: {x:-624, y:-60, scale:.2},
        flares: [[430, 20],[470, 75]] 
    },
    generic: {
        playa: {x:1200, y:100},
        playaStart: {x:-555, y:-25, scale:.3},
        flares: [[423, 20],[448, 20], [490, 52]]

    }
}

function start(){

    const sportName = window.plusData.type==="generic" ? "SPORTS":window.plusData.type
    
    
    if(window.plusData.type==="basketball"){

        document.getElementById("t1b").innerHTML = `OF NBA ${sportName} BETTING IS HERE`    
    }else{
        document.getElementById("t1b").innerHTML = `OF ${sportName} BETTING IS HERE`
    }

    if(window.plusData.type==="hockey"){
        TweenLite.set(".t1", {x:"+=45"})        
    }

    // return
    
    const tl = initHorizonal(sports)

    const shift = {
        cta: {x:-490, y:-43},
        logo: 69
    }
    end.bonus(tl, shift)     
    // tl.play("t3")
}



start()

module.exports = {};

