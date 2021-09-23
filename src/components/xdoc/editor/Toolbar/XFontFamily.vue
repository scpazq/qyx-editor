<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XFontFamily
-->
<template>
    <a-dropdown :trigger="['click']">
        <button class="x-editor-button">
            <span>微软雅黑</span>
            <down size="14"/>
        </button>
        <a-menu slot="overlay">
            <a-menu-item>微软雅黑</a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
export default {
    name: 'XFontFamily',
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
@import "style";
</style>
