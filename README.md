# eslint-no-chinese
eslint plugin to forbid chinese

## Install
```
npm i @markof/eslint-no-chinese --save-dev
```

## Usage
Add 'eslint-no-chinese' to plugins in .eslintrc file.
```javascript
{
  "plugins": [
    "eslint-no-chinese"
  ]
}
```

Config rules in .eslintrc file.
```javascript
{
  "rules": {
    "eslint-no-chinese/no-chinese-code": "error",
    "eslint-no-chinese/no-chinese-comment": "error",
    "eslint-no-chinese/no-chinese-console": "error",
  }
}
```
