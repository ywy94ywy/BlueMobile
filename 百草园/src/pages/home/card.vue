<template>
  <Layout class="layout-main">
    <Breadcrumb class="layout-bread">
      <BreadcrumbItem>贺卡管理列表</BreadcrumbItem>
    </Breadcrumb>
    <Content class="layout-content">
      <div class="home">
        <Form ref="formInline" :model="formInline" inline>
          <FormItem>
            <span>贺卡名称</span>
            <Input v-model="formInline.cardName" placeholder="请输入..." style="width:150px">
            </Input>
          </FormItem>
          <FormItem>
            <span>分类</span>
            <Select style="width:100px" placeholder="请选择..." v-model="formInline.cardClassify">
              <Option value="b1">b1</Option>
            </Select>
          </FormItem>
          <FormItem>
            <span>角色</span>
            <Select style="width:100px" placeholder="请选择..." v-model="formInline.character">
              <Option value="c1">c1</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit">查询</Button>
          </FormItem>
        </Form>
        <Button type="primary" @click="addCard">添加新贺卡</Button>
        <Button type="primary" @click="deleteCard">删除贺卡</Button>
        <Table :columns="columns" :data="dataTable" class="table"></Table>
        <!-- <UEditor initData="123" ref="ueditor"></UEditor> -->
        <Modal v-model="modal1" title="添加新贺卡">
          <Form label-position="left" :label-width="80">
            <FormItem label="贺卡名称">
              <Input></Input>
            </FormItem>
            <FormItem label="贺卡分类">
              <Input></Input>
            </FormItem>
            <FormItem label="贺卡角色">
              <Input></Input>
            </FormItem>
            <FormItem label="贺卡角色">
              <Input></Input>
            </FormItem>
          </Form>
        </Modal>
        <Modal v-model="modal2" title="编辑用户信息">
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
      modal1: false,
      modal2: false,
      formInline: {
        cardName: '',
        cardClassify: '',
        character: ''
      },
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '贺卡名称',
          key: 'name'
        },
        {
          title: '贺卡分类',
          key: 'classify'
        },
        {
          title: '贺卡角色',
          key: 'character'
        },
        {
          title: '贺卡描述',
          key: 'description'
        },
        {
          title: '祝福语',
          key: 'greetings'
        },
        {
          title: '贺卡图片',
          key: 'picture'
        },
        {
          title: '送礼人数',
          key: 'number'
        },
        {
          title: '创建时间',
          key: 'datetime'
        },
        {
          title: '操作',
          key: 'curd',
          fixed: 'right',
          align: 'center',
          width: 80,
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
                  // on在哪来的？
                  on: {
                    click: () => {
                      this.modal2 = true
                    }
                  }
                },
                '编辑'
              )
            ])
          }
        }
      ],
      dataTable: [
        {
          id: 1,
          name: '小二',
          classify: '13888888888',
          character: 'sdadsasda',
          description: '3',
          greetings: '微信',
          picture: '微信',
          number: '微信',
          datetime: '2012-12-12',
          status: '启用'
        },
        {
          id: 2,
          name: '小二',
          classify: '13888888888',
          character: 'sdadsasda',
          description: '3',
          greetings: '微信',
          picture: '微信',
          number: '微信',
          datetime: '2012-12-12',
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
    addCard () {
      this.modal1 = true
      console.log(1)
    },
    deleteCard () {
      console.log(2)
    },
    ok () {
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
