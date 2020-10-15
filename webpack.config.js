const path = require("path");

module.exports = {
    entry: {
        main: "./src/chat.js",
        vendor: "./.src/users.js"
    },
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js"
    }
};