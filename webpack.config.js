const path = require("path");

module.exports = {
    entry: {
        main: "./dist/assets/main.js",
        vendor: "./dist/assets/vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "[name].js"
    }
};