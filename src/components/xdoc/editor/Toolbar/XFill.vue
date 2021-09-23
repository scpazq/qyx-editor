<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-31
 * @description: 填空
-->
<template>
    <a-tooltip placement="top" :trigger="['click','hover']" title="填空">
        <a-dropdown :trigger="['click']">
            <button class="x-editor-button">
                <icon type="fill" size="16"/>
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
    name: 'XFill',
    data() {
        return {
            list: [
                {icon: '', label: '填充框', command: 'xfillbox'},
                {icon: '', label: '填充线', command: 'xfillline'},
                {icon: '', label: '田字格', command: 'xfillmatt'},
                {icon: '', label: '文字+拼音', command: 'xfillruby'}
            ]
        }
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        handleClick(index) {
            const {command} = this.list[index]
            window.tinymce.activeEditor.execCommand(command)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
