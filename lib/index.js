const pkg = require('../package.json')

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  configs: {},
  rules: {
    "no-chinese-code": require('./rules/no-chinese-code.js'),
    "no-chinese-comment": require('./rules/no-chinese-comment.js'),
    "no-chinese-console": require('./rules/no-chinese-console.js'),
  },
  processors: {}
}

// OR for CommonJS
module.exports = plugin;