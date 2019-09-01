import axios from 'axios'
import {Message,Loading } from 'element-ui';

// import config from '../config/index'
// console.log(config,'baseUrl')
let service = axios.create({
    // baseURL:config.baseURL,//请求根路径
    baseURL:process.env.VUE_APP_BASE_API,
    timeout: 3000  // 请求超时时间
  }); 
  let loadingInstance; //loading
// 添加请求拦截器
service.interceptors.request.use((config)=> {
    // 在发送请求之前做些什么
    loadingInstance = Loading.service({
        text:'加载中。。。',
        background:'rgba(255,255,255,.3)'
    });
    return config;
  }, 
  (error)=> {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
// 添加响应拦截器
service.interceptors.response.use((response)=> {
    // 对响应数据做点什么
    let res = response.data
    loadingInstance.close(); //关闭loading
    if(response.config.notIntercept) return  res  //如果请求时包含 notIntercept：true 时  不做响应拦截 直接返回结果
    
    if(res.code!=='0000'){ //如果返回状态码不成功 则统一提示错误消息  请求时就无需再写判断

      Message({
        message: res.message,
        type: 'error'
      })
      return Promise.reject(res.message);
    } else {
      return res;
    }
    
  }, (error)=> {
    // 对响应错误做点什么
    loadingInstance.close(); //关闭loading
    Message({
      message: '网络开小差了,请稍后重试...',
      type: 'error'
    })
    return Promise.reject(error);
  });
  export default service
  const postAxios = function(url, data={}) {
    return service({
      url,
      method: 'post',
      data
    })
  }
  const getAxios = function(url, data={}) {
    return service({
      url,
      method: 'get',
      data
    })
  }
  // 并发请求
  const allAxios = function(arrAxios){
    return service.all(arrAxios)
  }
export {
  postAxios,
  getAxios,
  allAxios
}