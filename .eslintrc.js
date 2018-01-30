module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },

    "globals": {
        "Backbone": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "no-var": "error",
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }]
    }
};