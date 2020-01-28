"use strict";

import {gulp, paths} from '../gulpfile.babel.js';
import gulpPug from 'gulp-pug';
import htmlclean from 'gulp-htmlclean';

export function pug () {
  return gulp.src(paths.pug.source)
    .pipe(gulpPug({
      pretty: true
    }))
    .pipe(gulp.gulpif(!gulp.development, htmlclean()))
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(gulp.browsersync.stream());
}