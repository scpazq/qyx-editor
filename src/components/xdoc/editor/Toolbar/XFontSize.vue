<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XFontSize
-->
<template>
    <a-tooltip placement="top" :trigger="['click','hover']" title="字号">
        <a-dropdown :trigger="['click']">
            <button class="x-editor-button">
                <span>{{ current }}</span>
                <icon type="down" size="12"/>
            </button>
            <a-menu slot="overlay">
                <a-menu-item v-for="(item,index) in list"
                             :key="index"
                             @click="handleClick(item)">
                    {{ item }}
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XFontSize',
    data() {
        return {
            list: [12, 14, 16, 18],
            current: 14
        }
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        handleClick(record) {
            this.current = record
            window.tinymce.activeEditor.execCommand('FontSize', false, `${record}px`)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
