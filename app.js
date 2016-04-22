exports.loadContext = function (callback) {
  let context = require.context('./pages', true);
  if (module.hot) {
    module.hot.accept(context.id, () => {
      context = require.context('./pages', true)
      return callback(context)
    })
    // let cssContext = require.context('./css', true)
    // module.hot.accept(cssContext.id, () => {
    //   cssContext = require.context('./css', true)
    //   return callback(cssContext)
    // })
  }
  return callback(context)
}

exports.rewritePath = (parsedFilePath, metadata) => {
  if(metadata.file.ext == "md") {
    return "/" + parsedFilePath.dirname.split('---')[1] + "/";
  }
}
