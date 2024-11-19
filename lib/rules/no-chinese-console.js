
const REGEX = /[\u4e00-\u9fff\uff00-\uffef\u3000-\u303f\u2014\u2018-\u2019\u2026\u201c\u201d]/

function hasChinese(value) {
  return REGEX.test(value)
}

module.exports = {
  create: function(context) {
    return {
      Literal: function(node) {
        const { value } = node;
        if (node && node.parent && node.parent.callee && node.parent.callee.object && node.parent.callee.object.name === 'console') {
          if (hasChinese(value)) {
            context.report({
              node,
              message: '{{ str }} Avoid using Chinese in the console.',
              data: {
                str: node.value,
              },
            });
          }
        }
      },
    };
  },
};