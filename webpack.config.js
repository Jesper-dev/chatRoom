const path = require("path");

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
    }
};