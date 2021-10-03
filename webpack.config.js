const path = require('path')
module.exports = {
    mode: 'development',
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main_bundle.js'
    }
}