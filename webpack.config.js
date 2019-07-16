const webpack = require("webpack");
console.log("node env: ", process.env.NODE_ENV);
module.exports = {
    devtool: "source-map",
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    entry: {
        app: ["@babel/polyfill", "./dev/js/index.js"]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: [".js", ".jsx"]
    },
    output: {
        path: __dirname + "/web/dist",
        filename: "site.min.js",
        publicPath: "/web/dist/"
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                include: __dirname,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};