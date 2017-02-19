const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: "bundle.css"
})
const extractPug = new ExtractTextPlugin({
    filename: "./templates/[name].html"
})



module.exports = {

    /*/ the js file that starts everything off...
    /// if something isnt require()'d by this, or something this loads, it wont be webpacked
    /*/
    entry: ['./source/entry.js', './source/templates/test1.pug', './source/templates/test2.pug'],

    // output paths - where webpack saves everything
    output: {
        path: path.join(__dirname, 'dist'), 
        filename: '[name].js',
    },

    watch: true,
    stats: "minimal",


    // should we make source maps
    devtool: "source-map",

    // array of webpack plugins 
    plugins: [
        extractSass,
        extractPug
    ],

    /*/
    /// array of rules that decides which webpack loaders should be used for which files
    /*/
    module: {
        rules: [

            // js loading with babel es2015 support
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        sourceMap: true
                    }
                }
            },

            // sass loading with autoprefix and saving to css
            {
                test: /\.s(c|a)ss$/,
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

            // pug loading
            {
                test: /\.pug$/,
                use: extractPug.extract({
                    use: [
                        "html-loader",
                        "pug-html-loader?pretty&exports=false"
                    ]
                })
            },

            // everything else, just copy it 1:1 into the output directory using the same folder structure
            { 
                test: /\.(gif|jpe?g|png|ico|woff|woff2|eot|ttf|svg)$/, 
                use: 'file-loader?name=[path][name].[ext]' 
            },

            // hacky shit cause pace havent fixed their stupid npm module
            {
                test: require.resolve("pace-js"),
                use: "imports-loader?define=>false"
            }
        ]
    }
}