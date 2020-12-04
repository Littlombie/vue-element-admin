const path = require('path');
module.exports = {
  outputDir:process.env.outputDir,
  publicPath: './',
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
            loader: require.resolve('./src/libs/markdown-loader'),
          },
        ],
      },
    );
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/variable.less')  // 变量文件位置
      ]
    }
  },
  // css: {
  //   loaderOptions: {
  //     additionalData: `@import "~@/assets/css/variable.less";`
  //     // globalVars: {
  //     //   primary: '#fff'
  //     // }
  //     // postcss: {
  //     //   plugins: [
  //     //     postcssPresetEnv()
  //     //   ]
  //     // }
  //   }
  // },
  devServer: {
      port: 9966,     // 端口
  },
  lintOnSave: false   // 取消 eslint 验证
};