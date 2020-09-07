module.exports = {
  outputDir:process.env.outputDir,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: config => {
    config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: require.resolve('./src//libs/markdown-loader'),
          },
        ],
      },
    );
  },
  devServer: {
      port: 9966,     // 端口
  },
  lintOnSave: false   // 取消 eslint 验证
};