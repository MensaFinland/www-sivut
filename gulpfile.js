//Gulp tutorial: http://travismaynard.com/writing/getting-started-with-gulp

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plato = require('gulp-plato'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

// testikalenteri page has both, common and testikalenteri scripts
var files = {
    root: 'wp-content/themes/mensafin',
    common: ['wp-content/themes/mensafin/skripteja.js'],
    testikalenteri: [
        'wp-content/themes/mensafin/eventcalendar.js',
        'wp-content/themes/mensafin/skripteja2.js',
        'wp-content/themes/mensafin/evtcal2.js'
    ]
};

// Concatenate & Minify JS
function scripts(items, target) {
    return gulp.src(items)
        .pipe(sourcemaps.init())
        .pipe(concat(target))
        .pipe(uglify())
        .pipe(sourcemaps.write('/.'))
        .pipe(gulp.dest(files.root));
}
function commonScripts() { scripts(files.common, '/common.min.js'); }
function testikalenteriScripts() { scripts(files.testikalenteri, '/calendar.min.js'); }

gulp.task('commonScripts', commonScripts);
gulp.task('testikalenteriScripts', testikalenteriScripts);

// Concatenate & Minify CSS
//var stylePath = ['style*/*.css', 'css/*.css'];
//gulp.task('styles', function() {
//    return gulp.src(stylePath)
//      .pipe(concat('app.css'))
//      .pipe(rename({ suffix: '.min' }))
//      .pipe(mincss())
//      .pipe(gulp.dest('css'));
//});

// Lint Task, JavaScript
gulp.task('lintjs', function () {
	var ignoreGenerated = files.testikalenteri.slice(1, files.testikalenteri.length);
    var lintfiles = files.common.concat(ignoreGenerated);
	return gulp.src(lintfiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(plato('./report', {
            jshint: { options: {strict: true} },
            complexity: { trycatch: true }
        }));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(files.common, ['lintjs', 'commonScripts']);
    gulp.watch(files.testikalenteri, ['lintjs', 'testikalenteriScripts']);
    //gulp.watch(stylePath, ['styles']);
});

// Default Task
gulp.task('default', ['lintjs', /*'styles', */ 'commonScripts', 'testikalenteriScripts', 'watch']);
