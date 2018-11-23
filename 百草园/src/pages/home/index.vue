<template>
  <Layout class="layout-main">
    <Breadcrumb class="layout-bread">
      <BreadcrumbItem>用户管理列表</BreadcrumbItem>
    </Breadcrumb>
    <Content class="layout-content">
      <div class="home">
        <Form ref="formInline" :model="formInline" inline>
          <FormItem prop="userName">
            <Input type="text" v-model="formInline.userName" placeholder="用户昵称" />
          </FormItem>
          <FormItem prop="phone">
            <Input type="text" v-model="formInline.phone" placeholder="手机号" />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit">搜索</Button>
          </FormItem>
        </Form>
        <Button type="primary">导出Excel</Button>
        <Table :columns="columns" :data="dataTable" class="table"></Table>
        <!-- <UEditor initData="123" ref="ueditor"></UEditor> -->
        <Modal v-model="modal" title="编辑用户信息" @on-ok="ok" @on-cancel="modal = false">
          <Form label-position="left" :label-width="80">
            <FormItem label="用户ID">
              123
            </FormItem>
            <FormItem label="昵称">
              <Input></Input>
            </FormItem>
            <FormItem label="联系电话">
              <Input></Input>
            </FormItem>
          </Form>
        </Modal>
      </div>
    </Content>
  </Layout>
</template>

<script>
// import UEditor from '../../components/ueditor.vue'
export default {
  // components: { UEditor },
  data () {
    return {
      modal: false,
      formInline: {
        userName: '',
        phone: ''
      },
      columns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '用户id',
          key: 'id'
        },
        {
          title: '昵称',
          key: 'nicheng'
        },
        {
          title: '手机号码',
          key: 'phone'
        },
        {
          title: '微信号',
          key: 'weixin'
        },
        {
          title: '送礼次数',
          key: 'songli'
        },
        {
          title: '用户类别',
          key: 'leibie'
        },
        {
          title: '注册时间',
          key: 'time'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '操作',
          key: 'curd',
          fixed: 'right',
          width: 130,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      console.log(params.index)
                      this.modal = true
                    }
                  }
                },
                '编辑'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      console.log(params.index)
                    }
                  }
                },
                '禁用'
              )
            ])
          }
        }
      ],
      dataTable: [
        {
          id: 1,
          nicheng: '小二',
          phone: '13888888888',
          weixin: 'sdadsasda',
          songli: '3',
          leibie: '微信',
          time: '2012-12-12',
          status: '启用'
        }
      ]
    }
  },

  created () {
    this.getList()
  },

  methods: {
    getList () {
      this.$http.get('/account/login').then(res => {
        console.log(res)
      })
    },

    handleSubmit () {
      console.log(this.formInline)
    },

    ok () {
      this.modal = false
      console.log(1)
    }
  }
}
</script>

<style scoped lang="less">
.home {
  .table {
    margin-top: 20px;
  }
}
</style>
