<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">百草味后台管理系统</div>
          <div class="layout-nav">
            <MenuItem name="user">
            <Icon type="ios-contact" />
            <span>王小二</span>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                用户管理
              </template>
              <MenuItem name="1-1">用户管理列表</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                商品管理
              </template>
              <MenuItem name="2-1">商品列表</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                贺卡管理
              </template>
              <MenuItem name="3-1">贺卡管理</MenuItem>
              <MenuItem name="3-2">贺卡角色设置</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                订单管理
              </template>
              <MenuItem name="4-1">订单管理</MenuItem>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                礼物记录
              </template>
              <MenuItem name="5-1">礼物记录</MenuItem>
            </Submenu>
            <Submenu name="6">
              <template slot="title">
                设置
              </template>
              <MenuItem name="6-1">设置</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <router-view />
      </Layout>
    </Layout>
  </div>
</template>

<style scoped lang="less">
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  .layout-logo {
    float: left;
    left: 20px;
    color: #fff;
    font-size: 20px;
  }
  .layout-nav {
    float: right;
    span,
    i {
      display: block;
      float: left;
    }
    i {
      margin-top: 20px;
      font-size: 18px;
    }
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    width: 0;
  }
}
</style>
