const path = require("path");
module.exports = {
    mode: "development", 
    entry: ["./src/main1", "./src/main2", "./src/main3"]， 
    output: { 
        path: path.resolve(__dirname, "../dist/js"), 
        filename: "main.js"
    }
}