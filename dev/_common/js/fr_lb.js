
import {olg, shuffle, textFX, flare, addBR, TXT, TXT_FR} from './plusHelper.js' 


window.plusSettings = {
    "160x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: 1 }        
    },
    "300x250": {
        br: { DYANAMIC: 2, NEW_SPORTS: 2, SINGLE: 3, NEW_WAY: null }        
    },
    "300x600": {
        br: { DYANAMIC: 0, NEW_SPORTS: 1, SINGLE: 1, NEW_WAY: null }        
    },
    "320x50": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null }        
    },
    "728x90": {
        br: { DYANAMIC: 2, NEW_SPORTS: 2, SINGLE: 2, NEW_WAY: null }        
    },
    "970x250": {
        br: { DYANAMIC: null, NEW_SPORTS: null, SINGLE: null, NEW_WAY: null }        
    },
}

const sports = {
    baseball: {
        playa: {x:1220, y:180},   
        playaStart: {x:-600, y:-90, scale:.3},
        flares: [[423, 20],[448, 20], [490, 52]]
    },
    football: {
        playa: {x:1260, y:120},   
        playaStart: {x:-624, y:-60, scale:.2},
        flares: [[430, 20],[490, 52]]
    },
    generic: {
        playa: {x:1200, y:100},
        playaStart: {x:-555, y:-25, scale:.3},
        flares: [[423, 20],[448, 20], [490, 52]]

    }
}


start()    

let _config


function start(){

    const len = plusData.bonus.toString().length
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }

    document.getElementById("t1a").innerHTML = "LE CÔTÉ PLUS"
    document.getElementById("t1b").innerHTML = "DES MISES SPORTIVES EST ARRIVÉ"
    


    
    const tl = initCommon(sports)
    endBonus(tl)
    // tl.play("t3")
}


function initCommon(sports) {
    
    const sportItem = sports[plusData.type]


   
    
    if(plusData.bonus===0){
        TweenLite.set([".get", "#bonus"], {display:'none'})
    }
    let config = window.plusSettings[window.plusData.size]    
    const isSingle = window.plusData.single==="single"
    const msg = isSingle ? {msg2: "DYANAMIC", msg3:"SINGLE"} : {msg2:"NEW_SPORTS", msg3:"NEW_WAY"}
    config = {...config, ...msg, bonus: `_${window.plusData.bonus}`}

    _config = config
    const msg2 = addBR(config, config.msg2)
    const msg3 = addBR(config, config.msg3)

    console.log(config);
    // @include pos(228, 35);
    
    document.getElementById("t2").innerHTML = msg2
    document.getElementById("t3").innerHTML = msg3
    document.getElementById("bonus").innerHTML = `$${TXT[config.bonus]} BONUS`

    document.getElementById("cta").addEventListener("mouseover", ()=>{    
        document.getElementById("cta").classList.add("shadow");
    })

    document.getElementById("cta").addEventListener("mouseout", ()=>{    
        document.getElementById("cta").classList.remove("shadow");
    })

    const tracker = new Date().getTime()
    const tl = new TimelineMax({onComplete(){
        const d = new Date().getTime()
        console.log(d-tracker);
    }})
    tl.set(".frame1", {opacity:1})
    
    

    tl.from([".bg", ".cloudMain", ".bg_border"], {opacity:0, duration:.3}, "+=.2")
    tl.add(()=>{
        TweenLite.to(".bg_border", {duration:1, opacity:0, repeat:9, repeatDelay:1, yoyo:true})
    })
    
    // console.log(sportItem);

    tl.add(textFX("#t1a"), "+=.1")


    tl.add("playa", "+=.3")
    
    tl.add(()=>{
        playa(sportItem)
    }, "playa")   

    tl.add(textFX("#t1b"), "playa")
    
    
    tl.to(".t1", {duration:.2, opacity:0}, "+=1.5")

    tl.add("logo")
    tl.from([".proline_new", ".proline_new2"], {duration:.3, opacity:0}, "logo")        
    tl.from(".proline_logo", {duration:.6, maskImage:'linear-gradient(to left, transparent 100%, black 100%)'}, "logo")
    tl.from(".proline_online", {duration:.3, opacity:0}, "logo+=.5")        
    tl.set(".proline_plus", {opacity:1}, "logo+=.6")   
    tl.to(".proline_plus", {duration:.4, scale:"+=.4", ease:'power1.inOut'}, "logo+=.6")
    
    
    tl.from('.proline_plus', {duration: .2, rotation: 90, ease:'power1.inOut'},'logo+=.7')
    tl.to('.proline_plus', {duration: .6, scale: .5, ease: 'power1.inOut'},'logo+=1.3')
    tl.to('.proline_plus', {duration: .02, opacity:0, yoyo: true, repeat: 1},'logo+=1.3')
    tl.to('.proline_plus', {duration: .02, opacity:0, yoyo: true, repeat: 1},'logo+=1.4')
    tl.to('.proline_plus', {duration: .02, opacity:0, yoyo: true, repeat: 2},'logo+=1.5')

    
    tl.add("logoShift", "+=.3")
    tl.to([".proline_online", ".proline_new2"], {duration:.3, opacity:0}, "logoShift")        
    tl.to(".proline_new", {duration:.3, x:-56}, "logoShift")        
    tl.to(".proline_logo", {duration:.3, x:-56}, "logoShift")        

    // return
    tl.add("t2", "+=.2")
    tl.add(textFX("#t2"), "t2")
    tl.add(()=>{
        TweenMax.to('.star', {duration:1, opacity:1, yoyo: true, repeat: 1})    
    }, "t2")
    tl.to("#t2", {duration:.3, opacity:0}, `+=${TXT[_config.msg2].read}`)
    
    tl.add("t3")
    tl.add(textFX("#t3"), "t3")
    tl.add(()=>{
        TweenMax.to('.star', {duration:1, opacity:1, yoyo: true, repeat: 1})    
    }, "t3")
    
    // tl.set(".get", {x: TXT[config.bonus].length===3 ? -4 : 0 })

    // const total = 4
    // for(let i=1; i<=total; i++){
    //     // TweenLite.set(".cloud"+i, {x:Math.random()*50})
    //     makeSmoke(".cloud"+i, (i-1)/total)  
    // }

    // makeSmoke(".cloud1", 0)  

    TweenLite.fromTo(".cloud1", {scale:1, opacity:1}, {opacity:.7, scale:"+=1.5", duration:22, ease:'power.in'})

    
    return tl
}


