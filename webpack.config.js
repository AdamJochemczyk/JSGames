const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader" /*transpile js to old version */,
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", /* create style nodes from JS strings */
          "css-loader", /*add styles to header */
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ()=>[autoprefixer()],
              },
            },
          },
          "sass-loader" /*compile sass to css */,
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              context: "public",
              name: "/images/[name]-[hash].[ext]",
              publicPath: "/",
            },
          },
        ],
      },
    ],
  },
};
