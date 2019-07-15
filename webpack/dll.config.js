const cwd = process.cwd();
const path = require("path");
const webpack = require("webpack");
const outputPath = path.join(cwd, 'public');

module.exports = {
   mode: "production",
   optimization: {
      minimize: true
   },
   entry: {
      "vendor": ["./src/vendor.js"]
   },
   output: {
      path: outputPath,
      filename: "vendor.js",
      library: "vendor_library"
   },
   plugins: [
      new webpack.DllPlugin({
         path: path.join(outputPath, 'manifest.json'),
         name: "vendor_library",
      })
   ]
};