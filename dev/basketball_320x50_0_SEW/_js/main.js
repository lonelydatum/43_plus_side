import {end, TXT, textFX, playa, addBR, initHorizonal} from '../../_common/js/plus.js'

// window.plusData.bonus = 200

const sports = {
    baseball: {
        playa: {x:570, y:80},     
        playaStart: {x:-278, y:-40, scale:.3},
        flares: [[148, 18, .4]]
    },
    basketball: {
        playa: {x:585, y:63},     
        playaStart: {x:-280, y:-25, scale:.3},
        flares: [[140, 7, .4], [148, 20, .4]]
    },
    football: {
        playa: {x:585, y:63},     
        playaStart: {x:-280, y:-25, scale:.3},
        flares: [[120, 7, .4], [148, 20, .4]]
    },
    hockey: { 
        playa: {x:585, y:63},     
        playaStart: {x:-280, y:-25, scale:.3},
        flares: [[120, 7, .4], [136, 28, .4]]
    },
    generic: {
        playa: {x:560, y:50},
        playaStart: {x:-261, y:-25, scale:.3},
        flares: [[120, 7, .4], [148, 20, .4]]
    }
}



start()    





function start(){    

    const sportName = window.plusData.type==="generic" ? "SPORTS":window.plusData.type
    

    if(window.plusData.type==="basketball"){
        document.getElementById("t1b").innerHTML = `OF NBA ${sportName} BETTING IS HERE`    
    }else{
        document.getElementById("t1b").innerHTML = `OF ${sportName} BETTING IS HERE`
    }

    if(window.plusData.type==="hockey"){
        TweenLite.set(".t1", {x:"+=22"})        
    }
    
    const tl = initHorizonal(sports)
    const shift = {
        cta: {x:0, y:0},
        logo: 29
    }


    
    end.mobile(tl, shift)

    // tl.play("t3")
    
}







module.exports = {};

