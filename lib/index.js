const pkg = require('../package.json')

const plugin = {
    meta: {
      name: `@markof/no-chinese`,
      version: pkg.version,
    },
    rules: {
      "no-chinese-code": require('./rules/no-chinese-code.js'),
      "no-chinese-comment": require('./rules/no-chinese-comment.js'),
      "no-chinese-console": require('./rules/no-chinese-console.js'),
    }
}

const configs = {

  recommended: {
    plugins: {'@markof/no-chinese': plugin},
    rules: {
      '@markof/no-chinese/no-chinese-code': 'error',
      '@markof/no-chinese/no-chinese-comment': 'error',
      '@markof/no-chinese/no-chinese-console': 'error',
    },
  },
}

// OR for CommonJS
module.exports = {
  plugin,
  configs
};