function endBonus(tl, shift) {

    tl.to("#t3", {duration:.2, opacity:0}, `+=${TXT[_config.msg3].read}`)
    // tl.to("#t3", {duration:.2, opacity:0})
    console.log(shift);
    showBonus(tl)
    tl.add("shift")
    tl.to(".proline", {duration:.2, x:-24}, "shift")
    
    
    
    tl.from("#cta", {duration:.2, opacity:0})
    endFooter(tl)
}



function showBonus(tl){

    if(plusData.bonus>0){
        tl.from(".get", {duration:.2, opacity:0}, "+=.2")
        tl.add(textFX("#bonus", .04), "+=.1")    
    }
    return tl
}

function endFooter(tl){
    tl.add("footer", "+=.3")
    tl.from("#legal-btn", {duration:.2, x:"+=80"}, "footer")
    tl.add( olg(), "footer" )
    tl.add(()=>{
        TweenLite.set("#legalBtn", {display:"block"})
    }, "+=.3")

    // tl.play("footer")
}



function playa(sportItem){
   

    sportItem.flares.map((item, i)=>{
        const scale = item[2] || 1
        TweenLite.set(`.flare${i+1}`, {x:item[0], y:item[1], scale })
    })

    // return

    const {playa, playaStart} = sportItem
    const tl = new TimelineMax()
    tl.set(".playa", {transformOrigin:`${playa.x}px ${playa.y}px`, ...playaStart})    
    tl.to(".playa", {duration:1, x:-playa.x/2, y:-playa.y/2, opacity:1, scale:.5, ease:"power3.out"})
    
    tl.add(()=>{
        TweenLite.to(".playa", {duration:20, scale:.51, ease:"linear.easeNone"})
    })
    

    sportItem.flares.map((item, i)=>{
        tl.add(()=>{
            flare(`.flare${i+1}`)
        }, `+=${(i/sportItem.flares.length)*.6}`)    
    })



    

}


module.exports = {};

