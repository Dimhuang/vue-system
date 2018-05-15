<template>
  <div id="mainIndex">
    <Table :columns="columns" :data="userList" @on-row-click="getRowIndex"></Table>
  </div>
</template>

<script>
  export default {
    name: 'mainIndex',
    data (){
      return {
        columns: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        userList:[]
      }
    },
    mounted (){
      this.getAjax()
    },
    methods:{
      getAjax(){
        this.$axios.get('/api/mainIndex/userList').then(res=>{
            this.userList = res.data.data.result
        })
      },
      getRowIndex(data,index){
        console.log(data)
        console.log(index)
        this.$Notice.open({title: '第'+(index+1)+'条数据', desc: JSON.stringify(data) });
      }
    }
  }
</script>

<style>

</style>
