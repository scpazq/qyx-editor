<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 斜体
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="斜体">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="text-italic" size="14"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XItalic',
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
            window.tinymce.activeEditor.execCommand('Italic')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
