import {init, end} from '../../_common/js/plus.js'
// import {creative} from '../../_common/js/dc.js'

const br = {
    DYANAMIC: 0,
    NEW_SPORTS: 1,
    SINGLE: 1,
    NEW_WAY: 1
}



const config = {
    playa: {x:220, y:700},
    msg2: "DYANAMIC",
    msg3: "SINGLE",
    bonus: "_200",
    br
}

start()    







function start(){
    
    document.getElementById("t1b").innerHTML = "OF SPORTS<br/> BETTING IS HERE"
    
    const tl = init(config)
    tl.set(".get", {x: 0 })
    end.vertical(tl)
     // tl.play("playa")
}







module.exports = {};

