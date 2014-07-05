var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    bower = require('gulp-bower');

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