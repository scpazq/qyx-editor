<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 有序列表
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="有序列表">
        <button class="x-editor-button"
                @click="handleClick">
            <icon type="ordered-list" size="16"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XOrderedList',
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
            window.tinymce.activeEditor.execCommand('InsertOrderedList')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
