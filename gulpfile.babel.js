import gulp from "gulp";
import { deleteAsync } from "del";
import ws from "gulp-webserver";
import gimage from "gulp-imagemin";
import ghPages from "gulp-gh-pages";
import bro from "gulp-bro";
import Babelify from "babelify";

const routes = {
  html: {
    src: "src/index.html",
    dest: "build",
  },
  img: {
    src: "src/img/*",
    dest: "build/img",
  },
  css: {
    src: "src/css/*.css",
    dest: "build/css",
  },
  js: {
    src: "src/js/*.js",
    dest: "build/js",
  },
};

const html = () => gulp.src(routes.html.src).pipe(gulp.dest(routes.html.dest));

const clean = async () => await deleteAsync(["build/", ".publish"]);

const webserver = () =>
  gulp.src("build").pipe(ws({ livereload: true, open: true }));

const img = () =>
  gulp.src(routes.img.src).pipe(gimage()).pipe(gulp.dest(routes.img.dest));

const styles = () => gulp.src(routes.css.src).pipe(gulp.dest(routes.css.dest));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [
          Babelify.configure({ presets: ["@babel/preset-env"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(routes.js.dest));

const gh = () => gulp.src("build/**/*").pipe(ghPages());

const prepare = gulp.series([clean, img]);
const assets = gulp.series([html, styles, js]);
const postDev = gulp.series([webserver]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, postDev]);
export const deploy = gulp.series([build, gh, clean]);
