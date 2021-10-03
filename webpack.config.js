const path = require('path')
module.exports = {
    entry: './js/main.js',
    experiments: {
        //outputModule: true,
        //syncWebAssembly: true,
        topLevelAwait: true,
        //asyncWebAssembly: true,
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main_bundle.js'
    }
}