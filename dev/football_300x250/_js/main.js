import {TXT, init, end} from '../../_common/js/plus.js'
// import {TXT} from '../../_common/js/bannerHelpers'
// import {creative} from '../../_common/js/dc.js'



const br = {
    DYANAMIC: null,
    NEW_SPORTS: null,
    SINGLE: null,
    NEW_WAY: null
}


const config = {
    playa: {x:340, y:380},
    msg2: "DYANAMIC",
    msg3: "SINGLE",
    bonus: "_200",
    br
}

start()    

// creative.showAd = ()=>{
//     // start()    
// }





function start(){
    const len = TXT[config.bonus].length
    if(len>=3){
        TweenLite.set([".get", "#bonus"], {x:"-=5"})
    }
    const tl = init(config)
    end.bb(tl)
}







var creative = {};

creative.init = function() {
  
  creative.setupDOMElements();

  // Check if Enabler is initialized.
  if (Enabler.isInitialized()) {
    // Check if ad is visible to user.
    if (Enabler.isVisible()) {
      creative.enablerInitHandler();
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.VISIBLE,
        creative.enablerInitHandler
      );
    }
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      creative.enablerInitHandler
    );
  }
};

creative.setupDOMElements = function() {
  creative.domElements = {};
  creative.domElements.exit_button = document.getElementById("bg-exit");
  creative.domElements.title = document.getElementById("dynamicContent_title");
};



creative.enablerInitHandler = function(event) {
  creative.dynamicDataAvailable();

  creative.domElements.exit_button.addEventListener( "click", creative.exitClickHandler );

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler );
  }
};

creative.exitClickHandler = function(event) {
  // Enabler.exit("exit", "creative.dynamicExitUrl");
  Enabler.exit('Background Exit');
};

creative.pageLoadHandler = function(event) {
  console.log(creative.dynamicData);  
  // creative.domElements.title.innerHTML = creative.dynamicData.bonus;
  // creative.showAd();
};


window.creative = creative
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
    devDynamicContent.Profile[0].single_event = 55;
    devDynamicContent.Profile[0].gar = "\"hello\"";
    Enabler.setDevDynamicContent(devDynamicContent);

    creative.dynamicData = {
        bonus: dynamicContent.proline_test_sheet_1[0].bonus,
        isSingleEvent: true
    }

    // creative.dynamicExitUrl = "https://google.com";

    console.log(dynamicContent);
    
};


window.addEventListener('load', creative.init.bind(creative));


module.exports = {};

