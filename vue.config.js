// vue.config.js
module.exports = {
     lintOnSave: false, // 关闭eslint代码检查
    // 项目构建输出
    outputDir: 'dist',
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
      open: true, // 启动服务后是否打开浏览器
      host: '0.0.0.0',
      port: 8080, // 服务端口
      https: false,
      hotOnly: false,
      proxy: null, // 设置代理
      before: app => {}
    },
  }