const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundle_react"),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module:{
        rules:[
            {
               test: /\.css$/i,
               use: [
                   MiniCssExtractPlugin.loader,
                   "css-loader",
               ],
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif|wav|mp3)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "./Assets"
                  }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules)/,
            }
        ]
    }
};