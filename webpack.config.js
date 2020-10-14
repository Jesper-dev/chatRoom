const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry_chat: "./src/chat.js",
    entry_users: "./src/users.js",
    output_chat: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "chat_after.js"
    },
    output_users: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "users_after.js"
    },
    devServer: {
        inline: true,
        contentBase: __dirname + "/dist",
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: path.resolve(__dirname, "./node_modules/babel-loader"),
            query: {
                presets: ["latest", "stage-0", "react"]
            }
        }]
    }
};