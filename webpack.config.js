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
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            { 
                test: /\.(gif|jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, 
                use: 'file-loader?name=[path][name].[ext]' 
            }
        ]
    },
    plugins: [
        extractSass
    ],
    devtool: "source-map"
}