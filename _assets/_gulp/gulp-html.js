var gulp            = require('gulp');
var ejs             = require("gulp-ejs");
var util            = require('gulp-util');
var notify          = require("gulp-notify");


function buildTemplates(project, browserSync){
    
	var splitInfo = project.split('_');
    const len = splitInfo.length
    var type = splitInfo[0];
    var size = splitInfo[1];

    var bonus = splitInfo[2];
    var single = splitInfo[3];    
    if(project.charAt(0)==="-"){
        type = type.replace("-", "")
        type = "football"
    }
    
    
    
    
    var wh = size.split("x");
    var width = wh[0];
    var height = wh[1];
    var obj = {
        width:width, 
        height:height, 
        type:type, 
        single: single==="SEW"?"single":"new", 
        bonus:bonus, bonusLegal:false, size:size};

    if( bonus.indexOf("-") >= 0 ){
        obj.bonus = bonus.split("-")[0]
        obj.bonusLegal = true
    }

    return gulp.src("./dev/"+project+"/index.ejs")

        .pipe(ejs(obj).on('error', util.log))        
        .on('error', notify.onError({message:"<%= error.message %>", wait: false}))               
        .pipe(gulp.dest(function(file){
            return file.base;
        }))
        .pipe(browserSync.stream());
}


module.exports = buildTemplates;