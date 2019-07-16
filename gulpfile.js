const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

function bs(done) {
    browserSync.init({
        server: {
            baseDir: "./examples"
        }
    });

    done();
}

function reload(done) {
    browserSync.reload();
    done();
}

function css() {
    return gulp
        .src("examples/sass/index.scss")
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                includePaths: "node_modules"
            }).on("error", sass.logError)
        )
        .pipe(
            postcss([
                autoprefixer({
                    grid: true
                }),
                cssnano
            ])
        )
        .pipe(rename("site.min.css"))
        .pipe(sourcemaps.write("maps"))
        .pipe(gulp.dest("examples/dist/"));
}

function watchFiles() {
    gulp.watch("**/*.scss", gulp.series(css, reload));
    gulp.watch("examples/**/*.html", gulp.series(reload));
}

exports.build = gulp.series(css);
exports.dev = gulp.series(css, bs, watchFiles);
