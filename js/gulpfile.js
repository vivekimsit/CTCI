var gulp  = require('gulp'),
    sources     = ['src/**/*.js'],
    testSources = ['test/**/*.js'],
    allSources  = sources.concat(testSources);

gulp.task('default', function() {
  gulp.start('test');
});


gulp.task('watch', function() {
  gulp.watch(allSources, function() {
    gulp.run('test');
  });
});


gulp.task('test', function() {
  var mocha = require('gulp-mocha');
  gulp.src(testSources)
      .pipe(mocha({ reporter: 'spec', growl: true }))
      .on('error', function(err) {
        this.emit('end'); // avoid crashing on error
      });
});
