module.exports.modifyWebpackConfig = function(config, env) {
  // console.log(config);
  config.merge({
    postcss: [
      // require('postcss-import')(),
      // require('postcss-url')(),
      // require('postcss-cssnext')({
      //   browsers: 'last 2 versions',
      // }),
      // require('postcss-browser-reporter'),
      require("lost"),
      require("postcss-vertical-rhythm")({
        rootSelector: 'body'
      })
    ]
  });
  return config;
}
