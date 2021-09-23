<!--
 * @author: 孟祥涵
 * @email: 1056811341@qq.com
 * @date: 2021-03-29
 * @description: XBackground
-->
<template>
    <a-tooltip placement="top" :trigger="['hover','click']" title="背景颜色">
        <a-dropdown-button :trigger="['click']"
                           class="x-editor-button-set">
            <button class="x-editor-button">
                <icon type="background-color" size="16"/>
            </button>
            <icon slot="icon" type="down" size="12"/>
            <template slot="overlay">
                132412342
            </template>
        </a-dropdown-button>
    </a-tooltip>
</template>

<script>
export default {
    name: 'XBackground',
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
