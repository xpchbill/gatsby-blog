var gulp = require("gulp");
var shell = require("gulp-shell");
var runSeq = require("run-sequence");
var ghPages = require("gulp-gh-pages");
var fs = require("fs");
var yaml = require("js-yaml");
var prompt = require("prompt");
var mkdirp = require("mkdirp");
var moment = require("moment");

gulp.task("default", ["dev"]);

gulp.task("dev", shell.task([
  "gatsby develop"
]));

gulp.task("deploy.github", function(done) {
  return runSeq("gatsby.build", "ghPages.pushToRepo", "ghPages.github", done);
});

gulp.task("gatsby.build", shell.task([
  "gatsby build"
]));

gulp.task("ghPages.pushToRepo", function() {
  return gulp.src(["**/*", "!node_modules/**", "!.publish/**", "!.git/**", "!public/**"])
    .pipe(ghPages({
      remoteUrl: "https://github.com/xpchbill/gatsby-blog.git",
      branch: "master",
      message: "Deploy commit - blog source.",
      push: true,
      force: false
    }));
});

gulp.task("ghPages.github", function() {
  return gulp.src("./public/**/*")
    .pipe(ghPages({
      remoteUrl: "https://github.com/xpchbill/xpchbill.github.io.git",
      branch: "master",
      message: "Deploy commit - blog release.",
      push: true,
      force: true
    }));
});


gulp.task("new.post", function(done) {
  prompt.start();
  prompt.get(["title"], (err, result) => {
    var timestamp = moment().format("YYYY-MM-DD");
    var dir = `./pages/${timestamp}---${result.title}`;
    mkdirp.sync(dir);

    var postFileStr = "---\n";

    // Create index.md w/ header matter and draft set to true
    var frontmatter = {
      title: result.title,
      date: moment().toJSON(),
      layout: "post",
      draft: true
    };
    postFileStr += yaml.safeDump(frontmatter);
    postFileStr += "---\n"

    fs.writeFileSync(`${dir}/index.md`, postFileStr, {encoding: "utf-8"});

    console.log(dir);
  });
});
