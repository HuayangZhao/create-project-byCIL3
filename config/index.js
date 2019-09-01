// 一些全局的config配置
const requestObj = {
    // 生产环境
    'production': {
      baseURL: 'http://xxx:9091/pro/',
      authBaseURL: ''
    },
    // 开发环境
    'development': {
      baseURL: 'http://xxxx:9091/dev/',
      authBaseURL: ''
    },
    // 测试环境
    'test': {
      baseURL: 'http://xxxx:9091/test/',
      authBaseURL: ''
    }
  }
  export default requestObj[process.env.NODE_ENV]

// npm run dev  开发环境
// npm run test  测试环境
// npm run build  正式环境打包
// npm run build:test 测试环境打包