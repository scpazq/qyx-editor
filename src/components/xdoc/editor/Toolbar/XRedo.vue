<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: 重做
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="重做">
        <button class="x-editor-button"
                @click.prevent="handleClick">
            <icon type="go-on" size="16"/>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XRedo',
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
            window.tinymce.activeEditor.execCommand('Redo')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
