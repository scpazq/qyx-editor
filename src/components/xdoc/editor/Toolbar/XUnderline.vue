<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 下划线
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="下划线">
        <button class="x-editor-button"
                @click="handleClick">
            <icon type="text-underline" size="14"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XUnderline',
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
            window.tinymce.activeEditor.execCommand('Underline')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
