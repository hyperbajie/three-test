const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/assets",
                    to: "assets"
                }
            ]
        })
    ]
})