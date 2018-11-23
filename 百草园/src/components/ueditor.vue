<template>
  <div>
    <script id="editor" type="text/plain" ></script>
  </div>
</template>

<script>
import '../../static/ueditor/ueditor.config.js'
import '../../static/ueditor/ueditor.all.min.js'
import '../../static/ueditor/lang/zh-cn/zh-cn.js'
import '../../static/ueditor/ueditor.parse.min.js'

export default {
  props: {
    initData: {
      type: String
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    let _this = this
    let data = _this.initData
    _this.editor = UE.getEditor('editor', {
      initialContent: data,
      initialFrameHeight: 450,
      initialFrameWidth: '100%'
    })
  },
  methods: {
    getUEContent() {
      return this.editor.getContent()
    }
  },
  destroyed() {
    this.editor.destroy();
  }
}
</script>