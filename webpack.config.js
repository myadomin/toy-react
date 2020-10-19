module.exports = {
  entry: {
    main: './main.js'
  },
  // 开发模式下 调试点击main.js 出现易读的不压缩代码
  mode: 'development',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
          }
        }
      }
    ]
  }
}