import {TXT, init, end} from '../../_common/js/plus.js'





const sports = {
    baseball: {
        playa: {x:290, y:840},     
        playaStart: {x:-117, y:-420, scale:.3},
        flares: [[-14, 198],[-23, 198], [44, 342]]
    },
    basketball: {
        playa: {x:380, y:720},     
        playaStart: {x:-190, y:-360, scale:.2},
        flares: [[31, 262],[44, 343]]
    },
    football: {
        playa: {x:380, y:720},     
        playaStart: {x:-190, y:-360, scale:.2},
        flares: [[-83, 262],[44, 345]]
    },
    hockey: {
        playa: {x:380, y:720},     
        playaStart: {x:-190, y:-360, scale:.2},
        flares: [[-83, 262],[44, 345]]
    },
    generic: {
        playa: {x:260, y:640},
        playaStart: {x:-60, y:-320, scale:.18},
        flares: [[-14, 198],[-23, 198], [44, 342]]
    }
}


start()    




function start(){
    
    const sportName = window.plusData.type==="generic" ? "SPORTS":window.plusData.type
    document.getElementById("t1b").innerHTML = `OF ${sportName} BETTING<br/> IS HERE`


    
    const len = plusData.bonus.toString().length
    
    
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }
    const tl = init(sports)
    end.bonus(tl)
    // tl.play("t3")
}







module.exports = {};

