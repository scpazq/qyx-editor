<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 撤销
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="撤销">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="return" size="16"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XUndo',
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
            window.tinymce.activeEditor.execCommand('Undo')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
