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
            title: 'productId',
            key: 'productId'
          },
          {
            title: 'productName',
            key: 'productName'
          },
          {
            title: 'productUrl',
            key:'productUrl'
          },
          {
            title: 'salePrice',
            key: 'salePrice'
          },
          {
            title: 'productImage',
            key: 'productImage'
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
        this.$axios.get('/goods').then(res=>{
            this.userList = res.data.result.list
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
