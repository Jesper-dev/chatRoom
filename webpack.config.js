const path = require("path");

module.exports = {
    entry: "./src/main.js",

    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js"
    }
};