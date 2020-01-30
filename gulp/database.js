"use strict";

import {gulp, paths} from '../gulpfile.babel.js';

export function database () {
  return gulp.src(paths.database.source)
    .pipe(gulp.debug({
      title: `"Database"`
    }))
    .pipe(gulp.dest(paths.database.dest));
}