<!--
 * @Author: zhangqin
 * @Date: 2021-06-04 14:55:36
 * @LastEditTime: 2021-06-04 15:23:38
 * @Description: 添加连续空格
-->

<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="空格">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="square" size="14"/>
        </button>
    </a-tooltip>
</template>

<script>

export default {
    name: 'XNoBreaking',
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
            window.tinymce.activeEditor.execCommand('mceNonBreaking')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
