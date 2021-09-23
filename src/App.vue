<!--
 * @Author: your name
 * @Date: 2021-09-23 10:50:54
 * @LastEditTime: 2021-09-23 11:20:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qyx-editor\src\App.vue
-->
<template>
  <div id="app">
    <XEditorToolbar />
  </div>
</template>

<script>
import XEditorToolbar from './components/xdoc/editor/XEditorToolbar.vue'

export default {
  name: 'App',
  components: {
    XEditorToolbar
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
