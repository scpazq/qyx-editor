<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XAlign
-->
<template>
    <a-tooltip placement="top" :trigger="['click','hover']" title="对齐">
        <a-dropdown :trigger="['click']">
            <button class="x-editor-button">
                <icon type="align-text-left" size="16"/>
                <icon type="down" size="12"/>
            </button>
            <a-menu slot="overlay"
                    :selected-keys="[active]">
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
    name: 'XAlign',
    data() {
        return {
            list: [
                {icon: 'align-text-left', label: '左对齐', command: 'JustifyLeft'},
                {icon: 'align-text-center', label: '居中对齐', command: 'JustifyCenter'},
                {icon: 'align-text-right', label: '右对齐', command: 'JustifyRight'},
                {icon: 'align-text-both', label: '两端对齐', command: 'JustifyFull'}
            ],
            active: 0
        }
    },
    computed: {
        current() {
            const {list, active} = this
            return list[active]
        }
    },
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        handleClick(index) {
            if (this.active === index) return
            this.active = index
            const {command} = this.list[index]
            window.tinymce.activeEditor.execCommand(command)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
