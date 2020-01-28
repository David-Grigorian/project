import { src, dest, parallel, series, watch } from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import debug from 'gulp-debug';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import browsersync from'browser-sync';
import del from 'del';

const webpackBuildConfig = require ('./webpack.build.conf.js');
const webpackDevConfig = require ('./webpack.dev.conf.js');

const mainFolders = {
  source: `./src`,
  assets: `/assets`,
  dest: `./dist`
}

// const extensions = {
//   preproc: `.{scss,sass}`
// }

const gulp = {
  webpackConfig: false,
  development: false,
  src,
  dest,
  parallel,
  series,
  watch,
  debug,
  webpack,
  webpackStream,
  gulpif,
  rename,
  browsersync
};

const paths = {
  pug: {
    source: `${mainFolders.source}/pug/pages/index.pug`,
    watch: `${mainFolders.source}/pug/**/*.pug`,
    dest: `${mainFolders.dest}`,
  },
  scripts: {
    source: `${mainFolders.source}/js/index.{js,jsx}`,
    watch: `${mainFolders.source}/js/**/*.{js,jsx}`,
    dest: `${mainFolders.dest}${mainFolders.assets}/js`
  },
  styles: {
    source: `${mainFolders.source}${mainFolders.assets}/styles/main.{scss,sass}`,
    watch: `${mainFolders.source}${mainFolders.assets}/styles/**/*.{scss,sass}`,
    dest: `${mainFolders.dest}${mainFolders.assets}/styles`
  },
  images: {
    source: `${mainFolders.source}${mainFolders.assets}/images/**/*.{jpg,jpeg,png,gif,tiff,svg}`,
    // watch: paths.images.src,
    dest: `${mainFolders.dest}${mainFolders.assets}/images`
  },
  webp: {
    source: `${mainFolders.source}${mainFolders.assets}/images/**/*.{jpg,jpeg,png,tiff}`,
    // watch: paths.webp.src,
    dest: `${mainFolders.dest}${mainFolders.assets}/images`
  },
  sprites: {
    source: `${mainFolders.source}${mainFolders.assets}/images/svg/*.svg`,
    // watch: paths.sprites.src,
    dest: `${mainFolders.dest}/images/sprites/`
  },
  favicon: {
    source: `${mainFolders.source}/static/favicon.{jpg,jpeg,png,gif,tiff}`,
    // watch: paths.favicon.src,
    dest: `${mainFolders.dest}`
  },
  fonts: {
    source: `${mainFolders.source}${mainFolders.assets}/fonts/**/*.{ttf,otf,woff,woff2,svg}`,
    // watch: paths.fonts.src,
    dest: `${mainFolders.dest}${mainFolders.assets}/fonts`
  },
  static: {
    source: [`${mainFolders.source}/static/**/*.*`,
      `${mainFolders.source}/static/.*`,
      `!${mainFolders.source}/static/favicon.*`],
    // watch: paths.static.src,
    dest: `${mainFolders.dest}`
  }
}

function dev () {
  console.log(`"You started Development..."`);
  gulp.webpackConfig = webpackDevConfig;
  gulp.development = true;
  return del([mainFolders.dest]);
}

function prod () {
  console.log(`"You started Production..."`);
  gulp.webpackConfig = webpackBuildConfig;
  return del([mainFolders.dest]);
}

function server() {
  browsersync.init({
    server: mainFolders.dest,
    port: 4000,
    notify: false
  });

  watch(paths.pug.watch, parallel(pug));
  watch(paths.styles.watch, parallel(styles));
  watch(paths.scripts.watch, parallel(scripts));
  // watch(paths.sprites.watch, parallel(sprites));
  // watch(paths.images.watch, parallel(images));
  // watch(paths.webp.watch, parallel(webp));
  // watch(paths.fonts.watch, parallel(fonts));
  // watch(paths.static.watch, parallel(static));
  // watch(paths.favicon.watch, parallel(favicon));
};

export { gulp, paths };

import { favicons } from './gulp/favicon';
import { scripts } from './gulp/scripts';
import { styles } from './gulp/styles';
import { images } from './gulp/images';
import { webp } from './gulp/webp';
import { fonts } from './gulp/fonts';
import { sprites } from './gulp/sprites';
import { pug } from './gulp/pug';
import { stat } from './gulp/static';

exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.webp = webp;
exports.favicons = favicons;
exports.sprites = sprites;
exports.pug = pug;
exports.stat = stat;
exports.server = server;
exports.fonts = fonts;

exports.dev = series(dev, parallel(scripts, styles, pug, stat, series(images, webp, favicons, sprites), fonts), parallel(server));
exports.prod = series(prod, parallel(scripts, styles, pug, stat, series(images, webp, favicons, sprites), fonts));