<!--
 * @Author: zhangqin
 * @Date: 2021-06-08 11:38:27
 * @LastEditTime: 2021-06-18 11:37:24
 * @Description: 上标
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="上标">
        <button class="x-editor-button"
                @click.prevent="handleClick">
                X<sup>2</sup>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XSuperscript',
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
            window.tinymce.activeEditor.execCommand('Superscript')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
