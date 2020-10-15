const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/chat.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "chat_after.js"
    }
};