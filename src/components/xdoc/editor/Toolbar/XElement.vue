<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-04-20
 * @description: 自定义html元素
-->
<template>
    <a-tooltip placement="top" :trigger="['click','hover']" title="自定义标签">
        <a-dropdown :trigger="['click']">
            <button class="x-editor-button">
                <icon type="HtmlFive" size="16"/>
                <icon type="down" size="12"/>
            </button>
            <a-menu slot="overlay">
                <a-menu-item v-for="(item,index) in list"
                             :key="index"
                             @click="handleClick(index)">
                    <icon :type="item.icon" size="14"/>
                    <span>{{ item.label }}</span>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XElement',
    data() {
        return {
            list: [
                {icon: '', label: '着重符', command: 'xdot'},
                {icon: '', label: '下划线', command: 'xuline'},
                {icon: '', label: '双下划线', command: 'xulines'},
                {icon: '', label: '波浪线', command: 'xuwave'},
                {icon: '', label: '双波浪线', command: 'xuwaves'},
                {icon: '', label: '下划线+波浪线', command: 'xulinewave'},
                {icon: '', label: '波浪线+下划线', command: 'xuwaveline'},
                {icon: '', label: '外边框', command: 'xbigbox'}
            ]
        }
    },
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        handleClick(index) {
            const {command} = this.list[index]
            window.tinymce.activeEditor.formatter.toggle(command);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
