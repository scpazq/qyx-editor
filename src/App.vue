<!--
 * @Author: your name
 * @Date: 2021-09-23 10:50:54
 * @LastEditTime: 2021-09-23 16:45:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qyx-editor\src\App.vue
-->
<template>
  <div id="app">
    <XEditorToolbar />
    <XEditor />
  </div>
</template>

<script>
import XEditorToolbar from './components/xdoc/editor/XEditorToolbar.vue'
import XEditor from './components/xdoc/editor/XEditor.vue'

export default {
  name: 'App',
  components: {
    XEditorToolbar,
    XEditor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
