module.exports = function(config, env) {
  config.merge({
    postcss: [
      require('lost')
    ]
  });
  return config;
}
