// 노드 모듈 "path"를 가져와서 파일을 잘 읽어올 수 있도록 처리한다.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // '개발 모드'로 설정
  mode: "development",

  // index.js를 시작으로, 엮여져있는 스크립트 파일을 묶어주기 위해 index.js를 엔트리 파일로 설정한다.
  entry: "./src/index.js",

  // 번들링을 하면서 필요한 규칙을 추가한다.
  module: {
    // 모든 JS 파일을 읽으면서, babel-loader를 적용한다.
    // babel-loader는 webpack의 번들링 과정에서 JSX 언어를 읽는 역할을 한다.
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
      },
    ],
  },

  // 만들어진 'bundle.js'를 'index.html'의 스크립트로 적용하여 'dist' 폴더에 최종적인 html 파일을 만들어주는 역할을 한다.
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // Webpack은 기본적으로 JS 파일을 압축하도록 되어있고, 이를 위한 설정이다.
  // 그러나 지금은 "babel-loader"가 작동하는지 확인하기 위해 빈 배열로 둔다.
  optimization: { minimizer: [] },

  // 결과가 저장되는 위치를 설정한다.
  output: {
    // '__dirname'은 현재 실행 중인 파일의 디렉토리 이름을 담고 있고, 여기에 "dist"라는 폴더를 만들어 그 안에 output 결과가 저장된다.
    path: path.resolve(__dirname, "dist"),
    // 'dist' 폴더 안에는 "bundle.js"라는 이름의 파일로 결과가 저장된다.
    filename: "bundle.js",
  },

  devServer: {
    static: "./dist",
    hot: true,
  },
};
