import {end, TXT, textFX, playa, addBR, initHorizonal} from '../../_common/js/plus.js'


// import {creative} from '../../_common/js/dc.js'



const sports = {
    baseball: {
        playa: {x:1260, y:120},   
        flares: [[430, 20],[490, 52]]
    },
    football: {
        playa: {x:1260, y:120},   
        flares: [[430, 20],[490, 52]]
    }
}




function start(){
    
    const tl = initHorizonal(sports)

    const shift = {
        cta: {x:-420, y:-45},
        logo: 121
    }

    end.horizontal(tl, shift)     

}



start()

module.exports = {};

