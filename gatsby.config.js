module.exports = function(config, env) {
  config.merge({
    postcss: [
      require("lost"),
      require("postcss-vertical-rhythm")({
        rootSelector: 'body'
      })
    ]
  });
  return config;
}
