# eslint-plugin-no-chinese
eslint plugin to forbid chinese

## Install
```
npm i @markof/eslint-plugin-no-chinese --save-dev
```

## Usage
Add '@markof/eslint-plugin-no-chinese' to plugins in .eslintrc file.
```javascript
{
  "plugins": [
    "@markof/no-chinese"
  ]
}
```

Config rules in .eslintrc file.
```javascript
{
  "rules": {
    "@markof/no-chinese/no-chinese-code": "error",
    "@markof/no-chinese/no-chinese-comment": "error",
    "@markof/no-chinese/no-chinese-console": "error",
  }
}
```
