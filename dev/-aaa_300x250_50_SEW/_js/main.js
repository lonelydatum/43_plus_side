import {TXT, init, end} from '../../_common/js/plus.js'




const sports = {
    baseball: {
        playa: {x:340, y:380},     
        flares: [ [8, 146], [90, 183] ]
    },
    football: {
        playa: {x:340, y:380},     
        flares: [ [8, 146], [90, 183] ]
    }
}


function start(){
    
    const len = plusData.size.length
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }
    console.log(sports);
    const tl = init(sports)
    end.bb(tl)
}


start()    




module.exports = {};

