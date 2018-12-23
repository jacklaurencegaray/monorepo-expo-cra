const getDevPaths = require("get-dev-paths")
const fs = require("fs")

module.exports = {
  watchFolders: Array.from(
    new Set(getDevPaths(__dirname).map($ => fs.realpathSync($)))
  )
  //   resolvers: {
  //     projectRoot: __dirname,
  //     watchFolders: [
  //       path.resolve(__dirname, "../node_modules"),
  //       path.resolve(__dirname, "./node_modules")
  //     ]
  //   }
}
