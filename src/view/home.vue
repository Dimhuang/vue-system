<template>
  <div id="home" class="layout">
      <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu :active-name="navName" theme="dark" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="mainIndex" @click.native="getPage('mainIndex')">商品页</MenuItem>
            <MenuItem name="mainList" @click.native="getPage('mainList')">购物车</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{marginLeft: '200px'}">
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <!--<div class="m-nav-item-box">-->
          <!--<Tag closable color="blue" v-for="(n,index) in labelLtem" :key="index">{{n.name}}</Tag>-->
        <!--</div>-->
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}"> </Breadcrumb>
          <Card>
            <div class="m-index-content" :style="{height:contentHeight + 'px'}">
              <router-view/>
            </div>
          </Card>
        </Content>
      </Layout>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data () {
      return {
        navName:'mainIndex',
        contentHeight:'',
        labelLtem:[{'name':'main首页','paths':'mainIndex'}]
      }
    },
    created() {
      this.changeItem(this.$route.name)
      this.getHeight()
    },
    methods: {
      getPage(name){
        this.$router.push({name: name })
        this.changeItem(name)
      },
      changeItem(name){
        this.navName = name
      },
      getHeight(){
        this.contentHeight = document.body.clientHeight - 133
      }
    }
  }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .m-index-content{
    overflow: hidden;
    overflow-y: auto;
  }
  .m-nav-item-box{
    padding:8px;
    background: #dfdfdf;
  }

</style>
