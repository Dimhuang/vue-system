<template>
  <div id="mainList">
    <Button type="info" @click.native="getAjax">Get请求</Button>
    <Button type="success">Post请求</Button>
    <br>
    <span>{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: 'mainList',
    data(){
      return{
        msg:''
      }
    },
    methods:{
      getAjax(){
       /* this.$axios.get('/api/mainList').then(res=>{
          this.msg = res.data.data.result
        })*/
      }
    }
  }
</script>

<style>

</style>
