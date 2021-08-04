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

    var splits = folderName.split("_")
    var types = [
        ["0", "SEW"],
        ["25", "SEW"],
        ["25", "NSNG"],
        ["50", "SEW"],
        ["50", "NSNG"],
        ["50-legal", "SEW"],
        ["50-legal", "NSNG"],
        ["100", "SEW"],
        ["100", "NSNG"],
        ["200", "SEW"],
        ["200", "NSNG"]
    ]

    var sport = splits[0]
    var size = splits[1]
    
    for(var i=0; i<types.length; i++){        
        var fileName = sport+"_"+size+"_"+types[i][0]+"_"+types[i][1]
        console.log(fileName);
        gulp.src('./___MASTERS/'+folderName+"/**/*")
            .pipe(gulp.dest('./___dev/'+fileName));
    }
}

function plus(){  
    var masters = [        
        "football_160x600_25_SEW",
        "football_300x250_25_SEW",
        "football_300x600_25_SEW",
        "football_320x50_25_SEW",
        "football_728x90_25_SEW"

    ]
    
    for (var i = 0; i < masters.length; i++) {
        createSize(masters[i]);
    }

}



module.exports = plus;

