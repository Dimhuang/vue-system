<template>
  <div id="home" class="layout">
      <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu :active-name="navName" theme="dark" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="mainIndex" @click.native="getPage('mainIndex')">main首页</MenuItem>
            <MenuItem name="mainList" @click.native="getPage('mainList')">main列表页</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{marginLeft: '200px'}">
        <!--<Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>-->
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}"> </Breadcrumb>
          <Card>
            <div :style="{height:contentHeight + 'px'}">
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
        contentHeight:'600'
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
        this.contentHeight = document.body.clientHeight - 32

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
</style>
