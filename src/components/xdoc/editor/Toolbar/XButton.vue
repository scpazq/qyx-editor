<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-30
 * @description: XButton
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" :title="title">
        <button class="x-editor-button"
                :class="{'x-editor-button--active': state}"
                @click.prevent="handleClick">
            <slot></slot>
        </button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XButton',
    props: {
        editor: {
            type: Object,
            default: () => null
        },
        title: {
            type: String,
            default: ''
        },
        command: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            state: false
        }
    },
    computed: {},
    watch: {
        editor(editor) {
            if (!editor) return
            editor.formatter.formatChanged(this.command, (state) => {
                this.state = state
            })
        }
    },
    created() {

    },
    mounted() {
    },
    methods: {
        handleClick() {
            this.editor.execCommand(this.command)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
