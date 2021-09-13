import {TXT, init, end} from '../../_common/js/plus.js'





const sports = {
    baseball: {
        playa: {x:290, y:840},     
        playaStart: {x:-117, y:-420, scale:.3},
        flares: [[-14, 198],[-23, 198], [44, 342]]
    },
    football: {
        playa: {x:380, y:720},     
        playaStart: {x:-190, y:-360, scale:.2},
        flares: [[-83, 262],[44, 345]]
    },
    generic: {
        playa: {x:1111, y:1069},
        playaStart: {x:-555, y:-535, scale:.18},
        flares: [[230, 282],[363, 430], [104, 512], [217, 612]]
    }
}



start()    




function start(){
    
    // document.getElementById("t1b").innerHTML = "OF SPORTS BETTING<br/> IS HERE"
    const len = plusData.size.length
    
    const tl = init(sports)

    end.bb(tl, 37)
    // tl.play("t3")
}







module.exports = {};

