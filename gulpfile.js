var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    bower = require('gulp-bower'),
    browserify = require('browserify');

var source = require('vinyl-source-stream');
gulp.task('bower-phaser',function (){
   gulp.src(['bower_components/phaser-official/build/phaser.js','bower_components/phaser-official/build/phaser.min.js', 'bower_components/phaser-official/build/phaser.map'])
        .pipe(gulp.dest('public/js/libs')); 
});
gulp.task('bower-phaser-plugins',function (){
   gulp.src(['bower_components/phaser-plugins/VirtualJoystick/VirtualJoystick.js'])
        .pipe(gulp.dest('public/js/libs')); 
});
gulp.task('bower-css',function (){
//not sure if I need any css libs at this stage
});

gulp.task('bower-js', ['bower-phaser', 'bower-phaser-plugins']);
gulp.task('bower-assets', ['bower-js', 'bower-css']);
gulp.task('bower-install', function(){
    bower().pipe(gulp.dest());
});

gulp.task('browserify-dev', function () {
 
    return browserify({ entries:['./public/js/game.js'] })
        //.transform('es6ify')
        .bundle({ debug: true})
        .on('error', function () {
            console.log('browserify error');
            console.log(arguments);
        })
        .pipe(source('start.js'))
        .pipe(gulp.dest('./public/js')) 
        .on('end', function () {
            console.log('ended');
        });
});

gulp.task('browserify-prod', function () {
 
    return browserify({entries:['./public/js/game.js'],  
        })
        .transform('es6ify')
        .transform('stripify')
        .transform( 'uglifyify')
        .bundle({ debug: true})
        .on('error', function () {
            console.log('browserify error');
            console.log(arguments);
        })
        .pipe(source('start-min.js'))
        .pipe(gulp.dest('./public/js')) 
        .on('end', function () {
            console.log('ended');
        });
});



gulp.task('watch', function() {
  gulp.watch(['./public/js/game/*.js', './public/js/game/**/*.js'], ['browserify-dev','browserify-prod']);
  //gulp.watch(paths.images, ['images']);
});