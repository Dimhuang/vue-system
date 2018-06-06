<template>
  <div id="mainIndex">
    <Table :columns="columns" :data="userList" @on-row-click="getRowIndex"></Table>
    <div style="text-align: center;margin-top: 20px">
      <Page :total="goodsTotal" @on-change="loadList" :page-size="8"></Page>
    </div>
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
        userList:[],
        goodsTotal:0
      }
    },
    mounted (){
      this.getAjax()
    },
    methods:{
      getAjax(){
        this.$axios.get('/goods',{
          params:{
            page:1,
            pageSize:8,
            sort:1
          }
        }).then(res=>{
            this.userList = res.data.result.list
            this.goodsTotal = res.data.result.total
        console.log(this.goodsTotal)
        })
      },
      loadList(page){
        this.$axios.get('/goods',{
          params:{
            page:page,
            pageSize:8,
            sort:1
          }
        }).then(res=>{
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
