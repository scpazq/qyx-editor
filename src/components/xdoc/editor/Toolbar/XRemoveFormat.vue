<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 清除样式
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="清除格式">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="clear" size="16"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XRemoveFormat',
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
            window.tinymce.activeEditor.execCommand('RemoveFormat')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
