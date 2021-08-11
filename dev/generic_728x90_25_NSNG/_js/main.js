import {end, TXT, textFX, playa, addBR, initHorizonal} from '../../_common/js/plus.js'


// import {creative} from '../../_common/js/dc.js'

// window.plusData.bonus = 50

const sports = {
    baseball: {
        playa: {x:1220, y:180},   
        playaStart: {x:-600, y:-90, scale:.3},
        flares: [[423, 20],[448, 20], [490, 52]]
    },
    football: {
        playa: {x:1260, y:120},   
        playaStart: {x:-624, y:-60, scale:.2},
        flares: [[430, 20],[490, 52]]
    },
    generic: {
        playa: {x:1200, y:100},
        playaStart: {x:-555, y:-25, scale:.3},
        flares: [[423, 20],[448, 20], [490, 52]]

    }
}




function start(){
    
    const tl = initHorizonal(sports)

    const shift = {
        cta: {x:-420, y:-45},
        logo: 121
    }

    end.horizontal(tl, shift)     
    // tl.play("t3")
}



start()

module.exports = {};

