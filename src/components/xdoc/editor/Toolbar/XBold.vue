<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 加粗
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="加粗">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="text-bold" size="14"/>
        </button>
    </a-tooltip>
</template>

<script>

export default {
    name: 'XBold',
    props: {
        editor: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {
        handleClick() {
            window.tinymce.activeEditor.execCommand('Bold')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
