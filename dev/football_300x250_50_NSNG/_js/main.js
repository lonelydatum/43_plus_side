import {TXT, init, end} from '../../_common/js/plus.js'


// window.plusData.bonus = 200

const sports = {
    baseball: {
        playa: {x:290, y:325},     
        playaStart: {x:-120, y:-125, scale:.22},
        flares: [ [58, 101], [80, 101], [90, 183] ]
    },
    football: {
        playa: {x:340, y:380},     
        playaStart: {x:-162, y:-192, scale:.22},
        flares: [ [8, 146], [90, 183] ]
    },
    generic: {
        playa: {x:280, y:333},
        playaStart: {x:-100, y:-160, scale:.22},
        flares: [ [58, 101], [80, 101], [90, 183] ]
    }
}



function start(){
    
    const len = plusData.bonus.toString().length
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }

    const sportName = window.plusData.type==="generic" ? "SPORTS":window.plusData.type
    document.getElementById("t1b").innerHTML = `OF ${sportName} BETTING IS HERE`
    
    const tl = init(sports)
    end.bb(tl)
    // tl.play("t3")
}


start()    




module.exports = {};

