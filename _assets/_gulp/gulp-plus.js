var gulp            = require('gulp');
var notify          = require("gulp-notify");
var htmlmin         = require('gulp-htmlmin');
var replace         = require('gulp-replace');
var inlinesource    = require('gulp-inline-source');
var stripDebug      = require('gulp-strip-debug');
var rename          = require('gulp-rename');
var moment          = require('moment');
var ghtmlSrc = require('gulp-html-src');
var zip           = require('gulp-zip');



function createSize(folderName) {
    const types = [
    "football_0_single",
    "football_25_single",
    "football_25_new",
    "football_50_single",
    "football_50_new",
    "football_50-legal_single",
    "football_50-legal_new",
    "football_100_single",
    "football_100_new",
    "football_200_single",
    "football_200_new"

    ]

    var splits = folderName.split("_")
    for(var i=0; i<types.length; i++){        
        gulp.src('./dev/'+folderName+"/**/*")
            .pipe(gulp.dest('./_dev/'+types[i]+"_"+splits[splits.length-1]));
    }
}

function plus(){  
    const sizes = [
        "football_25_single_160x600",
        "football_25_single_160x600",
        "football_25_single_300x250",
        "football_25_single_300x600",
        "football_25_single_320x50",
        "football_25_single_728x90"

    ]
    
    for (var i = 0; i < sizes.length; i++) {
        createSize(sizes[i]);
    }

}



module.exports = plus;

