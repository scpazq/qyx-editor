<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 公式
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="公式">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="formula" size="14"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XFormula',
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
            window.tinymce.activeEditor.execCommand('xMathJax')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
