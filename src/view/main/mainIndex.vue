<template>
  <div id="mainIndex">
    <Button type="info" @click.native="getAjax">Get请求</Button>
    <Button type="success">Post请求</Button>
    <br>
    <span>{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: 'mainIndex',
    data (){
      return {
        msg:''
      }
    },
    methods:{
        getAjax(){
          this.$http.get('http://120.76.42.106/yyjkApi/api/user/Login',{
            params:{
              loginname:'18666855295',
              loginpwd:'123456'
            },
            headers:{

            }
          }).then(res=>{
            this.msg = res.data
          });
        }
    }
  }
</script>

<style>

</style>
