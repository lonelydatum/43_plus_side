import {TXT, init, end} from '../../_common/js/plus.js'





const sports = {
    baseball: {
        playa: {x:380, y:720},     
        flares: [[-83, 258],[44, 345]]
    },
    football: {
        playa: {x:380, y:720},     
        flares: [[-83, 258],[44, 345]]
    }
}


start()    







function start(){
    
    document.getElementById("t1b").innerHTML = "OF SPORTS BETTING<br/> IS HERE"
    const len = plusData.size.length
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }
    const tl = init(sports)
    end.vertical(tl)
     // tl.play("playa")
}







module.exports = {};

