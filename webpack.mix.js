const mix = require("laravel-mix");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
require("laravel-mix-webp");
let productionSourceMaps = process.env.NODE_ENV === "development";

mix
  .sass("./assets/scss/style.scss", "css/style.css")
  //   .js()
  .setPublicPath("./public")
  .sourceMaps(productionSourceMaps, "source-map")
  .disableSuccessNotifications()
  .webpackConfig({
    plugins: [
      new CleanWebpackPlugin({}),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./public/css/style.css",
            to: "../",
            toType: "dir",
            noErrorOnMissing: true,
          },
          {
            from: "./public/css/style.css.map",
            to: "../",
            toType: "dir",
            noErrorOnMissing: true,
          },
          {
            from: "./assets/img",
            to: "./img",
            noErrorOnMissing: true,
            toType: "dir",
          },
          {
            from: "./assets/fonts",
            to: "./fonts",
            noErrorOnMissing: true,
            toType: "dir",
          },
        ],
      }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif)$/i,
        disable: productionSourceMaps,
        pngquant: {
          quality: 95,
        },
      }),
    ],
  })
  .ImageWebp({
    from: "./assets/img", // Путь относительно каталога с webpack.mix.js
    to: "./public/img", // Путь относительно каталога с webpack.mix.js
    imageminWebpOptions: {
      quality: 90,
    },
  })
  .options({
    processCssUrls: false,
    autoprefixer: {
      remove: false,
      options: {
        browsers: ["last 6 versions"],
      },
    },
    clearConsole: true,
  });
