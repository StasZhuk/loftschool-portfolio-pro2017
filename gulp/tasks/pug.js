'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    // var YOUR_LOCALS = require('./content.json');
    return $.gulp.src(['./source/template/**/*.pug', '!./source/template/_template.pug'])
      .pipe($.gp.pug({ 
        // locals: YOUR_LOCALS,
        pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
