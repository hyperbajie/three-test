const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        port: 3000,
        static: ['assets'],
    },
    devtool: 'inline-source-map',
})