module.exports = {
    'extends': [
        'eslint-config-alloy/typescript'
        // 'alloy',
        // 'alloy/typescript'
    ],
    'env': {
        // 这里填入你的项目用到的环境
        // 它们预定义了不同环境的全局变量，比如：
        //
        // browser: true,
        'node': true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    'globals': {
        // 这里填入你的项目需要的全局变量
        // false 表示这个全局变量不允许被重新赋值，比如：
        //
        // myGlobal: false
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'modules': true
        }
    },
    'rules': {
        // 这里填入你的项目需要的个性化配置
        'indent': [2],//缩进风格
        'semi': [2, 'always'], // 引号结尾
        'quotes': [2, 'single'] //引号类型 `` "" ''
    }
};