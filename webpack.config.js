require("babel-polyfill")
const webpack = require("webpack")
const path = require("path")
const autoprefixer = require("autoprefixer")
const validate = require("webpack-validator")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const pkg = require("./package.json")

const PATHS = {
  build: path.join(__dirname, "dist"),
  hbs: [path.join(__dirname, "public")],
  js: [path.join(__dirname, "src")],
  public: "/",
  style: [path.join(__dirname, "public", "css", "style.scss")],
}

module.exports = {
  cache: true,
  debug: true,
  entry: {
    "babel-polyfill": "babel-polyfill",
    app: PATHS.js,
    style: PATHS.style,
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    chunkFilename: "[hash].js",
    filename: "[name].[hash].js",
    path: PATHS.build,
    publicPath: PATHS.public,
  },
  eslint: {
    quiet: false,
    emitError: false,
    failOnWarning: false,
    failOnError: false,
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        include: PATHS.js,
        loaders: ["babel", "eslint-loader"],
        test: /\.jsx?$/,
      },
      {
        include: PATHS.style,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!postcss!sass?outputStyle=expanded"
        ),
        test: /\.scss$/,
      },
      {
        include: PATHS.js,
        loader: ExtractTextPlugin.extract(
          "style",
          "css" + "?modules&importLoaders=1&localIdentName=[folder]_[name]_[local]_[hash:base64:5]" + "!" +
          "postcss!" +
          "sass?outputStyle=expanded&includePaths[]=true!" +
          "sass-resources"
        ),
        test: /\.scss$/,
      },
      {
        exclude: /node_modules/,
        include: PATHS.hbs,
        loader: "handlebars",
        test: /\.hbs$/,
      },
      { 
        loader: "json",
        test: /\.json$/, 
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("style.[hash].css", {
      allChunks: true,
      disable: true, // CSS MODULES
    }),
    new HtmlWebpackPlugin({
      author: "Matthew Otto",
      description: "UI Test",
      favicon: "public/images/favicon.jpg",
      filename: "index.html",
      template: "public/template.hbs",
      title: "UI Test",
    }),
  ],
  postcss: [
    autoprefixer({ browsers: ["last 2 versions"] }),
  ],
  resolve: {
    root: path.resolve("./src"),
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js", ".jsx", ".json"],
  },
  sassResources: [
    path.join(__dirname, "public/css/_mixins.scss"),
    path.join(__dirname, "public/css/_variables.scss"),
    path.join(__dirname, "public/css/_resets.scss"),
  ],
}