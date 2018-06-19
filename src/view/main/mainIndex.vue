<template>
  <div id="mainIndex">
    <Dropdown class="m-main-index-drop">
      <Button type="primary">
        <span v-text="priceLabel"></span>
        <Icon type="arrow-down-b"></Icon>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem v-for="(p,index) in priceList" v-text="p.price" :key="index" @click.native="sortPrice(p.price,p.status)"></DropdownItem>
      </DropdownMenu>
    </Dropdown>
   <!-- <Table :columns="columns" :data="userList"></Table>
    <div style="text-align: center;margin-top: 20px">
      <Page :total="goodsTotal" @on-change="loadList" :page-size="8"></Page>
    </div>-->
    <div class="accessory-list-wrap">
      <div class="accessory-list col-4">
        <ul>
          <li v-for="items in userList">
            <div class="pic">
              <a href="#"><img src="items.productImage" alt=""></a>
            </div>
            <div class="main">
              <div class="name" v-text="items.productName"></div>
              <div class="price" v-text="items.salePrice"></div>
              <div class="btn-area">
                <a href="javascript:;" class="btn btn--m" @click.native="addCart(items)">加入购物车</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
        priceLevel:'all',
        priceLabel:'全部',
        priceList:[{price:'0-100',status:'0'},{price:'100-500',status:'1'},{price:'500-1000',status:'2'},{price:'1000-5000',status:'3'},{price:'全部',status:'all'}],
        currentPage:1
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
            this.currentPage = 1
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
      },
      sortPrice(price,status){
        this.priceLevel = status
        this.priceLabel = price
        this.goodsTotal = 0
        setTimeout(()=>{
          this.getAjax()
        },100)
      }
    }
  }
</script>

<style>
  .m-main-index-drop{
    margin-bottom: 16px;
  }




  .accessory-list > ul:after {
    visibility: hidden;
    display: block;
    content: " ";
    clear: both;
  }

  .accessory-list > ul > li {
    float: left;
    width: 23%;
    margin-right: 1.5873%;
    margin-bottom: 1.5873%;
    background: #fff;
    border: 2px solid #e9e9e9;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
  }

  .accessory-list > ul > li:hover {
    border-color: #ee7a23;
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-box-shadow: 0 0 10px #999;
    box-shadow: 0 0 10px #999;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
  }

  .accessory-list.col-4 > ul > li {
    width: 23.80952%;
    margin-right: 1.5873%;
    margin-bottom: 1.5873%;
  }

  .accessory-list.col-4 > ul > li:nth-child(4n) {
    margin-right: 0;
  }

  .accessory-list.col-5 > ul > li {
    width: 18.73016%;
    margin-right: 1.5873%;
    margin-bottom: 1.5873%;
  }

  .accessory-list.col-5 > ul > li:nth-child(5n) {
    margin-right: 0;
  }

  .accessory-list .pic {
    overflow: hidden;
  }

  .accessory-list .pic a {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  .accessory-list .pic img {
    width: 100%;
  }

  .accessory-list .main {
    padding: 20px 10px 10px 10px;
  }

  .accessory-list .main .name {
    height: 3em;
    line-height: 1.25em;
    padding-bottom: 10px;
    font-family: "moderat", sans-serif;
    font-weight: bold;
    overflow: hidden;
  }

  .accessory-list .main .price {
    float: left;
    line-height: 30px;
    color: #d1434a;
    font-size: 1.25em;
  }

  .accessory-list .main .quantity {
    float: right;
  }

  .accessory-list .main .btn-area {
    clear: both;
    padding-top: 10px;
  }

  .accessory-list .main .btn-area .btn {
    width: 100%;
  }

  @media only screen and (max-width: 991px) {
    .accessory-list.col-4 > ul > li {
      width: 32.27513%;
      margin-right: 1.5873%;
      margin-bottom: 1.5873%;
    }

    .accessory-list.col-4 > ul > li:nth-child(4n) {
      margin-right: 1.5873%;
    }

    .accessory-list.col-4 > ul > li:nth-child(3n) {
      margin-right: 0;
    }

    .accessory-list.col-5 > ul > li {
      width: 23.80952%;
      margin-right: 1.5873%;
      margin-bottom: 1.5873%;
    }

    .accessory-list.col-5 > ul > li:nth-child(5n) {
      margin-right: 20px;
    }

    .accessory-list.col-5 > ul > li:nth-child(4n) {
      margin-right: 0;
    }

    .accessory-list .main .name {
      font-size: 1.3rem;
    }

    .accessory-list .main .btn-area .btn {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 767px) {
    .accessory-list {
      font-size: 1.2rem;
    }

    .accessory-list.col-4 > ul > li, .accessory-list.col-5 > ul > li {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border: none;
      border-top: 1px solid #e9e9e9;
      border-bottom: 1px solid #e9e9e9;
    }

    .accessory-list.col-4 > ul > li:hover, .accessory-list.col-5 > ul > li:hover {
      border-color: none;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      -webkit-transition: none .5s ease-out;
      transition: none .5s ease-out;
    }

    .accessory-list .pic {
      float: left;
      width: 110px;
      height: 110px;
      border: 1px solid #e9e9e9;
    }

    .accessory-list .pic a {
      display: block;
      width: 100%;
      height: 100%;
      padding-bottom: 0;
    }

    .accessory-list .main {
      padding: 0 0 0 125px;
    }

    .accessory-list .main:after {
      visibility: hidden;
      display: block;
      content: " ";
      clear: both;
    }

    .accessory-list .main .price {
      float: none;
    }

    .accessory-list .main .quantity {
      float: left;
    }

    .accessory-list .main .name {
      height: auto;
      min-height: 50px;
    }

    .accessory-list .main .btn-area {
      padding: 0;
      clear: none;
      float: right;
    }

    .accessory-list .main .btn-area .btn {
      height: 30px;
      line-height: 30px;
      padding-left: .8em;
      padding-right: .8em;
      font-size: 1rem;
      letter-spacing: .1em;
    }
  }




</style>
