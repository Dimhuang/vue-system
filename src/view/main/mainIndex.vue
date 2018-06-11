<template>
  <div id="mainIndex">
    <Table :columns="columns" :data="userList"></Table>
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
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
               return h('div', [
                  h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          //console.log(JSON.stringify(params.row));
                          this.addCart(params.row)
                        }
                      }
                   }, 'cart')
                ]);
             }
          }
        ],
        userList:[],
        goodsTotal:0,
        priceLevel:'all'
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
            sort:1,
            priceLevel:this.priceLevel
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
            sort:1,
            priceLevel:this.priceLevel
          }
        }).then(res=>{
          this.userList = res.data.result.list
        });
      },
      addCart(data){
        console.log(data.productId)
        //this.$Notice.open({title: '第'+(data._rowKey)+'条数据', desc: JSON.stringify(data) });
        this.$axios.post('/goods/addCart',{
          productId:data.productId
        }).then((res)=>{
            if(res.data.status == 0){
              alert("success add!")
            }else{
              alert("error add!")
            }
        });
      }
    }
  }
</script>

<style>

</style>
