module.exports = {
    "extends": "airbnb",
    env: {
        "browser": true,
        "jest": true
    },
    rules: {
        "no-underscore-dangle": 0,
        "camelcase": [
            2,
            {   
                "properties": "never",
                "ignoreDestructuring": true
            }
        ]
    }
};