<template>
  <div class="hello">
   123456
   {{homeData}}
  </div>
</template>

<script>
import {postAxios,getAxios} from '../../api/index'
export default {
  name: 'HelloWorld',
  data(){
    return {
      homeData:{}
    }
  },
  created(){
    this. login()
  },
  methods:{
    // 登录操作
    login(){
        postAxios('/sys/login', {loginName: "admin",loginSrc: "pc",password: "111111",verifyCode: ""}).then((res) => {
          this.getHomeData(res.data.token)
        })
    },
     getHomeData(token) {
          postAxios('/homePage/queryPageData?dToken='+token, ).then((res) => {
             this.homeData = res.data
          })
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
