module.exports = {
  outputDir:process.env.outputDir,
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