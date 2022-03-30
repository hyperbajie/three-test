const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

module.exports = {
    entry: "./src/index.js",
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};