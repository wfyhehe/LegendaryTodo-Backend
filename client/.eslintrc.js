module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "amd": true,
    "es6": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true
  },
  "rules": {
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "comma-dangle": 2,
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 0,
    "no-dupe-keys": 2,
    "no-else-return": 0,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "strict": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 0,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 0,
    "no-loop-func": 2,
    "no-mixed-requires": [0, false],
    "no-mixed-spaces-and-tabs": [2, false],
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [0, {"max": 2}],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 0,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 0,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-restricted-modules": 0,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 0,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "semi-spacing": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-throw-literal": 0,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unreachable": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],
    "no-use-before-define": 2,
    "no-void": 0,
    "no-var": 0,
    "no-warning-comments": [0, {"terms": ["todo", "fixme", "xxx"], "location": "start"}],
    "no-with": 2,
    "block-scoped-var": 0,
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "camelcase": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "complexity": [0, 11],
    "consistent-return": 2,
    "consistent-this": [0, "that"],
    "curly": [2, "multi-line"],
    "default-case": 0,
    "dot-notation": [2, {"allowKeywords": true}],
    "eol-last": 0,
    "eqeqeq": 2,
    "func-names": 0,
    "func-style": [0, "declaration"],
    "generator-star": [0, "start"],
    "global-strict": [0, "never"],
    "guard-for-in": 0,
    "handle-callback-err": 0,
    "indent": [2, 2],
    "key-spacing": 0,
    "max-depth": [0, 4],
    "max-len": [0, 80, 4],
    "max-nested-callbacks": [0, 2],
    "max-params": [0, 3],
    "max-statements": [0, 10],
    "new-parens": 2,
    "one-var": 0,
    "operator-assignment": [0, "always"],
    "padded-blocks": 0,
    "quote-props": 0,
    "quotes": [2, "single"],
    "radix": 0,
    "semi": 0,
    "sort-vars": 0,
    "space-after-function-name": [0, "never"],
    "space-after-keywords": [0, "always"],
    "space-before-blocks": [0, "always"],
    "space-before-function-parentheses": [0, "always"],
    "space-in-brackets": [0, "never"],
    "space-in-parens": [0, "never"],
    "space-infix-ops": 2,
    "keyword-spacing": 2,
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "spaced-line-comment": [0, "always"],
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 0,
    "wrap-iife": 0,
    "wrap-regex": 0,
    "yoda": [2, "never"]
  },
  "globals": {
    "console": true,
    "__VERSION__": true
  }
}
// module.exports = {
//   "env": {
//     "browser": true,
//     "es6": true
//   },
//   "extends": "eslint:recommended",
//   "parserOptions": {
//     "ecmaFeatures": {
//       "experimentalObjectRestSpread": true,
//       "jsx": true
//     },
//     "sourceType": "module"
//   },
//   "plugins": [
//     "react"
//   ],
//   "rules": {
//     "react/jsx-uses-react": "error",
//     "react/jsx-uses-vars": "error",
//     "indent": [
//       "error",
//       2
//     ],
//     "linebreak-style": [
//       "warn",
//       "unix"
//     ],
//     "quotes": [
//       "warn",
//       "single"
//     ],
//     "semi": [
//       "warn",
//       "never"
//     ],
//     "no-console": 0,
//     "curly": 1,
//     "dot-location": 1,
//     "dot-notation": 1,
//     "eqeqeq": 1,
//     "no-case-declarations": 2,
//     "no-else-return": 1,
//     "no-empty-pattern": 2,
//     "no-extra-bind": 1,
//     "no-extra-label": 1,
//     "no-fallthrough": 2,
//     "no-floating-decimal": 1,
//     "no-global-assign": 2,
//     "no-implicit-coercion": 1,
//     "no-multi-spaces": 1,
//     "no-octal": 2,
//     "no-redeclare": 2,
//     "no-self-assign": 2,
//     "no-unused-labels": 2,
//     "no-useless-escape": 2,
//     "no-useless-return": 1,
//     "wrap-iife": 1,
//     "yoda": 1
//   }
// }