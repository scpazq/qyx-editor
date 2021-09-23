<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XUnorderedList
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="无序列表">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="list-two" size="16"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XUnorderedList',
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
            window.tinymce.activeEditor.execCommand('InsertUnorderedList')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
