var gulp = require("gulp");
var shell = require("gulp-shell");
var runSeq = require("run-sequence");
var ghPages = require("gulp-gh-pages");

gulp.task("default", ["dev"]);

gulp.task("dev", shell.task([
  "gatsby develop"
]));

gulp.task("deploy.github", function(done) {
  return runSeq("gatsby.build", "ghPages.github", done);
});

gulp.task("gatsby.build", shell.task([
  "gatsby build"
]));

gulp.task("ghPages.github", function() {
  return gulp.src("./public/**/*")
    .pipe(ghPages({
      remoteUrl: "https://github.com/xpchbill/xpchbill.github.io.git",
      branch: "master",
      message: "Deploy commit",
      push: true,
      force: true
    }));
});
