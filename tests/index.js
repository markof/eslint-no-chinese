const RuleTester = require("eslint").RuleTester
var ruleTester = new RuleTester()
const ruleNoChineseCode = require("../lib/rules/no-chinese-code")
const ruleNoChineseComments = require("../lib/rules/no-chinese-comments")
const ruleNoChineseConsole = require("../lib/rules/no-chinese-console")

ruleTester.run("no-chinese-code", ruleNoChineseCode, {
  valid: ["function test(d, e, f) { console.log('中文'); return 'chinese' }"],
  invalid: [
    {
      code: "function test(d, e, f) { console.log('中文'); return '中文' }",
      errors: [{message: "中文 Avoid using Chinese in the code"}]
    },
    {
      code: "function test(d, e, f) { console.log('chinese'); return 'it’s name is chinese' }",
      errors: [{message: "it’s name is chinese Avoid using Chinese in the code"}]
    },
    {
      code: "function test(d, e, f) {return 'it“s name is chinese'}",
      errors: [{message: "it“s name is chinese Avoid using Chinese in the code"}]
    },
  ],
})

ruleTester.run("no-chinese-console", ruleNoChineseConsole, {
  valid: ["function test(d, e, f) { console.log('chinese'); return 'chinese' }"],
  invalid: [
    {
      code: "function test(d, e, f) { console.log('中文'); return 'chinese' }",
      errors: [{
        message: "中文 Avoid using Chinese in the console.",
      }]
    },
  ],
})

ruleTester.run("no-chinese-comments", ruleNoChineseComments, {
  valid: [`// this is a comment`, `/* this is a comment */`],
  invalid: [
    {
      code: `// 中文`,
      errors: [{
        message: " 中文 Avoid using Chinese in the comments.",
      }]
    },
    {
      code: `/* 中文 */`,
      errors: [{
        message: " 中文  Avoid using Chinese in the comments.",
      }]
    },
  ],
})