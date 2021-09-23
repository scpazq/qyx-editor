<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XEditorToolbarArea
-->
<template>
    <div class="x-editor-toolbar-area">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'XEditorToolbarArea',
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.x-editor-toolbar-area {
    height: 100%;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
    }
}
</style>
