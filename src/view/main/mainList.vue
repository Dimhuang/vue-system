<template>
  <div id="mainList">
    <span>{{userList}}</span>
  </div>
</template>

<script>
  export default {
    name: 'mainList',
    data(){
      return{
        userList:''
      }
    },
    mounted (){
      this.getList()
    },
    methods:{
      getList(){
        this.$axios.get('/users').then(res=>{
          this.userList = res.data.result.list
        })
      }
    }
  }
</script>

<style>

</style>
