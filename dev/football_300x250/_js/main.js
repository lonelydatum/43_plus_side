import {flare, creative, TEXT, olg, textFX} from '../../_common/js/dc.js'

start()    

creative.showAd = ()=>{
    start()    
}


creative.dynamicDataAvailable = function() {
  

// Dynamic Content variables and sample values
    Enabler.setProfileId(10660348);
    var devDynamicContent = {};

    devDynamicContent.proline_test_sheet_1 = [{}];
    devDynamicContent.proline_test_sheet_1[0]._id = 0;
    devDynamicContent.proline_test_sheet_1[0].Unique_ID = 1;
    devDynamicContent.proline_test_sheet_1[0].Reporting_Label = "label 1";
    devDynamicContent.proline_test_sheet_1[0].single_event = true;
    devDynamicContent.proline_test_sheet_1[0].message1 = "Single Event Wagering";
    devDynamicContent.proline_test_sheet_1[0].message2 = "Live Betting";
    devDynamicContent.proline_test_sheet_1[0].bonus = 25;
    devDynamicContent.proline_test_sheet_1[0].Default = true;
    devDynamicContent.proline_test_sheet_1[0].Active = true;
    devDynamicContent.Profile = [{}];
    devDynamicContent.Profile[0]._id = 0;
    devDynamicContent.Profile[0].single_event = 0;
    Enabler.setDevDynamicContent(devDynamicContent);



    creative.dynamicData = {
    	bonus: dynamicContent.proline_test_sheet_1[0].bonus
    }
};





 


function start(){

    document.getElementById("t2a").innerHTML = TEXT.msg2.single
    document.getElementById("bonus").innerHTML = `$${TEXT.bonus._25} BONUS.`
    

	
	const tl = new TimelineMax()
    tl.set(".frame1", {opacity:1})
	tl.from(".bg", {opacity:0, scale:.5, duration:.3}, "+=.2")
	
        
    tl.add(textFX("#t1a"), "+=.3")
    tl.add(textFX("#t1b"), "+=.5")
    
    tl.add(playa(), "+=.3")    

    tl.to(".frame1 .t1", {duration:.2, opacity:0}, "+=1.2")


    tl.add("logo")
    tl.from(".proline_new", {duration:.3, opacity:0}, "logo")    
    tl.fromTo(".proline_logo", {maskImage:'linear-gradient(to left, transparent 80%, black 115%)'}, {duration:.6, maskImage:'linear-gradient(to left, transparent 0%, black 10%)'}, "logo")
    
    
    tl.add("t2", "+=.2")
    tl.add(textFX("#t2a"), "t2")
    tl.set(".proline_plus", {opacity:1}, "t2")
    tl.to(".proline_plus", {duration:.4, rotate:"+=90", ease:'power3.out'}, "t2")


    tl.to([".proline_new", "#t2a"], {duration:.2, opacity:0}, "+=2.2")




    tl.from(".get", {duration:.2, opacity:0}, "+=.5")
    tl.add(textFX("#bonus", .04))

    tl.to(["#bonus", ".get"], {duration:.2, opacity:0}, "+=2")

    tl.from("#cta", {duration:.2, opacity:0}, "+=.3")

    tl.add("footer")
    tl.from("#legal-btn", {duration:.2, x:"+=60"}, "footer")
	tl.add( olg(), "footer" )


     tl.add(()=>{
        TweenLite.set("#legalBtn", {display:"block"})
    }, "+=.3")

     // tl.play("playa")
}

function playa(){
    const tl = new TimelineMax()
    tl.set([".playa", ".bg_cover"], {opacity:1})
    tl.to(".playa", {duration:.6, x:-170, y:-190, scale:.5, ease:"power3.inOut"})    
    tl.set(".bg_cover", {opacity:0}, "=-.1")
     tl.add(()=>{
        flare(".flare1")
    })

    tl.add(()=>{
        flare(".flare2")
    }, "+=.6")
    return tl;
}








module.exports = {};

