const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
})



module.exports = {
    entry: './source/app.js',
    output: {
        path: './dist/',        
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
                resource: {
                    exclude: /(node_modules|bower_components)/,
                    test: /.js$/
                }
            },
            {
                test: /\.scss$/,
                loader: extractSass.extract({
                    loader: [{
                        loader: "css-loader"
                    },{
                        loader: "sass-loader"
                    }]
                })
            },
            { 
                test: /\.(gif|jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'file-loader?name=[path][name].[ext]' 
            }
        ]
    },
    plugins: [
        extractSass
    ]
}