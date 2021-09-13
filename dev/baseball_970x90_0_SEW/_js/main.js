import {end, TXT, textFX, playa, addBR, initHorizonal} from '../../_common/js/plus.js'


// import {creative} from '../../_common/js/dc.js'

// window.plusData.single = "kjh"
// window.plusData.bonus = 0

const sports = {
    baseball: {
        playa: {x:1640, y:80},   
        playaStart: {x:-810, y:-7, scale:.1},
        flares: [[641, 22, .5],[688, 22, .5], [660, 50, .5]]
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
    document.getElementById("t1b").innerHTML = `OF ${sportName} BETTING IS HERE`
    
    const tl = initHorizonal(sports)

    const shift = {
        cta: {x:0, y:0},
        logo: 69
    }
    end.bonus(tl, shift)     
    // tl.play("t3")
}



start()

module.exports = {};

