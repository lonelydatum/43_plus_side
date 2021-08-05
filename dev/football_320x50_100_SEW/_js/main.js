import {end, TXT, textFX, playa, addBR, initHorizonal} from '../../_common/js/plus.js'



const sports = {
    baseball: {
        playa: {x:585, y:63},     
        flares: [[120, 7, .4], [148, 20, .4]]
    },
    football: {
        playa: {x:585, y:63},     
        flares: [[120, 7, .4], [148, 20, .4]]
    }
}



start()    





function start(){    
    const tl = initHorizonal(sports)
    const shift = {
        cta: {x:-135, y:-17.5},
        logo: 39
    }
    
    end.horizontal(tl, shift)
    
}







module.exports = {};

