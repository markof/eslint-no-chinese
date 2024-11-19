const plugin = {
  meta: {
    name: 'eslint-no-chinese',
  },
  configs: {},
  rules: {
    "no-chinese-code": require('./rules/no-chinese-code.js'),
    "no-chinese-comment": require('./rules/no-chinese-comment.js'),
    "no-chinese-console": require('./rules/no-chinese-console.js'),
  },
  processors: {}
};

// for ESM
export default plugin;

// OR for CommonJS
module.exports = plugin;