const REGEX = /[\u4e00-\u9fff\uff00-\uffef\u3000-\u303f\u2014\u2018-\u2019\u2026\u201c\u201d]/

function hasChinese(value) {
  return REGEX.test(value)
}

module.exports = {
  create: function (context) {

    const sourceCode = context.getSourceCode()

    return {
      Program() {
        const comments = sourceCode.getAllComments();
        comments.forEach(comment => {
          if (hasChinese(comment.value)) {
            context.report({
              node: comment,
              message: '{{ str }} Avoid using Chinese in the comments.',
              data: {
                str: comment.value,
              },
            });
          }
        })
      }
    }
  }
}