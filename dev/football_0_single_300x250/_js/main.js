import {TXT, init, end} from '../../_common/js/plus.js'

start()    

function start(){
    let config = window.plusSettings[window.plusData.size]    
    const len = plusData.size.length
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }
    const tl = init()
    end.bb(tl)
}







module.exports = {};

