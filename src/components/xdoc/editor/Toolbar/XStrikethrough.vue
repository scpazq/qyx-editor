<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 删除线
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="删除线">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="strikethrough" size="14"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XStrikethrough',
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
            window.tinymce.activeEditor.execCommand('Strikethrough')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
