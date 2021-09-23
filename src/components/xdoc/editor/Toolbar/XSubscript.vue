<!--
 * @Author: zhangqin
 * @Date: 2021-06-08 11:38:27
 * @LastEditTime: 2021-06-18 11:37:05
 * @Description: 上标
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="下标">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            X<sub>2</sub>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XSubscript',
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {
    },
    methods: {
        handleClick() {
            window.tinymce.activeEditor.execCommand('Subscript')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
