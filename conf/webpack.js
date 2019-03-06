const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: 'production',
  entry: { //ビルドするファイル
    common: './src/js/common.js'
  },
  output: {
    path: path.join(__dirname, '/../dist/js'), //ビルドしたファイルを吐き出す場所(絶対パス)
    filename: '[name].js' //ビルドした後のファイル名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['env']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './conf/eslintrc.js'
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
    extensions: ['.js', '.vue'],
    alias: {
      Root: path.join(__dirname, '/src/js/'),
      // vue-template-compilerに読ませてコンパイルするために必要
      vue$: 'vue/dist/vue.esm.js',
    },
  },
};
